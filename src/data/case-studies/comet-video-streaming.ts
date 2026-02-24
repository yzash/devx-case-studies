import { CaseStudy } from '@/types/case-study'

const cometVideoStreaming: CaseStudy = {
  slug: 'comet-video-streaming',
  isPublished: true,
  client: 'Comet',
  industry: 'D2C Fashion / Sneaker Retail',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'Media Optimisation',
  pm: 'Raj',
  accent: '#ff6b35',
  accentSoft: 'rgba(255,107,53,0.08)',
  accentLight: '#ff8557',

  eyebrow: 'Customer Experience · Media Optimisation · Cloudflare · 2025',
  headline: "Seamless Media Experiences: Adaptive Video Streaming for <em>Comet</em>'s Storefront",
  subheadline:
    'Video that loads before the shopper loses patience. Adaptive streaming done right.',
  heroMeta: [
    { label: 'Client', value: 'Comet' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "Comet is a digitally native Indian sneaker brand delivering visually immersive e-commerce experiences to a mobile-first audience. To enhance product storytelling without impacting storefront performance, we implemented adaptive video streaming architecture powered by Cloudflare — enabling bandwidth-aware media delivery across devices and varying network conditions.",
    "We deployed Cloudflare's media delivery capabilities with bandwidth-adaptive streaming, optimized video asset handling for fast initial rendering, and CDN-based caching strategies — achieving a 60-75% reduction in video loading time and near-instant playback across mobile and desktop environments with 99%+ delivery reliability.",
  ],
  brandTags: ["D2C Sneakers", "Cloudflare", "Adaptive Streaming", "Video Optimization", "CDN", "Mobile Commerce", "India"],
  brandStats: [
    { name: 'Infrastructure', value: 'Shopify + Cloudflare CDN (Adaptive Streaming)' },
    { name: 'Performance', value: '60-75% reduction in video loading time' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Video Load Speed, Mobile Playback & Streaming Reliability' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people needed video to work — a customer whose first impression of a sneaker came from a product video, a content manager whose video investments weren't delivering their potential, and a technical lead managing the performance cost of rich media.",
  personas: [
    {
      avatar: '👟',
      name: 'Kabir',
      age: 21,
      role: 'Comet customer · mobile shopper on 4G',
      quote:
        "Mobile shoppers on 4G connections found that product videos — the content most likely to drive purchase intent — buffered consistently enough to be abandoned, leaving purchase decisions made from photos alone rather than the full visual experience.",
      painTag: '🎬 Product videos buffering on 4G — customers making purchase decisions without key content',
    },
    {
      avatar: '🎥',
      name: 'Pooja',
      age: 27,
      role: 'Content Manager · Comet',
      quote:
        "Content managers who had invested heavily in lifestyle shoots, 360-degree sneaker views, and campaign films saw that creative budget go unrealised when streaming failures prevented the videos from loading reliably for the audience they were made for.",
      painTag: '💸 Creative investment in product videos not delivering due to streaming performance issues',
    },
    {
      avatar: '⚙️',
      name: 'Dev',
      age: 30,
      role: 'Technical Lead · Comet Digital',
      quote:
        "Technical leads managing storefront performance found that a single-quality video file served to all users regardless of connection type systematically penalised the significant portion of the customer base browsing on 4G rather than fiber.",
      painTag: '📶 Single-quality video files penalizing lower-bandwidth users — no adaptive delivery',
    },
  ],

  challengeParagraphs: [
    "Comet's visual-first brand identity depended heavily on video to convey the quality and style of its sneakers. But video-heavy storefront components were creating loading overhead that undermined the experience — particularly for Kabir and the significant portion of Comet's customer base browsing on 4G mobile connections. Traditional video embedding delivered the same file quality to every user regardless of their connection, creating buffering for lower-bandwidth customers that the brand's premium experience couldn't tolerate.",
    "Pooja's creative investment in product videos — lifestyle content, 360-degree views, campaign films — was generating diminishing returns when those videos didn't load smoothly. Dev's technical challenge was delivering video quality that matched the connection: fiber-quality for home users, optimized quality for 4G users, without requiring separate content production for each scenario. Adaptive streaming was the solution — but it required proper infrastructure to implement correctly.",
  ],
  challengeTension:
    "A visually immersive brand whose most powerful content — video — was being experienced by buffering rather than by playback.",
  challengeMetrics: [
    { name: 'Video loading time for 4G users', value: 'High — buffering creating abandonment', barPercent: 92, barStyle: 'gold' },
    { name: 'Network-adaptive video delivery', value: 'Absent — single quality file for all connections', barPercent: 88, barStyle: 'gold' },
    { name: 'Video component impact on page performance', value: 'Heavy — blocking render on load', barPercent: 85, barStyle: 'gold' },
    { name: 'Creative ROI from video content', value: 'Diminished by buffering and incomplete views', barPercent: 82, barStyle: 'gold' },
    { name: 'Streaming reliability across network conditions', value: 'Inconsistent — performance varies widely', barPercent: 80, barStyle: 'soft' },
  ],

  approachIntro:
    "Adaptive streaming gave Kabir instant playback on 4G, validated Pooja's creative investment with views, and gave Dev an architecture that served every user the right quality.",
  approachCards: [
    {
      icon: '☁️',
      title: 'Cloudflare Adaptive Streaming Infrastructure',
      description:
        "Implemented adaptive video streaming infrastructure leveraging Cloudflare's media delivery capabilities — automatically adjusting video quality based on Kabir's connection speed for smooth playback regardless of network.",
      badge: 'Resilience',
    },
    {
      icon: '📶',
      title: 'Bandwidth-Aware Delivery',
      description:
        "Enabled bandwidth detection and quality switching — 4G users receive an optimized quality stream that loads without buffering while fiber users receive the highest quality available, automatically and without user action.",
      badge: 'Human-Centricity',
    },
    {
      icon: '⚡',
      title: 'Progressive Loading for Initial Rendering',
      description:
        "Optimized video asset handling to prioritize fast initial frame rendering — Kabir sees the video's first frame immediately while the full quality loads progressively, eliminating the blank-screen buffering experience.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🔗',
      title: 'Shopify Architecture Integration',
      description:
        "Integrated streaming workflows aligned with Shopify storefront architecture without impacting existing page components — video optimization coexists with all other Comet integrations without conflict.",
      badge: 'Sustainability',
    },
    {
      icon: '📦',
      title: 'CDN-Based Delivery and Caching',
      description:
        "Reduced media loading overhead through Cloudflare CDN distribution and intelligent caching — popular video content served from edge locations closest to the user, reducing latency across India.",
      badge: 'Sustainability',
    },
    {
      icon: '📊',
      title: 'Cross-Device Playback Continuity',
      description:
        "Ensured seamless playback across mobile and desktop environments — Dev's architecture delivers the right quality for each device type without separate content production or manual optimization per format.",
      badge: 'Resilience',
    },
  ],

  resultCards: [
    {
      number: '60–75%',
      label: 'Reduction in video component loading time across key storefront journeys',
      humanNote: "Kabir's 4G connection now delivers the sneaker video before he thinks of skipping it",
    },
    {
      number: '↓',
      label: 'Buffering interruptions — near-zero for customers on slower network environments',
      humanNote: 'Product videos play through completely — creative investment delivers its full value',
    },
    {
      number: '99%+',
      label: 'Media delivery reliability across traffic and network variability scenarios',
      humanNote: "Pooja's video content loads consistently — across devices, networks, and traffic levels",
    },
    {
      number: '↑↑',
      label: 'Customer engagement through uninterrupted visual storytelling',
      humanNote: 'Videos watched to completion — product decisions informed by the best content',
    },
  ],

  humanImpactCards: [
    {
      icon: '👟',
      title: 'Video That Plays',
      description:
        "Kabir's product video loads immediately and plays without interruption on 4G — the adaptive streaming detects his connection and serves optimized quality. He sees the sneaker from every angle, in lifestyle context, before making his purchase decision.",
    },
    {
      icon: '🎥',
      title: 'Creative Investment Delivered',
      description:
        "Pooja's lifestyle shoots and 360-degree sneaker videos now reach their intended audience completely and without buffering. The creative investment that went into production is realized in viewership rather than abandoned in loading spinners.",
    },
    {
      icon: '⚙️',
      title: 'Infrastructure That Adapts',
      description:
        "Dev's architecture serves every customer the quality their connection supports — automatically, reliably, and without manual intervention. Network variability across India's diverse connectivity landscape is handled by the streaming layer, not by customer patience.",
    },
    {
      icon: '📈',
      title: 'Visual Storytelling at Scale',
      description:
        "Comet's visual-first brand identity is fully delivered through its storefront — product videos, lifestyle content, and campaign films all streaming reliably at 99%+ delivery rate across every device and connection type in their customer base.",
    },
  ],

  ctaBadge: "Let's optimize your video delivery",
  ctaHeadline: "Video that plays instantly —<br />on any connection, any device.",
  ctaSubline:
    "Adaptive video streaming with Cloudflare CDN for D2C brands — bandwidth-aware delivery, near-instant initial rendering, and 99%+ reliability across your customer base.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default cometVideoStreaming
