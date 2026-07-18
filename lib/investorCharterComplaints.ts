/**
 * Investor Charters & Complaints data layer.
 *
 * The grouped /disclosures/investor-charter-complaints page is managed by the
 * client in the Sanity Studio at /studio and read here via GROQ. Each
 * `investorCharterComplaint` document belongs to one section; this module returns
 * the documents already grouped into the sections' display order so the page
 * just maps over them.
 */
import { client } from "@/sanity/lib/client";
import { formatFileSize } from "@/lib/formatFileSize";
import {
  INVESTOR_CHARTER_SECTIONS,
  type InvestorCharterSection,
} from "@/sanity/lib/investorCharterSections";

export type InvestorCharterDoc = {
  _id: string;
  title: string;
  description: string;
  href: string; // resolved PDF URL (uploaded asset or external)
  size?: string; // human-readable file size, e.g. "304 KB"
};

export type InvestorCharterGroup = InvestorCharterSection & {
  docs: InvestorCharterDoc[];
};

// An uploaded PDF (pdfFile) wins over an external pdfUrl; the size is read
// straight off the uploaded asset so the size pill fills in automatically.
const INVESTOR_CHARTER_PROJECTION = /* groq */ `{
  _id,
  section,
  title,
  description,
  "href": coalesce(pdfFile.asset->url, pdfUrl),
  "sizeBytes": pdfFile.asset->size
}`;

type RawInvestorCharterDoc = {
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
 * All investor-charter / complaints documents, grouped into their sections in
 * display order. Empty sections are omitted so the page renders no stray
 * headings.
 */
export async function getInvestorCharterGroups(): Promise<
  InvestorCharterGroup[]
> {
  const query = /* groq */ `*[_type == "investorCharterComplaint" && (defined(pdfFile.asset) || defined(pdfUrl))]
    | order(coalesce(order, 9999) asc, title asc) ${INVESTOR_CHARTER_PROJECTION}`;
  const raw = await client.fetch<RawInvestorCharterDoc[]>(
    query,
    {},
    FETCH_OPTIONS,
  );

  return INVESTOR_CHARTER_SECTIONS.map((section) => ({
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
