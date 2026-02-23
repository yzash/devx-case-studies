import { CaseStudy } from '@/types/case-study'

const cometOtpLogin: CaseStudy = {
  slug: 'comet-otp-login',
  isPublished: true,
  client: 'Comet',
  industry: 'D2C Fashion / Sneaker Retail',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'Authentication',
  pm: 'Raj',
  accent: '#ff6b35',
  accentSoft: 'rgba(255,107,53,0.08)',
  accentLight: '#ff8557',

  eyebrow: 'Customer Experience · Authentication Engineering · 2025',
  headline: "Invisible Login: Mobile OTP Authentication for <em>Comet</em>'s Shopify Storefront",
  subheadline:
    'Login friction is silent churn. OTP made the front door invisible.',
  heroMeta: [
    { label: 'Client', value: 'Comet' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "Comet is a digitally native Indian sneaker brand focused on delivering modern retail experiences through its e-commerce storefront. To align with mobile-first customer expectations and reduce login friction, we engineered a custom mobile number OTP authentication system that works natively within Shopify's customer validation framework.",
    "The implementation required custom backend logic to map mobile numbers to Shopify customer accounts, structured handling of duplicate records, and authentication workflows consistent across both storefront and checkout — delivering a seamless, passwordless login experience without disrupting any existing order or account workflows.",
  ],
  brandTags: ["D2C Sneakers", "Shopify", "OTP Authentication", "Mobile-First", "Custom Engineering", "Identity Resolution", "India"],
  brandStats: [
    { name: 'Platform', value: 'Shopify (Custom Authentication Extension)' },
    { name: 'Capability', value: 'Mobile OTP Login · Identity Resolution · Checkout Consistency' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Login Friction, Authentication Consistency & Account Accuracy' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people were experiencing the friction of authentication that didn't match how people actually want to access their accounts — a customer who couldn't remember an email, a support agent handling duplicate account confusion, and a brand manager whose mobile-first brand had an email-first login.",
  personas: [
    {
      avatar: '👟',
      name: 'Dev',
      age: 21,
      role: 'Comet customer · frequent sneaker buyer',
      quote:
        "I tried to log in before a drop and couldn't remember which email I used to sign up. I tried two, got locked out, and missed the launch. I'd rather just get an OTP on my phone. I know my number by heart.",
      painTag: '🔑 Email-based login causing access failures — customers missing drops and promotions',
    },
    {
      avatar: '🎧',
      name: 'Ishaan',
      age: 26,
      role: 'Customer Support · Comet',
      quote:
        "I get multiple tickets every week from customers who have created two Comet accounts with different emails but the same phone number. They ask why their order history is split. Sorting this out manually takes time and creates a poor customer experience.",
      painTag: '📋 Duplicate account records from multiple email sign-ups with same phone number',
    },
    {
      avatar: '📊',
      name: 'Sanjana',
      age: 30,
      role: 'Digital Product Manager · Comet',
      quote:
        "Our customer base is Gen Z and young millennials. They don't use email as their primary identity. They use their phone number. Our login was a blocker — especially on mobile, where typing and remembering email passwords is genuinely frustrating.",
      painTag: '📱 Email-first authentication mismatched to mobile-first Gen Z audience expectations',
    },
  ],

  challengeParagraphs: [
    "Shopify's native authentication relies on email-based customer login workflows — a model that creates friction for Comet's mobile-first Gen Z audience. Dev's experience wasn't unusual: customers who shop across devices, register with multiple emails, and simply can't remember which credential they used for a specific store face a login wall at the worst possible moment — the start of a limited drop or a time-sensitive promotion.",
    "The identity resolution complexity compounded the problem. Multiple customer records associated with the same phone number created support burden for Ishaan and data fragmentation for the brand. And the authentication inconsistency between storefront and checkout created a disjointed experience that Sanjana's product team needed to unify. The solution had to work within Shopify's validation framework without compromising account security or disrupting existing order workflows.",
  ],
  challengeTension:
    "A mobile-first brand with a login experience designed for email-first customers — creating friction at exactly the moment that should be frictionless.",
  challengeMetrics: [
    { name: 'Login method alignment with customer preference', value: 'Email-only — misaligned with mobile-first Gen Z', barPercent: 88, barStyle: 'gold' },
    { name: 'Login success rate for mobile users', value: 'Lower — email recall failure causing access issues', barPercent: 85, barStyle: 'gold' },
    { name: 'Duplicate account support burden', value: 'Multiple weekly tickets — same phone, multiple emails', barPercent: 82, barStyle: 'gold' },
    { name: 'Authentication consistency across storefront and checkout', value: 'Inconsistent — different flow behaviors', barPercent: 80, barStyle: 'soft' },
    { name: 'Password reset abandonment rate', value: 'Elevated — customers exiting rather than recovering', barPercent: 78, barStyle: 'soft' },
  ],

  approachIntro:
    "OTP authentication was engineered to remove the login friction that was silently costing Comet customers at their most important moments.",
  approachCards: [
    {
      icon: '📱',
      title: 'Custom Mobile OTP Authentication Flow',
      description:
        "Designed and built a custom mobile OTP authentication flow integrated natively with Shopify customer accounts — Dev enters his phone number, receives an OTP, and is authenticated without remembering an email or password.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🎨',
      title: 'Brand-Consistent UI Integration',
      description:
        "Built a custom UI aligned with Comet's brand aesthetics delivering a seamless login experience across all storefront touchpoints — authentication feels native to the brand, not like a third-party overlay.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🔗',
      title: 'Mobile-to-Email Account Mapping',
      description:
        "Implemented backend logic managing email mapping while enabling customers to authenticate using mobile numbers — Shopify's customer records remain email-keyed while the authentication abstraction handles the mobile identity layer.",
      badge: 'Sustainability',
    },
    {
      icon: '🔍',
      title: 'Duplicate Record Identity Resolution',
      description:
        "Engineered structured handling for multiple email records associated with the same phone number — identifying and surfacing the correct account for Ishaan's support cases and preventing future duplicate creation.",
      badge: 'Resilience',
    },
    {
      icon: '🛒',
      title: 'Checkout Authentication Consistency',
      description:
        "Extended the OTP authentication workflow across checkout entry points — Sanjana's end-to-end consistency is achieved with the same mobile-first login experience from homepage to order confirmation.",
      badge: 'Sustainability',
    },
    {
      icon: '🔐',
      title: 'Shopify Validation Framework Compliance',
      description:
        "Leveraged Shopify's secure validation mechanisms to maintain account integrity while abstracting the complexity from customers — security maintained, UX complexity eliminated.",
      badge: 'Resilience',
    },
  ],

  resultCards: [
    {
      number: '✓',
      label: 'Mobile-first OTP authentication — passwordless access aligned with Gen Z customer behavior',
      humanNote: "Dev gets an OTP, logs in instantly, and doesn't miss another drop",
    },
    {
      number: '↓',
      label: 'Login friction reduced — OTP eliminates password dependency and email recall failure',
      humanNote: 'The front door to Comet is now frictionless for every mobile user',
    },
    {
      number: '↑',
      label: 'Account accessibility consistency across storefront and checkout journeys',
      humanNote: "Sanjana's authentication experience is unified from browse to purchase",
    },
    {
      number: '↓↓',
      label: 'Duplicate account support burden through structured identity resolution workflows',
      humanNote: "Ishaan handles fewer tickets as phone-based identity eliminates duplicate creation",
    },
  ],

  humanImpactCards: [
    {
      icon: '👟',
      title: 'Login That Just Works',
      description:
        "Dev taps 'Login with mobile', enters his number, receives an OTP, and is in — before the drop timer reaches zero. The authentication experience matches the speed and urgency of sneaker culture. Login is no longer the barrier it was.",
    },
    {
      icon: '🎧',
      title: 'Fewer Support Tickets',
      description:
        "Ishaan handles fewer duplicate account tickets because phone-number-based identity prevents the multiple-email-per-customer fragmentation that caused them. When tickets do arrive, the identity resolution logic surfaces the correct account immediately.",
    },
    {
      icon: '📊',
      title: 'Consistent Authentication End-to-End',
      description:
        "Sanjana's product has a consistent authentication experience from storefront to checkout — the same mobile OTP flow, the same UI, the same seamless behavior. No jarring transitions or different login mechanisms at different points.",
    },
    {
      icon: '📈',
      title: 'Mobile-First Brand, Mobile-First Authentication',
      description:
        "Comet's authentication now matches its identity — a Gen Z brand selling on mobile deserves mobile-native login. The OTP system reduces friction at the most critical access points in the customer journey.",
    },
  ],

  ctaBadge: "Let's remove your login friction",
  ctaHeadline: "The best login experience<br />is one customers don't notice.",
  ctaSubline:
    "Custom mobile OTP authentication for Shopify — passwordless login, identity resolution, and checkout consistency built for mobile-first D2C brands.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default cometOtpLogin
