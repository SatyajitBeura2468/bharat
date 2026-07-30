import type { Metadata } from "next";

import { CollectionPage } from "@/components/collection-page";

export const metadata: Metadata = { title: "Nature", description: "Explore India's physical geography and living systems." };

const items = ["Himalayas", "Indo-Gangetic Plain", "Thar Desert", "Deccan Plateau", "Western Ghats", "Eastern Ghats", "Coasts", "Islands", "Rivers", "Wetlands", "Forests"];

export default function NaturePage() {
  return <CollectionPage eyebrow="Nature carved this land" title="Landform becomes climate, water and life." description="A physical atlas that keeps environmental systems distinct from administrative boundaries." items={items.map((title) => ({ title, description: "A geography-led chapter with terrain, ecology, human context and documented evidence.", label: "Landscape" }))} />;
}
