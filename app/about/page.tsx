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
    name: "Leadership One",
    role: "Managing Director",
    bio: "20+ years across institutional equities. Previously led India research at a global investment bank; sector specialist in financials and industrials.",
  },
  {
    name: "Leadership Two",
    role: "Head of Institutional Sales",
    bio: "Sales career spanning FIIs, DIIs and large family offices. Known for high-touch coverage of long-only and event-driven investors.",
  },
  {
    name: "Leadership Three",
    role: "Head of Research",
    bio: "Award-winning analyst with a quality-over-quantity coverage philosophy. Anchors Indsec's sector deep-dives and macro outlook.",
  },
  {
    name: "Leadership Four",
    role: "Head of Family Office",
    bio: "Chartered Accountant and trust law specialist; advises promoter families on succession, settlements and cross-border investment.",
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
            title="Leadership Team"
            lead="Operators and analysts with deep credibility markers — prior firms, sector ownership, and decades of cycle-tested experience."
            withRule
          />
          <div className="grid grid--4">
            {LEADERS.map((p) => (
              <article key={p.name} className="card">
                <div
                  className="card__media"
                  aria-hidden="true"
                  style={{ background: "linear-gradient(135deg, #1B2A5E 0%, #9C1B1F 100%)", color: "#fff", fontSize: 48 }}
                >
                  {p.name.split(" ").map((w) => w[0]).join("")}
                </div>
                <div className="card__body">
                  <h3 className="title-h4" style={{ textAlign: "center", color: "var(--color-navy-900)" }}>{p.name}</h3>
                  <p className="fs-12 muted text-center mb-3" style={{ textTransform: "uppercase", letterSpacing: 1 }}>{p.role}</p>
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
