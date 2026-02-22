import { CaseStudy } from '@/types/case-study'
import styles from './Hero.module.css'

interface HeroProps {
  data: Pick<CaseStudy, 'eyebrow' | 'headline' | 'subheadline' | 'heroMeta'>
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.eyebrow}>{data.eyebrow}</div>
      <h1
        className={styles.headline}
        dangerouslySetInnerHTML={{ __html: data.headline }}
      />
      <p className={styles.sub}>{data.subheadline}</p>
      <div className={styles.meta}>
        {data.heroMeta.map((item) => (
          <div key={item.label} className={styles.metaItem}>
            <label>{item.label}</label>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
      <div className={styles.scrollCue}>↓ Read the story</div>
    </section>
  )
}
