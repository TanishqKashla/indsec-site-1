import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Lines of Business",
  description:
    "Three integrated lines under one roof — Institutional Broking, Family Office and GIFT City / PMS — all powered by Indsec's research engine and execution desk.",
};

const LOB = [
  {
    href: "/institutional-broking",
    label: "Institutional Broking",
    tag: "01",
    headline: "Insight, Integrity, Execution",
    blurb:
      "High-conviction research, seamless trade execution, and differentiated market access for FIIs, DIIs, mutual funds, AIFs, PMS and FPIs.",
    bullets: [
      "Equity Research",
      "Institutional Sales",
      "Trading & Execution",
      "Corporate Access",
      "Capital Markets — IPOs, QIPs, Block Deals",
    ],
  },
  {
    href: "/family-office",
    label: "Family Office",
    tag: "02",
    headline: "Every dimension of family wealth",
    blurb:
      "Succession, trusts, charters and settlements alongside surplus-fund deployment, cross-border advisory and tax/regulatory compliance for promoter families.",
    bullets: [
      "Succession & Estate Planning",
      "Family Trusts & Settlements",
      "Surplus-fund Investment Advisory",
      "Global Assets, NRI / PIO / OCI / FEMA",
      "Tax & Regulatory Compliance",
    ],
  },
  {
    href: "/gift-city",
    label: "GIFT City / PMS",
    tag: "03",
    headline: "India's IFSC, made accessible",
    blurb:
      "A regulated, dollar-denominated gateway into Indian capital markets for NRIs and global investors — alongside Indsec's discretionary PMS strategies.",
    bullets: [
      "IFSC-regulated GIFT City accounts",
      "PMS — quality & growth mandates",
      "Tax & FX efficient structure",
      "Inward remittance and custody",
      "Direct portfolio manager access",
    ],
  },
];

export default function LinesOfBusinessPage() {
  return (
    <>
      <PageHero kicker="What We Do" title="Our Lines of Business" />

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <p className="lead text-center">
            Indsec brings institutional broking, family office advisory and
            GIFT City access under one roof — sharing the same research
            engine, the same execution desk, and the same standard of
            compliance.
          </p>
        </div>
      </section>

      {/* Three lines, alternating layout */}
      <section className="section section--band">
        <div className="container">
          <SectionHeading title="Three Lines, One Standard" withRule />

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {LOB.map((l, i) => (
              <article
                key={l.href}
                className="pillar"
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr auto",
                  gap: 24,
                  alignItems: "center",
                  padding: 32,
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: 96, height: 96,
                    borderRadius: 12,
                    background:
                      i === 0
                        ? "var(--gradient-navy-crimson)"
                        : i === 1
                        ? "linear-gradient(135deg, #9C1B1F 0%, #C42830 100%)"
                        : "linear-gradient(135deg, #1B2A5E 0%, #2D3E78 100%)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                    fontWeight: 700,
                  }}
                >
                  {l.tag}
                </div>

                <div>
                  <p
                    className="fs-12"
                    style={{
                      color: "var(--color-crimson-600)",
                      textTransform: "uppercase",
                      letterSpacing: 1.4,
                      fontWeight: 600,
                      marginBottom: 4,
                    }}
                  >
                    {l.label}
                  </p>
                  <h3
                    className="title-h2"
                    style={{ color: "var(--color-navy-900)", marginBottom: 8 }}
                  >
                    {l.headline}
                  </h3>
                  <p className="fs-14 mb-3" style={{ color: "var(--color-text)" }}>
                    {l.blurb}
                  </p>
                  <ul
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                      padding: 0,
                      margin: 0,
                      listStyle: "none",
                    }}
                  >
                    {l.bullets.map((b) => (
                      <li
                        key={b}
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: "var(--color-navy-900)",
                          background: "var(--color-crimson-100)",
                          padding: "4px 10px",
                          borderRadius: 999,
                        }}
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={l.href} className="btn btn--crimson">
                  Explore →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why one roof */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Why one roof"
            lead="The three lines share infrastructure but operate under strict information barriers — clients get scale and specialisation without conflict."
            withRule
          />
          <div className="grid grid--3">
            <article className="pillar">
              <span className="pillar__icon" aria-hidden="true">
                {/* magnifying glass — single research engine */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </span>
              <h3 className="pillar__title">Shared Research Engine</h3>
              <p className="pillar__text">
                A single high-conviction view feeds institutional clients,
                family offices and PMS — same primary research, three
                delivery modes.
              </p>
            </article>
            <article className="pillar">
              <span className="pillar__icon" aria-hidden="true">
                {/* lightning bolt — speed of the execution desk */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 4 14h7l-2 8 9-12h-7l2-8Z" />
                </svg>
              </span>
              <h3 className="pillar__title">One Execution Desk</h3>
              <p className="pillar__text">
                Institutional-grade dealing capability available to every
                line — speed, discretion and liquidity sourcing.
              </p>
            </article>
            <article className="pillar">
              <span className="pillar__icon" aria-hidden="true">
                {/* lock — ring-fenced information barriers */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="11" width="16" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
              </span>
              <h3 className="pillar__title">Information Barriers</h3>
              <p className="pillar__text">
                Strict separation between research, broking and family
                office — each mandate ring-fenced and SEBI-compliant.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--skyline">
        <div className="container text-center">
          <h2 style={{ color: "#fff", marginBottom: 12 }}>
            Not sure which desk you need?
          </h2>
          <p
            className="lead"
            style={{ color: "rgba(255,255,255,0.9)", maxWidth: 720, margin: "0 auto 24px" }}
          >
            Tell us about your mandate — we'll route you to the right team and
            respond the same trading day.
          </p>
          <Link href="/contact" className="btn btn--white">
            Speak to Our Desk
          </Link>
        </div>
      </section>
    </>
  );
}
