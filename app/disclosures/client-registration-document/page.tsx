import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Client Registration Documents",
  description:
    "Download Indsec's account opening kits, KYC updation forms, nomination form and rights & obligations documents for broking and depository clients.",
};

type DocKind = "PDF" | "ZIP" | "Page";

type Doc = {
  title: string;
  desc: string;
  href: string;
  kind: DocKind;
  size?: string;
  external?: boolean;
};

const GROUPS: { heading: string; lead?: string; docs: Doc[] }[] = [
  {
    heading: "Broking — Account Opening",
    docs: [
      {
        title: "Account Opening Kit — Individual",
        desc: "Complete trading account opening kit for individual broking clients.",
        href: "/documents/Account%20Opening%20Kit%20-%20Individual.zip",
        kind: "ZIP",
        size: "1.4 MB",
      },
      {
        title: "Account Opening Kit — Non-Individual",
        desc: "Complete trading account opening kit for non-individual / corporate clients.",
        href: "/documents/Account%20Opening%20Kit%20-%20Non%20Individual.zip",
        kind: "ZIP",
        size: "1.9 MB",
      },
      {
        title: "Account Opening (Part B) — Rights & Obligations",
        desc: "Rights & obligations, risk disclosure and guidance note (Part B), 2024.",
        href: "/documents/Account%20Opening%20Kit%20(Part%20B)%20-%20Rights%20%26%20Obligations%20-%202024.pdf",
        kind: "PDF",
        size: "416 KB",
      },
    ],
  },
  {
    heading: "Depository (DP) — Account Opening",
    docs: [
      {
        title: "DP Account Opening Kit — Individual",
        desc: "Demat (depository participant) account opening kit for individual clients.",
        href: "/documents/DP%20-%20Account%20Opening%20Kit%20-%20Individual_latest.zip",
        kind: "ZIP",
        size: "3.2 MB",
      },
      {
        title: "DP Account Opening Kit — Non-Individual",
        desc: "Demat (depository participant) account opening kit for non-individual clients.",
        href: "/documents/DP%20-%20Account%20Opening%20Kit%20-%20Non-Individual.zip",
        kind: "ZIP",
        size: "2.6 MB",
      },
    ],
  },
  {
    heading: "KYC Updation",
    docs: [
      {
        title: "KYC Updation — Individual",
        desc: "Form to update / modify KYC details for individual clients.",
        href: "/documents/KYC%20Modification%20-%20Individual.pdf",
        kind: "PDF",
        size: "434 KB",
      },
      {
        title: "KYC Updation — Non-Individual",
        desc: "Form to update KYC details for non-individual / corporate clients.",
        href: "/documents/KYC%20Updation%20-%20Non%20Individual.pdf",
        kind: "PDF",
        size: "3.3 MB",
      },
    ],
  },
  {
    heading: "Nomination",
    docs: [
      {
        title: "Nomination Form — Broking & DP",
        desc: "Nomination / opt-out declaration form for broking and depository accounts.",
        href: "/documents/Broking%20and%20DP%20-%20Nomination%20Form.pdf",
        kind: "PDF",
        size: "257 KB",
      },
    ],
  },
  {
    heading: "Additional Resources",
    docs: [
      {
        title:
          "Rights & Obligations, RDD & Guidance Note — Vernacular Languages",
        desc: "Rights & obligations, risk disclosure document and guidance note in regional languages, hosted by NSE.",
        href: "https://www.nseindia.com/trade/members-client-registration-documents",
        kind: "Page",
        external: true,
      },
    ],
  },
];

/* Accessible name for a document link — declares the document, its file size
   (for downloadable files) and that it opens in a new tab, satisfying WCAG
   G189 (file size hint) and 3.2.2 (new-tab notice). Begins with the visible
   text so it also satisfies WCAG 2.5.3 (Label in Name). */
function docLinkLabel(d: Doc) {
  if (d.kind === "Page") {
    return `Open: ${d.title}. Opens in a new tab.`;
  }
  const size = d.size ? ` (${d.size})` : "";
  return `Download ${d.kind}: ${d.title}${size}. Opens in a new tab.`;
}

function actionLabel(d: Doc) {
  if (d.kind === "Page") return "Open";
  return `Download ${d.kind}`;
}

export default function ClientRegistrationDocumentPage() {
  return (
    <>
      <PageHero
        kicker="Disclosures & Downloads"
        title="Client Registration Documents"
      />

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <p className="lead text-center">
            Account opening kits, KYC updation forms, the nomination form and
            statutory rights &amp; obligations documents for Indsec&apos;s
            broking and depository clients. Download the relevant kit, complete
            it and submit it to our desk to begin onboarding.
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
                          {d.kind}{d.size ? ` · ${d.size}` : ""}
                        </span>
                      </div>
                      <p className="fs-14 mb-3">{d.desc}</p>
                      <a
                        href={d.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        {...(d.external ? {} : { download: true })}
                        className="btn btn--outline-crimson btn--sm"
                        aria-label={docLinkLabel(d)}
                      >
                        {actionLabel(d)} <span aria-hidden="true">↗</span>
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
