import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { sourceById } from "@/content/sources";
import { stateBySlug, states } from "@/content/states";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return states.map((state) => ({ slug: state.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const state = stateBySlug.get(slug);
  if (!state) return {};
  return {
    title: `${state.name} State Atlas`,
    description: state.overview,
    alternates: { canonical: `/states/${state.slug}` },
    openGraph: { title: `${state.name} · BHARAT`, description: state.overview },
  };
}

export default async function StatePage({ params }: Props) {
  const { slug } = await params;
  const state = stateBySlug.get(slug);
  if (!state) notFound();

  return (
    <main id="main">
      <header className="state-hero" style={{ "--state-accent": state.atmosphere.accent } as React.CSSProperties}>
        <div className="shell state-hero-grid">
          <div>
            <p className="eyebrow">{state.region} · State atlas</p>
            <h1 className="display state-title">{state.name}</h1>
            <p className="state-local">{state.localName}</p>
            <p className="lede">{state.overview}</p>
          </div>
          <div className="state-meta">
            <div><span>Capital</span><strong>{state.capital}</strong></div>
            <div><span>Area</span><strong>{state.metrics.areaKm2.toLocaleString("en-IN")} km²</strong></div>
            <div><span>Reviewed</span><strong>{state.reviewedAt}</strong></div>
          </div>
        </div>
      </header>
      <nav className="state-toc" aria-label={`${state.name} chapters`}>
        <div className="shell">
          {state.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}
          <a href="#place-index">Place index</a>
          <a href="#sources">Sources</a>
        </div>
      </nav>
      <div className="shell state-sections">
        {state.sections.map((section) => (
          <section className="state-chapter" id={section.id} key={section.id}>
            <h2>{section.title}</h2>
            <div>
              <h3>{section.summary}</h3>
              <p>{section.detail}</p>
              <p className="source-note">Evidence: {section.sourceIds.map((id) => sourceById.get(id)?.title ?? id).join("; ")}</p>
            </div>
          </section>
        ))}
        <section className="state-chapter" id="place-index">
          <h2>Place index</h2>
          <div className="index-list">
            {state.places.map((place) => (
              <Link className="index-row" style={{ gridTemplateColumns: "1fr auto" }} key={place.slug} href={`/places/${place.slug}`}>
                <h2>{place.name}</h2><span>{place.kind}</span>
              </Link>
            ))}
          </div>
        </section>
        <section className="state-chapter" id="sources">
          <h2>Sources</h2>
          <div>
            <p>This page was last reviewed on {state.reviewedAt}. Claims are tied to registered sources and should not be read as live statistics.</p>
            <Link className="text-link" href="/sources">Open source registry →</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
