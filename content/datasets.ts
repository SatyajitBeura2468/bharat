import type { Dataset } from "@/lib/content/schemas";

const base: Pick<Dataset, "updatedAt" | "sourceIds"> = {
  updatedAt: "2026-07-29",
  sourceIds: ["census-tables-2011"],
};

export const datasets: Dataset[] = [
  {
    ...base,
    id: "state-population-2011",
    title: "Population of the Phase 1 states",
    topic: "population",
    unit: "people",
    referenceYear: 2011,
    methodology:
      "Total population from Census 2011. Values are not current estimates and are shown only for the three demonstration states.",
    values: [
      { id: "odisha", label: "Odisha", value: 41974218 },
      { id: "rajasthan", label: "Rajasthan", value: 68548437 },
      { id: "kerala", label: "Kerala", value: 33406061 },
    ],
  },
  {
    ...base,
    id: "state-area",
    title: "Geographic area of the Phase 1 states",
    topic: "geography",
    unit: "km²",
    referenceYear: 2011,
    methodology:
      "Area values align with Census/state-profile records. Administrative geometry is displayed separately from the comparison chart.",
    sourceIds: ["odisha-topography", "rajasthan-physiography", "kerala-state-profile"],
    values: [
      { id: "odisha", label: "Odisha", value: 155707 },
      { id: "rajasthan", label: "Rajasthan", value: 342239 },
      { id: "kerala", label: "Kerala", value: 38863 },
    ],
  },
  {
    ...base,
    id: "state-literacy-2011",
    title: "Literacy rate of the Phase 1 states",
    topic: "education",
    unit: "%",
    referenceYear: 2011,
    methodology:
      "Census 2011 literacy rate for population aged seven years and above. This is a historical baseline, not a current performance ranking.",
    values: [
      { id: "odisha", label: "Odisha", value: 72.87 },
      { id: "rajasthan", label: "Rajasthan", value: 66.11 },
      { id: "kerala", label: "Kerala", value: 93.91 },
    ],
  },
];

export const datasetById = new Map(datasets.map((dataset) => [dataset.id, dataset]));
