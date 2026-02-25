import { CaseStudy } from '@/types/case-study'

const cometRetailos: CaseStudy = {
  slug: 'comet-retailos',
  isPublished: true,
  client: 'Comet',
  industry: 'D2C Fashion / Sneaker Retail',
  region: 'India',
  pillar: 'Customer Experience',
  product: 'retailOS',
  year: 2025,
  type: 'RetailOS Implementation',
  pm: 'Anant Khemka',
  accent: '#ff6b35',
  accentSoft: 'rgba(255,107,53,0.08)',
  accentLight: '#ff8557',

  eyebrow: 'Customer Experience · retailOS · Retail Expansion · 2025',
  headline: "From Clicks to Kicks: Powering <em>Comet</em>'s Retail Expansion with retailOS",
  subheadline:
    'Sneaker culture moves fast. The retail backbone needed to keep up.',
  heroMeta: [
    { label: 'Client', value: 'Comet' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandHeadline: "Sneakers online and in-store —<br />one inventory, one version of reality.",
  brandIntro: [
    "Comet is a fast-growing Indian sneaker brand known for bold designs and accessible pricing, with strong momentum among Gen Z and young urban consumers. As demand scaled, Comet expanded into offline retail across multiple cities — requiring a retail technology partner that could match its pace, ambition, and omnichannel vision.",
    "We deployed retailOS across Comet's retail stores in under three weeks — integrating seamlessly with their existing Shopify and Unicommerce stack, delivering SKU-level inventory tracking, unified omnichannel order management, and a premium browser-based POS interface that required no new hardware and matched the brand's design-forward aesthetic.",
  ],
  brandTags: ['D2C Sneakers', 'retailOS', 'Shopify', 'Unicommerce', 'Omnichannel', 'POS', 'India'],
  brandStats: [
    { name: 'Platform', value: 'retailOS + Shopify + Unicommerce' },
    { name: 'Deployment', value: 'Under 3 Weeks' },
    { name: 'Region', value: 'India (Multi-City)' },
    { name: 'Focus', value: 'Inventory Accuracy, Omnichannel Sync & Retail Experience' },
    { name: 'Year', value: '2025' },
  ],

  peopleHeadline: "Built for the store associate billing on a slow POS, the ops manager chasing stock discrepancies, and the growth lead measuring true omnichannel performance.",
  peopleIntro:
    "Three people had to trust that the retail infrastructure would work from day one — a customer expecting a seamless in-store experience, a store associate needing a system that was intuitive from hour one, and an ops lead with a three-week deadline.",
  personas: [
    {
      avatar: '👟',
      name: 'Aarav',
      age: 22,
      role: 'Comet customer · Gen Z sneaker enthusiast',
      quote:
        "Customers attempting to exchange online purchases in-store typically expected a complicated process — with disconnected systems, store associates often had no visibility of online order history, making cross-channel service slow and frustrating.",
      painTag: '🔄 Online-to-offline exchanges requiring seamless omnichannel order handling',
    },
    {
      avatar: '🏪',
      name: 'Meera',
      age: 26,
      role: 'Store Associate · Comet Retail',
      quote:
        "New store associates at retail launches were routinely given minimal training time before opening — traditional POS systems carried enough complexity that staff rarely reached confident operation within the first hours of a shift.",
      painTag: '⏱️ New retail staff needing a system they could master in hours',
    },
    {
      avatar: '📦',
      name: 'Suresh',
      age: 35,
      role: 'Head of Retail Operations · Comet',
      quote:
        "Retail operations heads overseeing simultaneous store openings needed a fully integrated POS — connected to both Shopify and Unicommerce — delivered within three weeks, a timeline that most retail systems could not realistically meet.",
      painTag: '🚀 Three-week launch timeline with zero tolerance for delay',
    },
  ],

  challengeHeadline: "Comet's retail stores and Shopify were running on different versions of the same inventory.",
  challengeParagraphs: [
    "Comet's retail launch was already in motion when they approached devx. Stores were ready, staff hired, and inventory flowing in. The brand required a robust POS system that integrated seamlessly with Shopify and Unicommerce — without disrupting existing workflows or requiring new hardware. The aggressive three-week timeline left no room for complex implementation or extended staff training.",
    "As a design-forward brand with a Gen Z audience, the in-store experience also had to match the premium quality of the product. A clunky or dated POS interface would undermine the brand perception Comet had built online. The system needed to be intuitive enough that Meera could serve customers confidently on day one — and omnichannel enough that Aarav's online purchase history was immediately visible at any store.",
  ],
  challengeTension:
    "A sneaker brand built for speed — facing a retail technology implementation that most systems take months to deliver.",
  challengeMetrics: [
    { name: 'Implementation timeline', value: 'Three weeks from agreement to live', barPercent: 90, barStyle: 'gold' },
    { name: 'Hardware investment required', value: 'Zero — browser-based POS needed', barPercent: 85, barStyle: 'gold' },
    { name: 'Staff training complexity', value: 'Same-day adoption required', barPercent: 82, barStyle: 'gold' },
    { name: 'Omnichannel sync accuracy', value: 'Real-time across Shopify and Unicommerce', barPercent: 88, barStyle: 'gold' },
    { name: 'Inventory tracking granularity', value: 'Item-code level required', barPercent: 80, barStyle: 'soft' },
  ],

  approachHeadline: "retailOS deployed in under 3 weeks — browser-based POS, RFID-level stock tracking, Shopify and Unicommerce sync.",
  approachIntro:
    "retailOS gave Aarav a seamless omnichannel experience, gave Meera a POS she learned in an hour, and gave Suresh a launch that came in exactly on time.",
  approachCards: [
    {
      icon: '🔌',
      title: 'Plug-and-Play Shopify + Unicommerce Integration',
      description:
        "Deployed retailOS directly into Comet's existing Shopify and Unicommerce stack — eliminating redundant setups and enabling seamless backend continuity from day one without requiring parallel systems.",
      badge: 'Resilience',
    },
    {
      icon: '📊',
      title: 'RFID & SKU-Level Inventory Management',
      description:
        "Enabled real-time item-code level tracking giving store staff complete visibility of stock availability, movement, and location — accurate inventory from warehouse to store shelf at all times.",
      badge: 'Sustainability',
    },
    {
      icon: '🔄',
      title: 'Unified Omnichannel Order Management',
      description:
        "Implemented mixed-order handling enabling buy online–pick up in store, in-store purchases shipped from warehouse, and seamless cross-channel returns — Aarav's online order is visible and actionable at any Comet store.",
      badge: 'Human-Centricity',
    },
    {
      icon: '💻',
      title: 'Premium Browser-Based POS Interface',
      description:
        "Designed with an e-commerce-inspired layout, retailOS required no new hardware and allowed store associates like Meera to adapt within hours — a familiar, intuitive interface built for brand-forward retail.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🎁',
      title: 'Loss of Sale & Gift Card Modules',
      description:
        "Advanced retailOS modules capturing lost sales data for inventory planning and enabling gift card issuance and redemption across the retail network — features that demonstrated platform depth from launch.",
      badge: 'Sustainability',
    },
    {
      icon: '⚡',
      title: 'Three-Week End-to-End Deployment',
      description:
        "Complete integration, configuration, and staff onboarding delivered within Comet's aggressive launch timeline — no store opening delayed, no operational gap created, no team stretched beyond capacity.",
      badge: 'Resilience',
    },
  ],

  testimonial: {
    quote: "In a remarkably short timeline, the team delivered one of the most scalable and robust retail POS solutions we've worked with. What began as an exploration of off-the-shelf tools quickly evolved into a fully customised system — and that decision proved right. The Shopify integration, clean omnichannel database architecture, and seamless Unicommerce + warehousing setup have created a truly unified system across operations and finance. From handling complex transactions (refunds, returns, exchanges, payment edge cases) to continuous UX improvements and mobile optimisation, every detail was thoughtfully executed. This POS journey stands out as a phenomenal example of strong solution architecture and execution. Truly one of a kind.",
    name: 'Team Comet',
    title: 'Retail Operations Leadership',
  },

  resultsHeadline: "100% real-time inventory sync, 35% accuracy improvement, 40% faster billing, live in under 3 weeks.",
  resultCards: [
    {
      number: '100%',
      label: 'Real-time sync across channels — orders, returns, and stock reflected instantly',
      humanNote: "Aarav's online order is visible and actionable at every Comet store",
    },
    {
      number: '<3 wks',
      label: 'Complete retail deployment — integration, configuration, and staff onboarding',
      humanNote: "Suresh's launch date held without a single delay",
    },
    {
      number: '35%',
      label: 'Improvement in inventory accuracy through item-level tracking',
      humanNote: 'Stock discrepancies between warehouse and store eliminated at source',
    },
    {
      number: '40%',
      label: 'Faster checkout and staff adoption through intuitive POS design',
      humanNote: "Meera was serving customers confidently within her first hour",
    },
  ],

  humanImpactCards: [
    {
      icon: '👟',
      title: 'Omnichannel Experience Delivered',
      description:
        "Aarav exchanges online-purchased sneakers in-store in minutes — the POS surfaces his order history, validates the exchange, and updates inventory across all channels instantly. The in-store experience matches the online brand.",
    },
    {
      icon: '🏪',
      title: 'Instant Staff Adoption',
      description:
        "Meera learned retailOS in under an hour because it felt familiar — an e-commerce-inspired interface that aligned with how she already thought about products, orders, and customers. No legacy POS complexity.",
    },
    {
      icon: '📦',
      title: 'A Launch That Held Its Date',
      description:
        "Suresh's three-week timeline was not a negotiation — it was a requirement. retailOS delivered end-to-end integration, complete staff onboarding, and live operations without a single day of delay.",
    },
    {
      icon: '📈',
      title: 'Retail Infrastructure That Scales',
      description:
        "Every new Comet store is added to the same retailOS platform — same integration, same quality, same speed of deployment. The retail backbone scales with the brand's expansion without proportional operational effort.",
    },
  ],

  ctaBadge: "Let's power your retail expansion",
  ctaHeadline: "retailOS: the retail backbone<br />your brand's expansion deserves.",
  ctaSubline:
    "Browser-based omnichannel POS deployed in weeks — Shopify and Unicommerce integrated, staff-ready from day one, inventory tracked to the item level.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default cometRetailos
