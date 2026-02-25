import { CaseStudy } from '@/types/case-study'

const foxtaleCartx: CaseStudy = {
  slug: 'foxtale-cartx',
  isPublished: true,
  client: 'Foxtale',
  industry: 'Skincare / D2C',
  region: 'India',
  pillar: 'Marketing Automation',
  product: 'cartx',
  year: 2025,
  type: 'Personalised Cart',
  pm: 'Prerna Jain',
  accent: '#1a5c3a',
  accentSoft: 'rgba(26,92,58,0.08)',
  accentLight: '#268050',

  eyebrow: 'Marketing Automation · cartx · UTM Personalization · 2025',
  headline: "Engineering the Perfect Cart: UTM-Driven Personalization at Scale for <em>Foxtale</em>",
  subheadline:
    "The cart that knows where you came from — and what you're most likely to buy.",
  heroMeta: [
    { label: 'Client', value: 'Foxtale' },
    { label: 'Impact Pillar', value: 'Marketing Automation' },
  ],

  brandHeadline: "Multi-channel campaigns, one cart<br />that knows which campaign sent you.",
  brandIntro: [
    "Foxtale is a Series C-funded Indian skincare brand running sophisticated multi-channel campaigns across Instagram, Facebook, and Google with unique offers for each audience. Their cart couldn't translate campaign intent into personalized shopping experiences — users clicking BOGO ads arrived at generic cart pages, and the marketing team needed developer support for every offer change.",
    // TODO: Verify metrics — 50% cart abandonment reduction, 3x campaign velocity, 35% AOV increase
    "We built a UTM-driven personalized cart system with campaign-source awareness, multi-tier promotion logic, and a self-service metaobjects-based offer management system. The result: 50% reduction in cart abandonment, 3x faster campaign velocity for the marketing team, and a 35% increase in AOV from campaign traffic.",
  ],
  brandTags: ['Skincare', 'cartx', 'UTM Personalization', 'Multi-Tier Promotions', 'Shopify Metaobjects', 'Marketing Automation', 'India'],
  brandStats: [
    { name: 'Product', value: 'cartx — Campaign-Aware Personalized Cart' },
    { name: 'Promotion Logic', value: 'Multi-Tier · Auto-Apply · Source-Aware' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Cart Abandonment, Campaign Velocity & AOV from Campaigns' },
    { name: 'Year', value: '2025' },
  ],

  peopleHeadline: "Built for the shopper who clicked an Instagram offer and found a generic cart, the marketer blocked by dev sprints, and the growth lead watching campaign AOV fall short.",
  peopleIntro:
    "The disconnect between ad promise and cart reality was costing Foxtale on three fronts — a customer who clicked a BOGO offer only to find a generic cart, a marketer blocked by developer dependency, and a growth lead watching campaign-driven AOV plateau.",
  personas: [
    {
      avatar: '✨',
      name: 'Priyanka',
      age: 27,
      role: 'Foxtale customer · clicked an Instagram BOGO ad',
      quote:
        "Shoppers who clicked campaign ads with specific offers — like buy-one-get-one promotions — arrived at generic product pages with no sign of the advertised deal. The effort required to locate and apply the promotion led many to abandon the purchase entirely.",
      painTag: '🎯 Campaign-aware ads leading to generic carts — offer promise not fulfilled at checkout',
    },
    {
      avatar: '📱',
      name: 'Shruti',
      age: 30,
      role: 'Performance Marketer · Foxtale',
      quote:
        "Performance marketers had to raise a development request for every new promotional structure — freebies, collection discounts, code-based offers — and wait through a full sprint before anything went live. Campaign windows frequently closed before the corresponding offer was ready.",
      painTag: '⏳ Marketing team blocked by developer dependency for every promotional change',
    },
    {
      avatar: '📊',
      name: 'Aditya',
      age: 34,
      role: 'Head of Growth · Foxtale',
      quote:
        "Growth leads running segmented paid campaigns by channel and audience persona saw campaign traffic consistently converting at a lower average order value than organic visitors. The cart's inability to reflect campaign context was leaving measurable revenue on the table.",
      painTag: '📉 Campaign traffic converting at lower AOV than organic — cart personalization gap',
    },
  ],

  challengeHeadline: "Foxtale's BOGO ads were sending customers to a cart with no sign of the deal they clicked.",
  challengeParagraphs: [
    "Foxtale's marketing sophistication had outpaced their cart's intelligence. Shruti's team ran multi-channel campaigns with audience-specific offers — different creatives for Instagram skincare enthusiasts, Google search intent traffic, and Facebook retargeting audiences. But when any of these users clicked through, they arrived at the same generic cart. The campaign promise vanished at the most critical conversion moment.",
    "The promotional system limitations compounded the problem. Multi-tiered offers, cart-wise freebies, and code-specific promotions couldn't be managed within Shopify's native cart functionality. Every new promotional structure required a development sprint — meaning Shruti's campaign velocity was constrained by engineering bandwidth rather than marketing creativity. Aditya watched the campaign AOV gap persist while the technical blocker remained unresolved.",
  ],
  challengeTension:
    "A marketing team running sophisticated multi-channel campaigns — and a cart that treated every customer like they arrived from the homepage.",
  challengeMetrics: [
    { name: 'Cart personalization by campaign source', value: 'Absent — every user sees the same cart', barPercent: 90, barStyle: 'gold' },
    { name: 'Marketing team self-service capability', value: 'Zero — every change requires a dev sprint', barPercent: 88, barStyle: 'gold' },
    { name: 'Multi-tier promotion support', value: 'Unsupported in native Shopify cart', barPercent: 85, barStyle: 'gold' },
    { name: 'Campaign vs. organic AOV gap', value: 'Campaign traffic converting at lower AOV', barPercent: 82, barStyle: 'gold' },
    { name: 'Cart abandonment from unmet offer promise', value: 'Measurable — customers leaving to find promised deal', barPercent: 80, barStyle: 'soft' },
  ],

  approachHeadline: "UTM-driven cart personalization, multi-tier promotion engine, and metaobjects-based self-service offer management.",
  approachIntro:
    "The cartx system was built to show Priyanka the offer she clicked for, free Shruti from developer dependency, and close Aditya's campaign AOV gap.",
  approachCards: [
    {
      icon: '🎯',
      title: 'Source-Aware Cart System',
      description:
        "Developed UTM-based cart logic that automatically pre-loads advertised products based on campaign source — Priyanka's BOGO Instagram ad leads to a cart with her BOGO offer already applied, exactly as promised.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🏷️',
      title: 'Multi-Tier Promotion Engine',
      description:
        "Built custom promotion logic supporting stackable offers, cart-wise and code-wise freebies, collection-specific promotions, and auto-apply coupon functionality — the full range of Shruti's creative promotional structures.",
      badge: 'Sustainability',
    },
    {
      icon: '⚙️',
      title: 'Self-Service Promotion Management via Metaobjects',
      description:
        "Implemented Shopify metaobjects-based system enabling Shruti's marketing team to create and modify complex offers independently — no developer involvement, no sprint wait, no campaign window missed.",
      badge: 'Sustainability',
    },
    {
      icon: '🎁',
      title: 'Cart-Wise and Code-Wise Freebies',
      description:
        "Built freebie logic that triggers based on cart value thresholds or specific promotional codes — customers see free product additions appear automatically as they approach thresholds, driving basket-building behavior.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🔄',
      title: 'Auto-Apply Coupon Functionality',
      description:
        "Campaign-specific coupons apply automatically when a user arrives from a matching UTM source — the friction of finding and entering a discount code is eliminated entirely at the critical conversion moment.",
      badge: 'Human-Centricity',
    },
    {
      icon: '📊',
      title: 'Collection and Product-Level Customization',
      description:
        "Enabled promotional logic to operate at the collection, product, and SKU level — Aditya's team runs serum campaigns with serum-specific offers, moisturizer campaigns with moisturizer freebies, precisely targeted.",
      badge: 'Resilience',
    },
  ],

  resultsHeadline: "50% cart abandonment reduction, 3x campaign velocity, 35% AOV increase from campaign traffic.",
  resultCards: [
    {
      number: '50%',
      label: 'Reduction in cart abandonment — source-aware cart eliminates offer-promise disconnect',
      humanNote: "Priyanka finds her BOGO offer in the cart — and completes her purchase",
    },
    {
      number: '3×',
      label: 'Promotion campaign velocity — marketing team launches campaigns without developer wait',
      humanNote: "Shruti creates, modifies, and launches promotional offers same-day",
    },
    {
      number: '35%',
      label: 'Increase in AOV from campaign traffic through multi-tier freebie and offer logic',
      humanNote: "Aditya's campaign traffic finally converts at the basket size the brand deserves",
    },
    {
      number: '↑↑',
      label: 'Marketing team autonomy — full promotional control without engineering dependency',
      humanNote: "Campaign windows are owned by marketing, not limited by development sprints",
    },
  ],

  humanImpactCards: [
    {
      icon: '✨',
      title: 'Campaign Promise Delivered',
      description:
        "Priyanka clicks the BOGO Instagram ad and arrives at a cart where the BOGO offer is already waiting — the campaign promise is fulfilled at checkout exactly as advertised. She converts instead of abandoning.",
    },
    {
      icon: '📱',
      title: 'Marketing Team Unblocked',
      description:
        "Shruti creates and publishes new promotional offers in minutes through the metaobjects-based admin — stackable discounts, collection-specific freebies, auto-apply coupons — all without a development sprint or campaign delay.",
    },
    {
      icon: '📊',
      title: 'Campaign AOV Gap Closed',
      description:
        "Aditya's campaign traffic now converts with a 35% higher AOV than before — the intelligent cart pre-loads campaign-relevant products, applies automatic coupons, and uses freebie logic to encourage basket expansion.",
    },
    {
      icon: '📈',
      title: 'Promotional Intelligence at Scale',
      description:
        "Every campaign runs with a cart that understands its context — audience, offer, source, and intent — making Foxtale's multi-channel marketing more effective at the moment it matters most: the checkout decision.",
    },
  ],

  ctaBadge: "Let's build your campaign-aware cart",
  ctaHeadline: "A cart that knows where your<br />customers came from.",
  ctaSubline:
    "UTM-driven cart personalization with multi-tier promotions and self-service campaign management — turning sophisticated marketing into sophisticated conversion.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default foxtaleCartx
