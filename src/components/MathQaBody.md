## Inline and display

Inline: \(\legendre{a}{p} = a^{(p-1)/2} \bmod p\) via Euler, and a set
\(\N \subset \Z \subset \Q \subset \R \subset \C\).

Display:

\[
\sum_{k=1}^{(p-1)/2} \floor{\frac{2ka}{p}} = \frac{(a-1)(p-1)}{4}
\quad \text{(illustrative identity shape)}
\]

## Aligned block

\[
\begin{aligned}
  \legendre{-1}{p} &= (-1)^{(p-1)/2}, \\
  \legendre{2}{p} &= (-1)^{(p^2-1)/8}.
\end{aligned}
\]

## Long formula (should scroll)

\[
(x_1+x_2+x_3+x_4+x_5+x_6+x_7+x_8)^{2}
= \sum_i x_i^2 + 2\sum_{i<j} x_i x_j
+ \underbrace{0+0+\cdots+0}_{\text{padding to force overflow in narrow viewports}}
+ \legendre{a}{p}\legendre{b}{p}\legendre{c}{p}\legendre{d}{p}
\]
