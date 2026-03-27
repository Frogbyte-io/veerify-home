import type { APIRoute } from 'astro'
import { siteOrigin } from '../lib/seo'

export const GET: APIRoute = () => {
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${siteOrigin}/sitemap.xml`,
    `Llms-txt: ${siteOrigin}/llms.txt`,
  ].join('\n')

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
