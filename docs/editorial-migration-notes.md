# Editorial migration notes — structure v1.1

Date: 16 septembre 2026 (Europe/Stockholm).

This note lists **scientific / editorial gaps** after renaming article headings to the v1.1 default structure. No new mathematical content was invented; `status` fields were left unchanged.

## Structure mapping applied

| Former heading (approx.) | v1.1 heading |
| --- | --- |
| Statement / Definitions / Euler’s criterion (as statement block) | Statement or definition |
| Historical note | Motivation and history (or merged into it) |
| Proof sketch | Approach and proof |
| Immediate consequences / Example | Example (optional) |
| Remark blocks | Comments (optional) or left as theorem-block remarks inside Approach and proof |
| (often missing) | Later developments / Sources — added from existing relations/references where possible |

Landmarks remain frontmatter/header only (no body section).

## Article-specific gaps

### `gauss-lemma-quadratic-residues.md` (published)

- Approach and proof is still a **sketch**: cancellation and the identification with Euler’s criterion are clear at textbook level, but a fuller write-up of the permutation-of-absolute-residues step (and the floor-function packaging mentioned in the remark) would strengthen C3 “complete justification”.
- Later developments currently lean on the existing relation to quadratic reciprocity; a sharper “what question comes next” sentence could help C6.
- No v1.1 validation sheet yet in `reviews/` (publication gate for future edits).

### `euler-criterion-legendre-symbol.md` (published)

- Approach and proof relies on **Fermat’s little theorem** and **cyclicity of \(\mathrm{F}_p^\times\)** without naming them as announced prerequisites in frontmatter (prerequisites list is empty). Either add reading prerequisites / admit these results explicitly, or expand the justification — C3 relative to declared prerequisites is currently thin.
- Immediate consequences were folded into **Example**; multiplicativity is asserted without proof (acceptable if admitted, but should be flagged as such for C3).
- Later developments / Sources added from existing relations/references; historical depth remains light.
- No v1.1 validation sheet yet.

### `quadratic-reciprocity-law.md` (published)

- Approach and proof remains an **intentional high-level sketch** (lattice-count bookkeeping deferred). The article already notes incompleteness of the expanded elementary proof — this is a known **C3 gap** for a fully self-contained justification; either keep as survey-with-pointer and admit Ireland–Rosen §5.3 explicitly as the locus of the missing steps, or expand in a follow-up article.
- Supplementary laws are stated without proof (admit or link).
- No v1.1 validation sheet yet.

### `draft-wilson-theorem-note.md` (draft)

- Still a stub for draft-exclusion testing. Light heading touch only; scientific content not developed. Remains `draft`.

## Policy

Do **not** auto-flip `published` ↔ `draft` based on these gaps. Fill a v1.1 sheet in `reviews/` before treating an article as re-validated under the new référentiel.
