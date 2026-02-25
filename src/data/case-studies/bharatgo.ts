import { CaseStudy } from '@/types/case-study'

const bharatgo: CaseStudy = {
  slug: 'bharatgo',
  isPublished: true,
  client: 'BharatGo',
  industry: 'No-Code SaaS / D2C Enablement',
  region: 'India',
  pillar: 'AI - Ops',
  year: 2025,
  type: 'GenAI Platform Implementation',
  pm: 'Priyanshu',
  accent: '#4a2d7a',
  accentSoft: 'rgba(74,45,122,0.08)',
  accentLight: '#6b42b0',

  eyebrow: 'AI - Ops · GenAI Implementation · 2025',
  headline: "Strategic GenAI Implementation for <em>BharatGo</em>: From Manual Onboarding to Automated Scale",
  subheadline:
    "10,000+ sellers onboarding stores in under 2 minutes. AI that does the work the sellers never could.",
  heroMeta: [
    { label: 'Client', value: 'BharatGo' },
    { label: 'Impact Pillar', value: 'AI - Ops' },
  ],

  brandHeadline: "D2C empowerment for 10,000 sellers.<br />GenAI turning hours into minutes.",
  brandIntro: [
    "BharatGo is a high-growth no-code SaaS platform backed by IIIT Kottayam and funded under Startup India, empowering 10,000+ Indian D2C brands and local entrepreneurs to launch professional e-commerce stores instantly. The platform's mission is democratisation — making professional online retail accessible to street vendors, boutique owners, and first-time entrepreneurs across India who have the products but not the digital skills.",
    "The core challenge was a skills gap embedded in the platform's user base. Most sellers couldn't write compelling product descriptions, edit images professionally, or create marketing content. This gap was costing them 4-6 hours per store setup and costing BharatGo $5,000+ monthly in manual support overhead. A comprehensive GenAI implementation transformed every bottleneck into an automated capability.",
  ],
  brandTags: ['D2C SaaS', 'GenAI', 'Amazon Bedrock', 'AWS SageMaker', 'Seller Enablement', 'India', 'No-Code'],
  brandStats: [
    { name: 'AI Stack', value: 'Amazon Bedrock · SageMaker · RAG Chatbots · NLP' },
    { name: 'Scale', value: '10,000+ Merchants · 1,500+ Daily Listings' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Onboarding Automation, Cost Reduction & Scale' },
    { name: 'Year', value: '2025' },
  ],

  peopleHeadline: "Built for the first-time seller paralyzed by content creation, the support team overwhelmed by tickets, and the founder scaling to millions of SKUs.",
  peopleIntro:
    "Three people were being failed by a platform that promised simplicity but delivered a 4-6 hour manual ordeal — a seller with a product and no digital skills, a support manager drowning in queries, and an engineering leader who needed to scale.",
  personas: [
    {
      avatar: '🏪',
      name: 'Ravi',
      age: 38,
      role: 'Small business owner · Lucknow',
      quote:
        'Small business sellers on BharatGo — including artisans and local entrepreneurs selling handmade goods — lacked the skills to write product descriptions, edit photographs, or create social posts. Store setup stalled repeatedly at the content stage, blocking sellers who had the products but not the digital capability.',
      painTag: '📝 Cannot write descriptions or edit product images',
    },
    {
      avatar: '🎧',
      name: 'Priya',
      age: 27,
      role: 'Customer Support Manager · BharatGo HQ',
      quote:
        'Customer support managers at BharatGo handled thousands of seller queries each week, the majority of which were repetitive — how to write a product description, why an image appeared low quality, what to post on social media. The volume was unsustainable and required manual effort on every interaction.',
      painTag: '📨 Support team buried under repetitive seller queries',
    },
    {
      avatar: '⚙️',
      name: 'Arjun',
      age: 32,
      role: 'CTO · BharatGo',
      quote:
        'Platform engineering leaders at BharatGo recognized that scaling from 10,000 to 50,000 sellers would require a proportional increase in support headcount under the existing model — a cost structure that would break before the seller count became viable. Automation needed to replace human effort, not merely assist it.',
      painTag: '📈 Platform cannot scale without proportional cost increase',
    },
  ],

  challengeHeadline: "BharatGo's sellers needed a store launch in minutes, not the 4–6 hours automation hadn't solved.",
  challengeParagraphs: [
    "Ravi's situation was replicated across thousands of BharatGo sellers. The skills required to create a professional online store — writing SEO-optimised product titles, editing product photographs, generating social content, maintaining positive reviews — were skills that most small Indian entrepreneurs simply didn't have. The platform removed the technical barrier to launching a store. The content barrier remained, and it was equally disqualifying.",
    "For BharatGo, the operational math was unsustainable. $5,000+ monthly in manual support costs and a 4-6 hour onboarding process meant that seller growth was creating financial pressure rather than financial leverage. Arjun needed every new seller to be served largely without additional human input — and a GenAI implementation across five operational pillars was the architecture that made it possible.",
  ],
  challengeTension:
    "A platform that removes the technical barrier to commerce — but cannot yet remove the content and support barrier for the sellers who need it most.",
  challengeMetrics: [
    { name: 'Store setup time for non-technical sellers', value: '4-6 hours manual', barPercent: 90, barStyle: 'gold' },
    { name: 'Content creation capability in seller base', value: 'Near-zero', barPercent: 88, barStyle: 'gold' },
    { name: 'Monthly support cost overhead', value: '$5,000+', barPercent: 85, barStyle: 'gold' },
    { name: 'Platform scalability without proportional headcount', value: 'Blocked', barPercent: 82, barStyle: 'gold' },
    { name: 'Fake review and multilingual moderation', value: 'Fully manual', barPercent: 78, barStyle: 'soft' },
  ],

  approachHeadline: "Amazon Bedrock for product descriptions, SageMaker for image enhancement, RAG chatbots for self-service resolution.",
  approachIntro:
    "Five GenAI pillars transformed every manual bottleneck into an automated capability — so Ravi onboards himself, Priya handles exceptions, and Arjun scales economics.",
  approachCards: [
    {
      icon: '✍️',
      title: 'AI Product Description Generator',
      description:
        "Deployed Amazon Bedrock to auto-generate SEO-optimised product titles and descriptions in under 1 second — Ravi uploads his product, the AI handles the words that sell it.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🖼️',
      title: 'AI Image Enhancement Suite',
      description:
        "Integrated Amazon SageMaker for 4x image upscaling and intelligent background removal — Ravi's phone photo becomes a professional product image, automatically.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🤖',
      title: 'Seller & Customer RAG Chatbots',
      description:
        "Built RAG-based AI systems providing 24/7 automated support for platform queries and white-labelled chatbots for individual seller stores — Priya's team handles escalations, not routine questions.",
      badge: 'Sustainability',
    },
    {
      icon: '📣',
      title: 'AI Blog & Marketing Content Generator',
      description:
        "Automated creation of long-form SEO blog content and social media posts for seller stores — professional marketing content generated without agencies, writers, or Ravi knowing how.",
      badge: 'Sustainability',
    },
    {
      icon: '⭐',
      title: 'Review & Comment NLP Analyser',
      description:
        "Deployed multilingual NLP models for automated sentiment analysis and fake review filtering across all storefronts — platform integrity maintained at scale without manual moderation.",
      badge: 'Resilience',
    },
    {
      icon: '🏗️',
      title: 'End-to-End Onboarding Automation',
      description:
        "Integrated all five GenAI pillars into a unified onboarding workflow — store launch is automated from product upload to live storefront with complete content and imagery handled by AI.",
      badge: 'Resilience',
    },
  ],

  resultsHeadline: "Under 2-minute store launch, 68% cost reduction, 85% self-service resolution, 1,500+ daily listings automated.",
  resultCards: [
    {
      number: '<2 min',
      label: 'Store launch time — down from 4-6 hours of manual work',
      humanNote: "Ravi has a live professional store in the time it takes to make tea",
    },
    {
      number: '68%',
      label: 'Reduction in monthly operational overhead — from $5,000 to $1,616 in AWS costs',
      humanNote: "Arjun's unit economics now improve as seller count grows",
    },
    {
      number: '≥85%',
      label: 'Self-service resolution rate through RAG-based AI support',
      humanNote: "Priya's team handles the 15% that actually needs human judgement",
    },
    {
      number: '1,500+',
      label: 'Daily product listings processed with 100% automation',
      humanNote: 'The pipeline runs without human oversight at any volume',
    },
  ],

  humanImpactCards: [
    {
      icon: '🏪',
      title: 'Seller Empowerment',
      description:
        "Ravi uploads his handmade products and walks away with a professional store — AI-generated descriptions, enhanced photography, and marketing content he never could have created himself. The digital skills gap is closed.",
    },
    {
      icon: '🎧',
      title: 'Support Team Transformed',
      description:
        "Priya's team handles the queries that require human empathy and judgement. The repetitive 85% is handled by AI that responds in seconds across every language BharatGo's diverse seller base speaks.",
    },
    {
      icon: '⚙️',
      title: 'Scalable Economics',
      description:
        "Arjun's cost structure now improves as the platform grows. Every new seller is served by AI-first infrastructure that costs marginally more to run — not proportionally more to staff.",
    },
    {
      icon: '📈',
      title: 'Platform Integrity at Scale',
      description:
        "Fake reviews are caught automatically across multilingual storefronts. The trust that makes BharatGo's marketplace work for buyers is maintained at scale without a content moderation team.",
    },
  ],

  ctaBadge: "Let's automate what's limiting your platform's growth",
  ctaHeadline: 'GenAI that turns a skills gap<br />into a competitive advantage.',
  ctaSubline:
    "Comprehensive GenAI implementations — product content, image enhancement, support automation, and content generation — that transform manual operational ceilings into scalable automated capabilities.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default bharatgo
