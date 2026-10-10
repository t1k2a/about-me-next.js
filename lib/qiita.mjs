// This module is called only from getStaticProps; no credential is required.
export async function fetchQiitaItems(fetchImpl = fetch) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetchImpl(
      'https://qiita.com/api/v2/users/t1k2a/items?per_page=100',
      { signal: controller.signal }
    );
    if (!response.ok) throw new Error('Qiita request failed');
    const items = await response.json();
    if (!Array.isArray(items)) throw new Error('Invalid Qiita response');
    return {
      items: items
        .filter((item) => item && !item.private && item.likes_count >= 10)
        .map(({ id, created_at, title, url, likes_count }) => ({
          id, created_at, title, url, likes_count,
        })),
      unavailable: false,
    };
  } catch {
    // Keep the portfolio available during outages and retry ISR in one minute.
    return { items: [], unavailable: true };
  } finally {
    clearTimeout(timeout);
  }
}
