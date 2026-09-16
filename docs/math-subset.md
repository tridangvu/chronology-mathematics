# Supported math subset

Build-time rendering via **KaTeX** (`rehype-katex`) after **remark-math-extended**.

## Delimiters

| Form | Meaning |
| --- | --- |
| `\( ... \)` | Inline math (preferred) |
| `\[ ... \]` | Display math (preferred) |
| `$$ ... $$` | Display math (also supported) |
| `$ ... $` | **Not supported** (`singleDollarTextMath: false`) |

## Output

- KaTeX HTML + MathML (`output: 'htmlAndMathml'`).
- CSS and fonts are served from this site (`public/katex.min.css`, `public/fonts/`).
- Display math containers scroll horizontally when formulas are wider than the measure.

## Macros

Defined in `src/lib/math-macros.ts`:

- `\N \Z \Q \R \C \F`
- `\legendre{a}{p}` → Legendre symbol
- `\abs{x}`, `\floor{x}`, `\ceil{x}`

## Environments / features

Supported insofar as KaTeX supports them, including:

- Superscripts/subscripts, fractions, `\frac`, `\binom`
- `\begin{aligned}`, `\begin{cases}`, `\begin{matrix}` (and related)
- Greek letters, `\pmod`, `\bmod`, `\equiv`, `\sum`, `\prod`
- `\text{...}`, `\underbrace`

**Not relied on:** full LaTeX (no `\newcommand` in articles, no TikZ, no `multline` unless verified in KaTeX).

## Errors

Invalid math **fails the build**. The error message includes the article path. Fix the expression or temporarily mark surrounding work carefully — do not disable failure modes casually.
