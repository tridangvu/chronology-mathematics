---
id: quadratic-reciprocity-law
slug: quadratic-reciprocity-law
title: "The law of quadratic reciprocity"
summary: "For distinct odd primes p and q, (p/q)(q/p) = (−1)^{(p−1)(q−1)/4}. Together with the supplementary laws for (−1/p) and (2/p), this determines all Legendre symbols."
type: theorem
domains:
  - number-theory
  - quadratic-residues
historicalAuthors:
  - "Euler, Leonhard"
  - "Legendre, Adrien-Marie"
  - "Gauss, Carl Friedrich"
status: published
period: "1800–1849"
landmark:
  label: "1801"
  sortKey: 1801
  precision: exact
  note: "Gauss gave the first complete published proof in Disquisitiones Arithmeticae (1801); Euler conjectured related forms earlier; Legendre stated a version with a gap."
prerequisites:
  - euler-criterion-legendre-symbol
  - gauss-lemma-quadratic-residues
relations:
  - target: gauss-lemma-quadratic-residues
    type: used-historically
    note: "One of Gauss’s proofs routes through Gauss’s lemma."
  - target: euler-criterion-legendre-symbol
    type: reading-prerequisite
references:
  - id: gauss-da-qr
    citation: "C. F. Gauss, Disquisitiones Arithmeticae, 1801; quadratic reciprocity as the theorema aureum (first complete proof)."
  - id: ireland-rosen-qr
    citation: "Kenneth Ireland and Michael Rosen, A Classical Introduction to Modern Number Theory, 2nd ed., Springer, 1990, Chapter 5."
  - id: lemermeyer
    citation: "Franz Lemmermeyer, Reciprocity Laws: From Euler to Eisenstein, Springer, 2000 (historical survey of proofs)."
updated: 2026-09-16
---

<!-- Landmarks: frontmatter/header only. Migration note: lattice-count is an open C3 gap on this theorem page — explain it here or narrow the announced object; a future article does not satisfy C3. See docs/editorial-migration-notes.md. -->

## Motivation and history

Euler conjectured reciprocity phenomena for quadratic residues; Legendre gave an influential but incomplete argument; Gauss supplied the first complete proof in 1801 and later published several more [[gauss-da-qr](#ref-gauss-da-qr)] [[lemermeyer](#ref-lemermeyer)]. The practical question is: given distinct odd primes \(p\) and \(q\), how are \(\legendre{p}{q}\) and \(\legendre{q}{p}\) related? The lemma on least absolute residues is one classical ingredient [[ireland-rosen-qr](#ref-ireland-rosen-qr)].

## Statement or definition

Let \(p\) and \(q\) be distinct odd primes. Then

\[
\legendre{p}{q}\,\legendre{q}{p} = (-1)^{\frac{p-1}{2}\cdot\frac{q-1}{2}}.
\]

Equivalently: if at least one of \(p,q\) is congruent to \(1\) modulo \(4\), then \(\legendre{p}{q} = \legendre{q}{p}\); if both are congruent to \(3\) modulo \(4\), then \(\legendre{p}{q} = -\legendre{q}{p}\).

### Supplementary laws

\[
\legendre{-1}{p} = (-1)^{(p-1)/2},
\qquad
\legendre{2}{p} = (-1)^{(p^2-1)/8}.
\]

Together with multiplicativity of the Legendre symbol, these rules compute \(\legendre{a}{p}\) for every integer \(a\). (The supplementary laws are stated here; their proofs are admitted from the standard textbook development, e.g. Ireland–Rosen Chapter 5.)

## Approach and proof

<!-- Status scaffolding: high-level modern sketch of a Gauss-lemma route; relation to history: one of Gauss’s classical strategies, not a full transcription of DA. Admitted: Gauss’s lemma, Euler’s criterion. The decisive lattice-count identities are not yet explained here (open C3 gap). -->

The exposition below is a high-level modern sketch of a Gauss-lemma route (one of Gauss’s classical strategies), not a full transcription of the *Disquisitiones*. We admit Gauss’s lemma and Euler’s criterion.

Fix an odd prime \(q\) and apply Gauss’s lemma to \(\legendre{q}{p}\). The count \(\mu\) of negative least absolute residues of \(q,2q,\dots,\tfrac{p-1}{2}q\) can be expressed using lattice-point counts in a rectangle. Comparing the symmetric count for \(\legendre{p}{q}\) yields the sign \((-1)^{(p-1)(q-1)/4}\). Ireland–Rosen §5.3 [[ireland-rosen-qr](#ref-ireland-rosen-qr)] carries out that bookkeeping in detail; the decisive lattice-count comparison is **not** expanded in the present article.

<div class="theorem-block theorem-block--remark">
<p class="theorem-label">Remark on completeness.</p>
<p>
This page states the law accurately and sketches the Gauss-lemma route at a high level. The decisive lattice-count passage that finishes the argument is not yet explained here: that is an open C3 gap for a theorem article whose object is the law itself. A pointer to Ireland–Rosen (or to a future expanded write-up) does not satisfy that requirement; remaining work is to explain the lattice-count here, or to narrow the announced object of this page. The <em>statement</em> itself is not marked unverified.
</p>
</div>

## Example

For \(p = 7\) and \(q = 3\): both are \(3 \pmod{4}\), so reciprocity predicts \(\legendre{3}{7} = -\legendre{7}{3}\). Now \(7 \equiv 1 \pmod{3}\), so \(\legendre{7}{3} = \legendre{1}{3} = 1\), hence \(\legendre{3}{7} = -1\), matching the example on Gauss’s lemma.

## Later developments

Many further proofs and reciprocity laws (cubic, biquadratic, Eisenstein, …) are surveyed by Lemmermeyer [[lemermeyer](#ref-lemermeyer)]. On this site, the natural reading path is Euler’s criterion → Gauss’s lemma → the present law. Expanding the lattice-count comparison on this page (or narrowing the page’s announced object) remains work for C3; a separate future article is optional scaffolding, not a substitute for explaining the decisive passage announced here.

## Sources

- [[gauss-da-qr](#ref-gauss-da-qr)] — first complete published proof (*theorema aureum*).
- [[ireland-rosen-qr](#ref-ireland-rosen-qr)] — modern Chapter 5 development, including the lattice-count proof via Gauss’s lemma.
- [[lemermeyer](#ref-lemermeyer)] — historical survey of reciprocity proofs.
