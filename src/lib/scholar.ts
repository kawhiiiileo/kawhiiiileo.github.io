export interface ScholarSnapshot {
  total: number;
  updated: string;
  byTitle: ReadonlyMap<string, number | null>;
}

function titleKey(title: string) {
  return title.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

export function scholarPaperCitations(snapshot: ScholarSnapshot | null, title: string) {
  return snapshot?.byTitle.get(titleKey(title)) ?? undefined;
}

export async function loadScholarSnapshot(profileUrl: string, signal: AbortSignal): Promise<ScholarSnapshot | null> {
  const authorId = new URL(profileUrl).searchParams.get('user');
  const response = await fetch(import.meta.env.BASE_URL + 'gs_data_shieldsio.json', { cache: 'no-cache', signal });

  if (!response.ok) return null;
  const payload: unknown = await response.json();
  if (!payload || typeof payload !== 'object') return null;

  const { schemaVersion, authorId: snapshotAuthor, message, updated, publications } = payload as Record<string, unknown>;
  if (
    !authorId || schemaVersion !== 1 || snapshotAuthor !== authorId ||
    typeof message !== 'string' || !/^\d+$/.test(message) ||
    typeof updated !== 'string' || !Number.isFinite(Date.parse(updated)) ||
    !Array.isArray(publications) || publications.length === 0
  ) return null;

  const total = Number(message);
  if (!Number.isSafeInteger(total)) return null;

  const byTitle = new Map<string, number | null>();
  for (const entry of publications) {
    if (!entry || typeof entry !== 'object') return null;

    const { id, title, citations } = entry as Record<string, unknown>;
    if (
      typeof id !== 'string' || !id.startsWith(authorId + ':') ||
      typeof title !== 'string' || !title.trim() ||
      typeof citations !== 'number' || !Number.isSafeInteger(citations) || citations < 0
    ) return null;

    const key = titleKey(title);
    if (key) byTitle.set(key, byTitle.has(key) ? null : citations);
  }

  return { total, updated, byTitle };
}
