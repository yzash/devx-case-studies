import { CaseStudy } from '@/types/case-study'

const repindia: CaseStudy = {
  slug: 'repindia',
  isPublished: true,
  client: 'RepIndia',
  industry: 'Digital Marketing Agency',
  region: 'India',
  pillar: 'AI - Ops',
  year: 2025,
  type: 'AI Social Media Workflow Automation',
  pm: 'Astha',
  accent: '#4a2d7a',
  accentSoft: 'rgba(74,45,122,0.08)',
  accentLight: '#6b42b0',

  eyebrow: 'AI - Ops · Social Media Automation · 2025',
  headline: "Driving Campaign Excellence: AI-Powered Social Media Automation for <em>RepIndia</em>",
  subheadline:
    "360° digital strategy. One AI backbone. The 60-70% of manual work that shouldn't require a human — automated.",
  heroMeta: [
    { label: 'Client', value: 'RepIndia' },
    { label: 'Impact Pillar', value: 'AI - Ops' },
  ],

  brandIntro: [
    "RepIndia is one of India's leading digital agencies, managing social media strategy and execution for the country's largest brands with a turnover exceeding ₹100 Cr. At that scale, the volume of content production — across clients, platforms, formats, and campaigns — creates an operational burden that grows directly with the client roster.",
    "Creative teams were spending the majority of their time on tasks that were necessary but not strategic: resizing images for platform specifications, writing caption variations, researching hashtags, scheduling posts. An AI-powered automation platform was implemented to absorb those hours systematically — giving the agency's talented teams time to do the work that actually required their expertise.",
  ],
  brandTags: ['Digital Agency', 'Social Media', 'AI Automation', 'Amazon Bedrock', 'Claude AI', 'Content Generation', 'India'],
  brandStats: [
    { name: 'AI Stack', value: 'Amazon Bedrock · Claude AI · Workflow Automation' },
    { name: 'Scale', value: '₹100 Cr+ Agency · India\'s Largest Brands' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Workflow Automation, Content Generation & CVR Optimization' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people were experiencing the creative toll of a manual content production pipeline — a social media executive doing production work instead of creative work, a creative director whose team had no bandwidth, and a growth head watching campaign performance plateau.",
  personas: [
    {
      avatar: '📱',
      name: 'Priya',
      age: 26,
      role: 'Social Media Executive · RepIndia',
      quote:
        'Social media executives at large digital agencies spent the majority of their working day on repetitive production tasks — resizing images for platform specifications, writing multiple caption variations, and manually scheduling posts — leaving little time for the creative work the role was meant to involve.',
      painTag: '⏱️ Creative talent consumed by production tasks',
    },
    {
      avatar: '🎨',
      name: 'Aditya',
      age: 33,
      role: 'Creative Director · RepIndia',
      quote:
        'Creative directors leading talented teams found that campaign execution overhead left no bandwidth for strategic creative work — A/B testing, format experimentation, and iterative improvement were consistently deprioritized because the team was fully consumed just delivering the minimum required output.',
      painTag: '🧠 No bandwidth for strategic creative or experimentation',
    },
    {
      avatar: '📈',
      name: 'Anuj',
      age: 38,
      role: 'Head of Performance · RepIndia',
      quote:
        'Performance leads at agencies watched client campaign CVR plateau even when the strategic remedies were clear — more testing, smarter timing, data-driven iteration — because the team was too stretched by production work to act on what the data was telling them.',
      painTag: '📉 Campaign CVR plateauing due to bandwidth constraints',
    },
  ],

  challengeParagraphs: [
    "The manual content production workflow at RepIndia was a compounding problem. Each new client didn't just add revenue — it added proportional production overhead. Image resizing alone, across Instagram, Twitter, LinkedIn, Facebook, and YouTube formats for every post across every client, represented dozens of hours weekly. Caption writing, hashtag research, scheduling — all manual, all repeatable, all automatable.",
    "The strategic cost was invisible but real. Aditya's team was talented enough to deliver creative work that outperformed — but they never had the time to do it. Every hour spent on Photoshop production was an hour not spent on testing, optimisation, or the kind of creative iteration that actually moves campaign metrics. Automation wasn't just about efficiency — it was about unlocking the creative potential the agency already had.",
  ],
  challengeTension:
    "A ₹100 Cr agency with world-class creative talent — spending most of their time on work that doesn't require it.",
  challengeMetrics: [
    { name: 'Time spent on repetitive production tasks', value: '60-70% of workflow', barPercent: 88, barStyle: 'gold' },
    { name: 'Image resizing and format conversion overhead', value: 'Daily hours per person', barPercent: 85, barStyle: 'gold' },
    { name: 'A/B testing and creative iteration bandwidth', value: 'Near zero', barPercent: 82, barStyle: 'soft' },
    { name: 'Campaign CVR performance headroom', value: 'Unrealized', barPercent: 78, barStyle: 'soft' },
    { name: 'Client scalability without headcount growth', value: 'Blocked', barPercent: 80, barStyle: 'gold' },
  ],

  approachIntro:
    "The automation platform was built to give Priya her creative hours back, give Aditya's team the bandwidth for strategy, and give Anuj the data-driven iteration that moves campaign performance.",
  approachCards: [
    {
      icon: '✍️',
      title: 'Intelligent Content Generation',
      description:
        "Deployed Amazon Bedrock and Claude AI to generate platform-specific captions, hashtag recommendations, and content variations — Priya reviews and publishes rather than writes from scratch.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🖼️',
      title: 'Automated Image Processing',
      description:
        "Implemented automated image resizing, format conversion, and platform-specific optimisation — every post formatted for every platform automatically, eliminating the Photoshop production cycle entirely.",
      badge: 'Sustainability',
    },
    {
      icon: '🔄',
      title: 'End-to-End Workflow Orchestration',
      description:
        "Built unified workflow automation connecting content creation, approval, scheduling, and analytics — Priya's entire campaign management lives in one interface rather than five disconnected tools.",
      badge: 'Resilience',
    },
    {
      icon: '📊',
      title: 'Performance Analytics Integration',
      description:
        "Integrated real-time performance tracking with automated insights and recommendations — Anuj's team gets the data-driven signals they need without manual spreadsheet analysis.",
      badge: 'Sustainability',
    },
    {
      icon: '📅',
      title: 'Multi-Platform Publishing Automation',
      description:
        "Automated scheduling and publishing across Facebook, Instagram, Twitter, LinkedIn, and YouTube with platform-specific timing optimisation — campaigns publish at peak engagement without manual coordination.",
      badge: 'Resilience',
    },
    {
      icon: '🧪',
      title: 'A/B Testing and Creative Iteration',
      description:
        "Automation freed Aditya's team to run creative experiments they never previously had bandwidth for — testing formats, copy variations, and timing strategies that improve campaign performance.",
      badge: 'Human-Centricity',
    },
  ],

  resultCards: [
    {
      number: '60–70%',
      label: 'Workflow automation — repetitive tasks replaced by AI execution',
      humanNote: "Priya now spends her day on work that uses her actual skills",
    },
    {
      number: '15–20%',
      label: 'Improvement in campaign CVR through AI optimization and freed creative bandwidth',
      humanNote: "Anuj's performance metrics moved because his team finally had room to iterate",
    },
    {
      number: '5–7 hrs',
      label: 'Daily time savings per team member redirected to strategic work',
      humanNote: "Aditya's team experiments, iterates, and creates at the level they were hired for",
    },
    {
      number: '∞',
      label: 'Scalable client capacity — new clients add revenue, not proportional production overhead',
      humanNote: 'RepIndia can grow without the headcount ceiling production work imposed',
    },
  ],

  humanImpactCards: [
    {
      icon: '📱',
      title: 'Creative Teams Elevated',
      description:
        "Priya's day is no longer defined by production tasks. The hours previously consumed by resizing and scheduling are available for ideation, testing, and the kind of creative work that differentiates the agency.",
    },
    {
      icon: '🎨',
      title: 'Strategic Bandwidth Restored',
      description:
        "Aditya's team runs creative experiments, iterates on campaign formats, and delivers the strategic quality that clients hired RepIndia for — because automation removed the production work that was consuming their capacity.",
    },
    {
      icon: '📈',
      title: 'Performance Ceiling Raised',
      description:
        "Anuj's CVR targets are achievable now — not because the AI is smarter than the team, but because the team finally has the bandwidth to do the testing and iteration that performance improvements require.",
    },
    {
      icon: '🏢',
      title: 'Agency Scalability',
      description:
        "RepIndia can grow its client roster without proportional production overhead growth. The automation platform absorbs new client volume at marginal cost — not proportional headcount.",
    },
  ],

  ctaBadge: "Let's automate what's consuming your creative team",
  ctaHeadline: 'Give your creative talent<br />the time to actually create.',
  ctaSubline:
    "AI-powered content production automation that handles the repeatable, freeing your team for the strategic and creative work that defines your competitive advantage.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default repindia
