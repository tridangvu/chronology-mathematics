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

<!-- Landmarks: frontmatter/header only. Migration note: see docs/editorial-migration-notes.md (Fermat / cyclicity not listed as prerequisites). -->

## Motivation and history

Euler investigated power residues extensively in the eighteenth century. A recurring question is: for an odd prime \(p\) and an integer \(a\) not divisible by \(p\), how can one decide whether \(a\) is a square modulo \(p\) by an arithmetic test on powers of \(a\)? Legendre’s symbol \(\legendre{a}{p}\) later gave a compact notation that made reciprocity statements easy to write [[legendre-essai](#ref-legendre-essai)].

## Statement or definition

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

**Theorem (Euler’s criterion).** If \(p\) is an odd prime and \(p \nmid a\), then

\[
a^{(p-1)/2} \equiv \legendre{a}{p} \pmod{p}.
\]

## Approach and proof

<!-- Status scaffolding for authors/agents; reader-facing status is in the opening paragraph below. -->

The proof below is a modern cyclic-group argument. Euler studied power-residue criteria; packaging the criterion in \(\F_p^\times\) is textbook-modern, not a transcription of an Euler paper. We admit Fermat’s little theorem and the cyclicity of \(\F_p^\times\).

<div class="theorem-block theorem-block--proof">
<p class="theorem-label">Proof.</p>
<p>
By Fermat’s little theorem (admitted), \(a^{p-1} \equiv 1 \pmod{p}\), so \(a^{(p-1)/2} \equiv \pm 1 \pmod{p}\). The multiplicative group \(\F_p^\times\) is cyclic of even order \(p-1\) (admitted). Writing \(a \equiv g^k \pmod{p}\) for a generator \(g\), one has \(a^{(p-1)/2} \equiv (g^{(p-1)/2})^k \equiv (-1)^k \pmod{p}\). Squares are exactly the even powers of \(g\), so \((-1)^k = \legendre{a}{p}\).
</p>
</div>

Older proofs often argued via factorisations of \(X^{p-1}-1\) in \(\F_p[X]\) [[ireland-rosen-ec](#ref-ireland-rosen-ec)]; the cyclic-group argument above is chosen for brevity once cyclicity is granted.

### Immediate consequences

From the criterion (and the definition):

- There are equally many nonzero residues and nonresidues modulo \(p\), namely \((p-1)/2\) of each.
- Multiplicativity \(\legendre{ab}{p} = \legendre{a}{p}\legendre{b}{p}\) is asserted here without a separate write-up: it follows from the criterion (or from the cyclic-group model of the definition), and we admit that step lightly.
- \(\legendre{-1}{p} = (-1)^{(p-1)/2}\), recovered by taking \(a = -1\).

## Example

Take \(p = 11\) and \(a = 3\). Euler’s criterion asks for \(3^{(11-1)/2} = 3^5\) modulo \(11\):

\[
3^2 = 9,\qquad 3^4 = 81 \equiv 4 \pmod{11},\qquad 3^5 \equiv 4\cdot 3 = 12 \equiv 1 \pmod{11}.
\]

Thus \(3^5 \equiv 1 \pmod{11}\), so \(\legendre{3}{11} = 1\): \(3\) is a quadratic residue modulo \(11\). Indeed \(5^2 = 25 \equiv 3 \pmod{11}\).

## Later developments

Gauss’s lemma evaluates \(\legendre{a}{p}\) by counting negative least absolute residues; the law of quadratic reciprocity is the structural law for Legendre symbols of primes. Both are natural continuations from this article’s relations.

## Sources

- [[legendre-essai](#ref-legendre-essai)] — introduction of the symbol \((a/p)\).
- [[ireland-rosen-ec](#ref-ireland-rosen-ec)] — modern statement and proof packaging.
- [[euler-op](#ref-euler-op)] — pointer to Euler’s work on power residues (not a single pinpointed primary locus in this stub bibliography).
