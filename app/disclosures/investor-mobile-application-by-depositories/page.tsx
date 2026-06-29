import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Investor Mobile Application by Depositories",
  description:
    "Consolidated mobile applications from NSDL and CDSL giving investors a single-login, bird's-eye view of their securities holdings, statements, e-voting and more.",
};

const BENEFITS = [
  "Consolidated view of securities across both depositories with a single login",
  "Transaction and holding statements in one location",
  "Open positions and margin monitoring across exchanges",
  "E-voting capability on company resolutions",
  "Access to proxy adviser recommendations",
];

type Store = { label: string; href: string; logo: string };
type App = {
  name: string;
  depository: string;
  desc: string;
  icon: string;
  stores: Store[];
};

const APP_STORE = "/app-icons/app-store.png";
const GOOGLE_PLAY = "/app-icons/google-play.png";

const APPS: App[] = [
  {
    name: "NSDL Speede",
    depository: "National Securities Depository Limited (NSDL)",
    desc: "NSDL's investor application for a consolidated view of your demat holdings, statements and e-voting.",
    icon: "/app-icons/nsdl-speede.png",
    stores: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/nsdl-speede-app/id922834763",
        logo: APP_STORE,
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.msf.NSDL.Android",
        logo: GOOGLE_PLAY,
      },
    ],
  },
  {
    name: "CDSL myeasi",
    depository: "Central Depository Services (India) Limited (CDSL)",
    desc: "CDSL's investor application for viewing holdings, statements and managing your demat account on the go.",
    icon: "/app-icons/cdsl-myeasi.png",
    stores: [
      {
        label: "App Store",
        href: "https://apps.apple.com/in/app/cdsl-myeasi-app/id6737304195",
        logo: APP_STORE,
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.cdsl.myeasi",
        logo: GOOGLE_PLAY,
      },
    ],
  },
];

export default function InvestorMobileApplicationPage() {
  return (
    <>
      <PageHero
        kicker="Disclosures & Downloads"
        title="Investor Mobile Application by Depositories"
      />

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <p className="lead text-center">
            In order to enhance investor awareness, transparency and ease of
            access to information relating to securities holdings, the
            Depositories, in co-ordination with SEBI, have upgraded their
            respective investor applications — providing a consolidated,
            bird&apos;s-eye view of investors&apos; holdings in the securities
            markets.
          </p>
        </div>
      </section>

      {/* What you can do */}
      <section className="section section--band">
        <div className="container">
          <SectionHeading
            title="What These Applications Offer"
            lead="A single, consolidated window into your securities across depositories and exchanges."
            withRule
          />
          <div className="container" style={{ maxWidth: 760 }}>
            <ul className="list-crimson">
              {BENEFITS.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Download the apps */}
      <section className="section" id="download">
        <div className="container">
          <SectionHeading
            title="Download the Apps"
            lead="Available for both Android and iOS from the official app stores."
            withRule
          />
          <div className="grid grid--2">
            {APPS.map((app) => (
              <article key={app.name} className="card">
                <div className="card__body" style={{ padding: 24 }}>
                  <Image
                    src={app.icon}
                    alt={`${app.name} app icon`}
                    width={56}
                    height={56}
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 12,
                      boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
                      marginBottom: 16,
                    }}
                  />
                  <h3 className="title-h4" style={{ color: "var(--color-navy-900)", textAlign: "left", margin: "0 0 4px" }}>
                    {app.name}
                  </h3>
                  <p className="fs-12 mb-3" style={{ color: "var(--color-crimson-600)", fontWeight: 600 }}>
                    {app.depository}
                  </p>
                  <p className="fs-14 mb-4">{app.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                    {app.stores.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--outline-crimson btn--sm"
                        style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
                        aria-label={`Download ${app.name} on the ${s.label}. Opens in a new tab.`}
                      >
                        <Image src={s.logo} alt="" aria-hidden="true" width={18} height={18} style={{ width: 18, height: 18 }} />
                        {s.label} <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
