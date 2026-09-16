---
# Copy this file to a new `kebab-case.md` (do not keep the leading underscore).
# Quality: follow docs/quality-reference.md (v1.1, C0–C7). Fill a validation sheet before publishing.
# See docs/author-guide.md.
id: example-article-id
slug: example-article-id
title: "Example title"
summary: "Problem + expected gain (C0): what the reader will understand and be able to do."
type: theorem # theorem | definition | method | survey | biography | landmark | note
domains:
  - number-theory
historicalAuthors:
  - "Name, Forename"
status: draft # draft | published — publish only after reviews/ sheet = prêt à publier (v1.1)
period: "1800–1849"
landmark:
  label: "1801"
  sortKey: 1801
  precision: exact # exact | approx | uncertain | unknown | bce
  # note: "optional dating note — meaning of this date (formulation / publication / proof / …)"
prerequisites: [] # reading tools actually used in Approach and proof
relations: []
  # - target: other-article-id
  #   type: reading-prerequisite # reading-prerequisite | used-historically | generalizes | alternate-proof | application
  #   note: why this link is natural (C6)
references:
  - id: source1
    citation: "Author, Title, year. (role: original | translation | historical study | modern exposition)"
    # url: https://example.org
# Optional reserved fields for a future problems path (no UI yet):
# problemsPath:
#   problemTags: []
#   difficulty: intro
#   exerciseIds: []
---

<!-- Before writing: answer C0's five sentences (reader already knows / seeks / difficulty / new idea / will know). -->
<!-- Landmarks (title, summary, authors, domain, dates, prerequisites) come from frontmatter/header only — do not duplicate them as a body section. -->

## Motivation and history

<!-- C1: State the problem precisely enough that an answer would be recognisable. Explain the obstacle with the announced prerequisites. Document historical motivations; mark pedagogical reconstructions as such. -->

## Statement or definition

<!-- C2: Modern language; hypotheses and quantifiers explicit. An old result may be stated directly in modern form. Distinguish the historical contribution from the version exposed here — without a mandatory historical-then-modern double presentation. Elementary reading examples may go here or under Example. -->

## Approach and proof

<!-- C3 (pedagogical core): central idea + complete justification relative to announced prerequisites and explicitly admitted auxiliary results. Choose the most illuminating exposition: modernised historical proof OR a different modern proof; state its relation to the historical contribution. Mark status (rewritten published proof / other modern proof / documented discovery path / pedagogical reconstruction). Flag admitted results. Do not silently correct a false statement — fix the statement. -->

<!-- ## Example (optional — omit this heading if empty)
C4: One application or illustration that uses the central idea and reaches an interpreted conclusion. Examples may also be integrated elsewhere; if so, still evaluate that content under C4. -->

<!-- ## Comments (optional — omit this heading if empty)
C5: Optional remarks, variants, structural viewpoint, limits. Not the seat of mandatory complete justification (that belongs in Approach and proof). If comments are integrated elsewhere, evaluate under C5. -->

## Later developments

<!-- C6: Natural next questions with typed links and one-sentence rationale. Future articles are paths, not dead links. -->

## Sources

<!-- C7: Precise references for every substantial historical claim. Distinguish roles; mark sources not consulted. Frontmatter `references` may carry the bibliography; body notes can point to them. -->

<!-- Before `status: published`: copy docs/quality-validation-sheet.md → reviews/<id>--<date>.md (référentiel v1.1) and obtain prêt à publier. -->
