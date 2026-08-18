import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Indsec's institutional desk, family office partners, or compliance team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero kicker="Get in touch" title="Speak to our desk" />

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            {/* Registered & Operations Office */}
            <div className="card" style={{ padding: 28 }}>
              <h2 className="fs-12" style={{ color: "var(--color-crimson-600)", fontWeight: 700, letterSpacing: 1.4, textTransform: "uppercase", margin: "0 0 14px" }}>
                Registered and Operations Office
              </h2>

              <address style={{ fontStyle: "normal", fontSize: "var(--fs-16)", lineHeight: "26px", color: "var(--color-text)", margin: "0 0 22px" }}>
                <strong style={{ color: "var(--color-navy-900)" }}>Indsec Securities and Finance Ltd.</strong><br />
                301/302, &ldquo;215 Atrium&rdquo;, A Wing<br />
                Andheri Kurla Road, Chakala<br />
                Andheri (East), Mumbai - 400 093
              </address>

              <dl className="contact-details">
                <div><dt>Back Office Tel.</dt><dd><a href="tel:+912261146100">+91 22 6114 6100</a></dd></div>
                <div><dt>Front Office Tel.</dt><dd><a href="tel:+912261146114">+91 22 6114 6114</a></dd></div>
                <div><dt>Board Line Tel.</dt><dd><a href="tel:+912261146100">+91 22 6114 6100</a></dd></div>
                <div><dt>Fax</dt><dd>+91 22 6710 6874</dd></div>
                <div><dt>Email</dt><dd><a href="mailto:isfl@indsec.co.in">isfl@indsec.co.in</a></dd></div>
                <div><dt>Bloomberg ID</dt><dd>iindsec@bloomberg.net</dd></div>
                <div><dt>Investor Grievances</dt><dd><a href="mailto:isfl_invgrv@indsec.co.in" aria-label="Investor Grievances isfl_invgrv@indsec.co.in">isfl_invgrv@indsec.co.in</a></dd></div>
              </dl>
            </div>

            {/* Office info */}
            <div>
              <SectionHeading title="Reach the right desk" align="left" withRule />
              <div className="grid grid--2" style={{ gap: 16 }}>
                <article className="pillar">
                  <h3 className="pillar__title">Institutional Desk</h3>
                  <p className="pillar__text">
                    <a href="mailto:dealing@indsec.co.in">dealing@indsec.co.in</a><br />
                    Same trading-day response
                  </p>
                </article>
                <article className="pillar">
                  <h3 className="pillar__title">Family Office</h3>
                  <p className="pillar__text">
                    <a href="mailto:tusharg@indsec.co.in">tusharg@indsec.co.in</a><br />
                    Confidential introductory call
                  </p>
                </article>
                <article className="pillar">
                  <h3 className="pillar__title">Compliance</h3>
                  <p className="pillar__text">
                    <a href="mailto:co@indsec.co.in">co@indsec.co.in</a><br />
                    Grievances &amp; disclosures
                  </p>
                </article>
                <article className="pillar">
                  <h3 className="pillar__title">Escalation Matrix</h3>
                  <p className="pillar__text">
                    Designated contacts and escalation levels for investor grievances.<br />
                    <a
                      href="/documents/Indsec%20-%20Escalation%20Matrix.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View PDF: Escalation Matrix (133 KB). Opens in a new tab."
                    >
                      View PDF <span aria-hidden="true">↗</span>
                    </a>
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3769.851546015754!2d72.8627271!3d19.1141675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83a476aaaab%3A0xae447c452c744d1b!2sIndsec%20Securities%20and%20Finance%20Limited!5e0!3m2!1sen!2sin!4v1782818810047!5m2!1sen!2sin"
              title="Indsec Securities and Finance Limited — office location on Google Maps"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </>
  );
}
