---
id: gauss-lemma-quadratic-residues
slug: gauss-lemma-quadratic-residues
title: "Gauss’s lemma on quadratic residues"
summary: "For an odd prime p and an integer a not divisible by p, the Legendre symbol (a/p) equals (−1)^μ, where μ counts how many of the least absolute residues of a, 2a, …, ((p−1)/2)a are negative."
type: theorem
domains:
  - number-theory
  - quadratic-residues
historicalAuthors:
  - "Gauss, Carl Friedrich"
status: published
period: "1800–1849"
landmark:
  label: "1801"
  sortKey: 1801
  precision: exact
  note: "Appears in Disquisitiones Arithmeticae (1801), art. 112–114 in modern numberings of the lemma’s role in quadratic reciprocity."
prerequisites:
  - euler-criterion-legendre-symbol
relations:
  - target: euler-criterion-legendre-symbol
    type: reading-prerequisite
    note: "Uses the Legendre symbol and Euler’s criterion as background."
  - target: quadratic-reciprocity-law
    type: used-historically
    note: "Gauss used the lemma as a step toward quadratic reciprocity."
references:
  - id: gauss-da
    citation: "C. F. Gauss, Disquisitiones Arithmeticae, 1801 (Latin). English translation: Arthur A. Clarke, Yale University Press, 1966; see articles treating least absolute residues and the lemma used in the proof of quadratic reciprocity."
  - id: ireland-rosen
    citation: "Kenneth Ireland and Michael Rosen, A Classical Introduction to Modern Number Theory, 2nd ed., Springer, 1990, §5.2 (Gauss’s lemma)."
  - id: niven
    citation: "Ivan Niven, Herbert S. Zuckerman, and Hugh L. Montgomery, An Introduction to the Theory of Numbers, 5th ed., Wiley, 1991, §3.3."
updated: 2026-09-16
---

<!-- Landmarks: frontmatter/header only. Migration note: see docs/editorial-migration-notes.md for C3 depth gaps. -->

## Motivation and history

Gauss introduced a counting argument on least absolute residues in the *Disquisitiones Arithmeticae* (1801) as part of his apparatus for quadratic residues and the law of quadratic reciprocity [[gauss-da](#ref-gauss-da)]. The practical question is: given an odd prime \(p\) and an integer \(a\) not divisible by \(p\), how can one decide the sign of the Legendre symbol \(\legendre{a}{p}\) by a finite, transparent count rather than by searching for a square root modulo \(p\)?

Modern textbooks isolate the argument as “Gauss’s lemma” and use it as a short bridge between Euler’s criterion and reciprocity [[ireland-rosen](#ref-ireland-rosen)] [[niven](#ref-niven)].

## Statement or definition

Let \(p\) be an odd prime and let \(a\) be an integer not divisible by \(p\). For each integer \(k\) with \(1 \le k \le (p-1)/2\), choose the unique integer \(r_k\) in the open interval \(\bigl(-(p/2),\, p/2\bigr)\) such that

\[
r_k \equiv k a \pmod{p}.
\]

(The value \(r_k\) is the **least absolute residue** of \(ka\) modulo \(p\).) Let \(\mu\) be the number of indices \(k\) for which \(r_k < 0\). Then the Legendre symbol satisfies

\[
\legendre{a}{p} = (-1)^{\mu}.
\]

In particular, \(a\) is a quadratic residue modulo \(p\) if and only if \(\mu\) is even.

## Approach and proof

<!-- Status scaffolding for authors/agents; reader-facing status is in the opening paragraph below. -->

What follows is a modern textbook packaging of Gauss’s counting argument: the same counting idea as in the *Disquisitiones Arithmeticae*, rewritten in \(\F_p\) language rather than transcribed from the Latin text.

Work in the field \(\F_p\). The integers

\[
1,\; 2,\; \dots,\; \frac{p-1}{2}
\]

are pairwise incongruent modulo \(p\), and none is \(0\). Multiplying by \(a \not\equiv 0\) therefore yields another set of \((p-1)/2\) nonzero residues. Replacing each product \(ka\) by its least absolute residue \(r_k\) does not change the residue class, so the set \(\{\abs{r_k}\}\) is a permutation of \(\{1,2,\dots,(p-1)/2\}\).

Consequently

\[
\prod_{k=1}^{(p-1)/2} (k a) \equiv \prod_{k=1}^{(p-1)/2} r_k \pmod{p}.
\]

Each negative \(r_k\) contributes a factor \(-1\) when we write \(r_k = -\abs{r_k}\), and there are exactly \(\mu\) such factors, whence

\[
a^{(p-1)/2} \prod_{k=1}^{(p-1)/2} k \equiv (-1)^{\mu} \prod_{k=1}^{(p-1)/2} k \pmod{p}.
\]

The product of the \(k\) is nonzero modulo \(p\), so it cancels, and we obtain

\[
a^{(p-1)/2} \equiv (-1)^{\mu} \pmod{p}.
\]

Euler’s criterion (admitted as a prerequisite) identifies the left-hand side with \(\legendre{a}{p}\), which completes the proof.

## Example

Take \(p = 7\) and \(a = 3\). Then \((p-1)/2 = 3\), and the products are \(3,6,9\). Least absolute residues modulo \(7\) are \(3\), \(-1\), and \(2\). Exactly one is negative, so \(\mu = 1\) and \(\legendre{3}{7} = -1\). Direct check: the squares modulo \(7\) are \(0,1,2,4\), so \(3\) is indeed a nonresidue.

## Comments

The same counting can be phrased with representatives in \(\{1,\dots,p-1\}\) and a floor-function formula for \(\mu\); see Ireland–Rosen for that packaging [[ireland-rosen](#ref-ireland-rosen)].

## Later developments

Gauss used the lemma as a step toward the law of quadratic reciprocity; see that article for the dependence. Expanding the lattice-count comparison that finishes a Gauss-lemma proof of reciprocity remains work on the reciprocity page (an open C3 gap there), not a defect of the present lemma.

## Sources

- [[gauss-da](#ref-gauss-da)] — original locus in the *Disquisitiones*.
- [[ireland-rosen](#ref-ireland-rosen)], [[niven](#ref-niven)] — modern expositions of the lemma.
