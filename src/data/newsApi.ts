import { NewsArticle } from '../types';
import sampleNewsImage from '../assets/images/Sample_news.png';

const DIRECT_NEWS_API_URL =
  'http://diplomatic-emerald-hare.198-54-125-32.cpanel.site/fmc_admin/api/news';

export const NEWS_API_URL = import.meta.env.DEV ? DIRECT_NEWS_API_URL : '/api/news';

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const readNewsList = (payload: unknown): unknown[] => {
  if (Array.isArray(payload)) return payload;
  if (!isRecord(payload)) throw new Error('The news API returned an unexpected response.');

  const data = payload.data;
  if (Array.isArray(data)) return data;
  if (isRecord(data) && Array.isArray(data.data)) return data.data;
  if (Array.isArray(payload.news)) return payload.news;

  throw new Error('The news API response did not contain a news list.');
};

const isNullableString = (value: unknown): value is string | null =>
  typeof value === 'string' || value === null;

const isOptionalNullableString = (value: unknown): boolean =>
  value === undefined || isNullableString(value);

const isNewsArticle = (value: unknown): value is NewsArticle => {
  if (!isRecord(value)) return false;

  return (
    Number.isInteger(value.id) &&
    typeof value.title === 'string' &&
    typeof value.summary === 'string' &&
    typeof value.content === 'string' &&
    isOptionalNullableString(value.image_1) &&
    isOptionalNullableString(value.image_2) &&
    isOptionalNullableString(value.image_3) &&
    isOptionalNullableString(value.image_4) &&
    Number.isInteger(value.published) &&
    (typeof value.published_by === 'number' || value.published_by === null) &&
    (typeof value.last_save_user === 'number' || value.last_save_user === null) &&
    typeof value.created_at === 'string' &&
    typeof value.updated_at === 'string' &&
    isNullableString(value.deleted_at)
  );
};

export async function fetchNewsArticles(signal?: AbortSignal): Promise<NewsArticle[]> {
  const response = await fetch(NEWS_API_URL, { signal });
  if (!response.ok) {
    throw new Error(`The news service returned HTTP ${response.status}.`);
  }

  const articles = readNewsList(await response.json());
  if (!articles.every(isNewsArticle)) {
    throw new Error('The news API returned an article that does not match the expected schema.');
  }

  return articles
    .filter((article) => article.published === 1 && article.deleted_at === null)
    .sort((a, b) => b.id - a.id);
}

export const getNewsImages = (article: NewsArticle): string[] =>
  [article.image_1, article.image_2, article.image_3, article.image_4]
    .filter((image): image is string => typeof image === 'string' && image.trim().length > 0)
    .map((image) => {
      const trimmedImage = image.trim();
      const compactImage = trimmedImage.replace(/\s/g, '');

      return /^\/9j\/[A-Za-z0-9+/]*={0,2}$/.test(compactImage)
        ? `data:image/jpeg;base64,${compactImage}`
        : trimmedImage;
    });

export const getNewsImage = (article: NewsArticle, index = 0): string =>
  getNewsImages(article)[index] ?? sampleNewsImage;

export const formatNewsDate = (date: string): string => {
  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) return 'Date unavailable';

  return new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(parsedDate);
};
