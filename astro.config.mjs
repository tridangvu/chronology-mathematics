import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';
import remarkMath from 'remark-math-extended';
import rehypeKatex from 'rehype-katex';
import { katexMacros } from './src/lib/math-macros.ts';
import { rehypeFailKatex } from './src/lib/rehype-fail-katex.ts';
import { excludeDevPages } from './src/lib/exclude-dev-pages.ts';

/**
 * GitHub Pages project site:
 * https://tridangvu.github.io/chronology-mathematics/
 * @see https://docs.astro.build/en/guides/deploy/github/
 */
export default defineConfig({
  site: 'https://tridangvu.github.io',
  base: '/chronology-mathematics',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/math-qa'),
    }),
    // Strip dev-only routes before Pagefind indexes dist/
    excludeDevPages(['math-qa']),
    pagefind(),
  ],
  markdown: {
    remarkPlugins: [
      [
        remarkMath,
        {
          backslashDelimiters: true,
          singleDollarTextMath: false,
        },
      ],
    ],
    rehypePlugins: [
      [
        rehypeKatex,
        {
          strict: 'error',
          output: 'htmlAndMathml',
          macros: katexMacros,
          trust: false,
        },
      ],
      rehypeFailKatex,
    ],
  },
});
