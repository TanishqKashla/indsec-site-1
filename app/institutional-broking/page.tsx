import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Institutional Broking",
  description:
    "High-conviction equity research, sales & trading, corporate access and capital markets support — institutional broking built on Insight, Integrity and Execution.",
};

const SERVICES = [
  {
    title: "Equity Research",
    blurb: "Actionable insights across sectors with high-conviction ideas.",
    items: [
      "High-conviction stock ideas",
      "Sector deep dives (India-focused themes)",
      "Earnings intelligence",
      "Management access-backed insights",
    ],
  },
  {
    title: "Institutional Sales",
    blurb: "Indsec's sales team acts as an extension of your investment desk.",
    items: [
      "Market color & positioning insights",
      "Portfolio strategy discussions",
      "Direct analyst access",
    ],
  },
  {
    title: "Trading & Execution",
    blurb: "Built for speed, discretion, and reliability.",
    items: [
      "Block & bulk deals",
      "High-touch execution",
      "Liquidity sourcing",
      "Institutional-grade dealing desk",
    ],
  },
  {
    title: "Corporate Access",
    blurb: "Direct engagement with management teams.",
    items: [
      "Curated 1x1 management meetings",
      "Field visits and channel checks",
      "Thematic roadshows",
    ],
  },
  {
    title: "Capital Markets",
    blurb: "IPOs, QIPs, and block deals.",
    items: [
      "IPO participation",
      "QIPs & placements",
      "Structured institutional opportunities",
    ],
  },
];

const RESEARCH_EDGE = [
  "Weekly stock recommendations",
  "Monthly industry reports",
  "Sector deep dives",
  "Early identification of emerging themes",
  "Daily Market Wrap",
  "IPO notes",
  "Quarterly Earnings preview",
  "Macro-economic outlook",
];

const CLIENTS = [
  "Foreign Institutional Investors (FIIs)",
  "Domestic Institutional Investors (DIIs)",
  "Mutual Funds",
  "Alternative Investment Funds (AIFs)",
  "Portfolio Management Services (PMS)",
  "Foreign Portfolio Investors (FPIs)",
];

export default function InstitutionalBrokingPage() {
  return (
    <>
      <PageHero kicker="Lines of Business · 01" title="Institutional Broking" />

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <h2 className="title-h2 text-center" style={{ color: "var(--color-navy-900)", marginBottom: 16 }}>
            Built on Insight, Integrity, and Execution
          </h2>
          <p className="lead text-center">
            Delivering high-conviction research, seamless trade execution, and
            differentiated market access for institutional investors.
          </p>
          <div className="btn-row mt-4" style={{ justifyContent: "center" }}>
            <Link href="/contact" className="btn btn--crimson">Speak to Our Desk</Link>
            <Link href="/research" className="btn btn--outline-crimson">Access Research</Link>
          </div>
        </div>
      </section>

      {/* Services Deep Dive — 5-column grid (Slide 9) */}
      <section className="section section--band">
        <div className="container">
          <SectionHeading title="Services Deep Dive" withRule />
          <div className="svc-grid">
            {SERVICES.map((s) => (
              <article key={s.title} className="column-card">
                <h3 className="column-card__title">{s.title}</h3>
                <p className="fs-14" style={{ color: "var(--color-text)", marginBottom: 8 }}>{s.blurb}</p>
                <ul className="column-card__list">
                  {s.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Research Edge */}
      <section className="section">
        <div className="container">
          <SectionHeading title="Our Research Edge" withRule />
          <div className="grid grid--4">
            {RESEARCH_EDGE.map((r) => (
              <article key={r} className="card" style={{ padding: 0 }}>
                <div className="card__body" style={{ padding: 24, textAlign: "center" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 44, height: 44,
                      borderRadius: "50%",
                      background: "var(--color-crimson-100)",
                      color: "var(--color-crimson-600)",
                      fontSize: 20,
                      marginBottom: 12,
                    }}
                  >
                    ◧
                  </span>
                  <h3 className="title-h4" style={{ color: "var(--color-navy-900)" }}>{r}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section section--cream">
        <div className="container">
          <SectionHeading title="Clients We Serve" withRule />
          <div className="grid grid--3">
            {CLIENTS.map((c) => (
              <article key={c} className="card">
                <div className="card__body" style={{ padding: 20, textAlign: "center" }}>
                  <h3 className="title-h4" style={{ color: "var(--color-navy-900)" }}>{c}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency First (Slide 8) */}
      <section className="section">
        <div className="container">
          <div className="info-tip">
            <div className="info-tip__icon" aria-hidden="true">⚖</div>
            <div>
              <p className="info-tip__title">Transparency First</p>
              <p className="info-tip__body" style={{ marginBottom: 12 }}>
                Indsec operates under strict regulatory frameworks with full adherence to SEBI guidelines.
              </p>
              <ul className="list-crimson">
                <li>SEBI registration</li>
                <li>Research disclaimers</li>
                <li>Conflict of interest disclosures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--navy">
        <div className="container text-center">
          <h2 style={{ color: "#fff", marginBottom: 12 }}>Engage our institutional desk</h2>
          <p className="lead" style={{ color: "rgba(255,255,255,0.9)", maxWidth: 720, margin: "0 auto 24px" }}>
            Same-day response from a senior team. Coverage tailored to your mandate.
          </p>
          <Link href="/contact" className="btn btn--white">Speak to Our Desk</Link>
        </div>
      </section>
    </>
  );
}
