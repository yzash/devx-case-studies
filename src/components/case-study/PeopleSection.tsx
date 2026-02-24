import { CaseStudy } from '@/types/case-study'
import styles from './PeopleSection.module.css'

interface PeopleSectionProps {
  data: Pick<CaseStudy, 'personas' | 'peopleIntro'>
}

export default function PeopleSection({ data }: PeopleSectionProps) {
  return (
    <section style={{ background: '#fff' }}>
      <div className="container">
        <div className="section-label">The People</div>
        <h2 className="section-title">
          Before we wrote a line of code,<br />we thought about who&apos;d use it.
        </h2>
        <p className="section-intro">
          {data.peopleIntro ??
            'Three types of people needed this launch to feel effortless. We kept all three in mind throughout every build decision.'}
        </p>
        <div className={styles.grid}>
          {data.personas.map((persona, i) => (
            <div key={i} className={`${styles.card} ${styles[`card${i}`]}`}>
              <div className={styles.top}>
                <div className={styles.avatar}>{persona.avatar}</div>
                <div>
                  <div className={styles.role}>{persona.role}</div>
                </div>
              </div>
              <p className={styles.quote}>{persona.quote}</p>
              <span className={styles.pain}>{persona.painTag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
