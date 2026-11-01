export interface ComparisonFaq {
  question: string
  answer: string
}

export interface ComparisonReason {
  title: string
  description: string
}

export interface ComparisonEntry {
  slug: string
  competitor: string
  keyword: string
  summary: string
  title: string
  description: string
  competitorFit: string
  veerifyFit: string
  intro: string
  reasons: ComparisonReason[]
  faq: ComparisonFaq[]
}

export const comparisonEntries: ComparisonEntry[] = [
  {
    slug: 'canny-alternative',
    competitor: 'Canny',
    keyword: 'Canny alternative',
    summary: 'Canny is a well-known feedback board, roadmap, and changelog tool. Veerify targets the same workflow with a stronger open-source and self-hosting angle.',
    title: 'Canny Alternative: Veerify vs Canny',
    description: 'Looking for a Canny alternative? Compare Veerify vs Canny for feedback boards, public roadmaps, developer workflows, and flexible deployment.',
    competitorFit: 'Teams that want a mature feedback board workflow centered on idea capture, public roadmaps, and changelog updates.',
    veerifyFit: 'Teams that want feedback, roadmap and changelog plus a shared inbox in one tool, with a REST API, an MCP server and an open-source, self-hostable codebase.',
    intro: 'If you are comparing Veerify vs Canny, the overlap is straightforward: both products sit in the customer feedback, voting, and public roadmap category. Veerify is the better fit when you want that workflow without committing to a closed platform from day one. Teams also compare Canny with tools like <a href="/compare/featurebase-alternative">Featurebase</a> and <a href="/compare/nolt-alternative">Nolt</a> — Veerify stands out across all three with its open-source path and developer-first integrations.',
    reasons: [
      {
        title: 'Open-source path',
        description: 'Veerify is positioned for teams that care about source access, self-hosting, and avoiding long-term platform lock-in.',
      },
      {
        title: 'Developer-friendly setup',
        description: 'Everything in the dashboard is available over a REST API and an MCP server, so scripts and AI agents can work with your feedback. Canny data can be imported with votes and comments intact.',
      },
      {
        title: 'Focused scope',
        description: 'The product stays close to the core jobs to be done: collect feedback, prioritize signal, publish a roadmap, and notify users when work ships.',
      },
    ],
    faq: [
      {
        question: 'What is a good Canny alternative?',
        answer: 'A good Canny alternative should cover feedback collection, voting, public roadmaps, and status updates while matching your team\'s workflow. Veerify is a strong option if you also want a shared inbox for support email, API and MCP access, and the option to self-host.',
      },
      {
        question: 'Does Veerify support public roadmaps and feedback boards?',
        answer: 'Yes. Veerify is built around feedback collection, prioritization, public roadmap publishing, and closing the loop with user updates.',
      },
      {
        question: 'Why choose Veerify instead of Canny?',
        answer: 'Choose Veerify when you want a lighter feedback stack with strong developer ergonomics, transparent roadmap workflows, and more flexibility in how you deploy and own the system.',
      },
    ],
  },
  {
    slug: 'productboard-alternative',
    competitor: 'Productboard',
    keyword: 'Productboard alternative',
    summary: 'Productboard covers product management, customer insights, and roadmapping. Veerify targets teams that want a narrower, faster feedback operating layer.',
    title: 'Productboard Alternative: Veerify vs Productboard',
    description: 'Looking for a Productboard alternative? Compare Veerify vs Productboard for feedback management, public roadmaps, and a lighter setup for product teams.',
    competitorFit: 'Organizations that need a broader product management system with discovery, customer insights, prioritization, and roadmapping across larger teams.',
    veerifyFit: 'Product teams that mainly need feedback boards, voting, roadmap transparency, notifications, and developer-friendly integrations without the weight of a full PM suite.',
    intro: 'Productboard plays further upstream in product planning, while Veerify stays tightly focused on feedback intake, prioritization, public communication, and shipping updates. If your search is really for a Productboard alternative for customer feedback and roadmaps, Veerify is the closer match. For a similar comparison with another enterprise-grade tool, see our <a href="/compare/uservoice-alternative">UserVoice alternative</a> page.',
    reasons: [
      {
        title: 'Less overhead',
        description: 'Veerify is built for teams that want to start collecting structured feedback quickly instead of standing up a broad product operating system.',
      },
      {
        title: 'Better for transparent loops',
        description: 'Public roadmaps, feedback boards, and notifications are first-class product surfaces rather than secondary outputs from a larger planning stack.',
      },
      {
        title: 'Stronger deployment flexibility',
        description: 'Veerify is aligned with teams that want source access, self-hosting options, and straightforward developer integrations.',
      },
    ],
    faq: [
      {
        question: 'What is a lighter Productboard alternative?',
        answer: 'If you mainly need feedback collection, voting, public roadmap updates, and user notifications, a lighter alternative than Productboard is often a dedicated feedback platform like Veerify.',
      },
      {
        question: 'Is Veerify a product management suite?',
        answer: 'Veerify is better described as a feedback management and roadmap platform for product teams. It is focused on collecting signal, prioritizing requests, and communicating what is shipping.',
      },
      {
        question: 'When should I choose Veerify over Productboard?',
        answer: 'Choose Veerify when the core problem is closing the customer feedback loop quickly and transparently, not replacing your entire product planning stack.',
      },
    ],
  },
  {
    slug: 'uservoice-alternative',
    competitor: 'UserVoice',
    keyword: 'UserVoice alternative',
    summary: 'UserVoice is a long-standing player in customer feedback portals and roadmap workflows. Veerify is a more modern-feeling alternative for teams that want speed and flexibility.',
    title: 'UserVoice Alternative: Veerify vs UserVoice',
    description: 'Looking for a UserVoice alternative? Compare Veerify vs UserVoice for customer feedback portals, public roadmaps, notifications, and deployment flexibility.',
    competitorFit: 'Teams that want established customer feedback portal patterns and roadmap workflows from a long-running vendor in the space.',
    veerifyFit: 'Teams that want a modern UserVoice alternative with transparent public roadmaps, open deployment options, and straightforward integration into existing systems.',
    intro: 'UserVoice and Veerify both address the same fundamental problem: collecting customer requests, identifying patterns, and showing users what happens next. Veerify is the better fit when you want those workflows in a more focused package with stronger ownership and integration flexibility. If you are also evaluating broader product management suites, see how Veerify compares as a <a href="/compare/productboard-alternative">Productboard alternative</a>.',
    reasons: [
      {
        title: 'Built for modern team workflows',
        description: 'Veerify centers on simple setup, developer tooling, and clear public-facing surfaces instead of pushing teams into a heavier support-style portal model.',
      },
      {
        title: 'Transparent roadmap communication',
        description: 'The product emphasizes public roadmap clarity and automatic loop-closing so users can see the connection between feedback and shipped work.',
      },
      {
        title: 'Lower lock-in risk',
        description: 'Open-source and self-hosted positioning makes Veerify attractive for teams that want more control over data and deployment.',
      },
    ],
    faq: [
      {
        question: 'What is a modern UserVoice alternative?',
        answer: 'A modern UserVoice alternative should make it easy to collect feedback, prioritize requests, publish a roadmap, and notify users when changes ship. Veerify is aimed directly at that workflow.',
      },
      {
        question: 'Does Veerify help close the feedback loop?',
        answer: 'Yes. Veerify is designed around collecting feedback, tracking status, publishing roadmap progress, and notifying users when requested work is delivered.',
      },
      {
        question: 'Why switch from UserVoice to Veerify?',
        answer: 'Teams usually make that move when they want a more focused platform, more deployment control, or a feedback stack that fits developer-led product teams better.',
      },
    ],
  },
  {
    slug: 'featurebase-alternative',
    competitor: 'Featurebase',
    keyword: 'Featurebase alternative',
    summary: 'Featurebase bundles feedback boards, roadmaps, changelog, live chat and a help desk. Veerify covers feedback, roadmap, changelog and a shared email inbox, and is open source.',
    title: 'Featurebase Alternative: Veerify vs Featurebase',
    description: 'Looking for a Featurebase alternative? Compare Veerify vs Featurebase for feature voting, roadmap transparency, status updates, and open deployment options.',
    competitorFit: 'Teams that want a feedback forum plus roadmap and update workflow in a packaged SaaS product.',
    veerifyFit: 'Teams that want the same feedback, roadmap, changelog and inbox bundle, but open source (AGPL-3.0), self-hostable, and with email addresses on their own domain.',
    intro: 'Featurebase is the closest match to Veerify. Both bundle feature voting, public roadmaps, a changelog and a support inbox. Featurebase adds live chat, a help center and surveys, and prices per seat. Veerify is open source, can be self-hosted, and lets you run email addresses on your own domain through the inbox. For a similar lightweight alternative, see our <a href="/compare/nolt-alternative">Nolt comparison</a>, or check out our <a href="/compare/canny-alternative">Canny alternative</a> page for a more established competitor.',
    reasons: [
      {
        title: 'Open-source differentiation',
        description: 'Veerify is a stronger fit when you want source-level ownership or the option to run the platform on your own infrastructure.',
      },
      {
        title: 'Developer integrations',
        description: 'A REST API, an MCP server for AI agents and GitHub issue sync make it easy to move feedback into engineering work.',
      },
      {
        title: 'Clean beta pricing posture',
        description: 'Veerify is currently free during beta, which lowers the cost of adopting a dedicated feedback workflow for smaller teams.',
      },
    ],
    faq: [
      {
        question: 'What is a good Featurebase alternative?',
        answer: 'If you want feature voting, public roadmaps, and status updates with more deployment flexibility and developer control, Veerify is a strong Featurebase alternative to evaluate.',
      },
      {
        question: 'Does Veerify include feedback voting?',
        answer: 'Yes. Veerify includes feedback collection, voting and prioritization, roadmap visibility, and user notifications around shipped work.',
      },
      {
        question: 'Why compare Veerify with Featurebase?',
        answer: 'They sit in nearly the same category, so the decision usually comes down to deployment flexibility, developer workflow fit, and how much platform ownership your team wants.',
      },
    ],
  },
  {
    slug: 'nolt-alternative',
    competitor: 'Nolt',
    keyword: 'Nolt alternative',
    summary: 'Nolt is known for lightweight feature request boards and simple public roadmaps. Veerify targets the same simplicity while adding stronger developer and ownership signals.',
    title: 'Nolt Alternative: Veerify vs Nolt',
    description: 'Looking for a Nolt alternative? Compare Veerify vs Nolt for feature request boards, public roadmap workflows, integrations, and flexible deployment.',
    competitorFit: 'Teams that want a simple feature request board and roadmap without adopting a larger product management platform.',
    veerifyFit: 'Teams that want the same lightweight model as Nolt, plus a changelog, a shared inbox, a REST API and an open-source codebase.',
    intro: 'Nolt and Veerify appeal to a similar buyer: teams that want feedback and roadmap software without a lot of operational overhead. Veerify becomes the stronger Nolt alternative when you want to keep that simplicity but need more developer-oriented capabilities as the product matures. Also evaluating similar tools? See how Veerify compares as a <a href="/compare/featurebase-alternative">Featurebase alternative</a> or a <a href="/compare/canny-alternative">Canny alternative</a>.',
    reasons: [
      {
        title: 'Simple start, stronger ceiling',
        description: 'Veerify is designed to be easy for smaller teams to adopt while still offering integration and ownership options that hold up as the workflow expands.',
      },
      {
        title: 'Clear public roadmap motion',
        description: 'Users can see what is planned, in progress, and shipped, which improves trust and reduces repeated roadmap questions.',
      },
      {
        title: 'Better for product-engineering teams',
        description: 'The product language, API posture, and deployment flexibility align well with teams that want feedback embedded into their product stack.',
      },
    ],
    faq: [
      {
        question: 'What is a better Nolt alternative for growing teams?',
        answer: 'A better Nolt alternative for growing teams keeps the workflow lightweight while adding roadmap clarity, integrations, and deployment flexibility. Veerify is built around that balance.',
      },
      {
        question: 'Is Veerify lightweight enough for small teams?',
        answer: 'Yes. Veerify is positioned as a focused feedback platform with quick setup, public roadmap support, and beta pricing that is currently free.',
      },
      {
        question: 'Why choose Veerify over Nolt?',
        answer: 'Choose Veerify when you want a simple feedback board today but also want a changelog, a support inbox, API access and the option to self-host later.',
      },
    ],
  },
  {
    slug: 'fider-alternative',
    competitor: 'Fider',
    keyword: 'Fider alternative',
    summary: 'Fider is an open-source feedback board under AGPL-3.0 with a hosted cloud. Veerify shares the license and the self-hosting option, and adds a roadmap, changelog and shared inbox.',
    title: 'Fider Alternative: Veerify vs Fider',
    description: 'Comparing Fider and Veerify? Both are open source under AGPL-3.0 and can be self-hosted. See where a simple voting board is enough and where you need roadmap, changelog and inbox too.',
    competitorFit: 'Teams that want a small, focused open-source voting board and nothing else, either self-hosted or on Fider Cloud.',
    veerifyFit: 'Teams that want an open-source board plus a public roadmap, changelog, shared inbox, GitHub sync and an API that AI agents can use.',
    intro: 'Fider and Veerify are both open source under AGPL-3.0, and both can run on your own server or as a hosted service. Fider stays deliberately small: a board where people post ideas, vote and discuss. Veerify starts from the same board and adds the tools around it. For the long version, read <a href="/blog/fider-vs-veerify-open-source-feedback-tools">Fider vs Veerify</a>.',
    reasons: [
      {
        title: 'Roadmap and changelog included',
        description: 'Move ideas onto a public kanban roadmap and announce them in a changelog with RSS, without a second tool.',
      },
      {
        title: 'Support in the same place',
        description: 'A shared inbox sits next to the board, so a support email can turn into a feedback item in one click.',
      },
      {
        title: 'Same license, same freedom',
        description: 'Both projects use AGPL-3.0. You can read the code, run it yourself and change it.',
      },
    ],
    faq: [
      {
        question: 'Is Veerify open source like Fider?',
        answer: 'Yes. Veerify is open source under AGPL-3.0, the same license as Fider, and the code is on GitHub at github.com/Frogbyte-io/veerify.',
      },
      {
        question: 'Is Fider or Veerify easier to self-host?',
        answer: 'Fider is smaller and has fewer moving parts. Veerify needs PostgreSQL and object storage, and its email features need a mail provider, because it does more.',
      },
      {
        question: 'When should I pick Fider over Veerify?',
        answer: 'Pick Fider if a voting board is all you need and you want the smallest possible install. Pick Veerify if you also want a roadmap, changelog or support inbox.',
      },
    ],
  },
  {
    slug: 'help-scout-alternative',
    competitor: 'Help Scout',
    keyword: 'Help Scout alternative',
    summary: 'Help Scout is a mature help desk with shared inboxes, docs and live chat. Veerify is a feedback tool with a shared inbox built in, for teams that want support email and feature requests in one place.',
    title: 'Help Scout Alternative for Product Teams: Veerify vs Help Scout',
    description: 'Looking at Help Scout but also need feature voting and a public roadmap? Compare Help Scout with Veerify, which puts a shared inbox next to feedback boards, roadmap and changelog.',
    competitorFit: 'Support teams that need a full help desk: several inboxes, live chat, a knowledge base, advanced workflows and many integrations.',
    veerifyFit: 'Small product teams where the same people answer support email and decide what to build, and who want feedback, roadmap and inbox in one tool.',
    intro: 'Help Scout is a help desk first. It is very good at that, and it has no voting board or public roadmap. Veerify is the other way round: feedback boards, roadmap and changelog, with a shared inbox for support email added on. If support is a department at your company, Help Scout is probably the better fit. If support is something your product team does between other work, Veerify keeps it next to the feature requests. See <a href="/blog/help-desk-and-feedback-board-in-one-tool">one tool or two</a> for the full comparison.',
    reasons: [
      {
        title: 'Feature requests stay connected',
        description: 'Turn a support conversation into a feedback item, and see what that customer has voted for next to the thread.',
      },
      {
        title: 'Addresses on your own domain',
        description: 'Create hello@, support@ or a catch-all on your domain, choose per address whether helpdesk rules apply, and forward to anyone.',
      },
      {
        title: 'One bill, not two',
        description: 'You do not need a help desk and a separate feedback tool. Veerify is free while it is in beta.',
      },
    ],
    faq: [
      {
        question: 'Does Veerify replace Help Scout?',
        answer: 'For small teams that mostly handle email, often yes. Veerify has a shared inbox with assignment, snooze, canned responses, SLAs and satisfaction surveys. It does not have live chat or a knowledge base like Help Scout does.',
      },
      {
        question: 'Does Help Scout have feature voting or a public roadmap?',
        answer: 'Not as a built-in product. Teams usually connect Help Scout to a separate feedback tool for that.',
      },
      {
        question: 'Can I use my own domain for the inbox in Veerify?',
        answer: 'Yes. Connect any domain, add the DNS records Veerify shows you, and create addresses on it. Use a subdomain if you want to keep your current mail provider on the main domain.',
      },
    ],
  },
]

export const secondaryCompetitors = [
  {
    name: 'Aha! Ideas',
    summary: 'A roadmap and ideas portal product for teams already deep in the Aha! planning ecosystem.',
  },
  {
    name: 'Frill',
    summary: 'A feedback board with ideas, roadmap and announcements, priced per plan rather than per seat.',
  },
  {
    name: 'Upvoty',
    summary: 'A feature voting and roadmap tool aimed at customer feedback collection workflows.',
  },
]

export function getComparisonEntry(slug: string) {
  return comparisonEntries.find((entry) => entry.slug === slug)
}
