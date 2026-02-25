import { CaseStudy } from '@/types/case-study'

const fbc: CaseStudy = {
  slug: 'fbc',
  isPublished: true,
  client: 'French Beauty Co',
  industry: 'Beauty & Skincare Retail',
  region: 'Australia',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'Shopify Development / Ongoing Consulting & UX Optimization',
  pm: 'Raj',
  accent: '#2a6b7c',
  accentSoft: 'rgba(42,107,124,0.08)',
  accentLight: '#3d8fa5',

  eyebrow: 'Shopify Development · Ongoing Consulting · UX Optimization · 2025',
  headline: "<em>French Beauty Co</em>: Sustained Growth Through Proactive Website Maintenance and Strategic UX Enhancements",
  subheadline:
    "Growth isn't always a big launch. Sometimes it's a year of relentless, methodical improvement that compounds.",
  heroMeta: [
    { label: 'Client', value: 'French Beauty Co' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandHeadline: "Premium beauty in Australia,<br />supported by a partner who never stops watching.",
  brandIntro: [
    "French Beauty Co is an Australia-based premium beauty retailer offering curated skincare and cosmetic brands to a global customer base. With a growing catalog of high-quality products and a brand narrative centered on Parisian beauty rituals, the storefront needed to be as carefully considered as the curation itself.",
    "Over a partnership spanning more than a year, we provided ongoing maintenance, strategic UX consulting, and performance optimization to a brand that understood growth isn't a single project — it's continuous, deliberate improvement. Every enhancement was designed to strengthen storytelling, improve purchase clarity, and keep operations stable as the brand scaled.",
  ],
  brandTags: ['Premium Beauty', 'Shopify', 'Australia', 'Ongoing Consulting', 'UX Optimization', 'Performance'],
  brandStats: [
    { name: 'Platform', value: 'Shopify (Ongoing Optimization)' },
    { name: 'Region', value: 'Australia / Global' },
    { name: 'Engagement', value: '12+ Months Ongoing Partnership' },
    { name: 'Focus', value: 'Performance, UX & Operational Stability' },
    { name: 'Year', value: '2025' },
  ],

  peopleHeadline: "Built for the brand team launching new collections on tight timelines, the eCommerce lead managing performance consistency, and the founder who needed site stability after press moments.",
  peopleIntro:
    'Three people lived with the storefront every day over the course of the partnership — each with a different relationship to its quality and stability.',
  personas: [
    {
      avatar: '💄',
      name: 'Emma',
      age: 34,
      role: 'Regular FBC customer · Sydney',
      quote:
        "Shoppers encountered slow product pages and an unclear information hierarchy that made it difficult to identify which products suited their needs. The decision path to purchase lacked the structure needed to support confident buying choices.",
      painTag: '🔍 Slow PDPs and unclear product communication',
    },
    {
      avatar: '🗓️',
      name: 'Sophie',
      age: 28,
      role: 'Content & Campaign Manager · FBC HQ',
      quote:
        "Campaign managers had no staging workflow, meaning every update was published directly to the live storefront. Mistakes went straight to customers, and launch nights carried the full operational risk of an untested deployment.",
      painTag: '⚠️ Unsafe deployment workflows before launches',
    },
    {
      avatar: '📊',
      name: 'Claire',
      age: 40,
      role: 'Head of Digital · French Beauty Co',
      quote:
        "Digital heads faced recurring silent failures from third-party integrations that degraded performance without any internal warning. Issues only surfaced when customers reported them, leaving the team perpetually reactive rather than proactive.",
      painTag: '🔇 Silent failures in integrations and performance',
    },
  ],

  challengeHeadline: "French Beauty Co needed more than a build — they needed a technical partner who anticipated problems.",
  challengeParagraphs: [
    "French Beauty Co had built a strong brand and a curated catalog — but the operational infrastructure supporting the storefront had grown without governance. Deployments happened directly to production. Performance degraded silently. Third-party integrations introduced instability that no one caught until a customer did.",
    "The UX challenges were subtler but equally consequential. Growing catalog complexity had outpaced the product communication framework. PDPs carried information, but not hierarchy — Emma had the data she needed, but not in the order she needed it. Storytelling pages were underdeveloped for a brand whose narrative was a genuine differentiator.",
  ],
  challengeTension:
    "A brand built on curation and trust — operating on an infrastructure that hadn't kept pace with either.",
  challengeMetrics: [
    { name: 'Deployment safety and staging workflows', value: 'None in place', barPercent: 88, barStyle: 'gold' },
    { name: 'PDP information hierarchy and clarity', value: 'Underdeveloped', barPercent: 75, barStyle: 'soft' },
    { name: 'Homepage and PDP load performance', value: 'Below standard', barPercent: 80, barStyle: 'gold' },
    { name: 'Third-party integration stability', value: 'Silent failure risk', barPercent: 85, barStyle: 'gold' },
    { name: 'Brand storytelling page quality', value: 'Insufficient', barPercent: 70, barStyle: 'soft' },
  ],

  approachHeadline: "12-month ongoing Shopify partnership — staging workflow, storytelling pages, PDP hierarchy, proactive monitoring.",
  approachIntro:
    "The partnership was structured around what Emma needed to understand, what Sophie needed to operate safely, and what Claire needed to trust.",
  approachCards: [
    {
      icon: '🔄',
      title: 'Staging & Deployment Workflow Implementation',
      description:
        "Established structured staging and deployment workflows — so Sophie could publish campaigns with confidence, knowing every change was tested before it reached a real customer.",
      badge: 'Resilience',
    },
    {
      icon: '📖',
      title: 'Brand Storytelling Page Development',
      description:
        "Built dedicated storytelling pages aligned with the French Beauty Co narrative — giving the brand the editorial depth it needed to convert curious visitors into loyal customers.",
      badge: 'Human-Centricity',
    },
    {
      icon: '📋',
      title: 'PDP Information Hierarchy Enhancement',
      description:
        "Restructured product page content to improve usage clarity, benefits communication, and decision-making confidence — Emma gets the information she needs in the order that helps her.",
      badge: 'Human-Centricity',
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description:
        "Conducted comprehensive performance improvements through asset cleanup, lazy loading, and script governance — systematically restoring the speed the storefront had lost over time.",
      badge: 'Sustainability',
    },
    {
      icon: '🛡️',
      title: 'Proactive Monitoring & Integration Maintenance',
      description:
        "Delivered continuous bug resolution, Shopify upgrade compatibility, and integration troubleshooting — so Claire heard about issues from us, not from customers.",
      badge: 'Resilience',
    },
    {
      icon: '🧩',
      title: 'Custom Variant Setup Logic',
      description:
        "Implemented custom variant configuration to simplify product setup and reduce the decision complexity customers experienced when navigating multi-option SKUs.",
      badge: 'Human-Centricity',
    },
  ],

  resultsHeadline: "40–55% faster load, 15–20% browsing efficiency improvement, sustained stability across 12+ months.",
  resultCards: [
    {
      number: '40–55%',
      label: 'Faster homepage and PDP loading through optimized asset and script management',
      humanNote: "Emma's browsing is fluent — not punctuated by loading bars",
    },
    {
      number: '15–20%',
      label: 'Improvement in browsing efficiency and product discovery',
      humanNote: 'Customers find the right product faster and leave less often',
    },
    {
      number: '↓↓',
      label: 'Operational disruptions through proactive monitoring and structured deployment',
      humanNote: "Sophie's launch nights are less stressful now",
    },
    {
      number: '✓',
      label: 'Sustained storefront stability across 12+ months of continuous enhancement',
      humanNote: "Claire's team knows about problems before customers do",
    },
  ],

  humanImpactCards: [
    {
      icon: '💄',
      title: 'Shopper Understanding',
      description:
        "Emma now browses PDPs that give her the information she needs in the sequence that helps her — product benefits are clear, usage is communicated, and the path to purchase makes sense.",
    },
    {
      icon: '🗓️',
      title: 'Campaign Confidence',
      description:
        "Sophie launches campaigns through a tested staging workflow — changes are validated before they're visible to customers, and launch nights are operations, not anxieties.",
    },
    {
      icon: '📊',
      title: 'Operational Visibility',
      description:
        "Claire's team has a proactive partner monitoring integrations, catching degradations, and resolving issues before they become customer-facing problems. Trust in the platform has been rebuilt.",
    },
    {
      icon: '📈',
      title: 'Compounding Improvement',
      description:
        "More than a year of incremental enhancements have compounded into a storefront that performs better, tells better stories, and converts with more confidence than when the partnership began.",
    },
  ],

  ctaBadge: "Let's become your long-term digital partner",
  ctaHeadline: 'Sustained growth comes from<br />sustained attention.',
  ctaSubline:
    "Ongoing Shopify partnerships that keep your storefront performing, your operations stable, and your customer experience improving — month after month.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default fbc
