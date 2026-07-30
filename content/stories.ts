import type { Story } from "@/lib/content/schemas";

const reviewedAt = "2026-07-29";

export const stories: Story[] = [
  {
    id: "story-monsoon",
    slug: "how-the-monsoon-shapes-india",
    title: "How the monsoon shapes India",
    dek: "A seasonal circulation becomes water, work, uncertainty and memory across very different landscapes.",
    topic: "Nature",
    readMinutes: 8,
    sourceIds: ["imd-monsoon", "cwc-river-basins"],
    reviewedAt,
    blocks: [
      {
        type: "prose",
        title: "A system, not a single rain",
        body:
          "The monsoon is a seasonal atmospheric system whose timing and distribution vary across regions. Reading it well means connecting winds and rainfall with river basins, agriculture, cities and risk.",
      },
      {
        type: "map",
        title: "Follow water across regions",
        description:
          "The production map will pair IMD context with river-basin boundaries and a textual alternative; it will not imply that rainfall follows state borders.",
      },
      {
        type: "data",
        title: "Context before comparison",
        datasetId: "state-population-2011",
        note: "Population is shown only to explain exposure context; it is not a monsoon measurement.",
      },
    ],
  },
  {
    id: "story-languages",
    slug: "indias-languages-and-scripts",
    title: "India’s languages and scripts",
    dek: "Language families, writing systems and everyday multilingualism resist a single neat map.",
    topic: "Culture",
    readMinutes: 9,
    sourceIds: ["census-tables-2011", "unesco-intangible-india"],
    reviewedAt,
    blocks: [
      {
        type: "prose",
        title: "Many ways of speaking and writing",
        body:
          "The atlas separates language, script and administrative recognition. Script samples appear only when reviewed for spelling, Unicode shaping and font support.",
      },
      {
        type: "map",
        title: "A map with soft edges",
        description:
          "Language distributions overlap and change; the interface uses layered evidence and notes rather than hard territorial colouring.",
      },
    ],
  },
  {
    id: "story-zero",
    slug: "the-story-of-zero",
    title: "The story of zero",
    dek: "Notation, place value and mathematical ideas developed through transmission, commentary and use.",
    topic: "Ideas",
    readMinutes: 7,
    sourceIds: ["st-andrews-indian-numerals"],
    reviewedAt,
    blocks: [
      {
        type: "prose",
        title: "From place value to a number",
        body:
          "The history of zero is not one isolated moment. It involves the development of positional notation, a symbol for an empty place and mathematical treatment across texts and regions.",
      },
      {
        type: "quote",
        quote: "A useful history distinguishes a symbol, a placeholder and the mathematical idea.",
        attribution: "BHARAT methodology note",
      },
    ],
  },
  {
    id: "story-space",
    slug: "the-indian-space-programme",
    title: "The Indian space programme",
    dek: "Launch vehicles, satellites, applications and research form an institutional system—not a highlight reel.",
    topic: "Innovation",
    readMinutes: 10,
    sourceIds: ["isro-profile", "isro-vision"],
    reviewedAt,
    blocks: [
      {
        type: "prose",
        title: "From institutions to orbit",
        body:
          "ISRO describes a programme spanning launch vehicles, satellites, earth observation, communication, navigation, space science and planetary exploration.",
      },
      {
        type: "timeline",
        title: "Institutional chronology",
        eventIds: ["independence", "republic"],
      },
    ],
  },
  {
    id: "story-rivers",
    slug: "rivers-that-shaped-civilisation",
    title: "Rivers that shaped civilisation",
    dek: "Rivers connect geology, settlement, agriculture, belief, infrastructure and risk.",
    topic: "Nature",
    readMinutes: 9,
    sourceIds: ["cwc-river-basins", "odisha-topography"],
    reviewedAt,
    blocks: [
      {
        type: "prose",
        title: "A river is more than a line",
        body:
          "A basin view connects tributaries, floodplains, wetlands, settlements and coasts. Political boundaries remain visible but do not define the hydrological system.",
      },
      {
        type: "map",
        title: "Read by basin",
        description:
          "The map layer will use Central Water Commission basin references and an equivalent structured list.",
      },
    ],
  },
  {
    id: "story-architecture",
    slug: "architecture-across-regions",
    title: "Architecture across regions",
    dek: "Material, climate, ritual, defence, labour and civic life leave different spatial records.",
    topic: "Culture",
    readMinutes: 8,
    sourceIds: ["unesco-india"],
    reviewedAt,
    blocks: [
      {
        type: "prose",
        title: "Built form as evidence",
        body:
          "The atlas reads structures through material, use, period and conservation context rather than presenting monuments as isolated icons.",
      },
      {
        type: "map",
        title: "Compare regions carefully",
        description:
          "The story connects sites and regional building traditions while keeping UNESCO status distinct from broader architectural significance.",
      },
    ],
  },
];

export const storyBySlug = new Map(stories.map((story) => [story.slug, story]));
