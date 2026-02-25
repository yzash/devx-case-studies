import { CaseStudy } from '@/types/case-study'

const hireforCareInfra: CaseStudy = {
  slug: 'hireforcare-infra',
  isPublished: true,
  client: 'HireForCare',
  industry: 'Healthcare Technology / Special Needs',
  region: 'India',
  pillar: 'Enterprise Architecture',
  year: 2025,
  type: 'HIPAA-Compliant Cloud Infrastructure',
  pm: 'Priyanshu',
  accent: '#1a7a5e',
  accentSoft: 'rgba(26,122,94,0.08)',
  accentLight: '#259e79',

  eyebrow: 'Enterprise Architecture · Healthcare Infrastructure · 2025',
  headline: "Building HIPAA-Compliant Foundations: Secure Cloud Infrastructure for <em>HireForCare</em>",
  subheadline:
    'Healthcare infrastructure that is compliant by design, not by accident — protecting the data of children who depend on it.',
  heroMeta: [
    { label: 'Client', value: 'HireForCare' },
    { label: 'Impact Pillar', value: 'Enterprise Architecture' },
  ],

  brandHeadline: "Healthcare data demands infrastructure<br />that treats compliance as non-negotiable.",
  brandIntro: [
    "HireForCare is a specialized healthcare platform connecting families of special-needs children with trained caregivers and therapists. The platform handles some of the most sensitive personal data in existence: patient medical records, therapy session recordings, caregiver background checks, and payment information for families in uniquely vulnerable situations.",
    "We architected the AWS infrastructure foundation that makes HireForCare's operations possible — a HIPAA-compliant, enterprise-grade security architecture built from day one for the protection standards healthcare applications require and the scale growth demands.",
  ],
  brandTags: ['Healthcare Technology', 'HIPAA Compliance', 'AWS', 'Special Needs', 'Patient Data Security', 'Cloud Architecture'],
  brandStats: [
    { name: 'Compliance', value: 'HIPAA-Compliant Architecture' },
    { name: 'AWS Services', value: 'KMS · WAF · GuardDuty · CloudTrail · Multi-AZ RDS' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Patient Data Security, Compliance & Scalable Growth Foundation' },
    { name: 'Year', value: '2025' },
  ],

  peopleHeadline: "Built for the family trusting the platform with sensitive health information, the compliance lead facing audit risk, and the engineering team scaling to 10,000+ concurrent users.",
  peopleIntro:
    "Three people needed this infrastructure to work flawlessly before HireForCare could serve a single family — a mother whose child's medical data was on the platform, a therapist who needed to trust where session recordings lived, and a CTO building for both security and scale.",
  personas: [
    {
      avatar: '💙',
      name: 'Priya',
      age: 36,
      role: 'Mother of a special-needs child · Pune',
      quote:
        'Parents of special-needs children entrust healthcare platforms with some of the most sensitive data imaginable — therapy records, diagnoses, and treatment histories. That level of exposure demands infrastructure that treats data protection as a non-negotiable foundation, not an afterthought.',
      painTag: '🔒 Patient data for vulnerable children requires maximum protection',
    },
    {
      avatar: '🧠',
      name: 'Dr. Rahul',
      age: 38,
      role: 'Speech therapist · HireForCare',
      quote:
        'Therapists uploading session videos and patient notes to a platform are handling clinical records — materials that carry professional obligations around encryption, access control, and healthcare data compliance. Storing those files anywhere short of that standard is not an acceptable option.',
      painTag: '📹 Clinical session recordings require healthcare-grade data protection',
    },
    {
      avatar: '⚙️',
      name: 'Aditya',
      age: 33,
      role: 'CTO · HireForCare',
      quote:
        'CTOs building healthcare platforms for vulnerable populations cannot treat security as a phase-two concern. Every architectural decision from the outset needs to embed protection as a first principle — while also being designed to scale as the platform grows.',
      painTag: '🏗️ HIPAA compliance and scalability required simultaneously from day one',
    },
  ],

  challengeHeadline: "HireForCare's sensitive caregiving platform needed HIPAA compliance built into the architecture — not bolted on.",
  challengeParagraphs: [
    "HIPAA compliance in healthcare applications is not a checklist — it is an architectural posture. Every data store, every transmission path, every access control, and every audit trail needs to be designed with patient data protection as the primary constraint. For HireForCare, handling therapy session videos, medical records, and caregiver background information for children with special needs, the failure consequences were not abstract: a breach would affect families and children already navigating extraordinary challenges.",
    "Aditya needed an infrastructure that was compliant immediately, operational now, and capable of scaling to tens of thousands of users without architectural rework. Building HIPAA compliance retroactively is significantly more expensive and disruptive than building it correctly from the start — the infrastructure had to be engineered correctly once.",
  ],
  challengeTension:
    "You cannot retrofit HIPAA compliance onto healthcare infrastructure that was built without it. Security by design is the only acceptable approach.",
  challengeMetrics: [
    { name: 'Patient data sensitivity level', value: 'Maximum — healthcare for vulnerable children', barPercent: 95, barStyle: 'gold' },
    { name: 'HIPAA compliance requirement', value: 'Full — from day one', barPercent: 92, barStyle: 'gold' },
    { name: 'Therapy session video data protection', value: 'Clinical record standard required', barPercent: 90, barStyle: 'gold' },
    { name: 'Scalability from launch to 10,000+ users', value: 'Must not require rebuild', barPercent: 82, barStyle: 'soft' },
    { name: 'Breach consequence severity', value: 'Catastrophic — protecting vulnerable children', barPercent: 98, barStyle: 'gold' },
  ],

  approachHeadline: "HIPAA-compliant AWS architecture — KMS, WAF, VPC isolation, GuardDuty, CloudTrail, multi-AZ disaster recovery.",
  approachIntro:
    "Every infrastructure decision was held to a single standard: would Priya trust her child's data here? If the answer wasn't an unambiguous yes, we built it differently.",
  approachCards: [
    {
      icon: '🏛️',
      title: 'HIPAA-Compliant Architecture Design',
      description:
        "Designed full HIPAA compliance across all AWS services with encrypted data at rest and in transit, comprehensive audit logging, access controls, and Business Associate Agreement documentation from day one.",
      badge: 'Resilience',
    },
    {
      icon: '🛡️',
      title: 'Multi-Layer Defense-in-Depth Security',
      description:
        "Built defense-in-depth with AWS WAF, VPC isolation, Security Groups, Network ACLs, AWS Shield DDoS protection, and GuardDuty threat detection — protecting Dr. Rahul's session recordings at every infrastructure layer.",
      badge: 'Resilience',
    },
    {
      icon: '🔐',
      title: 'End-to-End Data Encryption via AWS KMS',
      description:
        "Implemented AWS KMS encryption for all sensitive data — patient records in RDS, session videos in S3, and real-time communications — encrypted at rest and in transit without exception.",
      badge: 'Resilience',
    },
    {
      icon: '👤',
      title: 'Least-Privilege Access Management',
      description:
        "Deployed AWS IAM with least-privilege policies, multi-factor authentication, role-based access control, and CloudTrail audit trails — ensuring only explicitly authorised personnel access Priya's data.",
      badge: 'Sustainability',
    },
    {
      icon: '🔄',
      title: 'Multi-AZ Disaster Recovery Architecture',
      description:
        "Architected automated backups, multi-AZ database deployments, and cross-region data replication — 99.99% uptime and rapid recovery ensuring the platform is never unavailable when families need it.",
      badge: 'Resilience',
    },
    {
      icon: '📈',
      title: 'Scalable to 10,000+ Users',
      description:
        "Designed auto-scaling groups, load balancers, and database read replicas enabling growth from hundreds to tens of thousands of users — without architectural changes or security posture compromise.",
      badge: 'Sustainability',
    },
  ],

  resultsHeadline: "100% HIPAA compliance, zero security incidents, 10,000+ concurrent users supported without incident.",
  resultCards: [
    {
      number: '100%',
      label: 'HIPAA compliance across all infrastructure with full documentation',
      humanNote: "Priya's son's data is protected to the standard healthcare law demands",
    },
    {
      number: '0',
      label: 'Security incidents or data breaches since platform launch',
      humanNote: "Dr. Rahul uploads session recordings knowing they are clinically protected",
    },
    {
      number: '10,000+',
      label: 'Concurrent users supported without performance or security compromise',
      humanNote: "Aditya scales the platform without rebuilding the security foundation",
    },
    {
      number: '✓',
      label: 'BAA documentation and regulatory compliance enabling healthcare market expansion',
      humanNote: 'Insurance reimbursements and regulated market growth unlocked from day one',
    },
  ],

  humanImpactCards: [
    {
      icon: '💙',
      title: 'Family Trust Earned',
      description:
        "Priya can use HireForCare with the confidence that her child's medical records, therapy history, and personal information are protected by architecture designed specifically for healthcare data — not adapted from a general-purpose cloud deployment.",
    },
    {
      icon: '🧠',
      title: 'Clinical Professional Confidence',
      description:
        "Dr. Rahul meets his professional obligations. Session recordings, patient notes, and therapeutic assessments are stored in an environment that satisfies the data protection standards his clinical practice requires.",
    },
    {
      icon: '⚙️',
      title: 'Growth Without Compromise',
      description:
        "Aditya built once, correctly. The HIPAA-compliant architecture scales to support the platform's growth without security trade-offs — every new family and practitioner is added to an infrastructure that was designed for them from the start.",
    },
    {
      icon: '🏛️',
      title: 'Regulatory Foundation for Market Expansion',
      description:
        "Full HIPAA compliance with BAA documentation enables HireForCare to pursue insurance reimbursements, institutional partnerships, and regulated market expansion — capabilities that depend entirely on the infrastructure foundation being correct.",
    },
  ],

  ctaBadge: "Let's build your healthcare infrastructure the right way",
  ctaHeadline: 'HIPAA compliance is not a feature.<br />It is the foundation.',
  ctaSubline:
    "Healthcare cloud infrastructure built with compliance, encryption, and access control as first principles — protecting patient data from the first line of architecture to the last.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default hireforCareInfra
