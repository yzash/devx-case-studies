import { CaseStudy } from '@/types/case-study'

const loopie: CaseStudy = {
  slug: 'loopie',
  isPublished: true,
  client: 'Loopie',
  industry: 'Baby Products & Parenting',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'Shopify Conversion Optimization',
  pm: 'Kaustubh',
  accent: '#2c7873',
  accentSoft: 'rgba(44,120,115,0.08)',
  accentLight: '#3d9e98',

  eyebrow: 'Shopify · Conversion Optimization · 2025',
  headline: "Conversion-Driven E-Commerce Optimization for <em>Loopie</em>",
  subheadline:
    'Every UX decision traced back to a single question: does this make someone more likely to buy?',
  heroMeta: [
    { label: 'Client', value: 'Loopie' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "Loopie is an Indian D2C brand specializing in premium baby strollers and parenting products. In a category where parents research extensively before purchasing, the digital experience needs to earn trust, reduce hesitation, and make the path to purchase as smooth as possible.",
    "The storefront had the right products — but the browsing and buying experience wasn't keeping pace with the brand's growth ambitions. Product discovery was limited, PDPs were cluttered, and the cart created friction at exactly the moment customers needed confidence. A targeted conversion optimization engagement addressed each of these pressure points with precision.",
  ],
  brandTags: ['Baby Products', 'D2C', 'Shopify', 'Conversion Optimization', 'UX Enhancement', 'India'],
  brandStats: [
    { name: 'Platform', value: 'Shopify (Conversion Optimization)' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'ATC Rate, Cart Experience & AOV' },
    { name: 'Engagement', value: 'UX & Conversion Enhancement' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people were navigating a storefront that wasn't doing enough for them — a parent researching carefully, a merchandiser limited in visibility, and a growth lead watching conversion stagnate.",
  personas: [
    {
      avatar: '👶',
      name: 'Priyanka',
      age: 31,
      role: 'New parent researching strollers · Bengaluru',
      quote:
        "I need to understand exactly what I'm buying before I spend this much on a stroller. But the product pages feel busy and I can't quickly find the specifications I care about. I end up leaving to research elsewhere.",
      painTag: '📄 Cluttered PDPs killing research confidence',
    },
    {
      avatar: '🛍️',
      name: 'Rahul',
      age: 28,
      role: 'Digital Merchandiser · Loopie HQ',
      quote:
        "Our featured products and promotions aren't getting seen. The homepage doesn't surface what we want to push, and the cart experience means customers often abandon right at the point of decision.",
      painTag: '🔍 Poor product visibility limiting promotional effectiveness',
    },
    {
      avatar: '📊',
      name: 'Anita',
      age: 35,
      role: 'Growth Lead · Loopie',
      quote:
        "Cart abandonment is high and our Add-to-Cart rate is lower than it should be. We know the products are right — the issue is the experience. We need targeted improvements, not a rebuild.",
      painTag: '📉 ATC rate and cart abandonment underperforming',
    },
  ],

  challengeParagraphs: [
    "Loopie was operating with a storefront that put products in front of customers but didn't guide them. The homepage lacked the structured CTAs and featured sections that turn browsing into discovery. Product pages presented information as walls of text rather than digestible, scannable content — a critical failure in a high-consideration category where parents need clarity, not overwhelm.",
    "The cart experience compounded everything. Accessibility was inconsistent — customers had to hunt for the Add-to-Cart button, which created friction precisely when intent was highest. Cart interactions were slow, coupon visibility was low, and the reviews section wasn't formatted to build the social proof that parenting purchases depend on. Each friction point individually was manageable; combined, they were systematically limiting conversion.",
  ],
  challengeTension:
    "Parents researching strollers don't give second chances — if the page confuses them before they buy, they go to a brand that doesn't.",
  challengeMetrics: [
    { name: 'Product visibility and discoverability', value: 'Insufficient', barPercent: 80, barStyle: 'gold' },
    { name: 'PDP information digestibility', value: 'Cluttered', barPercent: 85, barStyle: 'gold' },
    { name: 'Add-to-Cart accessibility and interaction speed', value: 'Below standard', barPercent: 82, barStyle: 'gold' },
    { name: 'Coupon and promotional visibility in journey', value: 'Poor', barPercent: 75, barStyle: 'soft' },
    { name: 'Reviews section trust impact', value: 'Underdeveloped', barPercent: 70, barStyle: 'soft' },
  ],

  approachIntro:
    "Every change was evaluated against one question: does this make Priyanka more likely to buy, Rahul more likely to surface products, and Anita more likely to hit her conversion targets?",
  approachCards: [
    {
      icon: '🏠',
      title: 'Homepage Discovery Enhancement',
      description:
        "Added homepage CTA buttons and featured product sections to surface the right products at the right moment — Rahul's promotions now have a visible home.",
      badge: 'Human-Centricity',
    },
    {
      icon: '📋',
      title: 'Tabbed PDP Redesign',
      description:
        "Redesigned product pages with tabbed content architecture — giving Priyanka clean, scannable access to specifications, features, and benefits without the cognitive overload of a single scrollable wall.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🛒',
      title: 'Floating Add-to-Cart Button',
      description:
        "Built a persistent floating Add-to-Cart button that follows the shopper down the PDP — the purchase action is always one tap away regardless of how deep into the product Priyanka has scrolled.",
      badge: 'Human-Centricity',
    },
    {
      icon: '↗️',
      title: 'Slide-Out Cart Drawer',
      description:
        "Transformed the cart into a slide-out drawer experience — cart interactions are immediate and in-context, without navigating away from the browsing journey that brought the customer to this point.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🏷️',
      title: 'Prominent Coupon Section on PDPs',
      description:
        "Added a visible coupon and offer section directly on product pages — so Priyanka discovers the saving before checkout, not after she's already second-guessing the purchase.",
      badge: 'Sustainability',
    },
    {
      icon: '⭐',
      title: 'Reviews Section Optimisation',
      description:
        "Restructured the reviews section layout and presentation to maximize social proof impact — in a high-consideration category, what other parents say matters more than what the brand does.",
      badge: 'Human-Centricity',
    },
  ],

  resultCards: [
    {
      number: '35%',
      label: 'Increase in Add-to-Cart rate through floating ATC button and visibility improvements',
      humanNote: "Priyanka can add to cart without interrupting her research flow",
    },
    {
      number: '45%',
      label: 'Faster cart interactions with drawer-style implementation',
      humanNote: 'The cart responds instantly — intent is captured before it fades',
    },
    {
      number: '28%',
      label: 'Increase in Average Order Value through coupon placement and visibility',
      humanNote: "Anita's AOV moved because customers see the value before hesitating",
    },
    {
      number: '↓↓',
      label: 'Significant reduction in cart abandonment through seamless drawer experience',
      humanNote: "Rahul's featured products convert — not just get viewed",
    },
  ],

  humanImpactCards: [
    {
      icon: '👶',
      title: 'Parent Confidence',
      description:
        "Priyanka gets the product information she needs in the format she can act on — clean tabbed layout, visible social proof, and a buy button that never disappears while she decides.",
    },
    {
      icon: '🛍️',
      title: 'Merchandiser Visibility',
      description:
        "Rahul's featured products and promotions now have structured homepage placement — campaigns surface to customers who are already in a buying mindset.",
    },
    {
      icon: '📊',
      title: 'Conversion Performance',
      description:
        "Anita's ATC rate, AOV, and abandonment metrics all moved in the right direction because the friction was removed from each stage of the purchase journey systematically.",
    },
    {
      icon: '💬',
      title: 'Social Proof Impact',
      description:
        "In a high-consideration parenting category, the reviews section now does the job it's supposed to — building the trust that converts cautious researchers into confident buyers.",
    },
  ],

  ctaBadge: "Let's optimize your conversion journey",
  ctaHeadline: 'Every friction point removed<br />is a sale recovered.',
  ctaSubline:
    "Targeted Shopify conversion optimization that addresses the specific UX barriers stopping your customers from completing the purchase they arrived intending to make.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default loopie
