# Contributing content

BHARAT publishes structured knowledge, not free-floating copy. Add or change content only through the typed records in `content/`.

1. Register every new source once in `content/sources.ts`.
2. Reference the stable source ID from facts, state chapters, stories and datasets.
3. Record the reference year for numerical material and the editorial review date for every long-lived record.
4. Mark historical date precision accurately. Use `debated` when interpretation is materially contested.
5. Enter Indian-language text in reviewed Unicode. Never create decorative pseudo-script or rely on unverified transliteration.
6. Run `pnpm validate:content`, `pnpm validate:sources` and `pnpm test` before opening a change.

Photographs and recordings must be public domain, openly licensed, generated for the project or explicitly permitted. Record creator, original URL, licence and attribution wording with the asset.
