import { CaseStudy } from '@/types/case-study'
import styles from './ResultsSection.module.css'

interface ResultsSectionProps {
  data: Pick<CaseStudy, 'resultsHeadline' | 'resultCards'>
}

export default function ResultsSection({ data }: ResultsSectionProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-label">The Results</div>
        <h2 className="section-title" dangerouslySetInnerHTML={{ __html: data.resultsHeadline ?? 'Results that moved the needle.' }} />
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
