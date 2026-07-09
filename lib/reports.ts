/**
 * Reports data layer.
 *
 * Content is managed by the client in the Sanity Studio at /studio and read
 * here via GROQ. Each report belongs to a category (Daily / Monthly / …) and a
 * series within it (the subcategory). The taxonomy lives in one shared module
 * so the Studio and the site never drift apart.
 */
import { client } from "@/sanity/lib/client";
import {
  buildReportTitle,
  getSubcategoryLabel,
} from "@/sanity/lib/reportTaxonomy";

// Re-export the taxonomy pieces the UI already imports from here.
export {
  CATEGORIES,
  getCategoryMeta,
  getSubcategoryLabel,
} from "@/sanity/lib/reportTaxonomy";
export type {
  CategoryMeta,
  ReportCategory,
  SubcategoryMeta,
} from "@/sanity/lib/reportTaxonomy";

import type { ReportCategory } from "@/sanity/lib/reportTaxonomy";

export type Report = {
  _id: string;
  title: string;
  slug: string;
  category: ReportCategory;
  subcategory: string; // series slug, e.g. "the-opening-bell"
  subcategoryLabel?: string; // resolved series name, e.g. "The Opening Bell"
  publishedDate: string; // ISO date, e.g. "2026-06-28"
  summary: string;
  pdfUrl: string;
  tags?: string[];
  featured?: boolean;
};

/* -------------------------------------------------------------------------- */
/* Sanity queries                                                              */
/* -------------------------------------------------------------------------- */

// Shared projection: raw fields for one `report` document.
// An uploaded PDF (pdfFile) wins over an external pdfUrl.
const REPORT_PROJECTION = /* groq */ `{
  _id,
  title,
  "slug": slug.current,
  category,
  subcategory,
  publishedDate,
  summary,
  "pdfUrl": coalesce(pdfFile.asset->url, pdfUrl),
  tags,
  featured
}`;

type RawReport = {
  _id: string;
  title?: string | null;
  slug?: string | null;
  category: ReportCategory;
  subcategory?: string | null;
  publishedDate: string;
  summary?: string | null;
  pdfUrl?: string | null;
  tags?: string[] | null;
  featured?: boolean | null;
};

// Fill in the derived title/series label so every consumer gets a ready value.
function mapReport(r: RawReport): Report {
  const subcategory = r.subcategory ?? "";
  return {
    _id: r._id,
    title:
      r.title?.trim() ||
      buildReportTitle(r.category, subcategory, r.publishedDate),
    slug: r.slug ?? "",
    category: r.category,
    subcategory,
    subcategoryLabel: getSubcategoryLabel(r.category, subcategory),
    publishedDate: r.publishedDate,
    summary: r.summary ?? "",
    pdfUrl: r.pdfUrl ?? "",
    tags: r.tags ?? undefined,
    featured: r.featured ?? undefined,
  };
}

// Revalidate at most once a minute so Studio edits appear without a redeploy.
const FETCH_OPTIONS = { next: { revalidate: 60 } } as const;

export async function getAllReports(): Promise<Report[]> {
  const query = /* groq */ `*[_type == "report" && defined(slug.current)]
    | order(publishedDate desc) ${REPORT_PROJECTION}`;
  const raw = await client.fetch<RawReport[]>(query, {}, FETCH_OPTIONS);
  return raw.map(mapReport);
}

export async function getReportBySlug(slug: string): Promise<Report | null> {
  const query = /* groq */ `*[_type == "report" && slug.current == $slug][0] ${REPORT_PROJECTION}`;
  const raw = await client.fetch<RawReport | null>(query, { slug }, FETCH_OPTIONS);
  return raw ? mapReport(raw) : null;
}

export async function getReportSlugs(): Promise<string[]> {
  const query = /* groq */ `*[_type == "report" && defined(slug.current)].slug.current`;
  return client.fetch<string[]>(query, {}, FETCH_OPTIONS);
}
