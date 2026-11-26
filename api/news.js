const DEFAULT_NEWS_API_URL =
  'http://diplomatic-emerald-hare.198-54-125-32.cpanel.site/fmc_admin/api/news';

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const targetUrl = process.env.NEWS_API_URL || DEFAULT_NEWS_API_URL;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const upstream = await fetch(targetUrl, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    });
    const body = await upstream.text();

    response.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
    response.setHeader('Content-Type', 'application/json');

    if (!upstream.ok) {
      return response.status(502).json({
        error: `The news service returned HTTP ${upstream.status}.`,
      });
    }

    try {
      return response.status(200).send(JSON.parse(body));
    } catch {
      return response.status(502).json({
        error: 'The news service returned an invalid response.',
      });
    }
  } catch (error) {
    const timedOut = error instanceof Error && error.name === 'AbortError';
    return response.status(502).json({
      error: timedOut
        ? 'The news service timed out.'
        : 'Unable to reach the news service.',
    });
  } finally {
    clearTimeout(timeout);
  }
}
