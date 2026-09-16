/**
 * Central KaTeX macros shared across all articles.
 * Keep this list small and documented in docs/math-subset.md.
 */
export const katexMacros: Record<string, string> = {
  '\\N': '\\mathbb{N}',
  '\\Z': '\\mathbb{Z}',
  '\\Q': '\\mathbb{Q}',
  '\\R': '\\mathbb{R}',
  '\\C': '\\mathbb{C}',
  '\\F': '\\mathbb{F}',
  '\\legendre': '\\left(\\frac{#1}{#2}\\right)',
  '\\abs': '\\left|#1\\right|',
  '\\floor': '\\left\\lfloor#1\\right\\rfloor',
  '\\ceil': '\\left\\lceil#1\\right\\rceil',
};
