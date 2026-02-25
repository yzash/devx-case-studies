import { CaseStudy } from '@/types/case-study'

const avimeeHerbalCx: CaseStudy = {
  slug: 'avimee-herbal-cx',
  isPublished: true,
  client: 'Avimee Herbal',
  industry: 'Ayurvedic Haircare / D2C',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2026,
  type: 'Scalp Diagnostics Platform',
  pm: 'Prerna Jain',
  accent: '#5a8a3c',
  accentSoft: 'rgba(90,138,60,0.08)',
  accentLight: '#74a84f',

  eyebrow: 'Customer Experience · Product Innovation · Diagnostics · 2026',
  headline: "Root Cause Revolution: Dynamic Scalp Diagnostics Driving 67% AOV Growth for <em>Avimee Herbal</em>",
  subheadline:
    "When personalisation goes deeper than 'you might also like' — and into the science of your scalp.",
  heroMeta: [
    { label: 'Client', value: 'Avimee Herbal' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandHeadline: "Ayurvedic science, root causes first.<br />Now the storefront diagnoses before it sells.",
  brandIntro: [
    "Avimee Herbal is a premium Ayurvedic haircare brand combining ancient herbal wisdom with modern science to address scalp and hair concerns. Their product range focuses on natural, plant-based solutions for hair regrowth, scalp health, and holistic hair wellness — emphasizing personalized care through diagnostic approaches that identify root causes rather than treating surface symptoms.",
    // TODO: Verify metrics — 67% AOV increase, 7% conversion rate lift
    "We built the Scalp Test platform at the heart of Avimee Herbal's customer experience: a fully dynamic diagnostic engine with an admin-controlled question builder, a sophisticated scoring algorithm that identifies multiple root causes from a medical framework, and seamless Shiprocket checkout integration — driving a 67% increase in AOV and a 7% lift in conversion rate.",
  ],
  brandTags: ['Ayurvedic Haircare', 'Scalp Diagnostics', 'Next.js', 'Dynamic Admin', 'Shiprocket', 'Personalization', 'India'],
  brandStats: [
    { name: 'Architecture', value: 'Dynamic Admin + Next.js Quiz + Scoring Engine' },
    { name: 'Diagnostic Factors', value: 'Multi-Dimensional Root Cause Analysis' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'AOV Growth, Conversion Rate & Personalized Product Discovery' },
    { name: 'Year', value: '2026' },
  ],

  peopleHeadline: "Built for the customer cycling through wrong products, the brand manager blocked by dev queues, and the founder watching AOV plateau.",
  peopleIntro:
    "Three people needed something that generic product pages couldn't provide — a customer who didn't know why her hair was falling, a brand manager who wanted to update the diagnostic without a developer, and a founder watching single-product basket sizes plateau.",
  personas: [
    {
      avatar: '💆',
      name: 'Shalini',
      age: 34,
      role: 'Customer · experiencing hair loss and scalp issues',
      quote:
        'Customers experiencing hair loss cycled through multiple products across brands without resolution, because no tool identified the underlying root causes of their condition. Without diagnostic clarity — such as a stress-induced or hormonal trigger — purchases were guesses rather than informed decisions.',
      painTag: '🧬 Customers buying wrong products due to generic recommendations and no root cause diagnosis',
    },
    {
      avatar: '👩‍💼',
      name: 'Pooja',
      age: 28,
      role: 'Brand Manager · Avimee Herbal',
      quote:
        'Brand managers at Avimee Herbal were blocked from updating the Scalp Test whenever new clinical insights emerged. Adding questions or adjusting scoring logic required a full developer sprint, creating a persistent lag between the brand\'s knowledge and what the diagnostic tool could actually reflect.',
      painTag: '⏳ Brand team blocked from updating diagnostic logic without developer involvement',
    },
    {
      avatar: '🌿',
      name: 'Rajiv',
      age: 42,
      role: 'Founder · Avimee Herbal',
      quote:
        'Founders at Avimee Herbal saw average order value plateau at ₹700-900 as customers purchased one product at a time, unaware of what else their condition required. The Scalp Test concept — personalized diagnosis leading to personalized regimens — needed technical execution that matched the ambition behind it.',
      painTag: '📉 AOV plateau at ₹700-900 — single-product purchases missing regimen opportunity',
    },
  ],

  challengeHeadline: "Avimee Herbal's personalization philosophy had no technical home on their shopping experience.",
  challengeParagraphs: [
    "Avimee Herbal's product philosophy was built on identifying root causes — but their shopping experience was generic. Shalini's journey from scalp concern to product was identical to any other customer's, even though her root causes were different. The result was single-product purchases, low basket sizes, and the classic problem of customers returning products that were clinically sound but mismatched to their specific condition.",
    "Pooja faced a second challenge: the initial diagnostic tool was static. Adding new questions, adjusting scoring logic, or incorporating new clinical root causes required developer involvement for every change. In a category where clinical knowledge evolves and the brand's understanding of their customers deepens continuously, a static tool was a permanent bottleneck. Rajiv needed a platform that the brand team owned — not one that required engineering sprints to evolve.",
  ],
  challengeTension:
    "An Ayurvedic brand whose clinical philosophy was personalization — and whose shopping experience was anything but.",
  challengeMetrics: [
    { name: 'Average order value', value: '₹700-900 — single-product purchase pattern', barPercent: 88, barStyle: 'gold' },
    { name: 'Diagnostic tool flexibility', value: 'Static — developer required for every change', barPercent: 90, barStyle: 'gold' },
    { name: 'Product discovery beyond hero SKUs', value: 'Limited — customers not finding right regimens', barPercent: 85, barStyle: 'gold' },
    { name: 'Conversion confidence from generic browsing', value: 'Low — no root cause identification', barPercent: 82, barStyle: 'gold' },
    { name: 'Clinical data informing recommendations', value: 'Absent — scoring logic not connected to products', barPercent: 78, barStyle: 'soft' },
  ],

  approachHeadline: "A dynamic scalp diagnostic engine — admin-controlled question builder, multi-root-cause scoring, Shiprocket checkout.",
  approachIntro:
    "The Scalp Test platform was built to give Shalini her root cause diagnosis, give Pooja control over her own diagnostic tool, and give Rajiv the AOV growth that personalized regimen discovery unlocks.",
  approachCards: [
    {
      icon: '⚙️',
      title: 'Custom Admin Panel for Dynamic Control',
      description:
        "Built a complete admin panel enabling Pooja's brand team to create tests, define questions, configure root causes, and adjust scoring algorithms independently — the entire diagnostic platform is brand-controlled without developer involvement.",
      badge: 'Sustainability',
    },
    {
      icon: '🧬',
      title: 'Root Cause-Based Diagnostic Engine',
      description:
        "Developed a Next.js quiz frontend with a sophisticated backend scoring system analyzing multi-dimensional user responses — identifying specific root causes, calculating scalp health scores, predicting hair regrowth potential, and recommending targeted product regimens.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🎯',
      title: 'Multi-Root-Cause Identification',
      description:
        "Built scoring algorithms capable of identifying multiple simultaneous root causes from a predefined clinical framework — Shalini's stress-induced and hormonal factors both surface, leading to a regimen that addresses both rather than one.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🛒',
      title: 'Seamless Shiprocket Checkout Integration',
      description:
        "Integrated Shiprocket checkout enabling one-click purchase of the complete recommended regimen immediately after receiving diagnostic results — eliminating the friction between personalized diagnosis and purchase conversion.",
      badge: 'Resilience',
    },
    {
      icon: '📊',
      title: 'Regrowth Potential Scoring',
      description:
        "Built predictive scoring that communicates hair regrowth potential as part of the diagnosis — giving customers concrete, clinical-feeling outcomes that build confidence in the recommended regimen and justify the basket size.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🔄',
      title: 'Iterative Diagnostic Refinement',
      description:
        "Designed the admin architecture to support continuous clinical evolution — Pooja adds questions informed by new customer data, adjusts root cause scoring, and refines recommendations without a single engineering request.",
      badge: 'Sustainability',
    },
  ],

  resultsHeadline: "67% AOV increase, 7% conversion lift, full brand-team ownership of diagnostic logic.",
  resultCards: [
    {
      number: '67%',
      label: 'Average order value increase — from ₹900 to ₹1,400-1,500',
      humanNote: "Shalini buys a complete regimen, not a single product guess",
    },
    {
      number: '7%',
      label: 'Conversion rate improvement — customers buying with clinical confidence',
      humanNote: 'Root cause diagnosis replaces trial-and-error — purchase intent converts',
    },
    {
      number: '100%',
      label: 'Dynamic content management — brand team owns the diagnostic tool entirely',
      humanNote: "Pooja updates questions and scoring without waiting for a developer",
    },
    {
      number: '↑↑',
      label: 'Product discovery — customers finding regimens that match their specific conditions',
      humanNote: "Rajiv's catalogue depth is finally accessible to the customers who need it",
    },
  ],

  humanImpactCards: [
    {
      icon: '💆',
      title: 'Diagnosis Before Purchase',
      description:
        "Shalini understands her scalp condition before she buys anything — two root causes identified, a specific regimen recommended, and the confidence that comes from clinical reasoning rather than guesswork. She buys the regimen because she trusts the recommendation.",
    },
    {
      icon: '👩‍💼',
      title: 'Brand Team in Control',
      description:
        "Pooja updates the Scalp Test with new clinical questions every time Avimee Herbal's research reveals a new insight — no engineering sprints, no waiting, no bottleneck. The diagnostic tool evolves at the pace of the brand's knowledge.",
    },
    {
      icon: '🌿',
      title: 'AOV Transformed',
      description:
        "Rajiv's average order value jumped from ₹900 to ₹1,400-1,500 because personalized regimen recommendations replaced single-product guesses. The Scalp Test is not a marketing feature — it is the brand's primary sales mechanism.",
    },
    {
      icon: '📈',
      title: 'Competitive Differentiation',
      description:
        "The Scalp Test gives Avimee Herbal a defensible advantage — generic haircare brands offer products. Avimee Herbal offers diagnosis. That shift in positioning changes every customer interaction from transactional to consultative.",
    },
  ],

  ctaBadge: "Let's build your diagnostic commerce platform",
  ctaHeadline: "Personalization that goes<br />deeper than 'you might also like.'",
  ctaSubline:
    "Dynamic diagnostic platforms for health and wellness brands — root cause identification, personalized regimen recommendations, and seamless checkout. Built for your clinical team to own.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default avimeeHerbalCx
