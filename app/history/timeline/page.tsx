import type { Metadata } from "next";

import { historicalEvents } from "@/content/history";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Historical Timeline", description: "Navigate selected eras with visible dating precision and source context." };

export default function TimelinePage() {
  return (
    <main id="main">
      <PageHero eyebrow="Evidence-led chronology" title="History in motion." description="This Phase 1 sequence is a scaffold for deeper period essays. Date labels communicate whether an entry is exact, approximate or a broad range." />
      <section className="section">
        <div className="shell index-list">
          {historicalEvents.map((event, index) => (
            <article className="index-row" id={event.id} key={event.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{event.title}</h2>
              <p>{event.period}<br />{event.summary}</p>
              <span>{event.precision}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
