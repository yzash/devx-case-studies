import { CaseStudy } from '@/types/case-study'

const wellie: CaseStudy = {
  slug: 'wellie',
  isPublished: true,
  client: 'Wellie',
  industry: 'Pet Wellness',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'PDP Optimisation',
  pm: 'Yash Patel',
  accent: '#3a9e6f',
  accentSoft: 'rgba(58,158,111,0.08)',
  accentLight: '#4dbe88',

  eyebrow: 'Customer Experience · PDP Optimisation · Trust Building · 2025',
  headline: "Earning the Trust of Dog Parents: PDP Revamp for <em>Wellie</em>",
  subheadline:
    "The product page is where decisions are made. We rebuilt it to win more of them.",
  heroMeta: [
    { label: 'Client', value: 'Wellie' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandHeadline: "Science-backed pet wellness —<br />certifications that were finally visible.",
  brandIntro: [
    "Wellie is an Indian pet wellness brand offering functional dog treats made with clean ingredients and backed by science, founded by Tarini. Their products — formulated for specific health benefits like joint support, digestion, and skin health — are designed for the growing number of conscious Indian dog parents who approach their pets' nutrition with the same care as their own.",
    "We revamped Wellie's product detail pages with enhanced UI/UX and strategic trust-building elements tailored for the dog parent audience — implementing certification badges, enhanced product information, trust signals, and a social proof framework — significantly increasing conversion rates and reducing purchase hesitation.",
  ],
  brandTags: ["Pet Wellness", "Shopify", "PDP Optimization", "Trust Signals", "Dog Treats", "Clean Ingredients", "India"],
  brandStats: [
    { name: 'Platform', value: 'Shopify' },
    { name: 'Focus Area', value: 'Product Detail Pages — Full Trust & UI Revamp' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Purchase Conversion, Hesitation Reduction & Trust Signals' },
    { name: 'Year', value: '2025' },
  ],

  peopleHeadline: "Built for the dog parent researching ingredients before purchasing, the founder whose certifications weren't surfaced, and the growth lead watching high-intent traffic leave without buying.",
  peopleIntro:
    "Three people needed the product page to do more work — a dog parent hesitating over safety certifications, a brand manager whose clinical formulations deserved clinical presentation, and a founder watching conversion data reveal persistent purchase hesitation.",
  personas: [
    {
      avatar: '🐕',
      name: 'Shreya',
      age: 31,
      role: 'Dog parent · researching functional treats for her Labrador',
      quote:
        "Dog parents approaching pet nutrition with the same scrutiny they applied to their own diet needed to see certifications, ingredient sourcing, and formulation science before committing to a product. That evidence existed but was not surfaced clearly on the product page — and the resulting hesitation was enough to prevent the purchase.",
      painTag: '🔍 Dog parents requiring certifications and safety evidence before purchasing for their pets',
    },
    {
      avatar: '🌿',
      name: 'Tarini',
      age: 30,
      role: 'Founder · Wellie',
      quote:
        "Wellie's formulations carried FDA, GMP, FEDIAF, ISO, and HACCP certifications, and the ingredients were clean and science-backed. But the product page was not communicating that standard. Conscious dog parents — Wellie's core customer — arrived at the PDP and could not find the evidence they needed to buy.",
      painTag: '📋 Science-backed certifications not prominently visible on PDPs — primary audience not converting',
    },
    {
      avatar: '📊',
      name: 'Vivek',
      age: 36,
      role: 'Growth & Product Lead · Wellie',
      quote:
        "Conversion data revealed a consistent pattern: high-intent traffic from dog parent communities was arriving at the PDP, spending limited time, and leaving without purchasing. The behavioral signal pointed to a page that was not answering the questions that intent-driven visitors needed resolved before they could buy.",
      painTag: '📉 High-intent traffic converting at below-expected rates — PDP not resolving purchase hesitation',
    },
  ],

  challengeHeadline: "Wellie's FDA, GMP, and FEDIAF certifications were buried on a PDP that conscious dog parents couldn't trust.",
  challengeParagraphs: [
    "Wellie's target customer — a conscious, informed dog parent like Shreya — approaches pet nutrition with the same scrutiny they apply to their own food. They want to see certifications, understand ingredient sourcing, read formulation science, and hear from other dog parents before committing to a product they'll give their dog daily. The existing PDP had the product information but not the trust architecture: certifications were buried, scientific backing wasn't presented accessibly, and social proof was minimal.",
    "Tarini's challenge was that the gap between Wellie's actual quality — multiple certifications, clean science-backed formulations, rigorous quality standards — and what was visible on the product page was significant. Vivek's conversion data confirmed the cost: high-intent traffic from pet wellness communities was arriving, reading, not finding what it needed, and leaving. The page needed to be rebuilt around the dog parent's specific decision framework, not the generic e-commerce product page template.",
  ],
  challengeTension:
    "A pet wellness brand with exceptional certifications and formulation standards — communicating them in a way that cautious dog parents couldn't easily find.",
  challengeMetrics: [
    { name: 'Certification visibility on PDPs', value: 'Buried — not immediately prominent', barPercent: 92, barStyle: 'gold' },
    { name: 'Scientific formulation evidence accessibility', value: 'Insufficient — requires effort to find', barPercent: 88, barStyle: 'gold' },
    { name: 'Social proof and pet parent testimonials', value: 'Minimal — not prominently featured', barPercent: 85, barStyle: 'gold' },
    { name: 'Conversion rate for high-intent pet parent traffic', value: 'Below expected for traffic quality', barPercent: 82, barStyle: 'gold' },
    { name: 'Trust signal architecture for safety-conscious audience', value: 'Absent — no structured credibility framework', barPercent: 90, barStyle: 'gold' },
  ],

  approachHeadline: "PDP revamp with above-the-fold certification badges, ingredient transparency sections, and a dog parent-focused content hierarchy.",
  approachIntro:
    "The PDP revamp was built to give Shreya the certifications she was looking for, give Tarini's formulation science the prominence it earned, and convert Vivek's high-intent traffic at the rate the product quality deserved.",
  approachCards: [
    {
      icon: '🏆',
      title: 'Prominent Certification Badge Display',
      description:
        "Implemented prominent, visually clear certification badges — FDA, GMP, FEDIAF, ISO, HACCP — displayed above the fold on all PDPs, immediately answering Shreya's first question before she has to scroll to find it.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🧬',
      title: 'Clean Ingredient and Science Information',
      description:
        "Enhanced product information sections highlighting clean ingredients, science-backed formulations, and specific health benefit evidence — structured to be readable and actionable for the health-conscious dog parent audience.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🐕',
      title: 'Dog Parent-Focused Content Architecture',
      description:
        "Redesigned PDP information layout around the specific questions conscious dog parents ask — safety first, then ingredients, then formulation science, then dosage, then testimonials — in the order that matches Shreya's decision framework.",
      badge: 'Human-Centricity',
    },
    {
      icon: '⭐',
      title: 'Customer Testimonials and Video Proof',
      description:
        "Integrated customer testimonials, product reviews, and video testimonials from satisfied dog parents throughout the PDPs — social proof from the community that matters most to new customers evaluating safety.",
      badge: 'Sustainability',
    },
    {
      icon: '📊',
      title: 'Improved Visual Hierarchy and CTAs',
      description:
        "Redesigned PDP layout with clearer visual hierarchy, more prominent CTAs, and dog-parent-focused messaging — reducing the cognitive distance between understanding the product and committing to a purchase.",
      badge: 'Resilience',
    },
    {
      icon: '🌿',
      title: 'Ingredient Transparency Section',
      description:
        "Built a dedicated ingredient transparency section on each PDP — every ingredient listed with its source, function, and quality standard — making Wellie's clean ingredient commitment visible and verifiable.",
      badge: 'Sustainability',
    },
  ],

  resultsHeadline: "Increased conversion rates, reduced purchase hesitation, and Wellie's premium credentials visible from the first scroll.",
  resultCards: [
    {
      number: '↑↑',
      label: 'Increased conversion rates — trust signals and improved UI directly reducing hesitation',
      humanNote: "Shreya finds the certifications immediately — purchase hesitation resolved",
    },
    {
      number: '↑',
      label: 'Enhanced brand credibility — certification badges building strong trust with cautious dog parents',
      humanNote: "Tarini's quality standards are visible on every product page",
    },
    {
      number: '↓',
      label: 'Reduced purchase hesitation — comprehensive safety information addressing dog parent concerns',
      humanNote: "Vivek's high-intent traffic converts at a rate that matches the traffic quality",
    },
    {
      number: '↑↑',
      label: 'Improved user experience — redesigned PDP and clear messaging for pet parents',
      humanNote: 'The product page is a trust-building tool, not just a product description',
    },
  ],

  humanImpactCards: [
    {
      icon: '🐕',
      title: 'Trust Built in the First Scroll',
      description:
        "Shreya arrives at a Wellie PDP and sees certification badges immediately — FDA, GMP, FEDIAF, ISO, HACCP — before she reads a single word about the product. The certifications answer her first concern. She reads the ingredient list with confidence rather than skepticism.",
    },
    {
      icon: '🌿',
      title: 'Science Visible and Accessible',
      description:
        "Tarini's formulation science is communicated accessibly on the PDP — not buried in a FAQ tab or a technical sheet, but presented in the product story itself. The premium quality is visible to the dog parent who is looking for exactly this level of rigor.",
    },
    {
      icon: '📊',
      title: 'Intent That Converts',
      description:
        "Vivek's high-intent traffic from pet wellness communities now lands on a PDP that answers the questions that traffic was asking. The behavioral signal changes — shorter sessions become more decisive, and the conversion rate rises to match the quality of the audience.",
    },
    {
      icon: '📈',
      title: 'Premium Positioning Expressed',
      description:
        "Wellie's premium clean pet wellness positioning is fully expressed on every product page — the certifications, the science, the testimonials, and the transparency that separates Wellie from commodity pet treats. The PDP earns the premium that the product deserves.",
    },
  ],

  ctaBadge: "Let's build trust into your product pages",
  ctaHeadline: "Trust isn't implied by premium products.<br />It has to be earned on every page.",
  ctaSubline:
    "PDP optimization for wellness and pet care brands — trust signal architecture, certification visibility, and social proof frameworks that convert cautious, informed buyers.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default wellie
