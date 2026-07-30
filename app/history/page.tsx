import type { Metadata } from "next";

import { historicalEvents } from "@/content/history";
import { CollectionPage } from "@/components/collection-page";

export const metadata: Metadata = { title: "History", description: "A sourced, uncertainty-aware historical atlas of India." };

export default function HistoryPage() {
  return <CollectionPage eyebrow="History in motion" title="Chronology with room for uncertainty." description="Periods overlap. Evidence changes. BHARAT marks dating precision and avoids presenting debated interpretation as settled fact." items={historicalEvents.map((event) => ({ title: event.title, description: `${event.period} — ${event.summary}`, href: `/history/timeline#${event.id}` }))} />;
}
