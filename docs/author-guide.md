# Author guide

## Quality first

All articles are written and reviewed against the project quality reference:

- [`quality-reference.md`](./quality-reference.md) — criteria C0–C7, review procedure, publication decisions (French, authoritative).
- [`quality-validation-sheet.md`](./quality-validation-sheet.md) — copy into `reviews/` for each review.
- [`../reviews/README.md`](../reviews/README.md) — where completed sheets live.

**Do not set `status: published` until a filled sheet decides « prêt à publier » with no blocking defects.**

Before drafting, fix the intended reader, the central problem, and the expected takeaway (the five sentences in C0). During drafting, use C0–C7. After drafting, fill the validation sheet.

## Create an article

1. Copy `_template.md` to a new file named after the stable id, e.g. `fermat-little-theorem.md`.
2. Set frontmatter fields (required unless noted):
   - `id`, `slug`, `title`, `summary`, `type`, `domains`, `status`, `period`
   - `landmark.label`, `landmark.sortKey`, `landmark.precision` (`exact|approx|uncertain|unknown|bce`)
   - `historicalAuthors`, `prerequisites`, `relations`, `references`
3. Optional reserved: `problemsPath.problemTags`, `difficulty`, `exerciseIds` (no UI yet).
4. Write the body in Markdown. Prefer modern mathematical language with historical notes and citations.

## Math

- Inline: `\( ... \)`
- Display: `\[ ... \]` or `$$ ... $$`
- Single `$...$` is **disabled** to avoid false positives.
- Shared macros: `\N`, `\Z`, `\Q`, `\R`, `\C`, `\F`, `\legendre{a}{p}`, `\abs{x}`, `\floor{x}`, `\ceil{x}`.
- See `docs/math-subset.md`.

## Theorem styling

Use HTML blocks when needed:

```html
<div class="theorem-block theorem-block--definition">
<p class="theorem-label">Definition.</p>
<p>...</p>
</div>
```

Variants: `definition`, `proposition`, `theorem`, `lemma`, `proof`, `example`, `remark`.

## Status

- `published` — appears in production.
- `draft` — local preview only; clearly badged; never linked from published articles.

## Validate

```bash
npm run validate
npm run build
```
