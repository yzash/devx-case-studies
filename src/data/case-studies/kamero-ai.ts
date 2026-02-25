import { CaseStudy } from '@/types/case-study'

const kameroAi: CaseStudy = {
  slug: 'kamero-ai',
  isPublished: true,
  client: 'Kamero',
  industry: 'Event Technology / Photography',
  region: 'India / Global',
  pillar: 'AI - Ops',
  year: 2025,
  type: 'AI Facial Recognition / Real-Time Photo Delivery',
  pm: 'Priyanshu',
  accent: '#4a2d7a',
  accentSoft: 'rgba(74,45,122,0.08)',
  accentLight: '#6b42b0',

  eyebrow: 'AI - Ops · Computer Vision · Event Technology · 2025',
  headline: "Revolutionizing Event Photography: Real-Time AI Photo Delivery for <em>Kamero</em>",
  subheadline:
    "Millions of images. Sub-3-second delivery to every attendee. The future of event photography — delivered.",
  heroMeta: [
    { label: 'Client', value: 'Kamero' },
    { label: 'Impact Pillar', value: 'AI - Ops' },
  ],

  brandHeadline: "You're in 50,000 photos.<br />Find yours in under 3 seconds.",
  brandIntro: [
    "Kamero is a global event photography platform serving 50,000+ events including weddings, corporate conferences, sports tournaments, and award ceremonies. The platform sits at the intersection of AI infrastructure and human memory — helping event organizers deliver a personalized photo experience that transforms how guests remember and share the occasions that matter most.",
    "We built the AI-powered facial recognition and delivery infrastructure at the heart of Kamero's platform: a system that matches event photographs to individual attendees in real time, delivering personalized photo galleries to guests' phones within seconds of a photographer pressing the shutter — at event scale, globally.",
  ],
  brandTags: ['Event Technology', 'AI', 'AWS Rekognition', 'Facial Recognition', 'Real-Time Delivery', 'Global Scale'],
  brandStats: [
    { name: 'AI Stack', value: 'AWS Rekognition + Custom Deep Learning Models' },
    { name: 'Scale', value: '50,000+ Events · Millions of Daily Photos' },
    { name: 'Delivery', value: 'Sub-3-Second Photo Matching & Delivery' },
    { name: 'Accuracy', value: '95%+ Facial Recognition' },
    { name: 'Year', value: '2025' },
  ],

  peopleHeadline: "Built for the wedding guest who missed their own photos, the photographer managing 50,000-image events, and the platform founder scaling to global events simultaneously.",
  peopleIntro:
    "Three people experienced the old world of event photography — and the new one made possible by AI — from completely different vantage points.",
  personas: [
    {
      avatar: '📸',
      name: 'Ananya',
      age: 27,
      role: 'Wedding guest · Hyderabad',
      quote:
        'Wedding guests routinely waited two weeks for event photos to be delivered, then faced thousands of images to scroll through just to find the handful that included them. By the time photos arrived, the moment had long passed.',
      painTag: '⏳ Weeks waiting for photos that should arrive instantly',
    },
    {
      avatar: '🎬',
      name: 'Raj',
      age: 34,
      role: 'Event photographer · Mumbai',
      quote:
        'Event photographers finishing a large wedding face thousands of images to sort, cull, and organize before any delivery is possible. Manually identifying which photos contain which guest — the prerequisite for personalized albums — is operationally impossible at that volume and has always been the delivery bottleneck.',
      painTag: '📁 Manual sorting of thousands of images is impossible at scale',
    },
    {
      avatar: '🚀',
      name: 'Vikram',
      age: 38,
      role: 'Founder · Kamero',
      quote:
        'Event photography platform founders recognized that sub-3-second delivery — a guest receiving photos while still at the venue — was the defining experience that separated commodity coverage from a premium product. That outcome was only achievable if AI was built into the infrastructure from the ground up.',
      painTag: '⚡ Sub-3-second delivery is the product differentiator to build',
    },
  ],

  challengeHeadline: "Kamero's event photographers were capturing thousands of faces — and guests waited days to find their own.",
  challengeParagraphs: [
    "The traditional event photography workflow was sequential where it needed to be simultaneous. Photos were taken, then culled, then sorted, then edited, then organized by person, then delivered — a pipeline with days or weeks between capture and receipt. The manual bottleneck in this pipeline was identification: with thousands of attendees and tens of thousands of photos, manually matching images to individuals was operationally impossible at scale.",
    "The technical challenge was formidable: building facial recognition infrastructure capable of operating at real-time speeds across 50,000+ concurrent global events, with 95%+ accuracy under real-world conditions — varying lighting, group shots, partially obscured faces, different angles — while maintaining privacy compliance across jurisdictions and delivering to mobile devices in under 3 seconds from photographer upload.",
  ],
  challengeTension:
    "The moment between a photo being taken and an attendee sharing it on social media used to be measured in weeks. The technology existed to measure it in seconds.",
  challengeMetrics: [
    { name: 'Photo-to-attendee delivery time', value: 'Days to weeks', barPercent: 92, barStyle: 'gold' },
    { name: 'Manual photo sorting feasibility at scale', value: 'Impossible', barPercent: 95, barStyle: 'gold' },
    { name: 'Facial recognition accuracy in real-world conditions', value: 'Target: 95%+', barPercent: 88, barStyle: 'soft' },
    { name: 'Concurrent event processing scale', value: '50,000+ globally', barPercent: 85, barStyle: 'soft' },
    { name: 'Privacy compliance across global markets', value: 'Critical requirement', barPercent: 82, barStyle: 'gold' },
  ],

  approachHeadline: "AWS Rekognition plus custom deep learning — GDPR-compliant facial recognition with sub-3-second delivery.",
  approachIntro:
    "Every architectural decision was made around Ananya's 3-second expectation, Raj's sorting reality, and Vikram's product vision of the 'wow' moment.",
  approachCards: [
    {
      icon: '🤖',
      title: 'Real-Time Facial Recognition Infrastructure',
      description:
        "Deployed AWS Rekognition combined with custom deep learning models achieving sub-3-second photo matching from photographer upload to attendee notification — Ananya's photo arrives before she's left the dance floor.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🏗️',
      title: 'Massive-Scale Parallel Processing',
      description:
        "Architected infrastructure handling 50,000+ concurrent events globally with millions of daily photo uploads. Auto-scaling compute clusters process image batches in parallel — consistent performance at any event scale.",
      badge: 'Resilience',
    },
    {
      icon: '🎯',
      title: '95%+ Accuracy Under Real-World Conditions',
      description:
        "Trained recognition models on millions of event photographs to handle sunglasses, hats, group shots, varied lighting, and profile views — Ananya receives her photos without Raj's photos in her gallery.",
      badge: 'Resilience',
    },
    {
      icon: '📱',
      title: 'Instant Personalized Mobile Delivery',
      description:
        "Built push notification delivery system sending personalized photo galleries to attendees' smartphones within seconds — a curated gallery of only their photos, ready to share before the event ends.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🔒',
      title: 'Privacy-First Architecture',
      description:
        "Implemented opt-in facial recognition, data deletion controls, and GDPR-compliant privacy architecture — attendees control their data while experiencing the magic of instant personal delivery.",
      badge: 'Sustainability',
    },
    {
      icon: '⚡',
      title: 'Automated Sorting Pipeline',
      description:
        "Eliminated Raj's manual identification and sorting entirely — the AI processes every image at upload, matches faces to registered attendees, and organizes galleries automatically across all event sizes.",
      badge: 'Sustainability',
    },
  ],

  resultsHeadline: "Sub-3-second photo delivery, 50,000+ concurrent global events supported, 95%+ facial recognition accuracy.",
  resultCards: [
    {
      number: '<3 sec',
      label: 'Photo delivery time from photographer upload to attendee notification',
      humanNote: "Ananya sees herself on the dance floor while she's still dancing",
    },
    {
      number: '50,000+',
      label: 'Concurrent global events supported without performance degradation',
      humanNote: "Vikram's platform handles stadium weddings and intimate gatherings simultaneously",
    },
    {
      number: '95%+',
      label: 'Facial recognition accuracy across real-world event conditions',
      humanNote: "Raj's workflow is automated — he focuses on photography, not sorting",
    },
    {
      number: '✓',
      label: 'Privacy-compliant architecture across global markets',
      humanNote: 'Every attendee controls their data while experiencing instant delivery',
    },
  ],

  humanImpactCards: [
    {
      icon: '📸',
      title: 'The "Wow" Moment Delivered',
      description:
        "Ananya receives a push notification with her personalized photo gallery while she's still at the venue — still in the outfit, still in the moment. She shares before she leaves, and the event lives beyond its hours.",
    },
    {
      icon: '🎬',
      title: 'Photographer Workflow Transformed',
      description:
        "Raj shoots the event and uploads. The AI handles everything after — sorting, matching, organizing, delivering. The post-production bottleneck that made large-scale personalized delivery impossible is eliminated.",
    },
    {
      icon: '🚀',
      title: 'Product Vision Realized',
      description:
        "Vikram's platform delivers the experience that premium event photography becomes when AI is the infrastructure. Real-time personalized delivery is not a feature — it is the product.",
    },
    {
      icon: '🌍',
      title: 'Global Scale Without Degradation',
      description:
        "Whether it's a 50-person corporate meeting in Delhi or a 2,000-person stadium wedding in Mumbai, the infrastructure delivers identical performance. Scale is solved — not managed.",
    },
  ],

  ctaBadge: "Let's build AI that creates real-time magic",
  ctaHeadline: 'Sub-3-second delivery.<br />50,000 events. Zero compromise.',
  ctaSubline:
    "Real-time AI infrastructure for event photography platforms — from facial recognition and parallel processing to instant mobile delivery at global scale.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default kameroAi
