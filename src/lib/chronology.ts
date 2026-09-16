import type { Article } from './articles';

export type PeriodGroup = {
  period: string;
  sortKey: number;
  articles: Article[];
};

/** Group articles by frontmatter `period`, ordered by min landmark.sortKey. */
export function groupByPeriod(articles: Article[]): PeriodGroup[] {
  const map = new Map<string, Article[]>();
  for (const a of articles) {
    const list = map.get(a.data.period) ?? [];
    list.push(a);
    map.set(a.data.period, list);
  }

  const groups: PeriodGroup[] = [...map.entries()].map(([period, list]) => {
    const keys = list
      .map((a) => a.data.landmark.sortKey)
      .filter((k): k is number => k != null);
    const sortKey = keys.length ? Math.min(...keys) : Number.POSITIVE_INFINITY;
    return { period, sortKey, articles: list };
  });

  groups.sort((a, b) => a.sortKey - b.sortKey || a.period.localeCompare(b.period));
  return groups;
}

export function uniqueDomains(articles: Article[]): string[] {
  return [...new Set(articles.flatMap((a) => a.data.domains))].sort();
}

export function uniquePeriods(articles: Article[]): string[] {
  return groupByPeriod(articles).map((g) => g.period);
}
