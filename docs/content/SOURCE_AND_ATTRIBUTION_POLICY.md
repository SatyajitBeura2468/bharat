# Source and attribution policy

## Promise

BHARAT separates design, narrative and evidence. A beautiful interface does not make a claim trustworthy; traceable sources, clear uncertainty and review history do.

## Source priority

1. Census of India and Open Government Data Platform India
2. India Code and official institutions such as ISRO
3. Archaeological Survey, museums and archives
4. UNESCO and other intergovernmental repositories
5. Peer-reviewed research
6. Reputable academic institutions and scholarly reference works

Official origin does not remove the need to inspect date, method, scope and licence.

## Registry model

Content files reference stable source IDs. Raw URLs do not appear repeatedly inside facts.

```ts
type SourceRecord = {
  id: string
  title: string
  publisher: string
  url: string
  publishedAt?: string
  accessedAt: string
  licence?: string
  attribution?: string
  archiveUrl?: string
  sourceType: "primary" | "academic" | "institutional" | "reference"
  reviewStatus: "candidate" | "reviewed" | "rejected"
}
```

## Fact model

```ts
type Fact = {
  id: string
  claim: string
  sourceIds: string[]
  referenceYear?: number
  reviewedAt: string
  confidence: "high" | "medium" | "contested"
  methodologicalNote?: string
  geographicScope?: string
}
```

Facts without a reviewed source fail validation and cannot ship.

## Historical uncertainty

- Date ranges remain ranges.
- Approximate dating is visibly marked.
- Debated interpretation is labelled and attributed.
- Narrative summaries do not collapse disagreement into certainty.
- Historical maps identify time, scope and source.

## Data requirements

Every published visualisation contains:

- source;
- reference year or period;
- unit;
- last reviewed date;
- methodology or interpretation note;
- table equivalent;
- download/licence information where permitted.

## Map policy

- Administrative boundaries come from reputable, licensed data.
- Dataset name, version, date and licence are documented.
- Political and administrative boundary review is a release gate.
- Concept art is never converted into production geometry.
- Textual state/territory exploration is always available.

## Media policy

Allowed media is generated for BHARAT, public domain, openly licensed, or explicitly permitted. Each media record stores licence, attribution, creator, source, alt text, crop/focal point and review status.

No film stills, copyrighted recordings, unlicensed photography or fake script imagery may ship.

## Review and correction

- Content records store last review date and reviewer.
- Broken links and stale review windows fail scheduled checks.
- Corrections preserve an audit trail.
- The methodology page explains confidence and revision practices in plain language.
