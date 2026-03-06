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
    veerifyFit: 'Teams that want a lighter Canny alternative with public roadmaps, API access, webhooks, and an open-source or self-hosted path.',
    intro: 'If you are comparing Veerify vs Canny, the overlap is straightforward: both products sit in the customer feedback, voting, and public roadmap category. Veerify is the better fit when you want that workflow without committing to a closed platform from day one.',
    reasons: [
      {
        title: 'Open-source path',
        description: 'Veerify is positioned for teams that care about source access, self-hosting, and avoiding long-term platform lock-in.',
      },
      {
        title: 'Developer-friendly setup',
        description: 'Veerify emphasizes REST API access, webhooks, and quick installation for product teams that want feedback to plug into existing tooling.',
      },
      {
        title: 'Focused scope',
        description: 'The product stays close to the core jobs to be done: collect feedback, prioritize signal, publish a roadmap, and notify users when work ships.',
      },
    ],
    faq: [
      {
        question: 'What is a good Canny alternative?',
        answer: 'A good Canny alternative should cover feedback collection, voting, public roadmaps, and status updates while matching your team\'s workflow. Veerify is a strong option if you also want API access, webhooks, and an open-source or self-hosted direction.',
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
    intro: 'Productboard plays further upstream in product planning, while Veerify stays tightly focused on feedback intake, prioritization, public communication, and shipping updates. If your search is really for a Productboard alternative for customer feedback and roadmaps, Veerify is the closer match.',
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
    intro: 'UserVoice and Veerify both address the same fundamental problem: collecting customer requests, identifying patterns, and showing users what happens next. Veerify is the better fit when you want those workflows in a more focused package with stronger ownership and integration flexibility.',
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
    summary: 'Featurebase covers feedback boards, roadmaps, and product updates. Veerify competes most directly here, especially for teams that want more control over deployment and ownership.',
    title: 'Featurebase Alternative: Veerify vs Featurebase',
    description: 'Looking for a Featurebase alternative? Compare Veerify vs Featurebase for feature voting, roadmap transparency, status updates, and open deployment options.',
    competitorFit: 'Teams that want a feedback forum plus roadmap and update workflow in a packaged SaaS product.',
    veerifyFit: 'Teams that want a Featurebase alternative with a similar feedback-to-roadmap motion, but more emphasis on open source, APIs, webhooks, and self-hosting flexibility.',
    intro: 'Featurebase is one of the closest category matches for Veerify because both products center on feature voting, public roadmaps, and feedback-driven product updates. Veerify differentiates by leaning harder into developer ownership and deployment flexibility.',
    reasons: [
      {
        title: 'Open-source differentiation',
        description: 'Veerify is a stronger fit when you want source-level ownership or the option to run the platform on your own infrastructure.',
      },
      {
        title: 'Developer integrations',
        description: 'REST API access and webhooks are core product signals, which matters when feedback needs to flow into engineering and analytics systems.',
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
    veerifyFit: 'Teams that want the same lightweight model as Nolt, but with more explicit support for APIs, webhooks, public roadmap workflows, and open-source ownership.',
    intro: 'Nolt and Veerify appeal to a similar buyer: teams that want feedback and roadmap software without a lot of operational overhead. Veerify becomes the stronger Nolt alternative when you want to keep that simplicity but need more developer-oriented capabilities as the product matures.',
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
        answer: 'Choose Veerify when you want a simple feedback board today but do not want to give up APIs, webhooks, self-hosting direction, or open-source ownership later.',
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
    summary: 'A feedback board and announcement-oriented product with roadmap overlap.',
  },
  {
    name: 'Upvoty',
    summary: 'A feature voting and roadmap tool aimed at customer feedback collection workflows.',
  },
]

export function getComparisonEntry(slug: string) {
  return comparisonEntries.find((entry) => entry.slug === slug)
}
