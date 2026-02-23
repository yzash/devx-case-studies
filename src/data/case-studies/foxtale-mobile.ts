import { CaseStudy } from '@/types/case-study'

const foxtaleMobile: CaseStudy = {
  slug: 'foxtale-mobile',
  isPublished: true,
  client: 'Foxtale',
  industry: 'Skincare / D2C',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2024,
  type: 'Mobile App',
  pm: 'Prerna Jain',
  accent: '#e07b54',
  accentSoft: 'rgba(224,123,84,0.08)',
  accentLight: '#e89674',

  eyebrow: 'Customer Experience · Mobile App · Product Launch · 2024',
  headline: "From Zero to 250K Users: Building <em>Foxtale</em>'s Mobile Commerce Platform in 30 Days",
  subheadline:
    '250,000 users in 30 days. Zero compromises on experience.',
  heroMeta: [
    { label: 'Client', value: 'Foxtale' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "Foxtale is a Series C-funded Indian skincare brand offering science-backed products for Indian skin types. To deepen customer relationships and drive repeat purchases, the brand needed a mobile app that went beyond their website capabilities — feature-rich, native, and launched in record time with perfect Shopify backend sync.",
    "We built and launched Foxtale's mobile commerce platform in 30 days using Strapi as a unified data layer, delivered a streamlined mobile-first shopping flow with optimized product browsing and native checkout, and designed a future-ready architecture for AR and personalization features. The app acquired 250,000 users in its first year, converting at 5.2% versus 3.7% on the website.",
  ],
  brandTags: ['Skincare', 'Mobile App', 'Strapi', 'Shopify Sync', 'Native Commerce', 'D2C India', 'Product Launch'],
  brandStats: [
    { name: 'Launch Timeline', value: '30 Days from Concept to Production' },
    { name: 'Users Acquired', value: '250,000 in First Year' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Launch Speed, Conversion Rate & Mobile-First Experience' },
    { name: 'Year', value: '2024' },
  ],

  peopleIntro:
    "Three people needed the mobile app to deliver on an aggressive commitment — a customer who wanted a better shopping experience on her phone, a product lead with a 30-day launch deadline, and a growth head who needed the app to convert better than the website.",
  personas: [
    {
      avatar: '✨',
      name: 'Neha',
      age: 24,
      role: 'Foxtale customer · daily skincare routine enthusiast',
      quote:
        "I browse the website on my phone but it never feels quite right. I have to zoom in on product descriptions, the cart is awkward, and I miss notifications about restocks. I'd been waiting for a Foxtale app — when it launched, I downloaded it immediately.",
      painTag: '📱 Mobile web experience not matching the engagement depth a native app delivers',
    },
    {
      avatar: '💻',
      name: 'Riya',
      age: 28,
      role: 'Product Lead · Foxtale',
      quote:
        "We had a 30-day deadline because of a marketing window we wanted to hit for the app launch. A feature-complete mobile commerce app in 30 days isn't typical. We needed a technical partner who could move as fast as we needed to without compromising on quality.",
      painTag: '⏰ 30-day launch timeline for a full-featured native mobile commerce application',
    },
    {
      avatar: '📊',
      name: 'Deepak',
      age: 32,
      role: 'Head of Growth · Foxtale',
      quote:
        "Our website converted at 3.7%. I wanted the app to beat that significantly — native apps should convert better because the experience is more intentional. If we built the right flow and got the engagement features right, 5%+ was achievable. We needed to build for that outcome from day one.",
      painTag: '🎯 App conversion rate needed to measurably outperform website from launch',
    },
  ],

  challengeParagraphs: [
    "Foxtale's mobile app project had three simultaneous constraints: a 30-day deadline, Shopify backend synchronization requirements, and a conversion rate target that exceeded the website. Building a feature-rich native mobile commerce experience that synced perfectly with Shopify's product catalog, inventory, and order management — while also supporting app-specific content and a future AR capability — required architectural decisions that would enable both the launch speed and the long-term capability.",
    "Riya's timeline wasn't negotiable — a specific marketing window had been committed to and the pre-launch campaign was already running. The architecture had to be decided quickly, the Strapi data layer had to be implemented efficiently, and the commerce flow had to be built with Deepak's conversion goals in mind from the first line of code. Speed and quality were not tradeoffs — they were simultaneous requirements.",
  ],
  challengeTension:
    "A 30-day timeline for a mobile commerce platform that needed to convert better than the existing website — from day one.",
  challengeMetrics: [
    { name: 'Launch timeline', value: '30 days — non-negotiable marketing commitment', barPercent: 92, barStyle: 'gold' },
    { name: 'Shopify data synchronization complexity', value: 'Full product catalog, inventory, and orders', barPercent: 88, barStyle: 'gold' },
    { name: 'Target conversion rate', value: 'Must exceed website 3.7% — needs 5%+', barPercent: 85, barStyle: 'gold' },
    { name: 'Future feature architecture', value: 'AR and personalization must be supportable post-launch', barPercent: 82, barStyle: 'soft' },
    { name: 'App-exclusive content management', value: 'Requires unified data layer alongside Shopify sync', barPercent: 78, barStyle: 'soft' },
  ],

  approachIntro:
    "The app was built to give Neha a native experience she preferred over the website, give Riya a launch that hit the 30-day target, and give Deepak a conversion rate that validated every decision.",
  approachCards: [
    {
      icon: '⚡',
      title: 'Rapid Development with Strapi Backend',
      description:
        "Built the complete mobile app in 30 days using Strapi as a unified data layer — seamlessly syncing Shopify product data, inventory, and orders while managing app-exclusive content like editorial sections and personalized recommendations.",
      badge: 'Resilience',
    },
    {
      icon: '🛍️',
      title: 'Native Commerce Flow Optimization',
      description:
        "Delivered a streamlined mobile-first e-commerce flow with optimized product browsing, frictionless cart management, native checkout, and seamless order tracking — designed around Deepak's conversion goals from the first wireframe.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🔔',
      title: 'Push Notifications and Engagement Features',
      description:
        "Built push notification infrastructure for restocks, sales, and personalized product recommendations — Neha gets alerted when the serum she likes is back in stock, driving the repeat purchase behavior that the website couldn't reliably trigger.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🔗',
      title: 'Real-Time Shopify Synchronization',
      description:
        "Implemented real-time sync between the app and Shopify backend — product availability, pricing, and order status always accurate regardless of which channel a customer used to browse, purchase, or track.",
      badge: 'Sustainability',
    },
    {
      icon: '🧬',
      title: 'Future-Ready Architecture',
      description:
        "Designed the data structure and API layer to support rapid post-launch integration of AR skin analysis, personalization engines, and recommendation features — Foxtale's mobile roadmap had room to grow without architectural rework.",
      badge: 'Sustainability',
    },
    {
      icon: '📊',
      title: 'Conversion-Optimized UX',
      description:
        "Every UX decision traced back to conversion — product imagery sizing, CTA placement, cart visibility, review presentation — informed by the website's behavioral data to build a mobile experience that would outperform it measurably.",
      badge: 'Resilience',
    },
  ],

  resultCards: [
    {
      number: '250K',
      label: 'Users acquired in first year — demonstrating strong market fit for mobile commerce',
      humanNote: "Neha downloaded on launch day — 250,000 customers like her followed",
    },
    {
      number: '5.2%',
      label: 'App conversion rate — significantly above the 3.7% website benchmark',
      humanNote: "Deepak's conversion target hit and exceeded from the first month",
    },
    {
      number: '40%',
      label: 'Higher conversion than web — native app experience driving measurably more purchase intent',
      humanNote: 'Native mobile experience validates every architectural decision made in 30 days',
    },
    {
      number: '30 days',
      label: 'Concept to production — full-featured native mobile commerce app launched on schedule',
      humanNote: "Riya's marketing window was captured — the launch campaign had a product to promote",
    },
  ],

  humanImpactCards: [
    {
      icon: '✨',
      title: 'Mobile Experience Worth Preferring',
      description:
        "Neha browses Foxtale's app the way she browses her favourite content — swipeable, fast, and native. She gets restock alerts, personalised recommendations, and a checkout that remembers her details. The app replaced her website habit within weeks.",
    },
    {
      icon: '💻',
      title: 'Launch That Hit Its Window',
      description:
        "Riya's 30-day deadline was met with a feature-complete app — product browsing, cart, checkout, order tracking, push notifications, and Shopify sync all live on launch day. The marketing campaign had a product worthy of the build-up.",
    },
    {
      icon: '📊',
      title: 'Conversion That Justifies the Investment',
      description:
        "Deepak's 5%+ conversion target was achieved — the app converts 40% better than the website because the mobile experience was purpose-built for conversion rather than adapted from a desktop-first design.",
    },
    {
      icon: '📈',
      title: 'Platform for What Comes Next',
      description:
        "The Strapi architecture made the AR skin analysis feature straightforward to add post-launch. Foxtale's mobile platform became a compounding asset — each new feature adding to a customer relationship that the website could never replicate.",
    },
  ],

  ctaBadge: "Let's build your mobile commerce platform",
  ctaHeadline: "A mobile app that converts 40% better<br />than your website — in 30 days.",
  ctaSubline:
    "Native mobile commerce for D2C skincare and lifestyle brands — Shopify-synced, conversion-optimized, and built with the architecture to support everything on your product roadmap.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default foxtaleMobile
