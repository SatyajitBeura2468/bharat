import { datasets } from "@/content/datasets";
import { historicalEvents } from "@/content/history";
import { places } from "@/content/places";
import { sources } from "@/content/sources";
import { states } from "@/content/states";
import { stories } from "@/content/stories";

const known = new Set(sources.map((source) => source.id));
const references = [
  ...datasets.flatMap((item) => item.sourceIds.map((id) => [item.id, id] as const)),
  ...historicalEvents.flatMap((item) => item.sourceIds.map((id) => [item.id, id] as const)),
  ...places.flatMap((item) => item.sourceIds.map((id) => [item.id, id] as const)),
  ...states.flatMap((item) => [...item.sourceIds, ...item.sections.flatMap((section) => section.sourceIds)].map((id) => [item.id, id] as const)),
  ...stories.flatMap((item) => item.sourceIds.map((id) => [item.id, id] as const)),
];
const missing = references.filter(([, sourceId]) => !known.has(sourceId));
const duplicateIds = sources.filter((source, index) => sources.findIndex((item) => item.id === source.id) !== index);

if (missing.length || duplicateIds.length) {
  process.stderr.write(`Source validation failed.\nMissing: ${JSON.stringify(missing)}\nDuplicates: ${duplicateIds.map((item) => item.id).join(", ")}\n`);
  process.exit(1);
}

process.stdout.write(`Source registry valid: ${sources.length} sources, ${references.length} references.\n`);
