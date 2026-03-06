import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { comparisonEntries } from '../lib/compare'
import { locales, withLocale } from '../i18n/site'
import { getAbsoluteUrl } from '../lib/seo'

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft)

  const staticUrls = [
    { path: '/', lastmod: undefined },
    { path: withLocale('no'), lastmod: undefined },
    { path: '/blog', lastmod: undefined },
    { path: withLocale('no', '/blog'), lastmod: undefined },
    { path: '/compare', lastmod: undefined },
    ...comparisonEntries.map((entry) => ({
      path: `/compare/${entry.slug}`,
      lastmod: undefined,
    })),
    ...posts.flatMap((post) =>
      locales.map((locale) => ({
        path: withLocale(locale, `/blog/${post.slug}`),
        lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString(),
      })),
    ),
  ]

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(getAbsoluteUrl(entry.path))}</loc>${entry.lastmod ? `
    <lastmod>${entry.lastmod}</lastmod>` : ''}
  </url>`,
  )
  .join('\n')}
</urlset>`

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
