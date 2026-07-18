import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  getClientRegistrationGroups,
  type ClientRegistrationDoc,
} from "@/lib/clientRegistrationDocuments";

export const metadata: Metadata = {
  title: "Client Registration Documents",
  description:
    "Download Indsec's account opening kits, KYC updation forms, nomination form and rights & obligations documents for broking and depository clients.",
};

/* Accessible name for a document link — declares the document, its file size
   (for downloadable files) and that it opens in a new tab, satisfying WCAG
   G189 (file size hint) and 3.2.2 (new-tab notice). Begins with the visible
   text so it also satisfies WCAG 2.5.3 (Label in Name). */
function docLinkLabel(d: ClientRegistrationDoc) {
  if (d.kind === "Page") {
    return `Open: ${d.title}. Opens in a new tab.`;
  }
  const size = d.size ? ` (${d.size})` : "";
  const verb = d.kind === "PDF" ? "View" : "Download";
  return `${verb} ${d.kind}: ${d.title}${size}. Opens in a new tab.`;
}

function actionLabel(d: ClientRegistrationDoc) {
  if (d.kind === "Page") return "Open";
  if (d.kind === "PDF") return "View PDF";
  return `Download ${d.kind}`;
}

export default async function ClientRegistrationDocumentPage() {
  const groups = await getClientRegistrationGroups();

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
      {groups.length === 0 ? (
        <section className="section">
          <div className="container" style={{ maxWidth: 920 }}>
            <p className="lead text-center">
              Client registration documents will appear here soon.
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
                          {d.kind}{d.size ? ` · ${d.size}` : ""}
                        </span>
                      </div>
                      <p className="fs-14 mb-3">{d.description}</p>
                      <a
                        href={d.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        {...(d.kind === "ZIP" ? { download: true } : {})}
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
        ))
      )}
    </>
  );
}
