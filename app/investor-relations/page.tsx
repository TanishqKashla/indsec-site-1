import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "Indsec's regulatory information, statutory disclosures, SEBI registrations, and grievance redressal channels.",
};

const DISCLOSURES = [
  { title: "SEBI Registration Certificate", desc: "Certificate of Registration under SEBI (Stock Brokers) Regulations." },
  { title: "Research Analyst Disclosures", desc: "Analyst certifications and conflict-of-interest disclosures attached to every research note." },
  { title: "Conflict of Interest Policy", desc: "How information barriers are maintained between research, sales, trading and family office desks." },
  { title: "Grievance Redressal Mechanism", desc: "Escalation matrix and timelines for client complaints." },
  { title: "Risk Disclosures", desc: "Market, regulatory and operational risks of trading in securities." },
  { title: "Investor Charter — Stock Broker", desc: "Rights, responsibilities, and service standards." },
  { title: "Investor Charter — Research Analyst", desc: "Rights, responsibilities, and service standards." },
  { title: "Privacy & Data Handling", desc: "How Indsec collects, stores, and protects client information." },
];

export default function InvestorRelationsPage() {
  return (
    <>
      <PageHero kicker="Investor Relations" title="Disclosure & Compliance" />

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
                <li><strong>CIN:</strong> U67120MH1993PLCXXXXXX</li>
                <li><strong>Incorporated:</strong> 1993</li>
                <li><strong>Registered office:</strong> Mumbai, Maharashtra</li>
              </ul>
            </article>
            <article className="pillar">
              <h3 className="pillar__title">Exchange Memberships</h3>
              <ul className="list-crimson">
                <li>National Stock Exchange of India (NSE)</li>
                <li>BSE Ltd.</li>
                <li>Capital Market &amp; F&amp;O segments</li>
              </ul>
            </article>
            <article className="pillar">
              <h3 className="pillar__title">SEBI Registrations</h3>
              <ul className="list-crimson">
                <li><strong>Stock Broker:</strong> INZ000XXXXXX</li>
                <li><strong>Research Analyst:</strong> INH000XXXXXX</li>
                <li><strong>Portfolio Manager:</strong> INP000XXXXXX</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Disclosures */}
      <section className="section" id="disclosures">
        <div className="container">
          <SectionHeading title="Disclosures" withRule />
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
                      fontSize: 20,
                    }}
                  >
                    ▤
                  </span>
                  <div>
                    <h3 className="title-h4" style={{ color: "var(--color-navy-900)", textAlign: "left", marginBottom: 4 }}>{d.title}</h3>
                    <p className="fs-14 mb-3">{d.desc}</p>
                    <Link href="#" className="btn btn--outline-crimson btn--sm">Download PDF</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Grievance */}
      <section className="section section--cream">
        <div className="container">
          <SectionHeading title="Grievance Redressal & Escalation" withRule />
          <div className="grid grid--3">
            <article className="pillar">
              <h3 className="pillar__title">Level 1 · Customer Service</h3>
              <ul className="list-crimson">
                <li><a href="mailto:helpdesk@indsec.co.in">helpdesk@indsec.co.in</a></li>
                <li>Response within 1 working day</li>
              </ul>
            </article>
            <article className="pillar">
              <h3 className="pillar__title">Level 2 · Compliance Officer</h3>
              <ul className="list-crimson">
                <li><a href="mailto:compliance@indsec.co.in">compliance@indsec.co.in</a></li>
                <li>Response within 5 working days</li>
              </ul>
            </article>
            <article className="pillar">
              <h3 className="pillar__title">Level 3 · SCORES (SEBI)</h3>
              <ul className="list-crimson">
                <li><a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer">scores.sebi.gov.in</a></li>
                <li>Online complaint redressal</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Transparency strip */}
      <section className="section">
        <div className="container">
          <div className="info-tip">
            <div className="info-tip__icon" aria-hidden="true">⚖</div>
            <div>
              <p className="info-tip__title">Transparency First</p>
              <p className="info-tip__body">
                "Beware of unsolicited tips and trading-account scams. Never
                share your trading account credentials, OTP, or payment
                instructions with anyone claiming to be from Indsec. We will
                never ask for these over phone or chat."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
