import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Research Disclaimer and Disclosures",
  description:
    "Indsec Securities and Finance Limited — research rating scale, analyst certification, declarations, business activities, disciplinary history and general terms & conditions / disclaimers.",
};

const RATING_SCALE: [string, string][] = [
  ["BUY", "More than +10% (for Large Cap) / More than +15% (for Mid & Small Cap)"],
  ["ADD", "Between +5% to +10% (for Large Cap) / Between +5% to +15% (for Mid & Small Cap)"],
  ["HOLD", "Between -5% to +5% (for Large, Mid and Small Cap)"],
  ["REDUCE", "Between -5% to -10% (for Large Cap) / Between -5% to -15% (for Mid & Small Cap)"],
  ["SELL", "Less than -10% (for Large Cap), Less than -15% (for Mid & Small Cap)"],
  ["NOT RATED", "No investment opinion on the company"],
];

const IPO_RECO: [string, string][] = [
  ["SUBSCRIBE", "We recommend investors subscribe to the issue, considering its strong fundamentals and growth prospects."],
  ["SUBSCRIBE FOR LONG TERM", "We recommend subscribing to the issue from a long-term perspective, supported by its robust growth potential."],
  ["NEUTRAL", "We maintain a neutral stance on the issue, given balanced risk-reward."],
  ["AVOID", "We recommend investors avoid subscribing to the issue, given unfavorable risk-reward."],
];

const COMPANIES_REVIEW: [string, string][] = [
  ["POSITIVE", "We maintain a positive view on the company, supported by a favorable and improving business environment."],
  ["NEUTRAL", "We maintain a neutral view on the company, given a mixed or largely unchanged business environment."],
  ["NEGATIVE", "We maintain a negative view on the company, given a weakening business environment."],
];

const SECTORS_REVIEW: [string, string][] = [
  ["POSITIVE", "We maintain a constructive view on the sector, given supportive industry dynamics and an improving environment."],
  ["NEUTRAL", "We maintain a neutral outlook on the sector, considering balanced and unchanged industry dynamics."],
  ["NEGATIVE", "We maintain a cautious/negative stance on the sector, considering adverse industry dynamics."],
];

const CERTIFICATION: string[] = [
  "We, authors and the names subscribed to the respective report, hereby certify that all the views expressed in this research report accurately reflect our views about the subject issuer(s) or securities.",
  "We also certify that no part of our compensation was, is, or will be directly or indirectly related to the specific recommendation(s) or view(s) in this report.",
  "We also certify that we have not received any compensation from the companies mentioned in the report in the preceding twelve months and do not serve as an officer, director or employee of the companies mentioned in the report.",
];

const DECLARATION: string[] = [
  "ISFL/Research Analysts or their associates or their relatives do not have any financial interest in the subject company (ies).",
  "ISFL/Research Analysts or their associates or their relatives do not have actual or beneficial ownership of 1% or more in the subject company (ies).",
  "Directors may have actual or beneficial ownership of 1% or more in the subject company (ies).",
  "ISFL/Research Analysts or their associates or their relatives do not have any material conflict of interest in the subject company (ies) at the time of publication of this document.",
  "ISFL has not received any compensation from the subject company (ies) in the past twelve months.",
  "ISFL has not managed or co-managed public offering of securities for the subject company (ies) in the past twelve months.",
  "ISFL has not received any compensation for investment banking or merchant banking or brokerage services or any other service from the subject company (ies) in the past twelve months.",
  "ISFL has not received any compensation or other benefits from the subject company (ies) or third party in connection with this document.",
  "ISFL has not been engaged in the market making activity for the subject company (ies).",
];

const BUSINESS_ACTIVITIES: string[] = [
  "Indsec Securities and Finance Limited (ISFL) is a corporate member of BSE (Equity, WDM segment), of NSEIL (Equity, WDM, Futures & Options and Currency Derivative segments) and has also secured membership of the MSEI Exchange (Currency Derivative Segment) vide registration No. INZ000236731. ISFL is an AMFI Registered Mutual Fund Advisor (MRMFA) vide Registration Number 9194. ISFL is also a Depository Participant of the National Securities Depository Limited (NSDL) and a SEBI registered Portfolio Manager. With this setup ISFL is in a position to offer all types of services in the securities industry.",
  "Since inception company’s focus has been on research. In view of its research capabilities ISFL focused mainly on institutional business and is today empaneled with most of the local financial institutions, insurance companies, banks and mutual funds. ISFL has grown from being a medium size broking outfit to become one of the largest capitalized Indian broking company offering the complete range of broking services.",
  "ISFL was incorporated on 28th July 1993 and doesn’t have any associates/ subsidiaries. ISFL is a registered Portfolio Manager under SEBI (Portfolio Managers) Regulations, 1993 vide registration No. INP000001892.",
];

const DISCIPLINARY: string[] = [
  "No material penalties / directions have been issued by the SEBI under the securities laws, SEBI Act or Rules or Regulations made there under.",
  "No penalties have been imposed for any economic offence by any authority.",
  "No material deficiencies in the systems and operations of the Company have been observed by any regulatory agency.",
  "There are no pending material litigations or legal proceedings, regulatory observations or investigations for which action has been taken or initiated by any regulatory authority against the Company or its Directors, principal officers or employees or any person directly or indirectly connected with the Company.",
];

const DISCLAIMERS: string[] = [
  "This report has been issued by Indsec Securities and Finance Limited (ISFL), which is a SEBI regulated entity and is for informational purposes only and is not intended as an offer or solicitation for the purchase or sale of security.",
  "This document has been prepared and issued based on publicly available information, internally developed data and other sources believed to be reliable. However, we do not guarantee its accuracy, and the information may be incomplete and condensed. Note however that, we have taken meticulous care to ensure that the facts stated are accurate and opinions given are fair and reasonable, neither the analyst nor any other employee of our company is in any way responsible for its contents. The Company’s research department has received assistance from the subject company (ies) referred to in this document including, but not limited to, discussions with management of the subject company (ies). All opinions, projections and estimates constitute the judgment of the author as of the date of this document and these, including any other information contained in this document, are subject to change without notice. Prices and availability of financial instruments also are subject to change without notice. While we would endeavor to update the information herein on reasonable basis, we are under no obligation to update or keep the information current. Also, there may be regulatory, compliance, or other reasons that may prevent us from doing so.",
  "Securities recommended in this document are subject to investment risks, including the possible loss of the principal amount invested. Any decision to purchase/sale securities mentioned in this document must take into account existing public information on such security or any registered prospectus. The appropriateness of a particular investment, decision or strategy will depend on an investor's individual circumstances and objectives. The securities, instruments, or strategies discussed in this document may not be suitable for all investors, and certain investors may not be eligible to purchase or participate in some or all of them. Each recipient of this document should make such investigations as it deems necessary to arrive at an independent evaluation of an investment in the securities of companies referred to in this document (including the merits and risks involved).",
  "This report is not directed or intended for distribution to, or use by, any person or entity who is a citizen or resident of or located in any locality, state, country or other jurisdiction, where such distribution, publication, availability or use would be contrary to law, regulation or which would subject the company to any registration or licensing requirement within such jurisdiction. The securities described herein may or may not be eligible for sale in all jurisdictions or to certain category of investors. Persons in whose possession this document may come are required to inform themselves of and to observe such restriction.",
  "This is just a suggestion, and the company will not be responsible for any profit or loss arising out of the decision taken by the reader of this document. Any comments or statements made herein are those of the analyst and do not necessarily reflect those of the company. No matter contained in this document may be reproduced or copied without the consent of the company. Any unauthorized use, duplication, redistribution or disclosure is prohibited by law and will result in prosecution.",
  "Artificial Intelligence (“AI”) tools may have been used (i) during the information gathering stage for compiling or collating the data from-(a) publicly available data sources; (b) databases to which ISFL subscribes; and (c) internally generated research data, and/or (ii) for compiling summaries of the report. AI tools may also support content creation and other research-related processes. ISFL remains fully responsible for the accuracy, integrity, and confidentiality of all data used, as well as for the insights and recommendations provided. Any output generated with the assistance of AI tools is subject to review and professional judgment to ensure reliability and compliance with applicable laws and standards.",
  "The information contained in this document is intended solely for the recipient and may not be further distributed by the recipient. The Company accepts no liability whatsoever for the actions of third parties.",
  "The company may trade in securities, which are the subject of this document or in related instruments and may have acted upon, use or used the information contained in this document or the research or the analysis on which it is based, before its publication. The company or its directors may have a position or be otherwise interested in the investment strategy referred to in this document.",
  "The company may be involved in any other transaction involving such securities and earn brokerage or other compensation or act as advisor to such company (ies) or have other potential conflicts. of interest with respect to any recommendation and related information and opinions.",
  "The research analyst(s) of this document certifies that all of the views expressed in this document accurately reflect their personal views about those issuer(s) or securities.",
];

function DataTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: [string, string];
  rows: [string, string][];
}) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h3 className="title-h4" style={{ color: "var(--color-navy-900)", textAlign: "left", margin: "0 0 14px" }}>
        {caption}
      </h3>
      <div className="data-table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th scope="col">{headers[0]}</th>
              <th scope="col">{headers[1]}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([a, b]) => (
              <tr key={a}>
                <td>{a}</td>
                <td>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ResearchDisclaimerPage() {
  return (
    <>
      <PageHero
        kicker="Disclosures & Downloads"
        title="Research Disclaimer and Disclosures"
      />

      {/* Rating scales & review tables */}
      <section className="section" id="rating-scale">
        <div className="container" style={{ maxWidth: 920 }}>
          <DataTable
            caption="Rating Scale"
            headers={["Rating", "Expected Absolute Price Return (12–18 months)"]}
            rows={RATING_SCALE}
          />
          <DataTable
            caption="IPO Recommendations (For NOT RATED Report)"
            headers={["Recommendation", "Comments"]}
            rows={IPO_RECO}
          />
          <DataTable
            caption="Companies under Review (For NOT RATED Report)"
            headers={["View", "Comments"]}
            rows={COMPANIES_REVIEW}
          />
          <DataTable
            caption="Sectors under Review (For NOT RATED Report)"
            headers={["View", "Comments"]}
            rows={SECTORS_REVIEW}
          />
        </div>
      </section>

      {/* Analyst certification & declaration */}
      <section className="section section--band" id="certification">
        <div className="container" style={{ maxWidth: 920 }}>
          <SectionHeading title="Research Analyst Certification" withRule />
          <ul className="list-crimson">
            {CERTIFICATION.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <h3 className="title-h4" style={{ color: "var(--color-navy-900)", textAlign: "left", margin: "32px 0 16px" }}>
            Declaration:
          </h3>
          <ul className="list-crimson">
            {DECLARATION.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <p className="fs-16 mt-3" style={{ fontWeight: "var(--fw-semibold)", color: "var(--color-navy-900)" }}>
            Analyst&rsquo;s holding in the stocks mentioned in the Report: NIL
          </p>
        </div>
      </section>

      {/* Business activities */}
      <section className="section" id="business">
        <div className="container" style={{ maxWidth: 920 }}>
          <SectionHeading title="Business Activities" withRule />
          {BUSINESS_ACTIVITIES.map((p) => (
            <p key={p} className="fs-16 mb-3">{p}</p>
          ))}
        </div>
      </section>

      {/* Disciplinary history */}
      <section className="section section--band" id="disciplinary">
        <div className="container" style={{ maxWidth: 920 }}>
          <SectionHeading title="Disciplinary History" withRule />
          <ul className="list-crimson">
            {DISCIPLINARY.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* General terms & disclaimers */}
      <section className="section" id="disclaimers">
        <div className="container" style={{ maxWidth: 920 }}>
          <SectionHeading title="General Terms and Conditions / Disclaimers" withRule />
          {DISCLAIMERS.map((p) => (
            <p key={p} className="fs-14 mb-3">{p}</p>
          ))}
          <p className="fs-14 mb-3" style={{ fontWeight: "var(--fw-semibold)", color: "var(--color-navy-900)" }}>
            Investment in securities market are subject to market risks. Read all the related documents carefully before investing.
          </p>
          <p className="fs-14 mb-3" style={{ fontWeight: "var(--fw-semibold)", color: "var(--color-navy-900)" }}>
            Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. None of the research recommendations promise or guarantee any assured, minimum or risk-free return to the investors.
          </p>
          <p className="fs-14 mt-4">
            For any queries/ additional information contact us at{" "}
            <a href="mailto:query_research@indsec.co.in">query_research@indsec.co.in</a>
          </p>
        </div>
      </section>
    </>
  );
}
