import Link from 'next/link'
import styles from './Nav.module.css'

interface NavProps {
  pillar?: string
  showCaseStudyTag?: boolean
}

export default function Nav({ pillar, showCaseStudyTag = true }: NavProps) {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoText}>devx labs</span>
      </Link>
      <div className={styles.right}>
        {pillar && (
          <span className={styles.pillarTag}>{pillar}</span>
        )}
        {showCaseStudyTag && (
          <span className={styles.tag}>Case Study</span>
        )}
      </div>
    </nav>
  )
}
