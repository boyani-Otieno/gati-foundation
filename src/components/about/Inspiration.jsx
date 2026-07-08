import React from "react";
import styles from "./Inspiration.module.css";

const values = [
  {
    title: "Courage",
    text: "Margaret Robi demonstrated remarkable courage in believing that every girl deserved dignity, education, and the opportunity to determine her own future."
  },
  {
    title: "Hope",
    text: "She believed that lasting change begins when communities choose hope over harmful traditions and invest in the potential of every child."
  },
  {
    title: "Education",
    text: "Although opportunities were limited during her lifetime, Margaret never stopped believing that education could transform lives and communities."
  },
  {
    title: "Legacy",
    text: "Today, her values continue to guide every programme, every mentorship session, and every life touched by the Foundation."
  }
];

const Inspiration = () => {
  return (
    <>
      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <span>OUR INSPIRATION</span>

          <h1>
            The Legacy of
            <br />
            Margaret Robi
          </h1>

          <p>
            One woman's courage continues to inspire generations of girls,
            women, and communities across Kenya.
          </p>
        </div>
      </section>

      {/* WHO SHE WAS */}

      <section className={styles.storySection}>

        <div className={styles.container}>

          <div className={styles.imageSide}>
            <img
              src="/images/margaret-robi.jpg"
              alt="Margaret Robi"
            />
          </div>

          <div className={styles.textSide}>

            <span className={styles.sectionTag}>
              HER STORY
            </span>

            <h2>
              A Woman of Extraordinary Courage
            </h2>

            <p>
              Margaret Robi was a woman of extraordinary courage,
              resilience, and hope. Raised within the Kuria community,
              she experienced firsthand the realities that continue to
              affect many girls and women today, including Female
              Genital Mutilation (FGM), gender discrimination, and
              limited educational opportunities.
            </p>

            <p>
              Despite the opportunities she never had, Margaret never
              accepted that a girl's future should be determined by her
              gender or circumstances. She believed every girl deserved
              dignity, education, and the freedom to dream beyond the
              limitations imposed by society.
            </p>

          </div>

        </div>

      </section>

      {/* LEGACY */}

      <section className={styles.legacySection}>

        <div className={styles.container}>

          <div className={styles.textSide}>

            <span className={styles.sectionTag}>
              HER LEGACY
            </span>

            <h2>
              A Legacy That Lives On
            </h2>

            <p>
              Inspired by her mother's unwavering belief in education,
              equality, and hope, Jerida Gati founded the Margaret Robi
              Foundation in 2021 to carry forward that vision.
            </p>

            <p>
              Today the Foundation works alongside schools,
              communities, parents, and young women to dismantle
              harmful cultural practices, promote leadership, and
              empower girls to reach their full potential.
            </p>

          </div>

          <div className={styles.imageSide}>
            <img
              src="/images/jeda.jpeg"
              alt="Jerida Gati"
            />
          </div>

        </div>

      </section>

      {/* VALUES */}

      <section className={styles.valuesSection}>

        <div className={styles.valuesHeader}>

          <span>VALUES SHE INSPIRED</span>

          <h2>
            Her Spirit Continues
            <br />
            Through Our Work
          </h2>

        </div>

        <div className={styles.valuesGrid}>

          {values.map((value, index) => (

            <div className={styles.valueCard} key={index}>

              <h3>{value.title}</h3>

              <p>{value.text}</p>

            </div>

          ))}

        </div>

      </section>

      {/* QUOTE */}

      <section className={styles.quoteSection}>

        <blockquote>
          "When girls are empowered through education,
          dignity, and opportunity, entire communities
          flourish."
        </blockquote>

        <span>
          — Inspired by the life and legacy of Margaret Robi
        </span>

      </section>

      {/* CTA */}

      <section className={styles.ctaSection}>

        <h2>
          Continue Her Legacy
        </h2>

        <p>
          Together we can ensure every girl has the opportunity
          to learn, lead, and thrive.
        </p>

        <a href="/contact" className={styles.ctaButton}>
          Join Our Mission
        </a>

      </section>

    </>
  );
};

export default Inspiration;