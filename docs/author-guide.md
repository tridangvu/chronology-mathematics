# Author guide

## Quality first

All articles are written and reviewed against the project quality reference (**v1.1**):

- [`quality-reference.md`](./quality-reference.md) — criteria C0–C7, default article structure, review procedure, publication decisions (French, authoritative).
- [`quality-validation-sheet.md`](./quality-validation-sheet.md) — copy into `reviews/` for each review.
- [`../reviews/README.md`](../reviews/README.md) — where completed sheets live.
- [`editorial-migration-notes.md`](./editorial-migration-notes.md) — known gaps after the v1.1 heading migration.

**Do not set `status: published` until a filled sheet (référentiel v1.1) decides « prêt à publier » with no blocking defects.**

Before drafting, fix the intended reader, the central problem, and the expected takeaway (the five sentences in C0). During drafting, use C0–C7. After drafting, fill the validation sheet.

### Editorial principles (v1.1)

- An old result may be stated and proved directly in modern language.
- The main proof may be a modernised historical proof **or** a different modern proof; choose the most illuminating exposition and state its relation to the historical contribution.
- No mandatory double presentation (historical then modern).
- Complete justification belongs in **Approach and proof**, relative to announced prerequisites and explicitly admitted auxiliary results.
- **Example** and **Comments** are optional; omit empty headings. Accuracy, historical fidelity, and traceability still apply to the whole article.

### Default body structure (English headings)

1. *(Landmarks via frontmatter/header only — do not duplicate in the body.)*
2. **Motivation and history**
3. **Statement or definition**
4. **Approach and proof**
5. **Example** — optional; omit if empty
6. **Comments** — optional; omit if empty
7. **Later developments**
8. **Sources**

Regroup when it improves exposition; never leave empty headings or filler.

## Create an article

1. Copy `_template.md` to a new file named after the stable id, e.g. `fermat-little-theorem.md`.
2. Set frontmatter fields (required unless noted):
   - `id`, `slug`, `title`, `summary`, `type`, `domains`, `status`, `period`
   - `landmark.label`, `landmark.sortKey`, `landmark.precision` (`exact|approx|uncertain|unknown|bce`)
   - `historicalAuthors`, `prerequisites`, `relations`, `references`
3. Optional reserved: `problemsPath.problemTags`, `difficulty`, `exerciseIds` (no UI yet).
4. Write the body in Markdown. Prefer modern mathematical language; cite historical claims.

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
