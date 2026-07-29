<p align="center">
  <img src="docs/concepts/plates/01-navigation-hero.png" alt="BHARAT navigation and cinematic topographic hero concept" width="100%" />
</p>

<h1 align="center">BHARAT · भारत</h1>

<p align="center">
  <strong>A living atlas of a civilization.</strong><br />
  Explore the land, people, history, ideas and future of India.
</p>

<p align="center">
  <a href="docs/concepts/CONCEPT_SYSTEM.md"><strong>Explore the visual concept system →</strong></a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="docs/product/INFORMATION_ARCHITECTURE.md">Information architecture</a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="docs/architecture/IMPLEMENTATION_PLAN.md">Implementation plan</a>
</p>

> [!IMPORTANT]
> BHARAT is currently at the concept-approval gate. A public app deployment is intentionally withheld until the approved system is implemented and passes accessibility, source, performance, browser, and visual-fidelity checks. The verified live-app button will replace this note at release.

## What BHARAT is

BHARAT is an independent, evidence-led digital atlas and knowledge platform about India. It brings together the depth of an encyclopedia, the exploration model of an atlas, the storytelling rhythm of a digital museum, and the clarity of a modern data platform.

The design philosophy is **ancient depth, modern precision**: monumental without spectacle, distinctly Indian without ornamental shorthand, and cinematic without getting in the way of reading or navigation.

## The concept system

The initial design package contains eleven coordinated, high-resolution production references:

1. Navigation and cinematic hero
2. Interactive India explorer
3. Historical timeline
4. Culture editorial tapestry
5. Geography and nature journey
6. Science, innovation and space
7. Accessible data visualisation
8. Stories and command-palette search
9. Footer, sources and methodology
10. Odisha state-detail template
11. Mobile homepage

Open the [complete concept system](docs/concepts/CONCEPT_SYSTEM.md) to review every plate, its intended interaction model, and the approval checklist.

## Planned routes

```text
/
├── explore
├── states
│   └── [slug]
├── places/[slug]
├── history
│   └── timeline
├── culture
├── nature
├── innovation
│   └── space
├── data
├── stories
│   └── [slug]
├── search
├── sources
├── methodology
└── about
```

## Product guardrails

- Independent educational project; not an official Government of India service.
- No State Emblem, government-service implication, or patriotic symbolism as filler.
- No factual claim or data point without traceable source metadata.
- No generated or meaningless Indian scripts.
- No hover-only exploration, animation-blocked navigation, or 3D-only access.
- No fabricated maps, statistics, historical certainty, or programme claims.
- Every heavy visual surface receives an accessible and reduced-motion alternative.

## Planned engineering foundation

- Next.js App Router and strict TypeScript
- React Server Components by default
- Tailwind CSS plus focused cinematic CSS
- Motion for interface transitions
- GSAP only for the single complex scroll choreography
- React Three Fiber and Drei for the optional hero terrain
- MapLibre GL JS for geospatial exploration
- D3 modules for bespoke visualisations
- Zod-validated structured content and typed MDX
- Vitest, React Testing Library and Playwright
- Vercel deployment after release gates pass

Dependency versions will be selected and pinned against current stable releases when implementation begins.

## Documentation

- [Concept system](docs/concepts/CONCEPT_SYSTEM.md)
- [Concept-generation manifest](docs/concepts/PROMPTS.md)
- [Information architecture](docs/product/INFORMATION_ARCHITECTURE.md)
- [Design system](docs/design/DESIGN_SYSTEM.md)
- [Motion architecture](docs/design/MOTION_ARCHITECTURE.md)
- [Implementation and QA plan](docs/architecture/IMPLEMENTATION_PLAN.md)
- [Source and attribution policy](docs/content/SOURCE_AND_ATTRIBUTION_POLICY.md)

## Current status

**Stage 2 — visual concept approval.** Production UI has not started, by design. Once the concept system is accepted, the implementation will proceed section by section with screenshot comparison and a written fidelity ledger.

---

<p align="center">
  <strong>BHARAT</strong><br />
  Evidence-led, openly attributed, built with care.
</p>
