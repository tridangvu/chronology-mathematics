# Chronology of mathematics

Durable static site for a chronological encyclopaedia of mathematics.

**Site title:** Chronology of mathematics  
**Repo:** [tridangvu/chronology-mathematics](https://github.com/tridangvu/chronology-mathematics)  
**Stack:** Astro 5 (static) + TypeScript + Markdown content collections + KaTeX (build-time) + Pagefind

## Node version

Documented and required: **Node 20.19.2** (see `.nvmrc`). Astro is pinned to **5.18.2**, the latest 5.x line compatible with this Node without requiring Node 22+.

## Commands

```bash
npm install
npm run dev        # local preview (includes drafts + /math-qa/)
npm run validate   # metadata + internal refs
npm run build      # validate + production build (drafts excluded)
npm run preview    # preview the production build
```

Production URL (after GitHub Pages is enabled):  
`https://tridangvu.github.io/chronology-mathematics/`

## Adding an article

1. Copy `src/content/articles/_template.md` to `src/content/articles/your-id.md` (no leading underscore).
2. Fill frontmatter; write the body in Markdown with `\(` `\)` / `\[` `\]` math.
3. Run `npm run validate` then `npm run build`.

See `docs/author-guide.md`, `docs/quality-reference.md` (quality standard), and `AGENTS.md`.


## Quality

Article quality is governed by [`docs/quality-reference.md`](docs/quality-reference.md) (v1.0).  
Publication requires a completed validation sheet under [`reviews/`](reviews/) with decision **prêt à publier**.

## Licence

Content and code: see repository; mathematical statements are historical/public-domain ideas with modern exposition and cited sources.
