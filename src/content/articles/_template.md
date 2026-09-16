---
# Copy this file to a new `kebab-case.md` (do not keep the leading underscore).
# Quality: follow docs/quality-reference.md (C0–C7). Fill a validation sheet before publishing.
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
status: draft # draft | published — publish only after reviews/ sheet = prêt à publier
period: "1800–1849"
landmark:
  label: "1801"
  sortKey: 1801
  precision: exact # exact | approx | uncertain | unknown | bce
  # note: "optional dating note — meaning of this date (formulation / publication / proof / …)"
prerequisites: [] # reading tools actually used in the main body
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

## Landmarks

Title, contribution summary, date or period explained, historical authors, domain, prerequisites. Distinguish formulation / publication / first proof when relevant.

## Motivation and history

State the problem precisely enough that a answer would be recognisable (C1). Explain the obstacle with the announced prerequisites. Document historical motivations; mark pedagogical reconstructions as such.

## Statement or definition

Modern language; hypotheses and quantifiers explicit (C2). Give an elementary example. Distinguish the historical contribution from the version exposed here.

## Approach and proof

Central idea articulated to the problem (C3 — pedagogical core). Mark status: rewritten published proof / documented discovery path / pedagogical reconstruction. Flag modern tools and admitted results.

## Immediate payoff

One application or illustration that uses the central idea and reaches an interpreted conclusion (C4).

## Modern viewpoint

Additional prerequisites if needed; complete justification relative to declared prerequisites (C5). Do not silently correct a false statement from the main body.

## Later developments

Natural next questions with typed links and one-sentence rationale (C6). Future articles are paths, not dead links.

## Sources

Precise references for every substantial historical claim (C7). Distinguish roles; mark sources not consulted.

<!-- Before `status: published`: copy docs/quality-validation-sheet.md → reviews/<id>--<date>.md and obtain prêt à publier. -->
