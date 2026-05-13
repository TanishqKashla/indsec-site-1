"use client";

import Link from "next/link";
import { useState } from "react";

const LOB = [
  {
    key: "institutional",
    label: "Institutional Broking",
    icon: "◧",
    title: "Institutional Broking",
    text: "High-conviction research, seamless trade execution, and differentiated market access for FIIs, DIIs, mutual funds and AIFs.",
    href: "/institutional-broking",
  },
  {
    key: "family-office",
    label: "Family Office",
    icon: "◔",
    title: "Family Office Solutions",
    text: "Succession, trusts, tax & regulatory advisory, and curated investment opportunities for surplus family wealth — under one roof.",
    href: "/family-office",
  },
  {
    key: "gift-city",
    label: "GIFT City / PMS",
    icon: "◑",
    title: "GIFT City Investments & PMS",
    text: "A regulated gateway for NRIs and global investors to access Indian markets through India's first International Financial Services Centre.",
    href: "/gift-city",
  },
];

export function LinesOfBusinessTabs() {
  const [active, setActive] = useState(0);
  const item = LOB[active];

  return (
    <div className="tabs">
      <ul role="tablist" className="tabs__list" aria-label="Lines of business">
        {LOB.map((it, i) => (
          <li key={it.key} role="presentation">
            <button
              role="tab"
              type="button"
              aria-selected={active === i}
              tabIndex={active === i ? 0 : -1}
              className="tabs__btn"
              onClick={() => setActive(i)}
            >
              <span className="tabs__icon" aria-hidden="true">{it.icon}</span>
              <span>{it.label}</span>
            </button>
          </li>
        ))}
      </ul>

      <div role="tabpanel" className="tabs__panel" aria-label={item.title}>
        <h3 className="tabs__panel-title">{item.title}</h3>
        <p className="tabs__panel-text">{item.text}</p>
        <Link href={item.href} className="btn btn--white">Explore Now</Link>
      </div>
    </div>
  );
}
