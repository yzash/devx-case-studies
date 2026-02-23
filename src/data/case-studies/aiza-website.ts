import { CaseStudy } from '@/types/case-study'

const aizaWebsite: CaseStudy = {
  slug: 'aiza-website',
  isPublished: true,
  client: 'AÏZA',
  industry: 'Premium Beauty & Skincare',
  region: 'Middle East',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'Shopify Development / UX Transformation',
  pm: 'Raj',
  accent: '#8b5e3c',
  accentSoft: 'rgba(139,94,60,0.08)',
  accentLight: '#b07a52',

  eyebrow: 'Shopify Development · UX Transformation · 2025',
  headline: "Transforming <em>AÏZA</em>: Enhancing UX and Driving a Superior E-Commerce Experience",
  subheadline:
    "A premium brand rooted in Arab heritage and modern science — given a digital experience worthy of both.",
  heroMeta: [
    { label: 'Client', value: 'AÏZA' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "AÏZA is a premium beauty brand inspired by traditional Arab self-care rituals and modern scientific innovation. Combining heritage ingredients — dates, black seed, frankincense — with clinically proven actives developed in global laboratories, AÏZA occupies a unique position: culturally rooted, scientifically rigorous, and visually refined.",
    "The digital storefront needed to reflect all of that. A Shopify theme-based build was the chosen path — but without careful execution, a standard theme would flatten a brand defined by nuance. The work was about making Shopify feel bespoke: structured, premium, and conversion-ready without the overhead of a fully custom build.",
  ],
  brandTags: ['Premium Beauty', 'Shopify', 'Arab Heritage', 'UX Optimization', 'Middle East', 'D2C'],
  brandStats: [
    { name: 'Platform', value: 'Shopify (Theme Customization)' },
    { name: 'Region', value: 'Middle East / Global' },
    { name: 'Focus', value: 'Conversion Hierarchy, Performance & UX' },
    { name: 'Engagement', value: 'Theme Development & UX Enhancement' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three perspectives shaped the UX decisions — a customer who expected luxury, a merchandiser who needed clarity, and a brand leader who couldn't afford compromise.",
  personas: [
    {
      avatar: '✨',
      name: 'Layla',
      age: 32,
      role: 'Premium beauty shopper · Dubai',
      quote:
        "I discovered AÏZA through a recommendation and the products are genuinely beautiful — but finding the right one on the site feels harder than it should. The layout doesn't guide me.",
      painTag: '🗺️ No clear purchase journey hierarchy',
    },
    {
      avatar: '🛍️',
      name: 'Hana',
      age: 28,
      role: 'Digital Merchandiser · AÏZA HQ',
      quote:
        "The theme defaults look nothing like our brand. Every product card, every layout — we need it to carry the premium aesthetic we've built everywhere else. Right now it's doing the opposite.",
      painTag: '🎨 Theme defaults clash with brand identity',
    },
    {
      avatar: '📊',
      name: 'Omar',
      age: 40,
      role: 'Head of Ecommerce · AÏZA',
      quote:
        "Add-to-Cart is buried. Trust signals are inconsistent. Shoppers are getting to the product page and leaving without converting. Our brand deserves better — so do our conversion rates.",
      painTag: '📉 Conversion elements misaligned and buried',
    },
  ],

  challengeParagraphs: [
    "Premium brand identity is fragile. AÏZA had invested heavily in visual storytelling, cultural positioning, and product quality — but the Shopify theme was erasing that work before a customer even reached a product. Default layout patterns don't understand brand hierarchy. They don't distinguish between a mass-market catalogue and a curated premium collection.",
    "The conversion challenges were structural. Add-to-Cart placement, quantity management, purchase messaging, and trust signals all lacked the intentional hierarchy that guides shoppers from consideration to commitment. Fixing these within a theme-based approach — without destroying performance — required precise, methodical craft.",
  ],
  challengeTension:
    "A premium brand identity held back by default theme logic — and every day it stayed that way, conversions paid the price.",
  challengeMetrics: [
    { name: 'Purchase hierarchy and ATC accessibility', value: 'Below par', barPercent: 82, barStyle: 'gold' },
    { name: 'Brand identity expression in theme', value: 'Compromised', barPercent: 88, barStyle: 'gold' },
    { name: 'Informational messaging consistency', value: 'Inconsistent', barPercent: 76, barStyle: 'soft' },
    { name: 'Mobile browsing experience parity', value: 'Lagging', barPercent: 72, barStyle: 'soft' },
    { name: 'Page load performance with visual richness', value: 'At risk', barPercent: 68, barStyle: 'soft' },
  ],

  approachIntro:
    'Every component was rebuilt around how Layla browses, what Hana needed to present, and what Omar needed to convert.',
  approachCards: [
    {
      icon: '🎨',
      title: 'Premium Theme Component Customisation',
      description:
        "Rebuilt Shopify theme components to establish structured layout consistency — every section aligned with AÏZA's visual identity and brand positioning standards.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🛒',
      title: 'PDP & PLP Conversion Hierarchy',
      description:
        "Reworked product page and listing page component hierarchy to prioritise Add-to-Cart accessibility and quantity management — making Omar's conversion path as short as possible.",
      badge: 'Human-Centricity',
    },
    {
      icon: '💬',
      title: 'Contextual Purchase Messaging',
      description:
        "Introduced intent-aligned purchase messaging across key pages — guiding Layla from discovery to decision with information that actually helps, placed where it's needed.",
      badge: 'Human-Centricity',
    },
    {
      icon: '⚡',
      title: 'Performance-Focused Frontend Enhancements',
      description:
        'Applied performance-first frontend improvements throughout — maintaining fast load times while introducing the visual richness the brand demanded.',
      badge: 'Sustainability',
    },
    {
      icon: '📱',
      title: 'Mobile-First Responsive Refinements',
      description:
        "Ensured responsive consistency across all devices through mobile-first design refinements — so Layla's experience on her phone matches what she'd expect on desktop.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🔗',
      title: 'Optimised Product Card Interactions',
      description:
        'Refined product cards and browsing interaction touchpoints to reduce friction — making the path from browse to cart as natural as the brand experience around it.',
      badge: 'Resilience',
    },
  ],

  resultCards: [
    {
      number: '60%',
      label: 'Improvement in content load performance on PDPs',
      humanNote: "Layla's first impression of a product is fast, not frustrating",
    },
    {
      number: '2×',
      label: 'Overall sales value — driven by UX and brand alignment',
      humanNote: "Omar's conversion rates now match the brand's positioning",
    },
    {
      number: '50%',
      label: 'Faster Add-to-Cart to Checkout interactions',
      humanNote: 'The path from intent to purchase is finally frictionless',
    },
    {
      number: '✓',
      label: 'Premium brand identity delivered within Shopify theme architecture',
      humanNote: "Hana's digital shelf finally looks like the brand she's built",
    },
  ],

  humanImpactCards: [
    {
      icon: '✨',
      title: 'Shopper Guidance',
      description:
        "AÏZA shoppers now have a digital journey that guides them — from discovery through consideration to the cart, with clear hierarchy and intent-aligned messaging at every step.",
    },
    {
      icon: '🛍️',
      title: 'Brand Expression',
      description:
        "Hana's team can now present products in a way that reflects the premium identity AÏZA has built everywhere else — the digital shelf finally matches the brand story.",
    },
    {
      icon: '📊',
      title: 'Conversion Performance',
      description:
        "Omar's conversion metrics moved because the friction was removed — not through tricks or dark patterns, but by placing the right elements in the right places at the right moments.",
    },
    {
      icon: '📱',
      title: 'Cross-Device Consistency',
      description:
        "Whether a shopper discovers AÏZA on mobile or desktop, the experience is cohesive, premium, and performs without compromise.",
    },
  ],

  ctaBadge: "Let's make your Shopify store feel truly yours",
  ctaHeadline: 'Premium identity deserves a<br />storefront built to match it.',
  ctaSubline:
    "Shopify theme development that goes beyond defaults — structured, purposeful, and built to convert without sacrificing what makes the brand worth buying from.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default aizaWebsite
