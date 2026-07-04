"use client";

import { useEffect, useRef, useState } from "react";

/* "We Serve" — two client categories. Each card opens a pop-up listing the
   clients in that category. The lists are maintained here and are expected to
   change periodically (additions / deletions) — update the `clients` arrays
   below as the official list is shared. */

type Group = {
  heading?: string;
  items: string[];
};

type Category = {
  key: string;
  title: string;
  abbr: string;
  groups: Group[];
};

const CATEGORIES: Category[] = [
  {
    key: "dii",
    title: "Domestic Institutional Investors",
    abbr: "DIIs",
    groups: [
      {
        heading: "Mutual Funds",
        items: [
          "Bank of India Mutual Fund",
          "Capitalmind Mutual Fund",
          "HDFC Mutual Fund",
          "LIC Mutual Fund",
          "Quant Mutual Fund",
          "Shriram Mutual Fund",
          "Taurus Mutual Fund",
          "UniFi Mutual Fund",
          "UTI Mutual Fund",
        ],
      },
      {
        heading: "Banks",
        items: [
          "Bandhan Bank",
          "Bank of Baroda",
          "Bank of India",
          "Bank of Maharashtra",
          "Canara Bank",
          "Central Bank of India",
          "CSB Bank",
          "Equitas Small Finance Bank",
          "Federal Bank",
          "HDFC Bank",
          "IDBI Bank Ltd",
          "Indian Bank",
          "IFCI Limited",
          "Jana Small Finance Bank",
          "Karnataka Bank",
          "Karur Vysya Bank",
          "Punjab National Bank",
          "Punjab & Sind Bank",
          "RBL Bank",
          "SIDBI",
          "South Indian Bank",
          "State Bank of India",
          "UCO Bank",
          "Ujjivan Small Finance Bank",
          "Union Bank of India",
        ],
      },
      {
        heading: "Pension Funds",
        items: [
          "Aditya Birla Sun Life Pension Fund",
          "Axis Pension Fund",
          "Kotak Pension Fund",
          "LIC Pension Fund",
          "SBI Pension Fund Pvt. Ltd.",
        ],
      },
      {
        heading: "Insurance Companies",
        items: [
          "Life Insurance Corporation of India",
          "Agriculture Insurance Co of India Ltd",
          "CreditAccess Life Insurance Ltd.",
          "General Insurance Corp. of India",
          "Iffco Tokio General Insurance Co. Ltd.",
          "Navi General Insurance Limited",
          "National Insurance Co. Ltd.",
          "New India Assurance Co. Ltd.",
          "Oriental Insurance Co. Ltd.",
          "SBI General Insurance Co. Ltd.",
          "Star Union Dai-Ichi Life Ins. Co. Ltd.",
          "United India Insurance Co. Ltd.",
          "Universal Sompo General Insu. Co. Ltd.",
        ],
      },
    ],
  },
  {
    key: "fpi",
    title: "Foreign Portfolio Investors",
    abbr: "FPIs",
    groups: [
      {
        items: [
          "Abridge Investments Ltd.",
          "Afrin DIA",
          "Aidos India Fund Ltd.",
          "Al Maha Investment Fund PCC Onyx Strategy",
          "Albula Investment Fund Ltd.",
          "Allstars Investments Ltd.",
          "Amicorp Capital (Mauritius) Ltd.",
          "APMS Investment Fund Ltd.",
          "ARES Diversified",
          "Ariston Capital Limited",
          "ASD International Holdings Ltd.",
          "Augustine Expedition Fund",
          "Aviator Emerging Market Fund",
          "Belgrave Investment Fund",
          "Bridge India Fund",
          "BTS (Lux) Indian Stocks Mauritius Ltd.",
          "Calypso Global Investment Fund",
          "Citrine Fund Ltd.",
          "Citrus Global Arbitrage Fund",
          "Coeus Global Opportunities Fund.",
          "Connecor Investment Enterprise Ltd.",
          "Cresta Fund Ltd.",
          "Dovetail India Fund",
          "Elara India Opportunities Fund Ltd.",
          "ELM Park Fund Ltd.",
          "Eminence Global Fund PCC",
          "Enauge Investments Pte. Ltd.",
          "First Fund VCC - Astro Fund",
          "Forbes EMF",
          "GGI Fund Ltd.",
          "Global Axe Investment Fund",
          "Greenback Multi-Market Opp. Fund PCC",
          "Hypnos Fund Ltd.",
          "Legends (Bahamas) Series Four Ltd.",
          "Legends (Cayman) Ltd.",
          "Legends Debt Capital Holdings Ltd.",
          "Legends Global Opp. (Singapore) Pte. Ltd.",
          "LGOF Global Opportunities Ltd.",
          "LTS Investments Fund Ltd.",
          "Lotus Global Investments Ltd.",
          "Magnifica Global Opportunities VCC",
          "Minerva Emerging Opportunities Fund",
          "Minerva Ventures Fund",
          "Multitude Growth Funds Limited",
          "Nautilus Private Capital Ltd",
          "New Leaina Investments Ltd.",
          "Nexpact Limited",
          "North Star Opportunities Fund VCC",
          "Old Compton Holdings Ltd",
          "One Earth Capital Ltd.",
          "Polus Global Fund",
          "Port Louis Fund Ltd.",
          "Resonance Opportunities Fund",
          "Senik IV Investments Ltd.",
          "The Great International Tusker Fund",
          "Universal Golden Fund",
          "Vespera Fund Ltd.",
          "Vamelton Fund RAIF V.C.I.C. Ltd.",
          "Zeal Global Opportunities Fund",
        ],
      },
    ],
  },
];

export function WeServe() {
  const [active, setActive] = useState<Category | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Lock scroll, trap focus, restore focus to the opening card on close.
  useEffect(() => {
    if (!active) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.stopPropagation();
        setActive(null);
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
      triggerRefs.current[active.key]?.focus();
    };
  }, [active]);

  return (
    <>
      <div className="grid grid--2">
        {CATEGORIES.map((c) => (
          <article key={c.key}>
            <button
              type="button"
              ref={(el) => {
                triggerRefs.current[c.key] = el;
              }}
              className="serve-card"
              onClick={() => setActive(c)}
              aria-haspopup="dialog"
            >
              <h3 className="title-h4" style={{ color: "var(--color-navy-900)" }}>{c.title}</h3>
              <p className="fs-14 muted" style={{ marginTop: 4 }}>({c.abbr})</p>
              <span className="serve-card__hint">
                View client list <span aria-hidden="true">→</span>
              </span>
            </button>
          </article>
        ))}
      </div>

      {active && (
        <div
          className="modal-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setActive(null);
          }}
        >
          <div
            className="modal-box"
            role="dialog"
            aria-modal="true"
            aria-labelledby="serve-title"
            ref={dialogRef}
          >
            <div className="modal-box__head">
              <h2 id="serve-title" className="modal-box__title">
                {active.title} ({active.abbr})
              </h2>
              <button
                type="button"
                ref={closeRef}
                className="modal-box__close"
                onClick={() => setActive(null)}
                aria-label={`Close ${active.title} client list`}
              >
                <span aria-hidden="true">✕</span>
              </button>
            </div>

            <div className="modal-box__body">
              {active.groups.map((group, gi) => (
                <div key={group.heading ?? gi} className="client-group">
                  {group.heading && (
                    <h3 className="client-group__heading">{group.heading}</h3>
                  )}
                  <ul className="client-list">
                    {group.items.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="fs-12 muted" style={{ marginTop: 16 }}>
                Representative relationships. Marks and names belong to their respective
                owners. This list is updated periodically.
              </p>
            </div>

            <div className="modal-box__foot">
              <button type="button" className="btn btn--crimson" onClick={() => setActive(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
