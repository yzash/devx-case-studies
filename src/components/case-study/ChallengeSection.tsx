import { CaseStudy } from '@/types/case-study'
import styles from './ChallengeSection.module.css'

interface ChallengeSectionProps {
  data: Pick<CaseStudy, 'challengeParagraphs' | 'challengeTension' | 'challengeMetrics'>
}

export default function ChallengeSection({ data }: ChallengeSectionProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.copy}>
            <div className="section-label">The Challenge</div>
            <h2 className="section-title">
              Luxury doesn&apos;t forgive a slow page<br />or a broken checkout.
            </h2>
            {data.challengeParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            {data.challengeTension && (
              <div className={styles.tensionBox}>
                <p>&ldquo;{data.challengeTension}&rdquo;</p>
              </div>
            )}
          </div>

          <div className={styles.metricsCard}>
            <div className={styles.mcHeader}>Complexity factors at the start</div>
            {data.challengeMetrics.map((metric) => (
              <div key={metric.name} className={styles.metricRow}>
                <div className={styles.metricTop}>
                  <span className={styles.metricName}>{metric.name}</span>
                  <span className={styles.metricVal}>{metric.value}</span>
                </div>
                <div className={styles.barTrack}>
                  <div
                    className={`${styles.barFill} ${metric.barStyle === 'gold' ? styles.gold : styles.soft}`}
                    style={{ width: `${metric.barPercent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
