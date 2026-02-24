import { CaseStudy } from '@/types/case-study'

const tscWebsite: CaseStudy = {
  slug: 'tsc-website',
  isPublished: true,
  client: 'The Sleep Company',
  industry: 'D2C Sleep & Furniture',
  region: 'India',
  pillar: 'Customer Experience',
  year: 2024,
  type: 'Speed Optimisation',
  pm: 'Prerna Jain',
  accent: '#3d5a80',
  accentSoft: 'rgba(61,90,128,0.08)',
  accentLight: '#567aad',

  eyebrow: 'Customer Experience · Performance Optimization · Omnichannel · 2024',
  headline: "From 11 Seconds to 2: Speed Optimization Meets Omnichannel Innovation for <em>The Sleep Company</em>",
  subheadline:
    "11 seconds is forever. 2 seconds is invisible. That's the gap we closed.",
  heroMeta: [
    { label: 'Client', value: 'The Sleep Company' },
    { label: 'Impact Pillar', value: 'Customer Experience' },
  ],

  brandIntro: [
    "The Sleep Company is India's fastest-growing sleep wellness brand, built on patented SmartGRID technology. Their Shopify storefront was significantly underperforming — with page load times reaching 11 seconds, they were losing potential customers before pages even loaded. Beyond speed, they needed to bridge online and offline experiences, helping customers find physical stores and book in-person consultations for a considered, high-value purchase.",
    "We delivered a complete digital transformation: comprehensive Shopify performance overhaul, an intelligent store locator, integrated appointment booking, and WhatsApp commerce via Gupshup — reducing load time from 11 seconds to 2, boosting Lighthouse performance by 87%, and creating a seamless bridge between digital research and in-store experience.",
  ],
  brandTags: ['D2C Sleep Tech', 'Shopify Performance', 'WhatsApp Commerce', 'Gupshup', 'Store Locator', 'SmartGRID', 'India'],
  brandStats: [
    { name: 'Platform', value: 'Shopify + Gupshup WhatsApp' },
    { name: 'Load Time', value: '11 seconds → 2 seconds' },
    { name: 'Region', value: 'India' },
    { name: 'Focus', value: 'Page Speed, SEO, Store Discovery & Omnichannel Booking' },
    { name: 'Year', value: '2024' },
  ],

  peopleIntro:
    "Three people were experiencing the cost of a slow, disconnected digital experience — a customer who bounced before the page loaded, a marketing manager watching conversion data deteriorate, and a brand director whose premium brand was delivered on underperforming infrastructure.",
  personas: [
    {
      avatar: '🛌',
      name: 'Megha',
      age: 37,
      role: 'Customer · researching mattresses from her phone',
      quote:
        "Shoppers clicking through paid ads for the SmartGRID mattress were met with an 11-second load time. Attention drifted to other apps while the page loaded, and many did not return — a premium product was being evaluated against a storefront that communicated the opposite of what it cost.",
      painTag: '⏳ 11-second load time causing customer bounce before the page even appeared',
    },
    {
      avatar: '📊',
      name: 'Arjun',
      age: 31,
      role: 'Performance Marketing Manager · The Sleep Company',
      quote:
        "Significant paid traffic budgets were being eroded by landing pages with a Lighthouse performance score of 32. Performance marketing teams understood the cause but lacked the Shopify-specific expertise needed to resolve it without risking existing functionality.",
      painTag: '📉 Poor Lighthouse scores undermining paid traffic conversion rates',
    },
    {
      avatar: '🏬',
      name: 'Kavitha',
      age: 44,
      role: 'VP Digital · The Sleep Company',
      quote:
        "For a high-consideration product like a premium mattress, digital teams knew customers researched online before visiting a store. Despite a network of experience centers across India, there was no store locator or appointment booking system — the online-to-offline journey was broken at the moment it mattered most.",
      painTag: '🗺️ No store discovery or appointment booking — breaking the online-to-offline journey',
    },
  ],

  challengeParagraphs: [
    "The Sleep Company's website performance was a competitive liability. An 11-second load time on fast WiFi created immediate bounce for Megha and thousands of customers like her — paid acquisition investments were generating traffic that the site was failing to convert. The Lighthouse performance score of 32 reflected a technically complex Shopify build that had grown without performance optimization, accumulating render-blocking scripts, unoptimized media, and inefficient code that compounded with every new feature addition.",
    "Beyond speed, Kavitha's team recognized that the digital experience was disconnected from the physical one. Customers who researched the SmartGRID mattress online had no way to find nearby experience centers or book in-person product trials. WhatsApp — the channel where millions of Indian consumers are most comfortable — wasn't part of the customer journey at all. The brand had built exceptional retail experiences but no digital pathway to lead customers to them.",
  ],
  challengeTension:
    "A premium sleep brand spending significantly on traffic acquisition — and losing most of it before the page finished loading.",
  challengeMetrics: [
    { name: 'Page load time (fast WiFi)', value: '11 seconds', barPercent: 95, barStyle: 'gold' },
    { name: 'Google Lighthouse performance score', value: '32 / 100', barPercent: 90, barStyle: 'gold' },
    { name: 'SEO score', value: '61 / 100 — below competitive standard', barPercent: 82, barStyle: 'gold' },
    { name: 'Online-to-offline store discovery', value: 'No store locator or booking system', barPercent: 85, barStyle: 'gold' },
    { name: 'WhatsApp commerce capability', value: 'Absent — largest messaging channel unused', barPercent: 78, barStyle: 'soft' },
  ],

  approachIntro:
    "We built a site that loaded before Megha lost patience, gave Arjun the Lighthouse score his campaigns needed, and gave Kavitha the omnichannel bridge her customers were looking for.",
  approachCards: [
    {
      icon: '⚡',
      title: 'Comprehensive Shopify Performance Overhaul',
      description:
        "Revamped entire Shopify website architecture — code optimization, asset compression, lazy loading, elimination of render-blocking resources — achieving sub-2-second load times from an 11-second baseline.",
      badge: 'Human-Centricity',
    },
    {
      icon: '🗺️',
      title: 'Intelligent Store Locator System',
      description:
        "Built location-based store finder enabling customers to discover nearest Sleep Company experience centers with directions, contact details, and real-time availability — seamless online-to-offline transition for considered purchases.",
      badge: 'Human-Centricity',
    },
    {
      icon: '📅',
      title: 'Integrated Appointment Booking',
      description:
        "Developed appointment scheduling system allowing customers to book in-store consultations and product trials directly from the website — reducing friction for high-consideration mattress purchases by enabling customers to control their timing.",
      badge: 'Human-Centricity',
    },
    {
      icon: '💬',
      title: 'WhatsApp Commerce via Gupshup',
      description:
        "Integrated Gupshup-powered WhatsApp automation enabling customers to find nearby stores and book appointments conversationally — meeting customers on their preferred platform and capturing intent through India's dominant messaging channel.",
      badge: 'Sustainability',
    },
    {
      icon: '🔍',
      title: 'SEO Architecture Improvement',
      description:
        "Addressed foundational SEO gaps — structured data, meta optimization, improved crawlability, and performance factors — increasing SEO score from 61 to 92 and improving organic search visibility across high-intent mattress queries.",
      badge: 'Sustainability',
    },
    {
      icon: '📊',
      title: 'Lighthouse Score Optimization',
      description:
        "Targeted all Core Web Vitals metrics — LCP, FID, CLS — alongside Lighthouse performance pillars to achieve an 87% performance score improvement, turning Arjun's paid landing pages from a conversion liability into a conversion asset.",
      badge: 'Resilience',
    },
  ],

  resultCards: [
    {
      number: '82%',
      label: 'Page load speed improvement — from 11 seconds to 2 seconds on fast WiFi',
      humanNote: "Megha's page loads before she loses patience — and before she scrolls away",
    },
    {
      number: '87%',
      label: 'Lighthouse performance score improvement — from 32 to 60',
      humanNote: "Arjun's paid traffic lands on a page that converts, not one that bounces",
    },
    {
      number: '51%',
      label: 'SEO score improvement — from 61 to 92 — driving organic search visibility',
      humanNote: 'Higher-intent customers discover The Sleep Company before competitors',
    },
    {
      number: '✓',
      label: 'Omnichannel store discovery and booking via website and WhatsApp',
      humanNote: "Kavitha's online visitors can find and visit experience centers in clicks",
    },
  ],

  humanImpactCards: [
    {
      icon: '🛌',
      title: 'A Page That Holds Attention',
      description:
        "Megha's experience is transformed — the SmartGRID page loads in 2 seconds, the product imagery is immediate, and the path from research to store appointment is clear. The website now matches the premium product it represents.",
    },
    {
      icon: '📊',
      title: 'Traffic That Converts',
      description:
        "Arjun's performance marketing campaigns land on a site with an 87% better Lighthouse score. Paid traffic that was previously bouncing due to load time now reaches the content it came for — and converts at a measurably higher rate.",
    },
    {
      icon: '🏬',
      title: 'Online Research, In-Store Conversion',
      description:
        "Kavitha's online-to-offline bridge is built. Customers who research the SmartGRID mattress online can find their nearest experience center in two clicks or via WhatsApp — and book an appointment without leaving the platform they're already on.",
    },
    {
      icon: '📈',
      title: 'Organic Growth Unlocked',
      description:
        "A 51% SEO score improvement means The Sleep Company surfaces more consistently for high-intent mattress queries — organic discovery driving qualified traffic without proportional acquisition spend.",
    },
  ],

  ctaBadge: "Let's transform your website performance",
  ctaHeadline: 'Speed is a product feature.<br />11 seconds is a customer lost.',
  ctaSubline:
    "Shopify performance optimization, omnichannel store discovery, and WhatsApp commerce — turning your digital presence into the beginning of the in-store journey.",
  ctaPrimary: 'Start a Conversation',
  ctaSecondary: 'View More Case Studies',
}

export default tscWebsite
