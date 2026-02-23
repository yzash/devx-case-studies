import { CaseStudy } from '@/types/case-study'

const foxtaleAr: CaseStudy = {
  slug: 'foxtale-ar',
  isPublished: true,
  client: 'Foxtale',
  industry: 'Skincare / D2C',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'AR Feature',
  pm: 'Prerna Jain',
  accent: '#e07b54',
  accentSoft: 'rgba(224,123,84,0.08)',
  accentLight: '#e89674',

  eyebrow: 'Customer Experience · Product Innovation · AR · 2025',
  headline: "Know Your Skin: AR-Powered Analysis Driving 40% Conversion Uplift for <em>Foxtale</em>",
  subheadline:
    'When the try-before-you-buy moment happens on your phone camera.',
  heroMeta: [
    { label: 'Client', value: 'Foxtale' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "Foxtale is a Series C-funded Indian skincare brand that built its reputation on science-backed products for Indian skin types. To deepen personalization and help customers find their perfect products through AI-powered skin analysis, the brand integrated AR technology and a quiz-based skin assessment into their mobile app.",
    "We integrated Fynd's Glam AR technology for AI-powered skin analysis and built a personalized quiz that delivered tailored skincare recommendations. After data-driven optimization of the initial low-completion quiz, we achieved a 333% improvement in completion rates, a 40% increase in conversion for users who completed the quiz, and a 25% higher average order value through personalized bundle recommendations.",
  ],
  brandTags: ['Skincare', 'AR', 'Glam AR', 'Fynd', 'Personalization', 'Mobile App', 'India'],
  brandStats: [
    { name: 'Technology', value: "Fynd's Glam AR + Custom Personalization Quiz" },
    { name: 'Launch Speed', value: '15 Days from Concept to Production' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Quiz Completion, Conversion Rate & AOV through Personalization' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people needed the AR skin analysis to solve a real problem — a customer who didn't know which serum to choose, a product manager whose quiz wasn't completing, and a growth lead who needed AR to prove its commercial value.",
  personas: [
    {
      avatar: '✨',
      name: 'Tara',
      age: 24,
      role: 'Foxtale customer · overwhelmed by skincare choices',
      quote:
        "Foxtale has so many serums and I genuinely don't know which one is right for my skin. I have combination skin with hyperpigmentation, so sometimes I pick the wrong one. When I saw the skin analysis feature on the app, I tried it immediately. It told me exactly what my skin needed.",
      painTag: '🧴 Customers overwhelmed by product options unable to identify their right skincare routine',
    },
    {
      avatar: '💻',
      name: 'Divya',
      age: 28,
      role: 'Product Manager · Foxtale Mobile',
      quote:
        "Our first quiz had only 12-15% completion. Users were dropping off midway. We knew it worked — users who completed it converted at a much higher rate — but the experience wasn't compelling enough to get them to finish. We needed to understand exactly where they were leaving and why.",
      painTag: '📉 12-15% quiz completion rate — most users abandoning before personalized recommendations',
    },
    {
      avatar: '📊',
      name: 'Karan',
      age: 33,
      role: 'Head of Growth · Foxtale',
      quote:
        "The AR skin analysis was a bet — a significant development investment to prove that personalization drove measurably better commercial outcomes. I needed the feature to show AOV and conversion uplift that justified the build. If it didn't move the metrics, it was a fun feature, not a business feature.",
      painTag: '🎯 AR feature needing measurable commercial ROI to justify the development investment',
    },
  ],

  challengeParagraphs: [
    "Foxtale's initial personalized quiz had the right premise — help customers understand their skin concerns and recommend the right products — but the execution wasn't completing. With 12-15% quiz completion, Divya's team was seeing strong conversion signals from completers but couldn't fix the experience without understanding exactly where users were leaving. The data showed the potential; the UX wasn't delivering it.",
    "Karan's ROI question was legitimate. AR technology is a meaningful investment, and the integration of Fynd's Glam AR into the existing app architecture required a tight 15-day delivery window. If the AR skin analysis improved quiz completion and drove conversion and AOV uplift, it would prove its value. If it was a novelty that users tried once and abandoned, it would be an expensive experiment. The optimization needed to be rigorous and the measurement clear.",
  ],
  challengeTension:
    "A personalization feature with proven commercial potential — and a completion rate low enough to hide that potential from most users.",
  challengeMetrics: [
    { name: 'Initial quiz completion rate', value: '12-15% — most users abandoning mid-quiz', barPercent: 90, barStyle: 'gold' },
    { name: 'AR integration complexity', value: '15-day delivery window for Glam AR integration', barPercent: 85, barStyle: 'gold' },
    { name: 'Conversion uplift from personalization', value: 'Unclear — visible in completers, hidden by low completion', barPercent: 82, barStyle: 'gold' },
    { name: 'Drop-off point visibility', value: 'Unknown — no question-level analytics', barPercent: 88, barStyle: 'gold' },
    { name: 'AOV impact of personalized recommendations', value: 'Unmeasured — hypothesis only', barPercent: 78, barStyle: 'soft' },
  ],

  approachIntro:
    "We gave Tara an instant skin analysis she trusted, gave Divya the drop-off data she needed to optimize, and gave Karan the commercial proof that AR was a business feature, not a novelty.",
  approachCards: [
    {
      icon: '📷',
      title: 'Glam AR Skin Analysis Integration',
      description:
        "Integrated Fynd's Glam AR technology enabling AI-powered skin analysis from the phone camera — detecting skin concerns, tone, hydration level, and specific conditions that inform personalized product recommendations.",
      badge: 'Human-Centricity',
    },
    {
      icon: '⚡',
      title: '15-Day Launch Delivery',
      description:
        "Delivered the complete AR skin analysis and personalized quiz feature from concept to production in 15 days — maintaining momentum and user excitement around the feature without a drawn-out development cycle.",
      badge: 'Resilience',
    },
    {
      icon: '🔍',
      title: 'Data-Driven Quiz Optimization',
      description:
        "Systematically analyzed user drop-off points using question-level analytics — identified the specific quiz moments causing abandonment, streamlined question flow, improved UX/UI for those steps, and tested iteratively until completion rates reached 50%.",
      badge: 'Sustainability',
    },
    {
      icon: '🎯',
      title: 'Personalized Product Recommendation Engine',
      description:
        "Built recommendation logic connecting AR skin analysis results and quiz answers to specific Foxtale products and bundles — Tara's hyperpigmentation concern surfaces the right serum with supporting products for a complete routine.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🛒',
      title: 'Bundle-Based Recommendation Checkout',
      description:
        "Designed the recommendation presentation to surface product bundles — complete routines rather than individual items — driving the 25% AOV improvement through the natural logic of a comprehensive skincare regimen.",
      badge: 'Sustainability',
    },
    {
      icon: '📊',
      title: 'Conversion Tracking by Quiz Completion',
      description:
        "Implemented analytics segmenting conversion rates and AOV by quiz completion status — giving Karan the before/after evidence that AR skin analysis and personalized quiz completion drove measurably better commercial outcomes.",
      badge: 'Resilience',
    },
  ],

  resultCards: [
    {
      number: '333%',
      label: 'Quiz completion improvement — from 12-15% to approximately 50% through UX optimization',
      humanNote: "Divya's optimization turned a low-completion feature into the app's most engaging experience",
    },
    {
      number: '40%',
      label: 'Increase in conversion rate for users who completed AR skin analysis and quiz',
      humanNote: "Tara buys with confidence — she knows the serum was recommended for her specific skin",
    },
    {
      number: '25%',
      label: 'Higher average order value through personalized routine recommendations',
      humanNote: 'Personalized bundles replace single-product guesses — customers buy the routine',
    },
    {
      number: '15 days',
      label: 'Concept to production for complete AR feature integration and quiz delivery',
      humanNote: "Karan's investment was live and generating data before the sprint ended",
    },
  ],

  humanImpactCards: [
    {
      icon: '✨',
      title: 'Skincare Personalized to Your Camera',
      description:
        "Tara points her phone camera and gets an instant analysis of her skin concerns — hyperpigmentation confirmed, recommended routine displayed, complete bundle ready to add to cart. The personalization isn't a quiz result; it's a clinical-feeling assessment that builds purchase confidence.",
    },
    {
      icon: '💻',
      title: 'Optimization That Compounded',
      description:
        "Divya's iterative optimization turned a 12-15% completion rate into 50% — each drop-off analysis revealing a specific UX friction that a targeted fix resolved. Question-level analytics transformed a feature with potential into a feature that delivered on it.",
    },
    {
      icon: '📊',
      title: 'AR as a Business Feature',
      description:
        "Karan's AR investment is validated with commercial data: 40% higher conversion, 25% higher AOV, and a 333% improvement in the completion rate that activates both. The feature drives more revenue per user than any other in the app.",
    },
    {
      icon: '📈',
      title: 'Personalization Moat',
      description:
        "The AR skin analysis creates a competitive advantage that generic skincare browsing cannot replicate — a customer who has been analyzed and recommended a specific Foxtale routine is significantly less likely to switch to a competitor's generic recommendation.",
    },
  ],

  ctaBadge: "Let's build your AR personalization feature",
  ctaHeadline: "AR that converts — not just impresses.",
  ctaSubline:
    "AI-powered skin analysis and personalized recommendation quizzes for skincare and beauty brands — built to drive completion, conversion, and AOV, not just engagement.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default foxtaleAr
