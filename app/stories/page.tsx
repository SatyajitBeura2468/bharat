import type { Metadata } from "next";

import { stories } from "@/content/stories";
import { CollectionPage } from "@/components/collection-page";

export const metadata: Metadata = { title: "Stories", description: "Editorial journeys through India's land, knowledge and institutions." };

export default function StoriesPage() {
  return <CollectionPage eyebrow="India through stories" title="One question, followed deeply." description="The story engine combines prose, maps, timelines, data and source panels in a readable, reusable structure." items={stories.map((story) => ({ title: story.title, description: `${story.readMinutes} min · ${story.dek}`, href: `/stories/${story.slug}` }))} />;
}
