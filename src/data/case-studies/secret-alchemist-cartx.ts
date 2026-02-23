import { CaseStudy } from '@/types/case-study'

const secretAlchemistCartx: CaseStudy = {
  slug: 'secret-alchemist-cartx',
  isPublished: true,
  client: 'Secret Alchemist',
  industry: 'Clean Beauty / Fragrance',
  region: 'India',
  pillar: 'Customer Experience',
  product: 'cartx',
  year: 2025,
  type: 'Checkout Optimisation',
  pm: 'Yash Patel',
  accent: '#6b4c8a',
  accentSoft: 'rgba(107,76,138,0.08)',
  accentLight: '#8a6aad',

  eyebrow: 'Customer Experience · cartx · Checkout Optimisation · 2025',
  headline: "A Cart That Converts: cartx Integration for <em>Secret Alchemist</em>",
  subheadline:
    "A cart that converts. Not just holds.",
  heroMeta: [
    { label: 'Client', value: 'Secret Alchemist' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "Secret Alchemist is India's first clean perfume brand, co-founded by Samantha Ruth Prabhu, creating fragrances with rare Indian botanicals. Having established strong brand positioning, the brand needed its cart experience to match — implementing cartx to transform cart performance with advanced upsell logic, progress bars, and sticky cart functionality.",
    "We integrated cartx across Secret Alchemist's Shopify storefront — delivering lightning-fast cart performance, strategic upsell and cross-sell recommendations, free shipping threshold progress bars, and persistent sticky cart visibility throughout browsing — significantly improving conversion rates and average order value.",
  ],
  brandTags: ["Clean Beauty", "cartx", "Shopify", "Upselling", "Cart Optimization", "Fragrance", "India"],
  brandStats: [
    { name: 'Product', value: 'cartx — Advanced Cart with Upsells + Progress Bars' },
    { name: 'Platform', value: 'Shopify' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Conversion Rate, AOV & Cart Abandonment Reduction' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people needed the cart to work harder — a customer who added one fragrance but didn't know what to layer with it, a brand manager watching single-product basket sizes, and a founder whose cart UX wasn't keeping up with the brand experience.",
  personas: [
    {
      avatar: '🌺',
      name: 'Shreya',
      age: 26,
      role: 'Secret Alchemist customer · fragrance enthusiast',
      quote:
        "I added a perfume to my cart and was about to checkout when I noticed a 'complete your collection' suggestion showing a complementary fragrance. I hadn't thought about layering before — but the suggestion made sense and I added it. The cart made me a better shopper.",
      painTag: '🛒 Single-product cart sessions missing layering and complementary fragrance opportunities',
    },
    {
      avatar: '📊',
      name: 'Aashna',
      age: 29,
      role: 'E-Commerce Manager · Secret Alchemist',
      quote:
        "Our standard Shopify cart was basic — items listed, total shown, checkout button. There was no mechanism for upselling, no incentive to add more products, and the cart disappeared when you navigated away. A premium fragrance brand deserves a premium cart experience.",
      painTag: '💸 Basic Shopify cart missing upsell mechanics, progress bars, and persistent visibility',
    },
    {
      avatar: '🧪',
      name: 'Rohan',
      age: 35,
      role: 'Co-Founder · Secret Alchemist',
      quote:
        "The fragrances in our collection are designed to complement each other — that's core to our brand philosophy. But the cart wasn't communicating that. Customers bought one and missed the collection-building experience we'd designed the range around.",
      painTag: '🎭 Collection-building brand philosophy not reflected in a cart that shows only single items',
    },
  ],

  challengeParagraphs: [
    "Secret Alchemist's standard Shopify cart was a functional holdover in a premium brand experience. It listed items, showed a total, and provided a checkout button — with no mechanism for communicating the brand's collection-building philosophy or encouraging customers to discover complementary fragrances. Shreya's single-product sessions weren't a reflection of limited interest; they were a reflection of a cart that didn't surface the layering opportunities Rohan had designed the range to support.",
    "Aashna's conversion data told a clear story: the cart was not contributing to the purchase decision — it was merely recording it. There was no free shipping threshold incentive, no sticky visibility to keep the cart accessible during continued browsing, and no upsell mechanism to surface complementary products at the highest-intent moment in the customer journey. The brand had earned the customer to the cart. The cart wasn't earning the sale.",
  ],
  challengeTension:
    "A collection-first fragrance brand whose cart was designed like a receipt rather than an experience.",
  challengeMetrics: [
    { name: 'Cart upsell and cross-sell capability', value: 'Absent — standard Shopify cart only', barPercent: 90, barStyle: 'gold' },
    { name: 'Free shipping threshold incentive', value: 'None — no progress mechanism', barPercent: 85, barStyle: 'gold' },
    { name: 'Cart persistence during browsing', value: 'Disappears on navigation — low visibility', barPercent: 82, barStyle: 'gold' },
    { name: 'Average order value (single vs. multi-product)', value: 'Single-product dominated — collection not building', barPercent: 88, barStyle: 'gold' },
    { name: 'Cart loading performance', value: 'Standard Shopify — no optimization', barPercent: 78, barStyle: 'soft' },
  ],

  approachIntro:
    "cartx was built to show Shreya what to layer her fragrance with, give Aashna the cart mechanics to grow AOV, and give Rohan's collection-building philosophy a cart that expressed it.",
  approachCards: [
    {
      icon: '⚡',
      title: 'Lightning-Fast cartx Performance',
      description:
        "Integrated cartx delivering optimized cart loading and interaction performance — cart opens, updates, and responds faster than Shopify's native implementation, maintaining the premium experience the brand delivers.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🌺',
      title: 'Fragrance Layering Upsells',
      description:
        "Implemented strategic upsell recommendations directly within the cart — Shreya sees complementary fragrances and layering suggestions that match her selected product, communicating the collection-building philosophy at the right moment.",
      badge: 'Human-Centricity',
    },
    {
      icon: '📊',
      title: 'Free Shipping Progress Bar',
      description:
        "Added a progress bar showing the customer's proximity to free shipping thresholds — a persistent, visual incentive that encourages Shreya to add one more product rather than accepting the shipping cost.",
      badge: 'Sustainability',
    },
    {
      icon: '📌',
      title: 'Sticky Cart Visibility',
      description:
        "Enabled sticky cart functionality keeping the cart accessible throughout the browsing experience — Shreya can see her cart and add to it from any page without losing track of products she's already selected.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🎁',
      title: 'Reward and Incentive Mechanisms',
      description:
        "Built cart-level reward logic — free gifts, samples, or promotional additions triggered by cart value thresholds — encouraging basket building while rewarding customers for the collection-building behavior the brand values.",
      badge: 'Sustainability',
    },
    {
      icon: '🛍️',
      title: 'Collection Cross-Sell Logic',
      description:
        "Implemented cross-sell recommendations based on product category and fragrance family — ensuring the upsells feel curated rather than random, reflecting Rohan's collection-building philosophy through relevant, expert suggestions.",
      badge: 'Resilience',
    },
  ],

  resultCards: [
    {
      number: '↑↑',
      label: 'Increased conversion rates — high-performance cart and reduced friction',
      humanNote: "Shreya completes her purchase — the cart makes the decision easy",
    },
    {
      number: '↑',
      label: 'Higher average order value — strategic upsells and progress bars grow basket size',
      humanNote: "Rohan's collection-building vision is realized at the cart level",
    },
    {
      number: '↓',
      label: 'Reduced cart abandonment — faster performance and sticky visibility keep customers engaged',
      humanNote: 'The cart stays visible and compelling throughout the browsing session',
    },
    {
      number: '✓',
      label: 'Enhanced user experience — seamless interactions and persistent cart visibility',
      humanNote: "Aashna's premium cart matches the premium brand experience",
    },
  ],

  humanImpactCards: [
    {
      icon: '🌺',
      title: 'Cart as Collection Curator',
      description:
        "Shreya's cart becomes her personal fragrance consultant — complementary layering suggestions appear at the right moment, the free shipping bar incentivizes exploration, and the sticky cart keeps her collection visible as she continues browsing.",
    },
    {
      icon: '📊',
      title: 'Cart That Grows Revenue',
      description:
        "Aashna's cart is no longer a passive receipt — it's an active revenue driver. Upsells, progress incentives, and sticky visibility all contribute to higher session values from customers who had already committed to buying.",
    },
    {
      icon: '🧪',
      title: 'Collection Philosophy Expressed',
      description:
        "Rohan's collection-building brand philosophy finally has a cart that communicates it — complementary fragrance suggestions are presented as expert curation, not generic cross-selling, aligning with the brand's olfactory design intent.",
    },
    {
      icon: '📈',
      title: 'Premium Experience End-to-End',
      description:
        "The cart upgrade completes the Secret Alchemist premium experience — from brand storytelling homepage to collection exploration to a cart that curates the purchase. Every touchpoint now matches the brand's clean luxury positioning.",
    },
  ],

  ctaBadge: "Let's upgrade your cart experience",
  ctaHeadline: "A cart that curates<br />is a cart that converts.",
  ctaSubline:
    "cartx for premium beauty and fragrance brands — fragrance layering upsells, free shipping progress bars, sticky cart, and performance optimization that matches your brand's premium experience.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default secretAlchemistCartx
