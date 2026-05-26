"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className={styles.hero} id="about">
      <div className={styles.bgBlob1} aria-hidden="true" />
      <div className={styles.bgBlob2} aria-hidden="true" />
      <div className={styles.bgGrid} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>

        {/* Badge — stage */}
        <div className={`${styles.badge} ${mounted ? styles.revealFadeUp : styles.hidden}`}>
          <span className={styles.badgeDot} />
          Prototype stage : Launching soon
        </div>

        {/* Main headline */}
        <div className={styles.subline}>
          <div 
            className={`${styles.sublineLine} ${mounted ? styles.revealFadeUp : styles.hidden}`}
            style={{ animationDelay: "0.1s" }}
          >
            Attendance in <span className={styles.highlightWord}>10</span> Seconds
          </div>
          <div 
            className={`${styles.sublineLine} ${styles.gradientChar} ${mounted ? styles.revealFadeUp : styles.hidden}`}
            style={{ animationDelay: "0.2s" }}
          >
            Automated. Full Control.
          </div>
        </div>

        {/* Sub-copy */}
        <p 
          className={`${styles.subCopy} ${mounted ? styles.revealFadeUp : styles.hidden}`}
          style={{ animationDelay: "0.3s" }}
        >
          An IoT-powered system built for Indian colleges — proxy-proof,
          real-time, and live in every classroom in under 10 seconds.
        </p>

        {/* CTA row */}
        <div
          className={`${styles.ctaRow} ${mounted ? styles.revealFadeUp : styles.hidden}`}
          style={{ animationDelay: "0.4s" }}
        >
          <a href="#notify" className={styles.primaryBtn} id="hero-demo-btn">
            Book a Campus Demo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#how-it-works" className={styles.secondaryBtn} id="hero-learn-btn">
            See how it works
          </a>
        </div>

      </div>
    </section>
  );
}
