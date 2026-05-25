"use client";

import { useState } from "react";
import styles from "./NotifySection.module.css";

export default function NotifySection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // In production this will call an API route
    setSubmitted(true);
  }

  return (
    <section className={styles.section} id="notify">
      <div className="container">
        <div className={styles.card}>
          {/* Decoration */}
          <div className={styles.blob} aria-hidden="true" />

          <div className={styles.content}>
            <span className={styles.eyebrow}>Launching Soon</span>
            <h2 className={styles.title}>
              Be the first campus<br />to go proxy-free
            </h2>
            <p className={styles.subtitle}>
              Join the waitlist and get early access when <span className={styles.brandN}>n</span>exalaya rolls out.
              No spam — only what matters.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className={styles.form} id="notify-form">
                <input
                  id="notify-email"
                  type="email"
                  placeholder="Enter your college email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.input}
                />
                <button type="submit" className={styles.btn} id="notify-submit-btn">
                  Notify Me
                </button>
              </form>
            ) : (
              <div className={styles.success} id="notify-success">
                <span>✅</span>
                <span>You&apos;re on the list! We&apos;ll reach out soon.</span>
              </div>
            )}

            <p className={styles.note}>
              🔒 Your email is safe. We don&apos;t share data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
