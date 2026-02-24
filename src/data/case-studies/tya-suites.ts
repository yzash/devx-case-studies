import { CaseStudy } from '@/types/case-study'

const tyaSuites: CaseStudy = {
  slug: 'tya-suites',
  isPublished: true,
  client: 'TYA Suite',
  industry: 'Enterprise SaaS',
  region: 'India',
  pillar: 'Enterprise Architecture',
  year: 2025,
  type: 'Infrastructure Automation / CI/CD',
  pm: 'Priyanshu',
  accent: '#1a4d6e',
  accentSoft: 'rgba(26,77,110,0.08)',
  accentLight: '#2e6d97',

  eyebrow: 'Enterprise Architecture · Infrastructure Automation · CI/CD · 2025',
  headline: "Automating Multi-Account Deployments: Infrastructure-as-Code and CI/CD for <em>TYA Suite</em>",
  subheadline:
    "When your deployment pipeline is a competitive advantage — and your previous one was a liability.",
  heroMeta: [
    { label: 'Client', value: 'TYA Suite' },
    { label: 'Impact Pillar', value: 'Enterprise Architecture' },
  ],

  brandIntro: [
    "TYA Suite is a multi-tenant SaaS platform serving enterprise customers across isolated AWS accounts — providing each client with a dedicated, governed environment. As the customer base grew, the operational model for provisioning and maintaining these environments had not evolved: each new account required manual configuration, each deployment required coordinated human effort, and configuration drift between environments was a constant operational risk.",
    "We implemented Infrastructure-as-Code and CI/CD automation that transformed TYA Suite's deployment architecture from a manual, error-prone process into a standardised, automated pipeline. The result: 95% faster deployments, 99% error reduction, and an engineering team freed from infrastructure maintenance to focus on product.",
  ],
  brandTags: ['Enterprise SaaS', 'Terraform', 'AWS', 'CI/CD', 'GitHub Actions', 'Infrastructure-as-Code', 'Multi-Account'],
  brandStats: [
    { name: 'IaC', value: 'Terraform (Multi-Account)' },
    { name: 'CI/CD', value: 'GitHub Actions + AWS CodePipeline' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Deployment Speed, Error Elimination & Engineering Velocity' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people were paying the cost of an infrastructure automation gap — an enterprise customer experiencing deployment disruption, a DevOps engineer managing chaos across dozens of accounts, and an engineering leader whose team was building infrastructure instead of product.",
  personas: [
    {
      avatar: '🏢',
      name: 'Aditya',
      age: 44,
      role: 'CTO · Enterprise Customer of TYA Suite',
      quote:
        "Enterprise customers relying on TYA Suite daily were exposed to the risk of downtime or misconfiguration with each deployment or account change. For applications embedded in daily operations, that unpredictability was a material concern — not an acceptable cost of software updates.",
      painTag: '⚠️ Enterprise customers experiencing deployment risk and inconsistency',
    },
    {
      avatar: '⚙️',
      name: 'Priya',
      age: 28,
      role: 'DevOps Engineer · TYA Suite',
      quote:
        "DevOps engineers managing infrastructure across dozens of separate customer AWS accounts manually faced a growing drift problem. Accounts configured at different times had accumulated subtle differences, and diagnosing and resolving that drift consumed hours that should have been spent on improvements.",
      painTag: '🌐 Configuration drift across dozens of manual customer AWS accounts',
    },
    {
      avatar: '📐',
      name: 'Arjun',
      age: 35,
      role: 'Head of Engineering · TYA Suite',
      quote:
        "Engineering teams at multi-tenant SaaS companies were spending more time on infrastructure coordination than on feature development. Provisioning a new customer account took days of synchronized effort across people and systems — time that was not available for the product work that drove customer value.",
      painTag: '⏱️ Engineering team building infrastructure instead of product features',
    },
  ],

  challengeParagraphs: [
    "TYA Suite's multi-account architecture was the right isolation model for enterprise SaaS — each customer deserved their own governed environment. But without Infrastructure-as-Code, each environment diverged from the others over time. Manual provisioning introduced subtle variations. Individual deployment steps were performed differently across accounts. The operational debt was invisible until something went wrong — and then it was expensive to diagnose and fix.",
    "Arjun's team was consuming engineering hours on infrastructure work that should have been automated. New account provisioning took days of coordinated human effort. Deployments required careful sequencing that couldn't scale as customer count grew. Every hour the engineering team spent on infrastructure coordination was an hour not spent on the product features that attracted customers to TYA Suite in the first place.",
  ],
  challengeTension:
    "A multi-tenant SaaS platform with dozens of customer AWS accounts — each slightly different, each requiring manual deployment coordination, each a potential source of drift.",
  challengeMetrics: [
    { name: 'New customer account provisioning time', value: 'Days of manual work', barPercent: 88, barStyle: 'gold' },
    { name: 'Configuration consistency across accounts', value: 'Drift accumulating over time', barPercent: 85, barStyle: 'gold' },
    { name: 'Deployment coordination overhead', value: 'Multi-person synchronization required', barPercent: 82, barStyle: 'gold' },
    { name: 'Deployment error rate', value: 'Manual configuration errors present', barPercent: 80, barStyle: 'soft' },
    { name: 'Engineering time on infrastructure vs. product', value: 'Imbalanced', barPercent: 78, barStyle: 'soft' },
  ],

  approachIntro:
    "The automation architecture was built to give Aditya invisible deployments, give Priya a single system to manage, and give Arjun's team the development velocity they should have had.",
  approachCards: [
    {
      icon: '📋',
      title: 'Terraform Infrastructure-as-Code',
      description:
        "Implemented Terraform for all AWS infrastructure provisioning across every customer account — version-controlled, auditable definitions that eliminate configuration drift by making the intended state explicit.",
      badge: 'Sustainability',
    },
    {
      icon: '🔄',
      title: 'Multi-Account Automated Deployment',
      description:
        "Built deployment pipelines coordinating infrastructure changes across all isolated customer AWS accounts simultaneously — a single commit triggers synchronized, consistent provisioning across every Aditya-equivalent environment.",
      badge: 'Resilience',
    },
    {
      icon: '⚡',
      title: 'GitHub Actions + AWS CodePipeline CI/CD',
      description:
        "Implemented comprehensive CI/CD using GitHub Actions and AWS CodePipeline with automated testing, building, and deployment — code changes flow from development through staging to production with automated quality gates.",
      badge: 'Sustainability',
    },
    {
      icon: '🗄️',
      title: 'Centralised Configuration Management',
      description:
        "Deployed AWS Systems Manager Parameter Store and Secrets Manager for unified configuration across all accounts — eliminating the environment variable inconsistencies that caused Priya's drift detection headaches.",
      badge: 'Sustainability',
    },
    {
      icon: '📊',
      title: 'Unified Monitoring & Alerting',
      description:
        "Deployed CloudWatch dashboards and automated alerting across all customer accounts from a single pane of glass — Priya monitors the entire fleet from one place rather than account by account.",
      badge: 'Resilience',
    },
    {
      icon: '🔵',
      title: 'Blue-Green Zero-Downtime Deployments',
      description:
        "Implemented blue-green deployment strategies with automated health checks — Aditya's environment updates without service interruption, and rollback is automated if health checks fail.",
      badge: 'Resilience',
    },
  ],

  resultCards: [
    {
      number: '95%',
      label: 'Faster deployments — from hours/days of manual work to minutes of automation',
      humanNote: "Aditya's account is updated without him knowing it happened",
    },
    {
      number: '99%',
      label: 'Reduction in deployment errors through IaC validation and automated testing',
      humanNote: "Priya's drift-detection hours become a thing of the past",
    },
    {
      number: '0',
      label: 'Customer-facing downtime during deployments through blue-green execution',
      humanNote: 'Enterprise SLA commitments are maintained through every release',
    },
    {
      number: '↑↑',
      label: 'Engineering velocity — feature development now leads infrastructure work',
      humanNote: "Arjun's team builds product — the infrastructure builds itself",
    },
  ],

  humanImpactCards: [
    {
      icon: '🏢',
      title: 'Enterprise Reliability',
      description:
        "Aditya's TYA Suite environment updates silently and correctly — blue-green deployments ensure there is no downtime window during which his enterprise operations could be disrupted.",
    },
    {
      icon: '⚙️',
      title: 'Operational Clarity',
      description:
        "Priya manages the entire fleet from a single Terraform codebase and a unified monitoring dashboard. Configuration drift is prevented at source — not detected after it's already caused a problem.",
    },
    {
      icon: '📐',
      title: 'Engineering Focus Restored',
      description:
        "Arjun's team provisions new customer accounts in minutes with a single git commit. Deployment coordination has been replaced by deployment automation. Engineering hours flow to product development, not infrastructure synchronisation.",
    },
    {
      icon: '📈',
      title: 'Customer Growth Without Overhead',
      description:
        "TYA Suite can onboard new enterprise customers without proportional increases in DevOps effort. The automation platform scales with the business — every new account provisioned the same way, in the same time, to the same standard.",
    },
  ],

  ctaBadge: "Let's automate your deployment infrastructure",
  ctaHeadline: 'Infrastructure that deploys itself<br />is infrastructure that scales itself.',
  ctaSubline:
    "Terraform IaC and CI/CD automation for multi-account SaaS architectures — eliminating configuration drift, deployment errors, and the manual coordination that limits engineering velocity.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default tyaSuites
