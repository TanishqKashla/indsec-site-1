import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { LinesOfBusinessTabs } from "@/components/LinesOfBusinessTabs";
import { WeServe } from "@/components/WeServe";
import { LogoMarquee, type ClientLogo } from "@/components/LogoMarquee";
import { ArrowIcon } from "@/components/ArrowIcon";

// institutions with logo marks — split across two marquee rows
const CLIENT_LOGOS: ClientLogo[] = [
  { name: "LIC", file: "lic.jpeg" },
  { name: "State Bank of India", file: "sbi_logo.png" },
  { name: "Star Union Dai-ichi", file: "star union daichi.png" },
  { name: "GIC", file: "gic.png" },
  { name: "SBI General Insurance", file: "sbi general.webp" },
  { name: "New India Assurance", file: "NIA_logo.png", dark: true },
  { name: "United India Insurance", file: "uii.jpg" },
  { name: "Quant Mutual Fund", file: "quant-logo.png" },
  { name: "Taurus Mutual Fund", file: "taurus.png" },
  { name: "Shriram Mutual Fund", file: "shriram-amc-logo.webp" },
  { name: "Capitalmind Mutual Fund", file: "capitalmind.png" },
  { name: "LIC Pension Fund", file: "lic pension fund.png" },
  { name: "Axis Pension Fund", file: "axis pension fund.png", dark: true },
  { name: "HDFC Bank", file: "hdfc bank.png" },
  { name: "Bank of Baroda", file: "bob.png", dark: true },
  { name: "Federal Bank", file: "federal bank.png" },
  { name: "ICICI Bank", file: "icici bank.png", dark: true },
  { name: "Union Bank of India", file: "ubi_logo.png" },
  { name: "IDBI Bank", file: "IDBI_Logo.jpg" },
  { name: "RBL Bank", file: "rbl.png" },
  { name: "Indian Bank", file: "indian bank.jpg" },
  { name: "Equitas Small Finance Bank", file: "equitas.webp" },
  { name: "SIDBI", file: "sidbi.jpg" },
  { name: "Unifi Mutual Fund", file: "unifi mutual fund.png" },
  { name: "Bank of India Mutual Fund", file: "boi mutual fund.jpg" },
  { name: "Universal Sompo General Insurance", file: "universal sompo.svg" },
  { name: "National Insurance", file: "national insurance.svg" },
];

// alternate logos into two rows so both marquee rows are roughly balanced
const LOGO_ROWS: ClientLogo[][] = [
  CLIENT_LOGOS.filter((_, i) => i % 2 === 0),
  CLIENT_LOGOS.filter((_, i) => i % 2 === 1),
];

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------------------------ Hero */}
      <section className="hero-home" aria-label="Indsec — research-led institutional broking">
        <div className="hero-home__bg" aria-hidden="true">
          <Image
            src="/hero-skyline.jpg"
            alt=""
            fill
            priority
            quality={85}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <span className="hero-home__overlay" aria-hidden="true" />

        <div className="hero-home__inner">
          <div className="hero-home__content">
            <h1 className="hero-home__title">
              Research-led institutional broking for{" "}
              <span className="hero-home__accent">India&apos;s markets</span>
            </h1>

            <p className="hero-home__sub">
              Insight drives performance. Execution builds trust. We partner with
              institutions and family offices — pairing deep India research with
              high-touch execution and three decades of market access.
            </p>

            <div className="hero-home__cta">
              <Link href="/contact" className="btn btn--white">
                Speak to Our Desk
              </Link>
              <Link href="/research" className="btn btn--ghost-white hero-home__ghost">
                Access Research <ArrowIcon />
              </Link>
            </div>

            <ul className="hero-home__trust" aria-label="At a glance">
              <li><strong>1993</strong><span>Incorporated</span></li>
              <li><strong>25+ yrs</strong><span>On the exchange</span></li>
              <li><strong>NSE · BSE</strong><span>Member</span></li>
              <li><strong>SEBI</strong><span>Registered</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ Who we are */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Who We Are"
            lead="We empower institutions and family offices with in-depth research, seamless trade execution, and prompt support and compliance. We partner with global and domestic institutions and family offices to navigate India's dynamic and rapidly evolving markets."
            withRule
          />
        </div>
      </section>

      {/* ------------------------------------------------------------------ What sets Indsec apart */}
      <section className="section section--band">
        <div className="container">
          <SectionHeading title="What Sets Indsec Apart" withRule />

          <div className="grid grid--4">
            <article className="pillar pillar--image">
              <Image src="/setsapart1.jpg" alt="" fill quality={85} sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 25vw" className="pillar__img" style={{ objectFit: "cover" }} />
              <span className="pillar__scrim" aria-hidden="true" />
              <span className="pillar__icon" aria-hidden="true">
                {/* map pin — on-ground in India */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <h3 className="pillar__title">India-first Lens</h3>
              <p className="pillar__text">
                Strong on-ground insights from a team that lives the Indian
                market every single trading session.
              </p>
            </article>

            <article className="pillar pillar--image">
              <Image src="/setsapart2.jpg" alt="" fill quality={85} sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 25vw" className="pillar__img" style={{ objectFit: "cover" }} />
              <span className="pillar__scrim" aria-hidden="true" />
              <span className="pillar__icon" aria-hidden="true">
                {/* magnifying glass — research */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </span>
              <h3 className="pillar__title">Focused Research</h3>
              <p className="pillar__text">
                Quality over quantity. Deep coverage of the sectors that
                actually move portfolios.
              </p>
            </article>

            <article className="pillar pillar--image">
              <Image src="/setsapart3.jpg" alt="" fill quality={85} sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 25vw" className="pillar__img" style={{ objectFit: "cover" }} />
              <span className="pillar__scrim" aria-hidden="true" />
              <span className="pillar__icon" aria-hidden="true">
                {/* headset — high-touch dealing desk */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 14v-2a9 9 0 0 1 18 0v2" />
                  <path d="M21 14h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2Z" />
                  <path d="M3 14h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H3Z" />
                </svg>
              </span>
              <h3 className="pillar__title">High-touch Sales &amp; Trading</h3>
              <p className="pillar__text">
                A dealing desk built for speed, discretion and reliability —
                with direct analyst access.
              </p>
            </article>

            <article className="pillar pillar--image">
              <Image src="/setsapart4.jpg" alt="" fill quality={85} sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 25vw" className="pillar__img" style={{ objectFit: "cover" }} />
              <span className="pillar__scrim" aria-hidden="true" />
              <span className="pillar__icon" aria-hidden="true">
                {/* people — corporate relationships & access */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <h3 className="pillar__title">Corporate Relationships</h3>
              <p className="pillar__text">
                Three decades of management access — opening doors that
                others can't.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ Lines of Business */}
      <section className="section">
        <div className="container">
          <SectionHeading title="Our Lines of Business" withRule />
          <LinesOfBusinessTabs />
        </div>
      </section>

      {/* ------------------------------------------------------------------ We Serve */}
      <section className="section section--band">
        <div className="container">
          <SectionHeading
            title="We Serve"
            lead="A trusted partner for the most demanding institutional and private capital pools in India."
            withRule
          />

          <WeServe />

          {/* Client logos — continuously panning marquee */}
          <div className="logo-section">
            <p className="logo-grid__kicker">Trusted by leading institutions</p>
            <LogoMarquee rows={LOGO_ROWS} />
            <p className="fs-12 muted text-center" style={{ marginTop: 16 }}>
              Representative institutional relationships across banks, mutual
              funds, insurers and pension funds. Marks belong to their
              respective owners.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ Stats / trust */}
      <section className="section">
        <div className="container">
          <dl className="stats">
            <div className="stats__item">
              <dt className="stats__label">Incorporated</dt>
              <dd className="stats__num">1993</dd>
            </div>
            <div className="stats__item">
              <dt className="stats__label">Years on the exchange</dt>
              <dd className="stats__num">25+</dd>
            </div>
            <div className="stats__item">
              <dt className="stats__label">Member</dt>
              <dd className="stats__num">NSE · BSE</dd>
            </div>
            <div className="stats__item">
              <dt className="stats__label">Registered &amp; compliant</dt>
              <dd className="stats__num">SEBI</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ------------------------------------------------------------------ CTA strip */}
      <section className="section section--navy">
        <div className="container text-center">
          <h2 style={{ color: "#fff", marginBottom: 12 }}>
            Ready to put research-driven execution to work?
          </h2>
          <p className="lead" style={{ color: "rgba(255,255,255,0.9)", maxWidth: 720, margin: "0 auto 24px" }}>
            Tell us about your mandate. Our institutional desk responds the same trading day.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/contact" className="btn btn--white">Speak to Our Desk</Link>
            <Link
              href="/research"
              className="btn btn--ghost-white"
              style={{ borderRadius: "var(--radius-md)", padding: "8px 18px", fontSize: "var(--fs-16)", textTransform: "none", letterSpacing: "normal" }}
            >
              Access Research
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
