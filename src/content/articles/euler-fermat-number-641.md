---
id: euler-fermat-number-641
slug: euler-fermat-number-641
title: "Euler’s factor 641 and Fermat’s conjecture"
summary: "How did Euler find a divisor of a ten-digit Fermat number? A restriction on prime divisors turns the search into a short list; later proofs connect the result to quadratic residues and roots of unity."
type: theorem
domains:
  - number-theory
  - factorization
historicalAuthors:
  - "Euler, Leonhard"
  - "Fermat, Pierre de"
status: published
period: "1700–1749"
landmark:
  label: "1732"
  sortKey: 1732
  precision: exact
  note: "Known by the presentation of E26 on 26 September 1732; printed in 1738. The presentation date is not a documented day of discovery. Euler explained his search retrospectively in E134, written in 1747 and printed in 1750."
prerequisites: []
prerequisiteNotes:
  - "Main proof: divisibility, prime factorization and congruences. Fermat’s little theorem is stated and admitted; multiplicative order and its needed property are introduced."
  - "Lucas's refinement: inverses modulo a prime. The square-root argument is proved in full."
  - "Optional cyclotomic interpretation: polynomials over a field and the bound on their roots. Cyclotomic irreducibility over the rationals is explicitly admitted."
relations:
  - target: euler-criterion-legendre-symbol
    type: reading-prerequisite
    note: "Optional companion for the quadratic-residue viewpoint in Lucas's refinement; not needed for the main proof."
references:
  - id: euler-e26
    citation: "Leonhard Euler, Observationes de theoremate quodam Fermatiano aliisque ad numeros primos spectantibus, E26, Commentarii academiae scientiarum Petropolitanae 6 (1738), 103–107. Jordan Bell's English translation, arXiv:math/0501118v3, pp. 1–2 and p. 1 footnote. Primary text in translation."
    url: https://arxiv.org/pdf/math/0501118
    accessed: "2026-09-29"
  - id: euler-e134
    citation: "Leonhard Euler, Theoremata circa divisores numerorum, E134, written 1747; Novi Commentarii academiae scientiarum Petropolitanae 1 (1750), 20–48. §§29–32; Ian Bruce's translation, English pp. 8–9 and Latin §32 on PDF p. 28. Primary text and translation."
    url: https://www.17centurymaths.com/contents/euler/e134tr.pdf
    accessed: "2026-09-29"
  - id: hardy-wright
    citation: "G. H. Hardy and E. M. Wright, An Introduction to the Theory of Numbers, 6th ed., revised by D. R. Heath-Brown and J. H. Silverman, Oxford University Press, 2008. §2.5, p. 18; chapter II notes, p. 27. Modern proof and attribution."
    url: https://www.chrishenson.net/files/zeta/hardy_intro.pdf
    accessed: "2026-09-29"
  - id: lucas
    citation: "Édouard Lucas, Récréations mathématiques, vol. II, Gauthier-Villars, 1883, Note II, p. 234. Consulted in the English transcription On Fermat and Mersenne numbers, which refers to the Turin Academy communication of 27 January 1878. Primary account in translation."
    url: https://t5k.org/mersenne/literature/lucasEnglish.html
    accessed: "2026-09-29"
  - id: conrad
    citation: "Keith Conrad, Cyclotomic Extensions, §1, Theorem 2.5 and Theorem 2.8 (pp. 1–5). Modern mathematical exposition."
    url: https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf
    accessed: "2026-09-29"
updated: 2026-09-29
---

## Motivation and history

Consider \(2^m+1\), with \(m\) a positive integer. If \(m=rs\), where \(s>1\) is odd, then \(2^r+1\) divides \(2^m+1\). This follows from

\[
x^s+1=(x+1)(x^{s-1}-x^{s-2}+\cdots-x+1).
\]

Thus a necessary condition for \(2^m+1\) to be prime is that \(m\) be a power of two. This singles out the numbers now written

\[
F_n=2^{2^n}+1,\qquad n\geq 0.
\]

Their first five values are

\[
3,\quad 5,\quad 17,\quad 257,\quad 65537,
\]

and all five are prime. Fermat conjectured that the pattern continued indefinitely. Euler’s opening discussion in his 1732 paper places this conjecture beside the problem of obtaining primes larger than a prescribed bound. [[1](#ref-euler-e26)]

The next case was considerably larger:

\[
F_5=2^{32}+1=4\,294\,967\,297.
\]

Its special form excludes the elementary factorization above, but does not rule out numerical factors. A successful search therefore needed information about what those factors could look like.

Euler announced the divisor 641 in a paper presented to the St Petersburg Academy on **26 September 1732**, printed in **1738**. This dates the presentation, not the day of discovery. The announcement does not explain the search. Euler's retrospective account appears in *Theoremata circa divisores numerorum*, written in 1747 and printed in 1750. [[1](#ref-euler-e26); [2](#ref-euler-e134)]

## Statement or definition

**Euler’s counterexample.** With the indexing \(F_n=2^{2^n}+1\),

\[
641\mid F_5.
\]

More explicitly,

\[
2^{32}+1=641\cdot 6\,700\,417.
\]

Since both factors exceed 1, \(F_5\) is composite and Fermat’s universal conjecture is false.

Finding this divisor suffices. Proving that the two displayed factors are themselves prime is a separate task and is not needed to refute the conjecture.

The explanation below has two stages: first make 641 a plausible number to test, then verify that it works.

## Approach and proof

### 1. Turn the shape of the number into a restriction on its divisors

Euler’s later account is explicit about the discovery strategy. In §32 of E134, immediately after his theorem on divisors of sums of powers, he says that restricting the search to primes \(64k+1\) led him to 641, corresponding to \(k=10\). [[2](#ref-euler-e134)]

We justify the reported strategy in modern language. Multiplicative order and the table below organize our exposition; the 1732 announcement did not contain this proof.

Let \(p\) be any prime divisor of \(F_5\). It is odd, and

\[
2^{32}\equiv -1\pmod p.
\]

Squaring gives

\[
2^{64}\equiv 1\pmod p.
\]

Define the **multiplicative order of 2 modulo \(p\)** to be the smallest positive integer \(d\) such that

\[
2^d\equiv 1\pmod p.
\]

We need one elementary fact: whenever \(2^t\equiv1\pmod p\), the integer \(d\) divides \(t\). Indeed, write \(t=qd+r\), with \(0\leq r<d\). Then

\[
2^t\equiv (2^d)^q2^r\equiv 2^r\pmod p.
\]

If \(r>0\), this contradicts the minimality of \(d\). Thus \(r=0\).

In particular, \(d\mid64\). But \(d\) cannot divide 32, because \(2^{32}\equiv-1\), and \(1\neq-1\) modulo the odd prime \(p\). Every proper divisor of 64 divides 32. Therefore

\[
d=64.
\]

Now use **Fermat’s little theorem**, admitted here: for a prime \(p\) and an integer \(a\) not divisible by \(p\),

\[
a^{p-1}\equiv1\pmod p.
\]

Applying it to \(a=2\), the order property gives \(64\mid p-1\). Hence

\[
\boxed{p=64k+1}
\]

for some positive integer \(k\).

This is a necessary condition on a prime divisor, not a guarantee that every prime of this form divides \(F_5\). Its purpose is to discard most candidates before doing any large division.

### 2. Search the permitted progression

For \(k=1,\ldots,10\), the progression gives

\[
65,\ 129,\ 193,\ 257,\ 321,
\]

\[
385,\ 449,\ 513,\ 577,\ 641.
\]

The obvious composites can be removed:

\[
65=5\cdot13,\qquad129=3\cdot43,\qquad321=3\cdot107,
\]

\[
385=5\cdot77,\qquad513=3\cdot171.
\]

The remaining five numbers are prime, as trial division by primes up to their square roots verifies. Testing them gives:

| Candidate \(p\) | Remainder of \(2^{32}+1\) modulo \(p\) |
| --- | ---: |
| 193 | 109 |
| 257 | 2 |
| 449 | 325 |
| 577 | 288 |
| 641 | 0 |

This table reconstructs an increasing search using Euler’s restriction. His retrospective account establishes the filter and the successful value \(k=10\), but does not provide a diary of these individual calculations.

### 3. Verify 641 with two squarings

Starting from \(2^8=256\), square twice and reduce modulo 641. First,

\[
2^{16}=256^2=65\,536=102\cdot641+154.
\]

Therefore

\[
2^{32}\equiv154^2\pmod{641}.
\]

But

\[
154^2=23\,716=37\cdot641-1.
\]

Consequently,

\[
2^{32}\equiv-1\pmod{641},
\]

which proves the claim.

These calculations are an elementary way to carry out the verification once the search has reached 641. They do not require knowing in advance that 641 is prime.

Euler’s strategy has now answered the discovery question: 641 arises naturally from a short, mathematically constrained list.

## Comments

### A short certificate using two expressions for 641

The identities

\[
641=625+16=5^4+2^4,
\]

\[
641=640+1=5\cdot2^7+1
\]

give a second verification. Working modulo 641,

\[
5\cdot2^7\equiv-1
\quad\Longrightarrow\quad
5^4\,2^{28}\equiv1.
\]

But \(5^4\equiv-2^4\), so substitution yields

\[
-2^{32}\equiv1.
\]

The fourth power is the decisive choice: it makes the factor 5 in one identity match the \(5^4\) in the other, leaving exponent \(28+4=32\).

Hardy and Wright attribute this proof to Coxeter's *Introduction to Geometry* (1969), following Kraitchik and Bennett. That identifies a later proof tradition; it establishes neither an exact first date nor sole priority. The date 1969 belongs to the cited edition. [[3](#ref-hardy-wright), pp. 18, 27]

This is a compact certificate once 641 is known. Euler's documented filter supplies what the certificate leaves unexplained: how to obtain candidates.

## Later developments

These optional extensions explain how the search can be improved and why roots of unity govern its possible divisors.

### Lucas's refinement: why 128 replaces 64

For \(n\geq2\), every prime divisor \(p\) of \(F_n\) satisfies

\[
p\equiv1\pmod{2^{n+2}}.
\]

Lucas records this stronger restriction in *Récréations mathématiques* (1883), referring to his communication to the Turin Academy of **27 January 1878**. The proof below is a modern exposition. [[4](#ref-lucas), p. 234]

For \(F_5\), we already know that 2 has order 64 modulo \(p\). To force 64 to divide \((p-1)/2\), it is enough to show that **2 is a square modulo \(p\)**.

Here is how the original equation supplies that square. Let \(r=2^8\), so \(r^4\equiv-1\pmod p\). Write \(r^{-1}\) for its inverse modulo \(p\). Then

\[
r^2+r^{-2}\equiv0\pmod p,
\]

hence

\[
(r+r^{-1})^2\equiv2\pmod p.
\]

Put \(s=r+r^{-1}\). Since \(s^2\equiv2\), we have \(p\nmid s\). Fermat's little theorem gives

\[
2^{(p-1)/2}\equiv s^{p-1}\equiv1\pmod p.
\]

The order 64 must therefore divide \((p-1)/2\), proving \(128\mid p-1\).

For general \(n\geq2\), the main proof gives order \(2^{n+1}\): it divides \(2^{n+1}\) but not \(2^n\). Taking \(r=2^{2^{n-2}}\) again gives \(r^4\equiv-1\), and the same square-root argument proves the stated bound.

Only 257 and 641 survive this stronger filter among primes at most 641. Since \(2^8\equiv-1\pmod{257}\), we have \(2^{32}+1\equiv2\pmod{257}\), leaving 641 as the first successful candidate.

The extra factor of two comes from 2 being a quadratic residue. The site's [article on Euler's criterion](/chronology-mathematics/articles/euler-criterion-legendre-symbol/) develops the general relation between squares and exponent \((p-1)/2\).

### A cyclotomic interpretation

*Additional background: polynomials over a field, including the bound on their number of roots.*

A **primitive 64th root of unity** is an element of multiplicative order 64. The polynomial whose complex roots are precisely these elements is

\[
\Phi_{64}(X)=X^{32}+1.
\]

Thus \(F_5=\Phi_{64}(2)\), and our divisibility proof says that 2 becomes a primitive 64th root modulo 641. This is the cyclotomic meaning of the order calculation. [[5](#ref-conrad), §1]

Since 641 is prime, arithmetic modulo 641 forms a field. Its primality is checked by trial division by \(2,3,5,7,11,13,17,19,23\), the primes below its square root.

The 32 odd powers \(2^{2j+1}\), for \(0\leq j<32\), are distinct modulo 641 because 2 has order 64. Each has 32nd power \(-1\). They are therefore all the roots:

\[
X^{32}+1\equiv
\prod_{j=0}^{31}(X-2^{2j+1})
\pmod{641}.
\]

This is **complete splitting over a finite field**. In contrast, \(\Phi_{64}\) is irreducible over \(\mathbb Q\), by the standard irreducibility theorem for cyclotomic polynomials, admitted here. Polynomial irreducibility over \(\mathbb Q\) does not imply primality after substituting an integer. [[5](#ref-conrad), Theorems 2.5, 2.8]

The search filter has a related limitation: a field may contain primitive 64th roots without 2 being one of them. Modulo 257, for example, 2 has order 16. The congruence condition on \(p\) restricts where a divisor can occur; the order of the particular base 2 decides whether it actually does.

## Sources

The references below were checked on 29 September 2026. Their roles and the limits of the historical reconstruction are:

- **[1](#ref-euler-e26) — primary announcement in translation:** Bell, pp. 1–2; the presentation date is in the p. 1 footnote. The divisor is announced without a search procedure. [Archive record and original](https://scholarlycommons.pacific.edu/euler-works/26/).
- **[2](#ref-euler-e134) — Euler's retrospective account:** Theorem 8 (§29) and Scholium 1 (§32); Bruce's English pp. 8–9 and accompanying Latin §32 on PDF p. 28. These document the filter and \(k=10\), not the sequence of calculations in our table. [Archive dating record](https://scholarlycommons.pacific.edu/euler-works/134/).
- **[3](#ref-hardy-wright) — modern proof and attribution:** §2.5, p. 18; chapter II notes, p. 27. Coxeter's book is cited through this note, not independently consulted to establish priority.
- **[4](#ref-lucas) — later historical account:** Note II, p. 234, read in English transcription. Lucas's original 1878 communication was not consulted; its date is reported by his later account. The theorem is used only for Fermat numbers with \(n\geq2\).
- **[5](#ref-conrad) — modern mathematical exposition:** §1 and Theorems 2.5, 2.8 explain primitive roots, rational cyclotomic theory and the finite-field viewpoint. The specialization to 641 is proved in the article.
