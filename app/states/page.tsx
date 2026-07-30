import type { Metadata } from "next";

import { states } from "@/content/states";
import { CollectionPage } from "@/components/collection-page";

export const metadata: Metadata = { title: "States", description: "Reviewed state atlases in BHARAT." };

export default function StatesPage() {
  return <CollectionPage eyebrow="State atlas" title="Three states. Three ways to read a landscape." description="Phase 1 begins with complete, sourced demonstration atlases. More states can enter through the same validated content model." items={states.map((state) => ({ title: `${state.name} · ${state.localName}`, description: state.overview, href: `/states/${state.slug}` }))} />;
}
