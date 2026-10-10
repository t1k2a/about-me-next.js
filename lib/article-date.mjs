export function formatArticleDate(dateString) {
  const parts = new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).formatToParts(new Date(dateString));
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.year}年 ${values.month}月 ${values.day}日`;
}
