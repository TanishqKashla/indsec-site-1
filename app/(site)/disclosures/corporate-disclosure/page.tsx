import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  getCorporateDisclosureGroups,
  type CorporateDisclosureDoc,
} from "@/lib/corporateDisclosure";

export const metadata: Metadata = {
  title: "Corporate Disclosure",
  description:
    "Indsec's corporate-governance disclosures — Annual General Meeting (AGM) and EGM notices, annual returns, and board governance policies.",
};

function docLinkLabel(d: CorporateDisclosureDoc) {
  const size = d.size ? ` (${d.size})` : "";
  return `View PDF: ${d.title}${size}. Opens in a new tab.`;
}

export default async function CorporateDisclosurePage() {
  const groups = await getCorporateDisclosureGroups();

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
      {groups.length === 0 ? (
        <section className="section">
          <div className="container" style={{ maxWidth: 920 }}>
            <p className="lead text-center">
              Corporate disclosure documents will appear here soon.
            </p>
          </div>
        </section>
      ) : (
        groups.map((group, i) => (
        <section
          key={group.key}
          className={`section${i % 2 === 1 ? " section--band" : ""}`}
        >
          <div className="container">
            <SectionHeading title={group.label} lead={group.lead} withRule />
            <div className="grid grid--2">
              {group.docs.map((d) => (
                <article key={d._id} className="card">
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
                      <p className="fs-14 mb-3">{d.description}</p>
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
        ))
      )}
    </>
  );
}
