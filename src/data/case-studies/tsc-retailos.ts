import { CaseStudy } from '@/types/case-study'

const tscRetailos: CaseStudy = {
  slug: 'tsc-retailos',
  isPublished: true,
  client: 'The Sleep Company',
  industry: 'D2C Sleep & Furniture',
  region: 'India',
  pillar: 'Customer Experience',
  product: 'retailOS',
  year: 2025,
  type: 'RetailOS Implementation',
  pm: 'Anant Khemka',
  accent: '#3d5a80',
  accentSoft: 'rgba(61,90,128,0.08)',
  accentLight: '#567aad',

  eyebrow: 'Customer Experience · retailOS · Omnichannel Commerce · 2025',
  headline: "Designing a True Omnichannel Experience: <em>The Sleep Company</em> with retailOS",
  subheadline:
    'Sleep is personal. Their retail experience now is too — online and in-store.',
  heroMeta: [
    { label: 'Client', value: 'The Sleep Company' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "The Sleep Company is a premium mattress and comfort-tech brand known for its proprietary SmartGRID® technology. With rapid expansion across digital commerce and physical experience centers, the brand focuses on delivering a high-touch, consultative buying journey. As offline retail scaled nationally, maintaining operational precision and brand consistency across online and in-store touchpoints became a strategic priority.",
    "We deployed retailOS on the same commerce architecture as The Sleep Company's e-commerce platform — creating a unified omnichannel backbone with shared inventory, centralized coupon management, AI mattress recommenders, and a brand-aligned POS interface that matched the premium in-store experience the brand had built its reputation on.",
  ],
  brandTags: ['D2C Sleep Tech', 'retailOS', 'SmartGRID', 'Omnichannel POS', 'EMI', 'Shopify', 'India'],
  brandStats: [
    { name: 'Platform', value: 'retailOS + Shared OMS + Shopify' },
    { name: 'Capabilities', value: 'AI Recommender · STN/GRN · Coupon Engine · CMS' },
    { name: 'Region', value: 'India (Multi-City Experience Centers)' },
    { name: 'Focus', value: 'AOV Growth, Reconciliation Speed & Brand Experience' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people needed the in-store experience to feel as premium and seamless as buying a SmartGRID mattress online — a customer in a consultation, a store associate managing a complex sale, and an operations director with reconciliation chaos across a growing store network.",
  personas: [
    {
      avatar: '🛌',
      name: 'Sunita',
      age: 43,
      role: 'Customer · considering a premium mattress purchase',
      quote:
        "Customers visiting experience centers for a high-consideration mattress purchase expected expert, personalised guidance. Without intelligent recommendation tools at the point of sale, associates had no way to surface products matched to individual sleep needs and budgets.",
      painTag: '💡 Consultative mattress purchasing requiring intelligent in-store recommendation tools',
    },
    {
      avatar: '🏪',
      name: 'Deepa',
      age: 28,
      role: 'Store Associate · The Sleep Company Experience Center',
      quote:
        "Store associates managing EMI payments, coupon validation, and warehouse stock queries for home delivery were forced to navigate separate systems and make manual phone calls mid-sale. The operational complexity redirected associate attention from the customer to the systems — mid-transaction, during the most critical part of the sale.",
      painTag: '⚙️ Store associates juggling multiple disconnected systems during complex sales',
    },
    {
      avatar: '📊',
      name: 'Rahul',
      age: 39,
      role: 'Director of Retail Operations · The Sleep Company',
      quote:
        "Retail operations directors overseeing a growing network of experience centers had no unified view across online and offline channels. Cash handovers were manual, inventory between warehouse and stores required daily reconciliation, and a premium brand was being run on a fragmented operations stack.",
      painTag: '🗂️ Online and offline operations siloed — growing reconciliation burden across experience centers',
    },
  ],

  challengeParagraphs: [
    "The Sleep Company's in-store experience had been designed to match the premium standard of the SmartGRID brand — consultative, personal, and expert. But the operational infrastructure behind the experience center didn't match that standard. Inventory reconciliation between e-commerce and physical stores was manual and delayed. Deepa's team managed campaign coupons, EMI offers, and warehouse stock queries through separate tools and phone calls — complexity that stole time from the customer conversation that made the brand exceptional.",
    "Rahul's visibility into the retail estate was insufficient for a multi-city network. Reporting on experience center performance required manual data consolidation. Cash handover processes lacked structured audit trails. Stock Transfer Notes between warehouse and stores were handled informally. The operational debt was invisible in the brand's marketing — but very visible to the teams delivering the in-store experience every day.",
  ],
  challengeTension:
    "A premium sleep brand whose in-store experience was aspirational — and whose retail operations infrastructure was not.",
  challengeMetrics: [
    { name: 'Online and offline inventory sync', value: 'Siloed — manual reconciliation required', barPercent: 90, barStyle: 'gold' },
    { name: 'Coupon and campaign management', value: 'Fragmented across channels and stores', barPercent: 88, barStyle: 'gold' },
    { name: 'In-store consultative tools', value: 'Absent — no product recommender at POS', barPercent: 85, barStyle: 'gold' },
    { name: 'Cross-channel order reconciliation time', value: 'Manual — hours per cycle', barPercent: 82, barStyle: 'gold' },
    { name: 'Retail operational reporting', value: 'Delayed — data consolidated manually', barPercent: 78, barStyle: 'soft' },
  ],

  approachIntro:
    "retailOS gave Sunita a consultative buying experience, gave Deepa one system for everything, and gave Rahul complete visibility across his entire retail network.",
  approachCards: [
    {
      icon: '🔗',
      title: 'Unified Omnichannel Commerce Backbone',
      description:
        "Deployed retailOS on the same commerce architecture as the e-commerce platform — shared OMS, real-time inventory sync, and centralized reporting eliminating the silos that created Rahul's reconciliation burden.",
      badge: 'Sustainability',
    },
    {
      icon: '🛋️',
      title: 'Brand-Aligned POS with AI Mattress Recommender',
      description:
        "Built a visually rich POS frontend following The Sleep Company's design guidelines — incorporating product imagery, EMI displays, and AI-powered mattress recommendations that turned Deepa's interactions into genuine consultations.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🎟️',
      title: 'Centralized Coupon & Promotion Engine',
      description:
        "Campaign coupons, freebies, Buy-X-Get-Y offers, and conditional discounts managed through a unified backend with store-level sync and real-time usage tracking — Deepa applies promotions confidently without calling HQ.",
      badge: 'Sustainability',
    },
    {
      icon: '📋',
      title: 'Structured STN/GRN & Warehouse Sync',
      description:
        "Integrated Stock Transfer Notes, Goods Receipt Notes, and warehouse sync — every inventory movement between warehouse and experience centers is documented, timestamped, and reflected across the system automatically.",
      badge: 'Resilience',
    },
    {
      icon: '💰',
      title: 'Cash Management & Handover Workflows',
      description:
        "Implemented structured cash management with daily overviews, employee handover logs, and transaction audit trails — giving Rahul financial accountability across all experience centers without manual consolidation.",
      badge: 'Resilience',
    },
    {
      icon: '💳',
      title: 'EMI & Endless Aisle Selling',
      description:
        "Enabled in-store EMI payment flows and endless aisle capabilities — customers ordering products not physically in-store for home delivery, making the experience center a full catalogue environment.",
      badge: 'Human-Centricity',
    },
  ],

  resultCards: [
    {
      number: '10%',
      label: 'Increase in store AOV through AI recommenders, unified coupons, and EMI visibility',
      humanNote: "Sunita discovers products perfectly matched to her needs — and purchases them",
    },
    {
      number: '30%',
      label: 'Faster cross-channel order reconciliation through unified OMS and centralized reporting',
      humanNote: "Rahul's finance and ops cycles move faster with accurate, automatic data",
    },
    {
      number: '35%',
      label: 'Faster billing and assisted selling through brand-aligned UI and simplified checkout',
      humanNote: "Deepa spends more time consulting, less time managing systems",
    },
    {
      number: '40%',
      label: 'Reduction in operational reconciliation time through structured STN/GRN workflows',
      humanNote: "Manual stock and cash audits replaced by automated verification",
    },
  ],

  humanImpactCards: [
    {
      icon: '🛌',
      title: 'The Consultative Experience Delivered',
      description:
        "Sunita's experience center visit feels like an expert consultation — the AI recommender surfaces mattress options matched to her sleep profile, EMI options are visible, and the entire journey from recommendation to purchase happens in one seamless flow.",
    },
    {
      icon: '🏪',
      title: 'One System for Everything',
      description:
        "Deepa manages complex mattress sales — with EMI flows, warehouse stock queries, and campaign promotions — from a single system that matches the premium environment she works in. The operational complexity is invisible to her customers.",
    },
    {
      icon: '📊',
      title: 'Complete Retail Visibility',
      description:
        "Rahul monitors every experience center from a unified dashboard — inventory levels, sales performance, cash positions, and reconciliation status all visible in real time. Multi-city expansion is supported by operations infrastructure that scaled with it.",
    },
    {
      icon: '📈',
      title: 'Brand Premium in Every Touchpoint',
      description:
        "The Sleep Company's in-store experience now matches the premium standard of its products — brand-aligned interface, intelligent recommendations, and seamless omnichannel operations that reinforce the brand identity at every customer interaction.",
    },
  ],

  ctaBadge: "Let's build your omnichannel retail experience",
  ctaHeadline: 'When the in-store experience matches<br />the brand promise, customers feel it.',
  ctaSubline:
    "retailOS for premium D2C brands — brand-aligned POS, unified omnichannel operations, and intelligent selling tools that make every store interaction a consultation.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default tscRetailos
