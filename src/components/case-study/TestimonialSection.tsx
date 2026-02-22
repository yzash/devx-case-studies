import { Testimonial } from '@/types/case-study'
import styles from './TestimonialSection.module.css'

interface TestimonialSectionProps {
  testimonial: Testimonial
}

export default function TestimonialSection({ testimonial }: TestimonialSectionProps) {
  return (
    <section style={{ background: '#fff' }}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.quoteIcon}>&ldquo;</div>
          <blockquote className={styles.quote}>{testimonial.quote}</blockquote>
          <div className={styles.author}>
            <div className={styles.name}>{testimonial.name}</div>
            <div className={styles.title}>{testimonial.title}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
