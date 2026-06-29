import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Important Links",
  description:
    "Important links for Indsec investors — grievance redressal portals (SMART ODR, SEBI SCORES, NSDL, NSE, BSE), client collateral details and regulator / exchange websites.",
};

type LinkItem = { label: string; href: string };

const GRIEVANCE: LinkItem[] = [
  { label: "SMART ODR", href: "https://smartodr.in/login" },
  { label: "SEBI SCORES", href: "https://scores.sebi.gov.in/" },
  { label: "NSDL", href: "https://nsdl.co.in/nsdlnews/investors.php" },
  { label: "NSE", href: "https://investorhelpline.nseindia.com/NICEPLUS/" },
  { label: "BSE", href: "https://bsecrs.bseindia.com/ecomplaint/frmInvestorHome.aspx" },
];

const OTHER: LinkItem[] = [
  { label: "View Client Collateral Details", href: "https://investorhelpline.nseclearing.in/ClientCollateral/welcomeCLUser" },
  { label: "BSE", href: "https://www.bseindia.com" },
  { label: "NSE", href: "https://www.nseindia.com" },
  { label: "NSDL", href: "https://nsdl.co.in" },
  { label: "SEBI", href: "https://www.sebi.gov.in" },
];

function LinkGrid({ items }: { items: LinkItem[] }) {
  return (
    <div className="grid grid--3">
      {items.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-card"
          aria-label={`${l.label}. Opens in a new tab.`}
        >
          <span className="link-card__arrow" aria-hidden="true">↗</span>
          <h3 className="link-card__title">{l.label}</h3>
          <p className="link-card__desc">{l.href}</p>
        </a>
      ))}
    </div>
  );
}

export default function ImportantLinksPage() {
  return (
    <>
      <PageHero kicker="Investor Information" title="Important Links" />

      {/* Grievance redressal */}
      <section className="section" id="grievance">
        <div className="container">
          <SectionHeading
            title="Investor Complaint / Grievance Redressal"
            lead="Please quote your Service Ticket / Complaint Reference Number while raising your complaint at the SEBI SCORES, Depository or Exchange portal."
            withRule
          />
          <LinkGrid items={GRIEVANCE} />
        </div>
      </section>

      {/* Other important links */}
      <section className="section section--band" id="other">
        <div className="container">
          <SectionHeading title="Other Important Links" withRule />
          <LinkGrid items={OTHER} />
        </div>
      </section>
    </>
  );
}
