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

## Statement

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

Together with multiplicativity of the Legendre symbol, these rules compute \(\legendre{a}{p}\) for every integer \(a\).

## Historical note

Euler conjectured reciprocity phenomena for quadratic residues; Legendre gave an influential but incomplete argument; Gauss supplied the first complete proof in 1801 and later published several more [[gauss-da-qr](#ref-gauss-da-qr)] [[lemermeyer](#ref-lemermeyer)]. The lemma on least absolute residues is one classical ingredient [[ireland-rosen-qr](#ref-ireland-rosen-qr)].

## Proof sketch (via Gauss’s lemma)

Fix an odd prime \(q\) and apply Gauss’s lemma to \(\legendre{q}{p}\). The count \(\mu\) of negative least absolute residues of \(q,2q,\dots,\tfrac{p-1}{2}q\) can be expressed using lattice-point counts in a rectangle. Comparing the symmetric count for \(\legendre{p}{q}\) yields the sign \((-1)^{(p-1)(q-1)/4}\). Full bookkeeping appears in Ireland–Rosen §5.3; the present article only records the logical dependence on Gauss’s lemma and Euler’s criterion.

<div class="theorem-block theorem-block--remark">
<p class="theorem-label">Remark on completeness.</p>
<p>
This page states the law accurately and sketches the Gauss-lemma route at a high level. A fully expanded elementary proof (with every lattice-count identity) is deferred to a later article; nothing essential is marked unverified for the statement itself.
</p>
</div>

## Example

For \(p = 7\) and \(q = 3\): both are \(3 \pmod{4}\), so reciprocity predicts \(\legendre{3}{7} = -\legendre{7}{3}\). Now \(7 \equiv 1 \pmod{3}\), so \(\legendre{7}{3} = \legendre{1}{3} = 1\), hence \(\legendre{3}{7} = -1\), matching the example on Gauss’s lemma.
