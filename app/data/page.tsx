import type { Metadata } from "next";

import { DataExplorer } from "@/components/data/data-explorer";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "India in Data", description: "Accessible, sourced and contextual data comparisons." };

export default function DataPage() {
  return (
    <main id="main" className="data-section">
      <PageHero eyebrow="India in data" title="A number is only the beginning." description="Phase 1 contains three reviewed comparisons for the three demonstration states. Every view carries its unit, reference year, source, update date and interpretive note." />
      <section className="section"><div className="shell"><DataExplorer /></div></section>
      <section className="section hairline"><div className="shell prose"><h2>Why the dataset is small</h2><p>BHARAT never fills a chart with invented values. This release demonstrates the complete interaction and attribution architecture using verifiable Census and state-profile records. New data modules must pass schema and source validation before publication.</p></div></section>
    </main>
  );
}
