import { JourneyPhase } from '@/types/case-study'
import styles from './JourneySection.module.css'

interface JourneySectionProps {
  phases: JourneyPhase[]
  headline?: string
}

export default function JourneySection({ phases, headline }: JourneySectionProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-label">The Journey</div>
        <h2 className="section-title" dangerouslySetInnerHTML={{ __html: headline ?? 'How we got there — phase by phase.' }} />
        <div className={styles.timeline}>
          {phases.map((phase, i) => (
            <div key={phase.name} className={styles.phase}>
              <div className={styles.phaseNumber}>{String(i + 1).padStart(2, '0')}</div>
              <div className={styles.phaseContent}>
                <div className={styles.phaseHeader}>
                  <h3>{phase.name}</h3>
                  <span className={styles.timeframe}>{phase.timeframe}</span>
                </div>
                <p>{phase.description}</p>
                <div className={styles.humanBadge}>
                  <span>◆</span> {phase.humanBadge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
