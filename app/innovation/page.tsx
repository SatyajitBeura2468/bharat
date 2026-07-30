import type { Metadata } from "next";

import { CollectionPage } from "@/components/collection-page";

export const metadata: Metadata = { title: "Innovation", description: "Institutions, systems and ideas shaping modern India." };

const items = ["Space", "Astronomy", "Science", "Medicine", "Engineering", "Digital systems", "Renewable energy", "Railways", "Infrastructure", "Artificial intelligence", "Research institutions"];

export default function InnovationPage() {
  return <CollectionPage eyebrow="BHARAT builds the future" title="Ambition, examined precisely." description="Programmes are presented through institutions, public documentation and measurable context—not slogans." items={items.map((title) => ({ title, description: "A source-led interface for programmes, institutions, instruments and public impact.", href: title === "Space" ? "/innovation/space" : undefined, label: "Research field" }))} />;
}
