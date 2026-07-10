import React from "react";
import styles from "./Inspiration.module.css";

// const values = [
//   {
//     title: "Courage",
//     text: "Margaret Robi demonstrated remarkable courage in believing that every girl deserved dignity, education, and the opportunity to determine her own future."
//   },
//   {
//     title: "Hope",
//     text: "She believed that lasting change begins when communities choose hope over harmful traditions and invest in the potential of every child."
//   },
//   {
//     title: "Education",
//     text: "Although opportunities were limited during her lifetime, Margaret never stopped believing that education could transform lives and communities."
//   },
//   {
//     title: "Legacy",
//     text: "Today, her values continue to guide every programme, every mentorship session, and every life touched by the Foundation."
//   }
// ];

const Inspiration = () => {
  return (
    <>

      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span>OUR INSPIRATION</span>

          <h1>
            The Legacy of
            <br />
            Margaret Robi
          </h1>

          <p>
            Margaret Robi's life is a testament to the transformative power of
            courage, compassion, and education. Her unwavering belief in the
            potential of every girl continues to inspire the Foundation's
            mission today.
          </p>
        </div>
      </section>

      {/* DIVIDER */}

      <section className={styles.sectionDivider}>
        <div className={styles.goldDivider}></div>
      </section>

      {/* HER STORY */}

      <section className={styles.storySection}>
        <div className="container">

          <div className={styles.storyContent}>

            <span className={styles.storyTag}>
              HER STORY
            </span>

            <h2>
              A Woman of Extraordinary Courage
            </h2>

            <div className={styles.storyDivider}></div>

            <p>
              Some women inherit the world as it is. Others quietly reshape it
              for those who come after them. Margaret Robi was one of those
              women. Having lived through many of the challenges that continue
              to limit the opportunities and lives of girls and young women
              today including harmful cultural practices, inequality and
              barriers to education she believed that no girl's future should
              be determined by those circumstances, but by her own potential.
            </p>

            <p>
              For Margaret, education was never an end in itself. It was the
              beginning of freedom, choice and lasting change. Though her own
              circumstances were far from easy, she helped girls remain in
              school, opened her home to girls in need and walked alongside
              young women as they pursued education and skills training. Above
              all, she inspired them to rise beyond society's expectations,
              creating possibilities where many saw only limitations.
            </p>
          </div>

        </div>
      </section>

      {/* HER LEGACY */}

      <section className={styles.legacySection}>

        <div className="container">

           <div className={styles.legacyGrid}>

          <div className={styles.textSide}>

            <span className={styles.sectionTag}>
              HER LEGACY
            </span>

            <h2>
              A Legacy That Lives On
            </h2>

            <p>
              Inspired by her mother's unwavering belief in education,
              equality and hope, Jerida Gati founded the Margaret Robi
              Foundation in 2021 to carry forward that vision.
            </p>

            <p>
              Today the Foundation works alongside schools, communities,
              parents and young women to dismantle harmful cultural
              practices, promote leadership and empower girls to reach
              their full potential.
            </p>

          </div>

          <div className={styles.imageSide}>
            <img
              src="/images/jeda.jpeg"
              alt="Jerida Gati"
            />
          </div>
         </div>
        </div>

      </section>
            {/* VALUES */}

      {/* <section className={styles.valuesSection}>
        <div className="container">

          <div className={styles.valuesHeader}>
            <span>VALUES SHE INSPIRED</span>

            <h2>
              The Values That
              <br />
              Continue to Guide Us
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

        </div>
      </section> */}

      {/* QUOTE */}

      {/* <section className={styles.quoteSection}>
        <div className="container">

          <blockquote>
            "A brighter future is built when people choose to act. Together, we stand with girls and young women who too often shoulder the greatest burden in the wake of conflict and crisis while confronting harmful cultural practices and unequal opportunities. Although among those most affected, they remain too often excluded from the opportunities, resources, and decisions that define their futures. We are changing that by restoring dignity, expanding opportunity, and equipping them to rebuild their lives, support their families, and shape more resilient communities."
          </blockquote>

          <span>
            — Inspired by the life and legacy of Margaret Robi
          </span>

        </div>
      </section> */}

      {/* CALL TO ACTION */}

      <section className={styles.ctaSection}>
        <div className="container">

          <h2>
            Continue Her Legacy
          </h2>

          <p>
            Join us in carrying forward Margaret Robi's vision by
            empowering girls, strengthening women, and building
            resilient communities where every child has the
            opportunity to learn, lead, and thrive.
          </p>

          <a
            href="/donate"
            className={styles.ctaButton}
          >
            Support Our Mission
          </a>

        </div>
      </section>

    </>
  );
};

export default Inspiration;