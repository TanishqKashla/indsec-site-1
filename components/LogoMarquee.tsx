"use client";

import { useState } from "react";
import Image from "next/image";

export type ClientLogo = { name: string; file: string; dark?: boolean };

function LogoTile({ logo }: { logo: ClientLogo }) {
  // Marks are purely decorative here — the whole strip is a "representative
  // clients" branding wall (see the caption). It is hidden from assistive tech
  // via aria-hidden on the marquee container, so every logo carries alt="".
  return (
    <li
      className={`logo-tile${logo.dark ? " logo-tile--dark" : ""}`}
      title={logo.name}
    >
      {logo.file.endsWith(".svg") ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/client logos/${logo.file}`}
          alt=""
          className="logo-tile__img"
          // eager, not lazy: tiles pan into view via CSS transform, which does
          // not reliably trip the lazy-load IntersectionObserver — lazy tiles
          // would arrive empty
          loading="eager"
          style={{ objectFit: "contain", width: 180, height: 56 }}
        />
      ) : (
        <Image
          src={`/client logos/${logo.file}`}
          alt=""
          width={180}
          height={56}
          className="logo-tile__img"
          loading="eager"
          style={{ objectFit: "contain" }}
        />
      )}
    </li>
  );
}

/**
 * Continuously panning client-logo marquee with an accessible play/pause
 * control (WCAG 2.2.2 Pause, Stop, Hide). The animation starts playing; the
 * button lets keyboard and touch users stop the motion — the hover-pause alone
 * does not reach them. Visitors who prefer reduced motion get a still,
 * scrollable strip via CSS, independent of this toggle.
 */
export function LogoMarquee({ rows }: { rows: ClientLogo[][] }) {
  const [paused, setPaused] = useState(false);

  return (
    <div className="logo-marquee-wrap">
      <div className="logo-marquee__controls">
        <button
          type="button"
          className="logo-marquee__toggle"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={
            paused
              ? "Play the scrolling client logos"
              : "Pause the scrolling client logos"
          }
        >
          <span className="logo-marquee__toggle-icon" aria-hidden="true">
            {paused ? (
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            )}
          </span>
          <span className="logo-marquee__toggle-text">
            {paused ? "Play" : "Pause"}
          </span>
        </button>
      </div>

      {/* The panning strip is decorative branding — hidden from assistive tech.
          The visible pause control above stays operable for motion (WCAG 2.2.2),
          and the surrounding kicker/caption text describes it for AT users. */}
      <div
        className={`logo-marquee${paused ? " is-paused" : ""}`}
        aria-hidden="true"
      >
        {rows.map((row, ri) => (
          <div className="logo-marquee__viewport" key={ri}>
            <ul
              className={`logo-marquee__track logo-marquee__track--${
                ri % 2 === 0 ? "ltr" : "rtl"
              }`}
            >
              {/* two copies of the row make a seamless -50% loop; the
                  duplicate set is hidden from assistive tech */}
              {row.map((logo) => (
                <LogoTile key={logo.name} logo={logo} />
              ))}
              {row.map((logo) => (
                <LogoTile key={`${logo.name}-dup`} logo={logo} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
