import { CaseStudy } from '@/types/case-study'

const foxtaleAnalytics: CaseStudy = {
  slug: 'foxtale-analytics',
  isPublished: true,
  client: 'Foxtale',
  industry: 'Skincare / D2C',
  region: 'India',
  pillar: 'Marketing Automation',
  year: 2024,
  type: 'Real-Time Analytics',
  pm: 'Prerna Jain',
  accent: '#1a5c3a',
  accentSoft: 'rgba(26,92,58,0.08)',
  accentLight: '#268050',

  eyebrow: 'Marketing Automation · Analytics · Mixpanel · 2024',
  headline: "Data-Driven Beauty: Powering <em>Foxtale</em>'s Growth with Real-Time Analytics",
  subheadline:
    "Real-time data that tells you what's working before the day is over.",
  heroMeta: [
    { label: 'Client', value: 'Foxtale' },
    { label: 'Impact Pillar', value: 'Marketing Automation' },
  ],

  brandHeadline: "Series C skincare brand.<br />Data-blind no longer.",
  brandIntro: [
    "Foxtale is a Series C-funded Indian skincare brand scaling rapidly across D2C channels. Their marketing and product teams were making decisions based on incomplete data — unable to track detailed customer journeys, identify specific funnel drop-off points, or measure campaign effectiveness with the granularity that a fast-scaling brand requires.",
    // TODO: Verify metrics — 35% conversion rate improvement
    "We deployed Mixpanel with comprehensive custom event tracking across all critical touchpoints — add-to-cart, checkout initiation, purchase completion, and engagement actions — building real-time funnel analytics and role-specific dashboards that reduced decision-making time from days to minutes and delivered a 35% improvement in conversion rates.",
  ],
  brandTags: ['Skincare', 'Mixpanel', 'Real-Time Analytics', 'Funnel Optimization', 'Attribution', 'D2C India', 'Marketing Automation'],
  brandStats: [
    { name: 'Analytics Platform', value: 'Mixpanel — Custom Event Tracking' },
    { name: 'Conversion Improvement', value: '35% uplift in site conversion rates' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Funnel Visibility, Decision Speed & Marketing ROI' },
    { name: 'Year', value: '2024' },
  ],

  peopleHeadline: "Built for the product manager guessing at checkout drop-off, the marketer misallocating spend, and the VP watching reports arrive 3 days too late.",
  peopleIntro:
    "Three people were making consequential decisions on incomplete information — a product manager who couldn't find the checkout drop-off, a marketer allocating budget without attribution, and a growth lead waiting days for reports.",
  personas: [
    {
      avatar: '✨',
      name: 'Anika',
      age: 26,
      role: 'Product Manager · Foxtale',
      quote:
        "Product managers could see that checkout had a drop-off problem in aggregate but had no way to identify which specific step — shipping, payment, or order review — was causing abandonment. Without step-level data, every attempted fix was based on a guess rather than evidence.",
      painTag: '🔍 Checkout drop-off visible but location and cause impossible to pinpoint',
    },
    {
      avatar: '📊',
      name: 'Varun',
      age: 30,
      role: 'Performance Marketer · Foxtale',
      quote:
        "Performance marketers allocated budget across channels using last-click attribution, which systematically undercredited upper-funnel channels like Instagram. Assisted conversion patterns were suspected but impossible to prove without multi-touch data, leaving budget decisions structurally flawed.",
      painTag: '📉 Last-click attribution masking true channel contribution and misallocating budget',
    },
    {
      avatar: '🌿',
      name: 'Siddharth',
      age: 35,
      role: 'VP Growth · Foxtale',
      quote:
        "Growth leads waited two to three days for performance reports to be consolidated from multiple tools. By the time campaign clarity arrived, the optimization window had closed — decisions that should have been made same-day were being made after the fact.",
      painTag: '⏳ Performance reports taking 2-3 days — optimization decisions made too late',
    },
  ],

  challengeHeadline: "Foxtale's marketing team was making budget decisions with last-click data in a multi-touch world.",
  challengeParagraphs: [
    "Foxtale's analytics gap was a strategic constraint. Anika knew there was a checkout drop-off but couldn't identify where in the funnel users abandoned — shipping step, payment method selection, or order review. Each hypothesis required a separate analysis cycle, and the standard analytics tools didn't have the event granularity to answer the question definitively. The product team was iterating on hunches.",
    "Varun's attribution problem was equally consequential. Last-click attribution was crediting Google Search for conversions that were genuinely driven by Instagram awareness campaigns — causing budget misallocation across channels. Siddharth's reporting lag made both problems worse: by the time data surfaced, campaign windows had passed and optimization opportunities were gone. Foxtale needed analytics infrastructure that matched the pace and sophistication of their marketing operation.",
  ],
  challengeTension:
    "A fast-scaling skincare brand making marketing and product decisions in near-darkness — while spending significantly on campaigns whose true performance was invisible.",
  challengeMetrics: [
    { name: 'Checkout funnel drop-off visibility', value: 'Aggregate only — step-level unknown', barPercent: 90, barStyle: 'gold' },
    { name: 'Campaign attribution accuracy', value: 'Last-click only — true contribution invisible', barPercent: 88, barStyle: 'gold' },
    { name: 'Performance report generation time', value: '2-3 days — optimization window missed', barPercent: 85, barStyle: 'gold' },
    { name: 'User journey visibility across touchpoints', value: 'Fragmented — no unified customer view', barPercent: 82, barStyle: 'gold' },
    { name: 'A/B test decision speed', value: 'Slow — insufficient real-time data to conclude', barPercent: 78, barStyle: 'soft' },
  ],

  approachHeadline: "Mixpanel with custom event tracking, step-level funnel analytics, multi-touch attribution, and role-specific real-time dashboards.",
  approachIntro:
    "The analytics stack was built to give Anika the step-level funnel answer, give Varun the attribution truth, and give Siddharth real-time performance visibility.",
  approachCards: [
    {
      icon: '📊',
      title: 'Comprehensive Custom Event Tracking',
      description:
        "Implemented Mixpanel with custom event tracking across all critical touchpoints — product views, add-to-cart, checkout initiation, each checkout step, purchase completion, and post-purchase engagement actions.",
      badge: 'Sustainability',
    },
    {
      icon: '🔍',
      title: 'Real-Time Funnel Analytics',
      description:
        "Built conversion funnels and user journey maps providing instant visibility into exactly where Anika's drop-off was happening — step-level data enabling targeted fixes rather than broad guesses.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🎯',
      title: 'Multi-Touch Attribution Modeling',
      description:
        "Implemented attribution tracking beyond last-click — enabling Varun to see assisted conversions, channel interaction patterns, and the true contribution of Instagram to Google-converting sessions.",
      badge: 'Sustainability',
    },
    {
      icon: '📈',
      title: 'Role-Specific Real-Time Dashboards',
      description:
        "Designed dashboards for marketing, product, and leadership teams delivering actionable insights tailored to each role's decisions — Siddharth's growth dashboard updates in real time rather than in two-day report cycles.",
      badge: 'Resilience',
    },
    {
      icon: '🧪',
      title: 'A/B Test Infrastructure',
      description:
        "Built event tracking architecture that enables rapid A/B test conclusion — sufficient event granularity to reach statistical significance faster and with higher confidence than aggregate analytics allowed.",
      badge: 'Resilience',
    },
    {
      icon: '👥',
      title: 'Cohort and Segment Analysis',
      description:
        "Implemented cohort tracking enabling analysis of customer behavior by acquisition channel, product category, campaign, and repeat purchase patterns — the segmentation Varun needed to optimize spend by audience.",
      badge: 'Sustainability',
    },
  ],

  resultsHeadline: "35% conversion improvement, 50% faster decisions, 25% better marketing ROI through attribution accuracy.",
  resultCards: [
    {
      number: '35%',
      label: 'Improvement in conversion rates — checkout drop-off points identified and fixed',
      humanNote: "Anika found the exact step where users abandoned — and fixed it the same week",
    },
    {
      number: '50%',
      label: 'Faster decision-making — from days to minutes for performance insights',
      humanNote: "Siddharth optimizes campaigns in real time rather than reviewing last week",
    },
    {
      number: '25%',
      label: 'Better marketing ROI through accurate attribution and budget reallocation',
      humanNote: "Varun's Instagram spend recognized for the conversions it was actually driving",
    },
    {
      number: '↑↑',
      label: 'Product team velocity — hypotheses tested and concluded in days, not weeks',
      humanNote: 'Data granularity turns A/B testing from a month-long process to a week-long one',
    },
  ],

  humanImpactCards: [
    {
      icon: '✨',
      title: 'Funnel Clarity',
      description:
        "Anika pinpoints the exact checkout step where users were abandoning — the shipping cost display was triggering the drop-off. The fix took one day. The conversion improvement was visible the following week. Data granularity makes product decisions precise.",
    },
    {
      icon: '📊',
      title: 'Attribution Truth',
      description:
        "Varun discovers that Instagram awareness campaigns are contributing to 40% of Google Search conversions through assisted attribution. Budget reallocates to the channels that are actually driving growth — not just the ones that claimed the last click.",
    },
    {
      icon: '🌿',
      title: 'Real-Time Strategic Clarity',
      description:
        "Siddharth's dashboard shows campaign performance updated in real time. A flash sale underperforming at 11 AM can be adjusted by noon rather than reviewed in a report three days later. Decision speed becomes a competitive advantage.",
    },
    {
      icon: '📈',
      title: 'Analytics as Infrastructure',
      description:
        "The Mixpanel deployment becomes a compounding asset — every new campaign, product, and feature ships with tracking built in. Foxtale's analytical capability grows with the brand rather than requiring a new implementation for each initiative.",
    },
  ],

  ctaBadge: "Let's build your analytics foundation",
  ctaHeadline: "Real-time data that answers<br />before you ask the question.",
  ctaSubline:
    "Mixpanel analytics implementation for D2C brands — custom event tracking, funnel visualization, multi-touch attribution, and role-specific dashboards that make decisions faster.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default foxtaleAnalytics
