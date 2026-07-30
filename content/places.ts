import { placeSchema } from "@/lib/content/schemas";

export const places = [
  {
    id: "place-chilika",
    slug: "chilika-lake",
    name: "Chilika Lake",
    stateSlug: "odisha",
    kind: "Brackish-water lagoon and wetland",
    summary:
      "A large lagoon on Odisha’s coast whose seasonal water exchange and surrounding landscapes connect river, sea, settlement and biodiversity.",
    sourceIds: ["odisha-topography"],
  },
  {
    id: "place-thar",
    slug: "thar-desert",
    name: "Thar Desert",
    stateSlug: "rajasthan",
    kind: "Arid landscape",
    summary:
      "An arid region extending across northwestern India and Pakistan, with dunes, rocky terrain, settlements and pastoral systems.",
    sourceIds: ["rajasthan-geography", "rajasthan-physiography"],
  },
  {
    id: "place-western-ghats",
    slug: "western-ghats",
    name: "Western Ghats",
    stateSlug: "kerala",
    kind: "Mountain and biodiversity region",
    summary:
      "A mountain chain running along western India, linked to monsoon patterns, watersheds and globally significant biodiversity.",
    sourceIds: ["unesco-india", "kerala-state-profile"],
  },
].map((place) => placeSchema.parse(place));

export const placeBySlug = new Map(places.map((place) => [place.slug, place]));
