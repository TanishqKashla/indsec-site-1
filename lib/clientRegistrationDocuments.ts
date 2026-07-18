/**
 * Client Registration Documents data layer.
 *
 * The grouped /disclosures/client-registration-document page is managed by the
 * client in the Sanity Studio at /studio and read here via GROQ. Each
 * `clientRegistrationDoc` belongs to one section; this module returns the
 * documents already grouped into the sections' display order so the page just
 * maps over them.
 */
import { client } from "@/sanity/lib/client";
import { formatFileSize } from "@/lib/formatFileSize";
import {
  CLIENT_REGISTRATION_SECTIONS,
  type ClientRegistrationKind,
  type ClientRegistrationSection,
} from "@/sanity/lib/clientRegistrationSections";

export type { ClientRegistrationKind } from "@/sanity/lib/clientRegistrationSections";

export type ClientRegistrationDoc = {
  _id: string;
  title: string;
  description: string;
  href: string; // resolved file URL (uploaded asset) or external URL
  kind: ClientRegistrationKind;
  size?: string; // human-readable file size, e.g. "1.4 MB"
};

export type ClientRegistrationGroup = ClientRegistrationSection & {
  docs: ClientRegistrationDoc[];
};

// An uploaded file wins over an external url; the size is read straight off the
// uploaded asset so the size pill fills in automatically.
const CLIENT_REGISTRATION_PROJECTION = /* groq */ `{
  _id,
  section,
  title,
  description,
  kind,
  "href": coalesce(file.asset->url, url),
  "sizeBytes": file.asset->size
}`;

type RawClientRegistrationDoc = {
  _id: string;
  section?: string | null;
  title?: string | null;
  description?: string | null;
  kind?: string | null;
  href?: string | null;
  sizeBytes?: number | null;
};

function normalizeKind(kind?: string | null): ClientRegistrationKind {
  return kind === "ZIP" || kind === "Page" ? kind : "PDF";
}

// Revalidate at most once a minute so Studio edits appear without a redeploy.
const FETCH_OPTIONS = { next: { revalidate: 60 } } as const;

/**
 * All client-registration documents, grouped into their sections in display
 * order. Empty sections are omitted so the page renders no stray headings.
 */
export async function getClientRegistrationGroups(): Promise<
  ClientRegistrationGroup[]
> {
  const query = /* groq */ `*[_type == "clientRegistrationDoc" && (defined(file.asset) || defined(url))]
    | order(coalesce(order, 9999) asc, title asc) ${CLIENT_REGISTRATION_PROJECTION}`;
  const raw = await client.fetch<RawClientRegistrationDoc[]>(
    query,
    {},
    FETCH_OPTIONS,
  );

  return CLIENT_REGISTRATION_SECTIONS.map((section) => ({
    ...section,
    docs: raw
      .filter((r) => r.section === section.key && r.href)
      .map((r) => ({
        _id: r._id,
        title: r.title?.trim() || "Untitled document",
        description: r.description ?? "",
        href: r.href as string,
        kind: normalizeKind(r.kind),
        size: formatFileSize(r.sizeBytes),
      })),
  })).filter((group) => group.docs.length > 0);
}
