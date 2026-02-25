import { CaseStudy } from '@/types/case-study'

const sugarCosmetics: CaseStudy = {
  slug: 'sugar-cosmetics',
  isPublished: true,
  client: 'Sugar Cosmetics',
  industry: 'Beauty & Cosmetics Retail',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'Digital Consistency',
  pm: 'Raj',
  accent: '#c9184a',
  accentSoft: 'rgba(201,24,74,0.08)',
  accentLight: '#e52e62',

  eyebrow: 'Customer Experience · UX Enhancement · Digital Consistency · 2025',
  headline: "Elevating Digital Consistency for a Superior User Experience: <em>Sugar Cosmetics</em>",
  subheadline:
    'A bold brand needed its digital presence to match the confidence it sold in stores.',
  heroMeta: [
    { label: 'Client', value: 'Sugar Cosmetics' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandHeadline: "Bold cosmetics for every Indian skin tone.<br />Digital consistency across every touchpoint.",
  brandIntro: [
    "SUGAR Cosmetics is a leading Indian beauty brand known for trend-forward products and a strong digital-first customer base. With a growing product catalog and increasing mobile traffic, the brand needed to improve digital consistency across key storefront touchpoints — aligning product information visibility, browsing clarity, and interaction flows for a seamless shopping experience.",
    "We delivered a comprehensive UX enhancement program — establishing unified product information hierarchy across homepage, PLPs, and PDPs; improving interaction clarity through consistent purchase action placement; and strengthening visual continuity across browsing journeys. The result: faster product evaluation, reduced browsing friction, and improved purchase confidence.",
  ],
  brandTags: ['Beauty', 'Shopify', 'UX Enhancement', 'Digital Consistency', 'Mobile Commerce', 'India', 'Cosmetics'],
  brandStats: [
    { name: 'Platform', value: 'Shopify' },
    { name: 'Enhancement Areas', value: 'PLP · PDP · Homepage · Mobile UX' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Product Discovery Speed, Browsing Continuity & Purchase Confidence' },
    { name: 'Year', value: '2025' },
  ],

  peopleHeadline: "Built for the mobile shopper switching between browse and buy, the merchandising team managing cross-page consistency, and the growth lead measuring product evaluation speed.",
  peopleIntro:
    "Three people were experiencing the gap between SUGAR's bold brand identity and a digital experience that didn't fully deliver it — a customer who needed key product information faster, a product manager whose catalog depth was hidden, and a brand lead watching mobile engagement plateau.",
  personas: [
    {
      avatar: '💄',
      name: 'Priya',
      age: 27,
      role: 'SUGAR Cosmetics customer · beauty enthusiast',
      quote:
        'Beauty shoppers browsing on mobile during limited time windows needed to compare products quickly — but key information like shade ranges was only accessible after tapping into individual PDPs, adding enough friction to the browse-to-decision flow that shoppers would abandon the comparison rather than complete it.',
      painTag: '🔍 Essential product details requiring PDP tap — slowing browse-to-buy decision making',
    },
    {
      avatar: '🛍️',
      name: 'Kavya',
      age: 29,
      role: 'Digital Commerce Manager · SUGAR Cosmetics',
      quote:
        'Digital commerce managers overseeing large catalogs found customers clustering around hero SKUs without exploring the full product range — the browsing experience was not structured to surface catalog depth, and inconsistent CTA placement across page types created enough friction to stall discovery.',
      painTag: '📦 Catalog depth not surfacing through inconsistent browsing experience',
    },
    {
      avatar: '📊',
      name: 'Dhruv',
      age: 35,
      role: 'VP Digital · SUGAR Cosmetics',
      quote:
        'VP-level digital leaders at bold, high-growth beauty brands found that rapid catalog expansion had introduced inconsistencies across the storefront — varying product information hierarchy, differing interaction patterns by page type, and a mobile browsing experience that did not reflect the confidence of the brand it represented.',
      painTag: '⚡ Digital experience inconsistencies undermining a strong, confident brand identity',
    },
  ],

  challengeHeadline: "SUGAR Cosmetics' product information hierarchy was inconsistent across PLP, PDP, and homepage.",
  challengeParagraphs: [
    "SUGAR Cosmetics' digital storefront had grown rapidly alongside the brand — but that growth had introduced inconsistencies. Product information that Priya needed to make a quick decision on the collection page required a PDP visit. CTA placement varied between homepage, collection, and product pages, creating micro-frictions that accumulated into a browsing experience that didn't match the brand's boldness. Mobile users — a growing proportion of SUGAR's audience — felt the roughness most acutely.",
    "Kavya's catalog management challenge was visible in the data: customers were clustering around hero products without discovering the breadth that made SUGAR's range valuable. The browsing experience wasn't structured to surface product diversity or guide customers through the category depth. Dhruv's team needed enhancements delivered without disrupting ongoing campaign operations — the storefront had to improve continuously while staying live.",
  ],
  challengeTension:
    "A bold beauty brand with a growing catalog and a digital experience that was inconsistently revealing its depth.",
  challengeMetrics: [
    { name: 'Product information accessibility in PLPs', value: 'Insufficient — key details requiring PDP click', barPercent: 85, barStyle: 'gold' },
    { name: 'CTA placement consistency across touchpoints', value: 'Variable — creating interaction confusion', barPercent: 82, barStyle: 'gold' },
    { name: 'Mobile browsing continuity', value: 'Rough — friction points on mobile journey', barPercent: 88, barStyle: 'gold' },
    { name: 'Catalog discovery beyond hero products', value: 'Limited — depth not surfacing in browsing', barPercent: 80, barStyle: 'soft' },
    { name: 'Visual consistency across page types', value: 'Inconsistent — different experiences per section', barPercent: 78, barStyle: 'soft' },
  ],

  approachHeadline: "Unified product information architecture, consistent CTA placement, and mobile browsing flow optimization across the storefront.",
  approachIntro:
    "We made Priya's browse decisions faster, helped Kavya's catalog surface more deeply, and gave Dhruv a digital experience that matched SUGAR's brand confidence.",
  approachCards: [
    {
      icon: '📋',
      title: 'Unified Product Information Hierarchy',
      description:
        "Established consistent product information display across homepage, PLPs, and PDPs — essential attributes like shade count, formulation type, and key benefits visible on collection pages so Priya evaluates without an extra tap.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🎯',
      title: 'Consistent CTA Placement',
      description:
        "Aligned purchase actions consistently across all customer touchpoints — add-to-cart positioning, hover states, and quick-add functionality standardized so the path from browse to buy is intuitive regardless of where a customer enters.",
      badge: 'Human-Centricity',
    },
    {
      icon: '📱',
      title: 'Mobile Browsing Optimization',
      description:
        "Enhanced mobile-specific interactions — touch target sizing, scroll behavior, and above-the-fold product information prioritized for mobile browsing continuity across Kavya's extensive catalog.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🗂️',
      title: 'PDP Information Architecture',
      description:
        "Restructured PDP information layout to support faster product understanding — benefits hierarchy, shade selection, and usage context organized to reduce the cognitive load between discovering and purchasing.",
      badge: 'Sustainability',
    },
    {
      icon: '✨',
      title: 'Visual Continuity Enhancement',
      description:
        "Strengthened visual consistency across storefront sections — typography, spacing, and imagery treatment unified so customers experience SUGAR as a single coherent brand rather than a collection of separately designed pages.",
      badge: 'Sustainability',
    },
    {
      icon: '🔄',
      title: 'Controlled Deployment Without Disruption',
      description:
        "Delivered all enhancements through controlled deployment workflows ensuring operational stability during active campaigns — improvements shipped without risking live storefront performance.",
      badge: 'Resilience',
    },
  ],

  resultsHeadline: "20–30% faster product evaluation, consistent cross-page presentation, improved mobile browsing clarity.",
  resultCards: [
    {
      number: '20–30%',
      label: 'Faster product evaluation during browsing through improved information visibility',
      humanNote: "Priya compares lipsticks on the collection page without opening each one",
    },
    {
      number: '↑',
      label: 'Add-to-cart interaction readiness through consistent purchase action placement',
      humanNote: 'The path from decision to cart is the same on every page — no hunting required',
    },
    {
      number: '↓',
      label: 'Browsing friction reduced — smoother navigation continuity on homepage and collections',
      humanNote: "Dhruv's bold brand now has a bold digital experience to match",
    },
    {
      number: '↑↑',
      label: 'Customer confidence through clearer product understanding prior to purchase decisions',
      humanNote: "Kavya's catalog depth is discoverable — customers find the full SUGAR range",
    },
  ],

  humanImpactCards: [
    {
      icon: '💄',
      title: 'Faster Decisions',
      description:
        "Priya browses the SUGAR lipstick collection and sees shade counts, finish types, and key claims directly on the PLP — the information she needs to shortlist is visible without tapping into each product. Browse time reduces; purchase confidence increases.",
    },
    {
      icon: '🛍️',
      title: 'Catalog That Surfaces',
      description:
        "Kavya's range is visible through improved product discovery — consistent interaction patterns and clear information hierarchy guide customers beyond hero products into the depth of the SUGAR catalog. Average discovery depth per session improves.",
    },
    {
      icon: '📊',
      title: 'Brand Confidence in Every Pixel',
      description:
        "Dhruv's digital experience now matches SUGAR's brand boldness — consistent typography, unified CTA placement, and seamless mobile browsing create the coherent, confident digital presence that the brand's product quality deserves.",
    },
    {
      icon: '📈',
      title: 'Basket Value Opportunity',
      description:
        "Improved product discovery clarity creates basket-building opportunity — customers who find the depth of the catalog are more likely to add complementary products, supporting the higher basket values that SUGAR's range naturally enables.",
    },
  ],

  ctaBadge: "Let's elevate your digital consistency",
  ctaHeadline: "A bold brand deserves<br />a bold digital experience.",
  ctaSubline:
    "UX enhancement for beauty and cosmetics brands — unified product information hierarchy, consistent interaction patterns, and mobile browsing optimization that matches your brand confidence.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default sugarCosmetics
