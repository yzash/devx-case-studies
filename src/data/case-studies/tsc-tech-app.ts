import { CaseStudy } from '@/types/case-study'

const tscTechApp: CaseStudy = {
  slug: 'tsc-tech-app',
  isPublished: true,
  client: 'The Sleep Company',
  industry: 'D2C Sleep & Furniture',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'Field Operations App',
  pm: 'Prerna Jain',
  accent: '#3d5a80',
  accentSoft: 'rgba(61,90,128,0.08)',
  accentLight: '#567aad',

  eyebrow: 'Customer Experience · Field Operations · Development · 2025',
  headline: "From Spreadsheets to Smart Routing: Automating Field Operations for <em>The Sleep Company</em>",
  subheadline:
    "When your field team runs on spreadsheets, someone always gets the wrong address.",
  heroMeta: [
    { label: 'Client', value: 'The Sleep Company' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "The Sleep Company is India's leading D2C sleep brand, built on patented SmartGRID technology across mattresses, chairs, and ergonomic furniture. With a rapidly growing customer base and pan-India delivery coverage, the brand's after-sales operations — installation, maintenance, and warranty service — had become as critical to customer experience as the product itself.",
    "We built a dual-interface field operations system: an admin panel for the customer experience team to manage job allocation, and a mobile app for field technicians to receive optimized routes, update job status in real time, and communicate service needs back to operations. Manual spreadsheet management was replaced by intelligent automation — and the operations team gained complete visibility into every service job across India.",
  ],
  brandTags: ['Field Operations', 'Route Optimization', 'Google Maps API', 'Mobile App', 'Job Automation', 'D2C', 'India'],
  brandStats: [
    { name: 'Architecture', value: 'Admin Panel + Mobile App (Dual Interface)' },
    { name: 'Routing', value: 'Google-Powered Route Optimization' },
    { name: 'Region', value: 'India (Pan-India Service Coverage)' },
    { name: 'Focus', value: 'Job Automation, Routing Efficiency & Real-Time Visibility' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people were living with the consequences of field operations running on spreadsheets — a customer waiting without updates, a technician with an inefficient route, and an ops manager without visibility into any of it.",
  personas: [
    {
      avatar: '🛏️',
      name: 'Anjali',
      age: 35,
      role: 'Customer · warranty service requested for SmartGRID mattress',
      quote:
        "I raised a warranty service request and then heard nothing for three days. I had no idea if a technician was coming, when, or what they'd found on their first visit. For a product I paid this much for, the after-sales communication has to match the pre-sales experience.",
      painTag: '📞 Customers waiting days with no service status visibility or communication',
    },
    {
      avatar: '🔧',
      name: 'Ravi',
      age: 29,
      role: 'Field Technician · The Sleep Company Service Team',
      quote:
        "Every morning I got a list of jobs on WhatsApp with addresses. I planned my own route, which was always inefficient. I sometimes drove past a job location to reach another one further away. Half my day was travel when it could have been service.",
      painTag: '🗺️ Technicians planning unoptimized routes manually — wasted travel time and fuel',
    },
    {
      avatar: '📋',
      name: 'Priyanka',
      age: 32,
      role: 'Customer Experience Ops Manager · The Sleep Company',
      quote:
        "Managing fifty technicians across India through WhatsApp and spreadsheets was chaos. Assigning jobs took hours. Tracking completions required calling technicians individually. I couldn't scale. I couldn't report. I couldn't see what was happening.",
      painTag: '🗂️ Ops manager allocating jobs and tracking field teams with no visibility',
    },
  ],

  challengeParagraphs: [
    "The Sleep Company's customer experience team was manually assigning installation, maintenance, and warranty jobs to technicians using spreadsheets and WhatsApp — a process that couldn't scale as customer volume grew. Priyanka spent hours each day on allocation that should have been automated. And the manual process created coverage gaps: technicians in the wrong areas, jobs assigned without proximity logic, and no systematic way to know when a service request had actually been completed.",
    "For Ravi, the absence of route optimization meant a significant portion of every working day was wasted in transit. Jobs were sequenced in the order they arrived, not in the order that minimized travel. And when he encountered an issue — a part that needed replacement, a job that required escalation — the communication back to Priyanka's team was informal and unreliable. Anjali waited for updates that the system had no mechanism to generate.",
  ],
  challengeTension:
    "A premium brand whose customer experience ended at delivery — and whose after-sales operations couldn't support the service promise the brand had made.",
  challengeMetrics: [
    { name: 'Job allocation process', value: 'Fully manual — spreadsheets and WhatsApp', barPercent: 92, barStyle: 'gold' },
    { name: 'Technician route efficiency', value: 'Self-planned — no optimization', barPercent: 88, barStyle: 'gold' },
    { name: 'Real-time job status visibility', value: 'Zero — no live tracking', barPercent: 90, barStyle: 'gold' },
    { name: 'Customer communication during service', value: 'Absent — no status updates', barPercent: 85, barStyle: 'gold' },
    { name: 'Ops reporting and accountability', value: 'Delayed — manual consolidation', barPercent: 80, barStyle: 'soft' },
  ],

  approachIntro:
    "The system was built to give Anjali proactive service updates, give Ravi an optimized day, and give Priyanka complete visibility into everything happening in the field.",
  approachCards: [
    {
      icon: '📱',
      title: 'Dual-Interface System Architecture',
      description:
        "Built an admin panel for Priyanka's customer experience team and a mobile app for field technicians — seamless two-way communication and complete operational control across both interfaces.",
      badge: 'Resilience',
    },
    {
      icon: '🎯',
      title: 'Intelligent Location-Based Job Allocation',
      description:
        "Developed automatic job assignment matching technicians within 10-15km radius based on location — eliminating manual allocation and ensuring balanced workload distribution across India's service regions.",
      badge: 'Sustainability',
    },
    {
      icon: '🗺️',
      title: 'Google-Powered Route Optimization',
      description:
        "Integrated Google routing algorithms to create optimized daily schedules for Ravi and his colleagues — jobs sequenced to minimize travel time and maximize daily job completion across service areas.",
      badge: 'Sustainability',
    },
    {
      icon: '📊',
      title: 'Real-Time Job Status Management',
      description:
        "Enabled technicians to update job status in real time from the mobile app — in-progress, completed, requires replacement, escalation — with complete job history visible instantly to Priyanka's operations team.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🔔',
      title: 'Customer Communication Automation',
      description:
        "Built automated customer notifications triggered by job status updates — Anjali receives confirmation when her technician is assigned, en route, and when service is completed, without any manual outreach.",
      badge: 'Human-Centricity',
    },
    {
      icon: '📋',
      title: 'Parts & Escalation Reporting',
      description:
        "Enabled technicians to report part requirements, escalations, and service notes directly from the mobile app — operational intelligence flows back to HQ in real time rather than through informal channels.",
      badge: 'Resilience',
    },
  ],

  resultCards: [
    {
      number: '100%',
      label: 'Elimination of manual job allocation — spreadsheet management fully automated',
      humanNote: "Priyanka focuses on strategic ops work, not daily job assignment",
    },
    {
      number: '30–40%',
      label: 'Routing efficiency improvement through Google-powered route optimization',
      humanNote: "Ravi completes more jobs per day with less time and fuel spent in transit",
    },
    {
      number: '↑↑',
      label: 'Real-time operational visibility — all technician locations and job statuses live',
      humanNote: "Priyanka monitors field operations without calling a single technician",
    },
    {
      number: '✓',
      label: 'Automated smart job assignment — location-based allocation with workload balancing',
      humanNote: "Anjali knows her technician is assigned and on the way — no chasing required",
    },
  ],

  humanImpactCards: [
    {
      icon: '🛏️',
      title: 'Service That Matches the Product',
      description:
        "Anjali knows her warranty service is being handled — she receives automated updates when her job is assigned, when the technician is en route, and when service is complete. The after-sales experience matches the premium purchase experience.",
    },
    {
      icon: '🔧',
      title: 'An Efficient Field Day',
      description:
        "Ravi starts each day with an optimized route on his phone — jobs sequenced by proximity, updated in real time, with simple status updates replacing informal WhatsApp messages. More jobs completed, less time wasted.",
    },
    {
      icon: '📋',
      title: 'Complete Operational Control',
      description:
        "Priyanka manages fifty technicians across India from a single dashboard — job allocations are automatic, statuses are live, and escalations surface immediately. The chaos of spreadsheet operations is replaced by operational clarity.",
    },
    {
      icon: '📈',
      title: 'Service Operations That Scale',
      description:
        "As The Sleep Company's customer base grows, the field operations system scales with it — location-based allocation handles new regions automatically, and reporting gives leadership the visibility to make proactive decisions.",
    },
  ],

  ctaBadge: "Let's automate your field operations",
  ctaHeadline: "Field operations that run on intelligence,<br />not spreadsheets.",
  ctaSubline:
    "Location-based job allocation, route optimization, and real-time visibility for D2C brands with national service operations — from first assignment to service completion.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default tscTechApp
