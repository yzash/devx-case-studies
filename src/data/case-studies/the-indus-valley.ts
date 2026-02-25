import { CaseStudy } from '@/types/case-study'

const theIndusValley: CaseStudy = {
  slug: 'the-indus-valley',
  isPublished: true,
  client: 'The Indus Valley',
  industry: 'Kitchenware & Lifestyle (D2C Retail)',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'Shopify Performance Optimization',
  pm: 'Raj',
  accent: '#b5451b',
  accentSoft: 'rgba(181,69,27,0.08)',
  accentLight: '#d4673a',

  eyebrow: 'Performance Optimization · Shopify · 2025',
  headline: "Accelerating <em>The Indus Valley</em>: Optimizing Website Performance for Faster Load Times and Improved Engagement",
  subheadline:
    'When milliseconds are the margin between a scroll and a sale — and a premium kitchen brand was losing both.',
  heroMeta: [
    { label: 'Client', value: 'The Indus Valley' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "The Indus Valley is a premium Indian kitchenware and lifestyle brand known for its toxin-free cookware and commitment to sustainable home products. With growing online demand and a product catalog that communicates through rich visual content, the storefront needed to perform at the standard the brand had set for its products.",
    "Performance had degraded as the catalog grew. Media-heavy product pages, legacy scripts, and accumulated third-party integrations had combined to create load time bottlenecks that were quietly costing browsing sessions and purchase momentum. The work was focused and technical: remove the friction, preserve the functionality, and deliver speed without disrupting what was working.",
  ],
  brandTags: ['Kitchenware', 'Sustainable Living', 'Shopify', 'Performance Optimization', 'India D2C', 'Mobile-First'],
  brandStats: [
    { name: 'Platform', value: 'Shopify (Performance Optimization)' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Load Speed, Mobile Responsiveness & Core Web Vitals' },
    { name: 'Engagement', value: 'Technical Performance Enhancement' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    'Three people were paying the price of a slow storefront — a shopper who expected premium performance, a merchandiser watching traffic not convert, and a brand leader who knew speed was part of quality.',
  personas: [
    {
      avatar: '🍳',
      name: 'Meena',
      age: 33,
      role: 'Health-conscious home cook · Chennai',
      quote:
        "Shoppers arriving from editorial content on toxin-free living found product images loading slowly and pages stalling on mobile. Purchase intent built outside the site eroded quickly once they were on it.",
      painTag: '📱 Slow mobile page loads eroding purchase intent',
    },
    {
      avatar: '📈',
      name: 'Suresh',
      age: 35,
      role: 'Digital Operations Manager · The Indus Valley HQ',
      quote:
        "Traffic growth was not translating to conversion growth, with performance metrics consistently flagged in audits as the cause. Systematically addressing the issues without breaking existing functionality proved difficult to manage internally.",
      painTag: '📉 Traffic growth not translating to conversion',
    },
    {
      avatar: '🌿',
      name: 'Kavitha',
      age: 42,
      role: 'Head of Ecommerce · The Indus Valley',
      quote:
        "A brand built on premium craftsmanship was being represented by a storefront that loaded slowly and performed inconsistently. Site performance at odds with product quality is a contradiction the brand couldn't afford to leave unresolved.",
      painTag: '🐢 Site performance misaligned with brand quality positioning',
    },
  ],

  challengeParagraphs: [
    "The Indus Valley had built a brand around quality and intentionality — but the storefront was delivering an experience that contradicted both. Compressed images were still too large, third-party scripts were executing in ways that blocked rendering, and the mobile experience was particularly affected by assets that hadn't been optimised for smaller connections.",
    "The challenge wasn't identifying the problem — performance audits had flagged the issues. The challenge was systematically resolving them without introducing new instability. Every optimization had to be tested against existing integrations, and improvements had to hold under the higher traffic loads that campaigns would bring.",
  ],
  challengeTension:
    "A brand that stands for quality and craftsmanship — delivering a browsing experience that communicates neither.",
  challengeMetrics: [
    { name: 'Homepage and PDP load performance', value: 'Significantly degraded', barPercent: 85, barStyle: 'gold' },
    { name: 'Media asset optimization', value: 'Insufficient', barPercent: 80, barStyle: 'gold' },
    { name: 'Mobile interaction responsiveness', value: 'Below standard', barPercent: 82, barStyle: 'gold' },
    { name: 'Third-party script execution overhead', value: 'High', barPercent: 75, barStyle: 'soft' },
    { name: 'Above-the-fold rendering speed', value: 'Too slow', barPercent: 78, barStyle: 'soft' },
  ],

  approachIntro:
    'Every optimization decision was mapped to a real browsing impact — what Meena felt, what Suresh could measure, and what Kavitha could point to.',
  approachCards: [
    {
      icon: '🔍',
      title: 'Performance Audit Across Key Journeys',
      description:
        "Conducted comprehensive performance audits across homepage, PDPs, and collection browsing — identifying the specific bottlenecks that were costing Meena's browsing sessions.",
      badge: 'Sustainability',
    },
    {
      icon: '🖼️',
      title: 'Asset Compression & Media Optimization',
      description:
        "Optimised all product images and media assets through structured compression and format improvements — maintaining visual quality while drastically reducing load overhead.",
      badge: 'Sustainability',
    },
    {
      icon: '⏳',
      title: 'Lazy Loading Implementation',
      description:
        "Implemented lazy loading for images and non-critical components — above-the-fold content loads immediately while the rest follows as Meena scrolls.",
      badge: 'Human-Centricity',
    },
    {
      icon: '⚙️',
      title: 'Script Execution Cleanup',
      description:
        "Audited and optimised third-party script execution — removing render-blocking dependencies and deferring non-critical scripts to improve perceived performance.",
      badge: 'Resilience',
    },
    {
      icon: '📱',
      title: 'Mobile-First Performance Tuning',
      description:
        "Applied targeted mobile performance improvements to address the specific constraints of smaller connections and mobile rendering — ensuring the mobile experience matched the desktop.",
      badge: 'Human-Centricity',
    },
    {
      icon: '📊',
      title: 'Performance Monitoring Establishment',
      description:
        "Set up ongoing monitoring practices to ensure performance gains were maintained — Suresh's team now has visibility into performance benchmarks before they become customer complaints.",
      badge: 'Sustainability',
    },
  ],

  resultCards: [
    {
      number: '50–65%',
      label: 'Improvement in page load performance across key customer journeys',
      humanNote: "Meena's mobile experience now matches the premium standard the brand sets",
    },
    {
      number: '20–30%',
      label: 'Improvement in mobile interaction responsiveness',
      humanNote: 'Mobile shoppers browse further and engage more deeply',
    },
    {
      number: '↑↑',
      label: 'Homepage and PDP rendering speed — stronger browsing continuity',
      humanNote: "Suresh's conversion metrics follow the performance improvements",
    },
    {
      number: '✓',
      label: 'Stable storefront operations maintained throughout optimization',
      humanNote: "Kavitha's brand now performs at the standard it deserves",
    },
  ],

  humanImpactCards: [
    {
      icon: '🍳',
      title: 'Shopper Momentum',
      description:
        "Meena arrives on the site and moves through it with purpose — product pages load before her interest fades, and the mobile experience no longer interrupts the purchase journey she came to complete.",
    },
    {
      icon: '📈',
      title: 'Conversion Alignment',
      description:
        "Suresh's traffic now converts at the rate a healthy performance score supports. The gap between visits and purchases narrowed because the gap between intent and page-ready closed.",
    },
    {
      icon: '🌿',
      title: 'Brand Coherence',
      description:
        "Kavitha's storefront now communicates the same care and quality that goes into every product. A fast, responsive site isn't just better UX — it's brand alignment that customers feel without articulating.",
    },
    {
      icon: '⚙️',
      title: 'Campaign Readiness',
      description:
        "Optimised asset delivery means the storefront is ready for campaign traffic — high-volume events no longer stress the performance baseline that was carefully rebuilt.",
    },
  ],

  ctaBadge: "Let's fix what's slowing your store down",
  ctaHeadline: 'A premium brand deserves<br />a premium browsing experience.',
  ctaSubline:
    "Systematic performance optimization that removes the load time friction costing you browsing sessions, engagement, and conversions — without touching what works.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default theIndusValley
