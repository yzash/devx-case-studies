import { CaseStudy } from '@/types/case-study'
import styles from './ResultsSection.module.css'

interface ResultsSectionProps {
  data: Pick<CaseStudy, 'resultCards'>
}

export default function ResultsSection({ data }: ResultsSectionProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-label">The Results</div>
        <h2 className="section-title">
          A debut that delivered on<br />every level that mattered.
        </h2>
        <div className={styles.grid}>
          {data.resultCards.map((card) => (
            <div key={card.label} className={styles.card}>
              <div className={styles.number}>{card.number}</div>
              <div className={styles.label}>{card.label}</div>
              <div className={styles.human}>{card.humanNote}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
