# Motion architecture

## Principle

Motion explains state, scale, chronology or continuity. It never blocks reading, navigation or input.

## Ownership

| Layer | Owner | Examples |
| --- | --- | --- |
| CSS | Native CSS | Hover, focus, pressed state, small opacity/transform transitions |
| Component motion | Motion | Dialogs, sheets, route reveals, selection transitions |
| Cinematic scroll | GSAP | Astronomy line → orbital line → scientific interface |
| 3D scene | React Three Fiber | Terrain camera, pointer response, quality adaptation |
| Data geometry | D3 | Scale, path and mark interpolation |

No interaction is implemented by two motion systems.

## Timing tokens

- `instant`: 80ms
- `fast`: 160ms
- `standard`: 260ms
- `deliberate`: 420ms
- `cinematic`: 700–1000ms, used only for section-scale transitions

Default easing: a restrained ease-out curve. Spring motion is limited to drawers and direct manipulation.

## Entry

- First visit: contours resolve and brand appears within roughly one second.
- Repeat visit: 150–250ms fade.
- Reduced motion: static first frame with no ambient particles.
- Entry never owns focus and never delays navigation.

## Hero

- Camera motion is slow, bounded and detached from exact scroll position on low-power devices.
- Pointer parallax is capped to a few pixels/degrees.
- Animation pauses when hidden or off screen.
- Scroll transitions terrain emphasis into the explorer without removing copy abruptly.

## Reduced motion contract

When `prefers-reduced-motion: reduce` is active:

- no parallax, ambient particles or scroll-linked camera;
- no pinned cinematic timeline;
- no animated map flights—selection updates use a short fade;
- no chart morphing—data redraws immediately with live-region status;
- all content, controls, focus order and deep links remain unchanged.

Reduced-motion behaviour is tested as a first-class route mode, not a late override.

## Performance rules

- Animate `transform` and `opacity` whenever possible.
- Scroll sampling runs through `requestAnimationFrame`.
- Passive listeners are used where cancellation is unnecessary.
- Scenes stop when off screen or the document is hidden.
- Mobile geometry and texture budgets are materially lower than desktop.
- No autoplay media or audio is proposed.
