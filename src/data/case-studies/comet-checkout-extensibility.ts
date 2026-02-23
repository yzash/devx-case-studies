import { CaseStudy } from '@/types/case-study'

const cometCheckoutExtensibility: CaseStudy = {
  slug: 'comet-checkout-extensibility',
  isPublished: true,
  client: 'Comet',
  industry: 'D2C Fashion / Sneaker Retail',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2025,
  type: 'Checkout Optimisation',
  pm: 'Raj',
  accent: '#ff6b35',
  accentSoft: 'rgba(255,107,53,0.08)',
  accentLight: '#ff8557',

  eyebrow: 'Customer Experience · Checkout Optimisation · Shopify · 2025',
  headline: "Streamlining Checkout Journeys for Higher Purchase Confidence at <em>Comet</em>",
  subheadline:
    'A checkout that inspires confidence at the exact moment doubt creeps in.',
  heroMeta: [
    { label: 'Client', value: 'Comet' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "Comet is a digitally native Indian sneaker brand delivering seamless e-commerce experiences to a mobile-first audience. To improve purchase confidence and operational data reliability, we optimized checkout journeys through guided promotional visibility and structured customer input validation aligned with Shopify's secure checkout framework.",
    "We introduced promotional awareness mechanisms in the checkout flow, structured mobile number validation to standardize customer data capture, and delivered all enhancements through controlled deployment workflows — achieving measurable improvements in checkout progression confidence, purchase completion speed, and data quality.",
  ],
  brandTags: ["D2C Sneakers", "Shopify", "Checkout Optimization", "Promotional Visibility", "Data Validation", "Mobile Commerce", "India"],
  brandStats: [
    { name: 'Platform', value: 'Shopify Checkout Extensibility' },
    { name: 'Improvements', value: 'Promotional Visibility · Mobile Validation · Checkout UX' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Checkout Confidence, Completion Speed & Data Accuracy' },
    { name: 'Year', value: '2025' },
  ],

  peopleIntro:
    "Three people were losing value at the checkout — a customer who didn't know about a coupon she could have used, an ops team dealing with invalid contact data, and a brand manager watching checkout abandonment persist despite strong cart metrics.",
  personas: [
    {
      avatar: '👟',
      name: 'Anjali',
      age: 23,
      role: 'Comet customer · completing an order',
      quote:
        "I was at the payment page when I saw an Instagram post mentioning a discount code for the sale. I went back to the cart to enter it, got confused about whether to apply it before or after seeing the order total, and then just proceeded without it. I felt like I might have left money on the table.",
      painTag: '💸 Customers reaching payment without visibility of applicable promotions — missed savings',
    },
    {
      avatar: '📊',
      name: 'Nisha',
      age: 27,
      role: 'Operations Analyst · Comet',
      quote:
        "About 30% of our customer contact records have invalid mobile numbers — people enter incorrect digits or format numbers differently. When we need to call about a delivery issue, we often can't reach the customer. The data quality problem starts at checkout.",
      painTag: '📋 Invalid mobile number data from checkout creating operational communication failures',
    },
    {
      avatar: '💻',
      name: 'Arjun',
      age: 32,
      role: 'Head of Digital · Comet',
      quote:
        "Our cart-to-checkout ratio was strong. But checkout-to-purchase was lower than it should have been for our traffic quality. Customers were hesitating at the payment step — either because they weren't sure about the price or because the checkout flow wasn't smooth enough to keep them moving.",
      painTag: '📉 Checkout-to-purchase conversion below cart quality — hesitation at payment stage',
    },
  ],

  challengeParagraphs: [
    "Comet's checkout had two distinct problems. The first was promotional invisibility — customers like Anjali who were eligible for discounts didn't know about them during the checkout flow, creating uncertainty about whether they were getting the best price. That uncertainty was translating into hesitation and, in some cases, abandonment. The second was data quality — an estimated 30% invalid mobile number rate in customer records was creating downstream operational communication failures that Nisha's team dealt with daily.",
    "Arjun's conversion data reflected both problems: strong cart metrics with weaker-than-expected checkout completion suggested the issue was in the checkout experience rather than in the upstream funnel. Fixing it required changes within Shopify's checkout framework without disrupting the native security and transaction handling that Shopify's checkout provides — a constrained engineering challenge that required Shopify Checkout Extensibility rather than custom checkout replacement.",
  ],
  challengeTension:
    "Customers hesitating at payment — uncertain about price, unsure about promotions — and then failing to complete despite having committed to a purchase.",
  challengeMetrics: [
    { name: 'Promotional visibility during checkout', value: 'Absent — customers unaware of eligible discounts', barPercent: 88, barStyle: 'gold' },
    { name: 'Checkout-to-purchase conversion rate', value: 'Below cart quality — hesitation at payment stage', barPercent: 85, barStyle: 'gold' },
    { name: 'Customer mobile number data validity', value: 'Low — ~30% invalid records in database', barPercent: 90, barStyle: 'gold' },
    { name: 'Coupon utilization during checkout', value: 'Low — customers not finding available savings', barPercent: 82, barStyle: 'soft' },
    { name: 'Checkout completion confidence signals', value: 'Absent — no clarity at payment hesitation point', barPercent: 80, barStyle: 'soft' },
  ],

  approachIntro:
    "We gave Anjali the promotional visibility she needed to complete confidently, gave Nisha data she could act on, and gave Arjun a checkout conversion rate that matched the cart quality.",
  approachCards: [
    {
      icon: '🎟️',
      title: 'Guided Promotional Visibility',
      description:
        "Introduced promotional awareness mechanisms within the checkout flow — Anjali sees applicable discounts and savings at the point of decision, eliminating the 'did I get the best price?' uncertainty that was creating payment-stage hesitation.",
      badge: 'Human-Centricity',
    },
    {
      icon: '💡',
      title: 'Coupon Awareness Mechanism',
      description:
        "Built a coupon surfacing system enabling customers to review applicable savings before payment — coupons are visible and easy to apply without navigating back to the cart, keeping the purchase momentum intact.",
      badge: 'Human-Centricity',
    },
    {
      icon: '📱',
      title: 'Structured Mobile Number Validation',
      description:
        "Implemented structured mobile number validation workflows at checkout — format checking, digit count verification, and user-friendly error messaging that guides Anjali to enter a valid number without friction.",
      badge: 'Sustainability',
    },
    {
      icon: '🔐',
      title: 'Shopify Native Framework Compliance',
      description:
        "Delivered all enhancements through Shopify Checkout Extensibility — maintaining Shopify's native transaction security, validation, and payment processing without requiring checkout replacement or custom gateway.",
      badge: 'Resilience',
    },
    {
      icon: '📊',
      title: 'Purchase Confidence Signals',
      description:
        "Added clarity elements at the payment stage — order summary confirmation, applied discount visibility, and trust signals — designed to reduce hesitation and increase the likelihood of proceeding through to completion.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🔄',
      title: 'Controlled Campaign-Period Deployment',
      description:
        "Delivered all checkout enhancements through controlled deployment ensuring 99%+ stability during active campaign operations — improvements shipped without disrupting live sale events.",
      badge: 'Resilience',
    },
  ],

  resultCards: [
    {
      number: '18–25%',
      label: 'Improvement in checkout progression confidence through promotional visibility',
      humanNote: "Anjali sees her coupon, applies it, and completes — no uncertainty, no abandonment",
    },
    {
      number: '20%',
      label: 'Faster purchase completion movement by reducing hesitation at payment stage',
      humanNote: 'Checkout becomes a confident confirmation, not a decision moment',
    },
    {
      number: '60–70%',
      label: 'Reduction in invalid customer contact data through mobile number validation',
      humanNote: "Nisha's delivery communication works because the numbers are real",
    },
    {
      number: '15–20%',
      label: 'Higher coupon utilization during checkout through improved promotional visibility',
      humanNote: "Customers capture the savings they are entitled to — reducing post-purchase regret",
    },
  ],

  humanImpactCards: [
    {
      icon: '👟',
      title: 'Checkout With Confidence',
      description:
        "Anjali sees her applicable discount at the payment stage — the coupon is visible, easy to apply, and the savings are confirmed before she completes. The moment of hesitation is replaced by a moment of confidence. She completes her purchase.",
    },
    {
      icon: '📊',
      title: 'Data That Works',
      description:
        "Nisha's operational team reaches customers when delivery issues arise — mobile number validation means the contact data collected at checkout is reliable. The 60-70% reduction in invalid records translates directly to fewer unresolvable delivery situations.",
    },
    {
      icon: '💻',
      title: 'Cart Quality Reflected in Conversion',
      description:
        "Arjun's checkout-to-purchase conversion rate rises to match the cart quality upstream — the hesitation gap at payment is narrowed through promotional clarity and purchase confidence signals. The funnel performs consistently.",
    },
    {
      icon: '📈',
      title: 'Campaign-Period Reliability',
      description:
        "Checkout improvements hold through campaign traffic spikes — 99%+ stability during sale events means the optimizations deliver their value exactly when conversion volume is highest.",
    },
  ],

  ctaBadge: "Let's optimize your checkout experience",
  ctaHeadline: "The checkout should confirm the decision,<br />not question it.",
  ctaSubline:
    "Shopify Checkout Extensibility for D2C brands — promotional visibility, data validation, and confidence signals that convert hesitation into completion.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default cometCheckoutExtensibility
