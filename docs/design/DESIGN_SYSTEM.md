# Design system

## Direction

**Atlas of Quiet Magnitude** combines three visual worlds:

- a dark cartographic field for immersion and spatial exploration;
- warm archival paper for reading, chronology and evidence;
- precise scientific linework for data, innovation and interface state.

The system should feel authored and institutional without looking governmental.

## Colour tokens

| Token | Value | Role |
| --- | --- | --- |
| `ink-950` | `#07111D` | Primary dark surface and text |
| `indigo-800` | `#172D57` | Depth, selected dark state |
| `ivory-100` | `#F2EEE5` | Reading surface and dark-theme text |
| `sandstone-600` | `#A84F36` | Land, emphasis, historical accent |
| `brass-500` | `#C39B55` | Rules, focus, coordinates, actions |
| `teal-600` | `#126C70` | Water, selected data, active map layers |
| `forest-600` | `#365F47` | Nature and ecological context |
| `crimson-600` | `#9C3344` | Debate, warning, limited emphasis |

Saffron, white and green are not structural brand colours. They may appear only when accurate subject matter requires them.

## Theme mapping

Dark mode uses `ink-950` as the canvas, `ivory-100` for primary text and brass/teal as controlled accents. Light mode uses `ivory-100` as the canvas, `ink-950` for primary text and the same semantic accents at WCAG AA contrast.

Theme is set before hydration through a tiny inline preference script and a server-readable cookie. `color-scheme` is declared on the root.

## Typography

Proposed licensed `next/font` families:

- **Display Latin:** Newsreader Variable
- **UI and body Latin:** Manrope Variable
- **Display Hindi:** Noto Serif Devanagari
- **UI and body Hindi:** Noto Sans Devanagari
- **Additional scripts:** Noto families loaded by locale and script registry

Final font selection is verified in-browser before implementation locks.

### Responsive type tokens

| Token | CSS concept | Use |
| --- | --- | --- |
| `display-hero` | `clamp(3.5rem, 7.4vw, 8.5rem)` | Hero and state identity |
| `display-section` | `clamp(2.5rem, 5vw, 5.75rem)` | Section titles |
| `headline` | `clamp(1.75rem, 3vw, 3.5rem)` | Editorial headlines |
| `title` | `clamp(1.25rem, 1.8vw, 2rem)` | Module titles |
| `body-lg` | `clamp(1.05rem, 1.15vw, 1.3rem)` | Introductory copy |
| `body` | `1rem–1.125rem` | Reading text |
| `label` | `0.75rem–0.875rem` | UI and annotation |

Reading measure is 60–72 characters. Devanagari and other scripts receive script-specific line-height and overshoot testing.

## Spacing and layout

- Base rhythm: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.
- Page gutters: `clamp(20px, 4vw, 72px)`.
- Desktop grid: 12 columns with editorial breaks rather than uniform occupancy.
- Tablet grid: 8 columns.
- Mobile grid: 4 columns and a minimum 20px gutter.
- Long sections use `content-visibility: auto` only when focus/navigation behaviour remains correct.
- Corners are restrained: 0–2px for editorial fields, 6px for controls, 12px only for dialogs and mobile sheets.

## Graphic grammar

- Contours signal geography, depth or movement through scale.
- River lines signal flow, relation and continuation.
- Brass rules signal measurement, chronology and interactive affordance.
- Orbital arcs belong only to science and innovation.
- Lattice geometry appears as subtle dividers or masks, never wallpaper.
- Stone and paper texture must remain below the contrast threshold that affects reading.

## Interaction states

Every actionable element defines default, hover, focus-visible, active, loading, disabled and error states.

- Focus uses a 2px brass outline plus offset; it is never removed.
- Selection uses shape/icon/text in addition to colour.
- Touch targets are at least 44×44 CSS pixels.
- Destructive actions are not currently part of Phase 1.
- Empty and error states preserve the editorial voice and provide a recovery action.

## Responsive behaviour

| Surface | Desktop | Mobile |
| --- | --- | --- |
| Hero | Interactive terrain and bounded parallax | Static terrain, optional low-cost tilt only after permission |
| Map | Map with side rail | Map with bottom sheet and state-list fallback |
| Timeline | Horizontal spatial axis | Vertical semantic list |
| Culture | Asymmetric multi-column tapestry | Single editorial media seam |
| Nature | Layered panoramic transect | Stacked chapters with static elevation strip |
| Innovation | Full line choreography | Shortened diagram with fades |
| Data | Chart and metadata rail | Chart, summary and table in reading order |
| Search | Centered command dialog | Full-screen search route |

## Asset rules

- Production media must be generated for the project, public domain, openly licensed, or explicitly permitted.
- Every asset has creator/source, licence, attribution text, focal point, alt text and review status.
- Responsive AVIF/WebP derivatives are created at ingestion.
- Maps and silhouettes are rendered from validated geospatial data, never traced from concept art.
