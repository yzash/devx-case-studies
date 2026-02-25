import { CaseStudy } from '@/types/case-study'

const beardoWebsite: CaseStudy = {
  slug: 'beardo-website',
  isPublished: true,
  client: 'Beardo',
  industry: "Men's Grooming",
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'Shopify Development / Storefront Revamp',
  pm: 'Raj',
  accent: '#2d3436',
  accentSoft: 'rgba(45,52,54,0.08)',
  accentLight: '#4a5456',

  eyebrow: 'Shopify Development · Storefront Revamp · 2025',
  headline: "Revamping <em>Beardo</em>'s Digital Storefront to Elevate Customer Experience and Market Position",
  subheadline:
    "A grooming brand that commands confidence in every product — given a digital shelf that finally does the same.",
  heroMeta: [
    { label: 'Client', value: 'Beardo' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandHeadline: "Bold grooming, built for Indian men.<br />A storefront rebuilt for how they shop.",
  brandIntro: [
    "Beardo is a leading men's grooming brand in India, offering beard care, skincare, fragrances, and styling products for modern consumers. With a strong community, a growing catalog, and high mobile traffic, the brand needed a digital presence that matched the edge and confidence it stood for.",
    "The existing storefront had grown organically but hadn't evolved strategically. Visual aesthetics lagged behind the brand's positioning, mobile browsing journeys were friction-heavy, and an expanding product catalog had made navigation harder, not easier. The revamp needed to modernise without disrupting — and maintain what was working while fundamentally improving what wasn't.",
  ],
  brandTags: ["Men's Grooming", 'Shopify', 'Mobile-First', 'Storefront Revamp', 'Performance Optimization', 'India'],
  brandStats: [
    { name: 'Platform', value: 'Shopify (Theme Revamp)' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Mobile UX, Conversion & Performance' },
    { name: 'Engagement', value: 'Partial Revamp + Ongoing Maintenance' },
    { name: 'Year', value: '2025' },
  ],

  peopleHeadline: "Built for the mobile grooming shopper, the merchandiser managing PDP real estate, and the growth lead watching conversion data underperform.",
  peopleIntro:
    "Three people experienced the old storefront's limitations every day — a mobile shopper who browsed but hesitated, a merchandiser who managed an increasingly unwieldy catalog, and a growth lead who watched conversion numbers underperform.",
  personas: [
    {
      avatar: '🧔',
      name: 'Vikram',
      age: 26,
      role: 'Beardo loyalist · Delhi',
      quote:
        'Mobile shoppers browsing Beardo encountered a navigation experience that required more taps than expected to reach a product, with Add-to-Cart placement that was inconsistent across pages. The friction was enough to interrupt what should have been a straightforward mobile purchase.',
      painTag: '📱 Poor mobile browsing and interaction flow',
    },
    {
      avatar: '🗂️',
      name: 'Sanjay',
      age: 32,
      role: 'Digital Merchandiser · Beardo HQ',
      quote:
        'Digital merchandisers at Beardo were working with a navigation structure that had not evolved alongside a catalog that had doubled in two years. New product launches were slow to surface, and the discovery flow had grown confusing enough to create friction for the merchandising team itself.',
      painTag: '🔍 Product discovery breaking under catalog growth',
    },
    {
      avatar: '📈',
      name: 'Anand',
      age: 38,
      role: 'Head of Digital · Beardo',
      quote:
        'Heads of digital at Beardo saw a storefront that had fallen behind the brand\'s bold, confident positioning — visually outdated and converting below the level expected of a market-leading grooming brand. The site was not performing as a commercial asset commensurate with the brand\'s standing.',
      painTag: '📉 Aesthetics and conversions below brand standard',
    },
  ],

  challengeHeadline: "Beardo's storefront was built for desktop browsing in a brand built for mobile-first shoppers.",
  challengeParagraphs: [
    "Beardo's storefront had accumulated the debt of rapid growth. Legacy components, growing integrations, and years of campaign additions had degraded performance. On mobile — where the majority of traffic arrived — the browsing experience was clunky, and conversion elements like Add-to-Cart lacked the accessibility a high-intent shopper needed.",
    "The revamp needed to be surgical. A full rebuild was off the table — but targeted improvements to the custom theme, combined with mobile-first UX restructuring and a comprehensive performance pass, could deliver the transformation the brand needed without the disruption of a platform migration.",
  ],
  challengeTension:
    "The storefront was working well enough to keep — but not well enough to convert the way a market-leading grooming brand should.",
  challengeMetrics: [
    { name: 'Mobile UX and purchase interaction quality', value: 'Below standard', barPercent: 80, barStyle: 'gold' },
    { name: 'Add-to-Cart accessibility on mobile', value: 'Poor placement', barPercent: 78, barStyle: 'gold' },
    { name: 'Website performance and load speed', value: 'Degraded', barPercent: 75, barStyle: 'soft' },
    { name: 'Product discovery and navigation clarity', value: 'Confusing', barPercent: 72, barStyle: 'soft' },
    { name: 'Visual alignment with brand positioning', value: 'Outdated', barPercent: 82, barStyle: 'gold' },
  ],

  approachHeadline: "Mobile-first PDP restructure, sticky ATC, and systematic performance optimization across the storefront.",
  approachIntro:
    "The revamp was built around Vikram's mobile experience, Sanjay's catalog management needs, and Anand's conversion ambitions.",
  approachCards: [
    {
      icon: '🎨',
      title: 'Partial Storefront Revamp',
      description:
        "Executed targeted modernisation of the existing custom Shopify theme — updating visual aesthetics and component design to bring the storefront in line with Beardo's brand positioning.",
      badge: 'Human-Centricity',
    },
    {
      icon: '📱',
      title: 'Mobile-First PDP Restructure',
      description:
        "Restructured product page layouts with a mobile-first approach and introduced sticky Add-to-Cart interactions — so Vikram can add to cart without hunting for the button.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🗺️',
      title: 'Navigation & Menu Hierarchy Redesign',
      description:
        "Redesigned navigation and menu structure to support growing catalog depth — making product discovery intuitive even as the range expands.",
      badge: 'Sustainability',
    },
    {
      icon: '🛒',
      title: 'Cart Experience Enhancement',
      description:
        "Enhanced product cards and cart experience to reduce purchase friction — clearing the path from browsing intent to completed order.",
      badge: 'Human-Centricity',
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description:
        'Conducted comprehensive performance improvements including asset cleanup, script management, and media loading enhancements — rebuilding the speed the site had lost.',
      badge: 'Resilience',
    },
    {
      icon: '🛡️',
      title: 'Ongoing Maintenance & Technical Support',
      description:
        "Provided proactive bug monitoring, app integration support, and continuous technical consultation — ensuring Anand's team has a stable platform to run campaigns without disruption.",
      badge: 'Resilience',
    },
  ],

  resultsHeadline: "60% performance improvement, 20% conversion rate increase, 20% mobile engagement improvement.",
  resultCards: [
    {
      number: '60%',
      label: 'Improvement in website performance and loading speed',
      humanNote: "Vikram browses without friction — the site loads before his patience runs out",
    },
    {
      number: '20%',
      label: 'Increase in overall conversion rate',
      humanNote: "Anand's numbers moved — because the experience finally earns the sale",
    },
    {
      number: '20%',
      label: 'Improvement in mobile customer engagement',
      humanNote: 'Mobile visitors browse more and abandon less',
    },
    {
      number: '↑↑',
      label: 'Add-to-Cart interactions through optimised placement and accessibility',
      humanNote: "Vikram finds the ATC button exactly where he expects it",
    },
  ],

  humanImpactCards: [
    {
      icon: '🧔',
      title: 'Mobile Shopper Confidence',
      description:
        "Vikram now browses Beardo on mobile with the same ease he'd expect from the country's leading grooming brand — fast pages, clear navigation, and an Add-to-Cart button that's always within reach.",
    },
    {
      icon: '🗂️',
      title: 'Merchandiser Clarity',
      description:
        "Sanjay's growing catalog now has a navigation structure that can absorb new launches without confusion — product discovery works for the customer even as the range keeps expanding.",
    },
    {
      icon: '📈',
      title: 'Conversion Performance',
      description:
        "Anand's digital team can look at the storefront and see it working — visually aligned with the brand, performing at the speed it should, and converting at the rate the brand deserves.",
    },
    {
      icon: '🛡️',
      title: 'Operational Stability',
      description:
        "Ongoing maintenance ensures campaign launches don't expose technical debt. The platform supports the business — it doesn't add to its operational burden.",
    },
  ],

  ctaBadge: "Let's revamp what's holding your storefront back",
  ctaHeadline: 'A digital shelf that earns<br />every visit it receives.',
  ctaSubline:
    "Strategic Shopify revamps that modernise aesthetics, improve mobile UX, and deliver conversion uplift — without the disruption of a full rebuild.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default beardoWebsite
