import { CaseStudy } from '@/types/case-study'

const zenDiamonds: CaseStudy = {
  slug: 'zen-diamonds',
  isPublished: true,
  client: 'Zen Diamonds',
  industry: 'Luxury Jewellery Retail',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'UX Optimization & Performance Engineering',
  pm: 'Raj',
  accent: '#3d5a80',
  accentSoft: 'rgba(61,90,128,0.08)',
  accentLight: '#5577a8',

  eyebrow: 'UX Optimization · Performance Engineering · 2025',
  headline: "Holistic Digital Enhancement for <em>Zen Diamonds</em>: Boosting Performance and Transforming UX",
  subheadline:
    'Luxury deserves a digital experience that performs as beautifully as the jewellery it presents.',
  heroMeta: [
    { label: 'Client', value: 'Zen Diamonds' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "Zen Diamonds is an internationally recognized jewellery brand offering premium diamond collections through curated digital and retail experiences. In the luxury category, the digital experience carries enormous weight — a slow page or a confusing product journey doesn't just reduce conversion; it contradicts the brand promise.",
    "The storefront was carrying the weight of high-resolution imagery, complex collection browsing, and growing mobile traffic — without the performance architecture to support any of them well. We partnered with Zen Diamonds to address performance and UX holistically, improving the technical foundation while refining the browsing and decision-making experience for discerning luxury shoppers.",
  ],
  brandTags: ['Luxury Jewellery', 'Shopify', 'Performance Engineering', 'UX Optimization', 'Mobile-First', 'India'],
  brandStats: [
    { name: 'Platform', value: 'Shopify (Performance & UX Enhancement)' },
    { name: 'Region', value: 'India / International' },
    { name: 'Focus', value: 'Load Performance, UX Clarity & Mobile Responsiveness' },
    { name: 'Engagement', value: 'Performance Engineering & UX Consulting' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    'Three people were affected by a storefront that underperformed its product — an affluent shopper whose expectations were not met, a digital manager whose high-resolution imagery became a liability, and a brand director for whom every slow second was a reputational cost.',
  personas: [
    {
      avatar: '💎',
      name: 'Priya',
      age: 38,
      role: 'Luxury jewellery shopper · Mumbai',
      quote:
        "Luxury shoppers evaluating a significant diamond purchase needed the digital experience to inspire the same confidence as the product. Slow-loading imagery and a clunky mobile interface created friction at precisely the moment the browsing experience needed to feel effortless and assured.",
      painTag: '⏳ Slow load times undermine purchase confidence',
    },
    {
      avatar: '🖼️',
      name: 'Aditya',
      age: 32,
      role: 'Digital Experience Manager · Zen Diamonds',
      quote:
        "Jewellery is a visual category where high-resolution imagery is non-negotiable. Digital experience teams found that the same photography driving engagement was the primary cause of slow page loads — and no straightforward compromise existed between image quality and delivery speed.",
      painTag: '📷 High-res imagery creating performance tradeoffs',
    },
    {
      avatar: '✨',
      name: 'Shefali',
      age: 45,
      role: 'Brand Director · Zen Diamonds',
      quote:
        "Luxury brand directors held the in-store experience to an exceptional standard — and expected the digital channel to match it. The gap between a carefully curated physical environment and a slow, inconsistent storefront was difficult to reconcile for a brand operating at that level.",
      painTag: '🏆 Digital experience below in-store luxury standard',
    },
  ],

  challengeParagraphs: [
    "Zen Diamonds operated in a category where the digital experience had to earn the trust required for high-consideration purchases. Priya wasn't browsing for impulse items — she was evaluating a significant investment. Every friction point in the browsing journey — a slow image load, a confusing navigation path, a mobile layout that didn't inspire confidence — worked against the purchase decision she came to make.",
    "The technical challenge was real: jewellery imagery is inherently high-resolution and cannot be meaningfully compressed without visual quality loss. The solution had to be architectural — delivery strategies, loading prioritisation, and rendering optimisation that maintained presentation quality while eliminating the load overhead.",
  ],
  challengeTension:
    "You cannot compress a diamond. The imagery demands quality. The experience demands speed. The job is delivering both.",
  challengeMetrics: [
    { name: 'Page load performance across media-rich experience', value: 'Critically slow', barPercent: 88, barStyle: 'gold' },
    { name: 'High-resolution imagery delivery', value: 'Unoptimised delivery', barPercent: 85, barStyle: 'gold' },
    { name: 'Mobile browsing responsiveness', value: 'Poor', barPercent: 82, barStyle: 'gold' },
    { name: 'PDP interaction clarity and purchase hierarchy', value: 'Underdeveloped', barPercent: 75, barStyle: 'soft' },
    { name: 'Navigation hierarchy for collection exploration', value: 'Requiring refinement', barPercent: 70, barStyle: 'soft' },
  ],

  approachIntro:
    "The approach was structured around Priya's trust, Aditya's imagery requirements, and Shefali's brand standard — with no concession on any of them.",
  approachCards: [
    {
      icon: '🔍',
      title: 'UX & Performance Audit',
      description:
        "Conducted comprehensive audits across homepage, PDPs, and collection browsing journeys — mapping every friction point and performance bottleneck before touching a single line of code.",
      badge: 'Sustainability',
    },
    {
      icon: '🖼️',
      title: 'Structured Asset Delivery for Luxury Imagery',
      description:
        "Implemented image compression, modern format delivery, and structured loading strategies to serve Aditya's high-resolution product photography fast — without visible quality reduction.",
      badge: 'Resilience',
    },
    {
      icon: '⏳',
      title: 'Lazy Loading & Above-the-Fold Prioritisation',
      description:
        "Implemented lazy loading and above-the-fold rendering prioritisation — Priya sees the hero experience instantly, and the rest of the page follows as she explores.",
      badge: 'Human-Centricity',
    },
    {
      icon: '💎',
      title: 'PDP & PLP Interaction Hierarchy Refinement',
      description:
        "Refined product page and listing page interaction hierarchy to support informed, high-consideration purchasing — improving discovery clarity and reducing the cognitive friction in Priya's decision journey.",
      badge: 'Human-Centricity',
    },
    {
      icon: '📱',
      title: 'Mobile-First Layout & Interaction Refinements',
      description:
        "Improved mobile responsiveness through targeted layout and interaction refinements — ensuring the mobile experience meets the standard Shefali holds for every customer touchpoint.",
      badge: 'Human-Centricity',
    },
    {
      icon: '⚙️',
      title: 'Script Execution & Third-Party Optimisation',
      description:
        "Optimised script execution and third-party integrations to reduce rendering delays without disrupting storefront functionality or ongoing operations.",
      badge: 'Resilience',
    },
  ],

  resultCards: [
    {
      number: '45–60%',
      label: 'Faster page loading across homepage and PDP experiences',
      humanNote: "Priya's high-value browsing session is no longer interrupted by loading",
    },
    {
      number: '20–25%',
      label: 'Improvement in mobile interaction responsiveness',
      humanNote: "Shefali's digital experience now approaches the standard set in-store",
    },
    {
      number: '✓',
      label: 'High-resolution jewellery imagery maintained at full quality',
      humanNote: "Aditya's photography performs beautifully — fast and faithful",
    },
    {
      number: '↑↑',
      label: 'Browsing continuity and customer engagement across collection journeys',
      humanNote: 'Luxury shoppers explore further and hesitate less',
    },
  ],

  humanImpactCards: [
    {
      icon: '💎',
      title: 'Shopper Confidence',
      description:
        "Priya can now browse a luxury diamond collection with a digital experience that matches what the purchase deserves — fast, smooth, and designed to support the trust a high-consideration decision requires.",
    },
    {
      icon: '🖼️',
      title: 'Visual Integrity Preserved',
      description:
        "Aditya's high-resolution product photography is delivered at full quality through optimised asset strategies — beautiful imagery that loads before shoppers lose patience.",
    },
    {
      icon: '✨',
      title: 'Brand Standard Met',
      description:
        "Shefali's digital channel now holds itself to the same standard as the in-store experience it's meant to complement — premium, unhurried, and worthy of the brand it represents.",
    },
    {
      icon: '📊',
      title: 'Campaign Readiness',
      description:
        "The optimised storefront maintains performance consistency under campaign traffic — promotional periods no longer test the limits of a performance baseline that wasn't designed for scale.",
    },
  ],

  ctaBadge: "Let's elevate your luxury digital experience",
  ctaHeadline: 'Premium products deserve a<br />premium digital presence.',
  ctaSubline:
    "UX optimization and performance engineering for luxury brands — delivering the browsing experience that high-consideration customers expect and high-value purchases require.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default zenDiamonds
