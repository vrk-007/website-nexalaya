import styles from "./HowItWorks.module.css";

const steps = [
  {
    step: "01",
    title: "Professor taps \"Start Attendance\"",
    description:
      "On the nexalaya app, the professor selects the subject and taps once. The IoT module plugged into the classroom instantly activates a secure local network — no internet, no delay.",
  },
  {
    step: "02",
    title: "Face scan appears only in-range",
    description:
      "The facial recognition prompt appears only on the app of students physically inside the classroom. Students outside the range cannot mark attendance — proxy is structurally impossible.",
  },
  {
    step: "03",
    title: "Done in 10 seconds. Synced everywhere.",
    description:
      "Every verified face is marked instantly. The professor's dashboard updates live. Reports are generated automatically for the administration — zero paperwork, zero manual entry.",
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
            Three taps.<br />
            <span className={styles.accent}>Ten seconds.</span>
          </h2>
          <p className={styles.subtitle}>
            No complex setup. No dedicated hardware room. The IoT module plugs
            directly into any classroom — and your entire college goes smart.
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
