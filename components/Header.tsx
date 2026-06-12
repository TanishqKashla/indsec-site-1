"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";

type NavChild = { href: string; label: string; desc?: string };
type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

const NAV: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About Us",
    children: [
      { href: "/about#history", label: "Company History", desc: "Timeline since 1993, exchange memberships, awards" },
      { href: "/about#team",    label: "Team Bios & Photos", desc: "Leadership and senior coverage" },
    ],
  },
  {
    href: "/lines-of-business",
    label: "Lines of Business",
    children: [
      { href: "/institutional-broking", label: "Institutional Broking", desc: "Research, sales, trading, corporate access" },
      { href: "/family-office",         label: "Family Office",         desc: "Succession, trusts, surplus-fund advisory" },
      { href: "/gift-city",             label: "GIFT City / PMS",       desc: "IFSC gateway and portfolio management" },
    ],
  },
  {
    href: "/research",
    label: "Research",
    children: [
      { href: "/research#reports", label: "Reports", desc: "Daily, weekly, sector and macro notes" },
    ],
  },
  {
    href: "/investor-relations",
    label: "Investor Relations",
    children: [
      { href: "/investor-relations#disclosures", label: "Disclosures", desc: "SEBI, research analyst & policy disclosures" },
    ],
  },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);                    // mobile sheet
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click / Escape
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setActiveMenu(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveMenu(null);
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : !!pathname?.startsWith(href);

  return (
    <nav className="navbar" aria-label="Primary">
      <div className="navbar__inner" ref={containerRef}>
        <Link href="/" className="navbar__brand" aria-label="Indsec home">
          <Logo mode="light" size={56} />
        </Link>

        <ul className="navbar__links" data-open={open}>
          {NAV.map((item) => {
            const active = isActive(item.href);
            const hasChildren = !!item.children?.length;
            const expanded = activeMenu === item.label;

            return (
              <li
                key={item.label}
                className="navbar__item"
                onMouseEnter={() => hasChildren && setActiveMenu(item.label)}
                onMouseLeave={() => hasChildren && setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className="navbar__link"
                  aria-current={active ? "page" : undefined}
                  aria-haspopup={hasChildren || undefined}
                  aria-expanded={hasChildren ? expanded : undefined}
                  onClick={() => {
                    setOpen(false);
                    setActiveMenu(null);
                  }}
                  onFocus={() => hasChildren && setActiveMenu(item.label)}
                >
                  {item.label}
                  {hasChildren && (
                    <span aria-hidden="true" className="navbar__caret">▾</span>
                  )}
                </Link>

                {hasChildren && (
                  <div
                    className="navbar__menu"
                    data-open={expanded}
                    role="menu"
                    aria-label={item.label}
                  >
                    <ul>
                      {item.children!.map((c) => (
                        <li key={c.href} role="none">
                          <Link
                            role="menuitem"
                            href={c.href}
                            className="navbar__menu-link"
                            onClick={() => {
                              setOpen(false);
                              setActiveMenu(null);
                            }}
                          >
                            <span className="navbar__menu-title">{c.label}</span>
                            {c.desc && (
                              <span className="navbar__menu-desc">{c.desc}</span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="navbar__right">
          <Link href="/contact" className="navbar__contact btn btn--ghost-white" aria-label="Contact us">
            <svg
              className="navbar__contact-icon"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span className="navbar__contact-label">Contact</span>
          </Link>

          <button
            className="navbar__burger"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </nav>
  );
}
