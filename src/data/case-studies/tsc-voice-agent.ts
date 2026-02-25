import { CaseStudy } from '@/types/case-study'

const tscVoiceAgent: CaseStudy = {
  slug: 'tsc-voice-agent',
  isPublished: true,
  client: 'The Sleep Company',
  industry: 'D2C Sleep & Furniture',
  region: 'India',
  pillar: 'AI - Ops',
  year: 2025,
  type: 'AI Voice Calling Automation',
  pm: 'Priyanshu',
  accent: '#4a2d7a',
  accentSoft: 'rgba(74,45,122,0.08)',
  accentLight: '#6b42b0',

  eyebrow: 'AI - Ops · Voice Automation · 2025',
  headline: "Optimizing Last-Mile Delivery for <em>The Sleep Company</em> with AI-Powered Voice Confirmation",
  subheadline:
    "The AI call that saves a delivery — and the customer relationship. 80% cost reduction. 82% more same-day confirmations.",
  heroMeta: [
    { label: 'Client', value: 'The Sleep Company' },
    { label: 'Impact Pillar', value: 'AI - Ops' },
  ],

  brandHeadline: "Hinglish AI calling agent confirms COD orders<br />before the return window opens.",
  brandIntro: [
    "The Sleep Company is India's leading sleep solutions brand, known for its SmartGRID technology across mattresses, chairs, and ergonomic furniture. With a nationwide customer base and high Cash on Delivery (COD) order volumes, the brand's operational performance depends critically on the efficiency of order confirmation and delivery coordination — particularly for high-value furniture orders where failed deliveries are especially costly.",
    "We deployed a production-grade AI Humanoid Voice Calling Agent that replaced a manual calling operation costing $198 per day. The result was a transformation in every delivery metric: order confirmation speed, same-day confirmation rates, RTO reduction, and operational costs — while maintaining the premium customer communication quality the brand's customers expected.",
  ],
  brandTags: ['D2C Furniture', 'AI Voice Agent', 'COD Optimization', 'Hinglish NLP', 'Twilio', 'India'],
  brandStats: [
    { name: 'Architecture', value: 'Humanoid Voice AI · Sub-100ms Latency · Hinglish' },
    { name: 'Capacity', value: '200+ Concurrent Calls' },
    { name: 'Region', value: 'India (Pan-India COD Operations)' },
    { name: 'Focus', value: 'Order Confirmation TAT, RTO Reduction & Cost Savings' },
    { name: 'Year', value: '2025' },
  ],

  peopleHeadline: "Built for the COD customer who expected a human call, the ops team making 200 calls a day manually, and the finance lead watching RTO rates drain margin.",
  peopleIntro:
    "Three people were living with the consequences of a slow, expensive manual confirmation process — a customer waiting days, a call center manager managing impossible volumes, and an operations VP watching RTO costs compound.",
  personas: [
    {
      avatar: '🛏️',
      name: 'Reena',
      age: 34,
      role: 'COD customer awaiting mattress delivery · Jaipur',
      quote:
        "COD customers placing high-value mattress orders waited 24 to 72 hours with no confirmation of whether the order had been processed. The absence of timely outreach created doubt, and in some cases, cancellations that a same-day confirmation call would have prevented.",
      painTag: '⏳ 24-72 hour confirmation wait after COD order placement',
    },
    {
      avatar: '☎️',
      name: 'Deepak',
      age: 31,
      role: 'Call Center Operations Manager · The Sleep Company',
      quote:
        "Call center teams handling hundreds of daily confirmation calls could not keep pace with order volume during peak periods. Despite the cost of a dedicated calling team, same-day confirmation targets remained out of reach — particularly on high-volume sale days.",
      painTag: '📞 Human call team cannot scale to meet same-day confirmation targets',
    },
    {
      avatar: '📊',
      name: 'Amitabh',
      age: 42,
      role: 'VP Operations · The Sleep Company',
      quote:
        "A COD RTO rate of nearly 5% was generating significant reverse logistics costs on every failed furniture delivery. The manual calling operation was costing $198 per day and still only achieving same-day confirmation on 11% of orders — a cost and performance combination that was not sustainable.",
      painTag: '💸 RTO rate and confirmation speed costing margin at scale',
    },
  ],

  challengeHeadline: "The Sleep Company's COD confirmation process was costing $198 a day and confirming only 11% of orders same-day.",
  challengeParagraphs: [
    "Cash on Delivery order confirmation is a last-mile problem hiding as a customer service problem. For The Sleep Company, the human caller model had fundamental constraints: it operated within business hours, couldn't handle peak volumes during sale periods, and was producing same-day confirmation for only 11.66% of orders — leaving most customers in a 24-72 hour confirmation window that created anxiety, changed-mind cancellations, and ultimately, expensive RTO situations.",
    "At $198 per day, the manual model was both inefficient and expensive. The AI solution needed to operate 24/7 at scale, speak in the Hinglish code-switching style that connected with The Sleep Company's diverse pan-India customer base, and execute complex in-call actions — scheduling delivery slots, verifying order details, creating CRM tickets — without human assistance.",
  ],
  challengeTension:
    "A premium furniture brand's reputation for care and quality ends at the moment its confirmation call doesn't come for two days.",
  challengeMetrics: [
    { name: 'Order confirmation turnaround time', value: '24-72 hours', barPercent: 88, barStyle: 'gold' },
    { name: 'Same-day confirmation rate', value: '11.66%', barPercent: 85, barStyle: 'gold' },
    { name: 'COD RTO rate', value: '4.91%', barPercent: 82, barStyle: 'gold' },
    { name: 'Daily calling operation cost', value: '$198/day', barPercent: 80, barStyle: 'soft' },
    { name: 'Peak period call volume handling', value: 'Insufficient', barPercent: 78, barStyle: 'soft' },
  ],

  approachHeadline: "Hinglish NLP voice agent with sub-100ms latency, 200+ concurrent calls via Promise Pooling, RAG knowledge base, and CRM integration.",
  approachIntro:
    "The AI agent was built to call Reena the moment her order is placed, handle Deepak's volume without a headcount ceiling, and drive the RTO and cost improvements Amitabh needed.",
  approachCards: [
    {
      icon: '🗣️',
      title: 'Ultra-Low Latency Hinglish Voice Agent',
      description:
        "Deployed a sub-100ms voice AI with native bilingual Hinglish intelligence and Voice Activity Detection — natural conversation that understands code-switching between Hindi and English across The Sleep Company's pan-India customer base.",
      badge: 'Human-Centricity',
    },
    {
      icon: '📞',
      title: '200+ Concurrent Call Architecture',
      description:
        "Implemented Promise Pooling enabling 200+ simultaneous calls without quality degradation — Deepak's team never faces a confirmation backlog regardless of order volume or time of day.",
      badge: 'Resilience',
    },
    {
      icon: '🧠',
      title: 'Brand-Toned RAG Knowledge Base',
      description:
        "Developed a custom RAG system ensuring responses match The Sleep Company's premium brand tone, product knowledge, and business logic — including SmartGRID technology details and warranty policies.",
      badge: 'Human-Centricity',
    },
    {
      icon: '⚙️',
      title: 'CRM & Database Real-Time Integration',
      description:
        "Built native sync with Zendesk, Google Sheets, and DynamoDB — every call automatically updates order status, delivery preferences, and customer records. Reena's schedule is logged without a human touch.",
      badge: 'Sustainability',
    },
    {
      icon: '📋',
      title: 'In-Call Action Execution',
      description:
        "Enabled mid-call task execution: Order ID verification, delivery slot scheduling, payment confirmations, Zendesk ticket creation — all completed in real time during the conversation without human escalation.",
      badge: 'Resilience',
    },
    {
      icon: '🔀',
      title: 'Voicemail Detection & Human Escalation',
      description:
        "Built voicemail detection with automated message drop and call rescheduling, plus seamless transfer to human agents when conversations require personal handling — all within the same call session.",
      badge: 'Resilience',
    },
  ],

  resultsHeadline: "80.56% cost reduction, same-day confirmation up from 11% to 68%, 37.68% RTO reduction.",
  resultCards: [
    {
      number: '80.56%',
      label: 'Daily operational cost reduction — from $198 to $38.49',
      humanNote: "Amitabh reinvests the savings in products and customer experience",
    },
    {
      number: '82.88%',
      label: 'Increase in same-day confirmation rate — from 11.66% to 68.09%',
      humanNote: "Reena gets her confirmation call the same day she places her order",
    },
    {
      number: '<4 hrs',
      label: 'Order confirmation TAT — down from 24-72 hours',
      humanNote: 'The window from order to confirmed is measured in hours, not days',
    },
    {
      number: '37.68%',
      label: 'Reduction in COD RTO rate — from 4.91% to 3.06%',
      humanNote: "Amitabh's reverse logistics costs drop with every prevented return",
    },
  ],

  humanImpactCards: [
    {
      icon: '🛏️',
      title: 'Customer Confidence',
      description:
        "Reena receives a confirmation call the same day she orders — the AI sets accurate delivery expectations, confirms her availability, and schedules around her preferences. The premium brand experience extends to the first post-purchase touchpoint.",
    },
    {
      icon: '☎️',
      title: 'Operations Scaled Without Headcount',
      description:
        "Deepak's confirmation pipeline now handles 200+ simultaneous calls around the clock — peak sale days, midnight orders, and high-volume weekends are processed without degradation or backlog.",
    },
    {
      icon: '📊',
      title: 'Margin Protection',
      description:
        "Amitabh's RTO rate dropped because the AI confirms orders the moment they're placed, sets delivery slots accurately, and sends reminders. Every prevented return is direct margin recovery.",
    },
    {
      icon: '💸',
      title: 'Cost Structure Transformed',
      description:
        "The calling operation went from a linear cost model — more orders, more callers, more cost — to a fixed infrastructure model. The AI scales with order volume at marginal infrastructure cost, not marginal headcount cost.",
    },
  ],

  ctaBadge: "Let's automate your last-mile confirmation workflow",
  ctaHeadline: 'An AI that calls your customers<br />before they start to wonder.',
  ctaSubline:
    "Production-grade AI voice calling agents for COD order confirmation — Hinglish-capable, CRM-integrated, and operating at scale 24/7 for a fraction of manual calling costs.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default tscVoiceAgent
