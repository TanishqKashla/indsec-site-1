import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logo Options (internal preview)",
  robots: { index: false, follow: false },
};

/* A monogram badge ("i" in a tile) + wordmark, fully parameterised so each
   variant can be shown on white and on the navbar gradient. */
type Mono = {
  shape: "square" | "circle";
  bg: string;
  letter: string;
  dot: string;
  word: string;
};

const Badge = ({ shape, bg, letter, dot, word }: Mono) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 12, height: 40 }}>
    <span
      aria-hidden="true"
      style={{
        width: 40,
        height: 40,
        borderRadius: shape === "circle" ? "50%" : 11,
        background: bg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="23" height="23" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="5" r="2.7" fill={dot} />
        <rect x="9.3" y="9.6" width="5.4" height="10.8" rx="2.7" fill={letter} />
      </svg>
    </span>
    <span style={{ fontFamily: "Mulish, sans-serif", fontWeight: 800, fontSize: 21, color: word, letterSpacing: 0.2, lineHeight: 1 }}>
      Indsec
    </span>
  </span>
);

const GRAD = "linear-gradient(135deg, #1B2A5E 0%, #9C1B1F 100%)";

const OPTIONS: {
  id: string;
  name: string;
  note: string;
  onWhite: Mono;
  onGradient: Mono;
}[] = [
  {
    id: "1",
    name: "Gradient square (current)",
    note: "Navy→crimson rounded tile with a white 'i'. The live default.",
    onWhite: { shape: "square", bg: GRAD, letter: "#fff", dot: "#fff", word: "#1B2A5E" },
    onGradient: { shape: "square", bg: "#fff", letter: "#9C1B1F", dot: "#9C1B1F", word: "#fff" },
  },
  {
    id: "2",
    name: "Solid crimson square",
    note: "Flat crimson tile + white 'i'. Punchier and a touch more minimal.",
    onWhite: { shape: "square", bg: "#9C1B1F", letter: "#fff", dot: "#fff", word: "#1B2A5E" },
    onGradient: { shape: "square", bg: "#fff", letter: "#9C1B1F", dot: "#9C1B1F", word: "#fff" },
  },
  {
    id: "3",
    name: "Navy square, crimson dot",
    note: "Navy tile, white stem, crimson dot — leans on the brand navy, dot pops in crimson.",
    onWhite: { shape: "square", bg: "#1B2A5E", letter: "#fff", dot: "#C42830", word: "#1B2A5E" },
    onGradient: { shape: "square", bg: "#fff", letter: "#1B2A5E", dot: "#9C1B1F", word: "#fff" },
  },
  {
    id: "4",
    name: "Circle badge",
    note: "Same monogram in a circle instead of a rounded square — softer, very app-icon friendly.",
    onWhite: { shape: "circle", bg: GRAD, letter: "#fff", dot: "#fff", word: "#1B2A5E" },
    onGradient: { shape: "circle", bg: "#fff", letter: "#9C1B1F", dot: "#9C1B1F", word: "#fff" },
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
          Modern monogram concepts (a solid tile + the dotted “i”, not just
          lines). Each is shown on white and on the navbar gradient. Tell me a
          number and I’ll lock it in across the site.
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
