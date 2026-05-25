import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Left — Brand */}
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <span className={styles.logoText}><span className={styles.logoN}>n</span>exalaya</span>
          </div>
          <p className={styles.tagline}>Where Campus Connects</p>
          <p className={styles.copy}>© {new Date().getFullYear()} nexalaya. All rights reserved.</p>
        </div>

        {/* Right — Links */}
        <div className={styles.links}>
          <a href="#features" className={styles.link}>Features</a>
          <a href="#how-it-works" className={styles.link}>How it works</a>
          <a href="#notify" className={styles.link}>Early Access</a>
          <a href="mailto:hello@nexalaya.com" className={styles.link}>Contact</a>
        </div>
      </div>
    </footer>
  );
}
