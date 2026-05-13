import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { LinesOfBusinessTabs } from "@/components/LinesOfBusinessTabs";

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------------------------ Hero */}
      <section className="hero" aria-label="Indsec — who we are">
        <div className="hero__inner">
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              textTransform: "uppercase",
              letterSpacing: 2,
              fontSize: 14,
              marginBottom: 16,
            }}
          >
            Indsec · NSE &amp; BSE Member · Since 1993
          </p>

          <div className="hero__panel">
            <h1 className="hero__title">
              Insight drives performance. Execution builds trust.
            </h1>
          </div>

          <div className="hero__pillars">
            <span>Deep India Expertise</span>
            <span>Research-driven Decision Making</span>
            <span>Seamless Execution</span>
          </div>

          <div className="btn-row" style={{ justifyContent: "center", marginTop: 32 }}>
            <Link href="/institutional-broking" className="btn btn--white">
              Speak to Our Desk
            </Link>
            <Link href="/research" className="btn btn--ghost-white">
              Access Research
            </Link>
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
            <article className="pillar">
              <span className="pillar__icon" aria-hidden="true">◧</span>
              <h3 className="pillar__title">India-first Lens</h3>
              <p className="pillar__text">
                Strong on-ground insights from a team that lives the Indian
                market every single trading session.
              </p>
            </article>

            <article className="pillar">
              <span className="pillar__icon" aria-hidden="true">◔</span>
              <h3 className="pillar__title">Focused Research</h3>
              <p className="pillar__text">
                Quality over quantity. Deep coverage of the sectors that
                actually move portfolios.
              </p>
            </article>

            <article className="pillar">
              <span className="pillar__icon" aria-hidden="true">◑</span>
              <h3 className="pillar__title">High-touch Sales &amp; Trading</h3>
              <p className="pillar__text">
                A dealing desk built for speed, discretion and reliability —
                with direct analyst access.
              </p>
            </article>

            <article className="pillar">
              <span className="pillar__icon" aria-hidden="true">◕</span>
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

          <div className="grid grid--3">
            {[
              { t: "Foreign Institutional Investors", a: "(FIIs)" },
              { t: "Domestic Institutional Investors", a: "(DIIs)" },
              { t: "Mutual Funds", a: "" },
              { t: "Alternative Investment Funds", a: "(AIFs)" },
              { t: "Portfolio Management Services", a: "(PMS)" },
              { t: "Foreign Portfolio Investors", a: "(FPIs)" },
            ].map((c) => (
              <article key={c.t} className="card">
                <div className="card__body" style={{ textAlign: "center", padding: 24 }}>
                  <h3 className="title-h4" style={{ color: "var(--color-navy-900)" }}>{c.t}</h3>
                  {c.a && <p className="fs-14 muted" style={{ marginTop: 4 }}>{c.a}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ Stats / trust */}
      <section className="section">
        <div className="container">
          <div className="stats">
            <div>
              <div className="stats__num">1993</div>
              <div className="stats__label">Incorporated</div>
            </div>
            <div>
              <div className="stats__num">25+</div>
              <div className="stats__label">Years on the exchange</div>
            </div>
            <div>
              <div className="stats__num">NSE · BSE</div>
              <div className="stats__label">Member</div>
            </div>
            <div>
              <div className="stats__num">SEBI</div>
              <div className="stats__label">Registered &amp; compliant</div>
            </div>
          </div>
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
            <Link href="/research" className="btn btn--ghost-white">Access Research</Link>
          </div>
        </div>
      </section>
    </>
  );
}
