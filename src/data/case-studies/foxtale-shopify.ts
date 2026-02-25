import { CaseStudy } from '@/types/case-study'

const foxtaleShopify: CaseStudy = {
  slug: 'foxtale-shopify',
  isPublished: true,
  client: 'Foxtale',
  industry: 'Skincare / D2C',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2024,
  type: 'Shopify Customisation',
  pm: 'Prerna Jain',
  accent: '#e07b54',
  accentSoft: 'rgba(224,123,84,0.08)',
  accentLight: '#e89674',

  eyebrow: 'Customer Experience · Shopify Customisation · Performance · 2024',
  headline: "Maximizing Shopify: Advanced Customization Before <em>Foxtale</em> Went Headless",
  subheadline:
    'Before breaking free, they pushed Shopify further than most brands dare.',
  heroMeta: [
    { label: 'Client', value: 'Foxtale' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandHeadline: "Before the headless migration —<br />a Shopify already twice as fast.",
  brandIntro: [
    "Foxtale is a Series C-funded Indian skincare brand that needed immediate performance improvements and advanced promotional capabilities within their existing Shopify setup before migrating to headless architecture. The native Shopify cart was slow, promotional flexibility was limited, and the platform couldn't support the sophisticated offer structures their marketing team required.",
    "We pushed Shopify to its technical limits — halving cart update time from 3 seconds to 1.5 seconds, building a metaobjects-based offer management system enabling unlimited promotional configurations, and creating product and collection-level customization infrastructure that made the marketing team independent from engineering for most campaign changes.",
  ],
  brandTags: ['Skincare', 'Shopify', 'Cart Optimization', 'Metaobjects', 'Promotions', 'Performance', 'India'],
  brandStats: [
    { name: 'Platform', value: 'Shopify (Advanced Customization)' },
    { name: 'Cart Speed', value: '3 seconds → 1.5 seconds (50% improvement)' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Cart Performance, Promotion Flexibility & Team Autonomy' },
    { name: 'Year', value: '2024' },
  ],

  peopleHeadline: "Built for the marketer constrained by development sprint cycles, the shopper experiencing 3-second cart loads, and the growth lead preparing for headless migration.",
  peopleIntro:
    "Three people needed Shopify to work harder before the headless migration was ready — a customer frustrated by cart lag, a marketer blocked by platform limitations, and an engineering lead who needed to buy the team time.",
  personas: [
    {
      avatar: '✨',
      name: 'Isha',
      age: 25,
      role: 'Foxtale customer · adding products to cart during a promotion',
      quote:
        'Shoppers adjusting cart quantities during flash sales faced a three-second wait before the page became usable again. On mobile, that lag was long enough to break purchase momentum and push customers toward abandonment.',
      painTag: '⏱️ 3-second cart update lag frustrating customers during promotions',
    },
    {
      avatar: '📱',
      name: 'Meghna',
      age: 29,
      role: 'Marketing Manager · Foxtale',
      quote:
        'Marketing managers with ideas for collection-specific offers, cart-value freebies, and page-level banners were blocked at every turn — each promotional concept required a developer to implement, making campaign velocity a function of the sprint calendar rather than marketing ambition.',
      painTag: '⏳ Every promotional change requiring developer intervention — marketing blocked',
    },
    {
      avatar: '⚙️',
      name: 'Karan',
      age: 31,
      role: 'Engineering Lead · Foxtale',
      quote:
        'Engineering leads found themselves needing to deliver meaningful improvements within an existing Shopify setup while the headless migration was still maturing. The platform had to be pushed beyond its standard capabilities without disrupting the workflows already in production.',
      painTag: '🔧 Bridge needed between current Shopify limitations and upcoming headless migration',
    },
  ],

  challengeHeadline: "Foxtale's marketing team was filing dev requests for every promotional offer change.",
  challengeParagraphs: [
    "Foxtale's Shopify cart was a measurable problem. Each cart quantity update took 3 seconds to process — a user experience issue that drove abandonment particularly during time-sensitive promotions when customers were actively managing their baskets. Within Shopify's native constraints, the cart performance was a function of API round-trips that standard optimization techniques couldn't fully eliminate.",
    "The promotional flexibility gap was equally constraining. Meghna's campaigns required multi-tiered offers, page-specific promotions, and complex freebie rules that Shopify's native promotional system wasn't designed to handle. Every new offer structure required engineering work, creating a bottleneck between campaign conception and campaign execution. Karan's team needed to solve both problems within the existing Shopify infrastructure while the headless migration matured.",
  ],
  challengeTension:
    "A skincare brand that had outgrown its Shopify setup but needed immediate improvements while the long-term solution was being built.",
  challengeMetrics: [
    { name: 'Cart quantity update response time', value: '3 seconds per interaction', barPercent: 88, barStyle: 'gold' },
    { name: 'Marketing promotional flexibility', value: 'Constrained — Shopify native limitations', barPercent: 85, barStyle: 'gold' },
    { name: 'Self-service promotional management', value: 'Absent — all changes require developers', barPercent: 82, barStyle: 'gold' },
    { name: 'Collection and product-level customization', value: 'No infrastructure — uniform experience', barPercent: 80, barStyle: 'soft' },
    { name: 'Engineering bandwidth for marketing requests', value: 'Overstretched — blocking campaign velocity', barPercent: 78, barStyle: 'soft' },
  ],

  approachHeadline: "Cart speed optimization, metaobjects-based offer management, and headless-compatible architecture — all in Shopify.",
  approachIntro:
    "We made Isha's cart twice as responsive, gave Meghna control over her own promotions, and freed Karan's engineering team from the marketing request backlog.",
  approachCards: [
    {
      icon: '⚡',
      title: 'Cart Speed Optimization',
      description:
        "Implemented custom cart logic reducing quantity update time from 3 seconds to 1.5 seconds within Shopify's constraints — halving user wait time and reducing abandonment during promotion-driven traffic.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🏷️',
      title: 'Metaobjects-Based Offer Management',
      description:
        "Leveraged Shopify metaobjects to create a flexible offer management system supporting page-specific promotions, multi-tiered discounts, and complex freebie rules — the promotional logic that Shopify's native system couldn't handle.",
      badge: 'Sustainability',
    },
    {
      icon: '🎨',
      title: 'Product and Collection-Level Customization',
      description:
        "Built infrastructure for delivering curated offers, banners, and promotional messaging at individual product and collection levels — Meghna's serum campaign shows serum-specific promotions without touching other parts of the store.",
      badge: 'Sustainability',
    },
    {
      icon: '🛒',
      title: 'Multi-Tier Promotional Logic',
      description:
        "Enabled unlimited promotional configurations including multi-tier offers, cart-based and code-based freebies, and collection-specific promotions — the full promotional vocabulary that sophisticated D2C marketing requires.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🔧',
      title: 'Engineering Burden Reduction',
      description:
        "The metaobjects system transferred most promotional management to Meghna's marketing team — reducing the flow of engineering requests by 40% and freeing Karan's team for infrastructure work.",
      badge: 'Resilience',
    },
    {
      icon: '🏗️',
      title: 'Headless Migration Foundation',
      description:
        "Designed the Shopify customization layer to be compatible with the upcoming headless migration — no rework required when the Next.js frontend went live; the promotional logic and metaobjects architecture transferred cleanly.",
      badge: 'Resilience',
    },
  ],

  resultsHeadline: "50% cart speed improvement, 40% reduction in marketing-to-engineering requests, migration-ready architecture.",
  resultCards: [
    {
      number: '50%',
      label: 'Cart speed improvement — from 3 seconds to 1.5 seconds per update',
      humanNote: "Isha's cart is twice as responsive during flash sales",
    },
    {
      number: '100%',
      label: 'Marketing offer flexibility — unlimited promotional configurations now available',
      humanNote: "Meghna creates multi-tier, collection-specific, freebie-driven campaigns independently",
    },
    {
      number: '40%',
      label: 'Reduction in marketing-to-engineering dev requests',
      humanNote: "Karan's team focuses on infrastructure rather than promotional configuration",
    },
    {
      number: '↑↑',
      label: 'Campaign velocity — marketing team launches offers without waiting for development sprints',
      humanNote: 'Promotional campaigns ship in hours, not sprint cycles',
    },
  ],

  humanImpactCards: [
    {
      icon: '✨',
      title: 'Cart That Responds',
      description:
        "Isha's cart updates in 1.5 seconds rather than 3 — still not instant, but a meaningful improvement that reduces the friction that was driving abandonment during time-sensitive promotions. The headless migration would eliminate this entirely.",
    },
    {
      icon: '📱',
      title: 'Marketing Team Unblocked',
      description:
        "Meghna creates and publishes new promotional offers through the metaobjects admin without raising a development request — collection-specific banners, tiered freebies, and code-based promotions all managed independently.",
    },
    {
      icon: '⚙️',
      title: 'Engineering Freed for What Matters',
      description:
        "Karan's team processes 40% fewer marketing requests — time redirected to the headless migration infrastructure. The Shopify optimization was a bridge solution that delivered immediate value while enabling the long-term architectural work.",
    },
    {
      icon: '📈',
      title: 'Foundation for What Came Next',
      description:
        "The metaobjects promotional architecture built in this phase transferred directly to the headless migration — no rework, no throwaway code. The Shopify optimization was an investment in the headless build, not a detour from it.",
    },
  ],

  ctaBadge: "Let's maximize your Shopify capability",
  ctaHeadline: "Push Shopify to its limits<br />before you replace it.",
  ctaSubline:
    "Advanced Shopify customization — cart performance optimization, metaobjects-based promotion management, and marketing team autonomy — without leaving the platform.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default foxtaleShopify
