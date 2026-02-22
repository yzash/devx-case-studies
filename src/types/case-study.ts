export type Pillar =
  | 'Customer Experience'
  | 'Enterprise Architecture'
  | 'AI - Ops'
  | 'Marketing Automation'

export type BarStyle = 'gold' | 'soft'

export interface Persona {
  avatar: string       // emoji
  name: string
  age: number
  role: string         // e.g. "Senior Backend Engineer · 4 years"
  quote: string
  painTag: string      // e.g. "⚡ Trust & first impression"
}

export interface BrandStat {
  name: string
  value: string
}

export interface ChallengeMetric {
  name: string
  value: string
  barPercent: number   // 0–100
  barStyle: BarStyle
}

export interface ApproachCard {
  icon: string         // emoji
  title: string
  description: string
  badge: string        // I5.0 principle label
}

export interface JourneyPhase {
  name: string
  timeframe: string
  description: string
  humanBadge: string
}

export interface ResultCard {
  number: string       // can be "↑↑", "0", "60%", "✓", etc.
  label: string
  humanNote: string
}

export interface HumanImpactCard {
  icon: string         // emoji
  title: string
  description: string
}

export interface Testimonial {
  quote: string
  name: string
  title: string
}

export interface CaseStudy {
  slug: string
  isPublished: boolean

  // Meta
  client: string
  industry: string     // e.g. "Luxury Fashion"
  region: string
  pillar: Pillar
  product?: string     // e.g. "retailOS", "cartx"
  year: number
  type: string         // e.g. "eCommerce Launch / Full-Stack Development"
  pm?: string          // internal PM name

  // Brand theming
  accent: string       // hex color, e.g. "#8a6530"
  accentSoft?: string  // rgba version, defaults to accent at 8% opacity
  accentLight?: string // lighter shade for dark sections

  // Hero
  eyebrow: string      // e.g. "eCommerce Launch · Full-Stack Development · 2026"
  headline: string     // HTML allowed (use <em> for italic)
  subheadline: string
  heroMeta: { label: string; value: string }[]

  // Brand section
  brandIntro: string[]                       // array of paragraphs
  brandTags: string[]
  brandStats: BrandStat[]

  // People
  peopleIntro?: string
  personas: Persona[]

  // Challenge
  challengeParagraphs: string[]
  challengeTension: string
  challengeMetrics: ChallengeMetric[]

  // Approach
  approachIntro?: string
  approachCards: ApproachCard[]

  // Journey (optional)
  journey?: JourneyPhase[]

  // Results
  resultCards: ResultCard[]

  // Human Impact
  humanImpactCards: HumanImpactCard[]

  // Testimonial (optional)
  testimonial?: Testimonial

  // CTA
  ctaBadge?: string
  ctaHeadline: string
  ctaSubline: string
  ctaPrimary: string
  ctaSecondary: string
}

// Lightweight type used in the listing page
export interface CaseStudyMeta {
  slug: string
  isPublished: boolean
  client: string
  pillar: Pillar
  product?: string
  year: number
  type: string
  accent: string
  headline: string
  subheadline: string
  pm?: string
}
