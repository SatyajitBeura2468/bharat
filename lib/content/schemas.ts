import { z } from "zod";

export const confidenceSchema = z.enum(["high", "medium", "contested"]);

export const sourceSchema = z.object({
  id: z.string().min(3),
  title: z.string().min(3),
  publisher: z.string().min(2),
  url: z.string().url(),
  sourceType: z.enum(["primary", "academic", "institutional", "reference"]),
  license: z.string().optional(),
  accessedAt: z.string().date(),
  reviewedAt: z.string().date(),
  note: z.string().optional(),
});

export const factSchema = z.object({
  id: z.string().min(3),
  claim: z.string().min(3),
  sourceIds: z.array(z.string()).min(1),
  referenceYear: z.number().int().optional(),
  reviewedAt: z.string().date(),
  confidence: confidenceSchema,
  methodologicalNote: z.string().optional(),
});

export const stateSectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string(),
  detail: z.string(),
  sourceIds: z.array(z.string()).min(1),
});

export const stateSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  localName: z.string(),
  localScript: z.string(),
  capital: z.string(),
  region: z.string(),
  coordinates: z.tuple([z.number(), z.number()]),
  mapIso: z.string(),
  atmosphere: z.object({
    accent: z.string(),
    secondary: z.string(),
    motif: z.string(),
  }),
  overview: z.string(),
  sourceIds: z.array(z.string()).min(1),
  reviewedAt: z.string().date(),
  sections: z.array(stateSectionSchema).min(10),
  places: z.array(z.object({ name: z.string(), slug: z.string(), kind: z.string() })).min(2),
  metrics: z.object({
    areaKm2: z.number().positive(),
    population2011: z.number().int().positive(),
    literacy2011: z.number().min(0).max(100),
  }),
});

export const historicalEventSchema = z.object({
  id: z.string(),
  title: z.string(),
  period: z.string(),
  startYear: z.number().int(),
  endYear: z.number().int().optional(),
  precision: z.enum(["exact", "approximate", "range", "debated"]),
  summary: z.string(),
  sourceIds: z.array(z.string()).min(1),
  confidence: confidenceSchema,
});

export const storyBlockSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("prose"), title: z.string(), body: z.string() }),
  z.object({ type: z.literal("quote"), quote: z.string(), attribution: z.string() }),
  z.object({ type: z.literal("map"), title: z.string(), description: z.string() }),
  z.object({ type: z.literal("timeline"), title: z.string(), eventIds: z.array(z.string()) }),
  z.object({ type: z.literal("data"), title: z.string(), datasetId: z.string(), note: z.string() }),
]);

export const storySchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  dek: z.string(),
  topic: z.string(),
  readMinutes: z.number().int().positive(),
  sourceIds: z.array(z.string()).min(1),
  reviewedAt: z.string().date(),
  blocks: z.array(storyBlockSchema).min(2),
});

export const datasetSchema = z.object({
  id: z.string(),
  title: z.string(),
  topic: z.enum([
    "population",
    "geography",
    "education",
    "economy",
    "energy",
    "environment",
    "biodiversity",
    "infrastructure",
    "research",
  ]),
  unit: z.string(),
  referenceYear: z.number().int(),
  updatedAt: z.string().date(),
  sourceIds: z.array(z.string()).min(1),
  methodology: z.string(),
  values: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
      value: z.number(),
      context: z.string().optional(),
    }),
  ),
});

export const placeSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  stateSlug: z.string(),
  kind: z.string(),
  summary: z.string(),
  sourceIds: z.array(z.string()).min(1),
});

export const culturalPracticeSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string(),
  region: z.string(),
  summary: z.string(),
  sourceIds: z.array(z.string()).min(1),
});

export const languageSchema = z.object({
  id: z.string(),
  name: z.string(),
  script: z.string(),
  sample: z.string(),
  sourceIds: z.array(z.string()).min(1),
});

export const personSchema = z.object({
  id: z.string(),
  name: z.string(),
  field: z.string(),
  summary: z.string(),
  sourceIds: z.array(z.string()).min(1),
});

export const institutionSchema = z.object({
  id: z.string(),
  name: z.string(),
  field: z.string(),
  location: z.string(),
  summary: z.string(),
  sourceIds: z.array(z.string()).min(1),
});

export const scientificAchievementSchema = z.object({
  id: z.string(),
  title: z.string(),
  year: z.number().int(),
  summary: z.string(),
  institutionIds: z.array(z.string()).min(1),
  sourceIds: z.array(z.string()).min(1),
});

export type Source = z.infer<typeof sourceSchema>;
export type Fact = z.infer<typeof factSchema>;
export type StateRecord = z.infer<typeof stateSchema>;
export type HistoricalEvent = z.infer<typeof historicalEventSchema>;
export type Story = z.infer<typeof storySchema>;
export type Dataset = z.infer<typeof datasetSchema>;
