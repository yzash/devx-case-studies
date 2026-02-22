import Link from 'next/link'
import { CaseStudy } from '@/types/case-study'
import styles from './CTASection.module.css'

interface CTASectionProps {
  data: Pick<CaseStudy, 'ctaBadge' | 'ctaHeadline' | 'ctaSubline' | 'ctaPrimary' | 'ctaSecondary'>
}

export default function CTASection({ data }: CTASectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {data.ctaBadge && (
          <div className={styles.badge}>
            <div className={styles.dot} />
            {data.ctaBadge}
          </div>
        )}
        <h2
          className={styles.headline}
          dangerouslySetInnerHTML={{ __html: data.ctaHeadline }}
        />
        <p className={styles.sub}>{data.ctaSubline}</p>
        <div className={styles.actions}>
          <a href="#" className="btn-primary">→ {data.ctaPrimary}</a>
          <Link href="/" className="btn-ghost">↓ {data.ctaSecondary}</Link>
        </div>
      </div>
    </section>
  )
}
