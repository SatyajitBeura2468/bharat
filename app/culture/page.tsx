import type { Metadata } from "next";

import { CollectionPage } from "@/components/collection-page";

export const metadata: Metadata = { title: "Culture", description: "Explore living cultural knowledge across India." };

const items = [
  ["Languages", "Language, script and recognition are treated as related but distinct."],
  ["Architecture", "Material, climate, patronage and community shape buildings across periods."],
  ["Dance & music", "Performance traditions live through people, institutions and change."],
  ["Textiles", "Fibre, dye, weave and labour connect object to landscape."],
  ["Cuisine", "Foodways are read through ecology, season and movement."],
  ["Literature & crafts", "Texts and objects carry knowledge across generations."],
  ["Festivals", "Context matters more than spectacle."],
  ["Indigenous and tribal cultures", "Entries centre community attribution and careful terminology."],
] as const;

export default function CulturePage() {
  return <CollectionPage eyebrow="The living fabric" title="Culture is plural, specific and alive." description="BHARAT resists the postcard view. Each entry is designed to carry language, attribution, location and sources." items={items.map(([title, description]) => ({ title, description, label: "Editorial field" }))} />;
}
