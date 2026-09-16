import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'articles'>;

const isProd = import.meta.env.PROD;

/** Published-only in production; drafts included in local/dev preview. */
export async function getArticles(opts?: { includeDrafts?: boolean }): Promise<Article[]> {
  const includeDrafts = opts?.includeDrafts ?? !isProd;
  const all = await getCollection('articles');
  return all
    .filter((a) => includeDrafts || a.data.status === 'published')
    .sort((a, b) => {
      const ka = a.data.landmark.sortKey;
      const kb = b.data.landmark.sortKey;
      if (ka == null && kb == null) return a.data.title.localeCompare(b.data.title);
      if (ka == null) return 1;
      if (kb == null) return -1;
      if (ka !== kb) return ka - kb;
      return a.data.title.localeCompare(b.data.title);
    });
}

export async function getArticleById(id: string, opts?: { includeDrafts?: boolean }) {
  const articles = await getArticles(opts);
  return articles.find((a) => a.data.id === id);
}

export function articleHref(article: Article): string {
  const base = import.meta.env.BASE_URL;
  return `${base}articles/${article.data.slug}/`;
}

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const cleaned = path.replace(/^\//, '');
  return `${base}${cleaned}`;
}

/** Resolve prerequisite / relation targets that exist in the visible set. */
export function resolveVisible(
  ids: string[],
  visible: Article[],
): Article[] {
  const map = new Map(visible.map((a) => [a.data.id, a]));
  return ids.map((id) => map.get(id)).filter((a): a is Article => Boolean(a));
}

export function continuationsOf(article: Article, visible: Article[]): Article[] {
  return visible.filter(
    (other) =>
      other.data.id !== article.data.id &&
      (other.data.prerequisites.includes(article.data.id) ||
        other.data.relations.some(
          (r) =>
            r.target === article.data.id &&
            (r.type === 'reading-prerequisite' || r.type === 'used-historically'),
        )),
  );
}
