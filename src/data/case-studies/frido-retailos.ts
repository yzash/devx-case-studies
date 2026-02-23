import { CaseStudy } from '@/types/case-study'

const fridoRetailos: CaseStudy = {
  slug: 'frido-retailos',
  isPublished: true,
  client: 'Frido',
  industry: 'D2C Ergonomic Products / Home & Lifestyle',
  region: 'India',
  pillar: 'Customer Experience',
  product: 'retailOS',
  year: 2025,
  type: 'RetailOS Implementation',
  pm: 'Anant Khemka',
  accent: '#5c8a3c',
  accentSoft: 'rgba(92,138,60,0.08)',
  accentLight: '#74a84f',

  eyebrow: 'Customer Experience · retailOS · Omnichannel Expansion · 2025',
  headline: "Engineering Retail Precision: <em>Frido</em>'s Omnichannel Expansion with retailOS",
  subheadline:
    "Omnichannel isn't a buzzword. It's the difference between a sale and a missed opportunity.",
  heroMeta: [
    { label: 'Client', value: 'Frido' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "Frido is a fast-growing Indian consumer brand focused on ergonomic and comfort-driven products across home and lifestyle categories. Having built strong traction online across Shopify, Amazon, and marketplaces, the brand began expanding into physical retail — with complex pricing models, multi-pack offerings, and B2B sales requirements that off-the-shelf POS systems simply couldn't accommodate.",
    "We deployed retailOS for Frido — a fully customizable, omnichannel-ready retail operating system built on modular architecture, deeply integrated with Shopify and Unicommerce, and capable of handling the complexity that makes Frido's commerce model unique: marketplace price parity, B2B quotation workflows, EMI payments, and multi-pack bundling logic.",
  ],
  brandTags: ['D2C Ergonomics', 'retailOS', 'Shopify', 'B2B Commerce', 'Omnichannel', 'Medusa', 'India'],
  brandStats: [
    { name: 'Platform', value: 'retailOS (Medusa) + Shopify + Unicommerce' },
    { name: 'Capabilities', value: 'B2B Quotation · EMI · Multi-Pack · Price Sync' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Reconciliation Speed, Store Onboarding & AOV Growth' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people were paying the price of a retail operation that couldn't match the complexity of the business — a B2B buyer who needed a formal quote, a store manager managing pricing discrepancies, and an ops head whose reconciliation hours were multiplying.",
  personas: [
    {
      avatar: '🏢',
      name: 'Kiran',
      age: 38,
      role: 'Corporate Procurement Manager · Frido B2B customer',
      quote:
        "I wanted to place a bulk order for ergonomic seat cushions for our office — but the store couldn't generate a formal quotation. I needed GST-compliant invoicing and an official quote to get finance approval. Without that, I had to walk away.",
      painTag: '📄 B2B buyers requiring formal quotation and GST-compliant invoicing at POS',
    },
    {
      avatar: '🏪',
      name: 'Ananya',
      age: 27,
      role: 'Store Manager · Frido Retail',
      quote:
        "Our products have different prices on Amazon and Flipkart. Customers come in quoting online prices and I have no easy way to verify or match them. And multi-pack bundles are priced differently again. Without a system to handle this, pricing becomes a daily negotiation.",
      painTag: '💱 Marketplace price parity and multi-pack pricing creating daily store friction',
    },
    {
      avatar: '📊',
      name: 'Nikhil',
      age: 41,
      role: 'VP Operations · Frido',
      quote:
        "Every time we open a new store, it takes weeks to configure the backend, sync pricing, and get the team operational. And then reconciliation between what's in Shopify, what's in Unicommerce, and what's in the store takes hours every day. We needed systems that worked together, not separately.",
      painTag: '⏳ Multi-system reconciliation consuming ops team hours across every store',
    },
  ],

  challengeParagraphs: [
    "Frido's retail expansion revealed the limits of standard POS systems. Ready-made solutions couldn't support the multi-pack pricing logic Frido needed for ergonomic accessory bundles, the B2B quotation workflows required for corporate clients like Kiran, or the marketplace price synchronization that kept Ananya from facing pricing confrontations every shift. Off-the-shelf tools forced Frido to choose between retail expansion and operational complexity — retailOS removed that choice.",
    "Nikhil's operations team faced a compounding problem: each new store added more reconciliation burden across Shopify, Unicommerce, and the store-level system. Pricing changes on Amazon had to be manually reflected in-store. B2B orders bypassed the POS entirely. EMI payments required separate coordination. Frido needed a single retail operating system that could handle all of it — not a collection of workarounds.",
  ],
  challengeTension:
    "An ergonomic brand with complex pricing, B2B requirements, and marketplace commitments — trying to run physical retail on a system that understood none of them.",
  challengeMetrics: [
    { name: 'B2B retail workflow support', value: 'Absent — standard POS only', barPercent: 90, barStyle: 'gold' },
    { name: 'Marketplace price synchronization', value: 'Manual — Amazon/Flipkart parity at risk', barPercent: 88, barStyle: 'gold' },
    { name: 'Multi-pack pricing and discount logic', value: 'Unsupported by existing systems', barPercent: 85, barStyle: 'gold' },
    { name: 'Daily reconciliation time across stores', value: 'Hours — growing with each new location', barPercent: 82, barStyle: 'gold' },
    { name: 'New store onboarding speed', value: 'Weeks — backend-heavy configuration', barPercent: 78, barStyle: 'soft' },
  ],

  approachIntro:
    "retailOS gave Kiran a formal quotation workflow, gave Ananya a pricing system that stayed current, and gave Nikhil a reconciliation process that ran itself.",
  approachCards: [
    {
      icon: '🔧',
      title: 'Custom POS on Modular Architecture',
      description:
        "Deployed retailOS powered by Medusa backend, fully integrated with Shopify and Unicommerce — a modular, extensible system capable of supporting Frido's unique requirements without compromising core retail reliability.",
      badge: 'Resilience',
    },
    {
      icon: '🔄',
      title: 'Unified Real-Time Synchronization',
      description:
        "Products, variants, customers, orders, and inventory synced instantly between Shopify, Unicommerce, and all retail stores — Nikhil's reconciliation runs automatically rather than manually.",
      badge: 'Sustainability',
    },
    {
      icon: '💱',
      title: 'Dynamic Price Sync Engine',
      description:
        "Implemented price synchronization enabling alignment with Amazon, Flipkart, and other vendor pricing — Ananya's store reflects marketplace prices without manual updates or customer confrontations.",
      badge: 'Human-Centricity',
    },
    {
      icon: '📄',
      title: 'B2B Quotation & GST-Compliant Invoicing',
      description:
        "Built B2B quotation generation with GST-compliant invoicing directly within the POS — Kiran gets the formal documentation his procurement process requires, in-store without workarounds.",
      badge: 'Human-Centricity',
    },
    {
      icon: '📦',
      title: 'Multi-Pack Discounting & Bundle Logic',
      description:
        "Enabled custom multi-pack discount structures and intelligent bundle pricing — ergonomic accessory combinations are priced and promoted correctly at every store without manual override.",
      badge: 'Sustainability',
    },
    {
      icon: '💳',
      title: 'EMI & Digital Payment Integration',
      description:
        "Integrated EMI payments via Snapmint, Razorpay POS, and digital billing through Razorpay BillMe — every payment method Frido's customers expect, handled natively within the POS.",
      badge: 'Resilience',
    },
  ],

  resultCards: [
    {
      number: '30%',
      label: 'Reduction in manual reconciliation time through real-time sync',
      humanNote: "Nikhil's ops team focuses on growth, not daily data reconciliation",
    },
    {
      number: '40%',
      label: 'Faster store onboarding — configuration-based deployment replaces backend-heavy setup',
      humanNote: 'New Frido stores go live in days, not weeks',
    },
    {
      number: '20%',
      label: 'Faster checkout time through integrated payment flows and multi-pack automation',
      humanNote: "Ananya moves customers through faster — peak hours handled without friction",
    },
    {
      number: '15%',
      label: 'Increase in offline store AOV through multi-pack bundling and intelligent discounting',
      humanNote: "Kiran's bulk purchase and bundle logic drives higher basket sizes",
    },
  ],

  humanImpactCards: [
    {
      icon: '🏢',
      title: 'B2B Commerce at the POS',
      description:
        "Kiran places his corporate order in-store and receives a GST-compliant quotation for finance approval — the POS handles B2B workflows natively, turning a missed sale into a repeating corporate relationship.",
    },
    {
      icon: '🏪',
      title: 'Pricing Without Confrontation',
      description:
        "Ananya's store automatically reflects marketplace price parity. When a customer references an Amazon price, the system validates and applies it — no negotiation, no manual lookup, no frustrated customer walking away.",
    },
    {
      icon: '📊',
      title: 'Reconciliation That Runs Itself',
      description:
        "Nikhil's operations team no longer spends hours reconciling Shopify, Unicommerce, and store systems. Real-time sync means the data is always aligned — the operation scales without the reconciliation overhead scaling with it.",
    },
    {
      icon: '📈',
      title: 'Retail Expansion Without Friction',
      description:
        "Every new Frido store launches from the same configuration template — price sync, bundle logic, B2B workflows, and payment integrations pre-configured. The operational model scales with the brand.",
    },
  ],

  ctaBadge: "Let's build your retail operating system",
  ctaHeadline: 'Retail infrastructure that handles<br />the complexity your brand actually has.',
  ctaSubline:
    "retailOS for D2C brands with complex pricing, B2B requirements, and marketplace commitments — modular, integrated, and built to scale.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default fridoRetailos
