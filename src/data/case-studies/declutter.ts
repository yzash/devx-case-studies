import { CaseStudy } from '@/types/case-study'

const declutter: CaseStudy = {
  slug: 'declutter',
  isPublished: true,
  client: 'Declutter Health',
  industry: 'Mental Health Technology',
  region: 'India',
  pillar: 'AI - Ops',
  year: 2025,
  type: 'AI Clinical Video Analysis Platform',
  pm: 'Astha',
  accent: '#4a2d7a',
  accentSoft: 'rgba(74,45,122,0.08)',
  accentLight: '#6b42b0',

  eyebrow: 'AI - Ops · Clinical Technology · 2025',
  headline: "Automating Clinical Workflows: AI Video Analysis for <em>Declutter Health</em>'s Therapy Platform",
  subheadline:
    "AI that helps psychiatrists do what only humans can — by handling everything else.",
  heroMeta: [
    { label: 'Client', value: 'Declutter Health' },
    { label: 'Impact Pillar', value: 'AI - Ops' },
  ],

  brandIntro: [
    "Declutter Health is an innovative mental health platform connecting patients with psychiatrists through structured digital therapy sessions. In a discipline where the quality of clinical documentation directly affects the quality of care, the manual work of post-session documentation was creating a hidden tax on every practitioner — taking time from therapy and reducing the depth of clinical insight available for treatment decisions.",
    "We built an AI-powered video analysis system that transforms therapy session recordings into comprehensive clinical reports automatically — generating medical-grade summaries, emotional timelines, speech pattern analysis, and accurate transcriptions in minutes. The result is psychiatrists who can see more patients, document more accurately, and track patient progress with quantitative precision that manual note-taking could never provide.",
  ],
  brandTags: ['Mental Health', 'AI', 'Amazon Bedrock', 'MediaPipe', 'Clinical AI', 'HIPAA', 'India'],
  brandStats: [
    { name: 'AI Stack', value: 'Amazon Bedrock · Google MediaPipe · Amazon Transcribe' },
    { name: 'Processing Time', value: '2-3 Minutes Per Session' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Clinical Documentation Automation & Quantitative Insight' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people experienced the limitations of manual clinical documentation differently — a psychiatrist losing time, a patient losing depth of care, and a founder facing a scalability ceiling.",
  personas: [
    {
      avatar: '🩺',
      name: 'Dr. Meera',
      age: 41,
      role: 'Psychiatrist · Declutter Health',
      quote:
        "Psychiatrists spent 20-30 minutes after every session writing notes from memory before they could see the next patient. Exact emotional moments, specific phrases, and subtle speech changes were consistently lost in reconstruction — and documentation fatigue accumulated across the day.",
      painTag: '📋 20-30 minutes of manual notes after every session',
    },
    {
      avatar: '💭',
      name: 'Rohan',
      age: 28,
      role: 'Therapy patient · Mumbai',
      quote:
        "Therapy patients received subjective impressions of progress rather than quantitative data showing how their emotional patterns had actually changed. The note-taking demands on psychiatrists also diverted attention away from the patient during the session itself.",
      painTag: '📊 No quantitative tracking of emotional progress',
    },
    {
      avatar: '🚀',
      name: 'Nandita',
      age: 35,
      role: 'Co-Founder · Declutter Health',
      quote:
        "Therapy platform founders faced a hard throughput ceiling: 30 minutes of post-session documentation per appointment meant that growing patient volume came directly at the cost of practitioner wellbeing. Scaling the platform without solving documentation was not viable.",
      painTag: '📈 Documentation overhead limiting patient throughput',
    },
  ],

  challengeParagraphs: [
    "The gap between what happened in a therapy session and what ended up in clinical notes was not a minor accuracy problem — it was a systematic loss of clinical data. Dr. Meera couldn't simultaneously conduct therapy and capture micro-expressions, speech rhythm changes, precise timestamps of emotional shifts, or exact patient phrasing. The notes she wrote were reconstructions, not recordings — and reconstructions lose the detail that drives treatment accuracy.",
    "For Nandita's platform, this wasn't just a quality issue — it was a scalability constraint. Every hour of therapy required additional documentation time that the platform's growth model couldn't sustain indefinitely. The solution needed to eliminate documentation time entirely while improving documentation quality — capturing what manual note-taking couldn't, automatically.",
  ],
  challengeTension:
    "The most important part of therapy happens in real time. The documentation has to happen without stealing any of it.",
  challengeMetrics: [
    { name: 'Post-session documentation time', value: '20-30 minutes per session', barPercent: 88, barStyle: 'gold' },
    { name: 'Micro-expression and emotional data capture', value: 'Impossible manually', barPercent: 92, barStyle: 'gold' },
    { name: 'Speech pattern and prosody tracking', value: 'Subjective only', barPercent: 85, barStyle: 'gold' },
    { name: 'Patient progress quantification', value: 'Absent', barPercent: 82, barStyle: 'soft' },
    { name: 'Session throughput ceiling', value: 'Documentation-constrained', barPercent: 80, barStyle: 'soft' },
  ],

  approachIntro:
    "Every component was built around a single principle: capture what Dr. Meera cannot capture alone, so she can focus entirely on the patient in front of her.",
  approachCards: [
    {
      icon: '📄',
      title: 'Automated Clinical Summary Generation',
      description:
        "Built an AI system using Amazon Bedrock that analyzes session videos and generates 'Client Summary' and 'Framework Summary' reports in medical-grade format — structured around psychiatric frameworks including CBT and DBT.",
      badge: 'Human-Centricity',
    },
    {
      icon: '😊',
      title: 'Real-Time Emotion & Face Tracking',
      description:
        "Deployed Google MediaPipe to track 478 facial landmarks throughout each session — Dr. Meera gets timestamped emotional data showing exactly when Rohan showed stress, engagement, or emotional shifts.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🎙️',
      title: 'Speaker-Aware Automatic Transcription',
      description:
        "Implemented Amazon Transcribe with speaker diarization to create accurate, labeled transcripts — doctor and patient dialogue identified separately for easy review and quote extraction.",
      badge: 'Sustainability',
    },
    {
      icon: '📊',
      title: 'Speech Pattern & Prosody Analysis',
      description:
        "Integrated prosody analysis measuring speech velocity, volume variations, and rhythm patterns — quantifying what Dr. Meera could previously only describe subjectively, giving Rohan trackable progress data.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🔒',
      title: 'HIPAA-Compliant Secure Portal',
      description:
        "Built a secure, encrypted web portal for session upload and report delivery — all data processed in compliance with healthcare privacy regulations, with Word/PDF reports available within minutes of upload.",
      badge: 'Resilience',
    },
    {
      icon: '⚡',
      title: 'Sub-3-Minute Processing Pipeline',
      description:
        "Optimised the full analysis pipeline — transcription, emotion tracking, speech analysis, and report generation — to complete within 2-3 minutes of a 5-minute session upload.",
      badge: 'Resilience',
    },
  ],

  resultCards: [
    {
      number: '2–3 min',
      label: 'Processing time for a full clinical report per session — down from 20-30 minutes manual',
      humanNote: "Dr. Meera sees her next patient with documentation already complete",
    },
    {
      number: '<1%',
      label: 'Error rate in transcription, face detection, and clinical summary generation',
      humanNote: "Rohan's clinical record is accurate — not a best-effort reconstruction",
    },
    {
      number: '$0.15',
      label: 'Cloud processing cost per session',
      humanNote: "Nandita's cost model supports scaling to thousands of sessions",
    },
    {
      number: '✓',
      label: 'Quantitative emotional data — timelines, charts, and speech graphs previously impossible',
      humanNote: 'Progress tracking that was never available before is now the standard',
    },
  ],

  humanImpactCards: [
    {
      icon: '🩺',
      title: 'Practitioner Freedom',
      description:
        "Dr. Meera conducts therapy with complete focus on the patient. The documentation happens automatically — more accurately than manual notes could ever be, and ready before she opens the next patient's file.",
    },
    {
      icon: '💭',
      title: 'Patient Understanding',
      description:
        "Rohan's psychiatrist now has access to objective emotional data across sessions — showing not just what was said but how engagement, stress, and speech patterns changed over time. Treatment adjustments are evidence-based.",
    },
    {
      icon: '🚀',
      title: 'Platform Scale Unlocked',
      description:
        "Nandita's documentation ceiling is gone. Psychiatrists can see more patients, the platform can onboard more practitioners, and the quality of clinical insight improves with every session — not despite scale, but because of it.",
    },
    {
      icon: '📋',
      title: 'Clinical Data Completeness',
      description:
        "The data that was previously lost between session and note is now permanently captured. Micro-expressions, speech rhythms, emotional timestamps — details that used to disappear from memory now exist in every patient record.",
    },
  ],

  ctaBadge: "Let's automate the work that pulls practitioners away from patients",
  ctaHeadline: 'AI that does the documentation<br />so clinicians can do the healing.',
  ctaSubline:
    "Clinical AI systems that capture what human note-taking cannot — giving practitioners more time, better data, and the ability to focus fully on the people who need them.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default declutter
