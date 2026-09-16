import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Historical landmark date model.
 * - sortKey: integer chronological key for ordering (BCE years negative; unknown → null + note)
 * - precision: how the display date should be read
 */
const landmarkDateSchema = z.object({
  label: z.string().describe('Human-readable date label, e.g. "1801", "c. 300 BCE", "unknown"'),
  sortKey: z
    .number()
    .nullable()
    .describe('Numeric sort key: positive CE year, negative BCE year as -year, null if unknown'),
  precision: z.enum(['exact', 'approx', 'uncertain', 'unknown', 'bce']),
  note: z.string().optional(),
});

const relationTypeSchema = z.enum([
  'reading-prerequisite',
  'used-historically',
  'generalizes',
  'alternate-proof',
  'application',
]);

const relationSchema = z.object({
  target: z.string().describe('Stable article id of the related entry'),
  type: relationTypeSchema,
  note: z.string().optional(),
});

const bibliographicRefSchema = z.object({
  id: z.string(),
  citation: z.string(),
  url: z.string().url().optional(),
  accessed: z.string().optional(),
});

/**
 * Optional reserved fields for a future « problems path » UI.
 * Present in schema so authors can start tagging; no UI consumes them yet.
 */
const problemsPathReserveSchema = z
  .object({
    problemTags: z.array(z.string()).optional(),
    difficulty: z.enum(['intro', 'intermediate', 'advanced']).optional(),
    exerciseIds: z.array(z.string()).optional(),
  })
  .optional();

const articles = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    id: z
      .string()
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'id must be kebab-case')
      .describe('Stable article id (never reuse)'),
    slug: z
      .string()
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      .describe('URL slug; usually matches id'),
    title: z.string().min(1),
    summary: z.string().min(1),
    type: z.enum([
      'theorem',
      'definition',
      'method',
      'survey',
      'biography',
      'landmark',
      'note',
    ]),
    domains: z.array(z.string()).min(1),
    historicalAuthors: z.array(z.string()).default([]),
    status: z.enum(['draft', 'published']),
    landmark: landmarkDateSchema,
    prerequisites: z.array(z.string()).default([]).describe('Stable ids of reading prerequisites'),
    relations: z.array(relationSchema).default([]),
    references: z.array(bibliographicRefSchema).default([]),
    period: z
      .string()
      .describe('Chronology period group label, e.g. "1800–1849" or "Classical antiquity"'),
    updated: z.coerce.date().optional(),
    problemsPath: problemsPathReserveSchema,
  }),
});

export const collections = { articles };
