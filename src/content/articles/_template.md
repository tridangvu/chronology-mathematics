---
# Copy this file to a new `kebab-case.md` (do not keep the leading underscore).
# Then fill every required field. See docs/author-guide.md.
id: example-article-id
slug: example-article-id
title: "Example title"
summary: "One- or two-sentence synopsis for chronology cards and search snippets."
type: theorem # theorem | definition | method | survey | biography | landmark | note
domains:
  - number-theory
historicalAuthors:
  - "Name, Forename"
status: draft # draft | published
period: "1800–1849"
landmark:
  label: "1801"
  sortKey: 1801
  precision: exact # exact | approx | uncertain | unknown | bce
  # note: "optional dating note"
prerequisites: [] # list of stable article ids
relations: []
  # - target: other-article-id
  #   type: reading-prerequisite # reading-prerequisite | used-historically | generalizes | alternate-proof | application
  #   note: optional
references:
  - id: source1
    citation: "Author, Title, year."
    # url: https://example.org
# Optional reserved fields for a future problems path (no UI yet):
# problemsPath:
#   problemTags: []
#   difficulty: intro
#   exerciseIds: []
---

## Statement

Write the mathematical statement in modern language. Use `\(` inline `\)` and `\[` display `\]` math.

## Historical note

Situate the result.

## Proof sketch

Modern exposition; cite sources. Mark gaps explicitly if `status: draft`.
