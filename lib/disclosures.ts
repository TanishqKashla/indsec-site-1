/**
 * Disclosure downloads data layer.
 *
 * The "Corporate disclosure documents" section on the main /disclosures page is
 * managed by the client in the Sanity Studio at /studio and read here via GROQ.
 * Uploading a `corporateDocument` in the Studio makes it appear on the site
 * automatically — no code change or redeploy of content needed.
 */
import { client } from "@/sanity/lib/client";
import { formatFileSize } from "@/lib/formatFileSize";

export type CorporateDocument = {
  _id: string;
  title: string;
  description: string;
  href: string; // resolved PDF URL (uploaded asset or external)
  size?: string; // human-readable file size, e.g. "271 KB"
};

// Shared projection: an uploaded PDF (pdfFile) wins over an external pdfUrl.
// `sizeBytes` is read straight off the uploaded asset so the size pill is
// filled in automatically.
const CORPORATE_DOCUMENT_PROJECTION = /* groq */ `{
  _id,
  title,
  description,
  "href": coalesce(pdfFile.asset->url, pdfUrl),
  "sizeBytes": pdfFile.asset->size
}`;

type RawCorporateDocument = {
  _id: string;
  title?: string | null;
  description?: string | null;
  href?: string | null;
  sizeBytes?: number | null;
};

// Revalidate at most once a minute so Studio edits appear without a redeploy.
const FETCH_OPTIONS = { next: { revalidate: 60 } } as const;

export async function getCorporateDocuments(): Promise<CorporateDocument[]> {
  const query = /* groq */ `*[_type == "corporateDocument" && (defined(pdfFile.asset) || defined(pdfUrl))]
    | order(coalesce(order, 9999) asc, title asc) ${CORPORATE_DOCUMENT_PROJECTION}`;
  const raw = await client.fetch<RawCorporateDocument[]>(query, {}, FETCH_OPTIONS);
  return raw
    .filter((r): r is RawCorporateDocument & { href: string } => Boolean(r.href))
    .map((r) => ({
      _id: r._id,
      title: r.title?.trim() || "Untitled document",
      description: r.description ?? "",
      href: r.href,
      size: formatFileSize(r.sizeBytes),
    }));
}
