import { datasets } from "@/content/datasets";
import { historicalEvents } from "@/content/history";
import { places } from "@/content/places";
import { sources } from "@/content/sources";
import { states } from "@/content/states";
import { stories } from "@/content/stories";
import {
  datasetSchema,
  historicalEventSchema,
  sourceSchema,
  stateSchema,
  storySchema,
} from "@/lib/content/schemas";

export function validateAllContent() {
  return {
    sources: sources.map((item) => sourceSchema.parse(item)),
    states: states.map((item) => stateSchema.parse(item)),
    events: historicalEvents.map((item) => historicalEventSchema.parse(item)),
    stories: stories.map((item) => storySchema.parse(item)),
    datasets: datasets.map((item) => datasetSchema.parse(item)),
    places,
  };
}

export type SearchRecord = {
  id: string;
  type: "State" | "Place" | "History" | "Story" | "Data";
  title: string;
  description: string;
  href: string;
  keywords: string[];
};

export const searchRecords: SearchRecord[] = [
  ...states.map((state) => ({
    id: state.id,
    type: "State" as const,
    title: state.name,
    description: `${state.capital} · ${state.region}`,
    href: `/states/${state.slug}`,
    keywords: [state.localName, state.capital, state.region],
  })),
  ...places.map((place) => ({
    id: place.id,
    type: "Place" as const,
    title: place.name,
    description: place.kind,
    href: `/places/${place.slug}`,
    keywords: [place.stateSlug, place.summary],
  })),
  ...historicalEvents.map((event) => ({
    id: event.id,
    type: "History" as const,
    title: event.title,
    description: `${event.period} · ${event.summary}`,
    href: `/history/timeline#${event.id}`,
    keywords: [event.period, event.precision],
  })),
  ...stories.map((story) => ({
    id: story.id,
    type: "Story" as const,
    title: story.title,
    description: story.dek,
    href: `/stories/${story.slug}`,
    keywords: [story.topic],
  })),
  ...datasets.map((dataset) => ({
    id: dataset.id,
    type: "Data" as const,
    title: dataset.title,
    description: `${dataset.referenceYear} · ${dataset.unit}`,
    href: `/data?dataset=${dataset.id}`,
    keywords: [dataset.topic, dataset.methodology],
  })),
];
