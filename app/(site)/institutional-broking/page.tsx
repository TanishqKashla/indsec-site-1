import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Institutional Broking",
  description:
    "High-conviction equity research, sales & trading, corporate access and capital markets support — institutional broking built on Insight, Integrity and Execution.",
};

const svcIcon = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const SERVICES = [
  {
    title: "Equity Research",
    blurb: "Actionable insights across sectors with high-conviction ideas.",
    // magnifier over research
    icon: (
      <svg {...svcIcon}>
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="M8 12.5 10.5 10l2 2 3-3.5" />
      </svg>
    ),
    items: [
      "Sector deep dives (India-focused themes)",
      "Earnings intelligence",
      "Management access-backed insights",
    ],
  },
  {
    title: "Institutional Sales",
    blurb: "Indsec's sales team acts as an extension of your investment desk.",
    // people / relationship
    icon: (
      <svg {...svcIcon}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    items: [
      "Market color & positioning insights",
      "Portfolio strategy discussions",
      "Direct analyst access",
    ],
  },
  {
    title: "Trading & Execution",
    blurb: "Built for speed, discretion, and reliability.",
    // speed / execution
    icon: (
      <svg {...svcIcon}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
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
    // building / corporate
    icon: (
      <svg {...svcIcon}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M9 21v-4h6v4" />
        <path d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01" />
      </svg>
    ),
    items: [
      "Curated 1x1 management meetings",
      "Field visits and channel checks",
    ],
  },
  {
    title: "Capital Markets",
    blurb: "IPOs, QIPs, and block deals.",
    // trending up
    icon: (
      <svg {...svcIcon}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    items: [
      "IPO participation",
      "QIPs & placements",
      "Structured institutional opportunities",
    ],
  },
];

const edgeIcon = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const RESEARCH_EDGE = [
  {
    label: "Weekly stock recommendations",
    // star — top picks / recommendations
    icon: (
      <svg {...edgeIcon}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    label: "Monthly industry reports",
    // document — reports
    icon: (
      <svg {...edgeIcon}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
      </svg>
    ),
  },
  {
    label: "Sector deep dives",
    // layers — sectors
    icon: (
      <svg {...edgeIcon}>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    label: "Early identification of emerging themes",
    // lightbulb — ideas / early themes
    icon: (
      <svg {...edgeIcon}>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
      </svg>
    ),
  },
  {
    label: "Daily Market Wrap",
    // bar chart — daily market activity
    icon: (
      <svg {...edgeIcon}>
        <line x1="6" y1="20" x2="6" y2="15" />
        <line x1="12" y1="20" x2="12" y2="9" />
        <line x1="18" y1="20" x2="18" y2="4" />
      </svg>
    ),
  },
  {
    label: "IPO notes",
    // rocket — IPO launch
    icon: (
      <svg {...edgeIcon}>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
  {
    label: "Quarterly Earnings preview",
    // calendar — quarterly schedule
    icon: (
      <svg {...edgeIcon}>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    label: "Macro-economic outlook",
    // globe — macro economy
    icon: (
      <svg {...edgeIcon}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      </svg>
    ),
  },
];

const CLIENTS = [
  { code: "FII", label: "Foreign Institutional Investors" },
  { code: "DII", label: "Domestic Institutional Investors" },
  { code: "MF", label: "Mutual Funds" },
  { code: "AIF", label: "Alternative Investment Funds" },
  { code: "PMS", label: "Portfolio Management Services" },
  { code: "FPI", label: "Foreign Portfolio Investors" },
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
                <div className="column-card__head">
                  <span className="column-card__icon" aria-hidden="true">{s.icon}</span>
                  <h3 className="column-card__title">{s.title}</h3>
                </div>
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
              <article key={r.label} className="card" style={{ padding: 0 }}>
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
                      marginBottom: 12,
                    }}
                  >
                    {r.icon}
                  </span>
                  <h3 className="title-h4" style={{ color: "var(--color-navy-900)" }}>{r.label}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Clients — badge pills on a geometric backdrop */}
      <section className="section section--geo" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="container">
          <SectionHeading title="Clients We Serve" withRule />
          <ul className="client-grid">
            {CLIENTS.map((c) => (
              <li key={c.code} className="client-card">
                <span className="client-card__badge" aria-hidden="true">{c.code}</span>
                <span className="client-card__label">{c.label}</span>
              </li>
            ))}
          </ul>
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
