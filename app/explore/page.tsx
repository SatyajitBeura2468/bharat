import type { Metadata } from "next";

import { LazyAtlasMap } from "@/components/map/lazy-atlas-map";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Explore India",
  description: "Explore India through an accessible interactive state atlas.",
};

export default function ExplorePage() {
  return (
    <main id="main">
      <PageHero eyebrow="Interactive atlas" title="One land, many worlds." description="Select a state from the map or its textual index. Change the interpretive layer without losing geographic context." />
      <section className="map-stage">
        <LazyAtlasMap />
      </section>
      <section className="section">
        <div className="shell prose">
          <h2>How to read this map</h2>
          <p>Administrative boundaries support navigation; they are not used as a substitute for ecological, linguistic or historical geography. Every boundary dataset is recorded in the source registry with its licence.</p>
          <p>Keyboard and touch users can select the same entries through the state list. The Phase 1 map foregrounds Odisha, Rajasthan and Kerala because those are the three fully reviewed state atlases.</p>
        </div>
      </section>
    </main>
  );
}
