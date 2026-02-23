import { CaseStudy } from '@/types/case-study'
import styles from './HumanImpactSection.module.css'

interface HumanImpactSectionProps {
  data: Pick<CaseStudy, 'humanImpactCards'>
}

export default function HumanImpactSection({ data }: HumanImpactSectionProps) {
  return (
    <section style={{ background: '#fff' }}>
      <div className="container">
        <div className="section-label">Human Impact</div>
        <h2 className="section-title">
          What changed for the people<br />on both sides of the screen.
        </h2>
        <div className={styles.grid}>
          {data.humanImpactCards.map((card) => (
            <div key={card.title} className={styles.card}>
              <div className={styles.icon}>{card.icon}</div>
              <div className={styles.content}>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
