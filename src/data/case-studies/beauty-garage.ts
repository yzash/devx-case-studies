import { CaseStudy } from '@/types/case-study'

const beautyGarage: CaseStudy = {
  slug: 'beauty-garage',
  isPublished: true,
  client: 'Beauty Garage',
  industry: 'Professional Haircare',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'UI & Performance',
  pm: 'Yash Patel',
  accent: '#d4a5a5',
  accentSoft: 'rgba(212,165,165,0.08)',
  accentLight: '#dbbebe',

  eyebrow: 'Customer Experience · UI & Performance · Website Revamp · 2025',
  headline: "Best-in-Class: Complete Website Revamp and Performance Optimization for <em>Beauty Garage</em>",
  subheadline:
    'A best-in-class experience for a brand that sells best-in-class beauty.',
  heroMeta: [
    { label: 'Client', value: 'Beauty Garage' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandHeadline: "Professional haircare, properly presented.<br />A storefront as expert as the products.",
  brandIntro: [
    "Beauty Garage is a premium Indian haircare brand offering professional salon-quality products — shampoos, conditioners, masks, and treatments — designed for customers who take their hair as seriously as their skincare. With salon-professional formulations and a growing D2C presence, the brand needed a website that delivered the premium salon experience digitally.",
    "We delivered a comprehensive website revamp — pixel-perfect design implementation, speed optimization through code and asset management, and strategic upselling sections including product combos, frequently bought together, and related products — elevating brand perception, improving site performance, and increasing average order value.",
  ],
  brandTags: ["Professional Haircare", "Shopify", "Website Revamp", "UI/UX", "Performance", "Upselling", "India"],
  brandStats: [
    { name: 'Platform', value: 'Shopify' },
    { name: 'Deliverables', value: 'Pixel-Perfect Design · Speed Optimization · Upsell Engine' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Brand Premium Perception, Page Speed & Average Order Value' },
    { name: 'Year', value: '2025' },
  ],

  peopleHeadline: "Built for the professional stylist browsing for expertise, the buyer looking for ritual cues, and the team managing a growing catalog.",
  peopleIntro:
    "Three people needed the website to work harder — a customer looking for a complete haircare routine who bought only one product, a brand manager whose premium products deserved better digital presentation, and a founder watching website performance constrain conversion.",
  personas: [
    {
      avatar: '💇',
      name: 'Nisha',
      age: 32,
      role: 'Beauty Garage customer · salon-quality haircare enthusiast',
      quote:
        'Beauty Garage customers purchasing a single product — such as a shampoo — had no in-session prompt to discover matching items like conditioners or treatments. Routine completion required a separate return visit, missing an opportunity to build the full haircare ritual in a single session.',
      painTag: '🛍️ Single-product purchases missing routine-completion and product combination discovery',
    },
    {
      avatar: '✨',
      name: 'Divya',
      age: 28,
      role: 'Brand Manager · Beauty Garage',
      quote:
        'Brand managers at Beauty Garage found that the website communicated a generic beauty standard rather than the salon-professional quality the brand\'s formulations represented. Generic Shopify theme adaptations fell short of the brand guidelines — approximations that were visible and damaging in a premium haircare context.',
      painTag: '🎨 Website design not reflecting salon-professional brand standards and product quality',
    },
    {
      avatar: '📊',
      name: 'Rohit',
      age: 40,
      role: 'Founder · Beauty Garage',
      quote:
        'Founders at Beauty Garage contended with slow load times and an outdated design, but the most significant commercial gap was basket size. Customers purchased individual products in isolation because the website offered no structure to surface how the shampoo, conditioner, mask, and treatment worked together as a complete professional routine.',
      painTag: '📉 Slow load times, outdated design, and insufficient product combination discovery',
    },
  ],

  challengeHeadline: "Beauty Garage's brand authority wasn't reflected in a storefront that looked like a template.",
  challengeParagraphs: [
    "Beauty Garage's website had accumulated the debt of rapid growth — design inconsistencies, performance overhead, and a product presentation that treated each item as independent rather than as part of an interconnected professional haircare system. Nisha's single-product purchase pattern wasn't unusual: the website had no mechanism to surface how the shampoo, conditioner, mask, and treatment worked together as a complete professional ritual.",
    "Divya's brand standard challenge was specific: pixel-perfect design implementation meant no deviation from the brand guidelines in typography, spacing, imagery treatment, or color hierarchy. Generic Shopify themes had been adapted rather than designed — and the approximation was visible in the premium haircare context where brand presentation signaled product quality. Rohit needed the performance improvement, the design lift, and the AOV mechanism simultaneously.",
  ],
  challengeTension:
    "A salon-professional haircare brand whose digital presence wasn't communicating the professional standard of its formulations.",
  challengeMetrics: [
    { name: 'Website design premium alignment', value: 'Outdated — below salon-professional brand standard', barPercent: 88, barStyle: 'gold' },
    { name: 'Page load performance', value: 'Slow — performance overhead from unoptimized build', barPercent: 85, barStyle: 'gold' },
    { name: 'Product combination and ritual discovery', value: 'Absent — no upsell or routine-completion logic', barPercent: 90, barStyle: 'gold' },
    { name: 'Average order value from single products', value: 'Low — customers buying individually, not ritually', barPercent: 82, barStyle: 'gold' },
    { name: 'Mobile experience quality', value: 'Below standard — inconsistent across devices', barPercent: 78, barStyle: 'soft' },
  ],

  approachHeadline: "Pixel-perfect redesign, performance optimization, and 'complete the ritual' upsell logic throughout.",
  approachIntro:
    "We gave Nisha a complete haircare ritual experience, gave Divya pixel-perfect brand expression, and gave Rohit performance and AOV improvements in the same revamp.",
  approachCards: [
    {
      icon: '🎨',
      title: 'Pixel-Perfect Design Implementation',
      description:
        "Implemented the Beauty Garage brand guidelines with pixel-perfect fidelity — typography weights, color hierarchy, spacing system, and imagery treatment applied consistently across every page without approximation.",
      badge: 'Human-Centricity',
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description:
        "Optimized website performance through code optimization, image compression, lazy loading, and asset management — faster load times improving the experience for Rohit's mobile audience without sacrificing visual quality.",
      badge: 'Sustainability',
    },
    {
      icon: '🌿',
      title: 'Complete Ritual Upsell Sections',
      description:
        "Built 'complete the ritual' product combination sections — Nisha sees the matching conditioner and mask when she views the shampoo, presented as a professional haircare system rather than as separate products.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🛒',
      title: 'Frequently Bought Together Logic',
      description:
        "Implemented frequently bought together recommendations based on actual purchase patterns — surfacing product combinations that Beauty Garage's customers naturally gravitate toward as a complete haircare routine.",
      badge: 'Sustainability',
    },
    {
      icon: '🔗',
      title: 'Related Products Architecture',
      description:
        "Built related product display logic across all PDPs — ensuring customers browsing any product see relevant alternatives, complementary treatments, and complete-the-routine suggestions that encourage multi-product discovery.",
      badge: 'Sustainability',
    },
    {
      icon: '📱',
      title: 'Modern UI/UX With Improved Navigation',
      description:
        "Enhanced UI/UX with modern design patterns, improved navigation, and intuitive product filtering — the complete website refresh Divya needed to represent Beauty Garage's salon-professional standard across every touchpoint.",
      badge: 'Resilience',
    },
  ],

  resultsHeadline: "Elevated brand credibility, stronger site performance, and increased average order value from ritual-based upselling.",
  resultCards: [
    {
      number: '↑↑',
      label: 'Premium brand perception — pixel-perfect design elevated salon-quality positioning',
      humanNote: "Divya's brand guidelines are expressed exactly as designed — no approximation",
    },
    {
      number: '↑',
      label: 'Improved site performance — faster load times through code optimization and asset management',
      humanNote: "Rohit's customers reach the product before losing patience",
    },
    {
      number: '↑↑',
      label: 'Increased average order value — strategic upselling driving complete routine discovery',
      humanNote: "Nisha discovers the matching conditioner and adds it — the routine builds naturally",
    },
    {
      number: '✓',
      label: 'Enhanced user experience — modern UI/UX and improved product discovery',
      humanNote: 'The website matches the professional quality of the products it sells',
    },
  ],

  humanImpactCards: [
    {
      icon: '💇',
      title: 'Complete Ritual Discovery',
      description:
        "Nisha views the Beauty Garage shampoo and sees the 'complete the ritual' section showing the matching conditioner and deep conditioning mask. She builds a professional haircare routine in a single session — AOV grows because discovery finally works.",
    },
    {
      icon: '✨',
      title: 'Brand Standard Expressed',
      description:
        "Divya's brand guidelines are implemented exactly — correct typography, correct color weights, correct spacing. The website communicates salon-professional quality because the design looks like it was built by someone who understood what salon-professional meant.",
    },
    {
      icon: '📊',
      title: 'Performance and Conversion Together',
      description:
        "Rohit's revamp delivered all three objectives simultaneously — faster load times, elevated brand design, and higher AOV from upsell logic. The website is now an asset for the business rather than a constraint on it.",
    },
    {
      icon: '📈',
      title: 'Digital Presence Matching Product Quality',
      description:
        "Beauty Garage's digital presence now matches the standard of its formulations — professional, premium, and designed for customers who take their haircare seriously. The website earns the trust that the product quality has already built.",
    },
  ],

  ctaBadge: "Let's revamp your brand website",
  ctaHeadline: "Your products are professional quality.<br />Your website should be too.",
  ctaSubline:
    "Complete website revamps for professional beauty and wellness brands — pixel-perfect design, performance optimization, and upsell logic that grows basket size naturally.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default beautyGarage
