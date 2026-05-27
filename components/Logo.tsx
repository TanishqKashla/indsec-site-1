// Indsec logo — modern monogram badge ("i" in a rounded crimson/navy tile) + wordmark.
// Rendered inline so it recolors for dark / light backgrounds and scales crisply.

type Props = {
  mode?: "light" | "dark"; // "light" = on the gradient navbar, "dark" = on white
  size?: number; // visual height in px
};

export function Logo({ mode = "light", size = 38 }: Props) {
  const onLight = mode === "light"; // sitting on the crimson/navy gradient

  const badgeBg = onLight
    ? "#FFFFFF"
    : "linear-gradient(135deg, #1B2A5E 0%, #9C1B1F 100%)";
  const letterColor = onLight ? "#9C1B1F" : "#FFFFFF";
  const wordColor = onLight ? "#FFFFFF" : "#1B2A5E";

  return (
    <span
      aria-label="Indsec"
      style={{ display: "inline-flex", alignItems: "center", gap: size * 0.3, height: size }}
    >
      {/* monogram badge */}
      <span
        aria-hidden="true"
        style={{
          width: size,
          height: size,
          borderRadius: size * 0.28,
          background: badgeBg,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          boxShadow: onLight ? "none" : "0 2px 6px rgba(27, 42, 94, 0.25)",
        }}
      >
        <svg width={size * 0.58} height={size * 0.58} viewBox="0 0 24 24" aria-hidden="true">
          {/* the dot */}
          <circle cx="12" cy="5" r="2.7" fill={letterColor} />
          {/* the stem */}
          <rect x="9.3" y="9.6" width="5.4" height="10.8" rx="2.7" fill={letterColor} />
        </svg>
      </span>

      {/* wordmark */}
      <span
        style={{
          fontFamily: "Mulish, sans-serif",
          fontWeight: 800,
          fontSize: size * 0.52,
          color: wordColor,
          letterSpacing: 0.2,
          lineHeight: 1,
        }}
      >
        Indsec
      </span>
    </span>
  );
}
