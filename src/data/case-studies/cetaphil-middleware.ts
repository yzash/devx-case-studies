import { CaseStudy } from '@/types/case-study'

const cetaphilMiddleware: CaseStudy = {
  slug: 'cetaphil-middleware',
  isPublished: true,
  client: 'Skin Health & You',
  industry: 'Healthcare & Dermatology Retail',
  region: 'India',
  pillar: 'Enterprise Architecture',
  year: 2025,
  type: 'Enterprise Middleware Engineering / ERP Integration',
  pm: 'Raj',
  accent: '#0077b6',
  accentSoft: 'rgba(0,119,182,0.08)',
  accentLight: '#0096d6',

  eyebrow: 'Enterprise Middleware · AWS Serverless · ERP Integration · 2025',
  headline: "Enterprise Middleware Integration for <em>Skin Health & You</em>: Seamless Shopify-to-ERP Order Flow",
  subheadline:
    'Zero downtime. Zero manual intervention. A data pipeline engineered for an ERP that could not change — but had to work.',
  heroMeta: [
    { label: 'Client', value: 'Skin Health & You (Cetaphil India)' },
    { label: 'Impact Pillar', value: 'Enterprise Architecture' },
  ],

  brandIntro: [
    "Skin Health & You is a certified ecommerce retailer associated with Galderma's Cetaphil portfolio in India, managing high-volume skincare sales through digital commerce channels. Following the migration to Shopify, the brand faced a structural challenge that no off-the-shelf integration could solve: their existing ERP was architecturally configured for legacy marketplace data formats and could not accommodate Shopify's schema — within any available timeline.",
    "The constraint was real and non-negotiable. Re-engineering the ERP was off the table. Manual data preparation was unsustainable at scale. The solution required a purpose-built enterprise middleware layer that could translate, enrich, and transmit order data automatically — sitting between Shopify and the ERP, absorbing the complexity so neither system had to change.",
  ],
  brandTags: ['Healthcare', 'Skincare', 'Cetaphil', 'AWS Serverless', 'ERP Integration', 'Middleware Engineering', 'India'],
  brandStats: [
    { name: 'Architecture', value: 'AWS Lambda + Serverless Middleware' },
    { name: 'Integration', value: 'Shopify ↔ ERP (Two-Way Sync)' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Zero-Downtime Order Sync & Data Transformation' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people were operating in a broken data pipeline. The middleware was built to make all three forget the pipeline exists.",
  personas: [
    {
      avatar: '🗄️',
      name: 'Priya',
      age: 32,
      role: 'ERP Systems Lead · Skin Health & You',
      quote:
        "ERP systems configured for legacy marketplace formats were structurally incompatible with Shopify order schemas, forcing teams to bridge the gap manually every day while the ERP remained locked on an unchangeable timeline.",
      painTag: '⚙️ ERP architecture incompatible with Shopify schema',
    },
    {
      avatar: '📋',
      name: 'Akash',
      age: 28,
      role: 'Ecommerce Operations Manager · Skin Health & You',
      quote:
        "Operations managers spent hours each day manually reformatting order data — price breakdowns, coupon splits, and cashback fields — because none of it emerged from Shopify in the structure the ERP required.",
      painTag: '⏱️ Hours daily on manual order data transformation',
    },
    {
      avatar: '📊',
      name: 'Neelam',
      age: 40,
      role: 'Business Head · Skin Health & You',
      quote:
        "Business heads overseeing a fresh platform migration faced the risk of fulfilment breakdown if order data failed to reach the ERP accurately — making operational continuity a non-negotiable requirement from day one.",
      painTag: '🔒 Post-migration operational continuity is non-negotiable',
    },
  ],

  challengeParagraphs: [
    "The structural gap between Shopify's order schema and the ERP's expected data format was not a minor compatibility issue — it was an architectural incompatibility. The ERP had been configured specifically for legacy marketplace data structures. Shopify orders contained different field hierarchies, missing financial breakdowns that the ERP accounting workflows depended on, and structural formats the ERP simply couldn't parse without transformation.",
    "The complexity extended beyond field mapping. Shopify's default API responses didn't provide the financial bifurcation the ERP required — MRP, selling price, coupon discounts, and cashback utilization needed to be computed and injected into the order payload before transmission. And two-way synchronization was needed: the ERP also had to push fulfilment, cancellation, return, and delivery status updates back into Shopify to keep the commerce layer accurate.",
  ],
  challengeTension:
    "An ERP that cannot change. A Shopify store that generates orders in a different language. And a business that cannot stop while the translation is being built.",
  challengeMetrics: [
    { name: 'ERP schema compatibility with Shopify orders', value: 'Zero without transformation', barPercent: 95, barStyle: 'gold' },
    { name: 'Manual order data preparation effort', value: 'Daily critical overhead', barPercent: 90, barStyle: 'gold' },
    { name: 'Financial breakdown availability in Shopify API', value: 'Not natively available', barPercent: 88, barStyle: 'gold' },
    { name: 'Two-way ERP-to-Shopify sync requirement', value: 'Complex bidirectional', barPercent: 82, barStyle: 'soft' },
    { name: 'Business continuity risk during transition', value: 'High', barPercent: 85, barStyle: 'gold' },
  ],

  approachIntro:
    "The middleware was engineered to be invisible — Priya's ERP receives perfect data, Akash stops preparing anything manually, and Neelam's business never pauses.",
  approachCards: [
    {
      icon: '⚡',
      title: 'AWS Lambda Serverless Middleware',
      description:
        "Designed and deployed a serverless middleware architecture on AWS using Lambda functions integrated with Shopify webhooks — processing every order event in real time without infrastructure management overhead.",
      badge: 'Resilience',
    },
    {
      icon: '🔄',
      title: 'Automated Order Data Transformation',
      description:
        "Built transformation pipelines that convert Shopify order payloads into ERP-compatible JSON structures automatically — Akash's daily reformatting work is replaced entirely by a system that runs without anyone watching.",
      badge: 'Sustainability',
    },
    {
      icon: '💰',
      title: 'Financial Component Bifurcation',
      description:
        "Implemented logic to compute and inject financial breakdowns — MRP, selling price, coupon discounts, and cashback utilization — that Shopify's API doesn't expose natively but Priya's ERP accounting workflows depend on.",
      badge: 'Resilience',
    },
    {
      icon: '↔️',
      title: 'Two-Way ERP-to-Shopify Synchronisation',
      description:
        "Enabled bidirectional synchronisation: the ERP pushes fulfilment events, cancellations, returns, and delivery status updates back into Shopify — keeping both systems accurate without manual reconciliation.",
      badge: 'Sustainability',
    },
    {
      icon: '🛡️',
      title: 'Schema Alignment Without ERP Modification',
      description:
        "Eliminated dependency on ERP-side structural changes by handling all transformation externally — the solution respects the constraint that the ERP cannot change within available timelines.",
      badge: 'Resilience',
    },
    {
      icon: '📡',
      title: 'Real-Time Automated Order Transmission',
      description:
        "Built real-time order transmission workflows ensuring orders enter the ERP pipeline immediately after placement — Neelam's fulfilment operations run without waiting on a manual validation step.",
      badge: 'Resilience',
    },
  ],

  resultCards: [
    {
      number: '0',
      label: 'Downtime during and after migration — order synchronisation never interrupted',
      humanNote: "Neelam's business continuity held throughout",
    },
    {
      number: '90%',
      label: 'Reduction in operational effort previously spent on order data handling',
      humanNote: "Akash reclaimed his days — the pipeline runs without him",
    },
    {
      number: '99%+',
      label: 'Middleware uptime — consistent order processing continuity',
      humanNote: "Priya's ERP receives data around the clock without intervention",
    },
    {
      number: '98%',
      label: 'Successful automated order passage rate between Shopify and ERP',
      humanNote: 'Orders flow end-to-end with near-perfect reliability',
    },
  ],

  humanImpactCards: [
    {
      icon: '🗄️',
      title: 'ERP Integrity Maintained',
      description:
        "Priya's ERP receives correctly formatted, financially complete order data for every Shopify transaction — the schema incompatibility that caused daily friction no longer exists from the ERP's perspective.",
    },
    {
      icon: '📋',
      title: 'Operations Team Freed',
      description:
        "Akash's team stopped preparing order data the morning the middleware went live. The hours previously spent on manual transformation are available for work that actually requires human judgement.",
    },
    {
      icon: '📊',
      title: 'Business Continuity Protected',
      description:
        "Neelam's post-migration operations ran without disruption. The middleware provided the bridge between two incompatible systems without requiring either to change — or the business to stop.",
    },
    {
      icon: '🏗️',
      title: 'Scalable Data Pipeline',
      description:
        "The AWS serverless architecture scales with order volume automatically — as Skin Health & You grows, the middleware grows with it, without infrastructure changes or proportional cost increases.",
    },
  ],

  ctaBadge: "Let's engineer the integration your ERP needs",
  ctaHeadline: 'Systems that cannot change<br />need bridges that never break.',
  ctaSubline:
    "Enterprise middleware engineering for commerce-to-ERP order flows — handling schema transformation, financial bifurcation, and two-way sync so your operations run without manual intervention.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default cetaphilMiddleware
