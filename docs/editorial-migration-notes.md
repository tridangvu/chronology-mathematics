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
- Immediate consequences belong after the proof under a non-Example heading; multiplicativity should be flagged as admitted/asserted if left without proof. Prefer one concrete numerical **Example** using Euler’s criterion.
- Later developments / Sources added from existing relations/references; historical depth remains light.
- No v1.1 validation sheet yet.

### `quadratic-reciprocity-law.md` (published)

- **C3 decisive-passage rule:** the passage announced as the object of the article must be explained; a pointer to a future article does **not** satisfy C3. For this theorem article, the object is the reciprocity law itself; the decisive lattice-count comparison is therefore part of what must be explained here (or the announced object must be narrowed).
- Approach and proof remains a **high-level sketch**: the lattice-count bookkeeping is **not** yet explained in this article. Deferring that count to a future expanded article does **not** resolve C3 for the present theorem page. Remaining work: explain the decisive lattice-count passage in this article, **or** narrow the article’s announced object (e.g. to a survey of dependencies) so that the missing bookkeeping is no longer the announced decisive passage. Citing Ireland–Rosen §5.3 remains useful as a source pointer, but it is not a substitute for explaining the decisive step when the theorem is the object.
- Supplementary laws are stated without proof (admit or link).
- No v1.1 validation sheet yet.

### `draft-wilson-theorem-note.md` (draft)

- Still a stub for draft-exclusion testing. Light heading touch only; scientific content not developed. Remains `draft`.

## C3 — Decisive passage (référentiel)

Le passage décisif annoncé comme objet de l’article doit être expliqué ; un renvoi à un futur article ne suffit pas. This applies in particular to theorem articles whose stated object is the theorem itself: deferring the decisive argument to a later page leaves an open C3 gap on the present page.

## Policy

Do **not** auto-flip `published` ↔ `draft` based on these gaps. Fill a v1.1 sheet in `reviews/` before treating an article as re-validated under the new référentiel.
