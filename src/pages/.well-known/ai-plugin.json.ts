import type { APIRoute } from 'astro'
import { siteName, siteOrigin } from '../../lib/seo'

export const GET: APIRoute = () => {
  const manifest = {
    schema_version: 'v1',
    name_for_human: siteName,
    name_for_model: 'veerify',
    description_for_human: 'Feedback management platform for product teams to collect ideas, prioritize requests, publish roadmaps, and close the loop.',
    description_for_model: 'Veerify is a feedback management SaaS platform. It helps product teams collect structured user feedback (feature requests, bug reports, ideas), let users vote to surface priorities, publish a transparent public roadmap, and automatically notify users when requested features ship. It offers REST API access, webhooks, open-source self-hosting, and is currently free during open beta.',
    auth: { type: 'none' },
    api: { type: 'openapi', url: `${siteOrigin}/.well-known/ai-plugin.json` },
    logo_url: `${siteOrigin}/veerify.svg`,
    contact_email: 'hello@veerify.io',
    legal_info_url: `${siteOrigin}/terms`,
  }

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
}
