import { CaseStudy } from '@/types/case-study'

const cometWebsiteOptimisation: CaseStudy = {
  slug: 'comet-website-optimisation',
  isPublished: true,
  client: 'Comet',
  industry: 'D2C Fashion / Sneaker Retail',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'Speed Optimisation',
  pm: 'Raj',
  accent: '#ff6b35',
  accentSoft: 'rgba(255,107,53,0.08)',
  accentLight: '#ff8557',

  eyebrow: 'Customer Experience · Speed Optimisation · Performance · 2025',
  headline: "Accelerating Digital Performance: Website Speed Optimization for <em>Comet</em>",
  subheadline:
    "Speed is a product feature. We made Comet's site feel instant.",
  heroMeta: [
    { label: 'Client', value: 'Comet' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "Comet is a digitally native Indian sneaker brand delivering modern, design-led e-commerce experiences to a mobile-first audience. To support growing customer traffic and improve browsing continuity, the brand needed to optimize storefront performance — strengthening loading efficiency and enabling faster customer interactions across high-engagement shopping journeys.",
    "We conducted comprehensive performance audits across homepage, PLPs, and PDPs — implementing image delivery optimization, lazy loading for non-critical components, third-party script cleanup, and mobile-first performance tuning. The result: 50-65% improvement in overall page load performance and 20-25% improvement in mobile interaction responsiveness.",
  ],
  brandTags: ["D2C Sneakers", "Shopify", "Performance Optimization", "Mobile-First", "Core Web Vitals", "Image Optimization", "India"],
  brandStats: [
    { name: 'Platform', value: 'Shopify' },
    { name: 'Performance Gain', value: '50-65% improvement in page load performance' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Loading Speed, Mobile Responsiveness & Campaign Readiness' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people were experiencing the consequences of a site that loaded slower than the sneaker culture it served — a customer who bounced before seeing the drop, a marketer whose paid traffic wasn't converting, and a product manager whose brand standards were undermined by performance.",
  personas: [
    {
      avatar: '👟',
      name: 'Rishabh',
      age: 20,
      role: 'Comet customer · hypebeast on his phone',
      quote:
        "When a drop goes live I check Comet on my phone immediately. But the homepage and collection pages were slow to load — especially on 4G. By the time everything loaded, the sizes I wanted were gone. Fast is the minimum requirement for a sneaker brand.",
      painTag: '⏱️ Slow mobile load times causing drop misses and bounce before content appeared',
    },
    {
      avatar: '📊',
      name: 'Rahul',
      age: 28,
      role: 'Performance Marketing Manager · Comet',
      quote:
        "Our paid campaigns were driving strong click-through rates but the landing page performance was eating our conversion. Slow load times on mobile create a gap between the ad promise and the landing page experience. We were paying for traffic that was bouncing before converting.",
      painTag: '📉 Paid traffic converting below potential due to landing page load time',
    },
    {
      avatar: '💻',
      name: 'Priya',
      age: 31,
      role: 'Head of Digital Product · Comet',
      quote:
        "Comet is a design-forward brand. The visual quality of our collections is a brand standard. But having that visual richness come at a performance cost was a tradeoff we couldn't accept. We needed the site to be both beautiful and fast — not one or the other.",
      painTag: '🎨 Rich visual experience and performance at odds — brand standard requiring both',
    },
  ],

  challengeParagraphs: [
    "Comet's media-heavy storefront was a performance challenge inherent to the brand's visual identity. High-quality sneaker imagery across homepage hero sections, collection grids, and PDP galleries was non-negotiable for brand standards — but unoptimized media delivery was the primary driver of load time. Third-party integrations had added JavaScript execution overhead that compounded the media loading delays, and mobile users felt both problems acutely.",
    "The performance impact was measurable in conversion data: Rahul's campaigns showed click-through rates that didn't translate into the conversion rates a healthy landing page should deliver. And for Rishabh's drop-purchase behavior — inherently time-sensitive — slow loading was the difference between a successful purchase and an out-of-stock disappointment. The optimization had to preserve Comet's visual quality while eliminating the speed penalty it was creating.",
  ],
  challengeTension:
    "A design-forward sneaker brand whose high-quality visual identity was creating measurable performance overhead on mobile.",
  challengeMetrics: [
    { name: 'Homepage and PDP load performance', value: 'Slow — media-heavy overhead', barPercent: 88, barStyle: 'gold' },
    { name: 'Mobile browsing responsiveness', value: 'Degraded — 4G users experiencing friction', barPercent: 85, barStyle: 'gold' },
    { name: 'Third-party script execution overhead', value: 'High — multiple integrations impacting render', barPercent: 82, barStyle: 'gold' },
    { name: 'Paid campaign landing page conversion', value: 'Below potential — load time causing bounce', barPercent: 80, barStyle: 'gold' },
    { name: 'Above-the-fold rendering speed', value: 'Delayed — non-critical assets blocking initial view', barPercent: 78, barStyle: 'soft' },
  ],

  approachIntro:
    "We made the site fast enough for Rishabh to catch a drop, improved Rahul's conversion from paid traffic, and gave Priya performance without compromising visual quality.",
  approachCards: [
    {
      icon: '🔍',
      title: 'Comprehensive Performance Audit',
      description:
        "Conducted detailed performance audits across homepage, PLPs, and PDP journeys — identifying specific bottlenecks, measuring their contribution to load time, and prioritizing fixes by impact.",
      badge: 'Sustainability',
    },
    {
      icon: '🖼️',
      title: 'Image Delivery and Asset Optimization',
      description:
        "Optimized image delivery and media assets through compression, format optimization, and structured loading strategies — visual quality maintained for Priya's brand standards while delivery overhead dramatically reduced.",
      badge: 'Human-Centricity',
    },
    {
      icon: '⚡',
      title: 'Lazy Loading for Non-Critical Components',
      description:
        "Implemented lazy loading for below-the-fold and non-critical components to prioritize above-the-fold rendering — Rishabh sees the hero content immediately while the rest of the page loads progressively behind it.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🧹',
      title: 'Third-Party Script Optimization',
      description:
        "Reduced script execution delays through third-party integration audit, cleanup, and async optimization — eliminating render-blocking JavaScript that was adding seconds to interaction readiness.",
      badge: 'Resilience',
    },
    {
      icon: '📱',
      title: 'Mobile-First Performance Tuning',
      description:
        "Implemented mobile-specific optimizations — viewport-appropriate asset loading, touch interaction responsiveness, and connection-aware delivery — improving the experience most of Comet's audience uses.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🔄',
      title: 'Stable Deployment During Active Campaigns',
      description:
        "Deployed all performance enhancements through controlled staging and release workflows — no campaign disruption, no integration breakage, no storefront instability during optimization.",
      badge: 'Resilience',
    },
  ],

  resultCards: [
    {
      number: '50–65%',
      label: 'Overall page load performance improvement across homepage, PLPs, and PDPs',
      humanNote: "Rishabh loads the drop collection before the sizes sell out",
    },
    {
      number: '20–25%',
      label: 'Mobile interaction responsiveness improvement — faster 4G browsing continuity',
      humanNote: 'The majority of Comet customers on mobile feel the difference immediately',
    },
    {
      number: '↑',
      label: 'Paid campaign conversion — landing page speed no longer the conversion blocker',
      humanNote: "Rahul's traffic reaches the product before bouncing",
    },
    {
      number: '✓',
      label: 'Visual richness maintained — high-quality imagery at optimized delivery speed',
      humanNote: "Priya's brand standard is met — beautiful and fast, not one or the other",
    },
  ],

  humanImpactCards: [
    {
      icon: '👟',
      title: 'Drop-Ready Performance',
      description:
        "Rishabh opens Comet during a drop and the collection loads immediately — 4G performance no longer costs him sizes. The speed improvement is most valuable exactly when the brand's urgency is highest.",
    },
    {
      icon: '📊',
      title: 'Paid Traffic That Converts',
      description:
        "Rahul's campaigns now land on pages that load before the ad-click intent fades. The gap between click-through rate and conversion narrows as load time is removed from the conversion equation.",
    },
    {
      icon: '💻',
      title: 'Beauty and Speed Together',
      description:
        "Priya's brand standard holds — Comet's visual quality is maintained through optimized delivery rather than compromised. The site is as beautiful as before and significantly faster.",
    },
    {
      icon: '📈',
      title: 'Campaign-Ready Infrastructure',
      description:
        "Optimized performance creates a more resilient storefront for campaign-driven traffic spikes — drop launches, sale events, and social media moments drive traffic to pages that load reliably under pressure.",
    },
  ],

  ctaBadge: "Let's optimize your storefront performance",
  ctaHeadline: "Fast enough to catch a drop.<br />Beautiful enough to keep the brand.",
  ctaSubline:
    "Shopify performance optimization for design-forward D2C brands — image delivery, script optimization, and mobile-first tuning that makes your site as fast as your brand is bold.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default cometWebsiteOptimisation
