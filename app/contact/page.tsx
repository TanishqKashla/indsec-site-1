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
            {/* Form */}
            <form className="card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
              <h2 className="title-h2" style={{ color: "var(--color-navy-900)" }}>Send us a message</h2>

              <label className="flex flex--col" style={{ gap: 6 }}>
                <span className="fs-14" style={{ fontWeight: 600 }}>Name</span>
                <input
                  type="text"
                  required
                  style={{
                    height: 40, padding: "8px 12px",
                    border: "1px solid var(--color-border-soft)",
                    borderRadius: 6, fontFamily: "inherit", fontSize: 16,
                  }}
                />
              </label>

              <label className="flex flex--col" style={{ gap: 6 }}>
                <span className="fs-14" style={{ fontWeight: 600 }}>Work Email</span>
                <input
                  type="email"
                  required
                  style={{
                    height: 40, padding: "8px 12px",
                    border: "1px solid var(--color-border-soft)",
                    borderRadius: 6, fontFamily: "inherit", fontSize: 16,
                  }}
                />
              </label>

              <label className="flex flex--col" style={{ gap: 6 }}>
                <span className="fs-14" style={{ fontWeight: 600 }}>Institution</span>
                <input
                  type="text"
                  style={{
                    height: 40, padding: "8px 12px",
                    border: "1px solid var(--color-border-soft)",
                    borderRadius: 6, fontFamily: "inherit", fontSize: 16,
                  }}
                />
              </label>

              <label className="flex flex--col" style={{ gap: 6 }}>
                <span className="fs-14" style={{ fontWeight: 600 }}>How can we help?</span>
                <select
                  style={{
                    height: 40, padding: "8px 12px",
                    border: "1px solid var(--color-border-soft)",
                    borderRadius: 6, fontFamily: "inherit", fontSize: 16, background: "#fff",
                  }}
                >
                  <option>Institutional Broking</option>
                  <option>Research distribution access</option>
                  <option>Family Office advisory</option>
                  <option>GIFT City / PMS</option>
                  <option>Compliance / Grievance</option>
                </select>
              </label>

              <label className="flex flex--col" style={{ gap: 6 }}>
                <span className="fs-14" style={{ fontWeight: 600 }}>Message</span>
                <textarea
                  rows={5}
                  style={{
                    padding: "10px 12px",
                    border: "1px solid var(--color-border-soft)",
                    borderRadius: 6, fontFamily: "inherit", fontSize: 16, resize: "vertical",
                  }}
                />
              </label>

              <button type="submit" className="btn btn--crimson" style={{ alignSelf: "flex-start" }}>
                Send message
              </button>
            </form>

            {/* Office info */}
            <div>
              <SectionHeading title="Reach the right desk" align="left" withRule />
              <div className="grid grid--2" style={{ gap: 16 }}>
                <article className="pillar">
                  <h3 className="pillar__title">Institutional Desk</h3>
                  <p className="pillar__text">
                    <a href="mailto:desk@indsec.co.in">desk@indsec.co.in</a><br />
                    Same trading-day response
                  </p>
                </article>
                <article className="pillar">
                  <h3 className="pillar__title">Family Office</h3>
                  <p className="pillar__text">
                    <a href="mailto:familyoffice@indsec.co.in">familyoffice@indsec.co.in</a><br />
                    Confidential introductory call
                  </p>
                </article>
                <article className="pillar">
                  <h3 className="pillar__title">Compliance</h3>
                  <p className="pillar__text">
                    <a href="mailto:compliance@indsec.co.in">compliance@indsec.co.in</a><br />
                    Grievances &amp; disclosures
                  </p>
                </article>
                <article className="pillar">
                  <h3 className="pillar__title">Registered Office</h3>
                  <p className="pillar__text">
                    Indsec Securities &amp; Finance Limited<br />
                    Mumbai, Maharashtra, India
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
