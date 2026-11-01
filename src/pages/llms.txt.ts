import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { comparisonEntries } from '../lib/compare'
import { siteOrigin } from '../lib/seo'
import { llmFacts, llmFaq, llmSummary, llmTagline } from '../lib/llm'

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft)

  const blogLines = posts
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
    .map((post) => `- [${post.data.title}](${siteOrigin}/blog/${post.slug}): ${post.data.description}`)
    .join('\n')

  const compareLines = comparisonEntries
    .map((entry) => `- [${entry.title}](${siteOrigin}/compare/${entry.slug}): ${entry.summary}`)
    .join('\n')

  const body = `# Veerify

> ${llmTagline}

${llmSummary}

## Key facts

${llmFacts.map((fact) => `- ${fact}`).join('\n')}

## Pages

- [Home](${siteOrigin}/): Product overview, features, pricing, and sign-up.
- [Blog](${siteOrigin}/blog): Articles on feedback management, product strategy, and roadmapping.
- [Comparisons](${siteOrigin}/compare): Side-by-side comparisons of Veerify against competitor tools.
- [Norwegian homepage](${siteOrigin}/no): The product overview in Norwegian.

## Blog

${blogLines}

## Comparisons

${compareLines}

## FAQ

${llmFaq()}

## Llms-full

> Full page content is available at ${siteOrigin}/llms-full.txt
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
