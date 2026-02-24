import { CaseStudy } from '@/types/case-study'

const beardoCartx: CaseStudy = {
  slug: 'beardo-cartx',
  isPublished: true,
  client: 'Beardo',
  industry: "Men's Grooming",
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'Product Integration / Checkout Optimisation',
  pm: 'Raj',
  product: 'cartx',
  accent: '#2d3436',
  accentSoft: 'rgba(45,52,54,0.08)',
  accentLight: '#4a5456',

  eyebrow: 'Product Integration · cartx · Checkout Optimisation · 2025',
  headline: "Enhancing <em>Beardo</em>'s Customer Journeys with a Streamlined cartx Checkout Experience",
  subheadline:
    'The checkout was the last thing standing between a full cart and a completed order. cartx removed what was standing in the way.',
  heroMeta: [
    { label: 'Client', value: 'Beardo' },
    { label: 'Product', value: 'cartx' },
  ],

  brandIntro: [
    "Beardo is one of India's leading men's grooming brands with a high-volume D2C storefront serving a loyal and growing customer base. With strong campaign activity and frequent promotional cycles, the brand needed a cart experience that could surface offers intelligently, reduce pre-checkout hesitation, and convert consideration into commitment.",
    "The native Shopify cart was functional — but passive. It didn't communicate promotions, didn't validate coupons before checkout, and couldn't automate Gift-With-Purchase without heavy coupon logic. cartx was introduced as a conversion-focused cart layer to solve all of this without touching Shopify's checkout — protecting platform stability while dramatically improving the purchase experience.",
  ],
  brandTags: ["Men's Grooming", 'cartx', 'Shopify', 'Checkout Optimisation', 'GWP Automation', 'India D2C'],
  brandStats: [
    { name: 'Product', value: 'cartx (Cart Experience Layer)' },
    { name: 'Platform', value: 'Shopify' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Cart-to-Checkout Conversion & AOV' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    'Three people felt the friction in the old cart every time it mattered most — a shopper who needed clarity before committing, a marketer running promotions on manual logic, and a growth lead watching AOV plateau.',
  personas: [
    {
      avatar: '🧔',
      name: 'Rohan',
      age: 28,
      role: 'Beardo regular · Pune',
      quote:
        'Beardo shoppers had no visibility into available discounts or promotions until reaching checkout — a point at which some had already abandoned the session. The absence of offer information earlier in the cart journey delayed or prevented conversion.',
      painTag: '❓ No offer visibility before checkout',
    },
    {
      avatar: '📣',
      name: 'Priya',
      age: 31,
      role: 'CRM & Campaign Manager · Beardo HQ',
      quote:
        'CRM and campaign managers running Gift-With-Purchase promotions at Beardo managed every element manually — coupon code setup, eligibility monitoring, and individual order corrections. Each campaign consumed significant operational hours with no automation to reduce the overhead.',
      painTag: '⚙️ Manual GWP workflows eating campaign time',
    },
    {
      avatar: '📊',
      name: 'Dev',
      age: 35,
      role: 'Growth Lead · Beardo',
      quote:
        'Growth leads at Beardo identified untapped average order value potential that the existing cart experience was failing to unlock. Upsell opportunities went unnoticed and promotional offer engagement remained low, leaving basket value unrealized at the most critical point of the purchase journey.',
      painTag: '📉 AOV and promo engagement below potential',
    },
  ],

  challengeParagraphs: [
    "Beardo's cart was invisible in the wrong ways. It held the items — but it didn't communicate value. Customers arrived at checkout not knowing about the offers they qualified for, which created hesitation precisely when confidence was needed most. Coupon validation only at checkout meant some customers gave up rather than hunting for codes.",
    "Promotional infrastructure was equally costly. Every Gift-With-Purchase campaign required manual configuration and monitoring. For a brand running frequent campaigns with high promotional dependency, this was operational overhead that didn't need to exist — and a conversion ceiling that didn't need to stay where it was.",
  ],
  challengeTension:
    "A cart that holds the right products but says nothing about the value inside — until it's almost too late.",
  challengeMetrics: [
    { name: 'Offer visibility before checkout', value: 'None', barPercent: 95, barStyle: 'gold' },
    { name: 'Coupon validation friction', value: 'Checkout-only', barPercent: 85, barStyle: 'gold' },
    { name: 'GWP management automation', value: 'Fully manual', barPercent: 90, barStyle: 'gold' },
    { name: 'Upselling touchpoints in cart', value: 'Absent', barPercent: 80, barStyle: 'soft' },
    { name: 'Cart-to-Checkout progression efficiency', value: 'Below potential', barPercent: 72, barStyle: 'soft' },
  ],

  approachIntro:
    'cartx was configured and customised to give Rohan the clarity he needed, Priya the automation she was owed, and Dev the basket value opportunity he could see.',
  approachCards: [
    {
      icon: '🎁',
      title: 'Automated Gift-With-Purchase Management',
      description:
        "Implemented automated GWP logic across multiple promotional scenarios — Priya's campaigns now run without coupon code management or manual order adjustments.",
      badge: 'Sustainability',
    },
    {
      icon: '🏆',
      title: 'Milestone Offer Visualisation',
      description:
        "Built milestone-based offer visualisation directly in the cart — Rohan can see how close he is to earning a reward and acts on it before reaching checkout.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🏷️',
      title: 'Cart-Level Coupon Validation',
      description:
        "Enabled coupon application and validation at cart stage — so savings are confirmed before checkout, removing the hesitation that was costing conversions.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🤖',
      title: 'AI-Based Upselling Recommendations',
      description:
        "Integrated AI-powered upselling aligned with customer purchase intent — giving Dev's growth team a basket expansion mechanism that works without manual curation.",
      badge: 'Sustainability',
    },
    {
      icon: '💰',
      title: 'Transparent Price Breakdown',
      description:
        'Added real-time price breakdown including shipping estimates and savings — so Rohan reaches checkout confident, not calculating.',
      badge: 'Human-Centricity',
    },
    {
      icon: '🎨',
      title: 'Fully Branded Cart Experience',
      description:
        "Customised cartx aesthetics to match Beardo's visual identity — the cart experience is seamless with the storefront, not a jarring third-party overlay.",
      badge: 'Resilience',
    },
  ],

  resultCards: [
    {
      number: '25%',
      label: 'Improvement in Cart-to-Checkout progression',
      humanNote: "Rohan sees his discount in the cart — and he doesn't need to think twice",
    },
    {
      number: '15%',
      label: 'Uplift in Average Order Value through upselling and milestone offers',
      humanNote: "Dev's AOV moved because the cart is finally doing the work",
    },
    {
      number: '20%',
      label: 'Faster ATC-to-Checkout movement',
      humanNote: 'The path from cart to payment is shorter and more confident',
    },
    {
      number: '80%',
      label: 'Reduction in promotional coupon dependency through automated GWP',
      humanNote: "Priya's campaigns run themselves — she focuses on strategy, not logistics",
    },
  ],

  humanImpactCards: [
    {
      icon: '🧔',
      title: 'Shopper Confidence',
      description:
        "Rohan now sees his discounts, his gift eligibility, and his total savings before he hits checkout. The uncertainty that was causing drop-offs is replaced by momentum.",
    },
    {
      icon: '📣',
      title: 'Campaign Automation',
      description:
        "Priya's team runs Gift-With-Purchase campaigns at scale with no manual configuration. The system knows the rules, applies them correctly, and handles exceptions — without human intervention.",
    },
    {
      icon: '📊',
      title: 'Growth Performance',
      description:
        "Dev's AOV metrics are moving because the cart is finally working as a conversion tool, not just a holding area. Upselling, milestone visualisation, and transparent pricing combine into measurable basket growth.",
    },
    {
      icon: '⚙️',
      title: 'Platform Stability',
      description:
        "cartx operated entirely outside Shopify's native checkout — meaning the improvement in cart experience came with zero risk to the checkout stability the brand depends on.",
    },
  ],

  ctaBadge: "Let's make your cart do more",
  ctaHeadline: 'A cart that converts is a cart<br />that communicates.',
  ctaSubline:
    "cartx implementations that transform passive cart experiences into active conversion tools — without touching Shopify checkout.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default beardoCartx
