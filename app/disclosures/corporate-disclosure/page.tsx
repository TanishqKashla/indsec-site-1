import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Corporate Disclosure",
  description:
    "Indsec's corporate-governance disclosures — Annual General Meeting (AGM) and EGM notices, annual returns, and board governance policies.",
};

type Doc = { title: string; desc: string; href: string; size?: string };

const BASE = "/documents/corporate-disclosure";

const GROUPS: { heading: string; lead?: string; docs: Doc[] }[] = [
  {
    heading: "General Meeting Notices",
    lead: "Notices of the Annual General Meetings (AGM) and Extraordinary General Meetings (EGM).",
    docs: [
      {
        title: "AGM Notice — 2026",
        desc: "Notice of the Annual General Meeting, 2026.",
        href: `${BASE}/AGM%20Notice%202026.pdf`,
        size: "521 KB",
      },
      {
        title: "AGM Notice — 2025",
        desc: "Notice of the Annual General Meeting, 2025.",
        href: `${BASE}/AGM%20Notice%202025.pdf`,
        size: "363 KB",
      },
      {
        title: "AGM Notice — 2024",
        desc: "Notice of the Annual General Meeting, 2024.",
        href: `${BASE}/AGM%20Notice%20-%202024.pdf`,
        size: "450 KB",
      },
      {
        title: "Addendum to the Notice of AGM — 2024",
        desc: "Addendum to the 2024 Annual General Meeting notice.",
        href: `${BASE}/Addendum%20to%20the%20Notice%20of%20AGM%20-%202024.pdf`,
        size: "167 KB",
      },
      {
        title: "AGM Notice — 2023",
        desc: "Notice of the Annual General Meeting, 2023.",
        href: `${BASE}/AGM%20Notice%202023.pdf`,
        size: "481 KB",
      },
      {
        title: "AGM Notice — 2022",
        desc: "Notice of the Annual General Meeting, 2022.",
        href: `${BASE}/AGM%20Notice%202022.pdf`,
        size: "426 KB",
      },
      {
        title: "AGM Notice — 2021",
        desc: "Notice of the Annual General Meeting, 2021.",
        href: `${BASE}/AGM%20Notice%202021.pdf`,
        size: "250 KB",
      },
      {
        title: "EGM Notice — 01/2024-2025",
        desc: "Notice of the Extraordinary General Meeting (01/2024-2025).",
        href: `${BASE}/EGM%20Notice%2001_2024-2025.pdf`,
        size: "473 KB",
      },
    ],
  },
  {
    heading: "Annual Returns",
    lead: "Annual returns filed under the Companies Act.",
    docs: [
      {
        title: "Annual Return — 2025",
        desc: "Annual return for the financial year 2024-25.",
        href: `${BASE}/Annual%20Return%202025.pdf`,
        size: "1.0 MB",
      },
      {
        title: "Annual Return — 31.03.2023",
        desc: "Annual return as on 31 March 2023.",
        href: `${BASE}/Annual%20Return_31.03.2023.pdf`,
        size: "967 KB",
      },
      {
        title: "Annual Return — 2022",
        desc: "Annual return for the financial year 2021-22.",
        href: `${BASE}/Annual%20Return%202022-latest.pdf`,
        size: "1.5 MB",
      },
      {
        title: "Annual Return — 2021",
        desc: "Annual return for the financial year 2020-21.",
        href: `${BASE}/Annual%20Return%202021.pdf`,
        size: "2.3 MB",
      },
    ],
  },
  {
    heading: "Governance Policies",
    lead: "Board-approved corporate governance policies.",
    docs: [
      {
        title: "Nomination and Remuneration Policy",
        desc: "The Board's nomination and remuneration policy.",
        href: `${BASE}/Nomination%20and%20Remuneration%20Policy.pdf`,
        size: "140 KB",
      },
      {
        title: "Terms & Conditions of Appointment of Independent Directors",
        desc: "Terms and conditions governing the appointment of independent directors.",
        href: `${BASE}/Terms%20%26%20Conditions%20of%20Appointment%20of%20Independent%20directors.pdf`,
        size: "425 KB",
      },
    ],
  },
];

function docLinkLabel(d: Doc) {
  const size = d.size ? ` (${d.size})` : "";
  return `View PDF: ${d.title}${size}. Opens in a new tab.`;
}

export default function CorporateDisclosurePage() {
  return (
    <>
      <PageHero kicker="Disclosures & Downloads" title="Corporate Disclosure" />

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <p className="lead text-center">
            Indsec&apos;s corporate-governance disclosures — Annual General
            Meeting (AGM) and Extraordinary General Meeting (EGM) notices, annual
            returns and board governance policies, published in line with the
            Companies Act and SEBI guidelines.
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
