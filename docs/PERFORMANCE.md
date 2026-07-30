# Performance architecture

## Budgets

| Measure | Budget |
|---|---:|
| LCP | under 2.5 s |
| CLS | under 0.1 |
| INP | under 200 ms |
| Initial JavaScript | route-specific; no map, D3 or WebGL in unrelated routes |

The terrain scene, interactive map and geographic source are dynamically imported. MapLibre loads only when the map approaches the viewport. The hero retains a CSS contour fallback and disappears entirely under reduced motion. Animated work uses transforms/opacity or renderer loops; background motion stops with the component lifecycle.

Long homepage sections use `content-visibility`. Images are expected through `next/image` in AVIF/WebP once a reviewed media registry is introduced.
