import { CaseStudy } from '@/types/case-study'

const cetaphilCartx: CaseStudy = {
  slug: 'cetaphil-cartx',
  isPublished: true,
  client: 'Skin Health & You',
  industry: 'Healthcare & Dermatology Retail',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'Product Integration / Checkout Optimization',
  pm: 'Raj',
  product: 'cartx',
  accent: '#0077b6',
  accentSoft: 'rgba(0,119,182,0.08)',
  accentLight: '#0096d6',

  eyebrow: 'Product Integration · cartx · Checkout Optimization · 2025',
  headline: "Elevating <em>Skin Health & You</em>'s Customer Experience Through cartx Checkout Optimization",
  subheadline:
    "Conversion-ready from day one — a cart experience built for a dermatology brand that earns trust at every step.",
  heroMeta: [
    { label: 'Client', value: 'Skin Health & You (Cetaphil India)' },
    { label: 'Product', value: 'cartx' },
  ],

  brandIntro: [
    "Skin Health & You is a certified ecommerce retailer associated with Galderma's Cetaphil portfolio in India, offering dermatologist-recommended skincare products through digital channels. Trust and clarity are not optional in a healthcare-adjacent retail context — customers making skincare purchases based on dermatologist guidance need confidence at every step of the purchase journey.",
    "As part of the Shopify migration for its certified ecommerce operations, cartx was implemented alongside the new storefront launch to establish a conversion-ready cart experience from day one — delivering promotional transparency, purchase clarity, and campaign flexibility without requiring post-launch optimization cycles.",
  ],
  brandTags: ['Healthcare', 'Skincare', 'Cetaphil', 'cartx', 'Shopify', 'Checkout Optimization', 'India'],
  brandStats: [
    { name: 'Product', value: 'cartx (Cart Experience Layer)' },
    { name: 'Platform', value: 'Shopify' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Conversion Readiness, Trust & Campaign Flexibility' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people needed the cart experience to earn their confidence — a customer who relies on dermatologist guidance, a campaign manager who needed flexibility from launch, and a business head who couldn't afford a second optimization cycle.",
  personas: [
    {
      avatar: '🧴',
      name: 'Ritu',
      age: 30,
      role: 'Regular Cetaphil customer · Delhi',
      quote:
        "My dermatologist recommended these products specifically. I don't want to discover a discount code exists only after I've paid. Knowing exactly what I'm paying — and what I'm saving — before I check out is part of trusting the store.",
      painTag: '💰 Needs pricing transparency before committing to checkout',
    },
    {
      avatar: '📣',
      name: 'Shreya',
      age: 29,
      role: 'Digital Campaign Manager · Skin Health & You',
      quote:
        "Running promotions on a new platform with only coupon codes as a mechanism is limiting. We need Gift-With-Purchase campaigns, milestone offers, and the ability to surface these benefits to customers before they leave the cart.",
      painTag: '🎁 Coupon-only promotions limit campaign flexibility',
    },
    {
      avatar: '📊',
      name: 'Neelam',
      age: 40,
      role: 'Business Head · Skin Health & You',
      quote:
        "We just launched on a new platform. We can't afford to discover conversion issues after launch and then run another optimization cycle. The cart experience has to be right from go-live.",
      painTag: '🚀 Conversion readiness required from launch day one',
    },
  ],

  challengeParagraphs: [
    "A new Shopify storefront needs to earn customer trust immediately — especially in a healthcare-adjacent retail context where customers have been directed by dermatologists and carry high product expectations. The native Shopify cart provided functional containment but no conversion intelligence: no promotional visibility, no milestone offers, and no way to show customers the value they were receiving before reaching checkout.",
    "For Shreya's campaigns, the constraints were operational. Coupon-only promotional architecture required customers to already know about codes that existed — with no in-cart mechanism to surface benefits automatically or guide customers toward offer eligibility. cartx was the answer to both problems: installed at launch, it provided promotional intelligence without touching the Shopify checkout that underpinned the storefront's operational stability.",
  ],
  challengeTension:
    "A dermatology-led brand launching on a new platform — where every customer who doesn't see their savings is one hesitation away from an abandoned cart.",
  challengeMetrics: [
    { name: 'Promotional visibility in cart journeys', value: 'None at launch', barPercent: 90, barStyle: 'gold' },
    { name: 'Cart-level coupon discovery and validation', value: 'Absent', barPercent: 88, barStyle: 'gold' },
    { name: 'GWP campaign flexibility without coupons', value: 'Not supported', barPercent: 85, barStyle: 'gold' },
    { name: 'Purchase confidence and trust messaging in cart', value: 'Underdeveloped', barPercent: 78, barStyle: 'soft' },
    { name: 'Operational promotion management simplicity', value: 'Manual coupon dependency', barPercent: 75, barStyle: 'soft' },
  ],

  approachIntro:
    "cartx was configured to give Ritu the clarity she needed, Shreya the campaign flexibility she required, and Neelam the conversion performance she couldn't wait for.",
  approachCards: [
    {
      icon: '🎁',
      title: 'Automated Gift-With-Purchase Management',
      description:
        "Implemented automated GWP logic without coupon dependency — Shreya's campaigns activate automatically when eligibility criteria are met, with no manual intervention needed.",
      badge: 'Sustainability',
    },
    {
      icon: '🏆',
      title: 'Milestone Offer Visualisation',
      description:
        "Built milestone-based offer visualisation directly in the cart — Ritu can see exactly how close she is to unlocking a benefit, turning a passive cart into an active incentive.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🏷️',
      title: 'Cart-Level Coupon Application',
      description:
        "Enabled coupon discovery and validation within the cart before checkout — Ritu sees her savings confirmed before she commits, removing the hesitation that causes abandonment.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🤖',
      title: 'AI-Driven Upselling Recommendations',
      description:
        "Integrated AI-based product recommendations aligned with purchase intent — surfacing complementary Cetaphil products that genuinely belong together in a skincare routine.",
      badge: 'Sustainability',
    },
    {
      icon: '💰',
      title: 'Transparent Pricing Breakdown',
      description:
        "Added real-time pricing transparency including shipping estimates and discount visibility — Ritu reaches checkout informed, not calculating.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🎨',
      title: 'Brand-Aligned Cart Aesthetics',
      description:
        "Customised cartx to match Cetaphil's clean, clinical, trust-focused visual identity — the cart experience reinforces the brand promise rather than interrupting it.",
      badge: 'Resilience',
    },
  ],

  resultCards: [
    {
      number: '✓',
      label: 'Conversion-ready cart experience delivered from Shopify go-live',
      humanNote: "Neelam launched without a post-launch optimization backlog",
    },
    {
      number: '10–15%',
      label: 'Higher basket expansion through AI upselling and milestone incentive visibility',
      humanNote: 'Skincare customers add the complementary product they were going to need anyway',
    },
    {
      number: '↓↓',
      label: 'Reduced operational dependency on coupon-driven campaign management',
      humanNote: "Shreya's promotions activate automatically — no coupon code chasing",
    },
    {
      number: '99%+',
      label: 'Cart operational stability throughout early campaign and traffic periods',
      humanNote: "Ritu's purchase experience never fails — it just earns her confidence",
    },
  ],

  humanImpactCards: [
    {
      icon: '🧴',
      title: 'Patient Confidence',
      description:
        "Ritu sees exactly what she's paying, exactly what she's saving, and exactly what she might add — before she commits. The transparency matches the clinical trust the brand has already earned from her dermatologist.",
    },
    {
      icon: '📣',
      title: 'Campaign Agility',
      description:
        "Shreya's team runs promotional campaigns with automated GWP logic, milestone visualisation, and cart-level coupon support — the full promotion surface without coupon code dependency.",
    },
    {
      icon: '📊',
      title: 'Launch Conversion Readiness',
      description:
        "Neelam launched on Shopify with a cart experience that was already optimised — no post-launch discovery of abandonment issues, no second optimization cycle needed in the first 90 days.",
    },
    {
      icon: '⚙️',
      title: 'Platform Stability Preserved',
      description:
        "cartx operates entirely within the cart layer — Shopify's native checkout is untouched, maintaining the platform integrity that post-migration operations depended on.",
    },
  ],

  ctaBadge: "Let's make your cart work from day one",
  ctaHeadline: 'Conversion readiness at launch<br />is not a luxury — it is a requirement.',
  ctaSubline:
    "cartx implementations that deliver promotional intelligence, transparent pricing, and automated GWP from the first day your storefront goes live.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default cetaphilCartx
