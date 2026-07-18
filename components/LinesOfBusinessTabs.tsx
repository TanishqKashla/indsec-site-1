"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ArrowIcon } from "./ArrowIcon";

const svgProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// upward trend chart — markets & trade execution
const ChartIcon = () => (
  <svg {...svgProps}>
    <path d="M16 7h6v6" />
    <path d="m22 7-8.5 8.5-5-5L2 17" />
  </svg>
);

// shield — safeguarding family wealth, succession & trusts
const ShieldIcon = () => (
  <svg {...svgProps}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  </svg>
);

// globe — global & NRI investors, international financial centre
const GlobeIcon = () => (
  <svg {...svgProps}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

type LobItem = {
  key: string;
  label: string;
  icon: ReactNode;
  title: string;
  text: string;
  href: string;
};

const LOB: LobItem[] = [
  {
    key: "institutional",
    label: "Institutional Broking",
    icon: <ChartIcon />,
    title: "Institutional Broking",
    text: "High-conviction research, seamless trade execution, and differentiated market access for FIIs, DIIs, mutual funds and AIFs.",
    href: "/institutional-broking",
  },
  {
    key: "family-office",
    label: "Family Office",
    icon: <ShieldIcon />,
    title: "Family Office Solutions",
    text: "Succession, trusts, tax & regulatory advisory, and curated investment opportunities for surplus family wealth — under one roof.",
    href: "/family-office",
  },
  {
    key: "gift-city",
    label: "GIFT City / PMS",
    icon: <GlobeIcon />,
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
        <Link href={item.href} className="btn btn--white">{item.label} <ArrowIcon /></Link>
      </div>
    </div>
  );
}
