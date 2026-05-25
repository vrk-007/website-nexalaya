import styles from "./Features.module.css";

const features = [
  {
    icon: "🧠",
    title: "Facial Recognition",
    description:
      "AI-powered face detection ensures only the real student gets marked present — no photos, no proxies.",
  },
  {
    icon: "🛡️",
    title: "Proxy Proof",
    description:
      "Multi-layer liveness detection prevents proxy attendance. Every mark is authentic and tamper-resistant.",
  },
  {
    icon: "⚡",
    title: "Real-Time Updates",
    description:
      "Attendance is recorded instantly and synced across all devices. Professors see live status in their dashboard.",
  },
  {
    icon: "📊",
    title: "Smart Analytics",
    description:
      "Detailed attendance reports, trends, and alerts for low-attendance students — all in one place.",
  },
  {
    icon: "🎓",
    title: "Built for Colleges",
    description:
      "Designed around how real college systems work — supports multiple departments, batches, and timetables.",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    description:
      "All biometric data is encrypted and stored safely. Compliant with privacy standards from day one.",
  },
];

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}><span className={styles.eyebrowWhy}>Why </span><span className={styles.brandN}>n</span>exalaya</span>
          <h2 className={styles.title}>
            Everything your campus needs,<br />
            <span className={styles.accent}>nothing it doesn't</span>
          </h2>
          <p className={styles.subtitle}>
            We built <span className={styles.brandN}>n</span>exalaya to solve one problem really well — making sure the
            right student gets marked present, every time.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.iconBox}>{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
