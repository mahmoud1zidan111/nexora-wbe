import type { ReactNode } from "react";

export function InfoCard({ number, title, description, tags = [], meta, children }: { number?: string; title: string; description: string; tags?: string[]; meta?: string; children?: ReactNode }) {
  return (
    <article className="info-card">
      <div className="card-topline"><span>{number}</span>{meta ? <span>{meta}</span> : <span className="card-node" />}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {tags.length > 0 ? <div className="tag-row">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div> : null}
      {children}
    </article>
  );
}
