import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

const SUBPAGES: { title: string; desc: string; href: string; icon: ReactNode }[] = [
  {
    title: "Corporate Disclosure",
    desc: "AGM & EGM notices, annual returns and board governance policies, filed under the Companies Act and SEBI guidelines.",
    href: "/disclosures/corporate-disclosure",
    icon: (
      <>
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
        <path d="M10 14h4" />
        <path d="M10 18h4" />
      </>
    ),
  },
  {
    title: "Investor Charters & Complaints Data",
    desc: "SEBI-mandated investor charters and the monthly investor-complaints data across our broking, depository and PMS activities.",
    href: "/disclosures/investor-charter-complaints",
    icon: (
      <>
        <path d="M15 12h-5" />
        <path d="M15 8h-5" />
        <path d="M19 17V5a2 2 0 0 0-2-2H4" />
        <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
      </>
    ),
  },
  {
    title: "Client Registration Documents",
    desc: "Account opening kits, KYC updation forms, the nomination form and rights & obligations documents.",
    href: "/disclosures/client-registration-document",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </>
    ),
  },
  {
    title: "Client Bank Account Details",
    desc: "Designated USCNBA accounts for fund transfers, validated UPI payment guidance and SEBI Check verification.",
    href: "/disclosures/client-bank-account",
    icon: (
      <>
        <line x1="3" x2="21" y1="22" y2="22" />
        <line x1="6" x2="6" y1="18" y2="11" />
        <line x1="10" x2="10" y1="18" y2="11" />
        <line x1="14" x2="14" y1="18" y2="11" />
        <line x1="18" x2="18" y1="18" y2="11" />
        <polygon points="12 2 20 7 4 7" />
      </>
    ),
  },
  {
    title: "KRA / KYC Status",
    desc: "How to view your KYC validation status with the KRAs and the steps to update it.",
    href: "/disclosures/kra-status",
    icon: (
      <>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Investor Mobile Application by Depositories",
    desc: "NSDL Speede and CDSL myeasi apps for a consolidated, single-login view of your securities holdings.",
    href: "/disclosures/investor-mobile-application-by-depositories",
    icon: (
      <>
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </>
    ),
  },
  {
    title: "Investor Awareness & Education",
    desc: "Curated educational videos and expert podcasts from the exchanges and leading institutions on safe investing.",
    href: "/disclosures/investor-awareness-and-education",
    icon: (
      <>
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
        <path d="M22 10v6" />
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
      </>
    ),
  },
  {
    title: "Research Disclaimer & Disclosures",
    desc: "Rating scale, analyst certification, regulatory disclosures, business activities and disciplinary history.",
    href: "/disclosures/research-disclaimer-and-disclosures",
    icon: (
      <>
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="m19 9-5 5-4-4-3 3" />
      </>
    ),
  },
  {
    title: "e-Voting Facility",
    desc: "Register with the Depositories (NSDL / CDSL) to access the e-voting facility provided by listed entities.",
    href: "/disclosures/e-voting",
    icon: (
      <>
        <path d="m9 12 2 2 4-4" />
        <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5z" />
        <path d="M22 19H2" />
      </>
    ),
  },
];

export const metadata: Metadata = {
  title: "Disclosures & Downloads",
  description:
    "Indsec's regulatory information, statutory disclosures, SEBI registrations, and grievance redressal channels.",
};

type Doc = { title: string; desc: string; href: string; size?: string };

const CORPORATE_DOCS: Doc[] = [
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
    title: "Account Opening Process",
    desc: "Step-by-step process for opening an account with Indsec.",
    href: "/documents/Indsec%20-%20Account%20Opening%20Process.pdf",
    size: "223 KB",
  },
];

function docLinkLabel(d: Doc) {
  const size = d.size ? ` (${d.size})` : "";
  return `View PDF: ${d.title}${size}. Opens in a new tab.`;
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

      {/* More disclosure pages */}
      <section className="section" id="more">
        <div className="container">
          <SectionHeading
            title="More Disclosures & Investor Information"
            lead="Explore our dedicated investor-information pages — documents, forms, payment details and educational resources."
            withRule
          />
          <div className="grid grid--3">
            {SUBPAGES.map((p) => (
              <Link key={p.href} href={p.href} className="link-card">
                <span className="link-card__arrow" aria-hidden="true">→</span>
                <span className="link-card__icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {p.icon}
                  </svg>
                </span>
                <h3 className="link-card__title">{p.title}</h3>
                <p className="link-card__desc">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate disclosure documents */}
      <section className="section section--band" id="corporate-documents">
        <div className="container">
          <div className="grid grid--2">
            {CORPORATE_DOCS.map((d) => (
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

    </>
  );
}
