import { CaseStudy } from '@/types/case-study'

const superdry: CaseStudy = {
  slug: 'superdry',
  isPublished: true,
  client: 'Superdry India',
  industry: 'Lifestyle Fashion',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'Storefront Development / UX Optimisation',
  pm: 'Anshu Singh',
  accent: '#c03a2b',
  accentSoft: 'rgba(192,58,43,0.08)',
  accentLight: '#e06b5e',

  eyebrow: 'Storefront Development · UX Optimisation · 2025',
  headline: 'Superdry India: <em>Faster, Smoother, Smarter</em> — a storefront built for how people actually browse',
  subheadline:
    'Speed was the brief. Experience was the outcome. Redesigning the Superdry India storefront to perform as boldly as the brand it represents.',
  heroMeta: [
    { label: 'Client', value: 'Superdry India' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandHeadline: "Superdry India on Fynd —<br />a storefront as sharp as the brand it represents.",
  brandIntro: [
    "Superdry is an internationally recognised lifestyle brand known for its bold aesthetic and quality craftsmanship. In India, the brand commands a loyal following — but its digital storefront wasn't keeping pace with the energy its customers brought to it.",
    "The India storefront needed to be rebuilt to match the brand's ambition: fast, polished, consistent across every device, and smooth enough that nothing gets in the way of a great browse.",
  ],
  brandTags: ['Lifestyle Fashion', 'Fynd Platform', 'India', 'Storefront Development', 'UX Optimisation'],
  brandStats: [
    { name: 'Platform', value: 'Fynd' },
    { name: 'Scope', value: 'UI Dev · Performance · UX · Mobile' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Speed · Navigation · Responsiveness' },
    { name: 'Year', value: '2025' },
  ],

  peopleHeadline: "Built for the style-led shopper who expects premium digital presentation, the eCommerce manager running a phased rollout, and the brand team watching for UX regressions.",
  peopleIntro:
    "Three people interact with this storefront every day. We built every improvement around how it would land for them.",
  personas: [
    {
      avatar: '📱',
      name: 'Arjun',
      age: 24,
      role: 'Mobile-first shopper · Mumbai',
      quote:
        'Mobile-first shoppers browsing between commitments had no tolerance for slow or stuttering page loads — any delay meant the session was abandoned, with no expectation of returning to complete the browse.',
      painTag: '⚡ Mobile speed & smoothness',
    },
    {
      avatar: '👟',
      name: 'Riya',
      age: 29,
      role: 'Regular Superdry customer · Bangalore',
      quote:
        'Regular customers who were loyal to the brand noticed that different sections of the storefront felt like they had been built in isolation — inconsistent layouts and interaction patterns across pages undermined the sense of a single, cohesive brand experience.',
      painTag: '🎨 UX inconsistency',
    },
    {
      avatar: '🖥️',
      name: 'Karan',
      age: 34,
      role: 'Digital Manager · Superdry India team',
      quote:
        'Digital managers overseeing live storefront improvements faced the persistent risk that performance enhancements would introduce regressions — every change carried the potential to break something on a customer-facing site with no safe window to take it offline.',
      painTag: '🛡️ Stability during change',
    },
  ],

  challengeHeadline: "Superdry India's Fynd storefront needed to perform at a premium retail standard from day one of launch.",
  challengeParagraphs: [
    "The Superdry India storefront had the brand equity — but the frontend experience wasn't living up to it. Slower page loads, uneven UX across templates, and navigation friction were eroding the confidence of shoppers who expected more from a brand they trusted.",
    "The challenge was to rebuild the experience without rebuilding everything at once. Improvements needed to be phased carefully to maintain live stability, while delivering meaningful gains in speed, responsiveness, and visual consistency at every step.",
  ],
  challengeTension:
    "The tension wasn't lack of ambition — it was delivering real improvements on a live, customer-facing storefront without a single regression.",
  challengeMetrics: [
    { name: 'Page load speed', value: 'Below target', barPercent: 80, barStyle: 'gold' },
    { name: 'UX consistency across templates', value: 'Inconsistent', barPercent: 75, barStyle: 'soft' },
    { name: 'Mobile responsiveness gaps', value: 'Present', barPercent: 70, barStyle: 'gold' },
    { name: 'Navigation & scroll smoothness', value: 'Needs work', barPercent: 65, barStyle: 'soft' },
    { name: 'Stability risk during enhancements', value: 'Moderate', barPercent: 72, barStyle: 'gold' },
  ],

  approachHeadline: "Fynd storefront development with responsive UI, optimized asset loading, navigation refinement, and zero-regression phased rollout.",
  approachIntro:
    "Every improvement was purposeful. We traced each engineering decision back to a shopper who'd feel its effect.",
  approachCards: [
    {
      icon: '🎨',
      title: 'Responsive Storefront UI',
      description:
        "Built a responsive storefront UI on Fynd that unified the visual language across templates — so Riya's experience feels consistent whether she's on a category page, PDP, or campaign landing.",
      badge: 'Human-Centricity',
    },
    {
      icon: '⚡',
      title: 'Asset & Loading Optimisation',
      description:
        "Optimised image assets, loading sequences, and critical rendering paths — cutting the delay Arjun used to hit between tapping and seeing. Speed that feels instant on mobile.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🖱️',
      title: 'Navigation & Interaction Refinement',
      description:
        'Refined navigation flows and micro-interactions across the storefront — smoother transitions, cleaner menus, and interactions that respond without hesitation.',
      badge: 'Human-Centricity',
    },
    {
      icon: '📱',
      title: 'Mobile Responsiveness Enhancement',
      description:
        "Addressed layout and responsiveness gaps across breakpoints. Arjun's on-the-go browse now works flawlessly — no overflow, no broken layouts, no frustration.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🔁',
      title: 'Phased Performance Rollout',
      description:
        "Implemented improvements in structured phases, with validation at each stage. Karan's live storefront stayed stable throughout — no regressions, no surprises.",
      badge: 'Resilience',
    },
    {
      icon: '📐',
      title: 'Template Consistency Standardisation',
      description:
        'Standardised frontend components and interaction patterns across all storefront templates — eliminating the patchwork feel that undermined brand trust.',
      badge: 'Sustainability',
    },
  ],

  resultsHeadline: "On-standard launch performance, improved mobile responsiveness, phased rollout completed with zero regressions.",
  resultCards: [
    {
      number: '↑↑',
      label: 'Browsing speed and page responsiveness',
      humanNote: "Arjun opens the app, clicks — and it's already there",
    },
    {
      number: '✓',
      label: 'Consistent UX across all storefront templates',
      humanNote: "Riya's experience now feels like one polished product",
    },
    {
      number: '↑↑',
      label: 'Mobile experience quality and interaction fluidity',
      humanNote: 'Smooth on every screen, every connection, every time',
    },
    {
      number: '0',
      label: 'Live-site regressions during phased rollout',
      humanNote: "Karan's team delivered improvements without a single incident",
    },
  ],

  humanImpactCards: [
    {
      icon: '📱',
      title: 'Mobile Shoppers Retained',
      description:
        "India's mobile-first shoppers now get the fast, fluid experience they expect from a global brand. Arjun stays on-site longer — and browsing turns into buying.",
    },
    {
      icon: '✨',
      title: 'Brand Experience Unified',
      description:
        "Riya's journey through the storefront now feels intentional and consistent. Every page reflects the same quality the Superdry brand promises in its products.",
    },
    {
      icon: '🛡️',
      title: 'Live Stability Maintained',
      description:
        "Karan's team delivered continuous improvement without disrupting the live customer experience. Each phase landed cleanly, with confidence built at every step.",
    },
    {
      icon: '📈',
      title: 'Engagement Foundation Built',
      description:
        'Faster load times, smoother navigation, and a more cohesive experience collectively shift the metrics that matter — time on site, pages per session, and conversion readiness.',
    },
  ],

  ctaBadge: "Let's make your storefront feel as good as your brand",
  ctaHeadline: 'Great products deserve<br />a storefront that keeps up.',
  ctaSubline:
    "Speed, consistency, and mobile-first thinking — we build experiences that match the ambition of the brands we work with.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default superdry
