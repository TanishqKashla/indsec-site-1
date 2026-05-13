import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="visually-hidden" style={{ position: "absolute", left: -9999 }}>
        Footer
      </h2>

      <div className="container">
        <div style={{ marginBottom: 32 }}>
          <Logo mode="dark" size={42} />
        </div>

        <div className="footer__grid">
          {/* Contact / regulatory */}
          <ul className="footer__contact" style={{ padding: 0, margin: 0 }}>
            <li>Indsec Securities &amp; Finance Limited, Mumbai, Maharashtra, India</li>
            <li>
              CIN: U67120MH1993PLCXXXXXX &nbsp;Tel:&nbsp;
              <a href="tel:+912200000000">+91 22 0000 0000</a>
            </li>
            <li>Member of National Stock Exchange of India (NSE) and BSE Ltd.</li>
            <li>SEBI Registration no. INZ000XXXXXX</li>
            <li>Incorporated 1993 · Over 25 years of market experience</li>
          </ul>

          {/* Quick Links */}
          <div>
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about#history">— Company History</Link></li>
              <li><Link href="/about#team">— Team Bios &amp; Photos</Link></li>
              <li><Link href="/lines-of-business">Lines of Business</Link></li>
              <li><Link href="/institutional-broking">— Institutional Broking</Link></li>
              <li><Link href="/family-office">— Family Office</Link></li>
              <li><Link href="/gift-city">— GIFT City / PMS</Link></li>
              <li><Link href="/research">Research</Link></li>
              <li><Link href="/research#reports">— Reports</Link></li>
              <li><Link href="/investor-relations">Investor Relations</Link></li>
              <li><Link href="/investor-relations#disclosures">— Disclosures</Link></li>
            </ul>
          </div>

          {/* Follow + Legal */}
          <div>
            <h3 className="footer__title">Follow us</h3>
            <div className="footer__social" aria-label="Social links">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Twitter">tw</a>
              <a href="#" aria-label="Facebook">fb</a>
              <a href="#" aria-label="YouTube">yt</a>
            </div>

            <p className="muted fs-12 mb-3">Our websites / applications / social handles</p>
            <p className="footer__legal-links">
              <Link href="#">Disclaimers</Link> |{" "}
              <Link href="#">Privacy Policy</Link> |{" "}
              <Link href="#">Regulatory Disclosure</Link> |{" "}
              <Link href="#">Cookies Policy</Link> |{" "}
              <Link href="#">Grievance redressal</Link>
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Indsec Securities &amp; Finance Limited. All rights reserved.</span>
          <span className="muted">
            Responsible Disclosure:{" "}
            <a href="mailto:compliance@indsec.co.in">compliance@indsec.co.in</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
