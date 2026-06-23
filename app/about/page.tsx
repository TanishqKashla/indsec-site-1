import type { Metadata } from "next";
import Image from "next/image";
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
    photo: "/NandkishorGupta.jpg",
    bio: "A commerce graduate from the University of Mumbai and a Fellow Member of the ICAI. Associated with Indsec since June 1994 and Managing Director since July 2000, he brings over four decades of experience in the capital markets.",
  },
  {
    name: "Maya Gandhi",
    role: "Whole-time Director",
    qual: "Operations & Surveillance",
    photo: "/MayaGandhi.jpg",
    bio: "With Indsec since September 1994, Maya oversees key operations and brings over three decades in the capital markets — including five years in the Inspection & Surveillance Department of BSE Limited.",
  },
  {
    name: "Diamond Dand",
    role: "Whole-time Director & CFO",
    qual: "B.Com · ACA",
    photo: "/DiamondDand.jpg",
    bio: "A qualified Chartered Accountant with more than two decades in the capital markets. With Indsec since October 2007, he leads the Finance and Compliance functions, having previously worked with reputed chartered accountancy firms.",
  },
  {
    name: "Tushar Nandkishore Gupta",
    role: "Whole-time Director",
    qual: "MBA, Wharton · B.Sc, Babson",
    photo: "/TusharNandkishore.jpeg",
    bio: "An MBA from the Wharton School (UPenn) and a Bachelor's in Business Management from Babson College, USA. Previously with Amazon, Boston Scientific and EY LLP; appointed Whole-time Director in March 2026.",
  },
  {
    name: "Darshita Shah",
    role: "Independent Director",
    qual: "B.Com · ACS · LL.B",
    photo: "/darshitashah.png",
    bio: "A law graduate from the University of Mumbai and an associate member of the ICSI. She has served as an Independent Director on the Indsec board since May 2024.",
  },
];

const MILESTONES = [
  { badge: "1993", title: "Founded", label: "Indsec Securities & Finance incorporated in Mumbai." },
  { badge: "NSE", title: "Early Member", label: "Among the early members of the National Stock Exchange." },
  { badge: "BSE", title: "Exchange Member", label: "Trading member of BSE Limited." },
  { badge: "2010", title: "Wealth Management", label: "Expanded into wealth management, broadening our advisory offering." },
  { badge: "2019", title: "Recognised", label: "Honoured with an industry award for excellence." },
  { badge: "2023", title: "GIFT City", label: "Expanded into GIFT City, opening a regulated gateway for global investors." },
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

      {/* Company History — image left, vertical timeline right */}
      <section className="section section--band" id="history">
        <div className="container">
          <div className="history-split">
            <div className="history-split__media">
              <Image
                src="/companyhistory.jpg"
                alt="Indsec through the years"
                fill
                quality={85}
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="history-split__content">
              <SectionHeading title="Company History" align="left" withRule />
              <p className="lead history-split__lead">
                Three decades of compounding on the Indian markets.
              </p>
              <ol className="vtimeline">
                {MILESTONES.map((m) => (
                  <li key={m.badge} className="vtimeline__item">
                    <span className="vtimeline__node" aria-hidden="true">{m.badge}</span>
                    <div className="vtimeline__body">
                      <p className="vtimeline__title">{m.title}</p>
                      <p className="vtimeline__label">{m.label}</p>
                    </div>
                  </li>
                ))}
              </ol>
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
          <div className="team-grid">
            {LEADERS.map((p) => (
              <article key={p.name} className="team-card">
                <div className="team-card__avatar">
                  <Image
                    src={p.photo}
                    alt={p.name}
                    fill
                    quality={90}
                    sizes="120px"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                </div>
                <h3 className="team-card__name">{p.name}</h3>
                <p className="team-card__role">{p.role}</p>
                <p className="team-card__qual">{p.qual}</p>
                <p className="team-card__bio">{p.bio}</p>
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
