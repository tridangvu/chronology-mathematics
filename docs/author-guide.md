# Author guide

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
