import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Research & Reports",
  description:
    "Indsec research — weekly stock recommendations, sector deep-dives, IPO notes, earnings previews and a daily market wrap, with a quality-over-quantity coverage philosophy.",
};

/* Real Indsec destinations — research reports sit behind a client login. */
const RESEARCH_PORTAL = "https://www.indsec.co.in/research-details";
const RESEARCH_DISCLOSURES =
  "https://www.indsec.co.in/researchdisclaimeranddisclosures";
const RESEARCH_QUERY_EMAIL = "query_research@indsec.co.in";

const REPORTS = [
  { tag: "Daily", title: "Market Wrap", date: "Today", blurb: "Closing levels, sector flows and the trades that moved the tape." },
  { tag: "Weekly", title: "Stock Recommendations", date: "This week", blurb: "Top high-conviction long and tactical ideas with target levels." },
  { tag: "Monthly", title: "Industry Reports", date: "This month", blurb: "Bottom-up channel checks and earnings build-ups across our covered sectors." },
  { tag: "Quarterly", title: "Earnings Preview", date: "Q-1", blurb: "Sector-wise expectation matrix ahead of results season." },
  { tag: "Thematic", title: "Sector Deep Dives", date: "Latest", blurb: "Long-form research on India-specific structural themes." },
  { tag: "IPO", title: "IPO Notes", date: "Live", blurb: "Subscription views, peer comparables and listing-day strategy." },
  { tag: "Macro", title: "Macro-economic Outlook", date: "Updated monthly", blurb: "Rates, currency, fiscal and global capital-flow framework for India." },
  { tag: "Thematic", title: "Emerging Themes Watch", date: "Ongoing", blurb: "Early identification of secular themes before they hit consensus." },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero kicker="Research" title="Quality over quantity, conviction over noise" />

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <p className="lead text-center">
            Indsec research is built for institutional decision-making. We
            cover the sectors that move portfolios — deeply — and skip the
            ones that don't. Every note is back-stopped by primary channel
            checks, management access and our trading desk's market read.
          </p>
        </div>
      </section>

      {/* Research Edge */}
      <section className="section section--band">
        <div className="container">
          <SectionHeading title="Our Research Edge" withRule />
          <div className="grid grid--4">
            {[
              "Weekly stock recommendations",
              "Monthly industry reports",
              "Sector deep dives",
              "Early identification of emerging themes",
              "Daily Market Wrap",
              "IPO notes",
              "Quarterly Earnings preview",
              "Macro-economic outlook",
            ].map((r) => (
              <article key={r} className="pillar">
                <span className="pillar__icon" aria-hidden="true">▤</span>
                <h3 className="pillar__title">{r}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reports library */}
      <section className="section" id="reports">
        <div className="container">
          <SectionHeading title="Reports Library" withRule />
          <div className="grid grid--3">
            {REPORTS.map((r) => (
              <article key={r.title} className="card">
                <div className="card__body" style={{ padding: 24 }}>
                  <span
                    className="fs-12"
                    style={{
                      display: "inline-block",
                      padding: "4px 10px",
                      borderRadius: 999,
                      background: "var(--color-crimson-100)",
                      color: "var(--color-crimson-600)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      marginBottom: 12,
                    }}
                  >
                    {r.tag}
                  </span>
                  <h3 className="title-h4" style={{ color: "var(--color-navy-900)", textAlign: "left", marginBottom: 4 }}>{r.title}</h3>
                  <p className="fs-12 muted mb-3">{r.date}</p>
                  <p className="fs-14" style={{ marginBottom: 16 }}>{r.blurb}</p>
                  <a
                    href={RESEARCH_PORTAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline-crimson btn--sm"
                  >
                    Read on portal ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="section section--cream">
        <div className="container">
          <SectionHeading
            title="Access Research"
            lead="Existing clients read the full library on the Indsec research portal. New institutional clients can request to be added to our secure distribution."
            withRule
          />
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <a
              href={RESEARCH_PORTAL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--crimson"
            >
              Open Research Portal ↗
            </a>
            <Link href="/contact" className="btn btn--outline-crimson">
              Request Distribution Access
            </Link>
          </div>
          <p className="fs-14 muted text-center" style={{ marginTop: 16 }}>
            Research queries:{" "}
            <a href={`mailto:${RESEARCH_QUERY_EMAIL}`}>{RESEARCH_QUERY_EMAIL}</a>
          </p>
        </div>
      </section>

      {/* Disclosures pointer */}
      <section className="section">
        <div className="container">
          <div className="info-tip">
            <div className="info-tip__icon" aria-hidden="true">⚖</div>
            <div>
              <p className="info-tip__title">Research Disclosures</p>
              <p className="info-tip__body">
                Every Indsec research note carries the analyst's
                certifications and the firm's conflict-of-interest disclosures
                per SEBI regulations.{" "}
                <a
                  href={RESEARCH_DISCLOSURES}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Research Disclaimer &amp; Disclosures ↗
                </a>{" "}
                · <Link href="/investor-relations#disclosures">All disclosures →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
