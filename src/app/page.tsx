'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ALL_CASE_STUDIES, PILLARS } from '@/data/registry'
import { CaseStudyMeta, Pillar } from '@/types/case-study'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './page.module.css'

const PILLAR_ICONS: Record<Pillar, string> = {
  'Customer Experience': '🛍️',
  'Enterprise Architecture': '🏗️',
  'AI - Ops': '🤖',
  'Marketing Automation': '📈',
}

const PILLAR_DESCRIPTIONS: Record<Pillar, string> = {
  'Customer Experience': 'Storefronts, apps, and commerce journeys that put the shopper first.',
  'Enterprise Architecture': 'Infrastructure, integrations, and migrations built for scale.',
  'AI - Ops': 'AI-powered automation that amplifies human capability.',
  'Marketing Automation': 'Data-driven growth engines and personalisation at scale.',
}

export default function HomePage() {
  const [activePillar, setActivePillar] = useState<Pillar | 'All'>('All')

  const grouped =
    activePillar === 'All'
      ? PILLARS.map((p) => ({
          pillar: p,
          items: ALL_CASE_STUDIES.filter((cs) => cs.pillar === p),
        }))
      : [
          {
            pillar: activePillar,
            items: ALL_CASE_STUDIES.filter((cs) => cs.pillar === activePillar),
          },
        ]

  return (
    <>
      <Nav showCaseStudyTag={false} />
      <main>
        {/* ── HERO ── */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.eyebrow}>Industry 5.0 · Human-Centric Commerce</div>
            <h1 className={styles.headline}>
              Work that <em>moves people.</em>
              <br />
              Stories worth telling.
            </h1>
            <p className={styles.sub}>
              Every case study starts with a person — a shopper, an operator, an engineer.
              Then we show what we built to make their world better.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>{ALL_CASE_STUDIES.length}+</span>
                <span className={styles.heroStatLabel}>Case Studies</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>{PILLARS.length}</span>
                <span className={styles.heroStatLabel}>Practice Areas</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>
                  {ALL_CASE_STUDIES.filter((c) => c.isPublished).length}
                </span>
                <span className={styles.heroStatLabel}>Live Stories</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── FILTER TABS ── */}
        <div className={styles.filterBar}>
          <div className="container">
            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${activePillar === 'All' ? styles.tabActive : ''}`}
                onClick={() => setActivePillar('All')}
              >
                All
              </button>
              {PILLARS.map((p) => (
                <button
                  key={p}
                  className={`${styles.tab} ${activePillar === p ? styles.tabActive : ''}`}
                  onClick={() => setActivePillar(p)}
                >
                  {PILLAR_ICONS[p]} {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── CASE STUDY GRID ── */}
        <section className={styles.gridSection}>
          <div className="container">
            {grouped.map(({ pillar, items }) => (
              <div key={pillar} className={styles.pillarGroup}>
                {activePillar === 'All' && (
                  <div className={styles.pillarHeader}>
                    <div className={styles.pillarIcon}>{PILLAR_ICONS[pillar]}</div>
                    <div className={styles.pillarHeaderText}>
                      <h2 className={styles.pillarTitle}>{pillar}</h2>
                      <p className={styles.pillarDesc}>{PILLAR_DESCRIPTIONS[pillar]}</p>
                    </div>
                    <span className={styles.pillarCount}>{items.length}</span>
                  </div>
                )}
                <div className={styles.grid}>
                  {items.map((cs) => (
                    <CaseStudyCard key={cs.slug} cs={cs} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function CaseStudyCard({ cs }: { cs: CaseStudyMeta }) {
  const inner = (
    <>
      <div className={styles.cardAccent} style={{ background: cs.accent }} />
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span className={styles.cardPillar}>{cs.pillar}</span>
          {cs.product && <span className={styles.cardProduct}>{cs.product}</span>}
          {!cs.isPublished && <span className={styles.comingSoon}>Coming Soon</span>}
        </div>
        <div className={styles.cardClient}>{cs.client}</div>
        <h3
          className={styles.cardTitle}
          dangerouslySetInnerHTML={{ __html: cs.headline }}
        />
        <p className={styles.cardSub}>{cs.subheadline}</p>
      </div>
      {cs.isPublished && (
        <div className={styles.cardFooter}>
          <span className={styles.cardRead}>Read case study →</span>
        </div>
      )}
    </>
  )

  return cs.isPublished ? (
    <Link
      href={`/case-studies/${cs.slug}`}
      className={styles.card}
      style={{ '--card-accent': cs.accent } as React.CSSProperties}
    >
      {inner}
    </Link>
  ) : (
    <div
      className={`${styles.card} ${styles.cardUnpublished}`}
      style={{ '--card-accent': cs.accent } as React.CSSProperties}
    >
      {inner}
    </div>
  )
}
