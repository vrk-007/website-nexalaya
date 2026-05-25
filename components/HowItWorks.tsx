import styles from "./HowItWorks.module.css";

const steps = [
  {
    step: "01",
    title: "Professor starts session",
    description:
      "The professor opens the nexalaya dashboard, selects the subject, and triggers an attendance session with one tap.",
  },
  {
    step: "02",
    title: "Student scans face",
    description:
      "Students open their nexalaya app. The camera activates and performs a real-time liveness check — no photo tricks.",
  },
  {
    step: "03",
    title: "Verified & recorded",
    description:
      "Once verified, attendance is marked instantly. The professor's dashboard updates live. No paperwork, no chaos.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>How It Works</span>
          <h2 className={styles.title}>
            Simple as <span className={styles.accent}>1 — 2 — 3</span>
          </h2>
          <p className={styles.subtitle}>
            No complex setup. No hardware dependencies. <span className={styles.brandN}>n</span>exalaya works on any smartphone.
          </p>
        </div>

        {/* Steps */}
        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={s.step} className={styles.stepCard}>
              <div className={styles.stepNumber}>{s.step}</div>
              {i < steps.length - 1 && (
                <div className={styles.connector} aria-hidden="true" />
              )}
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
