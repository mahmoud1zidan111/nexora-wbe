type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  marker?: string;
  center?: boolean;
};

export function SectionHeading({ eyebrow, title, description, marker, center = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${center ? "section-heading--center" : ""}`}>
      <div className="section-heading__row">
        <p className="eyebrow">{eyebrow}</p>
        {marker ? <p className="section-marker">{marker}</p> : null}
      </div>
      <h2>{title}</h2>
      {description ? <p className="section-lede">{description}</p> : null}
    </div>
  );
}
