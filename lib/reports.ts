/**
 * Reports data layer.
 *
 * Phase 1 (current): serves realistic SAMPLE_REPORTS so the public reports
 * portal is fully navigable without any backend.
 *
 * Phase 2 (Sanity): replace the bodies of getAllReports / getReportBySlug
 * with GROQ queries via next-sanity. The Report shape and the rest of the UI
 * stay exactly the same, so this is a one-file swap. See lib/sanity (to be
 * added) and the `report` schema.
 */

export type ReportCategory =
  | "daily"
  | "monthly"
  | "quarterly"
  | "alpha-insights"
  | "strategy-reports";

export type Report = {
  _id: string;
  title: string;
  slug: string;
  category: ReportCategory;
  publishedDate: string; // ISO date, e.g. "2026-06-28"
  summary: string;
  pdfUrl: string;
  tags?: string[];
  featured?: boolean;
};

export type CategoryMeta = {
  key: ReportCategory;
  label: string;
  color: string; // accent colour for the card band / badge
  blurb: string;
};

/** Display order + metadata for every category. */
export const CATEGORIES: CategoryMeta[] = [
  { key: "daily", label: "Daily", color: "#1B2A5E", blurb: "End-of-day market wrap and flows." },
  { key: "monthly", label: "Monthly", color: "#9C1B1F", blurb: "Monthly industry and macro reports." },
  { key: "quarterly", label: "Quarterly", color: "#2D6A4F", blurb: "Earnings previews and quarterly reviews." },
  { key: "alpha-insights", label: "Alpha Insights", color: "#9A6A00", blurb: "High-conviction ideas and thematic insights." },
  { key: "strategy-reports", label: "Strategy Reports", color: "#4A5B98", blurb: "Long-form strategy and outlook." },
];

export function getCategoryMeta(key: ReportCategory): CategoryMeta {
  return CATEGORIES.find((c) => c.key === key) ?? CATEGORIES[0];
}

/* -------------------------------------------------------------------------- */
/* Sample data (Phase 1)                                                       */
/* -------------------------------------------------------------------------- */

// Placeholder PDFs so the embedded viewer shows real documents in the demo.
const SAMPLE_PDF_A = "/documents/PMS%20Disclosure%20Document.pdf";
const SAMPLE_PDF_B = "/documents/Anti%20Money%20Laundering%20(PMLA)%20Policy.pdf";
const SAMPLE_PDF_C = "/documents/Indsec%20-%20Investor%20Complaint%20Process.pdf";

const SAMPLE_REPORTS: Report[] = [
  {
    _id: "s1",
    title: "Market Wrap — 28 Jun 2026",
    slug: "market-wrap-28-jun-2026",
    category: "daily",
    publishedDate: "2026-06-28",
    summary: "Closing levels, sector flows and the trades that moved the tape.",
    pdfUrl: SAMPLE_PDF_A,
    tags: ["Nifty", "Bank Nifty", "FII flows"],
    featured: true,
  },
  {
    _id: "s2",
    title: "Market Wrap — 27 Jun 2026",
    slug: "market-wrap-27-jun-2026",
    category: "daily",
    publishedDate: "2026-06-27",
    summary: "Indices ended mixed; metals led, IT lagged on global cues.",
    pdfUrl: SAMPLE_PDF_B,
    tags: ["Metals", "IT"],
  },
  {
    _id: "s3",
    title: "Banking & Financials — Monthly Review",
    slug: "banking-financials-monthly-review-jun-2026",
    category: "monthly",
    publishedDate: "2026-06-20",
    summary: "Credit growth, NIM trajectory and asset-quality trends across our covered banks.",
    pdfUrl: SAMPLE_PDF_C,
    tags: ["Banks", "NBFC"],
    featured: true,
  },
  {
    _id: "s4",
    title: "Auto & Ancillaries — Monthly Channel Check",
    slug: "auto-ancillaries-monthly-channel-check-jun-2026",
    category: "monthly",
    publishedDate: "2026-06-15",
    summary: "Dealer inventory, demand pulse and margin build-up heading into the festive run-up.",
    pdfUrl: SAMPLE_PDF_A,
    tags: ["Auto"],
  },
  {
    _id: "s5",
    title: "Q1 FY26 Earnings Preview",
    slug: "q1-fy26-earnings-preview",
    category: "quarterly",
    publishedDate: "2026-06-10",
    summary: "Sector-wise expectation matrix ahead of the results season.",
    pdfUrl: SAMPLE_PDF_B,
    tags: ["Earnings", "FY26"],
    featured: true,
  },
  {
    _id: "s6",
    title: "Q4 FY25 Results Wrap",
    slug: "q4-fy25-results-wrap",
    category: "quarterly",
    publishedDate: "2026-05-12",
    summary: "What beat, what missed, and where estimates are heading.",
    pdfUrl: SAMPLE_PDF_C,
    tags: ["Earnings", "FY25"],
  },
  {
    _id: "s7",
    title: "Alpha Insights — High-Conviction Ideas",
    slug: "alpha-insights-high-conviction-ideas-jun-2026",
    category: "alpha-insights",
    publishedDate: "2026-06-22",
    summary: "Our top long ideas with entry levels, targets and the thesis in brief.",
    pdfUrl: SAMPLE_PDF_A,
    tags: ["Ideas", "Long"],
    featured: true,
  },
  {
    _id: "s8",
    title: "Alpha Insights — Emerging Themes Watch",
    slug: "alpha-insights-emerging-themes-watch",
    category: "alpha-insights",
    publishedDate: "2026-06-05",
    summary: "Early identification of secular themes before they hit consensus.",
    pdfUrl: SAMPLE_PDF_B,
    tags: ["Thematic"],
  },
  {
    _id: "s9",
    title: "India Strategy — H2 2026 Outlook",
    slug: "india-strategy-h2-2026-outlook",
    category: "strategy-reports",
    publishedDate: "2026-06-18",
    summary: "Rates, currency, fiscal and global capital-flow framework for India.",
    pdfUrl: SAMPLE_PDF_C,
    tags: ["Macro", "Strategy"],
    featured: true,
  },
  {
    _id: "s10",
    title: "Sector Deep Dive — Capital Goods",
    slug: "sector-deep-dive-capital-goods",
    category: "strategy-reports",
    publishedDate: "2026-05-28",
    summary: "Long-form research on the capex cycle and order-book visibility.",
    pdfUrl: SAMPLE_PDF_A,
    tags: ["Capital Goods", "Capex"],
  },
  {
    _id: "s11",
    title: "Market Wrap — 26 Jun 2026",
    slug: "market-wrap-26-jun-2026",
    category: "daily",
    publishedDate: "2026-06-26",
    summary: "Broad-based buying lifted mid-caps; breadth strongly positive.",
    pdfUrl: SAMPLE_PDF_B,
    tags: ["Mid-cap"],
  },
  {
    _id: "s12",
    title: "Pharma & Healthcare — Monthly Review",
    slug: "pharma-healthcare-monthly-review-jun-2026",
    category: "monthly",
    publishedDate: "2026-06-08",
    summary: "US generics pricing, domestic formulations growth and regulatory watch.",
    pdfUrl: SAMPLE_PDF_C,
    tags: ["Pharma"],
  },
];

/* -------------------------------------------------------------------------- */
/* Public API (swap these bodies for Sanity in Phase 2)                        */
/* -------------------------------------------------------------------------- */

function byDateDesc(a: Report, b: Report) {
  return a.publishedDate < b.publishedDate ? 1 : -1;
}

export async function getAllReports(): Promise<Report[]> {
  return [...SAMPLE_REPORTS].sort(byDateDesc);
}

export async function getReportBySlug(slug: string): Promise<Report | null> {
  return SAMPLE_REPORTS.find((r) => r.slug === slug) ?? null;
}

export async function getReportSlugs(): Promise<string[]> {
  return SAMPLE_REPORTS.map((r) => r.slug);
}
