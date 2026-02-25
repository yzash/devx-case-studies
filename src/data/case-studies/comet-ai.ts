import { CaseStudy } from '@/types/case-study'

const cometAi: CaseStudy = {
  slug: 'comet-ai',
  isPublished: true,
  client: 'Comet',
  industry: 'D2C Sneakers / Lifestyle',
  region: 'India',
  pillar: 'AI - Ops',
  year: 2025,
  type: 'AI Sales Chatbot',
  pm: 'Priyanshu',
  accent: '#ff6b35',
  accentSoft: 'rgba(255,107,53,0.08)',
  accentLight: '#ff8f65',

  eyebrow: 'AI - Ops · Sales Chatbot · 2025',
  headline: "Elevating D2C Conversions: AI Sales Chatbot for <em>Comet</em>'s Gen-Z Sneaker Community",
  subheadline:
    "A chatbot that doesn't just answer questions — it sells sneakers at 2am with the same personality the brand projects everywhere else.",
  heroMeta: [
    { label: 'Client', value: 'Comet' },
    { label: 'Impact Pillar', value: 'AI - Ops' },
  ],

  brandHeadline: "Gen-Z sneakers, Gen-Z service.<br />An AI sales assistant that never logs off.",
  brandIntro: [
    "Comet is a Gen-Z focused D2C sneaker brand with a vibrant personality, a highly engaged social media community, and a product drop culture that drives intense, time-sensitive customer demand. The brand had built real equity with its audience — but its customer support infrastructure was designed for a different scale.",
    "As traffic grew — especially around product drops — the gap between what customers expected and what a manual support team could deliver became impossible to close. Sizing questions went unanswered. Style queries arrived at midnight. Cart abandonment climbed during the exact moments when responsive, on-brand support would have converted the sale. An AI sales assistant was the answer — but it had to sound like Comet, not like a chatbot.",
  ],
  brandTags: ['D2C Sneakers', 'Gen-Z', 'AI Chatbot', 'RAG', 'Conversational Commerce', 'India'],
  brandStats: [
    { name: 'AI Architecture', value: 'RAG-Powered + Brand Voice Training' },
    { name: 'Availability', value: '24/7 with Human Escalation' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'CVR Lift, Support Automation & Cost Reduction' },
    { name: 'Year', value: '2025' },
  ],

  peopleHeadline: "Built for the sneaker fan who wanted fit advice at 2am, the support team drowning in repetitive queries, and the growth lead who needed AI to earn its keep commercially.",
  peopleIntro:
    "Three people were let down by a support model that couldn't keep up with Comet's community — a shopper who wanted instant answers, a support lead drowning in volume, and a growth lead watching support costs eat into margins.",
  personas: [
    {
      avatar: '👟',
      name: 'Zara',
      age: 22,
      role: 'Gen-Z sneaker enthusiast · Bengaluru',
      quote:
        "Gen-Z sneaker enthusiasts encountering a new drop on Instagram at midnight had no way to get immediate sizing answers — and by the time a response arrived the following day, the purchase had already gone to a competitor.",
      painTag: '🌙 Off-hours sizing queries converting to competitor sales',
    },
    {
      avatar: '🎧',
      name: 'Nikhil',
      age: 27,
      role: 'Customer Support Lead · Comet',
      quote:
        "Support leads during product drops faced hundreds of simultaneous messages covering the same recurring questions — order tracking, sizing, and style comparisons — consuming the entire team's capacity while still leaving queries unresolved.",
      painTag: '📨 Repetitive ticket volume blocking strategic support work',
    },
    {
      avatar: '📈',
      name: 'Dev',
      age: 30,
      role: 'Head of Growth · Comet',
      quote:
        "Growth leads watched support costs scale linearly with traffic while cart abandonment peaked during the highest-demand drops — spending more on support while still losing sales to unanswered pre-purchase questions.",
      painTag: '💸 Support costs scaling without conversion improvement',
    },
  ],

  challengeHeadline: "Comet's Gen-Z customers wanted instant answers at midnight, not a support ticket queue.",
  challengeParagraphs: [
    "Gen-Z customers don't wait. Zara's decision to buy a limited drop happens in a window measured in minutes, not hours — and the questions standing between her intent and her purchase are almost always the same ones: sizing, styling, availability, delivery. A manual support team operating within business hours couldn't cover those windows, and no generic chatbot could replicate the brand personality that made Comet worth buying from in the first place.",
    "The support operation was a ceiling on growth. Nikhil's team was handling escalating volumes with no relief mechanism, and the repetitive nature of the tickets — the same sizing charts, the same tracking links, the same return policy questions — was consuming bandwidth that should have been focused on complex customer relationships. The AI needed to be both a sales tool and an operational relief valve, simultaneously.",
  ],
  challengeTension:
    "Comet's community expects instant, on-brand responses at the exact moments support teams are offline and tickets are at their highest.",
  challengeMetrics: [
    { name: 'Off-hours customer query response coverage', value: 'Zero', barPercent: 95, barStyle: 'gold' },
    { name: 'Repetitive ticket volume consuming support team', value: 'Critical', barPercent: 88, barStyle: 'gold' },
    { name: 'Cart abandonment from unanswered pre-purchase questions', value: 'High', barPercent: 82, barStyle: 'gold' },
    { name: 'Brand voice consistency in support interactions', value: 'Manual only', barPercent: 80, barStyle: 'soft' },
    { name: 'Support cost scaling relative to traffic growth', value: 'Linear — unsustainable', barPercent: 85, barStyle: 'gold' },
  ],

  approachHeadline: "RAG-powered AI chatbot trained on Comet's brand voice — 24/7 sales assistance with human escalation.",
  approachIntro:
    "The AI was designed to give Zara an instant answer at midnight, give Nikhil his time back, and give Dev a support model that doesn't cost more as it scales.",
  approachCards: [
    {
      icon: '🤖',
      title: 'RAG-Powered Brand-Voice Chatbot',
      description:
        "Deployed a RAG-based AI assistant trained on Comet's brand voice, product catalog, and Gen-Z communication style — responding in the same authentic, playful personality that built the brand's community.",
      badge: 'Human-Centricity',
    },
    {
      icon: '👟',
      title: 'Personalised Product Recommendations',
      description:
        "Implemented a recommendation engine analyzing preferences, browsing behaviour, and style intent to suggest specific sneaker models, colourways, and sizes — helping Zara find what she came for before she goes elsewhere.",
      badge: 'Human-Centricity',
    },
    {
      icon: '📦',
      title: 'Real-Time Order Support Integration',
      description:
        "Integrated with the order management system to handle tracking, size exchanges, and return assistance without human intervention — removing Nikhil's most frequent ticket categories from his queue entirely.",
      badge: 'Sustainability',
    },
    {
      icon: '🌙',
      title: '24/7 Availability',
      description:
        "The AI operates continuously — drops at midnight, questions during weekends, queries during high-traffic events — without shift changes, breaks, or service degradation. Zara gets an answer when she needs it.",
      badge: 'Resilience',
    },
    {
      icon: '🤝',
      title: 'Seamless Human Escalation',
      description:
        "Built intelligent escalation logic that detects when human expertise is needed — transferring to Nikhil's team with full conversation context so the customer doesn't have to repeat themselves.",
      badge: 'Resilience',
    },
    {
      icon: '📊',
      title: 'Conversation Learning Loop',
      description:
        "Implemented feedback mechanisms so successful interactions improve future recommendations — the AI gets better at selling Comet's products with every conversation it completes.",
      badge: 'Sustainability',
    },
  ],

  resultsHeadline: "12–15% CVR lift, 70% support tasks automated, 40–50% support cost reduction.",
  resultCards: [
    {
      number: '12–15%',
      label: 'CVR lift through instant query resolution and guided purchase assistance',
      humanNote: "Zara gets her sizing question answered at midnight and completes the purchase",
    },
    {
      number: '70%',
      label: 'Repetitive support tasks automated',
      humanNote: "Nikhil's team handles complex relationships, not tracking requests",
    },
    {
      number: '40–50%',
      label: 'Customer support cost reduction',
      humanNote: "Dev's growth spend goes to marketing, not scaling a manual support team",
    },
    {
      number: '60%',
      label: 'Reduction in support phone call volume',
      humanNote: 'Customers find answers instantly — no hold music required',
    },
  ],

  humanImpactCards: [
    {
      icon: '👟',
      title: 'Always-On Sales Assistance',
      description:
        "Zara asks about sizing at midnight during a drop and gets an instant, accurate, on-brand answer. The window between intent and purchase closes before her attention moves elsewhere.",
    },
    {
      icon: '🎧',
      title: 'Support Team Relief',
      description:
        "Nikhil's team no longer handles the same 20 questions on repeat. Routine queries are captured by the AI — the support team focuses on the situations that actually need human judgement.",
    },
    {
      icon: '📈',
      title: 'Growth Economics Improved',
      description:
        "Dev's support costs dropped while conversion improved. The AI replaced a linear cost model with a fixed-infrastructure model — support now scales with traffic without proportional cost increases.",
    },
    {
      icon: '🎤',
      title: 'Brand Voice Preserved',
      description:
        "Every AI interaction sounds like Comet — the same tone, the same energy, the same personality the brand projects on social media. The chatbot is a brand asset, not a utility.",
    },
  ],

  ctaBadge: "Let's build an AI that sells like your best team member",
  ctaHeadline: 'An AI sales assistant that<br />never sleeps and never breaks character.',
  ctaSubline:
    "RAG-powered conversational AI trained on your brand voice — delivering instant, personalised sales assistance 24/7 while dramatically reducing support costs.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default cometAi
