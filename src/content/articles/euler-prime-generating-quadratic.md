---
id: euler-prime-generating-quadratic
slug: euler-prime-generating-quadratic
title: "Euler’s quadratic: forty primes, and the arithmetic behind them"
summary: "How can one find a quadratic with many consecutive prime values? A sieve leads to Euler’s example; an elementary descent proves the forty-prime run, and quadratic fields explain its exceptional arithmetic."
type: theorem
domains:
  - number-theory
  - prime-values
  - quadratic-fields
historicalAuthors:
  - "Euler, Leonhard"
status: published
period: "1750–1799"
landmark:
  label: "[1772]"
  sortKey: 1772
  precision: uncertain
  note: "Editorial dating of an undated letter excerpt to Johann III Bernoulli; first published in 1774, in the academy volume for 1772. This is not a documented day of discovery."
prerequisites: []
prerequisiteNotes:
  - "Main proof: divisibility, congruences, prime factorization in the integers, and completing the square."
  - "Advanced comments: quadratic fields, rings, ideals and quotient rings. General auxiliary theorems are explicitly admitted."
  - "Later developments: elementary asymptotic notation and integration for the conjectural frequency; the Legendre symbol is explained locally."
relations:
  - target: euler-criterion-legendre-symbol
    type: reading-prerequisite
    note: "Optional background for the Legendre-symbol notation in the frequency formula; not needed for the elementary proof."
  - target: quadratic-reciprocity-law
    type: application
    note: "Apply reciprocity to decide which primes divide a value, using the discriminant −163."
references:
  - id: euler-correspondence
    citation: "Emil A. Fellmann and Gleb K. Mikhajlov (eds.), Leonhard Eulers Briefwechsel mit Daniel, Johann II und Johann III Bernoulli, Opera omnia IV A, vol. 3, online edition 2017. Letter 112 / R 233, pp. 817–818 (PDF pp. 828–829). Primary text with critical editorial dating."
    url: https://eterna.unibas.ch/publbez/article/view/1193
    accessed: "2026-09-28"
  - id: euler-e461
    citation: "Leonhard Euler, Extrait d’une lettre de M. Euler le père à M. Bernoulli concernant le Mémoire imprimé parmi ceux de 1771, p. 318, E461. Nouveaux Mémoires de l’Académie royale des sciences de Berlin, volume for 1772, printed 1774, pp. 35–36. Bibliographic record; original scan not consulted."
    url: https://scholarlycommons.pacific.edu/euler-works/461/
    accessed: "2026-09-28"
  - id: pollack-snyder
    citation: "Paul Pollack and Noah Snyder, A Quick Route to Unique Factorization in Quadratic Orders, American Mathematical Monthly 128 (2021), 554–558. Theorem 1, Example (ii), §2 and final remark (author’s PDF pp. 1–4). Modern research article."
    url: https://www.pollack-math.net/shortUFT.pdf
    accessed: "2026-09-28"
  - id: milne
    citation: "J. S. Milne, Algebraic Number Theory, version 3.08 (2020), Chapters 2–4; “Norms of ideals,” Proposition 4.2 and Theorem 4.3 (pp. 68–70), and Aside 4.30 (p. 83). Mathematical reference."
    url: https://www.jmilne.org/math/CourseNotes/ANTc.pdf
    accessed: "2026-09-28"
  - id: perrin
    citation: "Daniel Perrin, Pourquoi y a-t-il beaucoup de nombres premiers de la forme n²+n+41 ?, §§2.3–2.4, pp. 12–15. Mathematical exposition."
    url: https://www.imo.universite-paris-saclay.fr/~daniel.perrin/journeedu2311/redaction2311e.pdf
    accessed: "2026-09-28"
  - id: bateman-horn
    citation: "Soren Laing Aletheia-Zomlefer, Lenny Fukshansky and Stephan Ramon Garcia, The Bateman–Horn conjecture: Heuristic, history, and applications, Expositiones Mathematicae 38 (2020), 430–479. §§3.6 and 6.4; equations (6.4.4)–(6.4.6), author’s PDF p. 29. Research exposition."
    url: https://www1.cmc.edu/pages/faculty/lenny/papers/bateman-horn.pdf
    accessed: "2026-09-28"
  - id: conrad
    citation: "Keith Conrad, Patterns in Primes, §2, especially Conjecture 2.3 and pp. 2–3. Mathematical exposition."
    url: https://kconrad.math.uconn.edu/math3240s20/handouts/prime-patterns-1.pdf
    accessed: "2026-09-28"
  - id: kravitz-woo-xu
    citation: "Noah Kravitz, Katharine Woo and Max Wenqiang Xu, The distribution of prime values of random polynomials, arXiv:2512.03292v1, 2 December 2025, §§1.1–1.2. Research preprint; used for current context and averaged results."
    url: https://arxiv.org/html/2512.03292v1
    accessed: "2026-09-28"
updated: 2026-09-28
---

## Motivation and history

The sequence

\[
41,\ 43,\ 47,\ 53,\ 61,\ 71,\ 83,\ 97,\ 113,\ 131,\ldots
\]

begins with primes. Its successive increments are \(2,4,6,8,\ldots\), so its term with index \(n\), starting at \(n=0\), is

\[
f(n)=41+2(1+\cdots+n)=n^2+n+41.
\]

Why should such an elementary rule avoid composite numbers for so long? And how could someone find the constant \(41\) in the first place?

Euler reported the phenomenon in a letter to **Johann III Bernoulli**, using the equivalent expression \(x^2-x+41\). The surviving excerpt ends by announcing that its first forty terms are prime. Most of the preceding discussion concerns divisibility and the primality of \(2^{31}-1\). It does not explain how he selected \(41\). [[1](#ref-euler-correspondence), letter 112, pp. 817–818]

**Dating matters.** The critical edition assigns the excerpt to **[1772]**, while explicitly describing it as having no place or date. Its first publication is in the *Nouveaux Mémoires* volume for **1772**, printed in **1774**, pp. 35–36. Thus 1772 is an editorially assigned date, not a documented day of discovery. [[1](#ref-euler-correspondence)–[2](#ref-euler-e461)]

The historical evidence establishes Euler’s observation. The search below is an explicit **pedagogical reconstruction**, followed by a modern proof; it is not presented as a record of Euler’s private calculations.

## Statement or definition

**Proposition.** For every integer \(n\) with \(0\le n\le39\),

\[
f(n)=n^2+n+41
\]

is prime. These are forty distinct primes, from \(f(0)=41\) to \(f(39)=1601\). The next value is composite:

\[
f(40)=1681=41^2.
\]

The alternative expression has the same values after shifting the index:

\[
n^2-n+41=f(n-1).
\]

It therefore gives the same forty distinct primes for \(1\le n\le40\). The constant term is **positive \(41\)** in both expressions.

## Approach and proof

### Finding a family worth searching

A useful first requirement is to avoid even values. Since \(n(n+1)\) is always even, every value of

\[
f_a(n)=n(n+1)+a
\]

is odd when \(a\) is odd. This makes \(f_a\) a natural family to investigate.

There is also a normalization behind this choice. A monic quadratic with integer coefficients and an odd linear coefficient can be written as

\[
g(X)=X^2+(2k+1)X+c.
\]

Translating its input gives

\[
g(n-k)=n^2+n+c-k(k+1).
\]

Thus our family covers all such quadratics up to an integer translation. This does not cover every quadratic, and translating the input changes where an initial run begins.

If the prime run starts at \(n=0\), then \(a=f_a(0)\) must itself be prime. There is also an unavoidable stopping point:

\[
f_a(a-1)=a^2.
\]

For a given prime \(a\), the strongest possible initial run therefore consists of all \(a-1\) values with \(0\le n\le a-2\).

The search now has a precise goal: **find primes \(a\) for which this entire interval survives.**

### Choosing the constant by excluding small divisors

Testing each value separately wastes information. Instead, ask which constants make a small prime unable to divide *any* value.

Modulo \(3\), the product \(n(n+1)\) takes only the residues \(0,2\). Consequently, choosing

\[
a\equiv2\pmod3
\]

prevents divisibility by \(3\).

Modulo \(5\), the possible residues of \(n(n+1)\) are \(0,1,2\). Thus either of the choices

\[
a\equiv1,2\pmod5
\]

prevents divisibility by \(5\).

Choose a modest search window in advance: prime constants \(5<a\le50\). These two filters leave exactly

\[
11,\quad17,\quad41,\quad47.
\]

The last candidate fails immediately: \(f_{47}(1)=49\). Passing two filters is not enough; divisibility by \(7\) catches what they missed. Direct calculation gives:

| Constant \(a\) | Initial prime inputs | First composite value |
|---|---|---|
| \(11\) | \(0\le n\le9\) | \(f_{11}(10)=121\) |
| \(17\) | \(0\le n\le15\) | \(f_{17}(16)=289\) |
| \(41\) | \(0\le n\le39\) | \(f_{41}(40)=1681\) |
| \(47\) | \(n=0\) only | \(f_{47}(1)=49\) |

This supplies a reproducible route to Euler’s example: choose a parity-friendly family, sieve its constants, and investigate the survivors. The search window \(50\) is a practical cutoff, not a theorem predicting the winning constant. The table records finite computations; the proof below explains the forty-prime run without testing all forty values.

### Turning divisibility into a question about squares

Completing the square gives

\[
4f_a(n)=(2n+1)^2-(1-4a).
\]

For an odd prime \(p\), multiplication by \(2\) permutes the residue classes modulo \(p\). Therefore \(p\) divides some value of \(f_a\) exactly when \(1-4a\) is a square modulo \(p\), including zero.

For \(a=41\), the discriminant is

\[
1-4a=-163.
\]

The following small table excludes three possible prime divisors:

| \(p\) | \(-163\bmod p\) | Squares modulo \(p\) |
|---|---|---|
| \(3\) | \(2\) | \(0,1\) |
| \(5\) | \(2\) | \(0,1,4\) |
| \(7\) | \(5\) | \(0,1,2,4\) |

Together with parity, this proves that **none of \(2,3,5,7\) divides any value of \(f\)**.

Why should these four checks suffice? The next argument will use symmetry to make a root modulo \(q\) small enough that its polynomial value is less than \(q^2\). The required inequality is

\[
\frac{q^2+163}{4}<q^2
\quad\Longleftrightarrow\quad
q^2>\frac{163}{3}.
\]

Since \(\sqrt{163/3}\approx7.37\), the primes \(2,3,5,7\) are exactly the exceptions that require direct checks. Every larger prime is within reach of the descent.

### A descent that rules out every prime below 41

**Plan.** If a small prime divides a value, move to a small input with the same divisibility. A value strictly between \(q\) and \(q^2\) must then have a prime factor smaller than \(q\). Choosing \(q\) minimal will make this impossible.

The following is a complete elementary proof in modern language, not a proof transcribed from Euler's letter. Its small-representative and minimal-prime argument is closely related to the descent in Pollack–Snyder, §2; here it is applied directly in the integers. [[3](#ref-pollack-snyder)]

Let \(q\) be the smallest prime dividing at least one integer value of \(f\). Such a prime exists, since \(f(0)=41\).

Suppose \(q<41\). The preceding checks imply \(q\ge11\).

Choose a root of \(f\) modulo \(q\), represented by an integer \(s\) with \(0\le s\le q-1\). The symmetry

\[
f(-n-1)=f(n)
\]

shows that \(q-1-s\) also represents a root. Taking the smaller of these two representatives gives an integer \(r\) in the interval

\[
0\le r\le\frac{q-1}{2}.
\]

For that representative, \(q\mid f(r)\), while

\[
q<41\le f(r)\le\frac{q^2+163}{4}<q^2.
\]

The last inequality follows from \(q\ge11\), which implies \(163<3q^2\).

Write \(f(r)=qm\). These bounds give \(1<m<q\). Any prime divisor of \(m\) is then a prime smaller than \(q\) dividing a value of \(f\), contradicting the definition of \(q\).

Hence **every prime divisor of every integer value of \(f\) is at least \(41\)**.

Finally, for \(0\le n\le39\),

\[
1<f(n)\le1601<41^2.
\]

A composite number whose prime divisors are all at least \(41\) would be at least \(41^2\). Therefore all forty values are prime. Their distinctness follows from \(f(n+1)-f(n)=2n+2>0\). This completes the proof.

The decisive idea is to replace a potentially large input by a small congruent input, then use the size of its value to force a smaller prime divisor.

## Comments

### Why the discriminant points toward a quadratic field

The appearance of \(-163\) suggests introducing

\[
K=\mathbb Q(\sqrt{-163}),
\qquad
\omega=\frac{1+\sqrt{-163}}2.
\]

The standard formula for quadratic rings of integers gives \(\mathcal O_K=\mathbb Z[\omega]\), since \(-163\) is square-free and congruent to \(1\) modulo \(4\). We admit this general formula here. [[4](#ref-milne), Chapter 2] For integers \(x,y\), conjugation gives \(\omega+\bar\omega=1\) and \(\omega\bar\omega=41\), so

\[
N_{K/\mathbb Q}(x+y\omega)=x^2+xy+41y^2.
\]

In particular,

\[
f(n)=N_{K/\mathbb Q}(n+\omega).
\]

Euler’s polynomial is thus a slice, with \(y=1\), of a binary quadratic norm form. Completing the square again gives

\[
N(x+y\omega)=\left(x+\frac y2\right)^2+\frac{163}{4}y^2.
\]

If \(y\ne0\), this integer norm is at least \(41\). If \(y=0\), it is a square. Consequently, **no element of \(\mathcal O_K\) has norm equal to a prime below \(41\)**. This is the same threshold that governed the elementary proof. [[5](#ref-perrin), §2.3.1]

### What principal ideals would explain

The ideal norm of a nonzero integral ideal \(I\) is its index \([\mathcal O_K:I]\). For a nonzero element \(\alpha\), we use the standard identity relating principal ideal norms to element norms:

\[
N((\alpha))=|N_{K/\mathbb Q}(\alpha)|.
\]

This identity is admitted here. It suggests how to use the absence of small element norms: turn a hypothetical small divisor into a principal ideal of that norm. [[4](#ref-milne), Propositions 4.1(c) and 4.2(a), p. 69]

Suppose a prime \(p<41\) divided \(f(r)\). Substitution \(\omega\mapsto-r\) would define a surjective ring map

\[
\mathcal O_K\longrightarrow\mathbb F_p,
\]

because \((-r)^2-(-r)+41\equiv0\pmod p\). Its kernel \(I\) would satisfy \(\mathcal O_K/I\cong\mathbb F_p\), hence \(N(I)=p\).

**If every ideal were principal**, we could write \(I=(\alpha)\). The norm identity would then force an element of norm \(p\), contradicting the norm bound above.

The ideal class number \(h(K)\) counts ideal classes modulo principal fractional ideals. The equality \(h(K)=1\) means every nonzero ideal is principal; for a ring of integers, this is equivalent to unique factorization of elements. Thus **class number one would convert a possible small prime divisor into an impossible small norm**. We now verify precisely that missing ingredient.

### Establishing class number one

We use unique factorization of nonzero ideals, multiplicativity of ideal norms, and **Minkowski's bound**, without proving these general theorems. Every nonzero prime ideal lies above a rational prime \(p\) and has norm a positive power of \(p\). In this imaginary quadratic field, Minkowski's bound says that every ideal class contains an integral ideal \(I\) satisfying

\[
N(I)\le\frac2\pi\sqrt{163}<9.
\]

These are standard results about rings of integers. [[4](#ref-milne), Chapter 3, Proposition 4.2 and Theorem 4.3]

The polynomial of \(\omega\) is \(T^2-T+41\). Our earlier checks, with the substitution \(T=-n\), show that it is irreducible modulo \(2,3,5,7\). For each such prime,

\[
\mathcal O_K/(p)\cong\mathbb F_p[T]/(T^2-T+41).
\]

The right-hand side is a field with \(p^2\) elements. Thus \((p)\) is itself a prime ideal: \(p\) is **inert**, and its ideal norm is \(p^2\). [[3](#ref-pollack-snyder), Example (ii)]

The only prime ideal of norm at most \(8\) is therefore \((2)\), whose norm is \(4\). Unique ideal factorization and multiplicativity of the norm show that an integral ideal of norm at most \(8\) is either \(\mathcal O_K\) or \((2)\): even \((2)^2\) already has norm \(16\). Both possibilities are principal. Minkowski's bound now gives

\[
h(K)=1.
\]

This completes the structural explanation, using the same four small-prime checks as the elementary proof and the stated general theorems.

### Why 41 is the last example of its particular kind

A theorem of **Frobenius (1912) and Rabinowitsch (1913)** makes the relationship exact. For an integer \(a\ge2\),

\[
n^2+n+a
\]

is prime for every integer \(0\le n\le a-2\) if and only if the quadratic order

\[
\mathbb Z\left[\frac{1+\sqrt{1-4a}}2\right]
\]

is a unique factorization domain. This equivalence is quoted here, rather than proved. [[3](#ref-pollack-snyder), final remark]

The classification of imaginary quadratic fields of class number one, restricted to fundamental discriminants \(D=1-4a\le-7\), gives

\[
D=-7,-11,-19,-43,-67,-163.
\]

Consequently, the possible constants are exactly

\[
a=2,\ 3,\ 5,\ 11,\ 17,\ 41.
\]

The classification is the deep Heegner–Baker–Stark theorem, also used here without proof. A quadratic order with unique factorization must be integrally closed, so it must be the full ring of integers; this qualification matters when applying the field classification. [[3](#ref-pollack-snyder)–[4](#ref-milne), Aside 4.30]

The conclusion concerns the **maximal initial run through \(a-2\) in this particular family**. It does not place a universal limit of forty on prime runs for arbitrary polynomials or shifted intervals.

## Later developments

### Infinitely many prime values?

The finite run is proved. As of September 2026, the assertion that \(n^2+n+41\) is prime for infinitely many nonnegative integers \(n\) remains an open problem. The modern sources explicitly distinguish results averaged over families of polynomials from this unresolved question for a specified nonlinear polynomial. [[7](#ref-conrad), §2; [8](#ref-kravitz-woo-xu), §1.1]

It is a special case of **Bunyakovsky’s conjecture (1854)**: an irreducible nonconstant polynomial with integer coefficients, positive leading coefficient, and no prime dividing all its integer values should take prime values infinitely often. [[7](#ref-conrad), §2]

Euler’s polynomial satisfies these conditions. Its negative discriminant makes it irreducible over \(\mathbb Q\), and a fixed prime divisor would have to divide both \(f(0)=41\) and \(f(1)=43\), which are coprime.

Class number one does not resolve this infinitude question. Controlling prime norms while allowing both coordinates \(x,y\) to vary is much less restrictive than requiring \(y=1\).

### Predicting the frequency: Bateman–Horn

Let \(\pi_f(X)\) count the integers \(0\le n\le X\) for which \(f(n)\) is prime. For each prime \(p\), let \(\rho_f(p)\) be the number of roots of \(f\) modulo \(p\).

The **Bateman–Horn conjecture (1962)** predicts

\[
\pi_f(X)\sim C_f\int_2^X\frac{dt}{\log f(t)},
\]

where the product is taken over primes in increasing order:

\[
C_f=\prod_p\frac{1-\rho_f(p)/p}{1-1/p}.
\]

The numerator measures how often polynomial values avoid divisibility by \(p\); the denominator is the corresponding proportion among unrestricted integers.

For Euler’s polynomial, \(\rho_f(2)=0\). For odd \(p\),

\[
\rho_f(p)=1+\left(\frac{-163}{p}\right),
\]

where the Legendre symbol takes the values \(0,1,-1\) according as \(-163\) is zero, a nonzero square, or a nonsquare modulo \(p\).

Each prime below \(41\) contributes a factor \(p/(p-1)>1\). The full constant is approximately \(6.64\). Since \(f(t)\sim t^2\), we have \(\log f(t)\sim2\log t\). The conjecture therefore predicts

\[
\pi_f(X)\sim\frac{C_f}{2}\frac{X}{\log X},
\qquad
\frac{C_f}{2}\approx3.32.
\]

Here \(\sim\) means that the ratio tends to \(1\) as \(X\to\infty\); the decimal is only an approximation to the exact constant.

This quantifies the advantage created by avoiding small prime divisors, while predicting that the proportion of prime outputs eventually tends to zero. It remains a conjectural frequency, not a consequence of the forty-term proof. [[6](#ref-bateman-horn), §§3.6 and 6.4]

### What averaging can prove, and where to read next

Recent progress concerns large families of polynomials: if their coefficients vary over sufficiently large ranges, averaged versions of Bateman–Horn can be proved. Kravitz, Woo and Xu's 2025 preprint studies such averages and the distribution of prime values. The distinction is essential: a statement true for almost all members of a growing family need not settle a particular member such as Euler's polynomial. [[8](#ref-kravitz-woo-xu), §§1.1–1.2]

These developments belong to the nineteenth century and later. Three reading routes extend the questions of this article:

- **A divisibility tool:** [quadratic reciprocity](/chronology-mathematics/articles/quadratic-reciprocity-law/) helps decide when \(-163\) is a square modulo \(p\), hence which primes can divide a polynomial value. The site's [Legendre-symbol article](/chronology-mathematics/articles/euler-criterion-legendre-symbol/) introduces the notation.
- **A structural interpretation:** [Milne, Chapter 4, “Binary quadratic forms”](https://www.jmilne.org/math/CourseNotes/ANTc.pdf#page=82) relates ideal classes to classes of forms, putting the norm \(x^2+xy+41y^2\) into a general framework.
- **A conjectural frequency and a search method:** [Aletheia-Zomlefer–Fukshansky–Garcia, §6.4](https://www1.cmc.edu/pages/faculty/lenny/papers/bateman-horn.pdf#page=28) explains Euler's local factors and uses congruences to construct other polynomials with large predicted prime frequencies.

## Sources

The numbered references below distinguish historical evidence from modern mathematics. Links and cited passages were checked on 28 September 2026.

- **[1](#ref-euler-correspondence) — primary text in a critical edition:** letter 112 / R 233, pp. 817–818. The heading supplies the editorial date [1772]; the note identifies the excerpt as undated and records publication in 1774. The final paragraph gives the polynomial, without a discovery procedure.
- **[2](#ref-euler-e461) — original-publication record:** identifies E461 and its printed location. Its “Written Date” field says 1774; this article follows the critical edition for the letter's assigned date. The original journal scan was not consulted; the letter's text was read in [1].
- **[3](#ref-pollack-snyder) — modern research article:** Theorem 1, Example (ii), §2 and the final remark support the quadratic-order interpretation, the related descent mechanism, and the Frobenius–Rabinowitsch equivalence. The historical 1912/1913 papers themselves were not consulted.
- **[4](#ref-milne) — mathematical reference:** Chapters 2–4 supply the explicitly admitted facts about rings of integers, ideal norms and ideal factorization; Theorem 4.3 gives Minkowski's bound; Aside 4.30 records the class-number-one classification.
- **[5](#ref-perrin) — mathematical exposition:** §§2.3–2.4 explain the norm obstruction and its relation to prime divisors. Used for this mathematical interpretation, not as the authority for the historical date.
- **[6](#ref-bateman-horn) — research exposition:** §§3.6 and 6.4, especially equations (6.4.4)–(6.4.6), give the local factors and numerical constant. The approximate constant is taken from this source, not independently recomputed to the displayed precision.
- **[7](#ref-conrad) — mathematical exposition:** §2, especially Conjecture 2.3 and pp. 2–3, states Bunyakovsky's conditions and distinguishes the known linear case from the nonlinear problem.
- **[8](#ref-kravitz-woo-xu) — recent research preprint:** §§1.1–1.2 confirm the unresolved fixed-polynomial problem and describe progress by averaging. Only these introductory claims are used; the paper's technical proofs are not reproduced here.

The constant sieve and numerical examples are reproducible calculations presented as a pedagogical reconstruction. Neither this search nor the modern elementary proof is attributed to Euler's documented discovery process.
