# Implementation and QA plan

## Current repository state

At inspection, the repository contained one initial commit and a 95-byte README. There was no application, package manager, configuration, source tree, content, test suite or deployment. The visual concept package is the first substantive project artifact.

## Proposed architecture

```text
app/
  (atlas)/
  states/[slug]/
  places/[slug]/
  history/timeline/
  innovation/space/
  stories/[slug]/
components/
  atlas/
  chronology/
  data/
  editorial/
  evidence/
  navigation/
  search/
  states/
content/
  states/
  places/
  history/
  culture/
  institutions/
  stories/
data/
  datasets/
  maps/
  sources/
lib/
  content/
  search/
  sources/
  performance/
  accessibility/
scenes/
  hero-terrain/
  nature-transect/
visualisations/
styles/
tests/
scripts/
docs/
```

Server components compose content and metadata by default. Client boundaries are limited to navigation state, search, map, charts and visual scenes. Heavy modules are imported only on routes that need them.

## Stage 1 · Foundation

**Work**

- Scaffold current stable Next.js with App Router and strict TypeScript.
- Configure Tailwind, ESLint, formatting, Vitest, RTL and Playwright.
- Establish route groups, error/loading/not-found surfaces and CI scripts.
- Add environment example and deployment-safe defaults.

**Likely files**

`package.json`, `next.config.ts`, `tsconfig.json`, `app/`, `styles/`, `vitest.config.ts`, `playwright.config.ts`.

**Gate**

Fresh install, lint, typecheck, unit smoke, production build and minimal browser smoke all pass.

## Stage 2 · Approved visual system

This repository is here now.

**Gate**

Concept plates, tokens, responsive rules, motion contract, source policy and IA are approved.

## Stage 3 · App shell

- Implement theme with pre-hydration persistence.
- Implement semantic header, desktop navigation, mobile menu, skip links and language architecture.
- Implement typography and layout tokens.
- Add route metadata foundations, sitemap and robots.

**Gate**

Keyboard navigation and 1536/390 shell screenshots match the concept system.

## Stage 4 · Hero

- Create server-rendered static poster first.
- Dynamically import R3F terrain after essential content.
- Add one-second entry, strict parallax bounds, visibility pause and reduced-motion fallback.
- Implement real CTAs.

**Risks**

LCP regression, hydration mismatch, GPU load and content legibility.

**Gate**

Static fallback works with WebGL disabled; copy never shifts; hero concepts match at desktop and mobile.

## Stage 5 · Homepage sections

Implement one section at a time in this order:

1. Explore
2. History
3. Culture
4. Nature
5. Innovation
6. Data
7. Stories
8. Search invitation
9. Sources/footer

Each section receives a side-by-side screenshot review and fidelity-led repair before the next begins.

## Stage 6 · Content architecture

- Implement Zod schemas for State, Place, HistoricalEvent, CulturalPractice, Language, Person, Institution, ScientificAchievement, Dataset, Story, Source and Fact.
- Add source registry and fact-reference validation.
- Add typed MDX story blocks.
- Build reviewed Phase 1 content for Odisha, Rajasthan and Kerala.
- Add contribution guide and attribution workflow.

**Gate**

No content entry can build with an unknown source ID, invalid review metadata or unsupported locale/script.

## Stage 7 · Interaction systems

- MapLibre explorer with licensed boundary data, layers, keyboard controls, search and state-list fallback.
- Provider-neutral local search index with typo tolerance and recent searches.
- D3 visualisations with table and summary equivalents.
- Reusable story engine and chronology system.

**Gate**

Core flows work by mouse, keyboard, touch and screen reader.

## Stage 8 · Performance and accessibility

- Route-level code splitting and dynamic imports.
- Responsive AVIF/WebP media.
- Mobile scene budgets and static fallbacks.
- Off-screen/hidden animation pause.
- WCAG AA audit, contrast, headings, names, focus, dialogs, live regions and alternatives.

### Budgets

| Metric | Budget |
| --- | --- |
| LCP | `< 2.5s` |
| CLS | `< 0.1` |
| INP | `< 200ms` |
| Initial JS | Measured per route; no map/3D/D3 on unrelated routes |
| Main-thread animation | No long tasks from ambient motion |
| Mobile overflow | `0px` |

## Stage 9 · Verification

Run:

- formatter;
- lint;
- strict typecheck;
- unit and component tests;
- content-schema validation;
- source validation;
- broken-link check;
- production build;
- Playwright core flows;
- keyboard and reduced-motion coverage;
- screenshots at 1536, 1440, 1280, 1024, 768, 430, 390 and 360;
- console/network error audit.

### Core E2E paths

1. Home → Explore
2. Map → state page
3. Search → result
4. Timeline navigation
5. Data filter and table
6. Story reading
7. Theme switch
8. Reduced motion
9. Mobile navigation
10. Sources panel

## Stage 10 · Release

- Create focused commits aligned to completed milestones.
- Push reviewed code.
- Deploy to Vercel.
- Verify every production route, canonical URL, sitemap, metadata and social preview.
- Run desktop/mobile production smoke.
- Add the verified direct live-app button to the GitHub README.
- Record final route list, dependency rationale, QA report, performance notes and roadmap.

No URL is handed off until the live application is directly reachable and verified.

## Fidelity ledger

For every plate:

| Field | Required evidence |
| --- | --- |
| Mismatch | Specific visual or behavioural drift |
| Concept evidence | Plate and region |
| Render evidence | Screenshot and viewport |
| Repair made | Exact implementation change |
| Intentional deviation | Rationale and approval |

No material mismatch may remain at release.

## Dependency policy

Versions will be selected after concept approval against current stable documentation. Dependencies are added only for clear ownership:

- Motion: component transitions
- GSAP: one complex cinematic line timeline
- R3F/Drei/Three: optional terrain scene
- MapLibre: geospatial interaction
- D3 modules: data geometry
- Zod: content and source validation

No library duplicates another library’s role.
