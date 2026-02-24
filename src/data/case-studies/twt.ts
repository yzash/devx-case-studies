import { CaseStudy } from '@/types/case-study'

const twt: CaseStudy = {
  slug: 'twt',
  isPublished: true,
  client: 'The Whole Truth',
  industry: 'Clean-Label Nutrition / D2C',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'Full-Stack Development / Headless Commerce',
  pm: 'Khushi',
  accent: '#3a7d44',
  accentSoft: 'rgba(58,125,68,0.08)',
  accentLight: '#5ca869',

  eyebrow: 'Full-Stack Development · Headless Commerce · 2025',
  headline: "Transforming <em>The Whole Truth</em>'s D2C Platform with Headless Commerce",
  subheadline:
    'When a brand is built on radical transparency, its tech stack should be just as honest — fast, flexible, and built for scale.',
  heroMeta: [
    { label: 'Client', value: 'The Whole Truth' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "The Whole Truth is one of India's fastest-growing clean-label nutrition brands, built on a single promise: complete transparency in ingredients. As the brand scaled rapidly, the technology underneath it needed to match that ambition — not slow it down.",
    "The existing commerce environment, built on Dukaan, had served its early purpose but was hitting a ceiling. Pages were slow, content was hard to manage across multiple layouts, and the cart experience cracked under peak-traffic pressure. The brief was clear: rebuild the stack with a foundation capable of keeping pace with a brand that never cuts corners.",
  ],
  brandTags: ['Clean Nutrition', 'Headless Commerce', 'Medusa.js', 'Next.js', 'Strapi CMS', 'India D2C'],
  brandStats: [
    { name: 'Platform', value: 'Dukaan → Medusa.js + Next.js' },
    { name: 'CMS', value: 'Strapi (Headless)' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Speed, CMS Flexibility & Cart Performance' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    'Three people experienced the limitations of the old stack every single day. Every architectural decision in the rebuild was designed to lift those frustrations.',
  personas: [
    {
      avatar: '🥜',
      name: 'Riya',
      age: 27,
      role: 'Regular TWT shopper · Bengaluru',
      quote:
        "Shoppers during sale periods encountered pages that crawled and carts that failed mid-checkout. Loyal customers lost orders they had already committed to completing, creating unnecessary friction for a routine repurchase.",
      painTag: '🛒 Cart failures & slow pages',
    },
    {
      avatar: '✍️',
      name: 'Arjun',
      age: 31,
      role: 'Content & Campaign Manager · The Whole Truth HQ',
      quote:
        "Content and campaign managers faced a different set of messy workarounds with every new collection launch. Product pages, category pages, and landing pages each required their own approach, with no unified system capable of managing the full range of layouts cleanly.",
      painTag: '📂 Content chaos across page patterns',
    },
    {
      avatar: '⚙️',
      name: 'Divya',
      age: 35,
      role: 'Head of Product & Engineering · The Whole Truth',
      quote:
        "Engineering teams working within Dukaan's constraints found that features requiring a week of development were taking a month to ship. Platform limitations had turned routine product work into a slow, permission-constrained process the team had no way to accelerate.",
      painTag: '🐢 Platform limitations blocking feature velocity',
    },
  ],

  challengeParagraphs: [
    "The Whole Truth had outgrown its commerce foundation. Dukaan's constraints weren't just inconveniences — they were compounding. Content teams were managing multiple page patterns with no unified CMS, engineering couldn't ship features fast enough, and the cart was failing under the traffic the brand's marketing team was working hard to drive.",
    "Rebuilding wasn't optional — but rebuilding carelessly would have been worse. The new stack needed to eliminate every identified bottleneck while preserving customer experience continuity and operational stability throughout the transition.",
  ],
  challengeTension:
    "The brand's transparency mission demanded a platform that was honest about performance — not one that hid slow renders behind loading spinners.",
  challengeMetrics: [
    { name: 'Cart & checkout latency under load', value: 'Critical', barPercent: 88, barStyle: 'gold' },
    { name: 'Content management complexity', value: 'High', barPercent: 82, barStyle: 'soft' },
    { name: 'Feature rollout velocity', value: 'Severely limited', barPercent: 85, barStyle: 'gold' },
    { name: 'Page load performance', value: 'Below expectation', barPercent: 78, barStyle: 'soft' },
    { name: 'Manual Cash & Carry workflows', value: 'Operational drag', barPercent: 65, barStyle: 'soft' },
  ],

  approachIntro:
    'Each technical decision was anchored to a real pain point — not best-practice theory, but what Riya, Arjun, and Divya actually needed.',
  approachCards: [
    {
      icon: '🏗️',
      title: 'Medusa.js Commerce Migration',
      description:
        "Migrated from Dukaan to a custom tech stack powered by Medusa.js — giving Divya's engineering team full control, full extensibility, and the ability to ship without asking permission from a platform.",
      badge: 'Resilience',
    },
    {
      icon: '⚡',
      title: 'Next.js Frontend with Caching & Pre-rendering',
      description:
        "Rebuilt the frontend in Next.js with strategic caching and pre-rendering so pages load fast the first time — and every time. Riya's cart no longer disappears.",
      badge: 'Human-Centricity',
    },
    {
      icon: '📝',
      title: 'Strapi Headless CMS Integration',
      description:
        "Implemented Strapi to give Arjun's team a single, unified system for managing unlimited page types and themes — product pages, category pages, and campaign landing pages without developer dependency.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🛒',
      title: 'Cart & Checkout Performance Optimization',
      description:
        'Rebuilt cart and checkout flows to withstand high-traffic events without degradation. Peak sale days no longer mean peak support tickets.',
      badge: 'Resilience',
    },
    {
      icon: '📦',
      title: 'Clickpost Order Workflow Automation',
      description:
        "Integrated Clickpost order workflows to eliminate the manual pre-confirmation steps required for Cash & Carry orders — removing operational overhead that shouldn't have existed.",
      badge: 'Sustainability',
    },
    {
      icon: '🔧',
      title: 'Custom Stack Architecture',
      description:
        'Designed a scalable, modular architecture that supports future integrations and catalog expansions without requiring a rebuild — the foundation scales with the brand.',
      badge: 'Sustainability',
    },
  ],

  resultCards: [
    {
      number: '30–40%',
      label: 'Reduction in cart latency during high-traffic events',
      humanNote: "Riya's cart stays intact — even on sale day",
    },
    {
      number: '2–3×',
      label: 'Faster feature and page launches',
      humanNote: "Divya's team ships in days, not months",
    },
    {
      number: '2–2.5×',
      label: 'Improvement in page speed across browsing and navigation',
      humanNote: 'The site feels as clean as the ingredients',
    },
    {
      number: '∞',
      label: 'Scalable foundation for sustained growth',
      humanNote: "Arjun manages content without workarounds — and the stack grows with the brand",
    },
  ],

  humanImpactCards: [
    {
      icon: '🥜',
      title: 'Shopper Reliability',
      description:
        "Customers browsing The Whole Truth now get the performance the brand promises elsewhere — fast pages, stable carts, and a checkout that completes reliably even during sale events.",
    },
    {
      icon: '✍️',
      title: 'Content Team Independence',
      description:
        "Arjun's team can create and publish pages across every template type without waiting for engineering. New campaigns launch when the marketing moment is right, not when the dev queue clears.",
    },
    {
      icon: '⚙️',
      title: 'Engineering Velocity',
      description:
        "Divya's team went from fighting the platform to building on it. Features that took weeks in Dukaan now take days in a stack they actually own.",
    },
    {
      icon: '📦',
      title: 'Operational Automation',
      description:
        'Cash & Carry orders move through the fulfilment pipeline automatically. The manual confirmation loop that was slowing operations is gone — replaced by logic that simply works.',
    },
  ],

  ctaBadge: "Let's build the stack your brand deserves",
  ctaHeadline: 'A platform that performs as honestly<br />as the brand it powers.',
  ctaSubline:
    "We don't patch existing limitations. We build foundations that remove them — and scale with the brand that sits on top.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default twt
