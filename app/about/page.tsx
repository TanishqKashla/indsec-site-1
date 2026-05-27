import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Incorporated in 1993, Indsec is an early member of the NSE with over 25 years of market experience — institutional broking, family office and GIFT City under one roof.",
};

const LEADERS = [
  {
    name: "Nandkishore Gupta",
    role: "Managing Director",
    qual: "FCA · B.Com (Hons)",
    bio: "A commerce graduate from the University of Mumbai and a Fellow Member of the ICAI. Associated with Indsec since June 1994 and Managing Director since July 2000, he brings over four decades of experience in the capital markets.",
  },
  {
    name: "Maya Gandhi",
    role: "Whole-time Director",
    qual: "Operations & Surveillance",
    bio: "With Indsec since September 1994, Maya oversees key operations and brings over three decades in the capital markets — including five years in the Inspection & Surveillance Department of BSE Limited.",
  },
  {
    name: "Diamond Dand",
    role: "Whole-time Director & CFO",
    qual: "B.Com · ACA",
    bio: "A qualified Chartered Accountant with more than two decades in the capital markets. With Indsec since October 2007, he leads the Finance and Compliance functions, having previously worked with reputed chartered accountancy firms.",
  },
  {
    name: "Tushar Nandkishore Gupta",
    role: "Whole-time Director",
    qual: "MBA, Wharton · B.Sc, Babson",
    bio: "An MBA from the Wharton School (UPenn) and a Bachelor's in Business Management from Babson College, USA. Previously with Amazon, Boston Scientific and EY LLP; appointed Whole-time Director in March 2026.",
  },
  {
    name: "Darshita Shah",
    role: "Independent Director",
    qual: "B.Com · ACS · LL.B",
    bio: "A law graduate from the University of Mumbai and an associate member of the ICSI. She has served as an Independent Director on the Indsec board since May 2024.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero kicker="Since 1993" title="About Indsec" />

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <p className="lead">
            Incorporated in 1993, Indsec is among the early members of the
            NSE, with over 25 years of market experience. We offer a
            comprehensive suite of investment services under one roof —
            including institutional broking, family office solutions, and
            GIFT City access for NRIs. As a trusted partner to our clients,
            we are committed to consistent performance, transparency, and
            strong compliance.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section--band" id="history">
        <div className="container">
          <SectionHeading title="Company History" lead="Three decades of compounding on the Indian markets." withRule />
          <div className="timeline">
            <div>
              <div className="timeline__dot" />
              <p className="timeline__year">1993</p>
              <p className="timeline__label">Indsec incorporated</p>
            </div>
            <div>
              <div className="timeline__dot" />
              <p className="timeline__year">NSE</p>
              <p className="timeline__label">Member since inception years</p>
            </div>
            <div>
              <div className="timeline__dot" />
              <p className="timeline__year">BSE</p>
              <p className="timeline__label">Member</p>
            </div>
            <div>
              <div className="timeline__dot" />
              <p className="timeline__year">2019</p>
              <p className="timeline__label">Industry award presented</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="section">
        <div className="container">
          <SectionHeading title="Our Philosophy" withRule />
          <div className="grid grid--3">
            <article className="pillar">
              <span className="pillar__icon" aria-hidden="true">▲</span>
              <h3 className="pillar__title">Wealth Maximization</h3>
              <p className="pillar__text">Every recommendation, every trade, and every advisory mandate is judged on one yardstick: did it create value for the client.</p>
            </article>
            <article className="pillar">
              <span className="pillar__icon" aria-hidden="true">◇</span>
              <h3 className="pillar__title">Research-driven Decisions</h3>
              <p className="pillar__text">We don't chase consensus. Original, primary-research-backed ideas are the foundation of every position we put forward.</p>
            </article>
            <article className="pillar">
              <span className="pillar__icon" aria-hidden="true">●</span>
              <h3 className="pillar__title">Ethical &amp; Compliant</h3>
              <p className="pillar__text">Strict adherence to SEBI guidelines. Full disclosure of conflicts. Transparent reporting to every stakeholder.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section section--cream" id="team">
        <div className="container">
          <SectionHeading
            title="Board of Directors"
            lead="A board with decades of cycle-tested experience across broking, finance, compliance and capital markets."
            withRule
          />
          <div className="grid grid--3">
            {LEADERS.map((p) => (
              <article key={p.name} className="card">
                <div
                  className="card__media"
                  aria-hidden="true"
                  style={{ background: "linear-gradient(135deg, #1B2A5E 0%, #9C1B1F 100%)", color: "#fff", fontSize: 40, aspectRatio: "16 / 9" }}
                >
                  {p.name.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                </div>
                <div className="card__body">
                  <h3 className="title-h4" style={{ textAlign: "center", color: "var(--color-navy-900)", marginBottom: 2 }}>{p.name}</h3>
                  <p className="fs-12 text-center" style={{ color: "var(--color-crimson-600)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>{p.role}</p>
                  <p className="fs-12 muted text-center mb-3">{p.qual}</p>
                  <p className="fs-14" style={{ color: "var(--color-text)" }}>{p.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance strip */}
      <section className="section">
        <div className="container">
          <div className="info-tip">
            <div className="info-tip__icon" aria-hidden="true">⚖</div>
            <div>
              <p className="info-tip__title">Transparency First</p>
              <p className="info-tip__body">
                Indsec operates under strict regulatory frameworks with full
                adherence to SEBI guidelines — including SEBI registration,
                published research disclaimers and clear conflict-of-interest
                disclosures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
