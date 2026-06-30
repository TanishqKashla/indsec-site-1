import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Investor Charters & Complaints Data",
  description:
    "SEBI-mandated investor charters and monthly investor-complaints data for Indsec's broking, depository and PMS activities.",
};

type Doc = {
  title: string;
  desc: string;
  href: string;
  size?: string;
};

const GROUPS: { heading: string; lead?: string; docs: Doc[] }[] = [
  {
    heading: "Investor Charters",
    lead: "Rights, responsibilities and service standards across each of our SEBI-regulated activities.",
    docs: [
      {
        title: "Investor Charter — Stock Broker",
        desc: "Rights, responsibilities and service standards for broking clients.",
        href: "/documents/Investor%20Charter%20for%20Stock%20Brokers_Feb2025.pdf",
        size: "304 KB",
      },
      {
        title: "Investor Charter — Depository Participant",
        desc: "Rights, responsibilities and service standards for depository clients.",
        href: "/documents/Investor%20Charter%20for%20Depositary%20Participants_Sep2024.pdf",
        size: "415 KB",
      },
      {
        title: "Investor Charter — PMS",
        desc: "Rights, responsibilities and service standards for Portfolio Management clients.",
        href: "/documents/Investor%20Charter%20in%20Respect%20of%20PMS_.pdf",
        size: "247 KB",
      },
      {
        title: "Investor Charter — Research Analyst",
        desc: "Rights, responsibilities and service standards for research clients.",
        href: "/documents/Investor%20Charter%20for%20Research%20Analysts.pdf",
        size: "223 KB",
      },
    ],
  },
  {
    heading: "Investor Complaints Data",
    lead: "Monthly disclosure of investor complaints, as filed with the exchanges and SEBI.",
    docs: [
      {
        title: "Investor Complaints Data — Stock Broking",
        desc: "Monthly disclosure of complaints received against broking activities (May 2026).",
        href: "/documents/Investor%20Complaints%20Data%20-%20Stock%20Broking%20Activities%20-%20May%202026.pdf",
        size: "148 KB",
      },
      {
        title: "Investor Complaints Data — Depository",
        desc: "Monthly disclosure of complaints received against depository activities (May 2026).",
        href: "/documents/Investor%20Complaints%20Data%20-%20DP%20Activities%20-%20May%202026.pdf",
        size: "210 KB",
      },
      {
        title: "Investor Complaints Data — PMS",
        desc: "Monthly disclosure of complaints received against PMS activities (May 2026).",
        href: "/documents/Investor%20Complaints%20Data%20-%20PMS%20-%20May%202026.pdf",
        size: "207 KB",
      },
    ],
  },
];

/* Accessible name for a document link — declares the document, its file size
   and that it opens in a new tab, satisfying WCAG G189 (file size hint) and
   3.2.2 (new-tab notice). Begins with the visible text so it also satisfies
   WCAG 2.5.3 (Label in Name). */
function docLinkLabel(d: Doc) {
  const size = d.size ? ` (${d.size})` : "";
  return `View PDF: ${d.title}${size}. Opens in a new tab.`;
}

export default function InvestorCharterComplaintsPage() {
  return (
    <>
      <PageHero
        kicker="Disclosures & Downloads"
        title="Investor Charters & Complaints Data"
      />

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <p className="lead text-center">
            As mandated by SEBI, Indsec publishes investor charters setting out
            the rights and service standards for each of its regulated
            activities, alongside the monthly investor-complaints data filed
            with the exchanges and SEBI.
          </p>
        </div>
      </section>

      {/* Document groups */}
      {GROUPS.map((group, i) => (
        <section
          key={group.heading}
          className={`section${i % 2 === 1 ? " section--band" : ""}`}
        >
          <div className="container">
            <SectionHeading title={group.heading} lead={group.lead} withRule />
            <div className="grid grid--2">
              {group.docs.map((d) => (
                <article key={d.title} className="card">
                  <div
                    className="card__body"
                    style={{ padding: 20, display: "flex", gap: 16, alignItems: "flex-start" }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        flexShrink: 0,
                        width: 40,
                        height: 40,
                        borderRadius: 8,
                        background: "var(--color-crimson-100)",
                        color: "var(--color-crimson-600)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                        <path d="M14 2v6h6" />
                        <path d="M9 13h6" />
                        <path d="M9 17h6" />
                      </svg>
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                        <h3 className="title-h4" style={{ color: "var(--color-navy-900)", textAlign: "left", margin: 0 }}>
                          {d.title}
                        </h3>
                        <span
                          className="fs-12"
                          style={{
                            flexShrink: 0,
                            padding: "2px 8px",
                            borderRadius: 999,
                            background: "var(--color-crimson-100)",
                            color: "var(--color-crimson-600)",
                            fontWeight: 600,
                            letterSpacing: 0.5,
                          }}
                        >
                          PDF{d.size ? ` · ${d.size}` : ""}
                        </span>
                      </div>
                      <p className="fs-14 mb-3">{d.desc}</p>
                      <a
                        href={d.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--outline-crimson btn--sm"
                        aria-label={docLinkLabel(d)}
                      >
                        View PDF <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
