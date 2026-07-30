import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { sourceById } from "@/content/sources";
import { stories, storyBySlug } from "@/content/stories";
import { DataExplorer } from "@/components/data/data-explorer";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const story = storyBySlug.get((await params).slug);
  return story ? { title: story.title, description: story.dek, alternates: { canonical: `/stories/${story.slug}` } } : {};
}

export default async function StoryPage({ params }: Props) {
  const story = storyBySlug.get((await params).slug);
  if (!story) notFound();

  return (
    <main id="main">
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow">{story.topic} · {story.readMinutes} minute story</p>
          <h1 className="display">{story.title}</h1>
          <p className="lede">{story.dek}</p>
        </div>
      </header>
      <article className="section">
        <div className="shell prose">
          {story.blocks.map((block, index) => {
            if (block.type === "prose") return <section key={index}><h2>{block.title}</h2><p>{block.body}</p></section>;
            if (block.type === "quote") return <blockquote key={index} style={{ margin: "4rem 0", padding: "2rem", borderBlock: "1px solid var(--line)", fontFamily: "var(--display)", fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}>“{block.quote}”<footer style={{ marginTop: "1rem", color: "var(--brass)", fontFamily: "var(--sans)", fontSize: ".75rem" }}>— {block.attribution}</footer></blockquote>;
            if (block.type === "data") return <section key={index}><h2>{block.title}</h2><p>{block.note}</p><DataExplorer /></section>;
            if (block.type === "map") return <section key={index}><h2>{block.title}</h2><div className="nature-landscape" style={{ minHeight: 360 }} aria-label="Abstract topographic map composition"><p style={{ position: "absolute", left: "2rem", bottom: "2rem", maxWidth: "40ch" }}>{block.description}</p></div></section>;
            return <section key={index}><h2>{block.title}</h2><p>Connected timeline entries: {block.eventIds.join(", ")}.</p><Link className="text-link" href="/history/timeline">Open chronology →</Link></section>;
          })}
          <section id="sources"><h2>Sources & review</h2><p>Reviewed {story.reviewedAt}. The story is an independent editorial synthesis.</p>{story.sourceIds.map((id) => { const source = sourceById.get(id); return source ? <p key={id}><a className="text-link" href={source.url} target="_blank" rel="noreferrer">{source.publisher} · {source.title} ↗</a></p> : null; })}</section>
        </div>
      </article>
    </main>
  );
}
