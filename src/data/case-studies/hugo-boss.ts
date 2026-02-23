import { CaseStudy } from '@/types/case-study'

const hugoBoss: CaseStudy = {
  slug: 'hugo-boss',
  isPublished: true,
  client: 'Hugo Boss',
  industry: 'Premium Fashion Retail',
  region: 'UAE / Middle East',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'Full-Stack Development / Enterprise Integrations',
  pm: 'Anshu Singh',
  accent: '#1a1a2e',
  accentSoft: 'rgba(26,26,46,0.08)',
  accentLight: '#2d2d5e',

  eyebrow: 'Full-Stack Development · Enterprise Integrations · 2025',
  headline: "From Catalog to Checkout: Building <em>Hugo Boss UAE</em>'s End-to-End Commerce Engine",
  subheadline:
    'A complete commerce build for a market that demands precision at every touchpoint — from PIM to payment.',
  heroMeta: [
    { label: 'Client', value: 'Hugo Boss UAE' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "Hugo Boss is a globally renowned premium fashion house with exacting standards for every customer touchpoint. Entering and scaling the UAE market required a commerce ecosystem that could match those standards — not just a storefront, but a fully integrated operational architecture capable of real-time synchronisation across catalog, inventory, logistics, and checkout.",
    "The engagement delivered a fully integrated commerce solution across Storefront, OMS, Catalog, and Inventory on the Fynd platform. Built on Boltic Serverless with Workflow Builder, the architecture orchestrated complex integrations across Salsify PIM, SAP ERP, Tradeling WMS, cross-border logistics, and a custom dual-payment checkout — establishing a foundation built for the precision the brand demands.",
  ],
  brandTags: ['Premium Fashion', 'Fynd', 'Boltic Serverless', 'UAE', 'Enterprise Integrations', 'Multi-System Commerce'],
  brandStats: [
    { name: 'Platform', value: 'Fynd Commerce + Boltic Serverless' },
    { name: 'Integrations', value: 'Salsify PIM · SAP · Tradeling WMS · JusPay · Checkout.com' },
    { name: 'Region', value: 'UAE / Middle East' },
    { name: 'Focus', value: 'End-to-End Commerce Architecture' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people needed this commerce engine to work flawlessly — and each had a different definition of what flawless meant.",
  personas: [
    {
      avatar: '👗',
      name: 'Amira',
      age: 34,
      role: 'Premium fashion shopper · Dubai',
      quote:
        "I expect the same seamless experience online that Hugo Boss delivers in-store. If a product shows as available and then isn't, or checkout creates friction, I'll go elsewhere. Premium means no compromises.",
      painTag: '💳 Real-time inventory accuracy and checkout reliability',
    },
    {
      avatar: '📦',
      name: 'Tariq',
      age: 38,
      role: 'Regional Operations Manager · Hugo Boss UAE',
      quote:
        "We're syncing catalog data from a global PIM, warehouse data from Tradeling, and financial data from SAP — all of which need to talk to each other in real time. Manual reconciliation is not a viable option at this scale.",
      painTag: '🔄 Multi-system synchronization at enterprise scale',
    },
    {
      avatar: '⚙️',
      name: 'Layla',
      age: 41,
      role: 'Head of Digital Commerce · Hugo Boss MENA',
      quote:
        "Hugo Boss UAE needs to meet regional compliance requirements and support cross-border logistics — while running at the performance level the brand demands globally. Architecture is a brand decision here, not just a technical one.",
      painTag: '🌍 Regional compliance meets global brand standards',
    },
  ],

  challengeParagraphs: [
    "Orchestrating a commerce engine for a premium global brand in the UAE means solving problems that standard platform implementations don't encounter. Catalog data flows from a global Salsify PIM via SFTP. Inventory and warehouse operations run through Tradeling WMS. Financial data integrates with SAP. Each system has its own data model, its own timing requirements, and its own tolerance for error — which is zero.",
    "Cross-border logistics introduced additional complexity: Delivery Note EDI (ASN) and Receive Advice flows had to be implemented to satisfy regional fulfilment requirements. The checkout needed to support regional payment methods through JusPay while maintaining international payment reliability through Checkout.com. Every integration had to hold under the performance expectations a premium fashion brand sets for its customers.",
  ],
  challengeTension:
    "At Hugo Boss, the technology is invisible — and making enterprise-grade complexity invisible requires flawless execution across every system it touches.",
  challengeMetrics: [
    { name: 'Multi-system integration orchestration complexity', value: 'Enterprise-grade', barPercent: 92, barStyle: 'gold' },
    { name: 'Real-time catalog & inventory synchronization', value: 'Mission-critical', barPercent: 90, barStyle: 'gold' },
    { name: 'Cross-border logistics workflow requirements', value: 'Regional compliance', barPercent: 85, barStyle: 'soft' },
    { name: 'Premium storefront performance standards', value: 'Non-negotiable', barPercent: 88, barStyle: 'gold' },
    { name: 'Checkout reliability for premium transactions', value: 'Zero tolerance', barPercent: 95, barStyle: 'gold' },
  ],

  approachIntro:
    "The architecture was built so that Amira experiences effortlessness, Tariq experiences automation, and Layla experiences compliance — simultaneously.",
  approachCards: [
    {
      icon: '⚡',
      title: 'Boltic Serverless Architecture',
      description:
        "Implemented Boltic Serverless with Workflow Builder as the orchestration backbone — enabling scalable, event-driven integration flows across all systems without the overhead of traditional integration middleware.",
      badge: 'Sustainability',
    },
    {
      icon: '📋',
      title: 'Salsify PIM Integration via SFTP',
      description:
        "Integrated Hugo Boss's global Salsify PIM via SFTP for automated catalog synchronization — Tariq's team no longer manages manual product data ingestion across markets.",
      badge: 'Resilience',
    },
    {
      icon: '🏭',
      title: 'Tradeling WMS Catalog & Inventory Sync',
      description:
        "Built real-time catalog and inventory synchronization with Tradeling WMS — ensuring Amira sees accurate availability and that warehouse operations align with commerce demand in real time.",
      badge: 'Resilience',
    },
    {
      icon: '🚚',
      title: 'EDI (ASN) & Receive Advice Flows',
      description:
        "Developed Delivery Note EDI and Receive Advice workflows to satisfy cross-border logistics requirements — automating the documentation flows that UAE fulfilment operations depend on.",
      badge: 'Sustainability',
    },
    {
      icon: '🏢',
      title: 'SAP ERP Integration',
      description:
        "Implemented SAP integration to ensure financial and operational data flows correctly between the commerce layer and Hugo Boss's enterprise systems — supporting the reporting and compliance requirements Layla's team operates under.",
      badge: 'Resilience',
    },
    {
      icon: '💳',
      title: 'Custom Checkout via JusPay + Checkout.com',
      description:
        "Delivered a custom checkout experience supporting regional payment methods through JusPay and international transactions through Checkout.com — giving Amira a payment experience that feels local while operating at global standards.",
      badge: 'Human-Centricity',
    },
  ],

  resultCards: [
    {
      number: '✓',
      label: 'Real-time visibility across catalog and inventory achieved',
      humanNote: "Amira sees accurate availability — the system doesn't over-promise",
    },
    {
      number: '↑↑',
      label: 'Operational efficiency through end-to-end automation',
      humanNote: "Tariq's team reconciles data from dashboards, not spreadsheets",
    },
    {
      number: '✓',
      label: 'Streamlined cross-border logistics coordination via EDI workflows',
      humanNote: "Layla's regional compliance requirements are met by design, not by exception",
    },
    {
      number: '∞',
      label: 'Stable, scalable commerce ecosystem for sustained UAE growth',
      humanNote: 'The foundation supports catalog expansion and market growth without architectural rework',
    },
  ],

  humanImpactCards: [
    {
      icon: '👗',
      title: 'Shopper Precision',
      description:
        "Amira experiences the precision she expects from Hugo Boss — accurate inventory, smooth checkout, and a premium digital experience that reflects the brand's global standard in a regional context.",
    },
    {
      icon: '📦',
      title: 'Operational Automation',
      description:
        "Tariq's team manages a multi-system commerce operation without manual reconciliation. Catalog updates, inventory changes, and fulfilment events propagate automatically across every connected system.",
    },
    {
      icon: '⚙️',
      title: 'Compliance by Architecture',
      description:
        "Layla's team operates in a commerce environment where UAE regional requirements are handled at the infrastructure level — EDI flows, cross-border logistics documentation, and payment routing are embedded in the architecture.",
    },
    {
      icon: '🏗️',
      title: 'Scalable Commerce Foundation',
      description:
        "The Boltic Serverless architecture provides the flexibility to add integrations, expand to new markets, and evolve the commerce stack without rebuilding the foundation that makes it all work.",
    },
  ],

  ctaBadge: "Let's architect your enterprise commerce stack",
  ctaHeadline: 'Enterprise commerce requires<br />enterprise-grade architecture.',
  ctaSubline:
    "End-to-end commerce builds that orchestrate complex integrations — PIM, ERP, WMS, logistics, and checkout — into a cohesive, scalable system the brand can operate with confidence.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default hugoBoss
