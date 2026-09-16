---
id: euler-criterion-legendre-symbol
slug: euler-criterion-legendre-symbol
title: "Euler’s criterion and the Legendre symbol"
summary: "For an odd prime p and a not divisible by p, a^{(p−1)/2} ≡ (a/p) (mod p). The Legendre symbol (a/p) is 1, −1, or 0 according as a is a nonzero quadratic residue, a nonresidue, or divisible by p."
type: theorem
domains:
  - number-theory
  - quadratic-residues
historicalAuthors:
  - "Euler, Leonhard"
  - "Legendre, Adrien-Marie"
status: published
period: "1750–1799"
landmark:
  label: "c. 1750–1785"
  sortKey: 1750
  precision: approx
  note: "Euler studied the related congruence criteria mid-century; Legendre introduced the symbol (a/p) in the 1780s–1798 Essai."
prerequisites: []
relations:
  - target: gauss-lemma-quadratic-residues
    type: application
    note: "Gauss’s lemma evaluates (a/p) by counting negative least absolute residues."
  - target: quadratic-reciprocity-law
    type: used-historically
    note: "Quadratic reciprocity is a structural law for Legendre symbols."
references:
  - id: ireland-rosen-ec
    citation: "Kenneth Ireland and Michael Rosen, A Classical Introduction to Modern Number Theory, 2nd ed., Springer, 1990, §5.1 (Legendre symbol; Euler’s criterion)."
  - id: legendre-essai
    citation: "A.-M. Legendre, Essai sur la théorie des nombres, Paris, 1798 (introduction of the symbol (a/p))."
  - id: euler-op
    citation: "L. Euler, various papers on residues of powers; standard modern statement of the criterion is textbook-standard (Ireland–Rosen; Niven–Zuckerman–Montgomery)."
updated: 2026-09-16
---

## Definitions

Let \(p\) be an odd prime and \(a \in \Z\). The **Legendre symbol** \(\legendre{a}{p}\) is defined by

\[
\legendre{a}{p} =
\begin{cases}
0 & \text{if } p \mid a, \\
1 & \text{if } p \nmid a \text{ and } a \equiv x^2 \pmod{p} \text{ for some } x, \\
-1 & \text{if } p \nmid a \text{ and } a \text{ is not a square modulo } p.
\end{cases}
\]

When \(\legendre{a}{p} = 1\) one says that \(a\) is a **quadratic residue** modulo \(p\) (nonzero); when the value is \(-1\), a **quadratic nonresidue**.

## Euler’s criterion

**Theorem (Euler’s criterion).** If \(p\) is an odd prime and \(p \nmid a\), then

\[
a^{(p-1)/2} \equiv \legendre{a}{p} \pmod{p}.
\]

<div class="theorem-block theorem-block--proof">
<p class="theorem-label">Proof sketch.</p>
<p>
By Fermat’s little theorem, \(a^{p-1} \equiv 1 \pmod{p}\), so \(a^{(p-1)/2} \equiv \pm 1 \pmod{p}\). The multiplicative group \(\F_p^\times\) is cyclic of even order \(p-1\). Writing \(a \equiv g^k \pmod{p}\) for a generator \(g\), one has \(a^{(p-1)/2} \equiv (g^{(p-1)/2})^k \equiv (-1)^k \pmod{p}\). Squares are exactly the even powers of \(g\), so \((-1)^k = \legendre{a}{p}\).
</p>
</div>

## Immediate consequences

- There are equally many nonzero residues and nonresidues modulo \(p\), namely \((p-1)/2\) of each.
- Multiplicativity: \(\legendre{ab}{p} = \legendre{a}{p}\legendre{b}{p}\).
- \(\legendre{-1}{p} = (-1)^{(p-1)/2}\), recovered by taking \(a = -1\).

## Historical note

Euler investigated power residues extensively in the eighteenth century. Legendre’s symbol gave a compact notation that made reciprocity statements easy to write [[legendre-essai](#ref-legendre-essai)]. The cyclic-group proof above is modern; older proofs often argued via factorisations of \(X^{p-1}-1\) in \(\F_p[X]\) [[ireland-rosen-ec](#ref-ireland-rosen-ec)].
