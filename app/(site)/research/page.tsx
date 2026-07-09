import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ReportsExplorer } from "@/components/ReportsExplorer";
import { getAllReports } from "@/lib/reports";

export const metadata: Metadata = {
  title: "Research & Reports",
  description:
    "Indsec research — daily market wraps, monthly and quarterly reports, alpha insights and strategy reports. Read and download our publicly available research.",
};

const RESEARCH_DISCLOSURES = "/disclosures/research-disclaimer-and-disclosures";

export default async function ResearchPage() {
  const reports = await getAllReports();

  return (
    <>
      <PageHero kicker="Research" title="Quality over quantity, conviction over noise" />

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <p className="lead text-center">
            Indsec research is built for institutional decision-making. We cover
            the sectors that move portfolios deeply. Every note is back-stopped
            by primary channel checks, management access and our trading desk&apos;s
            market read.
          </p>
        </div>
      </section>

      {/* Reports library */}
      <section className="section section--band" id="reports">
        <div className="container">
          <SectionHeading
            title="Reports Library"
            lead="Browse our publicly available research by category. Open any report to read it on-site or download the PDF."
            withRule
          />
          <ReportsExplorer reports={reports} />
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
                · <Link href="/disclosures">All disclosures →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
