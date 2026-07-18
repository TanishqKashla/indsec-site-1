// Decorative right-arrow used in call-to-action links. Rendered as an
// aria-hidden inline SVG (not a text glyph) so it is excluded from the link's
// accessible name — this keeps link accessible names consistent across the site
// (WCAG 3.2.4) and avoids "element contains only non-text characters" contrast
// flags that a bare "→" in its own span would trigger.
export function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "inline-block", verticalAlign: "-2px", marginLeft: 6 }}
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
