import { CaseStudy } from '@/types/case-study'

const freed: CaseStudy = {
  slug: 'freed',
  isPublished: true,
  client: 'Freed',
  industry: 'Lifestyle & Grooming',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'Shopify Development / New Market Launch',
  pm: 'Raj',
  accent: '#7f6b8a',
  accentSoft: 'rgba(127,107,138,0.08)',
  accentLight: '#9e8aad',

  eyebrow: 'Shopify Development · New Market Launch · 2025',
  headline: "Launching <em>Freed</em>: A Bespoke Shopify Store from Scratch for a New Market Entrant",
  subheadline:
    'A new brand in a new market — built right from the first line of code, with no shortcuts and no technical debt.',
  heroMeta: [
    { label: 'Client', value: 'Freed' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandHeadline: "A grooming brand enters the market.<br />No technical debt, no compromise on speed.",
  brandIntro: [
    "Freed is a modern lifestyle and grooming brand entering the market with a strong contemporary aesthetic and a digital-first customer engagement strategy. From the outset, the brand understood that its first impression online would define customer perception — and that a templated, rushed storefront would undermine everything else it was investing in.",
    "We partnered with Freed during its launch phase to build a bespoke Shopify storefront from the ground up. The brief was to deliver performance, scalability, and conversion-readiness from day one — not as aspirations for a future phase, but as baseline requirements for go-live.",
  ],
  brandTags: ['Lifestyle', 'Grooming', 'Shopify', 'New Launch', 'Mobile-First', 'Performance Optimization'],
  brandStats: [
    { name: 'Platform', value: 'Shopify (Bespoke Build)' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Launch-Ready Performance & Scalable Architecture' },
    { name: 'Engagement', value: 'End-to-End Store Development' },
    { name: 'Year', value: '2025' },
  ],

  peopleHeadline: "Built for the first-time online shopper discovering a new brand, the founder launching into a competitive category, and the team that needed a theme they could scale without rebuilding.",
  peopleIntro:
    'Three people had everything riding on launch day going right — a first-time customer who would form an instant impression, a brand manager who needed the identity to land perfectly, and a founder for whom there was no second chance at a first launch.',
  personas: [
    {
      avatar: '✨',
      name: 'Aryan',
      age: 24,
      role: 'New brand discoverer · Hyderabad',
      quote:
        'New brand discoverers make snap judgements on mobile — a slow load, a generic layout, or any navigational clumsiness signals that the product behind it is equally unpolished. An unfamiliar brand rarely gets a second chance.',
      painTag: '📱 First impressions made entirely on mobile',
    },
    {
      avatar: '🎨',
      name: 'Kavya',
      age: 29,
      role: 'Brand Marketing Manager · Freed',
      quote:
        'Brand marketing managers who had invested months crafting a distinct identity faced the risk of watching it collapse into generic Shopify defaults. The storefront needed to carry that identity consistently from the homepage through to the product page.',
      painTag: '🎭 Brand identity at risk from generic theme defaults',
    },
    {
      avatar: '🚀',
      name: 'Aditya',
      age: 33,
      role: 'Co-Founder · Freed',
      quote:
        'New brand founders understand that first impressions carry no goodwill buffer — the store needs to be fast, polished, and architecturally sound from day one. A rebuild six months into launch is a cost that no early-stage brand can absorb.',
      painTag: '🏗️ Launch quality vs. long-term scalability tension',
    },
  ],

  challengeHeadline: "Freed needed a Shopify store that launched fast, performed faster, and left nothing to rework.",
  challengeParagraphs: [
    "Launching a new brand on a tight timeline creates pressure that often produces technical debt. The typical outcome is a store that gets the brand live fast — but requires significant rework once reality sets in. For Freed, that pattern was unacceptable. The ambition was to do both: launch quickly and launch correctly.",
    "The challenge was one of architecture. Building a bespoke Shopify storefront that performs like a premium destination, looks like a considered brand, and scales like an established business — within the constraints of a launch timeline — required deliberate decisions at every stage, not optimisations to apply later.",
  ],
  challengeTension:
    "Launch timelines pressure teams to cut corners. For a new brand, those corners are the brand.",
  challengeMetrics: [
    { name: 'Launch timeline pressure', value: 'High', barPercent: 85, barStyle: 'gold' },
    { name: 'Brand identity translation risk', value: 'Significant', barPercent: 80, barStyle: 'soft' },
    { name: 'Performance with rich design requirements', value: 'Tension', barPercent: 75, barStyle: 'soft' },
    { name: 'Mobile-first experience complexity', value: 'Critical', barPercent: 82, barStyle: 'gold' },
    { name: 'Technical debt risk from speed-to-launch', value: 'Real', barPercent: 78, barStyle: 'gold' },
  ],

  approachHeadline: "Bespoke Shopify build from scratch — mobile-first, performance-first, conversion-ready from day one.",
  approachIntro:
    "Every technical decision was made with Aryan's first visit, Kavya's brand standards, and Aditya's growth roadmap in mind simultaneously.",
  approachCards: [
    {
      icon: '🎨',
      title: 'Bespoke Shopify Theme Development',
      description:
        "Built a customised Shopify theme foundation aligned with Freed's brand aesthetics — no generic defaults, no template compromises. Kavya's brand identity lands from the first page.",
      badge: 'Human-Centricity',
    },
    {
      icon: '📱',
      title: 'Mobile-First UX Architecture',
      description:
        "Designed homepage, PDPs, and navigation flows with mobile as the primary context — so Aryan's first impression on his phone is exactly what the brand wants it to be.",
      badge: 'Human-Centricity',
    },
    {
      icon: '⚡',
      title: 'Performance Optimization from Day One',
      description:
        'Implemented asset compression, lazy loading, and script optimization from initial development — not as a post-launch fix, but as a baseline requirement. Fast at launch, not eventually.',
      badge: 'Sustainability',
    },
    {
      icon: '🛒',
      title: 'Conversion-Ready Product Interactions',
      description:
        "Structured product presentation and interaction hierarchy to support fast discovery and Add-to-Cart decision-making — purchase journeys designed to convert from the first campaign.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🏗️',
      title: 'Scalable Storefront Architecture',
      description:
        "Built the theme architecture to support Aditya's growth plans — future features, catalog expansion, and integrations can be added without structural rebuilds.",
      badge: 'Sustainability',
    },
    {
      icon: '🛡️',
      title: 'Launch Validation & Deployment',
      description:
        'Supported go-live through staging workflows, cross-device testing, and deployment validation — ensuring the first visitor and the ten-thousandth had the same quality experience.',
      badge: 'Resilience',
    },
  ],

  resultsHeadline: "45–60% faster than standard themes, full brand identity delivered, 99%+ stability, zero technical debt at launch.",
  resultCards: [
    {
      number: '45–60%',
      label: 'Faster load performance vs. standard Shopify theme setups at launch',
      humanNote: "Aryan's first impression is fast — not a test of patience",
    },
    {
      number: '✓',
      label: 'Full brand identity delivered through bespoke theme at launch',
      humanNote: "Kavya's brand lands exactly as she designed it",
    },
    {
      number: '99%+',
      label: 'Storefront stability during early launch operations and campaign traffic',
      humanNote: "Aditya's launch day ran without incident",
    },
    {
      number: '∞',
      label: 'Scalable architecture — future features and catalog growth without rebuilds',
      humanNote: 'The foundation grows with the brand, not against it',
    },
  ],

  humanImpactCards: [
    {
      icon: '✨',
      title: 'First Impression Captured',
      description:
        "Aryan discovers Freed and immediately gets a fast, visually cohesive experience that makes the brand feel considered and credible — the digital equivalent of a great product unboxing.",
    },
    {
      icon: '🎨',
      title: 'Brand Identity Intact',
      description:
        "Kavya's months of brand-building didn't get flattened by a generic theme. The storefront carries the identity through every component, every page, and every interaction.",
    },
    {
      icon: '🚀',
      title: 'Launch Foundation Built for Growth',
      description:
        "Aditya launched with a store that performed, converted, and looked like it had been in the market for longer than it had. And the architecture means the next phase of growth doesn't require a restart.",
    },
    {
      icon: '⚡',
      title: 'Zero Technical Debt at Go-Live',
      description:
        "The acceleration-induced shortcuts that typically come with new brand launches were avoided by design — the store was built once, correctly, with no list of post-launch fixes to work through.",
    },
  ],

  ctaBadge: "Let's build your brand's first home online",
  ctaHeadline: 'The right way to launch<br />is the only way to launch.',
  ctaSubline:
    "Bespoke Shopify builds for brands that won't accept a generic start — performance-optimised, brand-aligned, and scalable from day one.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default freed
