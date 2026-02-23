import { CaseStudy } from '@/types/case-study'

const secretAlchemist: CaseStudy = {
  slug: 'secret-alchemist',
  isPublished: true,
  client: 'Secret Alchemist',
  industry: 'Clean Beauty / Fragrance',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'UX Revamp',
  pm: 'Yash Patel',
  accent: '#6b4c8a',
  accentSoft: 'rgba(107,76,138,0.08)',
  accentLight: '#8a6aad',

  eyebrow: 'Customer Experience · UX Revamp · Brand Storytelling · 2025',
  headline: "Telling the Clean Beauty Story: Homepage & About Us Revamp for <em>Secret Alchemist</em>",
  subheadline:
    "First impressions are everything. We rebuilt the ones that matter most.",
  heroMeta: [
    { label: 'Client', value: 'Secret Alchemist' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "Secret Alchemist is India's first clean perfume brand, co-founded by Samantha Ruth Prabhu, creating fragrances with rare Indian botanicals that are free from harmful toxins and phthalates. As a pioneering brand in a category that conscious beauty consumers are actively seeking, the homepage and About Us page needed to communicate the brand's unique positioning with clarity and emotional resonance.",
    "We redesigned the homepage and About Us page with compelling visual hierarchy, authentic brand storytelling, and strategic content architecture — elevating the first-impression experience, communicating the clean beauty mission, and guiding conscious consumers from discovery to product exploration with stronger emotional connection.",
  ],
  brandTags: ["Clean Beauty", "Fragrance", "Brand Storytelling", "Shopify", "Homepage Design", "UX", "India"],
  brandStats: [
    { name: 'Platform', value: 'Shopify' },
    { name: 'Pages', value: 'Homepage + About Us — Full Redesign' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Brand Trust, Storytelling & Conscious Beauty Positioning' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people needed the homepage to do more work — a customer who needed to understand why clean perfume mattered, a content lead whose brand story wasn't landing, and a brand director whose India-first clean perfume story deserved a digital home worthy of it.",
  personas: [
    {
      avatar: '🌿',
      name: 'Anika',
      age: 29,
      role: 'Conscious beauty consumer · first visit to Secret Alchemist',
      quote:
        "I found Secret Alchemist through Instagram and clicked through to the site. I knew it was co-founded by Samantha and that it was 'clean' — but I didn't really understand what that meant for this brand specifically. The homepage didn't answer that immediately. I had to dig.",
      painTag: '❓ First-time visitors not understanding clean perfume positioning from homepage',
    },
    {
      avatar: '✍️',
      name: 'Meera',
      age: 27,
      role: 'Content and Brand Lead · Secret Alchemist',
      quote:
        "The brand story is exceptional — Indian botanicals, toxin-free formulations, conscious luxury. But the About Us page wasn't telling it. It felt generic rather than distinctive. The story that made us different wasn't the first thing you read.",
      painTag: '📖 About Us page not communicating brand authenticity or clean beauty differentiation',
    },
    {
      avatar: '🧪',
      name: 'Vikram',
      age: 38,
      role: 'CEO · Secret Alchemist',
      quote:
        "We're India's first clean perfume brand. That's a significant positioning statement — and the homepage should make it impossible to miss. The visual design needs to feel premium but approachable, the copy needs to be compelling, and the brand values need to be front and center.",
      painTag: '🏆 India-first clean perfume positioning not prominent enough in homepage design',
    },
  ],

  challengeParagraphs: [
    "Secret Alchemist's brand premise — India's first clean perfume, made with rare Indian botanicals, free from toxins — was a powerful differentiation in the conscious beauty space. But the homepage wasn't leading with it. Anika arrived from an Instagram click with high intent and low context, and the homepage didn't quickly answer the question that conscious beauty consumers needed answered: what makes this different, and why does it matter for me?",
    "Meera's About Us page challenge was a storytelling problem. The brand's founding story — the connection between Indian botanical heritage, Samantha's advocacy for clean beauty, and the formulation science behind toxin-free fragrance — was authentically compelling. But the page was presenting it in a way that diluted its distinctiveness. Vikram needed a digital presence that converted brand belief into brand trust at the first impression.",
  ],
  challengeTension:
    "A pioneering clean beauty brand with an exceptional story — told in a way that didn't capture the pioneering quality of what made it exceptional.",
  challengeMetrics: [
    { name: 'Homepage clean beauty positioning clarity', value: 'Unclear — requires visitor effort to understand', barPercent: 88, barStyle: 'gold' },
    { name: 'Brand story impact on About Us page', value: 'Diluted — generic rather than distinctive', barPercent: 85, barStyle: 'gold' },
    { name: 'Visual premium perception on homepage', value: 'Inconsistent — below brand potential', barPercent: 82, barStyle: 'gold' },
    { name: 'Emotional connection with conscious beauty audience', value: 'Weak — story not resonating clearly', barPercent: 80, barStyle: 'gold' },
    { name: 'Customer journey from discovery to product exploration', value: 'Interrupted — content hierarchy not guiding effectively', barPercent: 78, barStyle: 'soft' },
  ],

  approachIntro:
    "We rebuilt the homepage and About Us to give Anika an instant answer, give Meera's brand story the design it deserved, and give Vikram a digital home that matched Secret Alchemist's pioneering status.",
  approachCards: [
    {
      icon: '🏠',
      title: 'Homepage Visual Hierarchy Redesign',
      description:
        "Redesigned the homepage with a compelling visual hierarchy that leads with the clean perfume positioning — Anika understands what Secret Alchemist is and why it matters within the first scroll, before she's read a full sentence.",
      badge: 'Human-Centricity',
    },
    {
      icon: '✨',
      title: 'Clean Collections Showcase',
      description:
        "Built engaging homepage sections that showcase the fragrance collections through curated imagery, clear CTAs, and the Indian botanical heritage framing that makes each collection distinctive — discovery feels intentional, not random.",
      badge: 'Human-Centricity',
    },
    {
      icon: '📖',
      title: 'Authentic About Us Brand Story',
      description:
        "Crafted and designed the About Us page around the brand's authentic founding narrative — Samantha's clean beauty advocacy, the Indian botanical science, and the toxin-free formulation commitment presented as a cohesive story rather than a list of claims.",
      badge: 'Sustainability',
    },
    {
      icon: '🏗️',
      title: 'Strategic Content Architecture',
      description:
        "Implemented information hierarchy that guides conscious consumers from brand discovery through product understanding to purchase intent — the content flow mirrors the conscious buyer's decision journey.",
      badge: 'Sustainability',
    },
    {
      icon: '🎨',
      title: 'Premium Visual Identity Application',
      description:
        "Enhanced visual storytelling through curated imagery, refined typography, and consistent design language — creating the premium clean beauty perception that Vikram's brand positioning required.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🌿',
      title: 'Indian Botanical Heritage Framing',
      description:
        "Wove the Indian botanical heritage narrative throughout both pages — making the use of rare indigenous botanicals a visible brand pillar rather than a footnote, differentiating Secret Alchemist from global fragrance brands.",
      badge: 'Sustainability',
    },
  ],

  resultCards: [
    {
      number: '↑↑',
      label: 'Improved engagement metrics — longer session durations and reduced bounce rates',
      humanNote: "Anika understands the brand in her first scroll — and stays to explore",
    },
    {
      number: '↑',
      label: "Enhanced brand perception — elevated credibility as India's clean perfume leader",
      humanNote: "Vikram's pioneering positioning is unmissable on the homepage",
    },
    {
      number: '✓',
      label: 'Clearer customer journey — strategic hierarchy guides discovery to product exploration',
      humanNote: 'Conscious consumers find their way from brand story to product in fewer steps',
    },
    {
      number: '↑↑',
      label: 'Stronger emotional connection — brand narrative resonates with conscious beauty audience',
      humanNote: "Meera's brand story lands — the About Us page earns the brand trust it deserved",
    },
  ],

  humanImpactCards: [
    {
      icon: '🌿',
      title: 'First Impression That Answers',
      description:
        "Anika arrives from Instagram and immediately understands what makes Secret Alchemist different — India's first clean perfume, rare Indian botanicals, toxin-free formulations — all communicated in the first scroll through visual hierarchy, not paragraph reading.",
    },
    {
      icon: '✍️',
      title: 'Brand Story That Lands',
      description:
        "Meera's brand narrative — the founding vision, the botanical science, the clean beauty commitment — is presented on the About Us page with design quality that matches the story's significance. It reads like a brand credo, not a company description.",
    },
    {
      icon: '🧪',
      title: 'Pioneering Status Made Visible',
      description:
        "Vikram's India-first positioning is front and center across the homepage experience — it's not something visitors discover if they look carefully; it's the frame through which the entire brand is introduced.",
    },
    {
      icon: '📈',
      title: 'Trust That Converts',
      description:
        "Conscious beauty consumers who understand and connect with a brand are significantly more likely to purchase. The homepage and About Us redesign converts brand belief into brand trust — and trust into the first purchase.",
    },
  ],

  ctaBadge: "Let's tell your brand story better",
  ctaHeadline: "Your brand story should be<br />impossible to miss.",
  ctaSubline:
    "Homepage and About Us redesigns for conscious beauty and lifestyle brands — visual hierarchy, authentic storytelling, and content architecture that converts first impressions into brand trust.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default secretAlchemist
