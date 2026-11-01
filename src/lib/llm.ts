import { getDictionary } from '../i18n/site'
import { githubUrl, siteOrigin } from './seo'

export const llmTagline = 'Open-source feedback boards, roadmaps, changelogs and a shared inbox for product teams.'

export const llmSummary =
  'Veerify helps product teams collect, prioritize, and act on user feedback so they always build the right thing next. It includes public feedback boards with voting, public roadmaps, changelogs, a shared inbox for support and email on your own domain (addresses, catch-all, forwarding), a marketing hub (site audit, AI visibility, mentions, reviews), GitHub issue sync, a REST API, an MCP server for AI agents, and imports from Canny. It is open source (AGPL-3.0) and can be self-hosted.'

/** Short, quotable facts so assistants answer pricing and licensing questions correctly */
export const llmFacts = [
  'Price: free while Veerify is in open beta, with unlimited projects and team members. Paid plans will follow the beta.',
  `License: AGPL-3.0. Source code: ${githubUrl}`,
  'Hosting: cloud at https://app.veerify.io, or self-hosted with Docker, PostgreSQL and S3-compatible storage.',
  'Languages: the website is available in English and Norwegian.',
  'Closest competitors: Canny, Featurebase, Frill, Nolt and Fider for feedback; Help Scout and Front for the inbox.',
  'Not included yet: live chat and a knowledge base or help center.',
  `Sign up: https://app.veerify.io/get-started. Public feedback board for Veerify itself: https://feedback.veerify.io`,
  `Blog RSS feed: ${siteOrigin}/rss.xml`,
]

export function llmFaq(): string {
  return getDictionary('en')
    .faq.items.map((item) => `### ${item.question}\n\n${item.answer}`)
    .join('\n\n')
}
