import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { historicalEvents } from "@/content/history";
import { stories } from "@/content/stories";
import { DataExplorer } from "@/components/data/data-explorer";
import { EntryTransition } from "@/components/entry-transition";
import { Hero } from "@/components/hero/hero";
import { LazyAtlasMap } from "@/components/map/lazy-atlas-map";
import { SearchBand } from "@/components/search/search-band";

const culture = [
  ["Languages", "Words travel across families, regions and scripts."],
  ["Architecture", "Stone, timber, earth and modern materials shape place."],
  ["Dance & music", "Knowledge carried through movement, rhythm and teaching."],
  ["Textiles", "Fibre, dye and pattern hold geographic memory."],
  ["Cuisine", "Foodways emerge from ecology, labour, movement and season."],
  ["Literature & craft", "Living practices link makers, readers and communities."],
] as const;

const landscapes = ["Himalayas", "Indo-Gangetic Plain", "Thar Desert", "Deccan Plateau", "Western Ghats", "Coasts & Islands"];

const innovations = ["Space & astronomy", "Science & medicine", "Engineering", "Digital systems", "Renewable energy", "Research institutions"];

export default function HomePage() {
  return (
    <>
      <EntryTransition />
      <main id="main">
        <Hero />

        <section className="section" id="explore" aria-labelledby="explore-title">
          <div className="shell section-intro">
            <div>
              <p className="eyebrow">One land, many worlds</p>
              <h2 className="display section-heading" id="explore-title">
                Begin with <em>place.</em>
              </h2>
            </div>
            <div>
              <p className="lede">Move through administrative boundaries, landscapes and evidence layers. The map remains usable by touch, keyboard and the state list.</p>
              <Link className="text-link" href="/states">Browse all states <ArrowUpRight size={15} /></Link>
            </div>
          </div>
          <div className="map-stage">
            <LazyAtlasMap />
          </div>
        </section>

        <section className="section hairline" aria-labelledby="history-title">
          <div className="shell section-intro">
            <div>
              <p className="eyebrow">History in motion</p>
              <h2 className="display section-heading" id="history-title">Time is not a <em>straight line.</em></h2>
            </div>
            <div>
              <p className="lede">A navigable chronology that distinguishes precise dates, approximate ranges and debated interpretation.</p>
              <Link className="text-link" href="/history/timeline">Open full timeline <ArrowUpRight size={15} /></Link>
            </div>
          </div>
          <div className="timeline-track" aria-label="Selected periods in Indian history">
            {historicalEvents.map((event, index) => (
              <article className="era" id={event.id} key={event.id}>
                <time>{event.period}</time>
                <h3>{event.title}</h3>
                <p>{event.summary}</p>
                <span className="certainty">{event.precision} dating</span>
                <span className="sr-only">Event {index + 1} of {historicalEvents.length}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section hairline" aria-labelledby="culture-title">
          <div className="shell">
            <div className="section-intro">
              <div>
                <p className="eyebrow">The living fabric</p>
                <h2 className="display section-heading" id="culture-title">Culture is made <em>every day.</em></h2>
              </div>
              <p className="lede">Not one visual shorthand, but a changing tapestry of language, material, performance, memory and work.</p>
            </div>
            <div className="tapestry">
              {culture.map(([title, description]) => (
                <Link className="tapestry-item" href={`/culture#${title.toLowerCase().replaceAll(" ", "-").replace("&", "and")}`} key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section nature-section" aria-labelledby="nature-title">
          <div className="shell section-intro">
            <div>
              <p className="eyebrow">Nature carved this land</p>
              <h2 className="display section-heading" id="nature-title">Elevation becomes <em>ecology.</em></h2>
            </div>
            <p className="lede">Mountains, plateaus, plains, rivers, coasts and islands become the frame through which human life is read.</p>
          </div>
          <div className="nature-landscape">
            <div className="nature-nav">
              {landscapes.map((landscape) => (
                <Link key={landscape} href={`/nature#${landscape.toLowerCase().replaceAll(" ", "-").replace("&", "and")}`}>{landscape}</Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section orbit-section" aria-labelledby="innovation-title">
          <div className="shell">
            <div className="section-intro">
              <div>
                <p className="eyebrow">BHARAT builds the future</p>
                <h2 className="display section-heading" id="innovation-title">A line measures the sky. Then enters <em>orbit.</em></h2>
              </div>
              <p className="lede">Institutions, instruments and public systems—presented with the sources and context behind every claim.</p>
            </div>
            <div className="orbit-stage">
              <div className="innovation-list">
                {innovations.map((item, index) => (
                  <Link key={item} href={item === "Space & astronomy" ? "/innovation/space" : `/innovation#${item.toLowerCase().replaceAll(" ", "-").replace("&", "and")}`}>
                    <span>0{index + 1}</span><strong>{item}</strong>
                  </Link>
                ))}
              </div>
              <div className="orbit" aria-hidden="true"><span className="orbit-dot" /></div>
            </div>
          </div>
        </section>

        <section className="section data-section" aria-labelledby="data-title">
          <div className="shell">
            <div className="section-intro">
              <div>
                <p className="eyebrow">India in data</p>
                <h2 className="display section-heading" id="data-title">Numbers need <em>context.</em></h2>
              </div>
              <p className="lede">Every chart states its source, year, unit, update date and interpretive limits. The launch dataset is deliberately small and verified.</p>
            </div>
            <DataExplorer />
          </div>
        </section>

        <section className="section" aria-labelledby="stories-title">
          <div className="shell">
            <div className="section-intro">
              <div>
                <p className="eyebrow">India through stories</p>
                <h2 className="display section-heading" id="stories-title">Follow one question <em>deeply.</em></h2>
              </div>
              <p className="lede">Editorial journeys combine maps, timelines, primary references and interpretation without flattening complexity.</p>
            </div>
            <div className="stories-layout">
              <Link className="lead-story" href={`/stories/${stories[0]!.slug}`}>
                <div className="lead-story-content">
                  <p className="eyebrow">{stories[0]!.topic} · {stories[0]!.readMinutes} min</p>
                  <h3>{stories[0]!.title}</h3>
                  <p>{stories[0]!.dek}</p>
                </div>
              </Link>
              <div className="story-stack">
                {stories.slice(1, 4).map((story) => (
                  <article key={story.slug}>
                    <p className="eyebrow">{story.topic} · {story.readMinutes} min</p>
                    <h3><Link href={`/stories/${story.slug}`}>{story.title}</Link></h3>
                    <p>{story.dek}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
        <SearchBand />
      </main>
    </>
  );
}
