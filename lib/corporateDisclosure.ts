/**
 * Corporate Disclosure data layer.
 *
 * The grouped /disclosures/corporate-disclosure page is managed by the client in
 * the Sanity Studio at /studio and read here via GROQ. Each `corporateDisclosure`
 * document belongs to one section; this module returns the documents already
 * grouped into the sections' display order so the page just maps over them.
 */
import { client } from "@/sanity/lib/client";
import { formatFileSize } from "@/lib/formatFileSize";
import {
  CORPORATE_DISCLOSURE_SECTIONS,
  type CorporateDisclosureSection,
} from "@/sanity/lib/corporateDisclosureSections";

export type CorporateDisclosureDoc = {
  _id: string;
  title: string;
  description: string;
  href: string; // resolved PDF URL (uploaded asset or external)
  size?: string; // human-readable file size, e.g. "521 KB"
};

export type CorporateDisclosureGroup = CorporateDisclosureSection & {
  docs: CorporateDisclosureDoc[];
};

// An uploaded PDF (pdfFile) wins over an external pdfUrl; the size is read
// straight off the uploaded asset so the size pill fills in automatically.
const CORPORATE_DISCLOSURE_PROJECTION = /* groq */ `{
  _id,
  section,
  title,
  description,
  "href": coalesce(pdfFile.asset->url, pdfUrl),
  "sizeBytes": pdfFile.asset->size
}`;

type RawCorporateDisclosureDoc = {
  _id: string;
  section?: string | null;
  title?: string | null;
  description?: string | null;
  href?: string | null;
  sizeBytes?: number | null;
};

// Revalidate at most once a minute so Studio edits appear without a redeploy.
const FETCH_OPTIONS = { next: { revalidate: 60 } } as const;

/**
 * All corporate-disclosure documents, grouped into their sections in display
 * order. Empty sections are omitted so the page renders no stray headings.
 */
export async function getCorporateDisclosureGroups(): Promise<
  CorporateDisclosureGroup[]
> {
  const query = /* groq */ `*[_type == "corporateDisclosure" && (defined(pdfFile.asset) || defined(pdfUrl))]
    | order(coalesce(order, 9999) asc, title asc) ${CORPORATE_DISCLOSURE_PROJECTION}`;
  const raw = await client.fetch<RawCorporateDisclosureDoc[]>(
    query,
    {},
    FETCH_OPTIONS,
  );

  return CORPORATE_DISCLOSURE_SECTIONS.map((section) => ({
    ...section,
    docs: raw
      .filter((r) => r.section === section.key && r.href)
      .map((r) => ({
        _id: r._id,
        title: r.title?.trim() || "Untitled document",
        description: r.description ?? "",
        href: r.href as string,
        size: formatFileSize(r.sizeBytes),
      })),
  })).filter((group) => group.docs.length > 0);
}
