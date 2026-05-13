// Indsec logo: stacked crimson horizontal bars + small dot above + navy "Indsec" wordmark
// Rendered inline as SVG so it can recolor for dark / light backgrounds.

type Props = {
  mode?: "light" | "dark";       // "light" = white text on gradient nav, "dark" = full color on white
  size?: number;                  // visual height in px
};

export function Logo({ mode = "light", size = 36 }: Props) {
  const wordColor = mode === "light" ? "#FFFFFF" : "#1B2A5E";
  const barColor = mode === "light" ? "#FFFFFF" : "#9C1B1F";

  return (
    <span
      aria-label="Indsec"
      style={{ display: "inline-flex", alignItems: "center", gap: 8, height: size }}
    >
      <svg
        viewBox="0 0 40 44"
        width={size * 0.85}
        height={size}
        aria-hidden="true"
      >
        {/* small dot */}
        <circle cx="20" cy="4" r="3" fill={barColor} />
        {/* 7 horizontal crimson bars of varying widths to mimic the Indsec mark */}
        <rect x="6"  y="11" width="28" height="2.4" rx="1" fill={barColor} />
        <rect x="4"  y="16" width="32" height="2.4" rx="1" fill={barColor} />
        <rect x="2"  y="21" width="36" height="2.4" rx="1" fill={barColor} />
        <rect x="3"  y="26" width="34" height="2.4" rx="1" fill={barColor} />
        <rect x="5"  y="31" width="30" height="2.4" rx="1" fill={barColor} />
        <rect x="7"  y="36" width="26" height="2.4" rx="1" fill={barColor} />
        <rect x="9"  y="41" width="22" height="2.4" rx="1" fill={barColor} />
      </svg>
      <span
        style={{
          fontFamily: "Mulish, sans-serif",
          fontWeight: 700,
          fontSize: size * 0.55,
          color: wordColor,
          letterSpacing: 0.4,
          lineHeight: 1,
        }}
      >
        Indsec
      </span>
    </span>
  );
}
