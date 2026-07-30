import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SearchPage } from "@/components/search/search-page";

export const metadata: Metadata = { title: "Search", description: "Search BHARAT across places, states, history, stories and data." };

export default function SearchRoute() {
  return <main id="main"><PageHero eyebrow="Search BHARAT" title="Follow your curiosity." description="A local, replaceable Phase 1 search index with typo tolerance and result previews." /><section className="section"><div className="shell"><SearchPage /></div></section></main>;
}
