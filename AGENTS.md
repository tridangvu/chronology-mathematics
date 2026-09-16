# AGENTS.md — editorial and technical decisions

This file records ordinary decisions for humans and coding agents working on the site.

## Product

- **Title:** Chronology of mathematics (English).
- **Repo name:** `chronology-mathematics` (GitHub Pages project site under `/chronology-mathematics/`).
- **Static only:** no app server, database, or admin UI.
- Prefer **Markdown** over MDX unless a real component is required.
- Separate content (`src/content`), presentation (`src/styles`, layouts), and logic (`src/lib`, `scripts`).

## Stack decisions

| Choice | Decision | Why |
| --- | --- | --- |
| Astro | **5.18.2** | Latest Astro 5.x fitting box Node **20.19.2**; Astro 6.0.6+ / 7 need Node 22+. |
| Content | `src/content.config.ts` + Zod | Official collections API with `glob` loader. |
| Math | `remark-math-extended` + `rehype-katex` | Build-time KaTeX; supports `\(` `\)` / `\[` `\]` (and `$$`). |
| Macros | `src/lib/math-macros.ts` | Single source of truth. |
| Search | `astro-pagefind` | Indexes `dist/` after build; drafts absent from prod HTML. |
| Deploy | GitHub Actions + `withastro/action` | Official Pages path; set `site` + `base`. |

## Editorial rules

- Every article has a stable `id`, `slug`, landmark with `sortKey` + `precision`, domains, status.
- Relation types: `reading-prerequisite` | `used-historically` | `generalizes` | `alternate-proof` | `application`.
- `problemsPath` fields are reserved in the schema; **do not build that UI yet**.
- Drafts: visible in `astro dev` with a badge; **excluded** from production pages, Pagefind, and sitemap.
- Published articles must not reference unpublished targets (`npm run validate` enforces this).
- Unverifiable historical claims stay `draft` with an explicit gap note.
- Default body headings (English site): Motivation and history → Statement or definition → Approach and proof → Example (optional) → Comments (optional) → Later developments → Sources. Landmarks = frontmatter/header only.
- Old results may be stated/proved in modern language; one illuminating main proof (modernised historical or other modern); no mandatory double presentation; complete justification in Approach and proof.

## Quality standard (mandatory)

Authoritative document (French, **v1.1**): [`docs/quality-reference.md`](docs/quality-reference.md).

- Design, draft, and review every article against criteria **C0–C7** plus readability/integrity.
- Before setting `status: published`, complete a validation sheet from [`docs/quality-validation-sheet.md`](docs/quality-validation-sheet.md) and store it under [`reviews/`](reviews/) as `<article-id>--<YYYY-MM-DD>.md`.
- Decision must be **prêt à publier** with no open blocking defects. Do not publish on length, reference count, or section completeness alone.
- C3 includes complete justification (relative to announced prerequisites and admitted auxiliaries). C4 (Example) and C5 (Comments) are optional and may be **Non applicable**.
- Mark AI-assisted reviews as such; they are not independent human review.
- After substantive changes to statement, proof, attribution, or application, renew the corresponding controls.
- Pedagogical priority: the reader understands a problem, acquires a new idea, sees why it works, and what it enables. Historical facts that are asserted must be accurate, sourced, and distinguished from pedagogical reconstructions.
- Sheets under older criteria belong in [`reviews/archive/`](reviews/archive/) and do **not** count as v1.1 validations.

## Commands agents should use

```bash
npm install
npm run validate
npm run build
npm run dev
npm run preview
```

## Math failures

Invalid KaTeX fails the build via `rehypeFailKatex`, naming the article path. Do not weaken `strict: 'error'` without documenting why in this file.

## Dev-only page

`/math-qa/` is a technical fixture, not a historical article. It is stripped from `dist/` after production build by `excludeDevPages`.

## Out of scope (v1)

- Problems-path UI, user accounts, comments, runtime CMS, MDX-heavy interactive widgets.
