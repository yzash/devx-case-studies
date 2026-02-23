import { CaseStudy } from '@/types/case-study'

const fortytwolabs: CaseStudy = {
  slug: 'fortytwolabs',
  isPublished: true,
  client: 'FortyTwo Labs',
  industry: 'FinTech / Quantum-Safe Cryptography',
  region: 'India',
  pillar: 'Enterprise Architecture',
  year: 2025,
  type: 'Cloud Migration / Infrastructure Consolidation',
  pm: 'Astha',
  accent: '#1a4d6e',
  accentSoft: 'rgba(26,77,110,0.08)',
  accentLight: '#2e6d97',

  eyebrow: 'Enterprise Architecture · Cloud Migration · 2025',
  headline: "Securing Banking Infrastructure: Zero-Downtime Azure-to-AWS Migration for <em>FortyTwo Labs</em>",
  subheadline:
    'Zero downtime. Zero data loss. One complete cloud consolidation — protecting the cryptographic backbone of Indian banking.',
  heroMeta: [
    { label: 'Client', value: 'FortyTwo Labs' },
    { label: 'Impact Pillar', value: 'Enterprise Architecture' },
  ],

  brandIntro: [
    "FortyTwo Labs is a pioneer in quantum-safe cryptography and identity management, protecting real-time digital communications for major financial institutions including ICICI Bank and Yes Bank. In a category where security and availability are not features but existential requirements, the infrastructure underpinning these services had to be held to the same standard.",
    "FortyTwo Labs operated a fragmented hybrid infrastructure across Microsoft Azure, AWS, and on-premises servers — creating multi-cloud complexity, inconsistent security policies, and an environment that was difficult to scale. We executed a comprehensive cloud consolidation to a standardised AWS architecture, migrating all workloads with zero service interruption and establishing a unified security and operations posture that the banking sector demands.",
  ],
  brandTags: ['FinTech', 'Quantum Cryptography', 'AWS Migration', 'Azure', 'Banking Security', 'Cloud Consolidation', 'India'],
  brandStats: [
    { name: 'Migration', value: 'Azure + On-Prem → AWS (Unified)' },
    { name: 'AWS Services', value: 'MGN · RDS · VPC · WAF · GuardDuty · KMS' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Zero Downtime, Security Hardening & Cost Optimization' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people depended on this infrastructure holding together — a banking client whose transactions relied on it, a DevOps engineer fighting multi-cloud complexity daily, and a CTO whose cryptography innovation was being slowed by infrastructure debt.",
  personas: [
    {
      avatar: '🏦',
      name: 'Arjun',
      age: 44,
      role: 'IT Security Lead · ICICI Bank',
      quote:
        "We depend on FortyTwo Labs for quantum-safe cryptography on our live transaction infrastructure. Any interruption in their service is a direct risk to our operations. Their infrastructure stability is our infrastructure stability.",
      painTag: '🔐 Banking client uptime directly dependent on FortyTwo infrastructure',
    },
    {
      avatar: '⚙️',
      name: 'Priya',
      age: 29,
      role: 'Senior DevOps Engineer · FortyTwo Labs',
      quote:
        "Managing three different cloud environments with different tools, different monitoring, and different security policies is a daily operational nightmare. Inconsistencies creep in constantly and finding the source of any issue takes twice as long as it should.",
      painTag: '🌐 Multi-cloud complexity creating inconsistency and operational drag',
    },
    {
      avatar: '🧬',
      name: 'Dr. Kumar',
      age: 48,
      role: 'CTO · FortyTwo Labs',
      quote:
        "Our engineering team is world-class at quantum cryptography. But they're spending too much time on infrastructure management that should be invisible. We need a platform that enables the security work, not one that competes with it for engineering attention.",
      painTag: '🔬 Infrastructure complexity consuming cryptography engineering capacity',
    },
  ],

  challengeParagraphs: [
    "The multi-cloud complexity at FortyTwo Labs wasn't just operationally inconvenient — it was a security architecture risk. Inconsistent policies across Azure, AWS, and on-premises systems created gaps that couldn't be consistently monitored or governed. For an organisation protecting real-time banking communications, that inconsistency was unacceptable. Arjun's team at ICICI Bank expected the infrastructure protecting their transactions to have a security posture as rigorous as the cryptography running on top of it.",
    "The migration required handling heterogeneous workloads: Linux cryptography servers requiring disk-level migration via S3 and custom EBS volumes; Windows Active Directory servers requiring zero-data-loss migration via AWS MGN; self-hosted PostgreSQL and Oracle databases requiring transition to managed RDS; and the entire network security architecture needing a rebuild around VPC isolation, AWS WAF, GuardDuty threat detection, and Secrets Manager key protection.",
  ],
  challengeTension:
    "Migrating the infrastructure of a quantum cryptography platform protecting live banking transactions — where 'zero downtime' is a contractual minimum, not an aspiration.",
  challengeMetrics: [
    { name: 'Infrastructure fragmentation across cloud environments', value: 'Three environments, no consistency', barPercent: 90, barStyle: 'gold' },
    { name: 'Security policy governance gaps', value: 'Multi-cloud inconsistency', barPercent: 88, barStyle: 'gold' },
    { name: 'Banking client dependency on uptime', value: 'Zero tolerance for interruption', barPercent: 95, barStyle: 'gold' },
    { name: 'Linux server migration complexity', value: 'Custom disk-level approach required', barPercent: 82, barStyle: 'soft' },
    { name: 'Engineering time on infrastructure vs. cryptography', value: 'Imbalanced', barPercent: 78, barStyle: 'soft' },
  ],

  approachIntro:
    "The migration was planned so Arjun's banking operations never noticed it happened, Priya has a single environment to operate, and Dr. Kumar's team focuses on cryptography.",
  approachCards: [
    {
      icon: '🏗️',
      title: 'Infrastructure Consolidation Strategy',
      description:
        "Designed a phased migration consolidating Azure and on-premises workloads into a unified AWS environment — standardising tooling, monitoring, and governance so Priya manages one platform, not three.",
      badge: 'Sustainability',
    },
    {
      icon: '🐧',
      title: 'Linux Cryptography Server Migration',
      description:
        "Executed disk-level migrations for Linux-based cryptography servers by staging through Amazon S3 and creating custom EBS volumes — preserving data integrity across FortyTwo's most sensitive workloads.",
      badge: 'Resilience',
    },
    {
      icon: '🪟',
      title: 'Windows Active Directory via AWS MGN',
      description:
        "Utilised AWS Application Migration Service for Windows server migration with zero data loss — maintaining continuous operation of identity services that Arjun's banking clients depend on.",
      badge: 'Resilience',
    },
    {
      icon: '🗄️',
      title: 'Database Migration to Amazon RDS',
      description:
        "Transitioned self-hosted PostgreSQL and Oracle databases to managed RDS services — providing automated backups, patch management, and simplified scaling for cryptographic key storage.",
      badge: 'Sustainability',
    },
    {
      icon: '🛡️',
      title: 'Defense-in-Depth Security Architecture',
      description:
        "Architected a new Amazon VPC with AWS WAF, isolated subnet design, GuardDuty threat detection, and Secrets Manager key protection — a unified security posture that matches the cryptographic rigour FortyTwo delivers.",
      badge: 'Resilience',
    },
    {
      icon: '⚡',
      title: 'Zero-Downtime Migration Execution',
      description:
        "Coordinated migration execution to maintain continuous operation of banking security services throughout — Arjun's infrastructure protection never paused for the migration happening beneath it.",
      badge: 'Resilience',
    },
  ],

  resultCards: [
    {
      number: '0',
      label: 'Downtime during migration — banking clients experienced no service interruption',
      humanNote: "Arjun's operations ran continuously through the entire transition",
    },
    {
      number: '100%',
      label: 'Data persistence maintained across all migrated workloads',
      humanNote: 'Every cryptographic key and record migrated without loss',
    },
    {
      number: '↓↓',
      label: 'Infrastructure management overhead — one platform replaces three',
      humanNote: "Priya's operational complexity reduced to a single, well-governed environment",
    },
    {
      number: '↑↑',
      label: 'Engineering velocity through standardised AWS environment and simplified pipelines',
      humanNote: "Dr. Kumar's team spends more time on cryptography, less time on infrastructure",
    },
  ],

  humanImpactCards: [
    {
      icon: '🏦',
      title: 'Banking Client Continuity',
      description:
        "Arjun's ICICI Bank infrastructure protection ran without interruption through a complex cloud migration. The zero-downtime execution maintained the service continuity that the banking sector's compliance requirements demand.",
    },
    {
      icon: '⚙️',
      title: 'Operational Simplicity',
      description:
        "Priya manages a single, standardised AWS environment with consistent security policies, unified monitoring, and clear governance. Multi-cloud complexity is replaced by operational clarity.",
    },
    {
      icon: '🧬',
      title: 'Engineering Focus Restored',
      description:
        "Dr. Kumar's team can focus on the quantum-safe cryptography that differentiates FortyTwo Labs in the market. The infrastructure is now an enabler — not a competing priority for engineering attention.",
    },
    {
      icon: '🔐',
      title: 'Security Posture Unified',
      description:
        "The consolidated AWS architecture provides a defense-in-depth security posture that matches the cryptographic standards FortyTwo delivers to its banking clients — consistent, auditable, and continuously monitored.",
    },
  ],

  ctaBadge: "Let's consolidate your infrastructure without risk",
  ctaHeadline: 'Enterprise cloud migration<br />that banks on zero downtime.',
  ctaSubline:
    "Complex cloud consolidations — Azure, AWS, on-premises — executed with the precision that security-critical workloads require. Zero data loss. Zero service interruption.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default fortytwolabs
