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
  { href: "/investor-relations#disclosures", label: "Corporate Disclosures" },
];

const SOCIAL: { label: string; href: string; icon: React.ReactNode }[] = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 17v-6.7H6.1V17h2.24zM7.22 9.31a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6zM18 17v-3.67c0-1.96-.42-3.47-2.71-3.47-1.1 0-1.84.6-2.14 1.18h-.03V10.3H10.9V17h2.23v-3.31c0-.87.17-1.72 1.25-1.72 1.07 0 1.08 1 1.08 1.78V17H18z" />
    ),
  },
  {
    label: "X (Twitter)",
    href: "#",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
    ),
  },
];

export function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="visually-hidden" style={{ position: "absolute", left: -9999 }}>
        Footer
      </h2>

      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <Logo mode="light" size={92} />
            <p className="footer__tagline">
              Insight drives performance. Execution builds trust. Research-led
              institutional broking, family office and GIFT City access — under
              one roof since 1993.
            </p>
            <div className="footer__social" aria-label="Indsec on social media">
              {SOCIAL.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <nav className="footer__col" aria-label="Company">
            <h3 className="footer__title">Company</h3>
            <ul className="footer__links">
              {COMPANY.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav className="footer__col" aria-label="Services">
            <h3 className="footer__title">Services</h3>
            <ul className="footer__links">
              {SERVICES.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>

          {/* Reach us */}
          <div className="footer__col">
            <h3 className="footer__title">Reach Us</h3>
            <address className="footer__address">
              Indsec Securities &amp; Finance Limited
              <br />
              Mumbai, Maharashtra, India
            </address>
            <Link href="/contact" className="footer__cta">
              Talk to our desk
              <span aria-hidden="true">→</span>
            </Link>
            <p className="footer__badge">
              <span aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
              </span>
              SEBI-registered · NSE &amp; BSE Member
            </p>
          </div>
        </div>

        {/* Fine-print regulatory band */}
        <div className="footer__reg">
          <span>CIN: U67120MH1993PLC073185</span>
          <span>SEBI: Stock Broker INZ000236731 · NSDL IN-DP-475-2020 · PMS INP000001892</span>
          <span>Incorporated 1993 · 25+ years on the exchange</span>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Indsec Securities &amp; Finance Limited. All rights reserved.</span>

          <nav className="footer__legal-links" aria-label="Legal">
            <a href="https://www.indsec.co.in/disclaimer" target="_blank" rel="noopener noreferrer">Disclaimers</a>
            <Link href="/investor-relations#disclosures">Regulatory Disclosure</Link>
            <Link href="/investor-relations#grievance">Grievance Redressal</Link>
            <a href="https://siportal.sebi.gov.in/intermediary/sebi-check" target="_blank" rel="noopener noreferrer">SEBI Check</a>
          </nav>

          <span className="footer__disclosure">
            Responsible disclosure:{" "}
            <a href="mailto:compliance@indsec.co.in">compliance@indsec.co.in</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
