import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { comparisonEntries } from '../lib/compare'
import { siteOrigin } from '../lib/seo'

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

  const body = `# Veerify — Full Content

> Collect feedback that actually matters. The modern feedback management platform for product teams.

URL: ${siteOrigin}

Veerify helps product teams collect, prioritize, and act on user feedback so they always build the right thing next. It includes embeddable feedback widgets, user voting and prioritization, public roadmaps, team workflows, insights, and automatic user notifications when requested features ship.

Currently in open beta — free forever during the beta period.

---

# Features

- **Feedback Collection:** Embed a widget anywhere or share a public link. Capture ideas, bugs, and feature requests from users in context.
- **Voting & Prioritization:** Let users vote on what matters most. Automatically surface your highest-impact opportunities and drop the noise.
- **Public Roadmap:** Show users where you're headed. Build trust by publishing your roadmap and closing the feedback loop automatically.
- **Team Workflows:** Organize feedback by project, assign owners, and track status across your team — all in a single place.
- **Insights & Reports:** Understand trends over time. See which themes surface repeatedly and make confident decisions with real data.
- **Auto Notifications:** Close the loop automatically. Notify users the moment their requested feature ships so nothing falls through.

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
