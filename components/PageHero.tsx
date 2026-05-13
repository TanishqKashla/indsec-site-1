type Props = {
  title: string;
  kicker?: string;
};

export function PageHero({ title, kicker }: Props) {
  return (
    <section className="hero hero--page" aria-label={title}>
      <div className="hero__inner">
        {kicker && (
          <p className="fs-14" style={{ color: "rgba(255,255,255,0.85)", textTransform: "uppercase", letterSpacing: 1.4, marginBottom: 12 }}>
            {kicker}
          </p>
        )}
        <div className="hero__panel">
          <h1 className="hero__title">{title}</h1>
        </div>
      </div>
    </section>
  );
}
