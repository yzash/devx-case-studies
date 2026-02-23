import { CaseStudy } from '@/types/case-study'

const foxtaleHeadless: CaseStudy = {
  slug: 'foxtale-headless',
  isPublished: true,
  client: 'Foxtale',
  industry: 'Skincare / D2C',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'Headless Commerce',
  pm: 'Prerna Jain',
  accent: '#e07b54',
  accentSoft: 'rgba(224,123,84,0.08)',
  accentLight: '#e89674',

  eyebrow: 'Customer Experience · Headless Commerce · Performance · 2025',
  headline: "Breaking Speed Barriers: <em>Foxtale</em>'s Journey to Headless Commerce",
  subheadline:
    'The Shopify ceiling was real. Headless removed it.',
  heroMeta: [
    { label: 'Client', value: 'Foxtale' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "Foxtale is a Series C-funded Indian skincare brand offering science-backed, dermatologist-tested products designed for Indian skin types. As one of India's fastest-growing brands in the skincare space, their rapid scale exposed a fundamental constraint: their Shopify storefront couldn't keep pace with growing traffic, and CloudFront infrastructure costs had ballooned to $6,000 monthly.",
    "We built a custom Next.js headless frontend with optimized cart logic, migrated to AWS-powered backend infrastructure, and completely eliminated $6,000 monthly in CloudFront costs through strategic traffic routing. Cart interaction time dropped from 1.5 seconds to 0.1 seconds, and the platform handled 8-10 lakh concurrent sessions during the January 2026 sale with zero downtime.",
  ],
  brandTags: ['Skincare', 'Headless Commerce', 'Next.js', 'AWS', 'ECS', 'CloudFront Optimization', 'India'],
  brandStats: [
    { name: 'Architecture', value: 'Next.js Headless Frontend + AWS ECS Backend' },
    { name: 'Cost Reduction', value: '$6,000/month CloudFront → $0' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Cart Speed, Infrastructure Cost & Sale Season Scalability' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people were hitting the ceiling that Shopify's native architecture imposed — a customer frustrated by cart lag, a CTO watching infrastructure bills grow, and an engineering lead managing a platform that couldn't handle sale-day traffic.",
  personas: [
    {
      avatar: '✨',
      name: 'Riya',
      age: 26,
      role: 'Foxtale customer · skincare enthusiast',
      quote:
        "I was in a flash sale trying to update my cart quantity before a product sold out. The cart took 1.5 seconds to respond to every tap. By the time I finished, the product I wanted was gone. That lag cost me the product — and almost cost Foxtale the sale.",
      painTag: '⏱️ 1.5-second cart interaction lag causing frustration and abandonment during flash sales',
    },
    {
      avatar: '💻',
      name: 'Rohit',
      age: 33,
      role: 'CTO · Foxtale',
      quote:
        "We were paying $6,000 a month in CloudFront costs that were growing with traffic. The infrastructure expense was becoming a meaningful line item, and we hadn't found a way to architect around it. We needed headless not just for speed but for cost efficiency.",
      painTag: '💸 $6,000/month CloudFront costs growing unsustainably with brand traffic',
    },
    {
      avatar: '⚙️',
      name: 'Tanvi',
      age: 30,
      role: 'Engineering Lead · Foxtale',
      quote:
        "During sale periods, we were constantly anxious about server stability. Shopify's native frontend couldn't scale the way we needed it to. We'd over-provision and still worry. With 8-10 lakh sessions during peak sales, we needed an architecture that was genuinely elastic.",
      painTag: '📈 Sale-period traffic spikes requiring architecture that Shopify native could not provide',
    },
  ],

  challengeParagraphs: [
    "Foxtale's growth had outpaced the architecture they were running on. The Shopify native cart — where Riya's 1.5-second frustration lived — was not a configuration problem but an architectural ceiling. Promotions, discount logic, and cart interactions that drove Foxtale's marketing strategy were constrained by Shopify's built-in limitations. And as CloudFront costs grew alongside traffic, Rohit was watching a cost structure that didn't scale efficiently with the brand.",
    "The January and sale-season traffic spikes were Tanvi's recurring stress point. Shopify's native frontend lacked the elastic scalability that 8-10 lakh sessions required, and the team had no reliable way to stress-test the architecture before a high-stakes sale event. The headless migration was not a technical preference but a business requirement: performance, cost efficiency, and sale-day reliability needed to be solved simultaneously.",
  ],
  challengeTension:
    "A fast-growing skincare brand whose traffic scale had made its Shopify architecture a constraint — on performance, on cost, and on engineering confidence.",
  challengeMetrics: [
    { name: 'Cart interaction response time', value: '1.5 seconds — causing abandonment in flash sales', barPercent: 90, barStyle: 'gold' },
    { name: 'Monthly CloudFront infrastructure cost', value: '$6,000 and growing with traffic', barPercent: 88, barStyle: 'gold' },
    { name: 'Sale-period scalability confidence', value: 'Low — over-provisioned and still anxious', barPercent: 85, barStyle: 'gold' },
    { name: 'Frontend customization capability', value: 'Shopify-constrained — promotional complexity limited', barPercent: 82, barStyle: 'soft' },
    { name: 'Infrastructure cost efficiency', value: 'Declining — costs scaling faster than revenue benefit', barPercent: 80, barStyle: 'soft' },
  ],

  approachIntro:
    "We built the headless architecture to make Riya's cart feel instant, eliminate Rohit's $6,000 monthly bill, and give Tanvi an architecture she could trust through any sale volume.",
  approachCards: [
    {
      icon: '⚡',
      title: 'Next.js Headless Frontend with Optimistic Cart',
      description:
        "Built a custom Next.js frontend with optimistic UI updates and smart caching — cart interactions respond in 0.1 seconds rather than 1.5 seconds, making Riya's flash sale experience feel instant regardless of server response time.",
      badge: 'Human-Centricity',
    },
    {
      icon: '☁️',
      title: 'AWS Infrastructure Redesign',
      description:
        "Migrated to AWS-powered backend with ECS, CloudFront optimization, and strategic load distribution routing traffic through Shopify — completely eliminating CloudFront costs through intelligent traffic architecture rather than simply paying more.",
      badge: 'Sustainability',
    },
    {
      icon: '📈',
      title: 'Enterprise-Grade Sale Season Scalability',
      description:
        "Implemented full frontend caching and load optimization to handle massive traffic spikes — Tanvi's team managed 8-10 lakh sessions during the January 2026 sale with zero downtime or performance degradation.",
      badge: 'Resilience',
    },
    {
      icon: '🛒',
      title: 'Smart Caching Architecture',
      description:
        "Designed a caching layer that intelligently balances content freshness with delivery speed — promotional content updates immediately while static elements load from cache, making the headless frontend both fast and accurate.",
      badge: 'Resilience',
    },
    {
      icon: '🔗',
      title: 'Shopify Backend Continuity',
      description:
        "Maintained Shopify as the commerce backend — product catalog, orders, and inventory remain in Shopify while the headless frontend delivers the performance the brand needed, without disrupting existing integrations or workflows.",
      badge: 'Sustainability',
    },
    {
      icon: '🧪',
      title: 'Load Testing and Sale-Day Confidence',
      description:
        "Built and tested the infrastructure against projected sale-period traffic volumes — Tanvi's team had documented confidence before every high-stakes sale event rather than anxious over-provisioning and hope.",
      badge: 'Resilience',
    },
  ],

  testimonial: {
    quote: "The best part of working with the devx team is their commitment to quality. It's rare to find folks with as robust an understanding of the Product landscape as devx.",
    name: 'Foxtale Engineering Team',
    title: 'Foxtale',
  },

  resultCards: [
    {
      number: '100%',
      label: 'CloudFront cost elimination — from $6,000/month to $0 in December 2025',
      humanNote: "Rohit's infrastructure budget freed for product investment",
    },
    {
      number: '93%',
      label: 'Cart speed improvement — from 1.5 seconds to 0.1 seconds',
      humanNote: "Riya's cart updates feel instant — flash sales convert instead of frustrate",
    },
    {
      number: '800K+',
      label: 'Peak sessions handled flawlessly during January 2026 sale — zero downtime',
      humanNote: "Tanvi's team ran the sale with confidence, not anxiety",
    },
    {
      number: '↑↑',
      label: 'Engineering capability — full frontend customization without Shopify constraints',
      humanNote: 'Promotional logic, cart design, and UX now owned by the product team',
    },
  ],

  humanImpactCards: [
    {
      icon: '✨',
      title: 'Cart That Feels Instant',
      description:
        "Riya's flash sale experience is transformed — cart updates respond in 0.1 seconds, stock additions are visible immediately, and the race to checkout is won by the customer rather than by lag. The most valuable moment in the purchase journey now works perfectly.",
    },
    {
      icon: '💻',
      title: 'Infrastructure Cost Eliminated',
      description:
        "Rohit's $6,000 monthly CloudFront bill went to zero through intelligent traffic architecture rather than continued spending. The headless migration paid for itself while delivering performance improvement — a rare combination.",
    },
    {
      icon: '⚙️',
      title: 'Sale-Day Confidence',
      description:
        "Tanvi's team ran the January 2026 sale — 8-10 lakh sessions — without a single downtime incident. The architecture was tested, documented, and genuinely elastic. Engineering anxiety replaced by operational confidence.",
    },
    {
      icon: '📈',
      title: 'Frontend Freedom',
      description:
        "The headless architecture removes Shopify's frontend constraints from every future product decision — cart logic, promotional flows, and UX innovation are now owned by Foxtale's engineering team, not limited by Shopify's template structure.",
    },
  ],

  ctaBadge: "Let's break your platform ceiling",
  ctaHeadline: "Headless commerce that makes<br />your infrastructure costs disappear.",
  ctaSubline:
    "Next.js headless frontend with AWS backend — 93% faster cart interactions, zero CloudFront costs, and architecture that handles sale-season traffic at any scale.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default foxtaleHeadless
