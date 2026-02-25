import { CaseStudy } from '@/types/case-study'

const hireforCareAi: CaseStudy = {
  slug: 'hireforcare-ai',
  isPublished: true,
  client: 'HireForCare',
  industry: 'Healthcare Technology / Special Needs',
  region: 'India',
  pillar: 'AI - Ops',
  year: 2025,
  type: 'AI Caregiver Matching Platform',
  pm: 'Priyanshu',
  accent: '#4a2d7a',
  accentSoft: 'rgba(74,45,122,0.08)',
  accentLight: '#6b42b0',

  eyebrow: 'AI - Ops · Healthcare AI · Matching Platform · 2025',
  headline: "Transforming Special-Needs Care: AI-Powered Screening and Matching for <em>HireForCare</em>",
  subheadline:
    'Matching the right carer to the right child. 50+ factors. AI that handles the data so humans can focus on the care.',
  heroMeta: [
    { label: 'Client', value: 'HireForCare' },
    { label: 'Impact Pillar', value: 'AI - Ops' },
  ],

  brandHeadline: "Special-needs care is too important<br />for a matching process built on guesswork.",
  brandIntro: [
    "HireForCare connects families of special-needs children with qualified caregivers and therapists who have the skills, personality, and approach to make a genuine difference. In a domain where a poor match isn't just inconvenient but potentially harmful — disrupting therapy continuity for children with autism, ADHD, or developmental delays — the quality of matching is the platform's core value proposition.",
    "We built the AI matching platform at the heart of HireForCare: a machine learning system that evaluates 50+ compatibility factors to generate caregiver-family matches, automates the screening workflow that previously took weeks, and learns from every successful placement to improve future recommendations.",
  ],
  brandTags: ['Healthcare AI', 'Machine Learning', 'NLP', 'Caregiver Matching', 'Special Needs', 'India'],
  brandStats: [
    { name: 'AI Architecture', value: 'Multi-Factor ML Matching + NLP + Continuous Learning' },
    { name: 'Matching Factors', value: '50+ Variables Per Match' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Match Quality, Screening Speed & Therapy Continuity' },
    { name: 'Year', value: '2025' },
  ],

  peopleHeadline: "Built for the parent facing a 2-week wait, the care coordinator drowning in manual screening, and the operations lead building a platform that had to be right — not just fast.",
  peopleIntro:
    "Three people were experiencing the real cost of poor matching — a mother whose son couldn't sustain a caregiver relationship, a coordinator overwhelmed by manual vetting, and a CEO whose platform reputation rested on match quality.",
  personas: [
    {
      avatar: '💙',
      name: 'Kavita',
      age: 38,
      role: 'Mother of an autistic child · Bengaluru',
      quote:
        'Families of autistic children depend on caregiver consistency above nearly everything else. Each failed placement erases months of therapeutic progress and forces children through a disorienting adjustment process all over again — making the quality of the first match critical.',
      painTag: '💔 Poor matches disrupting therapy continuity for vulnerable children',
    },
    {
      avatar: '🗂️',
      name: 'Anjali',
      age: 29,
      role: 'Caregiver Coordinator · HireForCare HQ',
      quote:
        'Caregiver coordinators working through manual matching processes spent weeks per placement — reading profiles, verifying qualifications, calling references, and running background checks — with no reliable way to predict whether the final match would hold long-term.',
      painTag: '⏳ 2-3 weeks manual screening process for every placement',
    },
    {
      avatar: '🚀',
      name: 'Vikram',
      age: 40,
      role: 'CEO · HireForCare',
      quote:
        'Platforms built on caregiver matching rise or fall on the quality of those matches. Failed placements erode family trust and drive caregiver churn — making speed an insufficient goal if the underlying match factors are not rooted in what actually predicts long-term success.',
      painTag: '📉 Match failure rate impacting platform trust and caregiver retention',
    },
  ],

  challengeHeadline: "HireForCare's 2–3 week caregiver screening process was too slow for families in urgent need.",
  challengeParagraphs: [
    "Special-needs caregiving requires a fundamentally different matching model than most professional placement contexts. Kavita's son doesn't just need a qualified ABA therapist — he needs one with the patience for his specific communication style, the ability to work within her family's cultural context, scheduling availability that matches his school routine, and a personality that settles him rather than unsettles him. These factors don't fit into a database query. They require understanding.",
    "The manual matching process at HireForCare was exhaustive but imperfect — coordinators like Anjali were making subjective judgements based on incomplete information, spending weeks on each placement. And even after careful vetting, match failures were common enough that Vikram's platform faced a trust challenge. The AI needed to assess both the structured requirements and the soft factors that actually determined whether a placement would last.",
  ],
  challengeTension:
    "In special-needs caregiving, a wrong match doesn't just waste time — it sets a child back and fractures the trust that made a family willing to try in the first place.",
  challengeMetrics: [
    { name: 'Manual screening time per placement', value: '2-3 weeks', barPercent: 85, barStyle: 'gold' },
    { name: 'Soft-factor matching capability', value: 'Subjective and incomplete', barPercent: 88, barStyle: 'gold' },
    { name: 'Match quality and long-term retention', value: 'Below platform standard', barPercent: 82, barStyle: 'gold' },
    { name: 'Scalability of coordinator-led matching', value: 'Headcount-constrained', barPercent: 80, barStyle: 'soft' },
    { name: 'Platform trust from match failure rate', value: 'At risk', barPercent: 85, barStyle: 'gold' },
  ],

  approachHeadline: "ML matching across 50+ factors, NLP for soft requirements, automated screening with continuous learning — HIPAA-compliant.",
  approachIntro:
    "The matching system was built to find what Kavita couldn't articulate, automate what Anjali had to do manually, and improve every time Vikram's platform produces a successful long-term placement.",
  approachCards: [
    {
      icon: '🎯',
      title: 'Multi-Factor ML Matching Algorithm',
      description:
        "Developed machine learning models analyzing 50+ variables — medical qualifications, therapy specializations, personality assessments, cultural backgrounds, scheduling, and geographic proximity — to generate compatibility scores that predict match success.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🗣️',
      title: 'Natural Language Processing for Soft Requirements',
      description:
        "Implemented NLP to interpret family requests and caregiver profiles for requirements like 'patient with meltdowns' or 'prefers gentle communication style' — the nuanced factors Kavita can describe but a structured database cannot capture.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🔍',
      title: 'Automated Caregiver Screening',
      description:
        "Automated qualification verification, background check coordination, reference validation, and skill assessment — reducing Anjali's screening time from 2-3 weeks to 2-3 days without compromising the vetting thoroughness that protects children.",
      badge: 'Sustainability',
    },
    {
      icon: '📋',
      title: 'AI-Assisted Therapy Planning',
      description:
        "Built tools helping therapists develop customised intervention strategies based on child assessments, developmental goals, and evidence-based practices for autism, ADHD, and developmental delays.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🔄',
      title: 'Continuous Learning from Successful Matches',
      description:
        "Implemented feedback loops where long-term successful placements improve the algorithm's future recommendations — the matching system becomes more accurate with every Kavita whose son thrives with a placement.",
      badge: 'Sustainability',
    },
    {
      icon: '🤝',
      title: 'Coordinator-Augmented Workflow',
      description:
        "AI handles screening and initial matching — Anjali reviews and finalises recommendations with context the algorithm surfaces for her. Human judgement remains at the most important decision point, now informed by data.",
      badge: 'Resilience',
    },
  ],

  resultsHeadline: "85% faster screening, 90%+ match quality score, 2–3 week process reduced to 2–3 days.",
  resultCards: [
    {
      number: '85%',
      label: 'Faster caregiver screening — from 2-3 weeks to 2-3 days',
      humanNote: "Kavita accesses the right caregiver weeks faster than before",
    },
    {
      number: '90%+',
      label: 'Match quality score based on family satisfaction and placement duration',
      humanNote: "Kavita's son has a caregiver who stays — and therapy continuity that compounds",
    },
    {
      number: '↑↑',
      label: 'Platform trust through improved match retention and reduced caregiver turnover',
      humanNote: "Vikram's platform earns recommendations from families who got the right match",
    },
    {
      number: '∞',
      label: 'Continuously improving algorithm — every successful match improves the next one',
      humanNote: "The system gets smarter with every placement it gets right",
    },
  ],

  humanImpactCards: [
    {
      icon: '💙',
      title: 'Therapy Continuity Protected',
      description:
        "Kavita's son has a caregiver who stays because the match was right across every factor — qualifications, communication style, scheduling, and personality. Therapy progress compounds instead of resetting.",
    },
    {
      icon: '🗂️',
      title: 'Coordinator Effectiveness',
      description:
        "Anjali's work is transformed. The AI surfaces screening results and compatibility scores in days — she applies human judgement to the final placement decision with more information and less exhaustion.",
    },
    {
      icon: '🚀',
      title: 'Platform Trust Rebuilt',
      description:
        "Vikram's platform match quality is measurable, improving, and compounding. Families recommend HireForCare because the first match worked — and the algorithm that made it work gets better with every success.",
    },
    {
      icon: '📈',
      title: 'Scalable Matching Capacity',
      description:
        "The AI matching platform scales with the number of families and caregivers without proportional increases in coordinator headcount — the platform can grow without the quality ceiling that manual matching imposes.",
    },
  ],

  ctaBadge: "Let's build matching intelligence that improves lives",
  ctaHeadline: 'AI matching that gets better<br />every time it gets it right.',
  ctaSubline:
    "Multi-factor machine learning matching systems for complex human service platforms — where the quality of a match is measured in outcomes, not just compatibility scores.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default hireforCareAi
