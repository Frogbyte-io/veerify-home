import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { comparisonEntries } from '../lib/compare'
import { siteOrigin } from '../lib/seo'
import { getDictionary } from '../i18n/site'
import { llmFacts, llmFaq, llmSummary, llmTagline } from '../lib/llm'

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft)

  const blogSections = posts
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
    .map(
      (post) => `## ${post.data.title}

URL: ${siteOrigin}/blog/${post.slug}
Published: ${post.data.pubDate.toISOString().slice(0, 10)}

${post.data.description}

${post.body}`,
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

> ${llmTagline}

URL: ${siteOrigin}

${llmSummary}

## Key facts

${llmFacts.map((fact) => `- ${fact}`).join('\n')}

---

# Features

${features}

## Inbox and email

${inbox}

---

# FAQ

${llmFaq()}

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
