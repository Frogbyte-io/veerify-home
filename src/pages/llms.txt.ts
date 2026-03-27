import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { comparisonEntries } from '../lib/compare'
import { siteOrigin } from '../lib/seo'

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

> Collect feedback that actually matters. The modern feedback management platform for product teams.

Veerify helps product teams collect, prioritize, and act on user feedback so they always build the right thing next. It includes embeddable feedback widgets, user voting and prioritization, public roadmaps, team workflows, insights, and automatic user notifications when requested features ship.

Currently in open beta — free forever during the beta period.

## Pages

- [Home](${siteOrigin}/): Product overview, features, pricing, and sign-up.
- [Blog](${siteOrigin}/blog): Articles on feedback management, product strategy, and roadmapping.
- [Comparisons](${siteOrigin}/compare): Side-by-side comparisons of Veerify against competitor tools.

## Blog

${blogLines}

## Comparisons

${compareLines}

## Llms-full

> Full page content is available at ${siteOrigin}/llms-full.txt
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
