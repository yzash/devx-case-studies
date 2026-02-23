import { CaseStudy } from '@/types/case-study'
import styles from './BrandSection.module.css'

interface BrandSectionProps {
  data: Pick<CaseStudy, 'brandIntro' | 'brandTags' | 'brandStats'>
}

export default function BrandSection({ data }: BrandSectionProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.copy}>
            <div className="section-label">About the Brand</div>
            <h2 className="section-title">A house built on craft.<br />A debut built on care.</h2>
            {data.brandIntro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <div className={styles.tags}>
              {data.brandTags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.visualLabel}>Engagement at a glance</div>
            {data.brandStats.map((stat) => (
              <div key={stat.name} className={styles.stat}>
                <span className={styles.statName}>
                  <span className={styles.statDot} />
                  {stat.name}
                </span>
                <span className={styles.statVal}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
