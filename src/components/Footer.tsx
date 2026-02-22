import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <span className={styles.logoText}>devx labs</span>
      </div>
      <div>Human-centric digital experiences · Industry 5.0 practitioners</div>
      <div>© {new Date().getFullYear()} DevXLabs</div>
    </footer>
  )
}
