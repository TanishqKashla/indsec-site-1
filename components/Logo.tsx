// Indsec logo — the official striped-globe mark (public/main-logo.png) shown on
// a solid brand-red panel, so its transparent "white" background reads as red.
// The PNG already contains the "Indsec" wordmark, so no separate text is drawn.

import Image from "next/image";
import mainLogo from "../public/main-logo.png";

type Props = {
  mode?: "light" | "dark"; // kept for API compatibility with existing callers
  size?: number; // visual height of the red panel in px
};

export function Logo({ size = 38 }: Props) {
  const pad = Math.round(size * 0.14);
  const inner = size - pad * 2;

  return (
    <span
      aria-label="Indsec"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#FFFFFF", // white panel so the mark stays legible on the gradient navbar
        borderRadius: Math.round(size * 0.18),
        height: size,
        width: size, // the mark is ~square (104×116)
        boxSizing: "border-box",
        padding: pad,
        flexShrink: 0,
        boxShadow: "0 1px 4px rgba(27, 42, 94, 0.18)",
      }}
    >
      <Image
        src={mainLogo}
        alt="Indsec"
        height={inner}
        width={Math.round(inner * (104 / 116))}
        style={{ height: inner, width: "auto", display: "block" }}
        priority
      />
    </span>
  );
}
