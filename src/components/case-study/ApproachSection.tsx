import { CaseStudy } from '@/types/case-study'
import styles from './ApproachSection.module.css'

interface ApproachSectionProps {
  data: Pick<CaseStudy, 'approachHeadline' | 'approachCards' | 'approachIntro'>
}

export default function ApproachSection({ data }: ApproachSectionProps) {
  return (
    <section style={{ background: '#fff' }}>
      <div className="container">
        <div className="section-label">Our Approach</div>
        <h2 className="section-title" dangerouslySetInnerHTML={{ __html: data.approachHeadline ?? 'Every technical decision had a<br />human consequence behind it.' }} />
        <p className="section-intro">
          {data.approachIntro ??
            "We didn't build features. We built experiences — tracing every engineering choice back to a real person who'd feel its effect."}
        </p>
        <div className={styles.grid}>
          {data.approachCards.map((card) => (
            <div key={card.title} className={styles.card}>
              <span className={styles.icon}>{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <span className={styles.badge}>{card.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
