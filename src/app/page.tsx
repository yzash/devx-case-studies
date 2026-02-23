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

const PILLAR_ABBR: Record<Pillar, string> = {
  'Customer Experience': 'CX',
  'Enterprise Architecture': 'EA',
  'AI - Ops': 'AI',
  'Marketing Automation': 'MA',
}

function slugHash(slug: string): number {
  return Math.abs(slug.split('').reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 0))
}

function interleaveByPillar(all: CaseStudyMeta[]): CaseStudyMeta[] {
  const groups = PILLARS.map(p => all.filter(cs => cs.pillar === p))
  const result: CaseStudyMeta[] = []
  const maxLen = Math.max(...groups.map(g => g.length))
  for (let i = 0; i < maxLen; i++) {
    for (const group of groups) {
      if (i < group.length) result.push(group[i])
    }
  }
  return result
}

export default function HomePage() {
  const [activePillar, setActivePillar] = useState<Pillar | 'All'>('All')

  const displayItems =
    activePillar === 'All'
      ? interleaveByPillar(ALL_CASE_STUDIES)
      : ALL_CASE_STUDIES.filter((cs) => cs.pillar === activePillar)

  return (
    <>
      <Nav showCaseStudyTag={false} />
      <main>
        {/* ── HERO ── */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className={`container ${styles.heroInner}`}>
            <h1 className={styles.headline}>
              Work that <em>moves people.</em>
              <br />
              Stories worth telling.
            </h1>
            <p className={styles.sub}>
              Every case study starts with a person — a shopper, an operator, an engineer.
              Then we show what we built to make their world better.
            </p>
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
            {activePillar !== 'All' && (
              <div className={styles.pillarHeader}>
                <div className={styles.pillarIcon}>{PILLAR_ICONS[activePillar]}</div>
                <div className={styles.pillarHeaderText}>
                  <h2 className={styles.pillarTitle}>{activePillar}</h2>
                </div>
              </div>
            )}
            <div className={styles.grid}>
              {displayItems.map((cs) => (
                <CaseStudyCard key={cs.slug} cs={cs} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function CardVisual({ cs }: { cs: CaseStudyMeta }) {
  const initials = cs.client
    .split(/[\s&+]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0] || '')
    .join('')
    .toUpperCase()

  const h = slugHash(cs.slug)
  const accent = cs.accent
  const gradId = `g${cs.slug.replace(/[^a-z0-9]/gi, '')}`
  const maskId = `m${cs.slug.replace(/[^a-z0-9]/gi, '')}`

  // Deterministic node positions with variety per card
  const nodes = [
    { x: 72 + (h % 38), y: 30 + (h % 24) },
    { x: 198 + ((h >> 3) % 30), y: 26 + ((h >> 4) % 24) },
    { x: 220 + ((h >> 5) % 24), y: 96 + ((h >> 2) % 24) },
    { x: 52 + ((h >> 6) % 34), y: 106 + ((h >> 7) % 24) },
    { x: 145 + ((h >> 8) % 30), y: 16 + ((h >> 9) % 16) },
  ]
  const cx = 148, cy = 76

  return (
    <div className={styles.cardVisual}>
      <svg
        viewBox="0 0 300 148"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
      >
        <defs>
          <radialGradient id={gradId} cx="50%" cy="50%" r="58%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.32" />
            <stop offset="100%" stopColor="#0d0d14" stopOpacity="0" />
          </radialGradient>
          <clipPath id={maskId}>
            <rect width="300" height="148" />
          </clipPath>
        </defs>

        {/* Background */}
        <rect width="300" height="148" fill="#0d0d14" />
        <rect width="300" height="148" fill={`url(#${gradId})`} />

        {/* Subtle mesh grid */}
        {[1, 2, 3, 4, 5].map(i => (
          <line
            key={`gh${i}`}
            x1="0" y1={i * 25} x2="300" y2={i * 25}
            stroke="rgba(255,255,255,0.035)" strokeWidth="0.5"
          />
        ))}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
          <line
            key={`gv${i}`}
            x1={i * 30} y1="0" x2={i * 30} y2="148"
            stroke="rgba(255,255,255,0.035)" strokeWidth="0.5"
          />
        ))}

        {/* Connection lines from center to satellite nodes */}
        {nodes.map((n, i) => (
          <line
            key={`l${i}`}
            x1={cx} y1={cy} x2={n.x} y2={n.y}
            stroke={accent} strokeOpacity="0.2" strokeWidth="0.8"
            clipPath={`url(#${maskId})`}
          />
        ))}

        {/* Outer orbit ring */}
        <circle cx={cx} cy={cy} r="48"
          fill="none" stroke={accent} strokeOpacity="0.1" strokeWidth="1"
          clipPath={`url(#${maskId})`}
        />
        {/* Inner dashed orbit */}
        <circle cx={cx} cy={cy} r="30"
          fill="none" stroke={accent} strokeOpacity="0.08" strokeWidth="0.5"
          strokeDasharray="3 5"
          clipPath={`url(#${maskId})`}
        />

        {/* Satellite nodes (human touchpoints) */}
        {nodes.map((n, i) => (
          <circle
            key={`n${i}`}
            cx={n.x} cy={n.y}
            r={i === 0 ? 3.5 : 2.2}
            fill={accent} fillOpacity={0.38 + (i % 3) * 0.1}
          />
        ))}

        {/* Ambient scatter dots */}
        <circle cx={20 + h % 30} cy={12 + h % 20} r="1" fill="rgba(255,255,255,0.07)" />
        <circle cx={262 + h % 28} cy={120 + h % 20} r="1.5" fill={accent} fillOpacity="0.16" />
        <circle cx={h % 38} cy={88 + h % 44} r="1" fill={accent} fillOpacity="0.12" />
        <circle cx={280 + h % 15} cy={30 + h % 35} r="1" fill="rgba(255,255,255,0.06)" />

        {/* Center glow */}
        <circle cx={cx} cy={cy} r="24" fill={accent} fillOpacity="0.09" />
        <circle cx={cx} cy={cy} r="24"
          fill="none" stroke={accent} strokeOpacity="0.4" strokeWidth="1.5"
        />

        {/* Brand initials */}
        <text
          x={cx} y={cy + 1}
          textAnchor="middle" dominantBaseline="middle"
          fill={accent}
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="15" fontWeight="700" letterSpacing="1"
        >
          {initials}
        </text>

        {/* Bottom label bar */}
        <rect y="122" width="300" height="26" fill="rgba(0,0,0,0.45)" />
        <text
          x="14" y="135"
          dominantBaseline="middle"
          fill="rgba(255,255,255,0.38)"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="7.5" fontWeight="600" letterSpacing="2"
        >
          {cs.client.toUpperCase().slice(0, 28)}
        </text>
        <text
          x="286" y="135"
          textAnchor="end" dominantBaseline="middle"
          fill={accent}
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="7.5" fontWeight="700" letterSpacing="1"
          fillOpacity="0.7"
        >
          {PILLAR_ABBR[cs.pillar]}
        </text>
      </svg>
    </div>
  )
}

function CaseStudyCard({ cs }: { cs: CaseStudyMeta }) {
  const inner = (
    <>
      <CardVisual cs={cs} />
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
