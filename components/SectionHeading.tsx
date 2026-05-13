type Props = {
  title: string;
  lead?: string;
  align?: "center" | "left";
  withRule?: boolean;
};

export function SectionHeading({ title, lead, align = "center", withRule = false }: Props) {
  return (
    <header style={{ marginBottom: 40 }}>
      <h2 className={align === "left" ? "section-heading section-heading--left" : "section-heading"}>
        {title}
      </h2>
      {withRule && (
        <hr className={align === "left" ? "divider divider--left" : "divider"} style={{ marginTop: 16 }} />
      )}
      {lead && <p className="section__lead">{lead}</p>}
    </header>
  );
}
