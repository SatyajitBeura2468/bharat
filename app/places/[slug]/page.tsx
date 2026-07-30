import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { places, placeBySlug } from "@/content/places";
import { sourceById } from "@/content/sources";
import { states } from "@/content/states";

type Props = { params: Promise<{ slug: string }> };

const derivedPlaces = states.flatMap((state) =>
  state.places.map((place) => ({
    id: `derived-${place.slug}`,
    slug: place.slug,
    name: place.name,
    stateSlug: state.slug,
    kind: place.kind,
    summary: `${place.name} is included in the ${state.name} atlas. Its full research record is represented here through the state’s reviewed geographic and cultural context.`,
    sourceIds: state.sourceIds,
  })),
);

const allPlaces = new Map([...derivedPlaces, ...places].map((place) => [place.slug, place]));

export function generateStaticParams() {
  return [...allPlaces.keys()].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const place = allPlaces.get((await params).slug);
  return place ? { title: place.name, description: place.summary } : {};
}

export default async function PlacePage({ params }: Props) {
  const slug = (await params).slug;
  const place = placeBySlug.get(slug) ?? allPlaces.get(slug);
  if (!place) notFound();
  const state = states.find((item) => item.slug === place.stateSlug);

  return (
    <main id="main">
      <header className="state-hero" style={{ "--state-accent": state?.atmosphere.accent ?? "#126C70" } as React.CSSProperties}>
        <div className="shell state-hero-grid">
          <div><p className="eyebrow">{place.kind} · {state?.name}</p><h1 className="display state-title">{place.name}</h1><p className="lede">{place.summary}</p></div>
          <div className="nature-landscape" style={{ minHeight: 430 }} aria-hidden="true" />
        </div>
      </header>
      <section className="section"><div className="shell prose"><h2>Read this place in context</h2><p>Place records connect landscape, state chapters and the registered evidence behind them. BHARAT avoids unsourced rankings and tourism copy.</p>{state ? <Link className="text-link" href={`/states/${state.slug}`}>Return to {state.name} →</Link> : null}<h2>Evidence</h2>{place.sourceIds.map((id) => { const source = sourceById.get(id); return source ? <p key={id}><a href={source.url} target="_blank" rel="noreferrer">{source.publisher} · {source.title} ↗</a></p> : null; })}</div></section>
    </main>
  );
}
