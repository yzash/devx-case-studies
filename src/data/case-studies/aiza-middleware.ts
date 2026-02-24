import { CaseStudy } from '@/types/case-study'

const aizaMiddleware: CaseStudy = {
  slug: 'aiza-middleware',
  isPublished: true,
  client: 'AÏZA',
  industry: 'Premium Beauty & Skincare',
  region: 'Middle East',
  pillar: 'Enterprise Architecture',
  year: 2025,
  type: 'Shopify Integration / Data Pipeline',
  pm: 'Raj',
  accent: '#1a4d6e',
  accentSoft: 'rgba(26,77,110,0.08)',
  accentLight: '#2e6d97',

  eyebrow: 'Shopify Integration · Data Pipeline · 2025',
  headline: "Optimizing <em>AÏZA</em>'s Shopify-to-WMS Data Pipeline with API-Driven Transformation",
  subheadline:
    'The gap between order placed and order shipped — closed by smart data transformation that runs without anyone watching.',
  heroMeta: [
    { label: 'Client', value: 'AÏZA' },
    { label: 'Impact Pillar', value: 'Enterprise Architecture' },
  ],

  brandIntro: [
    "AÏZA is a premium beauty brand serving a global audience with international order fulfilment requirements. As order volumes scaled across markets, the operational infrastructure connecting Shopify to the Aramex Warehouse Management System had become a daily source of manual effort, risk, and delay.",
    "The core problem was architectural: Shopify's order data structure didn't align with what Aramex WMS expected. Every order required human intervention to bridge the gap. For a brand growing internationally, that dependency wasn't sustainable — and every manual step was a potential fulfilment failure.",
  ],
  brandTags: ['Premium Beauty', 'Shopify', 'Aramex WMS', 'Middleware', 'Order Automation', 'Middle East'],
  brandStats: [
    { name: 'Integration', value: 'Shopify → Aramex WMS' },
    { name: 'Architecture', value: 'Custom Middleware Layer' },
    { name: 'Region', value: 'Middle East / International' },
    { name: 'Focus', value: 'Order Automation & Fulfilment Accuracy' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    'Three people spent significant time every day managing a problem that should have been invisible. The middleware was built to give that time back.',
  personas: [
    {
      avatar: '📋',
      name: 'Fatima',
      age: 30,
      role: 'Logistics Operations Manager · AÏZA HQ',
      quote:
        'Logistics operations managers at AÏZA began each day manually identifying which orders needed reformatting before warehouse submission. A single missed field risked a delayed shipment — a time-consuming process that repeated with every order cycle.',
      painTag: '⏱️ Manual order preparation every day',
    },
    {
      avatar: '📦',
      name: 'Tariq',
      age: 35,
      role: 'Warehouse Operations Lead · Aramex WMS',
      quote:
        'Warehouse operations staff received orders with incomplete or incorrectly formatted data at a frequency that disrupted throughput. Missing packaging information and structural format mismatches caused processing delays from the moment orders arrived.',
      painTag: '❌ Incomplete and misformatted order data',
    },
    {
      avatar: '⚙️',
      name: 'Sara',
      age: 38,
      role: 'Head of Operations · AÏZA',
      quote:
        'Operations leaders managing international fulfilment faced strict packaging compliance, customs information, and shipping label requirements across every order. The scale made errors costly — yet the process remained entirely dependent on manual execution.',
      painTag: '🌍 International compliance and fulfilment risk',
    },
  ],

  challengeParagraphs: [
    "Shopify and Aramex WMS were speaking different languages. The gap between them required Fatima's team to act as daily translators — reformatting, enriching, and validating every order before it could enter the warehouse pipeline. For a growing international brand, this was operational debt accumulating with every order.",
    "The WMS integration timeline was too lengthy to allow customisation from the warehouse side. Relying on Aramex to change their system wasn't viable. The solution had to live in between — a middleware layer that transformed data automatically, handled international logistics requirements, and removed the human from a process that should run without one.",
  ],
  challengeTension:
    "Every order that required manual intervention was one fulfilment error away from a damaged customer relationship.",
  challengeMetrics: [
    { name: 'Manual order preparation dependency', value: 'Daily critical task', barPercent: 92, barStyle: 'gold' },
    { name: 'Order data format compatibility', value: 'Zero without intervention', barPercent: 95, barStyle: 'gold' },
    { name: 'International compliance data enrichment', value: 'Manual', barPercent: 85, barStyle: 'gold' },
    { name: 'Fulfilment error risk', value: 'Significant', barPercent: 78, barStyle: 'soft' },
    { name: 'Operational team time consumed', value: 'High', barPercent: 80, barStyle: 'soft' },
  ],

  approachIntro:
    "The middleware layer was designed so Fatima, Tariq, and Sara would stop noticing the integration entirely — because a good system is invisible.",
  approachCards: [
    {
      icon: '🔌',
      title: 'Middleware Architecture Design & Build',
      description:
        "Designed and built a dedicated middleware layer positioned between Shopify and Aramex WMS — handling all data translation externally so neither system needed to change.",
      badge: 'Resilience',
    },
    {
      icon: '🔄',
      title: 'Automated Data Transformation Logic',
      description:
        "Implemented transformation logic to convert Shopify order data into WMS-compatible formats automatically — removing the daily reformatting work from Fatima's team entirely.",
      badge: 'Sustainability',
    },
    {
      icon: '🌍',
      title: 'International Logistics Data Enrichment',
      description:
        "Enriched every order payload with logistics-specific information required for international fulfilment and packaging compliance — giving Tariq's team everything they need on arrival.",
      badge: 'Sustainability',
    },
    {
      icon: '⚡',
      title: 'Real-Time Automated Order Transmission',
      description:
        "Built real-time order transmission to the warehouse — so Sara's team never waits on a manual validation step before orders enter the fulfilment pipeline.",
      badge: 'Resilience',
    },
    {
      icon: '📊',
      title: 'Stable, Scalable System Architecture',
      description:
        'Designed the middleware for reliability at scale — 99% uptime and support for growing international order volumes without architectural changes.',
      badge: 'Sustainability',
    },
    {
      icon: '🛡️',
      title: 'WMS-Side Configuration Independence',
      description:
        'Eliminated dependency on WMS customisation timelines by handling all transformation externally — the integration is AÏZA-owned, not Aramex-dependent.',
      badge: 'Resilience',
    },
  ],

  resultCards: [
    {
      number: '90%',
      label: 'Reduction in operational team involvement in order data workflows',
      humanNote: "Fatima starts her morning on logistics, not data reformatting",
    },
    {
      number: '99%',
      label: 'Middleware uptime — uninterrupted order transmission',
      humanNote: "Sara's fulfilment pipeline runs without her watching it",
    },
    {
      number: '98%',
      label: 'Successful order passage rate between Shopify and WMS',
      humanNote: "Tariq receives complete, correct orders — almost without exception",
    },
    {
      number: '0',
      label: 'Manual preparation steps required per order',
      humanNote: 'Orders flow end-to-end without human intervention',
    },
  ],

  humanImpactCards: [
    {
      icon: '📋',
      title: 'Operations Team Relief',
      description:
        "Fatima's team reclaimed hours previously spent on manual data preparation. That time is now spent on work that requires human judgement — not data formatting.",
    },
    {
      icon: '📦',
      title: 'Warehouse Readiness',
      description:
        "Tariq's team receives orders that are complete, compliant, and correctly formatted on arrival. The pipeline starts processing the moment an order lands — nothing is waiting on manual fixes.",
    },
    {
      icon: '⚙️',
      title: 'Operational Confidence',
      description:
        "Sara now has an order pipeline she can rely on. International compliance requirements are handled automatically, and fulfilment errors tied to data formatting are gone.",
    },
    {
      icon: '📈',
      title: 'Scalable Fulfilment Foundation',
      description:
        "The middleware supports AÏZA's international growth without proportional increases in operational overhead — the system scales with order volume, not headcount.",
    },
  ],

  ctaBadge: "Let's automate the gap in your operations",
  ctaHeadline: 'A fulfilment pipeline that runs<br />without anyone running it.',
  ctaSubline:
    "We build the integration layer between your commerce and operations stacks — so your team focuses on decisions, not data preparation.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default aizaMiddleware
