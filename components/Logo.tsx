// Indsec logo — the official white-background mark+wordmark (public/logo-white-bg.jpg)
// rendered inside a rounded white panel so it stays crisp on the gradient navbar
// and the dark footer. The image already contains the "INDSEC" wordmark, so no
// separate text is drawn. The transparent-background variant is used as the favicon.

import Image from "next/image";
import whiteLogo from "../public/logo-white-bg.jpg";

const RATIO = 1135 / 1386; // intrinsic width / height of the logo artwork

type Props = {
  mode?: "light" | "dark"; // kept for API compatibility with existing callers
  size?: number; // visual height of the white panel in px
  /**
   * Accessible name for the logo. Defaults to "" (decorative): every current
   * caller is already labelled by its context — the header link announces
   * "Indsec home" and the footer carries the company name in its copyright —
   * so the mark is decorative and must not double-announce "Indsec". Pass an
   * explicit alt if the logo ever stands alone as the sole brand identifier.
   */
  alt?: string;
};

export function Logo({ size = 56, alt = "" }: Props) {
  const pad = Math.round(size * 0.08);
  const innerH = size - pad * 2;
  const innerW = Math.round(innerH * RATIO);

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#FFFFFF",
        borderRadius: Math.round(size * 0.16),
        height: size,
        width: innerW + pad * 2,
        boxSizing: "border-box",
        padding: pad,
        flexShrink: 0,
        boxShadow: "0 1px 4px rgba(27, 42, 94, 0.18)",
      }}
    >
      <Image
        src={whiteLogo}
        alt={alt}
        height={innerH}
        width={innerW}
        style={{ height: innerH, width: "auto", display: "block" }}
        priority
      />
    </span>
  );
}
