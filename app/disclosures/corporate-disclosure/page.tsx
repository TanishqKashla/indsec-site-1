import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Corporate Disclosure",
  description:
    "Indsec's corporate disclosures — SOP for operation of accounts of an incapacitated investor, the Anti-Money Laundering (PMLA) Policy and the PMS Disclosure Document.",
};

type Doc = { title: string; desc: string; href: string; size?: string };

const DOCS: Doc[] = [
  {
    title: "Operation of Accounts in Case of an Incapacitated Investor",
    desc: "Common SOP for the operation of accounts in case of an incapacitated investor — applicable to Depositories and Mutual Funds.",
    href: "/documents/SOP%20-%20Operation%20of%20accounts%20for%20an%20incapacitated%20investor.pdf",
    size: "271 KB",
  },
  {
    title: "Anti-Money Laundering (PMLA) Policy",
    desc: "Policy and procedures under the Prevention of Money Laundering Act.",
    href: "/documents/Anti%20Money%20Laundering%20(PMLA)%20Policy.pdf",
    size: "353 KB",
  },
  {
    title: "PMS Disclosure Document",
    desc: "SEBI-mandated disclosure document for Indsec's Portfolio Management Services.",
    href: "/documents/PMS%20Disclosure%20Document.pdf",
    size: "400 KB",
  },
  {
    title: "Investor Complaint Process",
    desc: "The process for raising and escalating an investor complaint with Indsec.",
    href: "/documents/Indsec%20-%20Investor%20Complaint%20Process.pdf",
    size: "255 KB",
  },
  {
    title: "Escalation Matrix",
    desc: "Designated contacts and escalation levels for investor grievances.",
    href: "/documents/Indsec%20-%20Escalation%20Matrix.pdf",
    size: "233 KB",
  },
  {
    title: "Account Opening Process",
    desc: "Step-by-step process for opening an account with Indsec.",
    href: "/documents/Indsec%20-%20Account%20Opening%20Process.pdf",
    size: "223 KB",
  },
];

function docLinkLabel(d: Doc) {
  const size = d.size ? ` (${d.size})` : "";
  return `Download PDF: ${d.title}${size}. Opens in a new tab.`;
}

export default function CorporateDisclosurePage() {
  return (
    <>
      <PageHero kicker="Disclosures & Downloads" title="Corporate Disclosure" />

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <p className="lead text-center">
            Indsec&apos;s corporate disclosures and policies, published in line
            with SEBI guidelines. Download the documents below.
          </p>
        </div>
      </section>

      {/* Documents */}
      <section className="section section--band" id="documents">
        <div className="container">
          <SectionHeading title="Disclosure Documents" withRule />
          <div className="grid grid--2">
            {DOCS.map((d) => (
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
                      download
                      className="btn btn--outline-crimson btn--sm"
                      aria-label={docLinkLabel(d)}
                    >
                      Download PDF <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
