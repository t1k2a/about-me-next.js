import { formatArticleDate } from './article-date.mjs';

export default function Date({ dateString }) {
  return <time dateTime={dateString}>{formatArticleDate(dateString)}</time>;
}
