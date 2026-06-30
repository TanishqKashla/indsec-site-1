import Link from "next/link";
import { Logo } from "./Logo";

const COMPANY = [
  { href: "/about", label: "About Us" },
  { href: "/about#history", label: "Company History" },
  { href: "/about#team", label: "Board of Directors" },
  { href: "/lines-of-business", label: "Lines of Business" },
  { href: "/research", label: "Research" },
];

const SERVICES = [
  { href: "/institutional-broking", label: "Institutional Broking" },
  { href: "/family-office", label: "Family Office" },
  { href: "/gift-city", label: "GIFT City / PMS" },
  { href: "/research#reports", label: "Research Reports" },
  { href: "/disclosures/corporate-disclosure", label: "Corporate Disclosures" },
];

const REGISTRATIONS: { label: string; value: string }[] = [
  { label: "CIN", value: "U67120MH1993PLC073185" },
  { label: "PAN", value: "AAACI1958G" },
  { label: "GSTIN", value: "27AAACI1958G1ZL" },
  { label: "SEBI Regn. (BSE / NSE / MCX-SX)", value: "INZ000236731" },
  { label: "NSDL Depository", value: "IN-DP-475-2020" },
  { label: "Portfolio Mgmt. (PMS)", value: "INP000001892" },
  { label: "AMFI Regn.", value: "ARN 9194" },
];

const LINKEDIN_URL =
  "https://www.linkedin.com/company/indsec-securities-and-finance-ltd";

export function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="visually-hidden" style={{ position: "absolute", left: -9999 }}>
        Footer
      </h2>

      <div className="container">
        {/* ---- Navigation + brand ---- */}
        <div className="footer__top">
          <div className="footer__brand">
            <Logo mode="light" size={92} />
            <p className="footer__tagline">
              Insight drives performance. Execution builds trust. Research-led
              institutional broking, family office and GIFT City access — under
              one roof since 1993.
            </p>
            <a
              className="footer__linkedin"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Indsec on LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 17v-6.7H6.1V17h2.24zM7.22 9.31a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6zM18 17v-3.67c0-1.96-.42-3.47-2.71-3.47-1.1 0-1.84.6-2.14 1.18h-.03V10.3H10.9V17h2.23v-3.31c0-.87.17-1.72 1.25-1.72 1.07 0 1.08 1 1.08 1.78V17H18z" />
              </svg>
              <span>Follow on LinkedIn</span>
            </a>
          </div>

          <nav className="footer__col" aria-label="Company">
            <h3 className="footer__title">Company</h3>
            <ul className="footer__links">
              {COMPANY.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>

          <nav className="footer__col" aria-label="Services">
            <h3 className="footer__title">Services</h3>
            <ul className="footer__links">
              {SERVICES.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h3 className="footer__title">Get in Touch</h3>
            <ul className="footer__links">
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/important-links">Important Links</Link></li>
            </ul>
            <a className="footer__cta" href="mailto:isfl_invgrv@indsec.co.in">
              Investor Grievances
              <span className="footer__cta-mail">isfl_invgrv@indsec.co.in</span>
            </a>
          </div>
        </div>

        {/* ---- Compliance: registrations + SCORES ---- */}
        <div className="footer__compliance">
          <div className="footer__reg">
            <h3 className="footer__title footer__title--sm">Registration &amp; Statutory Details</h3>
            <dl className="footer__reg-grid">
              {REGISTRATIONS.map((r) => (
                <div key={r.label} className="footer__reg-item">
                  <dt>{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="footer__scores" aria-label="SEBI SCORES complaints">
            <h3 className="footer__title footer__title--sm">Filing Complaints on SEBI SCORES</h3>
            <p className="footer__scores-lead">Easy &amp; quick — here&apos;s how:</p>
            <ol className="footer__scores-list">
              <li>Register on the SCORES portal.</li>
              <li>
                Keep mandatory details ready: Name, PAN, Address, Mobile Number
                and E-mail ID.
              </li>
              <li>
                Benefits: effective communication and speedy redressal of
                grievances.
              </li>
            </ol>
          </aside>
        </div>

        {/* ---- Bottom bar ---- */}
        <div className="footer__bottom">
          <nav className="footer__legal-links" aria-label="Legal">
            <a href="https://www.indsec.co.in/disclaimer" target="_blank" rel="noopener noreferrer">Disclaimers</a>
            <Link href="/disclosures">Regulatory Disclosure</Link>
            <Link href="/important-links#grievance">Grievance Redressal</Link>
            <Link href="/important-links">Important Links</Link>
          </nav>

          <span>© {new Date().getFullYear()} Indsec Securities &amp; Finance Limited. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
