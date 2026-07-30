# Release QA

Release candidate reviewed 30 July 2026.

## Required gates

- [x] Strict TypeScript
- [x] ESLint
- [x] Vitest: 6 unit/component tests
- [x] Content validation: 3 states, 10 events, 6 stories, 3 datasets
- [x] Source validation: 15 sources across 79 references
- [x] Internal validation: 27 declared public paths
- [x] Next.js production build: 39 prerendered paths
- [x] Playwright: 11 passed, 1 desktop-only skip across desktop and mobile projects
- [x] Visual regression baselines at 1440×1000 and 390×844
- [x] Rendered inspection at desktop and mobile widths
- [x] Reduced-motion, keyboard, search, theme, map and state navigation checks
- [ ] Production URL and metadata smoke test — completed after deployment

## Fidelity ledger

| Mismatch | Concept evidence | Render evidence | Repair | Intentional deviation |
|---|---|---|---|---|
| Brand name dominated the first hero render | Plate 01 elevates the primary brand line | `outputs/bharat-hero-desktop.png` | Promoted “A living atlas of a civilization.” to the hero heading; retained BHARAT/भारत as identity | None |
| Mobile utility controls overcrowded the masthead | Plate 11 shows identity plus one menu control | Initial 390px browser render | Moved search, language and theme into the mobile drawer | None |
| Mobile terrain sat behind the headline | Plate 11 keeps the geographic silhouette above the copy | `outputs/bharat-home-mobile-final.png` | Added a narrow-camera scale, rotation and vertical composition | None |
| MapLibre geometry was not captured by the browser compositor | Plate 02 requires visible boundaries and a selected state | Initial atlas render showed an empty map surface | Added a synchronized SVG boundary layer with keyboard-selectable reviewed states | MapLibre remains the camera/input engine; SVG guarantees visual and accessibility parity |
| State chapter navigation repeated “Places” | Plate 10 has one clear editorial index | Odisha render | Renamed the detailed destination to “Place index” | None |
| Concept photography was not licensable for production | Plates 04, 05, 08 and 10 use atmospheric image references | Final production uses texture, contour, colour and geometry | Replaced photographic dependencies with procedural visual systems | Deliberate rights-safe production choice |

No known material route, interaction or accessibility mismatch remains. The procedural-media deviation is intentional and documented.
