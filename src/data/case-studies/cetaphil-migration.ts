import { CaseStudy } from '@/types/case-study'

const cetaphilMigration: CaseStudy = {
  slug: 'cetaphil-migration',
  isPublished: true,
  client: 'Skin Health & You',
  industry: 'Healthcare & Dermatology Retail',
  region: 'India',
  pillar: 'Enterprise Architecture',
  year: 2025,
  type: 'Platform Migration / Commerce Architecture Transition',
  pm: 'Raj',
  accent: '#0077b6',
  accentSoft: 'rgba(0,119,182,0.08)',
  accentLight: '#0096d6',

  eyebrow: 'Platform Migration · Commerce Architecture · 2025',
  headline: "Enabling <em>Skin Health & You</em> to Migrate to Shopify for a Scalable E-Commerce Future",
  subheadline:
    'A fixed deadline, a shutting platform, and a business that could not go dark. The migration that had to be perfect.',
  heroMeta: [
    { label: 'Client', value: 'Skin Health & You (Cetaphil India)' },
    { label: 'Impact Pillar', value: 'Enterprise Architecture' },
  ],

  brandIntro: [
    "Skin Health & You is a certified ecommerce retailer associated with Galderma's Cetaphil portfolio in India, offering dermatologist-recommended skincare products through digital channels. When the announcement came that their existing platform, Kartify, was shutting down, the brand faced a challenge with a hard deadline and no room for failure.",
    "The migration to Shopify was not optional and not on a flexible timeline. Every customer record, every product, every historical order, and every operational data structure had to move — accurately, completely, and without disrupting a business that couldn't afford downtime. We were brought in to design and execute a migration that would be as invisible to customers as a migration could possibly be.",
  ],
  brandTags: ['Healthcare', 'Skincare', 'Cetaphil', 'Shopify Migration', 'Kartify', 'Emergency Migration', 'India'],
  brandStats: [
    { name: 'Migration', value: 'Kartify → Shopify' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Zero Downtime, Data Integrity & Business Continuity' },
    { name: 'Engagement', value: 'Emergency Platform Migration' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    'Three people had everything at stake in the migration going right — a customer who expected continuity, an operations manager in a race against time, and a business head whose revenue depended on uninterrupted commerce.',
  personas: [
    {
      avatar: '🧴',
      name: 'Ritu',
      age: 30,
      role: 'Cetaphil loyalist · Noida',
      quote:
        "Loyal customers who had ordered dermatologist-recommended products for years stood to lose their entire order history if the migration went wrong — and any period of downtime during a reorder cycle directly impacted their healthcare routine.",
      painTag: '📋 Customer continuity and data preservation at risk',
    },
    {
      avatar: '⏱️',
      name: 'Akash',
      age: 28,
      role: 'Ecommerce Operations Manager · Skin Health & You',
      quote:
        "Operations managers received a platform shutdown notice with limited runway to move product data, customer accounts, historical orders, and custom fields — all of it needing to land correctly in Shopify before Kartify went dark.",
      painTag: '🕐 Fixed shutdown deadline with massive data migration scope',
    },
    {
      avatar: '📊',
      name: 'Neelam',
      age: 40,
      role: 'Business Head · Skin Health & You',
      quote:
        "Healthcare brand leaders understood that customers relied on the store for dermatologist-prescribed products — making even a few hours of access disruption both a patient experience failure and a meaningful business risk.",
      painTag: '💊 Healthcare brand cannot afford commerce disruption',
    },
  ],

  challengeParagraphs: [
    "Platform migrations are never simple — but forced migrations with external deadlines are in a different category entirely. The Kartify shutdown gave Skin Health & You a fixed window that couldn't be negotiated. Within that window, a complete data migration was required: product catalog, customer accounts, historical orders, and custom operational datasets built on Kartify's architecture — all of which needed transformation into Shopify-compatible structures.",
    "The data architecture differences between Kartify and Shopify were significant. Kartify-specific data structures required purpose-built transformation logic, not mapping. Customer familiarity with the storefront layout needed to be preserved to avoid friction for returning buyers. And every step of the process had to be validated before go-live — because there was no version of this migration that allowed for a rollback.",
  ],
  challengeTension:
    "The deadline was external, immovable, and indifferent to the complexity of what had to move before it arrived.",
  challengeMetrics: [
    { name: 'Migration deadline inflexibility', value: 'External & fixed', barPercent: 95, barStyle: 'gold' },
    { name: 'Data architecture compatibility gap', value: 'Significant', barPercent: 88, barStyle: 'gold' },
    { name: 'Historical data migration scope', value: 'Complete catalog + orders + accounts', barPercent: 85, barStyle: 'gold' },
    { name: 'Customer experience continuity risk', value: 'High', barPercent: 80, barStyle: 'soft' },
    { name: 'Business downtime tolerance', value: 'Zero', barPercent: 90, barStyle: 'gold' },
  ],

  approachIntro:
    "Every decision in the migration strategy was driven by Neelam's zero-downtime requirement, Akash's data completeness mandate, and Ritu's expectation of continuity.",
  approachCards: [
    {
      icon: '🗓️',
      title: 'Time-Bound Migration Strategy',
      description:
        "Designed a structured migration plan aligned precisely with the Kartify shutdown deadline — every phase, every data workstream, and every validation step mapped to Akash's available runway.",
      badge: 'Resilience',
    },
    {
      icon: '📦',
      title: 'Complete Data Architecture Migration',
      description:
        "Executed full migration of product catalog, customer accounts, historical orders, and custom operational datasets — Ritu's purchase history and account data made the move intact.",
      badge: 'Resilience',
    },
    {
      icon: '🔄',
      title: 'Kartify-to-Shopify Data Transformation',
      description:
        "Built structured transformation workflows to convert Kartify's proprietary data formats into Shopify-compatible architecture — not a mapping exercise, a genuine structural translation.",
      badge: 'Sustainability',
    },
    {
      icon: '🎨',
      title: 'Storefront Continuity Rebuild',
      description:
        "Recreated the storefront design within Shopify to maintain the familiar experience returning customers expected — Ritu arrives on a store that feels like the one she already trusted.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🛡️',
      title: 'Staged Testing & Go-Live Validation',
      description:
        "Conducted comprehensive staged testing and validation workflows before go-live — Neelam's team had confidence that the migration was correct before Kartify switched off.",
      badge: 'Resilience',
    },
    {
      icon: '⚡',
      title: 'Zero-Downtime Deployment Planning',
      description:
        "Coordinated rapid deployment planning to minimise downtime and protect active business operations — the cutover happened during the window that minimised customer impact.",
      badge: 'Resilience',
    },
  ],

  resultCards: [
    {
      number: '✓',
      label: 'Migration completed within the fixed Kartify shutdown deadline',
      humanNote: "Akash hit the deadline — completely, not approximately",
    },
    {
      number: '0',
      label: 'Critical business downtime during platform transition',
      humanNote: "Neelam's business continuity was protected throughout",
    },
    {
      number: '100%',
      label: 'Catalog, historical order data, and custom datasets migrated into Shopify',
      humanNote: "Ritu's account, orders, and product access survived the migration intact",
    },
    {
      number: '∞',
      label: 'Scalable Shopify architecture supporting future integrations and growth',
      humanNote: 'The new foundation removes the ceiling the old platform imposed',
    },
  ],

  humanImpactCards: [
    {
      icon: '🧴',
      title: 'Customer Continuity',
      description:
        "Ritu visits the new storefront and finds her account, her order history, and her trusted products exactly where she expects them — a migration she never had to experience.",
    },
    {
      icon: '⏱️',
      title: 'Deadline Met',
      description:
        "Akash's team crossed the finish line before Kartify closed. Every product, every customer record, every custom data field made it — correctly, completely, and on time.",
    },
    {
      icon: '📊',
      title: 'Business Protected',
      description:
        "Neelam's business continued to operate through a platform transition that could have been catastrophic. Revenue didn't stop, customers weren't disrupted, and the new platform immediately improved the operational foundation.",
    },
    {
      icon: '🏗️',
      title: 'Future-Ready Foundation',
      description:
        "The Shopify migration wasn't just a rescue operation — it established a modern, scalable ecommerce architecture that supports future integrations, catalog expansion, and growth without the constraints Kartify imposed.",
    },
  ],

  ctaBadge: "Let's execute your platform migration without risk",
  ctaHeadline: 'A migration done right<br />is one no one notices.',
  ctaSubline:
    "Emergency and planned platform migrations executed with full data integrity, zero downtime, and architecture designed for what comes next — not just what came before.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default cetaphilMigration
