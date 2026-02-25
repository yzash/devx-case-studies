import { CaseStudy } from '@/types/case-study'

const dotAndKeyApp: CaseStudy = {
  slug: 'dot-and-key-app',
  isPublished: true,
  client: 'Dot & Key',
  industry: 'Beauty & Skincare',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'App Development & Full-Stack Optimization',
  pm: 'Khushi',
  accent: '#d4547a',
  accentSoft: 'rgba(212,84,122,0.08)',
  accentLight: '#e07a99',

  eyebrow: 'App Development · Full-Stack Optimization · 2025',
  headline: "Transforming <em>Dot & Key</em>'s Mobile Experience with a Custom High-Performance App",
  subheadline:
    'From slow and generic to fast and personal — a mobile experience worth opening every day.',
  heroMeta: [
    { label: 'Client', value: 'Dot & Key' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandHeadline: "Ingredient-led skincare,<br />an app experience built to match.",
  brandIntro: [
    "Dot & Key is a leading ingredient-led Indian skincare brand known for science-backed formulations and a highly engaged digital community. As mobile commerce became the dominant channel, the brand needed an app experience that could match the precision and personality of its products.",
    "The existing app, built on Shopify App Maker, had served as a starting point — but not a destination. Performance was sluggish, content management was rigid, and the platform simply couldn't support the kind of app-exclusive personalisation the brand wanted to offer. The brief was to build something custom, capable, and worthy of the community that had grown around the brand.",
  ],
  brandTags: ['Skincare', 'React Native', 'Strapi CMS', 'Shopify', 'Shopflo', 'Mobile Commerce', 'India'],
  brandStats: [
    { name: 'Platform', value: 'Shopify App Maker → React Native' },
    { name: 'CMS', value: 'Strapi (Headless)' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Performance, Personalisation & Retention' },
    { name: 'Year', value: '2025' },
  ],

  peopleHeadline: "Built for the ingredient-conscious shopper browsing on mobile, the content team updating campaigns without dev waits, and the growth lead tracking conversion by channel.",
  peopleIntro:
    'Three people were let down by the old app every day. The rebuild put each of them at the centre of every technical decision.',
  personas: [
    {
      avatar: '💆',
      name: 'Pooja',
      age: 24,
      role: 'Skincare-first shopper · Mumbai',
      quote:
        "Shoppers found the app too slow and unreliable to use with confidence, defaulting back to the website for purchases. App-exclusive deals went undiscovered because the experience itself wasn't smooth enough to stay in.",
      painTag: '📱 Slow, unreliable app experience',
    },
    {
      avatar: '📣',
      name: 'Neha',
      age: 29,
      role: 'Digital Marketing Manager · Dot & Key HQ',
      quote:
        "Marketing managers were blocked from updating app content or launching exclusive offers without going through a multi-day development cycle. Campaign windows regularly closed before changes went live.",
      painTag: '⏳ Content updates blocked by dev cycles',
    },
    {
      avatar: '📱',
      name: 'Rahul',
      age: 33,
      role: 'Product Manager · Dot & Key',
      quote:
        "Product managers were unable to offer differentiated pricing for app users because the platform had no mechanism to support it. Wishlist data also reset on reinstall, erasing retention signals the team had no way to recover or act on.",
      painTag: "🚫 Platform can't support the product vision",
    },
  ],

  challengeHeadline: "Dot and Key's Shopify App Maker was too slow and too rigid for a brand growing at their pace.",
  challengeParagraphs: [
    "Dot & Key's growth had outpaced what Shopify App Maker could deliver. The platform's performance ceiling was visible to every shopper, its content management rigidity frustrated every campaign, and its architecture blocked the personalisation ambitions the product team had been building toward.",
    "The missing features weren't edge cases — they were table stakes for a brand competing at this level. Persistent wishlists, differentiated pricing, automated refunds, and real-time content control had all been requested and denied by the platform's limitations. A custom build wasn't optional; it was overdue.",
  ],
  challengeTension:
    'Every day on the old platform was a day the brand promised more than its app could deliver.',
  challengeMetrics: [
    { name: 'App load and responsiveness', value: 'Below standard', barPercent: 80, barStyle: 'gold' },
    { name: 'Content management flexibility', value: 'Very limited', barPercent: 85, barStyle: 'gold' },
    { name: 'Differentiated app pricing', value: 'Not supported', barPercent: 95, barStyle: 'gold' },
    { name: 'Wishlist persistence across sessions', value: 'Missing', barPercent: 90, barStyle: 'soft' },
    { name: 'Automated refund workflows', value: 'Absent', barPercent: 75, barStyle: 'soft' },
  ],

  approachHeadline: "Custom React Native app with Strapi CMS, dual-cart pricing, persistent wishlist, and automated refunds.",
  approachIntro:
    'The custom build was designed around the people who would use it daily — a shopper who needed speed, a marketer who needed agility, and a PM who needed capability.',
  approachCards: [
    {
      icon: '📱',
      title: 'Custom React Native App',
      description:
        "Built a bespoke mobile app using React Native to deliver the cross-platform performance and responsiveness Pooja expected — an app that actually feels like it belongs on her phone.",
      badge: 'Human-Centricity',
    },
    {
      icon: '📝',
      title: 'Strapi CMS for Real-Time Content',
      description:
        "Integrated Strapi as a headless CMS so Neha's team can update collections, PDPs, offers, and homepage content without a single developer ticket.",
      badge: 'Human-Centricity',
    },
    {
      icon: '💰',
      title: 'Dual-Cart Pricing System',
      description:
        "Developed a middleware-based dual-cart architecture using Shopify and Shopflo to support dynamic, app-exclusive pricing — finally giving Rahul's team the personalisation lever they'd been asking for.",
      badge: 'Sustainability',
    },
    {
      icon: '❤️',
      title: 'Persistent Wishlist Management',
      description:
        "Built custom backend logic to preserve wishlist state across sessions and reinstalls — so the signals users leave behind actually persist and can be acted on.",
      badge: 'Resilience',
    },
    {
      icon: '💸',
      title: 'Automated Refund Workflows',
      description:
        'Implemented automated refund processing to remove manual intervention from a high-frequency operational task — reducing support load and improving customer trust.',
      badge: 'Resilience',
    },
    {
      icon: '🏗️',
      title: 'Scalable App Architecture',
      description:
        'Designed the architecture for extensibility — new features, integrations, and product categories can be added without structural rebuilds.',
      badge: 'Sustainability',
    },
  ],

  resultsHeadline: "60% faster load, 40% faster content rollout, 25–30% conversion increase, 15–18% retention improvement.",
  resultCards: [
    {
      number: '60%',
      label: 'Faster app load times',
      humanNote: "Pooja opens the app now — instead of defaulting to the website",
    },
    {
      number: '40%',
      label: 'Faster content rollout and campaign updates',
      humanNote: "Neha's team publishes when the campaign is live, not days after",
    },
    {
      number: '25–30%',
      label: 'Increase in app engagement and conversions through exclusive pricing',
      humanNote: "Rahul's personalisation vision is finally being tested — and working",
    },
    {
      number: '15–18%',
      label: 'Improvement in user retention with wishlist persistence and automated refunds',
      humanNote: 'Users come back because the app earns it — and keeps earning it',
    },
  ],

  humanImpactCards: [
    {
      icon: '💆',
      title: 'Shopper Delight',
      description:
        "Pooja now has an app that opens fast, feels smooth, and surfaces deals made specifically for app users. The experience finally matches the brand she already trusts.",
    },
    {
      icon: '📣',
      title: 'Campaign Agility',
      description:
        "Neha's team can push content, offers, and collection changes the moment a campaign goes live — not after a development cycle that misses the window.",
    },
    {
      icon: '📱',
      title: 'Product Vision Unlocked',
      description:
        "Rahul's roadmap is no longer bottlenecked by platform limitations. Differentiated pricing, persistent wishlists, and custom workflows are live — and the architecture supports whatever comes next.",
    },
    {
      icon: '💸',
      title: 'Operational Efficiency',
      description:
        "Automated refunds and backend workflow logic removed a layer of manual operations that was quietly consuming team time and eroding customer trust at the same time.",
    },
  ],

  ctaBadge: "Let's build the app your brand deserves",
  ctaHeadline: 'Mobile commerce that performs<br />as precisely as your formulations.',
  ctaSubline:
    "Custom-built apps that go beyond what platforms allow — because your brand's mobile experience shouldn't be somebody else's product decision.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default dotAndKeyApp
