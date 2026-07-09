/**
 * Report taxonomy — the single source of truth for the 5 report categories and
 * the report series (subcategories) inside each one.
 *
 * Imported by both the Sanity schema/Studio (relative import) and the Next.js
 * front-end (via the `@/` alias in lib/reports.ts). Keep this file pure — no
 * React, no server-only imports — so both bundles can use it.
 */

export type ReportCategory =
  | "daily"
  | "monthly"
  | "quarterly"
  | "alpha-insights"
  | "strategy-reports";

export type SubcategoryMeta = { value: string; label: string };

export type CategoryMeta = {
  key: ReportCategory;
  label: string;
  color: string; // accent colour for the card band / badge
  blurb: string;
  subcategories: SubcategoryMeta[];
};

/** Display order + metadata for every category and its report series. */
export const CATEGORIES: CategoryMeta[] = [
  {
    key: "daily",
    label: "Daily",
    color: "#1B2A5E",
    blurb: "End-of-day market wrap and flows.",
    subcategories: [
      { value: "the-opening-bell", label: "The Opening Bell" },
      { value: "morning-market-tracker", label: "Morning Market Tracker" },
      { value: "nifty-technical-edge", label: "Nifty Technical Edge" },
    ],
  },
  {
    key: "monthly",
    label: "Monthly",
    color: "#9C1B1F",
    blurb: "Monthly industry and macro reports.",
    subcategories: [
      { value: "techno-funda", label: "Techno-Funda" },
      { value: "banking-sector-insights", label: "Banking Sector Insights" },
      { value: "premium-pulse", label: "Premium Pulse" },
      { value: "amfi-monthly-digest", label: "AMFI Monthly Digest" },
      { value: "metal-momentum", label: "Metal Momentum" },
      { value: "cement-pulse", label: "Cement Pulse" },
      { value: "auto-sales-volume-tracker", label: "Auto Sales Volume Tracker" },
    ],
  },
  {
    key: "quarterly",
    label: "Quarterly",
    color: "#2D6A4F",
    blurb: "Earnings previews and quarterly reviews.",
    subcategories: [
      { value: "earnings-preview", label: "Earnings Preview" },
      { value: "result-update", label: "Result Update" },
      { value: "result-summary", label: "Result Summary" },
    ],
  },
  {
    key: "alpha-insights",
    label: "Alpha Insights",
    color: "#9A6A00",
    blurb: "High-conviction ideas and thematic insights.",
    subcategories: [
      { value: "ipo-meet-note", label: "IPO Meet Note" },
      { value: "initiating-coverage", label: "Initiating Coverage" },
      { value: "thematic-report", label: "Thematic Report" },
    ],
  },
  {
    key: "strategy-reports",
    label: "Strategy Reports",
    color: "#4A5B98",
    blurb: "Long-form strategy and outlook.",
    subcategories: [
      { value: "budget-report", label: "Budget Report" },
      { value: "fpi-ownership-trends", label: "FPI Ownership Trends" },
    ],
  },
];

export function getCategoryMeta(key: ReportCategory): CategoryMeta {
  return CATEGORIES.find((c) => c.key === key) ?? CATEGORIES[0];
}

/** Map of category key -> its list of series, for filtered dropdowns. */
export const SUBCATEGORIES_BY_CATEGORY: Record<string, SubcategoryMeta[]> =
  Object.fromEntries(CATEGORIES.map((c) => [c.key, c.subcategories]));

/** Resolve a series slug to its display label. */
export function getSubcategoryLabel(
  category: string | undefined,
  subcategory: string | undefined,
): string | undefined {
  if (!subcategory) return undefined;
  const scoped = (category ? SUBCATEGORIES_BY_CATEGORY[category] : undefined)?.find(
    (s) => s.value === subcategory,
  );
  if (scoped) return scoped.label;
  // Fallback: the series may not match the category — search everywhere.
  for (const c of CATEGORIES) {
    const hit = c.subcategories.find((s) => s.value === subcategory);
    if (hit) return hit.label;
  }
  return subcategory;
}

/** Short date like "09 Jul 2026" from an ISO date, used in titles/slugs. */
export function formatReportDate(iso: string | undefined): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const day = String(d.getUTCDate()).padStart(2, "0");
  const month = d.toLocaleString("en-US", { month: "short", timeZone: "UTC" });
  return `${day} ${month} ${d.getUTCFullYear()}`;
}

/** Auto title, e.g. "The Opening Bell — 09 Jul 2026". */
export function buildReportTitle(
  category: string | undefined,
  subcategory: string | undefined,
  publishedDate: string | undefined,
): string {
  const series = getSubcategoryLabel(category, subcategory);
  const date = formatReportDate(publishedDate);
  if (series && date) return `${series} — ${date}`;
  return series || date || "Untitled report";
}
