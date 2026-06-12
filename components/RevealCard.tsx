"use client";

// Image card whose detail panel appears on hover (desktop / keyboard focus) or
// on click / tap (touch). Used for the Family Office "What We Do" section.

import Image from "next/image";
import { useState } from "react";

type Props = {
  image: string;
  title: string;
  items: string[];
};

export function RevealCard({ image, title, items }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <article className="reveal-card" data-open={open}>
      <Image
        src={image}
        alt=""
        fill
        quality={90}
        sizes="(max-width: 900px) 100vw, 33vw"
        className="reveal-card__img"
        style={{ objectFit: "cover" }}
      />
      <span className="reveal-card__scrim" aria-hidden="true" />

      {/* full-card toggle: reveals on hover/focus via CSS, toggles on tap via state */}
      <button
        type="button"
        className="reveal-card__toggle"
        aria-expanded={open}
        aria-label={`${title} — show details`}
        onClick={() => setOpen((o) => !o)}
      />

      <span className="reveal-card__title" aria-hidden="true">{title}</span>

      <div className="reveal-card__panel">
        <h3 className="reveal-card__panel-title">{title}</h3>
        <ul className="reveal-card__list">
          {items.map((i) => <li key={i}>{i}</li>)}
        </ul>
      </div>
    </article>
  );
}
