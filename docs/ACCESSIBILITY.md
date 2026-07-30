# Accessibility notes

BHARAT targets WCAG 2.2 AA and treats the atlas as readable knowledge first.

- Landmarks, heading order, skip navigation and visible focus are built into the application shell.
- Map selection has touch and text-list equivalents; charts expose table equivalents.
- Search uses an accessible modal, explicit labels, focus placement, Escape dismissal and keyboard shortcut.
- Colour is paired with text labels for selection, evidence and date precision.
- `prefers-reduced-motion` removes entry motion, WebGL, parallax and long transitions without removing content.
- Mobile controls maintain touch-sized targets and the layout is protected against horizontal page overflow.

Known follow-up: perform periodic manual checks with NVDA, VoiceOver and browser zoom as the content library expands.
