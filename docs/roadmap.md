# Roadmap

## v1 (this repository)

- [x] Astro static site + content collections + Zod schema
- [x] Chronology page with period groups + domain/period filters
- [x] Article pages with TOC, prerequisites, relations, references
- [x] KaTeX build-time math with site-hosted CSS/fonts
- [x] Pilot cluster on quadratic residues (3 published + 1 draft fixture)
- [x] Pagefind search
- [x] Draft exclusion in production
- [x] Validate script + GitHub Actions CI/deploy workflows
- [x] Docs: author guide, AGENTS.md, math subset, Pages notes
- [x] Quality reference v1.0 integrated as publication gate
- [x] Editorial structure **v1.1** (Approach and proof = complete justification; Example / Comments optional; French référentiel updated)

## Later — problems path

Reserved frontmatter (`problemsPath`) exists so authors can tag exercises early. **UI is explicitly out of scope for v1:** no problem browser, solver, or grading.

## Later — content

- Expand beyond quadratic residues (Greek geometry, calculus landmarks, algebra, probability, …)
- Fully expanded reciprocity proof article (see `docs/editorial-migration-notes.md`)
- Better period taxonomy and pagination when the catalogue grows
- Re-validate published pilot articles under v1.1 sheets in `reviews/`

## Quality gate

All published articles must pass [`quality-reference.md`](./quality-reference.md) (**v1.1**) with a sheet in `reviews/`. Pre-v1.1 sheets belong in `reviews/archive/` only.
