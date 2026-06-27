"use client";

import { useEffect, useRef, useState } from "react";

/* "We Serve" — two client categories. Each card opens a pop-up listing the
   clients in that category. The lists are maintained here and are expected to
   change periodically (additions / deletions) — update the `clients` arrays
   below as the official list is shared. */

type Category = {
  key: string;
  title: string;
  abbr: string;
  clients: string[];
};

const CATEGORIES: Category[] = [
  {
    key: "dii",
    title: "Domestic Institutional Investors",
    abbr: "DIIs",
    // TODO: replace with the official client list (shared separately).
    clients: [
      "Life Insurance Corporation of India",
      "State Bank of India",
      "SBI General Insurance",
      "SBI Pension Fund",
      "The New India Assurance Co. Ltd.",
      "United India Insurance Co. Ltd.",
      "General Insurance Corporation of India",
      "Star Union Dai-ichi Life Insurance",
      "LIC Pension Fund",
      "Axis Pension Fund",
      "UTI Mutual Fund",
      "HDFC Mutual Fund",
      "Quant Mutual Fund",
      "Taurus Mutual Fund",
      "Shriram Mutual Fund",
      "Capitalmind Mutual Fund",
    ],
  },
  {
    key: "fpi",
    title: "Foreign Portfolio Investors",
    abbr: "FPIs",
    // TODO: replace with the official client list (shared separately).
    clients: [
      "Representative FPI relationships across global asset managers",
      "Sovereign and pension funds",
      "Offshore funds and FII sub-accounts",
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
              <ul className="client-list">
                {active.clients.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
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
