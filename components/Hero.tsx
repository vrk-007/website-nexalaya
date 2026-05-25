"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

// The headline split at the gradient boundary
const PLAIN_PART = "Where Campus ";
const GRADIENT_PART = "Connects";
const FULL_TEXT = PLAIN_PART + GRADIENT_PART;

// Per-character stagger: how many ms to add per character index
const STAGGER_MS = 55;
// Delay before the very first character starts
const INITIAL_DELAY_MS = 300;

// Once the last character animation finishes, reveal the rest.
// Last char index = FULL_TEXT.length - 1
// Its start delay = INITIAL_DELAY_MS + (FULL_TEXT.length - 1) * STAGGER_MS
// Add the animation duration (600ms) to know when to flip `done`
const DONE_DELAY_MS =
  INITIAL_DELAY_MS + (FULL_TEXT.length - 1) * STAGGER_MS + 600;

export default function Hero() {
  const [brandVisible, setBrandVisible] = useState(false);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // 1. Brand mark fades in first
    const t0 = setTimeout(() => setBrandVisible(true), 120);
    // 2. Headline starts typing shortly after
    const t1 = setTimeout(() => setStarted(true), 0);
    // 3. Reveal sub-content after all characters have animated in
    const t2 = setTimeout(() => setDone(true), DONE_DELAY_MS);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const renderChars = (text: string, offset: number, isGradient: boolean) =>
    text.split("").map((char, i) => {
      const globalIndex = offset + i;
      const delay = INITIAL_DELAY_MS + globalIndex * STAGGER_MS;
      return (
        <span
          key={globalIndex}
          className={`${styles.char} ${started ? styles.charVisible : ""} ${isGradient ? styles.gradientChar : ""
            }`}
          style={{ animationDelay: `${delay}ms` }}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      );
    });

  return (
    <section className={styles.hero} id="about">
      {/* Background decorations */}
      <div className={styles.bgBlob1} aria-hidden="true" />
      <div className={styles.bgBlob2} aria-hidden="true" />
      <div className={styles.bgGrid} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>

        {/* Badge */}
        <div
          className={`${styles.badge} ${done ? styles.revealFadeUp : styles.hidden}`}
        >
          <span className={styles.badgeDot} />
          Prototype Stage · Launching Soon
        </div>

        {/* ── Nexalaya brand mark ── */}
        <div className={`${styles.brandMark} ${brandVisible ? styles.revealFadeUp : styles.hidden}`}>
          <span className={styles.brandName}><span className={styles.brandNameN}>n</span>exalaya</span>
        </div>

        <h1 className={styles.headline} aria-label={FULL_TEXT}>
          {/* Screen-reader text (invisible, full string) */}
          <span className={styles.srOnly}>{FULL_TEXT}</span>

          {/* Animated characters */}
          <span aria-hidden="true">
            {renderChars(PLAIN_PART, 0, false)}
          </span>
          <span aria-hidden="true" className={styles.gradientWrap}>
            {renderChars(GRADIENT_PART, PLAIN_PART.length, true)}
          </span>
        </h1>

        {/* Sub heading — two-line Google-style display headline */}
        <div
          className={`${styles.subline} ${done ? styles.sublineVisible : ""}`}
          aria-label="Experience the lift of Seamless Automated Attendance & Management Ecosystem"
        >
          {/* Line 1 */}
          <div className={styles.sublineLine}>
            {["Experience", "the", "lift", "of", "Seamless"].map((word, i) => (
              <span
                key={word}
                className={`${styles.sublineWord} ${done ? styles.sublineWordVisible : ""} ${
                  i === 4 ? styles.sublineAccent : ""
                }`}
                style={{ animationDelay: `${0.05 + i * 0.07}s` }}
              >
                {word}
              </span>
            ))}
          </div>
          {/* Line 2 */}
          <div className={styles.sublineLine}>
            {["Automated", "Attendance", "&", "Management", "Ecosystem"].map((word, i) => (
              <span
                key={word}
                className={`${styles.sublineWord} ${done ? styles.sublineWordVisible : ""}`}
                style={{ animationDelay: `${0.40 + i * 0.07}s` }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div
          className={`${styles.ctaRow} ${done ? styles.revealFadeUp : styles.hidden}`}
          style={{ animationDelay: "0.17s" }}
        >
          <a href="#notify" className={styles.primaryBtn} id="hero-notify-btn">
            Get Early Access
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#how-it-works" className={styles.secondaryBtn} id="hero-learn-btn">
            See how it works
          </a>
        </div>

        {/* Stats row */}
        <div
          className={`${styles.statsRow} ${done ? styles.revealFadeUp : styles.hidden}`}
          style={{ animationDelay: "0.30s" }}
        >
          {[
            { number: "99.9%", label: "Proxy Detection" },
            { number: "<2s", label: "Recognition Speed" },
            { number: "100%", label: "Attendance Accuracy" },
          ].map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
