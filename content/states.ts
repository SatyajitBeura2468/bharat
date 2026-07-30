import type { StateRecord } from "@/lib/content/schemas";

const reviewedAt = "2026-07-29";

export const states: StateRecord[] = [
  {
    id: "state-odisha",
    slug: "odisha",
    name: "Odisha",
    localName: "ଓଡ଼ିଶା",
    localScript: "Odia",
    capital: "Bhubaneswar",
    region: "Eastern India",
    coordinates: [20.27, 85.84],
    mapIso: "IN-OR",
    atmosphere: { accent: "#A84F36", secondary: "#126C70", motif: "delta" },
    overview:
      "Odisha extends from the Bay of Bengal across coastal plains, river systems, plateaus and the hills of the Eastern Ghats. This state atlas connects that geography with its historical, cultural and scientific life.",
    sourceIds: ["odisha-topography", "census-tables-2011"],
    reviewedAt,
    metrics: { areaKm2: 155707, population2011: 41974218, literacy2011: 72.87 },
    places: [
      { name: "Chilika Lake", slug: "chilika-lake", kind: "Lagoon and wetland" },
      { name: "Konark", slug: "konark", kind: "Architecture and heritage" },
      { name: "Similipal", slug: "similipal", kind: "Forest landscape" },
    ],
    sections: [
      {
        id: "geography",
        title: "Geography",
        summary: "Coast, deltas, uplands and the Eastern Ghats meet in one state.",
        detail:
          "The Government of Odisha describes five broad morphological regions: coastal plain, middle mountainous and highland region, central plateaus, western rolling uplands and major flood plains.",
        sourceIds: ["odisha-topography"],
      },
      {
        id: "history",
        title: "History",
        summary: "Archaeology, maritime exchange and regional polities shaped a long historical record.",
        detail:
          "BHARAT treats this history as a sequence of sourced periods rather than one uninterrupted narrative, with uncertainty labels on early chronology.",
        sourceIds: ["ncert-history"],
      },
      {
        id: "languages",
        title: "Languages",
        summary: "Odia is the principal language and uses the Odia script.",
        detail:
          "Language material is published only from reviewed Unicode text and Census language tables; transliteration is supplemental, never a substitute for the script.",
        sourceIds: ["census-tables-2011"],
      },
      {
        id: "culture",
        title: "Culture",
        summary: "Performance, literature, craft and community traditions vary across regions.",
        detail:
          "The atlas presents cultural practices as living, attributed knowledge, avoiding the idea that a single image or festival can represent an entire state.",
        sourceIds: ["unesco-intangible-india"],
      },
      {
        id: "architecture",
        title: "Architecture",
        summary: "Temple, civic, vernacular and modern structures reveal different materials and periods.",
        detail:
          "Architectural entries separate scholarly interpretation from descriptive observation and link to heritage authorities where available.",
        sourceIds: ["unesco-india"],
      },
      {
        id: "food",
        title: "Food",
        summary: "Coastal, riverine, forest and agrarian ecologies influence regional foodways.",
        detail:
          "Food is documented through ingredients, seasonality and community context rather than a ranked list of signature dishes.",
        sourceIds: ["odisha-topography"],
      },
      {
        id: "biodiversity",
        title: "Biodiversity",
        summary: "Wetlands, forests, coasts and highlands create varied habitats.",
        detail:
          "Biodiversity claims require a named survey, protected-area authority or peer-reviewed source and a clear reference year.",
        sourceIds: ["odisha-topography"],
      },
      {
        id: "economy",
        title: "Economy",
        summary: "Agriculture, industry, services and coastal systems form a changing economy.",
        detail:
          "Economic indicators are displayed only with reference period, current/constant-price distinction and source methodology.",
        sourceIds: ["census-tables-2011"],
      },
      {
        id: "education",
        title: "Education & institutions",
        summary: "Schools, universities and research organisations form a distributed knowledge network.",
        detail:
          "Institution profiles distinguish location, mandate, founding evidence and current programmes.",
        sourceIds: ["census-tables-2011"],
      },
      {
        id: "innovation",
        title: "Science & innovation",
        summary: "Research spans earth systems, engineering, medicine and space-linked applications.",
        detail:
          "Programme and achievement entries link to the responsible institution and avoid unsupported superlatives.",
        sourceIds: ["isro-profile"],
      },
      {
        id: "places",
        title: "Places",
        summary: "Explore landscapes and settlements through context, not checklists.",
        detail:
          "Each place entry connects geography, history, people, access and evidence while avoiding promotional rankings.",
        sourceIds: ["odisha-topography", "unesco-india"],
      },
      {
        id: "data",
        title: "Data",
        summary: "Census and geographic measures are kept beside units and reference years.",
        detail:
          "The Phase 1 comparison uses Census 2011 population and literacy, plus official state-profile area.",
        sourceIds: ["census-tables-2011", "odisha-topography"],
      },
    ],
  },
  {
    id: "state-rajasthan",
    slug: "rajasthan",
    name: "Rajasthan",
    localName: "राजस्थान",
    localScript: "Devanagari",
    capital: "Jaipur",
    region: "Northwestern India",
    coordinates: [26.91, 75.79],
    mapIso: "IN-RJ",
    atmosphere: { accent: "#C39B55", secondary: "#9C3344", motif: "desert wind" },
    overview:
      "Rajasthan is India’s largest state by area. The Aravalli Range, the Thar Desert, plains and plateaus make its geography more varied than a single desert image suggests.",
    sourceIds: ["rajasthan-geography", "rajasthan-physiography", "census-tables-2011"],
    reviewedAt,
    metrics: { areaKm2: 342239, population2011: 68548437, literacy2011: 66.11 },
    places: [
      { name: "Thar Desert", slug: "thar-desert", kind: "Desert landscape" },
      { name: "Jaipur", slug: "jaipur", kind: "Capital and urban heritage" },
      { name: "Aravalli Range", slug: "aravalli-range", kind: "Mountain system" },
    ],
    sections: [
      {
        id: "geography",
        title: "Geography",
        summary: "Desert, Aravalli hills, eastern plains and southeastern plateau create strong contrasts.",
        detail:
          "Official physiographic descriptions place the Thar Desert northwest of the Aravalli Range and more varied plains, hills and tablelands to the east and southeast.",
        sourceIds: ["rajasthan-physiography"],
      },
      {
        id: "history",
        title: "History",
        summary: "Archaeological sites, kingdoms, cities and colonial-era change form a layered chronology.",
        detail:
          "Entries are organised by evidence and period, without treating modern state boundaries as timeless.",
        sourceIds: ["ncert-history"],
      },
      {
        id: "languages",
        title: "Languages",
        summary: "Hindi and Rajasthani language varieties are part of a multilingual landscape.",
        detail:
          "The atlas uses Census language data and reviewed language scholarship, preserving names and scripts accurately.",
        sourceIds: ["census-tables-2011"],
      },
      {
        id: "culture",
        title: "Culture",
        summary: "Music, oral traditions, textiles, painting and performance differ across communities and regions.",
        detail:
          "Cultural documentation names practitioners, locations, sources and contemporary context.",
        sourceIds: ["unesco-intangible-india"],
      },
      {
        id: "architecture",
        title: "Architecture",
        summary: "Fortified settlements, water systems, civic buildings and vernacular forms respond to terrain and climate.",
        detail:
          "Heritage status and conservation condition are sourced separately from visual description.",
        sourceIds: ["unesco-india"],
      },
      {
        id: "food",
        title: "Food",
        summary: "Water availability, pastoral systems and agriculture influence regional cuisines.",
        detail:
          "Entries emphasise variation, provenance and preparation context rather than one representative menu.",
        sourceIds: ["rajasthan-geography"],
      },
      {
        id: "biodiversity",
        title: "Biodiversity",
        summary: "Arid, semi-arid, wetland and hill habitats support distinct ecological communities.",
        detail:
          "Species and protected-area claims are tied to current biodiversity-board or survey records.",
        sourceIds: ["rajasthan-physiography"],
      },
      {
        id: "economy",
        title: "Economy",
        summary: "Agriculture, mining, manufacturing, services, crafts and renewable energy all contribute.",
        detail:
          "The data surface distinguishes measured values from projections and records the price base for economic series.",
        sourceIds: ["census-tables-2011"],
      },
      {
        id: "education",
        title: "Education & institutions",
        summary: "Universities, technical institutes and research centres connect regional and national networks.",
        detail:
          "Institution entries are sourced from their own official records and reviewed for current naming.",
        sourceIds: ["census-tables-2011"],
      },
      {
        id: "innovation",
        title: "Science & innovation",
        summary: "Water, arid-zone research, engineering and renewable systems are important fields.",
        detail:
          "Research claims are framed around documented programmes and institutions, not rankings.",
        sourceIds: ["rajasthan-physiography"],
      },
      {
        id: "places",
        title: "Places",
        summary: "Move from desert systems and mountain passes to cities and water architecture.",
        detail:
          "Place pages explain relationships between environment, settlement and historical change.",
        sourceIds: ["rajasthan-geography", "unesco-india"],
      },
      {
        id: "data",
        title: "Data",
        summary: "Area, population and literacy are shown with source year and method.",
        detail:
          "Phase 1 values use official geographic profiles and Census 2011 tables.",
        sourceIds: ["census-tables-2011", "rajasthan-physiography"],
      },
    ],
  },
  {
    id: "state-kerala",
    slug: "kerala",
    name: "Kerala",
    localName: "കേരളം",
    localScript: "Malayalam",
    capital: "Thiruvananthapuram",
    region: "Southwestern India",
    coordinates: [8.52, 76.94],
    mapIso: "IN-KL",
    atmosphere: { accent: "#365F47", secondary: "#126C70", motif: "monsoon coast" },
    overview:
      "Kerala occupies a narrow southwestern band between the Arabian Sea and the Western Ghats. Coast, backwaters, midlands and highlands shape its settlements and environmental systems.",
    sourceIds: ["kerala-state-profile", "census-tables-2011"],
    reviewedAt,
    metrics: { areaKm2: 38863, population2011: 33406061, literacy2011: 93.91 },
    places: [
      { name: "Western Ghats", slug: "western-ghats", kind: "Mountain and biodiversity region" },
      { name: "Alappuzha backwaters", slug: "alappuzha-backwaters", kind: "Wetland landscape" },
      { name: "Thiruvananthapuram", slug: "thiruvananthapuram", kind: "Capital" },
    ],
    sections: [
      {
        id: "geography",
        title: "Geography",
        summary: "A compact state spans coast, backwaters, midlands and the Western Ghats.",
        detail:
          "The official state profile records Kerala’s location, area, borders and administrative structure; physical-geography modules add source-specific detail.",
        sourceIds: ["kerala-state-profile"],
      },
      {
        id: "history",
        title: "History",
        summary: "Maritime exchange, regional polities and social movements shaped changing institutions.",
        detail:
          "The chronology separates archaeological evidence, textual evidence and modern interpretation.",
        sourceIds: ["ncert-history"],
      },
      {
        id: "languages",
        title: "Languages",
        summary: "Malayalam is the principal language and uses the Malayalam script.",
        detail:
          "All script samples are reviewed Unicode content with script-specific font and line-height testing.",
        sourceIds: ["census-tables-2011"],
      },
      {
        id: "culture",
        title: "Culture",
        summary: "Performance, literature, ritual, craft and media coexist in a changing cultural field.",
        detail:
          "The atlas avoids collapsing living practice into costume or festival imagery.",
        sourceIds: ["unesco-intangible-india"],
      },
      {
        id: "architecture",
        title: "Architecture",
        summary: "Timber, laterite, stone, tile and modern materials respond to climate and social use.",
        detail:
          "Entries include function, material, period, conservation status and attribution.",
        sourceIds: ["unesco-india"],
      },
      {
        id: "food",
        title: "Food",
        summary: "Coastal and highland ecologies, trade and communities shape varied food traditions.",
        detail:
          "Food entries document context and region instead of claiming one definitive cuisine.",
        sourceIds: ["kerala-state-profile"],
      },
      {
        id: "biodiversity",
        title: "Biodiversity",
        summary: "The Western Ghats and connected watersheds are central to ecological understanding.",
        detail:
          "Species and habitat data are published with a survey year and named authority.",
        sourceIds: ["unesco-india"],
      },
      {
        id: "economy",
        title: "Economy",
        summary: "Services, agriculture, fisheries, manufacturing and migration-linked systems interact.",
        detail:
          "Economic series identify nominal or real measures and avoid comparing incompatible years.",
        sourceIds: ["census-tables-2011"],
      },
      {
        id: "education",
        title: "Education & institutions",
        summary: "Education and research institutions form dense regional networks.",
        detail:
          "The data studio keeps Census 2011 literacy separate from current education indicators.",
        sourceIds: ["census-tables-2011"],
      },
      {
        id: "innovation",
        title: "Science & innovation",
        summary: "Space research, medicine, earth science and digital systems connect state and national institutions.",
        detail:
          "ISRO’s profile identifies major centres and the responsibilities of the national space programme.",
        sourceIds: ["isro-profile"],
      },
      {
        id: "places",
        title: "Places",
        summary: "Explore mountains, wetlands, coasts and cities as connected systems.",
        detail:
          "Place pages include environmental and cultural context alongside practical orientation.",
        sourceIds: ["kerala-state-profile", "unesco-india"],
      },
      {
        id: "data",
        title: "Data",
        summary: "Official profiles and Census tables provide the Phase 1 comparison baseline.",
        detail:
          "Every value retains its year, unit, source and interpretation note.",
        sourceIds: ["census-tables-2011", "kerala-state-profile"],
      },
    ],
  },
];

export const stateBySlug = new Map(states.map((state) => [state.slug, state]));
