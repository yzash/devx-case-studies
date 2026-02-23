import { CaseStudy } from '@/types/case-study'

const eumeRetailos: CaseStudy = {
  slug: 'eume-retailos',
  isPublished: true,
  client: 'EUME',
  industry: 'D2C Lifestyle / Travel Accessories',
  region: 'India',
  pillar: 'Customer Experience',
  product: 'retailOS',
  year: 2025,
  type: 'RetailOS Implementation',
  pm: 'Anant Khemka',
  accent: '#2a6b7c',
  accentSoft: 'rgba(42,107,124,0.08)',
  accentLight: '#3d8a9e',

  eyebrow: 'Customer Experience · retailOS · Retail Operations · 2025',
  headline: "Operational Clarity at Scale: Digitizing <em>EUME</em>'s Retail Backbone",
  subheadline:
    'When the back-of-house runs smoothly, the front of house can shine.',
  heroMeta: [
    { label: 'Client', value: 'EUME' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "EUME is a design-led lifestyle brand known for functional travel gear and everyday carry essentials. With growing traction across D2C and marketplaces, the brand expanded into physical retail to strengthen customer experience and increase offline discovery. As product variants, inventory movement, and returns became more complex, EUME required a scalable retail operating system that could unify store operations with its existing ecommerce stack.",
    "We deployed retailOS across EUME's retail stores — implementing SKU-level inventory traceability, structured STN/GRN workflows, integrated return handling, and a centralized coupon engine. The result: complete operational visibility, 45% faster stock reconciliation, and a retail backbone that scales with the brand.",
  ],
  brandTags: ['D2C Retail', 'retailOS', 'Inventory Management', 'STN/GRN', 'Omnichannel', 'Travel Accessories', 'India'],
  brandStats: [
    { name: 'Platform', value: 'retailOS + Shopify + Unicommerce' },
    { name: 'Capabilities', value: 'STN/GRN · Returns · Coupon Engine · CMS' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Inventory Traceability, Reconciliation Speed & Return Accuracy' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people were navigating the costs of a retail operation without the infrastructure to support it — a customer whose return went untracked, a store manager drowning in reconciliation, and an ops head without real-time visibility.",
  personas: [
    {
      avatar: '🧳',
      name: 'Priya',
      age: 31,
      role: 'EUME customer · returned a product in-store',
      quote:
        "I returned a bag I bought online at the EUME store — but for weeks my refund was delayed because the store couldn't confirm the stock had been received. I shouldn't have to chase a return across channels.",
      painTag: '🔄 Omnichannel returns creating customer frustration and stock misalignment',
    },
    {
      avatar: '🏪',
      name: 'Rajan',
      age: 29,
      role: 'Store Manager · EUME Retail',
      quote:
        "Every day I manually reconcile stock between what came in from the warehouse and what's shown in the system. It takes hours, and errors still creep in. I need to know exactly what's in my store at any given moment.",
      painTag: '📋 Manual stock reconciliation consuming hours per store per day',
    },
    {
      avatar: '📊',
      name: 'Vikram',
      age: 42,
      role: 'Head of Operations · EUME',
      quote:
        "We expanded to multiple stores but our visibility didn't scale with us. I couldn't see inventory across locations in real time. Returns were manual. Transfers were delayed. The operational debt was growing faster than the brand.",
      painTag: '🔍 No real-time inventory visibility across a growing multi-store network',
    },
  ],

  challengeParagraphs: [
    "EUME's retail expansion exposed the limits of manual operations at scale. SKU-level inventory movement — sales, returns, transfers — was tracked inconsistently across stores and warehouses. Rajan's team spent hours each day on reconciliation that should have been automated. And when Priya returned a product in-store, the process of validating eligibility, updating inventory, and syncing with Shopify required manual intervention that delayed refunds and created stock discrepancies.",
    "The absence of structured Stock Transfer Note (STN) and Goods Receipt Note (GRN) workflows meant every inter-store and warehouse movement was prone to error. Coupon and discount management was fragmented across touchpoints. Vikram lacked the operational dashboard to see his retail estate in real time. EUME needed a retail operating system — not a patchwork of manual processes.",
  ],
  challengeTension:
    "A lifestyle brand building premium retail experiences — undermined by backend operations that couldn't track where anything was or what it was worth.",
  challengeMetrics: [
    { name: 'SKU-level inventory visibility', value: 'Partial — manual tracking across channels', barPercent: 88, barStyle: 'gold' },
    { name: 'Stock reconciliation time per store', value: 'Hours of daily manual effort', barPercent: 85, barStyle: 'gold' },
    { name: 'Return processing accuracy', value: 'Delayed — no automated Shopify sync', barPercent: 82, barStyle: 'gold' },
    { name: 'STN/GRN workflow maturity', value: 'Absent — fully manual', barPercent: 90, barStyle: 'gold' },
    { name: 'Multi-store inventory overview', value: 'None — no centralized dashboard', barPercent: 80, barStyle: 'soft' },
  ],

  approachIntro:
    "retailOS gave Priya a seamless return experience, gave Rajan a system that reconciles itself, and gave Vikram a single view of his entire operation.",
  approachCards: [
    {
      icon: '📦',
      title: 'SKU-Level Inventory Movement Tracking',
      description:
        "Implemented real-time inward/outward tracking with transaction codes for every SKU movement — sales, returns, and stock adjustments — logged with timestamp and store attribution, eliminating blind spots across Unicommerce and retail.",
      badge: 'Sustainability',
    },
    {
      icon: '📋',
      title: 'STN / GRN Workflow Automation',
      description:
        "Built structured Stock Transfer Note and Goods Receipt Note workflows — ensuring inventory reconciliation between warehouse and stores happened in real time rather than through end-of-day manual matching.",
      badge: 'Resilience',
    },
    {
      icon: '🔄',
      title: 'Integrated Returns & Exchange Module',
      description:
        "Implemented return eligibility validation, partial returns, and Shopify sync — ensuring accurate stock re-adjustments and instant system updates so Priya's return reflected correctly across all channels immediately.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🎟️',
      title: 'Centralized Coupon & Discount Engine',
      description:
        "Deployed store-level coupons with usage limits, minimum order values, and percentage/fixed discount logic across all retail touchpoints — consistent promotions without manual configuration per store.",
      badge: 'Sustainability',
    },
    {
      icon: '💰',
      title: 'Cash Management System (CMS)',
      description:
        "Built daily cash overview, employee handover logs, and transaction audit trails — giving Rajan transparent store-level financial controls and giving Vikram accountability across the entire retail network.",
      badge: 'Resilience',
    },
    {
      icon: '📊',
      title: 'Unified Multi-Store Operations Dashboard',
      description:
        "Deployed a centralized reporting layer giving Vikram real-time visibility into inventory levels, stock movements, sales performance, and operational metrics across every EUME retail location from a single view.",
      badge: 'Sustainability',
    },
  ],

  resultCards: [
    {
      number: '100%',
      label: 'SKU-level inventory traceability — every movement logged across channels',
      humanNote: "Vikram sees every unit across every store and warehouse in real time",
    },
    {
      number: '45%',
      label: 'Reduction in stock reconciliation delays through STN/GRN automation',
      humanNote: "Rajan's reconciliation hours become minutes with automated confirmation",
    },
    {
      number: '30%',
      label: 'Faster return processing through real-time Shopify inventory sync',
      humanNote: "Priya's return is confirmed and refunded without a manual chase",
    },
    {
      number: '18%',
      label: 'Increase in combo attach rate through automated promotional logic',
      humanNote: 'Predefined combo discounts build baskets while protecting margins',
    },
  ],

  humanImpactCards: [
    {
      icon: '🧳',
      title: 'Seamless Omnichannel Returns',
      description:
        "Priya's in-store return from an online purchase is validated instantly — eligibility confirmed, stock updated, Shopify synced — with no manual intervention or refund delays. The cross-channel experience is seamless.",
    },
    {
      icon: '🏪',
      title: 'Operational Clarity for Store Teams',
      description:
        "Rajan manages his store with confidence. Inventory arrives with GRN confirmation, transfers leave with STN documentation, returns update automatically, and daily reconciliation is handled by the system — not his team.",
    },
    {
      icon: '📊',
      title: 'Real-Time Visibility at Scale',
      description:
        "Vikram monitors the entire EUME retail estate from a single dashboard. Inventory levels, stock movements, and financial controls across all locations are visible in real time — operational debt replaced by operational clarity.",
    },
    {
      icon: '📈',
      title: 'Retail That Scales Without Friction',
      description:
        "Every new EUME store is onboarded to the same retailOS infrastructure — same workflows, same visibility, same accuracy. The operational model scales with the brand, not against it.",
    },
  ],

  ctaBadge: "Let's digitize your retail operations",
  ctaHeadline: 'Retail operations that run themselves<br />are operations that scale.',
  ctaSubline:
    "retailOS for omnichannel D2C brands — SKU-level inventory traceability, structured transfer workflows, and real-time visibility across every store.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default eumeRetailos
