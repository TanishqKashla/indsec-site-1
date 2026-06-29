import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "KRA Status — Guidance to View & Update KYC",
  description:
    "How to check your KYC status with the KRAs and the steps to update it, in line with SEBI circular SEBI/HO/MIRSD/FATF/P/CIR/2023/0144 dated August 11, 2023.",
};

const KRA_SITES: { label: string; href: string }[] = [
  { label: "CVL KRA", href: "https://www.cvlkra.com/" },
  { label: "NDML KRA", href: "https://kra.ndml.in/kra-web/jsps/pos/KYCClientInquiry_NEW.jsp" },
  { label: "DOTEX KRA", href: "https://www.nsekra.com/" },
  { label: "CAMS KRA", href: "https://camskra.com/" },
  { label: "KARVY KRA", href: "https://www.karvykra.com/KYC_Validation/Default.aspx" },
];

const STEPS: { text: string; links?: typeof KRA_SITES }[] = [
  {
    text: "Visit any Mutual Fund's or Registrar & Transfer Agent's (RTA) Website where you have an investment.",
  },
  {
    text: "Check for the “KYC Status” link, if available.",
  },
  {
    text: "Else, visit any of the following KRA websites and click on KYC Inquiry:",
    links: KRA_SITES,
  },
  {
    text: "Enter your 10-digit PAN and Captcha and click on Submit.",
  },
  {
    text: "Your KYC Status will be displayed as “KYC Validated / KYC Registered / KYC On-Hold / Rejected”.",
  },
];

const STATUSES: { status: string; meaning: string }[] = [
  {
    status: "KYC Validated",
    meaning:
      "You can do any transaction in any financial market intermediary / mutual fund, anytime. No further action is required (applicable to individual investors).",
  },
  {
    status: "KYC Registered",
    meaning:
      "You may continue your existing transactions, but re-KYC is required when opening a new account with another intermediary. Individual investors can get their status changed to “KYC Validated” by doing a KYC Update / Modification using PAN and Aadhaar.",
  },
  {
    status: "KYC On-Hold / Rejected",
    meaning:
      "The reason will be displayed on the KRA / RTA websites. For assistance in remediating your status, contact us at backoffice@indsec.co.in or dp@indsec.co.in with your details.",
  },
];

export default function KraStatusPage() {
  return (
    <>
      <PageHero
        kicker="Disclosures & Downloads"
        title="KRA Status — Guidance to View & Update KYC"
      />

      {/* Intro / regulatory context */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <p className="lead text-center">
            As per SEBI circular SEBI/HO/MIRSD/FATF/P/CIR/2023/0144 dated August
            11, 2023, clients whose KYC status is not found validated by the KRAs
            — such PANs shall not be allowed to transact further in the
            securities market till such time their KYC is validated by a KRA.
          </p>
        </div>
      </section>

      {/* Steps to check status */}
      <section className="section section--band" id="check-status">
        <div className="container">
          <SectionHeading
            title="Steps to Check Your KYC Status"
            lead="Follow these steps to view your current KYC validation status with the KRAs."
            withRule
          />
          <div className="steps-card">
            <ol className="list-steps">
              {STEPS.map((s) => (
                <li key={s.text}>
                  <p className="list-steps__text">{s.text}</p>
                  {s.links && (
                    <div className="kra-chips">
                      {s.links.map((k) => (
                        <a
                          key={k.label}
                          href={k.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="kra-chip"
                          aria-label={`Open ${k.label} KYC Inquiry. Opens in a new tab.`}
                        >
                          {k.label} <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* What the statuses mean */}
      <section className="section section--band" id="status-meaning">
        <div className="container">
          <SectionHeading
            title="What Your KYC Status Means"
            withRule
          />
          <div className="grid grid--3">
            {STATUSES.map((s) => (
              <article key={s.status} className="pillar">
                <h3 className="pillar__title">{s.status}</h3>
                <p className="fs-14" style={{ margin: 0 }}>{s.meaning}</p>
              </article>
            ))}
          </div>
          <p className="fs-14 text-center mt-4" style={{ color: "var(--color-text)" }}>
            For any assistance, write to us at{" "}
            <a href="mailto:backoffice@indsec.co.in">backoffice@indsec.co.in</a>{" "}
            or <a href="mailto:dp@indsec.co.in">dp@indsec.co.in</a>.
          </p>
        </div>
      </section>
    </>
  );
}
