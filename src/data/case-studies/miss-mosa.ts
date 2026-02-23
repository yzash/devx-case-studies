import { CaseStudy } from '@/types/case-study'

const missMosa: CaseStudy = {
  slug: 'miss-mosa',
  isPublished: true,
  client: 'Miss Mosa',
  industry: 'Premium Fashion / Resort Wear',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'Website Development',
  pm: 'Yash Patel',
  accent: '#e0629a',
  accentSoft: 'rgba(224,98,154,0.08)',
  accentLight: '#e87db2',

  eyebrow: 'Customer Experience · Website Development · Fashion · 2025',
  headline: "End-to-End Shopify Build for <em>Miss Mosa</em>: Speed, Animation, and Premium Fashion UI",
  subheadline:
    'Built from scratch — fast, beautiful, and ready to sell.',
  heroMeta: [
    { label: 'Client', value: 'Miss Mosa' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "Miss Mosa (formerly Alamode By Akanksha) is a premium Indian fashion brand specializing in resort wear, swimwear, and contemporary women's clothing. With a distinctive aesthetic built around bold color, refined silhouettes, and resort lifestyle, the brand needed a digital home that matched the premium quality of its collections.",
    "We built Miss Mosa's complete Shopify store from the ground up — achieving high page speed scores, implementing rich smooth animations, and developing custom product filtering aligned with the brand's collection architecture. The result: a premium fashion digital destination that loads fast, feels luxurious, and helps customers find exactly what they're looking for.",
  ],
  brandTags: ["Premium Fashion", "Resort Wear", "Shopify", "Custom Filters", "Animation", "Page Speed", "India"],
  brandStats: [
    { name: 'Platform', value: 'Shopify (End-to-End Build)' },
    { name: 'Capabilities', value: 'Custom Filters · Rich Animations · Speed Optimization' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Page Speed, Premium UI/UX & Product Discovery' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people needed a website built from scratch to a premium standard — a customer looking for resort wear who needed to filter by style and occasion, a brand owner whose previous site wasn't matching the brand she'd built, and a digital manager watching bounce rates from slow load times.",
  personas: [
    {
      avatar: '👙',
      name: 'Kritika',
      age: 28,
      role: 'Customer · planning a resort holiday wardrobe',
      quote:
        "I was looking for swimwear and a cover-up that worked together. The product range was beautiful but I had to scroll through everything to find what matched. A filter for 'swimwear' or 'resort wear' or 'color' would have saved me twenty minutes. I ended up buying just one piece instead of a look.",
      painTag: '🔍 Product discovery friction from missing brand-specific filters across a large catalog',
    },
    {
      avatar: '✨',
      name: 'Akanksha',
      age: 34,
      role: 'Founder · Miss Mosa',
      quote:
        "My brand is premium. Every piece is designed with intention — the fabrics, the silhouettes, the colors. But my previous website looked like it was built by someone who didn't understand that. I wanted a site where the product photography could breathe, the animations felt intentional, and the experience felt like the brand.",
      painTag: '🎨 Previous website not reflecting the premium, design-conscious brand identity',
    },
    {
      avatar: '📊',
      name: 'Priyanka',
      age: 30,
      role: 'Digital Manager · Miss Mosa',
      quote:
        "We were losing potential customers to slow load times on mobile. Fashion shoppers are impatient — they're browsing on the go. If the homepage or the collection page takes more than two seconds, they've already moved to Instagram. We needed speed without sacrificing the visual richness that made the brand worth visiting.",
      painTag: '⏱️ Slow mobile load times causing bounce before the product range was visible',
    },
  ],

  challengeParagraphs: [
    "Building Miss Mosa's website from scratch meant making consequential architectural decisions from the beginning. The brand's product range — resort wear, swimwear, and contemporary women's fashion across colors, silhouettes, and occasions — required custom filtering that Shopify's standard filters weren't designed to support. Kritika's product discovery experience depended on being able to filter by attributes that were specific to Miss Mosa's collection logic rather than generic e-commerce categories.",
    "Akanksha's premium positioning required visual richness that performance optimization had to accommodate rather than eliminate. Rich animations enhanced the brand's luxury feel — but every animation added to the performance budget. Priyanka's mobile load time concern meant that every design decision had to earn its place against the performance baseline. Building beautiful and fast simultaneously required intentional trade-off management from day one.",
  ],
  challengeTension:
    "A premium fashion brand building from scratch — where visual richness and fast load times were both non-negotiable, not alternatives.",
  challengeMetrics: [
    { name: 'Custom product filtering capability', value: 'None — built from scratch requirement', barPercent: 88, barStyle: 'gold' },
    { name: 'Page speed with rich visual content', value: 'Challenge — must achieve high scores with animations', barPercent: 85, barStyle: 'gold' },
    { name: 'Brand premium perception alignment', value: 'Starting from zero — full brand expression needed', barPercent: 90, barStyle: 'gold' },
    { name: 'Mobile load time for fashion shopper patience', value: 'Must be sub-2-second — audience context', barPercent: 82, barStyle: 'gold' },
    { name: 'Animation quality vs. performance trade-off', value: 'Must resolve — both non-negotiable', barPercent: 80, barStyle: 'soft' },
  ],

  approachIntro:
    "We built the site to help Kritika find her resort look in seconds, realize Akanksha's brand vision in every pixel, and give Priyanka performance metrics she was proud of.",
  approachCards: [
    {
      icon: '🏗️',
      title: 'End-to-End Shopify Store Build',
      description:
        "Built the complete Miss Mosa Shopify store from ground zero — architecture decisions made for performance, brand alignment, and future product catalog growth from the first line of code.",
      badge: 'Resilience',
    },
    {
      icon: '⚡',
      title: 'Performance-First Build Architecture',
      description:
        "Implemented performance optimization from the architecture stage — optimized asset loading, strategic lazy loading, and image delivery structured to achieve high page speed scores while preserving visual richness.",
      badge: 'Sustainability',
    },
    {
      icon: '🎬',
      title: 'Rich Animations Without Performance Cost',
      description:
        "Designed and implemented smooth animations that enhanced Miss Mosa's premium luxury feel — scroll transitions, hover effects, and product reveals — engineered to run at high frame rates without impacting page load scores.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🔍',
      title: 'Custom Product Filters',
      description:
        "Built brand-specific product filtering aligned with Miss Mosa's collection architecture — collection, size, color, style, and occasion filters enabling Kritika to build a complete resort look without endless scrolling.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🎨',
      title: 'Premium Fashion UI/UX',
      description:
        "Designed modern, editorial UI with clean layouts, generous whitespace, and intuitive navigation tailored for premium fashion e-commerce — every page designed to let the product photography lead.",
      badge: 'Human-Centricity',
    },
    {
      icon: '📱',
      title: 'Mobile-First Responsive Design',
      description:
        "Built the entire experience mobile-first — touch interactions, swipe gestures for gallery views, and mobile-specific performance tuning ensuring Priyanka's audience gets a fast, premium experience on every device.",
      badge: 'Sustainability',
    },
  ],

  resultCards: [
    {
      number: '✓',
      label: 'High page speed scores achieved with rich animations and fashion imagery',
      humanNote: "Priyanka's mobile load metrics match the performance standards the audience demands",
    },
    {
      number: '↑↑',
      label: 'Enhanced user experience — rich animations and premium UI improving engagement',
      humanNote: "Akanksha's brand vision is expressed in every interaction and transition",
    },
    {
      number: '↑',
      label: 'Improved product discovery — custom filters streamlining collection navigation',
      humanNote: "Kritika finds her resort look in minutes, not after twenty minutes of scrolling",
    },
    {
      number: '✓',
      label: 'Premium digital presence — fast, beautiful, and brand-aligned from homepage to checkout',
      humanNote: 'Miss Mosa has a website that matches the quality of what it sells',
    },
  ],

  humanImpactCards: [
    {
      icon: '👙',
      title: 'Discovery Made Simple',
      description:
        "Kritika filters by 'resort wear' and 'coral' and sees the exact pieces that work together — swimwear and the matching cover-up surfaced within seconds. She builds a complete look instead of a single item because the site made it possible.",
    },
    {
      icon: '✨',
      title: 'Brand Vision Realized',
      description:
        "Akanksha's website finally reflects the brand she's built — editorial photography breathes in generous whitespace, animations feel intentional and premium, and every page communicates the aesthetic confidence that Miss Mosa stands for.",
    },
    {
      icon: '📊',
      title: 'Performance That Holds Attention',
      description:
        "Priyanka's mobile metrics are strong — the site loads fast, animations run smoothly, and the visual richness that makes the brand worth visiting is delivered without the performance penalty that killed the previous experience.",
    },
    {
      icon: '📈',
      title: 'Foundation for Growth',
      description:
        "The Shopify architecture is designed to scale with Miss Mosa's catalog — new collections, new filter attributes, and new product categories added without structural rework. The store was built for where the brand is going, not just where it is.",
    },
  ],

  ctaBadge: "Let's build your premium fashion store",
  ctaHeadline: "A fashion store that loads fast,<br />looks premium, and sells.",
  ctaSubline:
    "End-to-end Shopify builds for premium fashion and lifestyle brands — custom product filtering, rich animations, and performance optimization that makes beautiful fast.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default missMosa
