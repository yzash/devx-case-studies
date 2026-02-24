import { CaseStudy } from '@/types/case-study'

const levisons: CaseStudy = {
  slug: 'levisons',
  isPublished: true,
  client: "Levison's",
  industry: 'Multi-Brand Fashion Retail',
  region: 'South Africa',
  pillar: 'Customer Experience',
  year: 2026,
  type: 'Platform Migration / eCommerce Transformation',
  pm: 'Anshu Singh',
  accent: '#2a6b7c',
  accentSoft: 'rgba(42,107,124,0.08)',
  accentLight: '#5cb8cc',

  eyebrow: 'Platform Migration · eCommerce Transformation · 2026',
  headline: "From Shopify Constraints to Fynd Flexibility: The <em>Levison's</em> Migration Story",
  subheadline:
    "Moving platforms without losing momentum — a migration built around the people who had to live with the old one.",
  heroMeta: [
    { label: 'Client', value: "Levison's South Africa" },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "Levison's is a South Africa–based multi-brand retail destination offering curated collections from globally recognised fashion and lifestyle labels. With an established digital presence and a loyal customer base, the brand needed more than a facelift — it needed a platform capable of growing with it.",
    'The existing Shopify setup had served its purpose, but structural limitations were slowing everything down: page speeds, operational workflows, and the team\'s ability to keep pace with the brand. The move to Fynd was about unlocking what the brand was always capable of.',
  ],
  brandTags: ['Multi-Brand Fashion', 'Fynd Platform', 'South Africa', 'Platform Migration', 'eCommerce Transformation'],
  brandStats: [
    { name: 'Platform', value: 'Shopify → Fynd' },
    { name: 'Scope', value: 'Migration · UX · Performance · SEO' },
    { name: 'Region', value: 'South Africa' },
    { name: 'Focus', value: 'Speed, Navigation & Ops Agility' },
    { name: 'Year', value: '2026' },
  ],

  peopleIntro:
    'Three people felt the weight of the old platform every day. The migration was designed to lift that weight from all of them.',
  personas: [
    {
      avatar: '🛍️',
      name: 'Zanele',
      age: 28,
      role: 'Regular shopper · Johannesburg',
      quote:
        'Regular shoppers on the Levison\'s site encountered slow page loads and jerky scrolling that repeatedly broke browsing sessions mid-flow. The accumulated friction pushed customers away before a purchase decision could form.',
      painTag: '⚡ Slow browsing & friction',
    },
    {
      avatar: '🗂️',
      name: 'Deon',
      age: 36,
      role: 'Digital Merchandiser · Levison\'s HQ',
      quote:
        'Digital merchandisers responsible for keeping the catalogue current found the platform added friction to every step of a stock update. The time it took to reflect new arrivals online consistently lagged behind what the pace of the business demanded.',
      painTag: '🐢 Slow operational turnaround',
    },
    {
      avatar: '📊',
      name: 'Priya',
      age: 33,
      role: 'Head of Digital · Levison\'s',
      quote:
        'Digital heads overseeing platform migrations are acutely aware that years of accumulated SEO equity can be wiped out by a poorly executed move. Ranking losses from a migration are a direct business risk — not a side effect that can be corrected later.',
      painTag: '📉 SEO continuity risk',
    },
  ],

  challengeParagraphs: [
    "Levison's had outgrown Shopify — not in terms of scale alone, but in terms of capability. The platform's structural constraints meant that improving one thing often meant compromising another. URL structures were inconsistent, sitemaps weren't optimised, and frontend performance lagged behind what modern shoppers expect.",
    "The migration challenge wasn't just technical. Every change carried the risk of disrupting live operations, losing SEO equity earned over years, and unsettling a customer base that expected continuity. The brief demanded a move that was thorough enough to fix everything — and careful enough to break nothing.",
  ],
  challengeTension:
    "The hardest part wasn't migrating — it was migrating without losing what had already been built: rankings, stability, and customer trust.",
  challengeMetrics: [
    { name: 'Platform flexibility ceiling', value: 'Reached', barPercent: 90, barStyle: 'gold' },
    { name: 'SEO & URL structure issues', value: 'Significant', barPercent: 80, barStyle: 'soft' },
    { name: 'Page load & scroll performance', value: 'Below standard', barPercent: 85, barStyle: 'gold' },
    { name: 'Catalogue update turnaround', value: 'Too slow', barPercent: 70, barStyle: 'soft' },
    { name: 'Live-site migration risk', value: 'High', barPercent: 88, barStyle: 'gold' },
  ],

  approachIntro:
    "We treated this as a transformation, not just a technical lift-and-shift. Every decision mapped back to a real person who'd feel the difference.",
  approachCards: [
    {
      icon: '🔀',
      title: 'Shopify to Fynd Migration',
      description:
        "Executed a structured platform migration from Shopify to Fynd, preserving data integrity, customer records, and catalogue continuity — so Deon's team picked up where they left off, not from scratch.",
      badge: 'Resilience',
    },
    {
      icon: '🗺️',
      title: 'Sitemap & URL Restructure',
      description:
        "Redesigned the sitemap architecture and corrected URL structures to eliminate navigation confusion and protect the SEO equity Priya's team had spent years building.",
      badge: 'Sustainability',
    },
    {
      icon: '⚡',
      title: 'Frontend Performance Optimisation',
      description:
        'Applied targeted performance improvements across asset loading and rendering — cutting the delays that sent Zanele elsewhere mid-browse.',
      badge: 'Human-Centricity',
    },
    {
      icon: '🖱️',
      title: 'Navigation & Scroll Refinement',
      description:
        'Improved frontend interaction behaviour — smoother scrolling, snappier navigation transitions — so browsing feels natural rather than effortful.',
      badge: 'Human-Centricity',
    },
    {
      icon: '🔍',
      title: 'SEO Preservation Strategy',
      description:
        "Implemented redirect mapping and crawl validation to ensure search rankings survived the migration intact. Priya's organic traffic wasn't a casualty of the upgrade.",
      badge: 'Sustainability',
    },
    {
      icon: '🛡️',
      title: 'Structured Live Migration',
      description:
        'Phased the migration to avoid live-site disruption. No downtime, no lost orders, no customer-facing incidents during the cutover.',
      badge: 'Resilience',
    },
  ],

  resultCards: [
    {
      number: '↑↑',
      label: 'Browsing speed and scroll smoothness',
      humanNote: 'Zanele stays on-site now — no more mid-browse drop-offs',
    },
    {
      number: '✓',
      label: 'SEO rankings stabilised post-migration',
      humanNote: "Priya's organic equity made it through the move intact",
    },
    {
      number: '↓↓',
      label: 'Operational turnaround time for catalogue updates',
      humanNote: "Deon's team moves faster — new stock live when it matters",
    },
    {
      number: '∞',
      label: 'Scalable Fynd foundation for future growth',
      humanNote: 'The platform can now grow with the brand, not against it',
    },
  ],

  humanImpactCards: [
    {
      icon: '🛒',
      title: 'Shopper Fluidity',
      description:
        "South African shoppers browsing Levison's now experience the kind of smooth, responsive journey they expect from a premium multi-brand destination — not the friction that used to push them away.",
    },
    {
      icon: '🗂️',
      title: 'Merchandiser Speed',
      description:
        "Deon's team can action catalogue updates, content changes, and new arrivals faster than before — giving the brand the operational agility to respond to trends in real time.",
    },
    {
      icon: '📈',
      title: 'SEO Continuity',
      description:
        "Years of organic search equity didn't disappear at the moment of migration. Priya's digital team kept their rankings, their traffic, and their confidence in the new platform.",
    },
    {
      icon: '🏗️',
      title: 'Future-Ready Foundation',
      description:
        "Levison's is no longer building on a platform it has outgrown. The Fynd foundation supports catalogue expansion, performance improvements, and new integrations without a rebuild.",
    },
  ],

  ctaBadge: "Let's move your platform forward",
  ctaHeadline: 'Migration done right means<br />nobody notices it happened.',
  ctaSubline:
    'We move platforms carefully — preserving what matters and unlocking what was never possible before.',
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default levisons
