"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const LINE_1 = ["Attendance", "in", "10", "Seconds."];
const LINE_2 = ["Zero", "Proxies.", "Full", "Control."];

// Words that get the blue gradient
const GRADIENT_WORDS = new Set(["Zero", "Proxies.", "Full", "Control."]);

const STAGGER_MS = 42;
const INITIAL_DELAY_MS = 150;

const LINE1_TEXT = LINE_1.join(" ");
const LINE2_TEXT = LINE_2.join(" ");
const TOTAL_CHARS = LINE1_TEXT.length + 1 + LINE2_TEXT.length;
const DONE_DELAY_MS = INITIAL_DELAY_MS + (TOTAL_CHARS - 1) * STAGGER_MS + 600;

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t1 = setTimeout(() => setStarted(true), 80);
    const t2 = setTimeout(() => setDone(true), DONE_DELAY_MS);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const renderWord = (
    word: string,
    globalOffset: number,
    isGradient: boolean
  ) =>
    word.split("").map((char, i) => {
      const delay = INITIAL_DELAY_MS + (globalOffset + i) * STAGGER_MS;
      return (
        <span
          key={i}
          className={[
            styles.char,
            mounted && started ? styles.charVisible : "",
            isGradient ? styles.gradientChar : "",
          ]
            .filter(Boolean)
            .join(" ")}
          style={{ animationDelay: `${delay}ms` }}
          aria-hidden="true"
        >
          {char}
        </span>
      );
    });

  const renderLine = (words: string[], lineStartOffset: number) => {
    let charOffset = lineStartOffset;
    return words.map((word) => {
      const wordOffset = charOffset;
      charOffset += word.length + 1;
      return (
        <span key={word} className={styles.wordGroup}>
          {renderWord(word, wordOffset, GRADIENT_WORDS.has(word))}
        </span>
      );
    });
  };

  const line2StartOffset = LINE1_TEXT.length + 1;

  return (
    <section className={styles.hero} id="about">
      <div className={styles.bgBlob1} aria-hidden="true" />
      <div className={styles.bgBlob2} aria-hidden="true" />
      <div className={styles.bgGrid} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>

        {/* Badge — NAAC angle */}
        <div className={`${styles.badge} ${mounted && done ? styles.revealFadeUp : styles.hidden}`}>
          <span className={styles.badgeDot} />
          NAAC Criteria 2 · 5 · 6 · 7 Ready
        </div>

        {/* Main headline — letter by letter */}
        <div
          className={styles.subline}
          aria-label="Attendance in 10 Seconds. Zero Proxies. Full Control."
        >
          <div className={styles.sublineLine}>
            {renderLine(LINE_1, 0)}
          </div>
          <div className={styles.sublineLine}>
            {renderLine(LINE_2, line2StartOffset)}
          </div>
        </div>

        {/* Sub-copy — visible after animation */}
        <p className={`${styles.subCopy} ${mounted && done ? styles.revealFadeUp : styles.hidden}`}
          style={{ animationDelay: "0.05s" }}>
          An IoT-powered system built for Indian colleges — proxy-proof,
          real-time, and live in every classroom in under 10 seconds.
        </p>

        {/* CTA row */}
        <div
          className={`${styles.ctaRow} ${mounted && done ? styles.revealFadeUp : styles.hidden}`}
          style={{ animationDelay: "0.15s" }}
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
