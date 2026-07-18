import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Accordion } from "@/components/Accordion";
import { getBankAccounts } from "@/lib/bankAccounts";

export const metadata: Metadata = {
  title: "Client Bank Account Details",
  description:
    "Indsec's designated Upstream Client Nodal Bank Accounts (USCNBA) for fund transfers, validated UPI payment guidance and SEBI Check verification.",
};

const SEBI_CHECK = "https://siportal.sebi.gov.in/intermediary/sebi-check";

const FAQS: { title: string; body: React.ReactNode }[] = [
  {
    title: "Is it compulsory for investors to use the new UPI handle only?",
    body: (
      <p>
        No. Investors are free to choose their mode of payment — UPI, IMPS,
        NEFT, RTGS or cheques. However, if an investor opts to use UPI for
        payment to registered intermediaries, then they have to do so only
        using the new UPI IDs.
      </p>
    ),
  },
  {
    title: "What should I check while making payment using the new UPI IDs / QR code?",
    body: (
      <ul className="list-crimson">
        <li>
          The UPI ID displays the intermediary name with a category abbreviation
          (e.g. “brk” for brokers) before the “@”.
        </li>
        <li>A “@valid” handle with the bank name appears after the “@”.</li>
        <li>
          The confirmation screen shows a white thumbs-up icon inside a green
          triangle.
        </li>
        <li>
          The QR code displays a white thumbs-up icon inside a green triangle,
          with the UPI ID shown below it.
        </li>
      </ul>
    ),
  },
  {
    title: "Do investors need to obtain new UPI handles?",
    body: (
      <p>
        No. The new UPI IDs are only for intermediaries to obtain — investors
        can continue to use their existing UPI IDs.
      </p>
    ),
  },
  {
    title: "Whom should I approach if a transaction / payment fails?",
    body: (
      <p>
        For any technical difficulties with a transaction, please contact your
        respective bank.
      </p>
    ),
  },
];

export default async function ClientBankAccountPage() {
  const accounts = await getBankAccounts();

  return (
    <>
      <PageHero
        kicker="Disclosures & Downloads"
        title="Client Bank Account Details"
      />

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <p className="lead text-center">
            For fund transfers towards stock broking activities, investors must
            use the designated Upstream Client Nodal Bank Accounts (USCNBA) of
            Indsec Securities and Finance Limited. These accounts are disclosed
            to the stock exchanges and appear in their directories under
            “Know / Locate your Stock Broker” (NSE) and the “Member Directory”
            (BSE).
          </p>
        </div>
      </section>

      {/* Bank accounts */}
      <section className="section section--band" id="accounts">
        <div className="container">
          <SectionHeading
            title="Bank Account Details for Fund Transfer"
            lead="Stock Broking Activities — Upstream Client Nodal Bank Account (USCNBA)."
            withRule
          />
          {accounts.length === 0 ? (
            <p className="lead text-center">
              Bank account details will appear here soon.
            </p>
          ) : (
          <div className="grid grid--2">
            {accounts.map((a) => (
              <article key={a._id} className="bank-acct">
                <div className="bank-acct__head">
                  <span className="bank-acct__tag">{a.label}</span>
                  <h3 className="bank-acct__name">{a.bankName}</h3>
                </div>
                <dl className="bank-acct__rows">
                  <div className="bank-acct__row">
                    <dt>Branch</dt>
                    <dd>{a.branch}</dd>
                  </div>
                  <div className="bank-acct__row">
                    <dt>Account Number</dt>
                    <dd>{a.accountNumber}</dd>
                  </div>
                  <div className="bank-acct__row">
                    <dt>IFSC</dt>
                    <dd>{a.ifsc}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          )}

          <div className="bank-callout" role="note">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <p>
              Funds are released by Indsec through a separate Downstream Client
              Nodal Bank Account (DSCNBA). <strong>Please avoid transferring
              funds into any DSCNBA account.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* UPI payments */}
      <section className="section" id="upi">
        <div className="container" style={{ maxWidth: 920 }}>
          <SectionHeading
            title="UPI Payments"
            lead="Validated UPI handle for payments to Indsec, as per SEBI's investor-protection framework."
            withRule
          />
          <p className="fs-16 mb-3">
            In line with SEBI Circular No.
            SEBI/HO/DEPA-II/DEPA-II_SRG/P/CIR/2025/86 dated June 11, 2025 and
            SEBI Press Release No. 64/2025 dated October 1, 2025, Indsec offers a
            validated UPI handle for client payments. To know the UPI payment
            options available, please write to us at{" "}
            <a href="mailto:co@indsec.co.in">co@indsec.co.in</a>.
          </p>
          <p className="fs-16 mb-4">
            SEBI&apos;s “SEBI Check” functionality lets you independently verify
            the bank account details and UPI IDs of a registered intermediary
            before making a payment.
          </p>
          <div className="text-center">
            <a
              href={SEBI_CHECK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--crimson"
              aria-label="Verify on SEBI Check. Opens in a new tab."
            >
              Verify on SEBI Check <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section section--band" id="faqs">
        <div className="container" style={{ maxWidth: 820 }}>
          <SectionHeading title="Frequently Asked Questions" withRule />
          <Accordion items={FAQS} />
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <p className="fs-14 text-center" style={{ color: "var(--color-text)" }}>
            For investor grievances, write to us at{" "}
            <a href="mailto:isfl_invgrv@indsec.co.in">isfl_invgrv@indsec.co.in</a>{" "}
            or lodge a complaint on the SEBI{" "}
            <a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer">
              SCORES portal ↗
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
