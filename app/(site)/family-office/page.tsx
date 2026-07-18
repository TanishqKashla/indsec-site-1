import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealCard } from "@/components/RevealCard";

export const metadata: Metadata = {
  title: "Family Office Solutions",
  description:
    "Succession, trusts, tax & regulatory advisory, NRI/PIO/OCI assistance, and curated investment opportunities for surplus family wealth — all under one roof.",
};

const GROUPS = [
  {
    title: "Estate & Succession",
    image: "/whatwedo1.jpg",
    items: [
      "Succession planning",
      "Inheritance tax planning",
      "Family Trusts / Private Trusts",
      "Will",
      "Family charter",
      "Family settlements",
    ],
  },
  {
    title: "Wealth & Investments",
    image: "/whatwedo2.jpg",
    items: [
      "Dilution of non-core family assets",
      "Identifying investment opportunities for family surplus funds",
      "Advising on global asset investments, diversification, sale, etc.",
      "Management of strategic investments through implementation of financial reporting and other MIS",
    ],
  },
  {
    title: "Cross-border & Regulatory",
    image: "/whatwedo3.jpg",
    items: [
      "Assistance, Advisory and Support Services for NRIs / PIO / OCI including FEMA",
      "Regulatory and tax aspects for the above matters",
      "Restructuring / reorganizing of a family business",
      "Ensuring Tax and Regulatory compliances for the Family Office",
    ],
  },
];

export default function FamilyOfficePage() {
  return (
    <>
      <PageHero kicker="Lines of Business · 02" title="Family Office Solutions" />

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <h2 className="title-h2 text-center" style={{ color: "var(--color-navy-900)", marginBottom: 16 }}>
            One roof. Every dimension of family wealth.
          </h2>
          <p className="lead text-center">
            From succession structures and trust formation to surplus-fund
            deployment and cross-border compliance — Indsec acts as a single
            point of advisory and execution for promoter families.
          </p>
        </div>
      </section>

      {/* Groups of services — image cards, details on hover / tap */}
      <section className="section section--band">
        <div className="container">
          <SectionHeading title="What We Do" withRule />
          <p className="section__lead" style={{ marginTop: 0 }}>
            Hover or tap each area to see what it covers.
          </p>
          <div className="reveal-grid">
            {GROUPS.map((g) => (
              <RevealCard key={g.title} image={g.image} title={g.title} items={g.items} />
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section">
        <div className="container">
          <SectionHeading title="How We Engage" withRule />
          <div className="grid grid--4">
            <article className="pillar">
              <span className="pillar__icon" aria-hidden="true">①</span>
              <h3 className="pillar__title">Discovery</h3>
              <p className="pillar__text">A confidential review of family balance sheet, intent and structure.</p>
            </article>
            <article className="pillar">
              <span className="pillar__icon" aria-hidden="true">②</span>
              <h3 className="pillar__title">Blueprint</h3>
              <p className="pillar__text">A succession + investment blueprint with tax, FEMA and trust-law mapping.</p>
            </article>
            <article className="pillar">
              <span className="pillar__icon" aria-hidden="true">③</span>
              <h3 className="pillar__title">Implementation</h3>
              <p className="pillar__text">Trust formation, deeds, restructuring and capital deployment, end-to-end.</p>
            </article>
            <article className="pillar">
              <span className="pillar__icon" aria-hidden="true">④</span>
              <h3 className="pillar__title">Ongoing Oversight</h3>
              <p className="pillar__text">Periodic MIS, compliance monitoring and review with the family principals.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Confidentiality strip */}
      <section className="section section--cream">
        <div className="container">
          <div className="info-tip">
            <div className="info-tip__icon" aria-hidden="true">🔒</div>
            <div>
              <p className="info-tip__title">Confidential by Design</p>
              <p className="info-tip__body">
                Family Office mandates at Indsec are handled by a small,
                ring-fenced team under strict information barriers from
                broking and research desks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--skyline">
        <div className="container text-center">
          <h2 style={{ color: "#fff", marginBottom: 12 }}>Plan the next chapter of family wealth</h2>
          <p className="lead" style={{ color: "rgba(255,255,255,0.9)", maxWidth: 720, margin: "0 auto 24px" }}>
            Speak to our Family Office partners for a confidential introductory conversation.
          </p>
          <Link href="/contact" className="btn btn--white">Request a Conversation</Link>
        </div>
      </section>
    </>
  );
}
