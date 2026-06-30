"use client";

import { useEffect, useRef, useState } from "react";

/* SEBI-mandated investor disclosures, surfaced prominently on the home page
   via a clickable banner that opens an accessible modal pop-up. Content is
   reproduced verbatim from the exchange/SEBI advisories. */

const SEEN_KEY = "indsec_disclosure_seen";

export function MandatoryDisclosure() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  // Auto-open the disclosures once per browser session (shows again each new session).
  useEffect(() => {
    try {
      if (!window.sessionStorage.getItem(SEEN_KEY)) {
        setOpen(true);
        window.sessionStorage.setItem(SEEN_KEY, "1");
      }
    } catch {
      /* sessionStorage unavailable (private mode) — silently skip auto-open */
    }
  }, []);

  // Lock body scroll, trap focus and restore focus to the trigger on close.
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Move focus into the dialog.
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.stopPropagation();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey, true);
    return () => {
      document.removeEventListener("keydown", onKey, true);
      document.body.style.overflow = prevOverflow;
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      {/* Simple trigger — sits at the hero's bottom-left */}
      <button
        type="button"
        ref={triggerRef}
        className="hero__disclosure-btn"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        Read disclosures
      </button>

      {/* Modal pop-up */}
      {open && (
        <div
          className="modal-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            className="modal-box"
            role="dialog"
            aria-modal="true"
            aria-labelledby="disclosure-title"
            ref={dialogRef}
          >
            <div className="modal-box__head">
              <h2 id="disclosure-title" className="modal-box__title">
                Mandatory Disclosures · Attention Investors
              </h2>
              <button
                type="button"
                ref={closeRef}
                className="modal-box__close"
                onClick={() => setOpen(false)}
                aria-label="Close mandatory disclosures dialog"
              >
                <span aria-hidden="true">✕</span>
              </button>
            </div>

            <div className="modal-box__body">
              {/* A — Attention Investors */}
              <h3 className="disclosure-h">Attention Investors</h3>
              <ul className="disclosure-list">
                <li>
                  Prevent Unauthorised transactions in your account — Update your mobile
                  numbers/email IDs with your stock brokers. Receive information of your
                  transactions directly from Exchange on your mobile/email at the end of
                  the day.
                </li>
                <li>
                  &ldquo;KYC is one time exercise while dealing in securities markets — once KYC
                  is done through a SEBI registered intermediary (broker, DP, Mutual Fund
                  etc.), you need not undergo the same process again when you approach
                  another intermediary.&rdquo;
                </li>
                <li>
                  Stock Brokers can accept securities as margin from clients only by way of
                  pledge in the depository system w.e.f. September 1, 2020.
                </li>
                <li>
                  Update your Mobile Number &amp; Email ID with your Stock Broker / Depository
                  Participant and receive OTP directly from depository on your Email ID
                  and/or Mobile Number to create pledge.
                </li>
                <li>
                  Check your Securities / MF / Bonds in the consolidated account statement
                  issued by NSDL/CDSL every month.
                </li>
                <li>
                  Pay 20% upfront margin of the transaction value to trade in Cash Market
                  Segment.
                </li>
                <li>
                  Investors may please refer to the Exchange&rsquo;s Frequently Asked Questions
                  (FAQs) issued vide circular reference NSE/INSP/45191 dated July 31, 2020
                  and NSE/INSP/45534 dated August 31, 2020 and other guidelines issued from
                  time to time in this regard.
                </li>
              </ul>
              <p className="disclosure-note">
                .......... ISSUED IN THE INTEREST OF INVESTORS ..........
              </p>

              {/* B — Advisory for Investors */}
              <h3 className="disclosure-h">Advisory for Investors</h3>
              <p>
                Beware of fixed/guaranteed/regular returns/ capital protection schemes.
                Brokers or their authorized persons or any of their associates are not
                authorized to offer fixed/guaranteed/regular returns/ capital protection on
                your investment or authorized to enter into any loan agreement with you to
                pay interest on the funds offered by you. Please note that in case of default
                of a member claim for funds or securities given to the broker under any
                arrangement/ agreement of indicative return will not be accepted by the
                relevant Committee of the Exchange as per the approved norms.
              </p>
              <p>
                Do not keep funds idle with the Stock Broker. Please note that your stock
                broker has to return the credit balance lying with them, within three working
                days in case you have not done any transaction within last 30 calendar days.
                Please note that in case of default of a Member, claim for funds and
                securities, without any transaction on the exchange will not be accepted by
                the relevant Committee of the Exchange as per the approved norms.
              </p>
              <p>
                Check the frequency of accounts settlement opted for. If you have opted for
                running account, please ensure that your broker settles your account and, in
                any case, not later than once in 90 days (or 30 days if you have opted for 30
                days settlement). In case of declaration of trading member as defaulter, the
                claims of clients against such defaulter member would be subject to norms for
                eligibility of claims for compensation from IPF to the clients of the
                defaulter member. These norms are available on Exchange website of BSE &amp; NSE
                at the following links respectively:
              </p>
              <ul className="disclosure-list">
                <li>
                  <a href="https://www.bseindia.com/static/investors/claim-against-defaulter" target="_blank" rel="noopener noreferrer">
                    bseindia.com/static/investors/claim-against-defaulter ↗
                  </a>
                </li>
                <li>
                  <a href="https://www.nseindia.com/invest/about-defaulter-section" target="_blank" rel="noopener noreferrer">
                    nseindia.com/invest/about-defaulter-section ↗
                  </a>
                </li>
              </ul>
              <p>
                Brokers are not permitted to accept transfer of securities as margin.
                Securities offered as margin/ collateral MUST remain in the account of the
                client and can be pledged to the broker only by way of &lsquo;margin pledge&rsquo;,
                created in the Depository system. Clients are not permitted to place any
                securities with the broker or associate of the broker or authorized person of
                the broker for any reason. Broker can take securities belonging to clients
                only for settlement of securities sold by the client.
              </p>
              <p>
                Always keep your contact details viz. Mobile number/Email ID updated with the
                stock broker. Email and mobile number is mandatory and you must provide the
                same to your broker for updation in Exchange records. You must immediately
                take up the matter with Stock Broker/Exchange if you are not receiving the
                messages from Exchange/Depositories regularly.
              </p>
              <p>
                Don&rsquo;t ignore any emails/SMSs received from the Exchange for trades done by
                you. Verify the same with the Contract notes/Statement of accounts received
                from your broker and report discrepancy, if any, to your broker in writing
                immediately and if the Stock Broker does not respond, please take this up with
                the Exchange/Depositories forthwith.
              </p>
              <p>
                Check messages sent by Exchanges on a weekly basis regarding funds and
                securities balances reported by the trading member, compare it with the weekly
                statement of account sent by broker and immediately raise a concern to the
                exchange if you notice a discrepancy.
              </p>
              <p>
                Please do not transfer funds, for the purposes of trading to anyone, including
                an authorized person or an associate of the broker, other than a SEBI
                registered Stock broker.
              </p>

              {/* Risk Disclosures on Derivatives */}
              <h3 className="disclosure-h">Risk Disclosures on Derivatives</h3>
              <ul className="disclosure-list">
                <li>
                  9 out of 10 individual traders in equity Futures and Options Segment,
                  incurred net losses.
                </li>
                <li>
                  On an average, loss makers registered net trading loss close to ₹ 50,000.
                </li>
                <li>
                  Over and above the net trading losses incurred, loss makers expended an
                  additional 28% of net trading losses as transaction costs.
                </li>
                <li>
                  Those making net trading profits, incurred between 15% to 50% of such
                  profits as transaction cost.
                </li>
              </ul>
              <p className="disclosure-source">
                Source: SEBI study dated January 25, 2023 on &ldquo;Analysis of Profit and Loss of
                Individual Traders dealing in equity Futures and Options (F&amp;O) Segment&rdquo;,
                wherein Aggregate Level findings are based on annual Profit/Loss incurred by
                individual traders in equity F&amp;O during FY 2021-22.
              </p>
            </div>

            <div className="modal-box__foot">
              <button type="button" className="btn btn--crimson" onClick={() => setOpen(false)}>
                I understand
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
