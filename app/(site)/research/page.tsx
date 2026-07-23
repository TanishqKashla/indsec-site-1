import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ArrowIcon } from "@/components/ArrowIcon";

export const metadata: Metadata = {
  title: "Research & Reports",
  description:
    "Indsec research — daily market wraps, monthly and quarterly reports, alpha insights and strategy reports. Read and download our publicly available research.",
};

const RESEARCH_DISCLOSURES = "/disclosures/research-disclaimer-and-disclosures";

const RESEARCH_DELIVERABLES = [
  {
    title: "Daily",
    items: ["The Opening Bell", "Morning Market Tracker", "Nifty Technical Edge"],
  },
  {
    title: "Monthly",
    columns: [
      ["Techno-Funda", "Banking Sector Insights", "Premium Pulse"],
      ["AMFI Monthly Digest", "Metal Momentum", "Cement Pulse", "Auto Sales Volume Tracker"],
    ],
  },
  {
    title: "Quarterly",
    items: ["Earnings Preview", "Result Update", "Result Summary"],
  },
  {
    title: "Alpha Insights",
    items: ["IPO Meet Note", "Initiating Coverage", "Thematic Report"],
  },
  {
    title: "Strategy Reports",
    items: ["Budget Report", "FPI Ownership Trends"],
  },
];

export default async function ResearchPage() {
  return (
    <>
      <PageHero kicker="Research" title="Quality over quantity, conviction over noise" />

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <p className="lead text-center research-intro__text">
            Indsec research is built for institutional decision-making. We cover
            the sectors that move portfolios deeply. Every note is back-stopped
            by primary channel checks, management access and our trading desk&apos;s
            market read.
          </p>
        </div>
      </section>

      {/* Research deliverables */}
      <section className="section section--band">
        <div className="container">
          <div className="section-heading section-heading--center" style={{ marginBottom: 24 }}>
            <h2 className="section-heading__title">Our Research Team Deliverables</h2>
            <p className="section-heading__lead research-section__lead">
              A quick snapshot of the research notes and reports we publish across daily,
              monthly, quarterly and thematic coverage themes.
            </p>
          </div>

          <div className="deliverables__grid">
            {RESEARCH_DELIVERABLES.map((group) => (
              <article key={group.title} className="deliverables__card">
                <div className="deliverables__header">
                  <h3 className="deliverables__title">{group.title}</h3>
                </div>

                {group.columns ? (
                  <div className="deliverables__columns">
                    {group.columns.map((column, index) => (
                      <ul key={`${group.title}-${index}`} className="deliverables__list">
                        {column.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ))}
                  </div>
                ) : (
                  <ul className="deliverables__list">
                    {group.items?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          <div className="deliverables__cta">
            <p>
              In order to receive the above reports on your email, please drop in an email at{" "}
              <a href="mailto:query_research@indsec.co.in">query_research@indsec.co.in</a>.
            </p>
          </div>
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
                Every Indsec research note carries the analyst&apos;s
                certifications and the firm&apos;s conflict-of-interest disclosures
                per SEBI regulations.{" "}
                <Link href={RESEARCH_DISCLOSURES}>
                  Research Disclaimer &amp; Disclosures →
                </Link>{" "}
                · <Link href="/disclosures">Disclosures <ArrowIcon /></Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
