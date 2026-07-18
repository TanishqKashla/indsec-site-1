import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "GIFT City Investments & PMS",
  description:
    "Indsec's GIFT City desk gives NRIs and global investors a regulated, tax-efficient gateway to Indian markets — alongside our Portfolio Management Services.",
};

export default function GiftCityPage() {
  return (
    <>
      <PageHero kicker="Lines of Business · 03" title="GIFT City Investments & PMS" />

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <h2 className="title-h2 text-center" style={{ color: "var(--color-navy-900)", marginBottom: 16 }}>
            India's IFSC, made accessible.
          </h2>
          <p className="lead text-center">
            GIFT City — India's first International Financial Services Centre
            — opens a regulated, dollar-denominated route into Indian capital
            markets. Indsec helps NRIs, PIOs and global investors participate
            with the right structure, the right account and the right
            compliance from day one.
          </p>
        </div>
      </section>

      {/* What GIFT City unlocks */}
      <section className="section section--band">
        <div className="container">
          <SectionHeading title="What GIFT City Unlocks" withRule />
          <div className="grid grid--3">
            <article className="pillar">
              <span className="pillar__icon" aria-hidden="true">🌐</span>
              <h3 className="pillar__title">Global Access, Indian Markets</h3>
              <p className="pillar__text">A regulated bridge for NRIs / FPIs to invest in Indian equities and funds from outside the country.</p>
            </article>
            <article className="pillar">
              <span className="pillar__icon" aria-hidden="true">💱</span>
              <h3 className="pillar__title">Tax & FX Efficiency</h3>
              <p className="pillar__text">Operate in foreign currency with the tax framework specifically designed for the IFSC.</p>
            </article>
            <article className="pillar">
              <span className="pillar__icon" aria-hidden="true">📜</span>
              <h3 className="pillar__title">Regulated by IFSCA</h3>
              <p className="pillar__text">Unified regulation under the International Financial Services Centres Authority — a single window for compliance.</p>
            </article>
          </div>
        </div>
      </section>

      {/* PMS */}
      <section className="section">
        <div className="container">
          <SectionHeading title="Portfolio Management Services" withRule />
          <div className="grid grid--2">
            <article className="pillar">
              <h3 className="pillar__title">Curated Indian Equity Mandates</h3>
              <p className="pillar__text">Carefully whetted different AIF/PMS funds to partner with a few that have provided the best risk-adjusted returns over a longer time-period.</p>
            </article>
            <article className="pillar">
              <h3 className="pillar__title">Reporting & Oversight</h3>
              <p className="pillar__text">Monthly factsheets, attribution reports and direct access to the portfolio manager. Full audit trail.</p>
            </article>
          </div>
        </div>
      </section>

      {/* How to start */}
      <section className="section section--cream">
        <div className="container">
          <SectionHeading
            title="How to Get Started"
            lead="Five guided steps — from your first call to monthly reporting."
            withRule
          />
          <div className="process">
            <div className="process__track" aria-hidden="true" />
            <ol className="process__steps">
              {[
                { n: "1", t: "Introductory Call", d: "We will understand your India investment strategy and explain the benefits of investing through GIFT city." },
                { n: "2", t: "Investment Strategy Discussion", d: "Introduce the funds we have partnered with and explain their strategy and past returns." },
                { n: "3", t: "Account-setup and Documents", d: "Gather all required documents and setup account with AIF Fund." },
                { n: "4", t: "Funding", d: "Inward remittance directly from your international bank account to AIF bank account." },
                { n: "5", t: "Monthly reports", d: "We closely track your funds performance by generating monthly performance reports." },
              ].map((s) => (
                <li key={s.n} className="process__step">
                  <span className="process__num" aria-hidden="true">{s.n}</span>
                  <h3 className="process__title">{s.t}</h3>
                  <p className="process__desc">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--skyline">
        <div className="container text-center">
          <h2 style={{ color: "#fff", marginBottom: 12 }}>Invest in India through GIFT City</h2>
          <p className="lead" style={{ color: "rgba(255,255,255,0.9)", maxWidth: 720, margin: "0 auto 24px" }}>
            Tell us about your residency and mandate — we'll map the cleanest route.
          </p>
          <Link href="/contact" className="btn btn--white">Talk to GIFT City Desk</Link>
        </div>
      </section>
    </>
  );
}
