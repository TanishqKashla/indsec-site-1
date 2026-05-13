"use client";

import { useState } from "react";

type Item = { title: string; body: React.ReactNode };

export function Accordion({ items, defaultOpen = 0 }: { items: Item[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="accordion">
      {items.map((it, i) => {
        const expanded = open === i;
        return (
          <div key={i} className="accordion__item">
            <button
              type="button"
              className="accordion__btn"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? null : i)}
            >
              {it.title}
            </button>
            <div className="accordion__body">{it.body}</div>
          </div>
        );
      })}
    </div>
  );
}
