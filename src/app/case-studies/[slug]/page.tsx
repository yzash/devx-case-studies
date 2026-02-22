import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getCaseStudyBySlug, ALL_CASE_STUDIES } from '@/data/registry'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Hero from '@/components/case-study/Hero'
import BrandSection from '@/components/case-study/BrandSection'
import PeopleSection from '@/components/case-study/PeopleSection'
import ChallengeSection from '@/components/case-study/ChallengeSection'
import ApproachSection from '@/components/case-study/ApproachSection'
import JourneySection from '@/components/case-study/JourneySection'
import ResultsSection from '@/components/case-study/ResultsSection'
import HumanImpactSection from '@/components/case-study/HumanImpactSection'
import TestimonialSection from '@/components/case-study/TestimonialSection'
import CTASection from '@/components/case-study/CTASection'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return ALL_CASE_STUDIES
    .filter((cs) => cs.isPublished)
    .map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const cs = getCaseStudyBySlug(slug)
  if (!cs) return {}
  return {
    title: `${cs.client} — DevX Labs Case Study`,
    description: cs.subheadline,
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const cs = getCaseStudyBySlug(slug)

  if (!cs) notFound()

  // Build CSS variables for this brand's accent colors
  const accentVars = {
    '--accent': cs.accent,
    '--accent-soft': cs.accentSoft ?? hexToRgba(cs.accent, 0.08),
    '--accent-light': cs.accentLight ?? cs.accent,
    '--pill-bg': hexToRgba(cs.accent, 0.07),
  } as React.CSSProperties

  return (
    <div style={accentVars}>
      <Nav pillar={cs.pillar} />
      <Hero data={cs} />
      <BrandSection data={cs} />
      {cs.personas.length > 0 && <PeopleSection data={cs} />}
      <ChallengeSection data={cs} />
      <ApproachSection data={cs} />
      {cs.journey && cs.journey.length > 0 && (
        <JourneySection phases={cs.journey} />
      )}
      <ResultsSection data={cs} />
      <HumanImpactSection data={cs} />
      {cs.testimonial && <TestimonialSection testimonial={cs.testimonial} />}
      <CTASection data={cs} />
      <Footer />
    </div>
  )
}

// Converts "#8a6530" to "rgba(138,101,48,0.08)"
function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}
