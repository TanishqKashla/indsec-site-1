import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "e-Voting Facility Provided by Listed Entities",
  description:
    "Shareholders can register directly with the Depositories (NSDL / CDSL) to access the e-voting facility provided by listed entities.",
};

type EVotingLink = {
  label: string;
  href: string;
  logo: string;
  alt: string;
  width: number;
  height: number;
};

const LINKS: EVotingLink[] = [
  {
    label: "NSDL e-Voting",
    href: "https://www.evoting.nsdl.com/",
    logo: "/app-icons/nsdl-logo.png",
    alt: "NSDL",
    width: 500,
    height: 173,
  },
  {
    label: "CDSL e-Voting",
    href: "https://www.evotingindia.com/",
    logo: "/app-icons/cdsl-logo.png",
    alt: "CDSL",
    width: 194,
    height: 63,
  },
];

export default function EVotingPage() {
  return (
    <>
      <PageHero
        kicker="Disclosures & Downloads"
        title="e-Voting Facility Provided by Listed Entities"
      />

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <p className="lead">
            &ldquo;Shareholders&rdquo; can register directly with the Depository
            (NSDL / CDSL) by clicking on the links provided below. Shareholders
            would be able to access the e-voting page of various e-voting service
            providers (ESPs) through the websites of the Depositories without
            further authentication by ESPs for participating in the e-voting
            process.
          </p>
        </div>
      </section>

      {/* e-Voting links */}
      <section className="section section--band" id="links">
        <div className="container" style={{ maxWidth: 920 }}>
          <SectionHeading title="e-Voting Facility Links" withRule />
          <div className="grid grid--2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-card evoting-card"
                aria-label={`${l.label}. Opens in a new tab.`}
              >
                <span className="link-card__arrow" aria-hidden="true">↗</span>
                <span className="evoting-card__logo">
                  <Image src={l.logo} alt={l.alt} width={l.width} height={l.height} />
                </span>
                <h3 className="link-card__title">{l.label}</h3>
                <p className="link-card__desc">{l.href}</p>
              </a>
            ))}
          </div>

          <p className="fs-16 mt-4">
            NSDL IDEAS users can{" "}
            <a
              href="https://eservices.nsdl.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              click here
            </a>{" "}
            to participate in E-Voting.
          </p>
        </div>
      </section>
    </>
  );
}
