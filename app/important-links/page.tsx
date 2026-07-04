import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Important Links",
  description:
    "Important links for Indsec investors — grievance redressal portals (SMART ODR, SEBI SCORES, NSDL, NSE, BSE), client collateral details and regulator / exchange websites.",
};

type LinkItem = { label: string; href: string };

const GRIEVANCE: LinkItem[] = [
  { label: "SMART ODR", href: "https://smartodr.in/login" },
  { label: "SEBI SCORES", href: "https://scores.sebi.gov.in/" },
  { label: "NSDL", href: "https://nsdl.co.in/nsdlnews/investors.php" },
  { label: "NSE", href: "https://investorhelpline.nseindia.com/NICEPLUS/" },
  { label: "BSE", href: "https://bsecrs.bseindia.com/ecomplaint/frmInvestorHome.aspx" },
];

const OTHER: LinkItem[] = [
  { label: "View Client Collateral Details", href: "https://investorhelpline.nseclearing.in/ClientCollateral/welcomeCLUser" },
  { label: "BSE", href: "https://www.bseindia.com" },
  { label: "NSE", href: "https://www.nseindia.com" },
  { label: "NSDL", href: "https://nsdl.co.in" },
  { label: "SEBI", href: "https://www.sebi.gov.in" },
];

function LinkGrid({ items }: { items: LinkItem[] }) {
  return (
    <div className="grid grid--3">
      {items.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-card"
          aria-label={`${l.label}. Opens in a new tab.`}
        >
          <span className="link-card__arrow" aria-hidden="true">↗</span>
          <h3 className="link-card__title">{l.label}</h3>
          <p className="link-card__desc">{l.href}</p>
        </a>
      ))}
    </div>
  );
}

export default function ImportantLinksPage() {
  return (
    <>
      <PageHero kicker="Investor Information" title="Important Links" />

      {/* Grievance redressal */}
      <section className="section" id="grievance">
        <div className="container">
          <SectionHeading
            title="Investor Complaint / Grievance Redressal"
            withRule
          />

          <p className="text-center" style={{ maxWidth: 760, margin: "0 auto 32px" }}>
            The process for raising and escalating an investor complaint with Indsec.
          </p>

          <div style={{ maxWidth: 640, margin: "0 auto 32px" }}>
            <article className="card">
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
                      Investor Complaint Process
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
                      PDF · 255 KB
                    </span>
                  </div>
                  <a
                    href="/documents/Indsec%20-%20Investor%20Complaint%20Process.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline-crimson btn--sm"
                    aria-label="View PDF: Investor Complaint Process (255 KB). Opens in a new tab."
                  >
                    View PDF <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          </div>

          <p className="text-center" style={{ maxWidth: 760, margin: "0 auto 32px" }}>
            Please quote your Service Ticket / Complaint Reference Number while
            raising your complaint at the SEBI SCORES, Depository or Exchange
            portal.
          </p>

          <LinkGrid items={GRIEVANCE} />
        </div>
      </section>

      {/* Other important links */}
      <section className="section section--band" id="other">
        <div className="container">
          <SectionHeading title="Other Important Links" withRule />
          <LinkGrid items={OTHER} />
        </div>
      </section>
    </>
  );
}
