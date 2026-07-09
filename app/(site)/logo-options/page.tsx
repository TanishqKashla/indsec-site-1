import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logo Options (internal preview)",
  robots: { index: false, follow: false },
};

/* ------------------------------------------------------------------ */
/*  Brand palette                                                      */
/* ------------------------------------------------------------------ */
const NAVY = "#1B2A5E";
const CRIM = "#9C1B1F";
const CRIM_BRIGHT = "#C42830";
const GRAD = "linear-gradient(135deg, #1B2A5E 0%, #9C1B1F 100%)";

/* ------------------------------------------------------------------ */
/*  One badge = a container shape + the dotted "i" monogram.           */
/*  Everything lives in a 40×40 SVG so shield / hexagon / split etc.    */
/*  render as crisply as the rounded square does.                      */
/* ------------------------------------------------------------------ */
type Shape = "square" | "circle" | "squircle" | "shield" | "hexagon" | "split";
type Fill = string | "grad" | [string, string]; // solid | gradient | diagonal split

type BadgeColors = { shape: Shape; bg: Fill; letter: string; dot: string; word: string };

// Outline element for a given shape (fill is applied by the caller).
function shapeOutline(shape: Shape, fill: string) {
  switch (shape) {
    case "circle":
      return <circle cx="20" cy="20" r="20" fill={fill} />;
    case "squircle":
      return <path d="M0 20C0 4 4 0 20 0s20 4 20 20-4 20-20 20S0 36 0 20Z" fill={fill} />;
    case "shield":
      return <path d="M20 1.5 37 7.5V19c0 10.5-7.6 17.5-17 19.8C10.6 36.5 3 29.5 3 19V7.5Z" fill={fill} />;
    case "hexagon":
      return <path d="M10 2.9h20L40 20 30 37.1H10L0 20Z" fill={fill} strokeLinejoin="round" />;
    case "split":
    case "square":
    default:
      return <rect x="0" y="0" width="40" height="40" rx="11" fill={fill} />;
  }
}

function Mark({ shape, bg, letter, dot }: BadgeColors) {
  // Stable-ish unique id from the colour combo (no Math.random in this env).
  const gid = `g-${shape}-${String(bg)}-${letter}-${dot}`.replace(/[^a-zA-Z0-9-]/g, "");
  const isGrad = bg === "grad";
  const isSplit = Array.isArray(bg);
  const solid = !isGrad && !isSplit ? (bg as string) : undefined;

  return (
    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" style={{ flexShrink: 0 }}>
      <defs>
        {isGrad && (
          <linearGradient id={gid} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor={NAVY} />
            <stop offset="1" stopColor={CRIM} />
          </linearGradient>
        )}
        {isSplit && <clipPath id={gid}>{shapeOutline(shape, "#000")}</clipPath>}
      </defs>

      {/* container */}
      {isSplit ? (
        <g clipPath={`url(#${gid})`}>
          <rect x="0" y="0" width="40" height="40" fill={(bg as [string, string])[0]} />
          <polygon points="40,0 40,40 0,40" fill={(bg as [string, string])[1]} />
        </g>
      ) : (
        shapeOutline(shape, isGrad ? `url(#${gid})` : (solid as string))
      )}

      {/* the dotted "i" */}
      <circle cx="20" cy="10" r="4.3" fill={dot} />
      <rect x="15.7" y="16" width="8.6" height="15.5" rx="4.3" fill={letter} />
    </svg>
  );
}

const Badge = (c: BadgeColors) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 12, height: 40 }}>
    <Mark {...c} />
    <span style={{ fontFamily: "Mulish, sans-serif", fontWeight: 800, fontSize: 21, color: c.word, letterSpacing: 0.2, lineHeight: 1 }}>
      Indsec
    </span>
  </span>
);

/* ------------------------------------------------------------------ */
/*  The options. Each keeps the family DNA (dotted "i" + navy/crimson  */
/*  + Mulish wordmark) and varies the container shape / fill.          */
/* ------------------------------------------------------------------ */
const OPTIONS: {
  id: string;
  name: string;
  note: string;
  onWhite: BadgeColors;
  onGradient: BadgeColors;
}[] = [
  {
    id: "1",
    name: "Gradient square (current)",
    note: "Navy→crimson rounded tile with a white “i”. The live default.",
    onWhite: { shape: "square", bg: "grad", letter: "#fff", dot: "#fff", word: NAVY },
    onGradient: { shape: "square", bg: "#fff", letter: CRIM, dot: CRIM, word: "#fff" },
  },
  {
    id: "2",
    name: "Solid crimson square",
    note: "Flat crimson tile + white “i”. Punchier and a touch more minimal.",
    onWhite: { shape: "square", bg: CRIM, letter: "#fff", dot: "#fff", word: NAVY },
    onGradient: { shape: "square", bg: "#fff", letter: CRIM, dot: CRIM, word: "#fff" },
  },
  {
    id: "3",
    name: "Navy square, crimson dot",
    note: "Navy tile, white stem, crimson dot — leans on brand navy with a crimson spark.",
    onWhite: { shape: "square", bg: NAVY, letter: "#fff", dot: CRIM_BRIGHT, word: NAVY },
    onGradient: { shape: "square", bg: "#fff", letter: NAVY, dot: CRIM, word: "#fff" },
  },
  {
    id: "4",
    name: "Diagonal split tile",
    note: "Same gradient idea, but as a crisp two-tone split — navy and crimson meeting on the diagonal. More graphic, prints flat.",
    onWhite: { shape: "split", bg: [NAVY, CRIM], letter: "#fff", dot: "#fff", word: NAVY },
    onGradient: { shape: "split", bg: ["#fff", "#F1E4E0"], letter: NAVY, dot: CRIM, word: "#fff" },
  },
  {
    id: "5",
    name: "Shield badge",
    note: "The “i” inside a solid shield — nods to “securities / trust” for a financial firm, while keeping the monogram.",
    onWhite: { shape: "shield", bg: "grad", letter: "#fff", dot: "#fff", word: NAVY },
    onGradient: { shape: "shield", bg: "#fff", letter: CRIM, dot: CRIM, word: "#fff" },
  },
  {
    id: "6",
    name: "Squircle (app icon)",
    note: "Superellipse tile — the iOS-style softness. Reads as a premium, modern product mark at small sizes.",
    onWhite: { shape: "squircle", bg: "grad", letter: "#fff", dot: "#fff", word: NAVY },
    onGradient: { shape: "squircle", bg: "#fff", letter: CRIM, dot: CRIM, word: "#fff" },
  },
  {
    id: "7",
    name: "Hexagon, crimson dot",
    note: "Navy hexagon with a crimson dot — a slightly more technical / institutional silhouette.",
    onWhite: { shape: "hexagon", bg: NAVY, letter: "#fff", dot: CRIM_BRIGHT, word: NAVY },
    onGradient: { shape: "hexagon", bg: "#fff", letter: NAVY, dot: CRIM, word: "#fff" },
  },
  {
    id: "8",
    name: "Circle badge",
    note: "Same monogram in a circle — softest of the set, very app-icon / avatar friendly.",
    onWhite: { shape: "circle", bg: "grad", letter: "#fff", dot: "#fff", word: NAVY },
    onGradient: { shape: "circle", bg: "#fff", letter: CRIM, dot: CRIM, word: "#fff" },
  },
];

export default function LogoOptionsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title-h2" style={{ color: "var(--color-navy-900)", marginBottom: 8 }}>
          Logo options — internal preview
        </h1>
        <p className="lead" style={{ marginBottom: 32 }}>
          Eight takes on the current mark. Every one keeps the same DNA — the
          dotted “i” monogram, the navy/crimson palette and the Mulish
          wordmark — and varies the container shape so they read as the same
          brand while feeling distinct. Each is shown on white and on the navbar
          gradient. Tell me a number and I’ll lock it in across the site.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {OPTIONS.map((o) => (
            <article key={o.id} className="card">
              <div className="card__body" style={{ padding: 24 }}>
                <h3 className="title-h4" style={{ color: "var(--color-navy-900)", textAlign: "left", marginBottom: 4 }}>
                  Option {o.id} · {o.name}
                </h3>
                <p className="fs-14 muted mb-3">{o.note}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ background: "#fff", border: "1px solid var(--color-border)", borderRadius: 8, padding: "18px 22px", minHeight: 76, display: "flex", alignItems: "center" }}>
                    <Badge {...o.onWhite} />
                  </div>
                  <div style={{ background: GRAD, borderRadius: 8, padding: "18px 22px", minHeight: 76, display: "flex", alignItems: "center" }}>
                    <Badge {...o.onGradient} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
