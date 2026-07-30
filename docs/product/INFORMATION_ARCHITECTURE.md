# Information architecture

## Product model

BHARAT has four connected modes:

1. **Explore** — spatial discovery through states, places, geography and layers.
2. **Understand** — structured knowledge through history, culture, nature, innovation and data.
3. **Follow a story** — long-form narrative routes that combine media, maps, timelines and evidence.
4. **Verify** — source, methodology, licence, review and confidence information at the point of use.

Search cuts across all four modes.

## Route map

| Route | Purpose | Primary content |
| --- | --- | --- |
| `/` | Cinematic overview and gateway | Ten homepage sections |
| `/explore` | Full atlas explorer | Map, layers, search, state rail |
| `/states` | Crawlable state index | State and Union Territory list |
| `/states/[slug]` | Reusable state atlas | State chapters, data, timeline, sources |
| `/places/[slug]` | Place detail | Geography, context, related state, sources |
| `/history` | Historical overview | Eras, themes, stories |
| `/history/timeline` | Full chronology | Filtered events and uncertainty |
| `/culture` | Living-culture index | Practices, languages, media, stories |
| `/nature` | Geography and nature | Landforms, rivers, ecosystems |
| `/innovation` | Science and systems | Institutions, achievements, disciplines |
| `/innovation/space` | Space-programme deep dive | Missions, institutions, chronology, sources |
| `/data` | Accessible data studio | Datasets, charts, tables, methods |
| `/stories` | Editorial collection | Story index and topics |
| `/stories/[slug]` | Story engine | Chapter blocks and sources |
| `/search` | Full search surface | Results, categories, recent queries |
| `/sources` | Source registry | Records, licences, review metadata |
| `/methodology` | Editorial method | Evidence policy, confidence, review cadence |
| `/about` | Project identity | Mission, independence, team and contact |

## Homepage narrative

```text
Entry
  ↓
Hero — emotional orientation
  ↓
Explore — spatial agency
  ↓
History — temporal depth
  ↓
Culture — human texture
  ↓
Nature — physical foundations
  ↓
Innovation — future-facing precision
  ↓
Data — measurable context
  ↓
Stories — sustained reading
  ↓
Search — direct retrieval
  ↓
Sources + footer — trust and continuation
```

## Key flows

### Home to Explore

Hero action → `/explore` or map section → selected state → `/states/[slug]`.

### Search to result

Open palette → type query → preview category and source status → open result → restore search state on return.

### History navigation

Homepage era → `/history/timeline#event-id` → evidence drawer → related story or state.

### Data exploration

Choose topic → choose dataset/question → adjust accessible filter → read chart or table → open methodology/source.

### Story reading

Story index → story route → chapters with progress → inline footnote/source → related route.

## State template

Every state page composes the same semantic chapters but can select a restrained atmospheric accent:

1. Identity and geographic orientation
2. Overview
3. Geography
4. History
5. Languages
6. Culture
7. Architecture
8. Food
9. Biodiversity
10. Economy
11. Education and institutions
12. Science and innovation
13. Places
14. Data
15. Timeline
16. Sources

No chapter is required to exist without reviewed content; unavailable material is omitted rather than padded.

## Search taxonomy

`place`, `state`, `historical-event`, `culture`, `language`, `person`, `nature`, `institution`, `innovation`, `dataset`, `story`.

The Phase 1 index is built at compile time from validated content. Search UI depends on a provider-neutral adapter so a hosted engine can replace it later.

## Language architecture

- English is the launch locale.
- Content records use locale-keyed fields rather than duplicated route logic.
- Hindi routing and schemas are present from the beginning but not exposed until reviewed content exists.
- Script metadata selects font family, line-height and fallback rules.
- Components never assume Latin cap height, word length or line breaking.
- Direction is stored at locale level to keep future RTL scripts possible.
