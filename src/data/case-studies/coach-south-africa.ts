import { CaseStudy } from '@/types/case-study'

const coachSouthAfrica: CaseStudy = {
  slug: 'coach-south-africa',
  isPublished: true,
  client: 'Coach South Africa',
  industry: 'Luxury Fashion',
  region: 'South Africa',
  pillar: 'Customer Experience',
  year: 2026,
  type: 'eCommerce Launch / Full-Stack Development',
  pm: 'Anshu Singh',
  accent: '#8a6530',
  accentSoft: 'rgba(138,101,48,0.08)',
  accentLight: '#c9a96e',

  eyebrow: 'eCommerce Launch · Full-Stack Development · 2026',
  headline: 'Bringing <em>Coach</em> to South Africa — a luxury debut that put shoppers first',
  subheadline:
    'Global brand standards. Regional soul. A storefront built not just for conversion — but for confidence, delight, and trust at every touchpoint.',
  heroMeta: [
    { label: 'Client', value: 'Coach South Africa' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    'Coach is a globally recognised luxury fashion house with a legacy of exceptional craftsmanship and elevated retail experiences. Entering South Africa meant more than switching on a website — it meant earning trust in a market that expects precision, performance, and a sense of belonging.',
    "The brief was clear: build a digital flagship that feels as considered as the products inside it. Every interaction had to reflect the brand's global standard — while feeling at home in South Africa.",
  ],
  brandTags: ['Luxury Fashion', 'Fynd Platform', 'South Africa', 'eCommerce Launch', 'Full-Stack Dev'],
  brandStats: [
    { name: 'Platform', value: 'Fynd' },
    { name: 'Scope', value: 'Design · Dev · QA · Launch' },
    { name: 'Custom Build', value: 'Bobgo Logistics Extension' },
    { name: 'Integration', value: 'Custom ERP Sync' },
    { name: 'Market', value: 'South Africa (Regional Debut)' },
    { name: 'Year', value: '2026' },
  ],

  peopleIntro:
    "Three types of people needed this launch to feel effortless. We kept all three in mind throughout every build decision.",
  personas: [
    {
      avatar: '🛍️',
      name: 'Naledi',
      age: 34,
      role: 'First-time Coach shopper · Johannesburg',
      quote:
        "I've bought Coach abroad but never trusted a local site enough. If it looks off, I just don't buy. Luxury has to feel luxury on screen too.",
      painTag: '⚡ Trust & first impression',
    },
    {
      avatar: '📦',
      name: 'Themba',
      age: 41,
      role: 'Ops & Fulfilment Lead · Cape Town warehouse',
      quote:
        "When stock data doesn't match what's online, it's me on the phone with an angry customer. I need the system to just work — automatically.",
      painTag: '📉 ERP sync anxiety',
    },
    {
      avatar: '🖥️',
      name: 'Aisha',
      age: 29,
      role: 'Digital Merchandiser · Coach SA team',
      quote:
        "I own the catalogue experience. If I can't update pages fast or if assets load slowly, it reflects on me — and on the brand. Speed matters.",
      painTag: '🔥 Performance & control',
    },
  ],

  challengeParagraphs: [
    "Coach's South Africa launch wasn't just a technical project — it was a brand moment. The digital storefront would be the first touchpoint for an entirely new market. A sluggish load time, a confusing checkout, or mismatched inventory wasn't just a bug. It was a broken promise to every shopper who'd waited for Coach to arrive in their country.",
    "The complexity ran deep: region-specific logistics required a custom integration with Bobgo, ERP synchronisation had to be built from scratch, and media-rich product pages had to load fast on South African network conditions — all within a strict launch window.",
  ],
  challengeTension:
    "The hardest part wasn't the tech — it was building something premium enough for Coach's global standards, while making it resilient enough for regional realities.",
  challengeMetrics: [
    { name: 'Global brand compliance pressure', value: 'Critical', barPercent: 95, barStyle: 'gold' },
    { name: 'Custom logistics integration (Bobgo)', value: 'Built from scratch', barPercent: 100, barStyle: 'soft' },
    { name: 'ERP sync — existing solution', value: 'None', barPercent: 100, barStyle: 'gold' },
    { name: 'Media-rich page load risk', value: 'High', barPercent: 80, barStyle: 'soft' },
    { name: 'Launch timeline pressure', value: 'Strict', barPercent: 88, barStyle: 'gold' },
  ],

  approachIntro:
    "We didn't build features. We built experiences — tracing every engineering choice back to a real person who'd feel its effect.",
  approachCards: [
    {
      icon: '✨',
      title: 'Premium Storefront Design',
      description:
        "Developed a luxury-grade storefront on Fynd that matched Coach's global visual identity — ensuring Naledi's first impression matched the in-store experience she'd trust.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🚚',
      title: 'Custom Bobgo Extension',
      description:
        "Built a purpose-made logistics integration for South African fulfilment workflows. Themba's team could manage dispatch and tracking without manual workarounds or data mismatches.",
      badge: 'Resilience',
    },
    {
      icon: '🔄',
      title: 'ERP Synchronisation',
      description:
        'Designed and implemented real-time inventory sync between Fynd and the ERP system — eliminating the oversell risk that caused frontline ops stress.',
      badge: 'Resilience',
    },
    {
      icon: '⚡',
      title: 'Frontend Performance Optimisation',
      description:
        "Aggressively compressed and lazy-loaded media assets. Aisha's media-rich pages load fast even on variable SA connectivity — so the catalogue always looks the part.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🔬',
      title: 'Rigorous QA & Launch Validation',
      description:
        'Multi-stage QA across devices, networks, and payment flows. No shopper experiences a broken checkout at the moment they decide to trust a new brand.',
      badge: 'Societal Value',
    },
    {
      icon: '📐',
      title: 'Scalable Commerce Infrastructure',
      description:
        'Architected for growth — not just launch day. The foundation supports catalogue expansion, regional promotions, and future integrations without a rebuild.',
      badge: 'Sustainability',
    },
  ],

  resultCards: [
    {
      number: '✓',
      label: 'On-time, on-brand South Africa digital debut',
      humanNote: 'No delays. No brand compromises. First impressions nailed.',
    },
    {
      number: '0',
      label: 'Checkout or fulfilment failures at launch',
      humanNote: "Themba's team handled every order without a single escalation",
    },
    {
      number: '↑↑',
      label: 'Navigation fluidity & browsing experience scores',
      humanNote: 'Shoppers like Naledi browsed with confidence, not confusion',
    },
    {
      number: '∞',
      label: 'Scalable infrastructure ready for catalogue growth',
      humanNote: 'Aisha can add products and run campaigns without dev support',
    },
  ],

  humanImpactCards: [
    {
      icon: '🛒',
      title: 'Shopper Confidence',
      description:
        "South African customers experienced a storefront that matched the quality promise of the Coach brand — building trust in a market where luxury digital retail is still earning its reputation.",
    },
    {
      icon: '📦',
      title: 'Ops Team Relief',
      description:
        'With real-time ERP sync and Bobgo integration, the fulfilment team moved from reactive firefighting to confident execution. Fewer errors, fewer escalations, less stress.',
    },
    {
      icon: '🎨',
      title: 'Merchandiser Autonomy',
      description:
        "Aisha's team can now manage the catalogue, update content, and run campaigns independently — without raising developer tickets for everyday tasks.",
    },
    {
      icon: '🌍',
      title: 'Market Belonging',
      description:
        "For South African shoppers, Coach's arrival wasn't just a new website — it was recognition. A global brand saying: this market matters, and your experience matters too.",
    },
  ],

  ctaBadge: "Let's build your next debut together",
  ctaHeadline: 'Great commerce starts with<br />understanding people.',
  ctaSubline:
    'We build digital experiences that work for everyone in the room — shoppers, operators, and your team.',
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default coachSouthAfrica
