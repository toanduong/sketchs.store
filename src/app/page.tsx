import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="gradient-bg" />

      <section className={styles.hero}>
        <h1 className={styles.title}>
          Elevate Your <br /> Creative Vision
        </h1>
        <p className={styles.subtitle}>
          The ultimate platform for modern creators to build, share, and scale their artistic output with precision and elegance.
        </p>
        <div className={styles.cta_container}>
          <a href="#" className={styles.primary_btn}>Get Started</a>
          <a href="#" className={styles.secondary_btn}>Learn More</a>
        </div>
      </section>

      <section className={styles.feature_grid}>
        <div className={styles.feature_card}>
          <div className={styles.icon} />
          <h3>Seamless Workflow</h3>
          <p>Optimize your creative process with tools designed for speed and efficiency.</p>
        </div>
        <div className={styles.feature_card}>
          <div className={styles.icon} />
          <h3>Global Scale</h3>
          <p>Reach your audience anywhere in the world with our high-performance edge network.</p>
        </div>
        <div className={styles.feature_card}>
          <div className={styles.icon} />
          <h3>Insightful Analytics</h3>
          <p>Make data-driven decisions with deep insights into how your content performs.</p>
        </div>
      </section>
    </main>
  );
}
