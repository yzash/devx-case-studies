import { CaseStudy } from '@/types/case-study'

const raymond: CaseStudy = {
  slug: 'raymond',
  isPublished: true,
  client: 'Raymond',
  industry: 'Premium Fashion / Multi-Brand Retail',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'Analytics & Tracking',
  pm: 'Yash Patel',
  accent: '#1a1a2e',
  accentSoft: 'rgba(26,26,46,0.08)',
  accentLight: '#2e2e50',

  eyebrow: 'Customer Experience · Analytics & Tracking · GA4 · 2025',
  headline: "Complete Visibility: GA4 Event Tracking and Conversion Optimization for <em>MyRaymond</em>",
  subheadline:
    "You can't improve what you can't see. Now they can see everything.",
  heroMeta: [
    { label: 'Client', value: 'Raymond' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "MyRaymond is the official e-commerce platform for Raymond Group, featuring premium brands including Raymond, Park Avenue, ColorPlus, Parx, and Sleepz. With a multi-brand catalog spanning formal wear, casual wear, and lifestyle products, the platform needed comprehensive GA4 event tracking to enable data-driven decision making, optimize conversion funnels, and improve marketing ROI.",
    "We implemented comprehensive GA4 event tracking across all critical touchpoints — including enhanced e-commerce events, conversion funnel tracking, cross-brand navigation patterns, and advanced user behavior analytics — giving Raymond's marketing, product, and leadership teams complete visibility into their customer journey for the first time.",
  ],
  brandTags: ["Premium Fashion", "GA4", "Analytics", "Multi-Brand", "Event Tracking", "Conversion Optimization", "India"],
  brandStats: [
    { name: 'Platform', value: 'Shopify + GA4 (Google Analytics 4)' },
    { name: 'Brands Tracked', value: 'Raymond · Park Avenue · ColorPlus · Parx · Sleepz' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'User Journey Visibility, Funnel Optimization & Marketing Attribution' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people were making important decisions without the data to support them well — a marketing director allocating budget without attribution clarity, a product manager optimizing funnels with aggregate data only, and a brand head of a premium multi-brand platform with no behavioral visibility.",
  personas: [
    {
      avatar: '👔',
      name: 'Kabir',
      age: 38,
      role: 'Digital Marketing Director · Raymond Group',
      quote:
        "We were running campaigns across Google, Meta, and email for five premium brands. But our attribution data was basic — last-click only, no cross-channel visibility. I was making multi-crore budget decisions based on incomplete information about which campaigns were actually driving purchase intent.",
      painTag: '📊 Multi-crore marketing budget allocated on incomplete attribution data',
    },
    {
      avatar: '📱',
      name: 'Priyanka',
      age: 30,
      role: 'Product Manager · MyRaymond',
      quote:
        "I knew we had a checkout drop-off but I couldn't tell you where in the funnel it was happening. Aggregate conversion rates are interesting but they don't tell you what to fix. I needed step-level funnel data for each brand — which we didn't have before GA4.",
      painTag: '🔍 Checkout drop-off visible in aggregates but step-level cause impossible to identify',
    },
    {
      avatar: '🧵',
      name: 'Ashish',
      age: 45,
      role: 'VP E-Commerce · Raymond Group',
      quote:
        "With five premium brands on one platform, we needed to understand not just overall performance but brand-specific user behavior. How do customers move between Raymond and Park Avenue? Where does cross-brand discovery happen? Which brand's customers have the highest LTV? This was all invisible.",
      painTag: '🏷️ Multi-brand behavioral data invisible — cross-brand patterns and brand-level LTV unknown',
    },
  ],

  challengeParagraphs: [
    "MyRaymond's multi-brand architecture created a complex analytics challenge. Standard page view tracking couldn't reveal how customers moved between Raymond and Park Avenue collections, what drove cross-brand discovery, or which brand interactions preceded purchase. Priyanka's funnel optimization work was constrained by aggregate data that pointed to a problem without revealing its location — the checkout drop-off was visible in the overall conversion rate, but not in any specific funnel step.",
    "Kabir's attribution problem was compounded by the premium fashion context: customers buying Raymond formalwear often research across multiple sessions and multiple devices before purchasing. Last-click attribution systematically misattributed conversions to the final touchpoint and systematically undervalued the awareness and consideration touchpoints that actually drove the purchase decision. Ashish needed brand-level behavioral intelligence that multi-brand GA4 implementation could provide — but hadn't yet.",
  ],
  challengeTension:
    "A premium multi-brand platform making marketing and product decisions in near-darkness — while managing a catalog that warranted sophisticated behavioral intelligence.",
  challengeMetrics: [
    { name: 'Funnel step-level visibility', value: 'Absent — aggregate metrics only', barPercent: 92, barStyle: 'gold' },
    { name: 'Cross-brand navigation tracking', value: 'None — inter-brand behavior invisible', barPercent: 88, barStyle: 'gold' },
    { name: 'Marketing attribution accuracy', value: 'Last-click only — systematically incomplete', barPercent: 85, barStyle: 'gold' },
    { name: 'Brand-level user behavior segmentation', value: 'None — all brands reported in aggregate', barPercent: 82, barStyle: 'gold' },
    { name: 'E-commerce event completeness', value: 'Minimal — purchase only, no pre-purchase events', barPercent: 80, barStyle: 'soft' },
  ],

  approachIntro:
    "GA4 implementation gave Kabir attribution data he could act on, gave Priyanka the step-level funnel clarity she needed to optimize, and gave Ashish the brand-level intelligence a premium multi-brand platform requires.",
  approachCards: [
    {
      icon: '📊',
      title: 'Comprehensive GA4 Event Tracking',
      description:
        "Implemented full GA4 event tracking across all critical user interactions — view_item, add_to_cart, begin_checkout, purchase, and custom events for scroll depth, engagement, and cross-brand navigation patterns.",
      badge: 'Sustainability',
    },
    {
      icon: '🛒',
      title: 'Enhanced E-Commerce Event Configuration',
      description:
        "Configured enhanced e-commerce events enabling granular tracking of the entire purchase journey — from first product view through to order confirmation, with every intermediate step tracked and attributable.",
      badge: 'Sustainability',
    },
    {
      icon: '🔍',
      title: 'Conversion Funnel Step-Level Tracking',
      description:
        "Built conversion funnel tracking with step-level event granularity — Priyanka can now see exactly where users abandon across each brand's checkout funnel, enabling targeted optimization rather than broad guesses.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🏷️',
      title: 'Multi-Brand Behavioral Segmentation',
      description:
        "Implemented brand-level event segmentation enabling Ashish to analyze behavior independently across Raymond, Park Avenue, ColorPlus, Parx, and Sleepz — plus cross-brand discovery and navigation patterns.",
      badge: 'Resilience',
    },
    {
      icon: '📱',
      title: 'Advanced User Behavior Tracking',
      description:
        "Integrated scroll depth tracking, engagement time metrics, cross-device user journey stitching, and session quality measurement — giving Kabir and Priyanka the full behavioral picture for each campaign and product decision.",
      badge: 'Sustainability',
    },
    {
      icon: '💡',
      title: 'Marketing Attribution Enhancement',
      description:
        "Configured GA4's attribution models to surface multi-touch channel contribution — enabling Kabir to move beyond last-click attribution and understand the true role of awareness and consideration campaigns in driving premium fashion purchase decisions.",
      badge: 'Human-Centricity',
    },
  ],

  resultCards: [
    {
      number: '✓',
      label: 'Complete user journey visibility — end-to-end tracking across all brands and touchpoints',
      humanNote: "Ashish sees exactly how customers move through the five-brand Raymond universe",
    },
    {
      number: '↑↑',
      label: 'Data-driven optimization enabled — funnel drop-off points identified and fixable',
      humanNote: "Priyanka finds the checkout step causing abandonment — and can now fix it",
    },
    {
      number: '↑',
      label: 'Marketing attribution accuracy — multi-touch contribution replacing last-click misallocation',
      humanNote: "Kabir allocates marketing budget based on true channel contribution",
    },
    {
      number: '✓',
      label: 'Actionable insights for all teams — granular data empowering product, marketing, and leadership',
      humanNote: 'Every team at Raymond makes decisions with the data they actually need',
    },
  ],

  humanImpactCards: [
    {
      icon: '👔',
      title: 'Budget Allocated to What Works',
      description:
        "Kabir's attribution data reveals the true contribution of awareness channels to premium fashion conversions — multi-session, multi-device journeys that last-click attribution was systematically misrepresenting. Budget follows truth rather than assumption.",
    },
    {
      icon: '📱',
      title: 'Funnel Fixed at the Source',
      description:
        "Priyanka identifies the exact checkout step causing abandonment for each brand — Park Avenue customers drop at shipping, Raymond customers drop at payment method. Each problem gets a targeted fix rather than a broad, ineffective solution.",
    },
    {
      icon: '🧵',
      title: 'Multi-Brand Intelligence',
      description:
        "Ashish analyzes Raymond Group's e-commerce operation with brand-level granularity — which brand has the highest repeat purchase rate, where cross-brand discovery is highest, and which customer segments show the most valuable LTV patterns.",
    },
    {
      icon: '📈',
      title: 'Continuous Improvement Capability',
      description:
        "The GA4 implementation becomes a permanent analytical foundation — every new campaign, product, and feature is measured with the same granularity, giving Raymond a compounding analytical advantage as the platform grows.",
    },
  ],

  ctaBadge: "Let's build your analytics foundation",
  ctaHeadline: "Complete visibility into your<br />customer journey — brand by brand.",
  ctaSubline:
    "GA4 event tracking for multi-brand retail platforms — step-level funnel visibility, enhanced e-commerce events, and attribution modeling that reflects how premium fashion customers actually buy.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default raymond
