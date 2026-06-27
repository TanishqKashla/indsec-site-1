import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Disclosures & Downloads",
  description:
    "Indsec's regulatory information, statutory disclosures, SEBI registrations, and grievance redressal channels.",
};

const SITE = "https://www.indsec.co.in";

type DocKind = "PDF" | "Page" | "Portal";

const DISCLOSURES: { title: string; desc: string; href: string; kind: DocKind; size?: string }[] = [
  {
    title: "Corporate Disclosures",
    desc: "Statutory corporate disclosures available to Indsec clients via secure login.",
    href: `${SITE}/corporate-disclosures-login`,
    kind: "Portal",
  },
  {
    title: "Research Disclaimer & Disclosures",
    desc: "Rating scale, analyst certifications and conflict-of-interest declarations.",
    href: `${SITE}/researchdisclaimeranddisclosures`,
    kind: "Page",
  },
  {
    title: "PMS Disclosure Document",
    desc: "SEBI-mandated disclosure document for Indsec's Portfolio Management Services.",
    href: `${SITE}/pdf/Indsec-Disclosure-Document-Website.pdf`,
    kind: "PDF",
  },
  {
    title: "Anti-Money Laundering (PMLA) Policy",
    desc: "Policy and procedures under the Prevention of Money Laundering Act.",
    href: `${SITE}/pdf/20240508-Anti-Money-Laundering.pdf`,
    kind: "PDF",
  },
  {
    title: "Investor Charter — Stock Broker",
    desc: "Rights, responsibilities and service standards for broking clients.",
    href: `${SITE}/pdf/Investor%20Charter%20for%20Stock%20Brokers_Feb2025.pdf`,
    kind: "PDF",
    size: "304 KB",
  },
  {
    title: "Investor Charter — Depository Participant",
    desc: "Rights, responsibilities and service standards for depository clients.",
    href: `${SITE}/pdf/Investor%20Charter%20for%20Depositary%20Participants_Sep2024.pdf`,
    kind: "PDF",
    size: "415 KB",
  },
  {
    title: "Investor Charter — Research Analyst",
    desc: "Rights, responsibilities and service standards for research clients.",
    href: `${SITE}/pdf/Investor%20Charter%20for%20Research%20Analysts.pdf`,
    kind: "PDF",
    size: "223 KB",
  },
  {
    title: "Investor Charter — PMS",
    desc: "Rights, responsibilities and service standards for PMS clients.",
    href: `${SITE}/pdf/Investor%20Charter%20in%20Respect%20of%20PMS.pdf`,
    kind: "PDF",
    size: "268 KB",
  },
  {
    title: "Investor Complaints Data — Stock Broking",
    desc: "Monthly disclosure of complaints received against broking activities.",
    href: `${SITE}/pdf/Investor%20Complaints%20Data%20-%20Stock%20Broking%20Activities%20-%20Apr%202026.pdf`,
    kind: "PDF",
    size: "148 KB",
  },
  {
    title: "Investor Complaints Data — Depository",
    desc: "Monthly disclosure of complaints received against depository activities.",
    href: `${SITE}/pdf/Investor%20Complaints%20Data%20-%20DP%20Activities%20-%20Apr%202026.pdf`,
    kind: "PDF",
    size: "210 KB",
  },
  {
    title: "Investor Complaints Data — PMS",
    desc: "Monthly disclosure of complaints received against PMS activities.",
    href: `${SITE}/pdf/Investor%20Complaints%20Data%20-%20PMS%20-%20Apr%202026.pdf`,
    kind: "PDF",
    size: "207 KB",
  },
];

/* Accessible name for a disclosure link — declares the document, its file
   size (PDFs) and that it opens in a new tab, satisfying WCAG G189 (file
   size hint) and 3.2.2 (new-tab notice) without altering the visible UI.
   The label begins with the visible text ("Download PDF" / "Open") so it
   also satisfies WCAG 2.5.3 (Label in Name). */
function docLinkLabel(d: (typeof DISCLOSURES)[number]) {
  if (d.kind === "PDF") {
    const size = d.size ? ` (${d.size})` : "";
    return `Download PDF: ${d.title}${size}. Opens in a new tab.`;
  }
  return `Open: ${d.title}. Opens in a new tab.`;
}

export default function InvestorRelationsPage() {
  return (
    <>
      <PageHero kicker="Disclosures & Downloads" title="Disclosure & Compliance" />

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <p className="lead text-center">
            Indsec operates under strict regulatory frameworks with full
            adherence to SEBI guidelines. This page centralises our
            statutory disclosures, registrations and the channels available
            to investors, regulators and the public.
          </p>
        </div>
      </section>

      {/* Statutory information */}
      <section className="section section--band">
        <div className="container">
          <SectionHeading title="Statutory Information" withRule />
          <div className="grid grid--3">
            <article className="pillar">
              <h3 className="pillar__title">Corporate Identity</h3>
              <ul className="list-crimson">
                <li><strong>Name:</strong> Indsec Securities &amp; Finance Limited</li>
                <li><strong>CIN:</strong> U67120MH1993PLC073185</li>
                <li><strong>PAN:</strong> AAACI1958G</li>
                <li><strong>GSTIN:</strong> 27AAACI1958G1ZL</li>
                <li><strong>Incorporated:</strong> 1993 · Mumbai, Maharashtra</li>
              </ul>
            </article>
            <article className="pillar">
              <h3 className="pillar__title">Exchange &amp; Depository</h3>
              <ul className="list-crimson">
                <li>National Stock Exchange of India (NSE)</li>
                <li>BSE Ltd.</li>
                <li>NSDL — Depository Participant</li>
                <li>Capital Market &amp; F&amp;O segments</li>
              </ul>
            </article>
            <article className="pillar">
              <h3 className="pillar__title">SEBI Registrations</h3>
              <ul className="list-crimson">
                <li><strong>Stock Broker (NSE/BSE/MCX-SX):</strong> INZ000236731</li>
                <li><strong>Depository Participant (NSDL):</strong> IN-DP-475-2020</li>
                <li><strong>Portfolio Manager (PMS):</strong> INP000001892</li>
                <li><strong>AMFI:</strong> 9194</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Disclosures */}
      <section className="section" id="disclosures">
        <div className="container">
          <SectionHeading
            title="Disclosures & Documents"
            lead="Statutory disclosures, investor charters and monthly complaints data, as filed with the exchanges and SEBI."
            withRule
          />
          <div className="grid grid--2">
            {DISCLOSURES.map((d) => (
              <article key={d.title} className="card">
                <div className="card__body" style={{ padding: 20, display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      width: 40, height: 40,
                      borderRadius: 8,
                      background: "var(--color-crimson-100)",
                      color: "var(--color-crimson-600)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* document icon */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                      <path d="M14 2v6h6" />
                      <path d="M9 13h6" />
                      <path d="M9 17h6" />
                    </svg>
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                      <h3 className="title-h4" style={{ color: "var(--color-navy-900)", textAlign: "left", margin: 0 }}>{d.title}</h3>
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
                        {d.kind}
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
                      {d.kind === "PDF" ? "Download PDF" : "Open"}{" "}
                      <span aria-hidden="true">↗</span>
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
