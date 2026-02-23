import { CaseStudy } from '@/types/case-study'

const avimeeHerbalMarketing: CaseStudy = {
  slug: 'avimee-herbal-marketing',
  isPublished: true,
  client: 'Avimee Herbal',
  industry: 'Ayurvedic Haircare / D2C',
  region: 'India',
  pillar: 'Marketing Automation',
  year: 2026,
  type: 'Integrated Marketing Stack',
  pm: 'Prerna Jain',
  accent: '#1a5c3a',
  accentSoft: 'rgba(26,92,58,0.08)',
  accentLight: '#268050',

  eyebrow: 'Marketing Automation · Analytics Integration · 2026',
  headline: "Connected Commerce: Building <em>Avimee Herbal</em>'s Integrated Marketing & Analytics Stack",
  subheadline:
    'When your marketing data and your commerce data finally speak the same language.',
  heroMeta: [
    { label: 'Client', value: 'Avimee Herbal' },
    { label: 'Impact Pillar', value: 'Marketing Automation' },
  ],

  brandIntro: [
    "Avimee Herbal is a premium Ayurvedic haircare brand combining ancient herbal wisdom with modern science to address scalp and hair concerns. As the brand launched its innovative Scalp Test diagnostic platform, they needed a robust marketing and analytics infrastructure to track user behavior, personalize communications, and optimize the customer journey at scale.",
    "We integrated Mixpanel for real-time behavioral analytics and WebEngage for omnichannel engagement — building a connected marketing stack that unified diagnostic behavior, purchase patterns, and re-engagement workflows. The result: complete funnel visibility, automated personalized outreach based on root cause diagnosis, and a marketing infrastructure that scales engagement without scaling headcount.",
  ],
  brandTags: ['Marketing Automation', 'Mixpanel', 'WebEngage', 'Behavioral Analytics', 'Haircare', 'D2C India', 'Personalization'],
  brandStats: [
    { name: 'Analytics', value: 'Mixpanel — Real-Time Behavioral Analytics' },
    { name: 'Engagement', value: 'WebEngage — Omnichannel Automation' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Funnel Optimization, Automated Engagement & Journey Tracking' },
    { name: 'Year', value: '2026' },
  ],

  peopleIntro:
    "Three people needed the marketing infrastructure to do what their product intelligence had earned the right to — a customer with diagnosed root causes deserving personalized follow-up, a marketer without visibility into what was working, and a growth leader whose re-engagement campaigns were manual.",
  personas: [
    {
      avatar: '💆',
      name: 'Ananya',
      age: 31,
      role: 'Customer · completed Scalp Test but did not purchase',
      quote:
        "I took the Scalp Test and found out I had a stress-induced root cause. But I didn't buy immediately — I wanted to think about it. Three days later I got a WhatsApp message with educational content about stress-related hair loss and a reminder about the recommended regimen. That's what brought me back.",
      painTag: '🔄 High-intent users completing diagnosis but not converting immediately',
    },
    {
      avatar: '📊',
      name: 'Nidhi',
      age: 29,
      role: 'Performance Marketer · Avimee Herbal',
      quote:
        "We had no visibility into where users dropped off in the Scalp Test funnel. Did they stop at question 5? Did they complete but not buy? Did they buy once and never return? Without that data, I was running campaigns on assumptions rather than evidence.",
      painTag: '📉 No funnel visibility — campaigns optimized on assumptions, not behavioral data',
    },
    {
      avatar: '🌿',
      name: 'Karthik',
      age: 38,
      role: 'Head of Growth · Avimee Herbal',
      quote:
        "Re-engaging users who started but didn't complete the Scalp Test required manual list exports, manual segmentation, and manual campaign setup. We could only do it occasionally. We needed automation that ran continuously — triggered by behavior, not by our team's bandwidth.",
      painTag: '⏳ Re-engagement campaigns requiring manual effort — limiting frequency and personalization',
    },
  ],

  challengeParagraphs: [
    "Avimee Herbal's Scalp Test was generating rich behavioral data — every question answered, every root cause identified, every product recommendation viewed — but without analytics infrastructure, that data was invisible. Nidhi had no way to see where users dropped off, which root cause combinations led to purchase, or how campaign attribution was working across channels. The diagnostic platform was sophisticated; the marketing intelligence to operate it was absent.",
    "Karthik's growth team faced a scalability wall. Re-engaging users based on diagnostic results required manual segmentation and campaign creation — a process that could only run occasionally and couldn't adapt to the nuances of each user's specific root cause profile. Ananya's journey — completing the test, not purchasing, and then returning after relevant content — was the ideal outcome. But it happened by chance, not by design. The marketing stack needed to make it happen systematically.",
  ],
  challengeTension:
    "A brand with rich diagnostic data about every customer — and no infrastructure to act on it.",
  challengeMetrics: [
    { name: 'Behavioral analytics visibility', value: 'None — no event tracking infrastructure', barPercent: 92, barStyle: 'gold' },
    { name: 'Re-engagement campaign automation', value: 'Manual — bandwidth-constrained frequency', barPercent: 88, barStyle: 'gold' },
    { name: 'Funnel drop-off identification', value: 'Unknown — no visibility into Scalp Test funnel', barPercent: 85, barStyle: 'gold' },
    { name: 'Marketing attribution accuracy', value: 'Absent — channel contribution invisible', barPercent: 82, barStyle: 'gold' },
    { name: 'Personalization at scale', value: 'Limited — same messaging regardless of root cause', barPercent: 80, barStyle: 'soft' },
  ],

  approachIntro:
    "The marketing stack was built to bring Ananya back based on her diagnosis, give Nidhi the funnel data she needed to optimize, and give Karthik continuous re-engagement that ran without his team.",
  approachCards: [
    {
      icon: '📊',
      title: 'Mixpanel Analytics Deployment',
      description:
        "Deployed Mixpanel with comprehensive event tracking across all Scalp Test touchpoints — question completion, root cause identification, recommendation views, and purchase conversion — giving Nidhi instant funnel visibility.",
      badge: 'Sustainability',
    },
    {
      icon: '📱',
      title: 'WebEngage Omnichannel Engagement',
      description:
        "Integrated WebEngage to enable automated, personalized communications across email, SMS, and push notifications — triggered by specific user behaviors and root cause profiles identified in the Scalp Test.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🎯',
      title: 'Behavior-Triggered Automation Workflows',
      description:
        "Built sophisticated automation workflows triggering tailored content — educational resources about specific root causes, personalized regimen reminders, cart recovery, and re-engagement campaigns — all activated by user behavior, not manual effort.",
      badge: 'Sustainability',
    },
    {
      icon: '🔍',
      title: 'Funnel Drop-Off Analysis',
      description:
        "Implemented real-time funnel tracking enabling Nidhi to identify exactly where users abandoned the Scalp Test — enabling rapid iteration and UI improvements that lifted diagnostic completion rates.",
      badge: 'Resilience',
    },
    {
      icon: '🧬',
      title: 'Root Cause-Segmented Campaigns',
      description:
        "Built campaign segmentation based on diagnosed root causes — users with stress-induced conditions receive different educational content and product recommendations than those with hormonal or nutritional causes.",
      badge: 'Human-Centricity',
    },
    {
      icon: '📈',
      title: 'Multi-Channel Journey Attribution',
      description:
        "Implemented unified tracking across the diagnostic experience, email engagement, and purchase behavior — giving Karthik's team complete view of the customer journey from first Scalp Test visit through conversion and retention.",
      badge: 'Sustainability',
    },
  ],

  resultCards: [
    {
      number: '↑↑',
      label: 'Real-time funnel visibility enabling rapid identification and fixing of Scalp Test drop-offs',
      humanNote: "Nidhi sees exactly where users abandon and iterates within the same week",
    },
    {
      number: '✓',
      label: 'Automated personalized engagement scaled by root cause — no manual campaign effort',
      humanNote: "Ananya receives content matched to her diagnosed condition, not generic messaging",
    },
    {
      number: '∞',
      label: 'Continuous re-engagement running automatically based on behavioral triggers',
      humanNote: "Karthik's re-engagement runs 24/7 without his team lifting a finger",
    },
    {
      number: '360°',
      label: 'Complete customer journey view — from diagnostic behavior to purchase to retention',
      humanNote: 'Every channel contribution visible — budget flows to what actually works',
    },
  ],

  humanImpactCards: [
    {
      icon: '💆',
      title: 'Personalized Follow-Up That Converts',
      description:
        "Ananya receives educational content about stress-induced hair loss — the specific root cause her Scalp Test identified — three days after completing her diagnosis. The relevance makes the re-engagement feel like care rather than marketing. She returns and purchases.",
    },
    {
      icon: '📊',
      title: 'Data-Driven Optimization',
      description:
        "Nidhi has complete funnel visibility for the first time — she can see exactly which questions cause users to drop off, which root cause profiles convert at the highest rate, and which channels drive the most purchase intent. Campaigns are optimized on evidence.",
    },
    {
      icon: '🌿',
      title: 'Automation at Scale',
      description:
        "Karthik's growth campaigns run continuously based on user behavior — no manual list exports, no manual segmentation, no bandwidth constraints. Every Scalp Test user is engaged appropriately across their journey, automatically.",
    },
    {
      icon: '📈',
      title: 'Marketing That Compounds',
      description:
        "The integrated stack becomes more effective with every user — behavioral data refines automation triggers, funnel insights improve the diagnostic experience, and attribution data focuses marketing investment on highest-return channels.",
    },
  ],

  ctaBadge: "Let's build your integrated marketing stack",
  ctaHeadline: 'When your marketing data and commerce data<br />finally speak the same language.',
  ctaSubline:
    "Mixpanel analytics and WebEngage automation integrated with your diagnostic or commerce platform — real-time funnel intelligence and behavior-triggered engagement at scale.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default avimeeHerbalMarketing
