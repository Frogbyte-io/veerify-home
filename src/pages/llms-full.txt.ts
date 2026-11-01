import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { comparisonEntries } from '../lib/compare'
import { siteOrigin } from '../lib/seo'
import { getDictionary } from '../i18n/site'

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft)

  const blogSections = posts
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
    .map(
      (post) => `## ${post.data.title}

URL: ${siteOrigin}/blog/${post.slug}
Published: ${post.data.pubDate.toISOString().slice(0, 10)}

${post.data.description}`,
    )
    .join('\n\n---\n\n')

  const compareSections = comparisonEntries
    .map(
      (entry) => `## ${entry.title}

URL: ${siteOrigin}/compare/${entry.slug}

${entry.intro}

**Best for Veerify:** ${entry.veerifyFit}
**Best for ${entry.competitor}:** ${entry.competitorFit}

### Why teams switch to Veerify from ${entry.competitor}
${entry.reasons.map((r) => `- **${r.title}:** ${r.description}`).join('\n')}

### FAQ
${entry.faq.map((f) => `**${f.question}**\n${f.answer}`).join('\n\n')}`,
    )
    .join('\n\n---\n\n')

  const dict = getDictionary('en')
  const features = dict.features.items.map((item) => `- **${item.title}:** ${item.desc}`).join('\n')
  const inbox = dict.inbox.points.map((point) => `- **${point.title}:** ${point.desc}`).join('\n')

  const body = `# Veerify — Full Content

> Collect feedback that actually matters. The modern feedback management platform for product teams.

URL: ${siteOrigin}

Veerify helps product teams collect, prioritize, and act on user feedback so they always build the right thing next. It includes public feedback boards with voting, public roadmaps, changelogs, a shared inbox for support and email on your own domain (addresses, catch-all, forwarding), a marketing hub (site audit, AI visibility, mentions, reviews), GitHub issue sync, a REST API, an MCP server for AI agents, and imports from Canny. It is open source (AGPL-3.0) and can be self-hosted.

Currently in open beta — free forever during the beta period.

---

# Features

${features}

## Inbox and email

${inbox}

---

# Blog

${blogSections}

---

# Comparisons

${compareSections}
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
