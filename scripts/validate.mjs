#!/usr/bin/env node
/**
 * Validate article frontmatter cross-refs before / during build.
 * - Every prerequisites[] and relations[].target must name an existing article id
 * - Published articles must not reference draft-only targets (dead links in prod)
 * - Duplicate ids / slugs rejected
 * - Landmark sortKey conventions lightly checked
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseYaml } from 'yaml';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const articlesDir = path.join(root, 'src/content/articles');

function parseFrontmatter(raw) {
  if (!raw.startsWith('---')) return null;
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return null;
  return raw.slice(3, end).replace(/^\r?\n/, '');
}

const files = fs
  .readdirSync(articlesDir)
  .filter((f) => f.endsWith('.md') && !f.startsWith('_'));

const entries = [];
let exitCode = 0;
for (const file of files) {
  const raw = fs.readFileSync(path.join(articlesDir, file), 'utf8');
  const block = parseFrontmatter(raw);
  if (block == null) {
    console.error(`No frontmatter in ${file}`);
    exitCode = 1;
    continue;
  }
  let data;
  try {
    data = parseYaml(block);
  } catch (err) {
    console.error(`YAML parse error in ${file}:`, err.message);
    exitCode = 1;
    continue;
  }
  entries.push({ file, data });
}

const byId = new Map();
const bySlug = new Map();
const errors = [];

for (const { file, data } of entries) {
  if (!data?.id) errors.push(`${file}: missing id`);
  if (!data?.slug) errors.push(`${file}: missing slug`);
  if (!data?.status || !['draft', 'published'].includes(data.status)) {
    errors.push(`${file}: status must be draft|published`);
  }
  if (data?.id) {
    if (byId.has(data.id)) errors.push(`${file}: duplicate id ${data.id} (also ${byId.get(data.id)})`);
    else byId.set(data.id, file);
  }
  if (data?.slug) {
    if (bySlug.has(data.slug)) errors.push(`${file}: duplicate slug ${data.slug}`);
    else bySlug.set(data.slug, file);
  }
  const lm = data?.landmark;
  if (!lm || lm.label == null || !('sortKey' in lm) || !lm.precision) {
    errors.push(`${file}: landmark requires label, sortKey, precision`);
  } else if (lm.precision === 'unknown' && lm.sortKey != null) {
    errors.push(`${file}: precision unknown should use sortKey: null`);
  } else if (lm.precision === 'bce' && !(typeof lm.sortKey === 'number' && lm.sortKey < 0)) {
    errors.push(`${file}: precision bce expects negative sortKey`);
  }
}

const publishedIds = new Set(
  entries.filter((e) => e.data.status === 'published').map((e) => e.data.id),
);

for (const { file, data } of entries) {
  const targets = [
    ...(data.prerequisites ?? []).map((id) => ({ id, via: 'prerequisites' })),
    ...(data.relations ?? []).map((r) => ({ id: r.target, via: `relations:${r.type}` })),
  ];
  for (const t of targets) {
    if (!byId.has(t.id)) {
      errors.push(`${file}: unknown internal ref ${t.id} (${t.via})`);
      continue;
    }
    if (data.status === 'published' && !publishedIds.has(t.id)) {
      errors.push(
        `${file}: published article references unpublished target ${t.id} (${t.via}) — would be a dead link in production`,
      );
    }
  }
}

if (errors.length || exitCode) {
  console.error('Validation failed:\n' + errors.map((e) => ` - ${e}`).join('\n'));
  process.exit(1);
}

console.log(`Validated ${entries.length} articles (${publishedIds.size} published). OK.`);
