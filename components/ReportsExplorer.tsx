"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  CATEGORIES,
  getCategoryMeta,
  type Report,
  type ReportCategory,
} from "@/lib/reports";

const PAGE_SIZE = 9;

type Filter = "all" | ReportCategory;

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

/* Small category icon set (lucide-style). */
function CategoryIcon({ category }: { category: ReportCategory }) {
  const paths: Record<ReportCategory, React.ReactNode> = {
    daily: (
      <>
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z" />
      </>
    ),
    monthly: (
      <>
        <path d="M8 2v4M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </>
    ),
    quarterly: (
      <>
        <path d="M8 2v4M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </>
    ),
    "alpha-insights": (
      <>
        <path d="M9 18h6M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
      </>
    ),
    "strategy-reports": (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
  };
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {paths[category]}
    </svg>
  );
}

export function ReportsExplorer({ reports }: { reports: Report[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return reports.filter((r) => {
      if (filter !== "all" && r.category !== filter) return false;
      if (!q) return true;
      return (
        r.title.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q) ||
        (r.tags ?? []).some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [reports, filter, query]);

  const shown = filtered.slice(0, visible);

  function changeFilter(next: Filter) {
    setFilter(next);
    setVisible(PAGE_SIZE);
  }

  return (
    <div>
      {/* Controls */}
      <div className="reports__controls">
        <div className="reports__tabs" role="tablist" aria-label="Report categories">
          <button
            type="button"
            role="tab"
            aria-selected={filter === "all"}
            className={`reports__tab${filter === "all" ? " is-active" : ""}`}
            onClick={() => changeFilter("all")}
          >
            All
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              type="button"
              role="tab"
              aria-selected={filter === c.key}
              className={`reports__tab${filter === c.key ? " is-active" : ""}`}
              onClick={() => changeFilter(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="reports__search">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisible(PAGE_SIZE);
            }}
            placeholder="Search reports…"
            aria-label="Search reports"
          />
        </div>
      </div>

      {/* Results */}
      {shown.length === 0 ? (
        <p className="reports__empty">No reports match your search.</p>
      ) : (
        <div className="reports__grid">
          {shown.map((r) => {
            const meta = getCategoryMeta(r.category);
            return (
              <Link
                key={r._id}
                href={`/research/${r.slug}`}
                className="report-card"
                style={{ ["--cat" as string]: meta.color }}
              >
                <div className="report-card__band">
                  <span className="report-card__icon" aria-hidden="true">
                    <CategoryIcon category={r.category} />
                  </span>
                  <span className="report-card__cat">{meta.label}</span>
                </div>
                <div className="report-card__body">
                  <time className="report-card__date" dateTime={r.publishedDate}>
                    {formatDate(r.publishedDate)}
                  </time>
                  <h3 className="report-card__title">{r.title}</h3>
                  <p className="report-card__summary">{r.summary}</p>
                  <span className="report-card__cta">
                    View report <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Load more */}
      {visible < filtered.length && (
        <div className="text-center" style={{ marginTop: 32 }}>
          <button
            type="button"
            className="btn btn--outline-crimson"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
          >
            Load more reports
          </button>
        </div>
      )}
    </div>
  );
}
