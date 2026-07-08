import styles from "./Need.module.css";

const stats = [
  {
    number: "84%",
    label: "Girls & Women\nAffected by FGM",
  },
  {
    number: "17.1",
    label: "Median Age\nat First Marriage",
  },
  {
    number: "22%",
    label: "Girls Begin\nChildbearing",
  },
  {
    number: "23–35%",
    label: "Girls Reach\nSecondary School",
  },
  {
    number: "30%",
    label: "Increase in Climate\nDriven Crop Losses",
  },
];

export default function Need() {
  return (
    <section className={styles.needPage}>
      {/* ================= HERO ================= */}

      <section className={styles.hero}>
        <div className="container">

          <div className={styles.heroGrid}>

            <div className={styles.heroContent}>

              <span className={styles.kicker}>
                THE NEED
              </span>

              <h1>
                Every girl deserves
                <br />
                the freedom to
                <br />
                learn, grow,
                <br />
                and lead.
              </h1>

              <div className={styles.goldLine}></div>

              <p>
                In Kuria East, harmful cultural practices,
                poverty, recurring conflict and climate
                change continue to deny thousands of girls
                and women the opportunity to thrive.
                Behind every statistic is a life with
                limitless potential waiting to be realised.
              </p>

            </div>

            <div className={styles.heroImage}>
              <img
                src="/images/need/hero.jpg"
                alt="Girls learning together"
              />
            </div>

          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className={styles.statsSection}>
        <div className="container">

          <div className={styles.statsGrid}>

            {stats.map((item, index) => (

              <div
                key={index}
                className={styles.statCard}
              >

                <h2>{item.number}</h2>

                <p>
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className={styles.intro}>

        <div className="container">

          <div className={styles.introContent}>

            <span>
              OUR CHALLENGE
            </span>

            <h2>
              Breaking barriers.
              Expanding opportunities.
            </h2>

            <p>
              The challenges facing girls and women in
              Kuria East are deeply interconnected.
              Harmful cultural practices, conflict,
              poverty and climate change reinforce
              one another, creating cycles that prevent
              families from reaching their full potential.
              Understanding these realities is the first
              step toward creating lasting change.
            </p>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* CARD 1 */}
      {/* ===================================================== */}

      <section className={styles.storySection}>

        <div className="container">

          <div className={styles.storyGrid}>

            <div className={styles.storyImage}>

              <img
                src="/images/need/fgm.jpg"
                alt="Ending Female Genital Mutilation"
              />

            </div>

            <div className={styles.storyContent}>

              <span>01</span>

              <h2>
                Female Genital Mutilation
              </h2>

              <h3>84%</h3>

              <p>
                Female Genital Mutilation remains one of
                the greatest barriers facing girls in
                Kuria. While national prevalence has
                declined significantly, local estimates
                indicate that nearly eighty-four percent
                of girls and women have undergone the
                practice.
              </p>

              <p>
                Often performed during school holidays,
                FGM exposes girls to lifelong physical
                and emotional harm while increasing the
                risk of early marriage, school dropout
                and teenage pregnancy.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* CARD 2 */}
      {/* ===================================================== */}

      <section
        className={`${styles.storySection} ${styles.greenSection}`}
      >

        <div className="container">

          <div
            className={`${styles.storyGrid} ${styles.reverse}`}
          >

            <div className={styles.storyContent}>

              <span>02</span>

              <h2>
                Early & Forced Marriage
              </h2>

              <h3>17.1 Years</h3>

              <p>
                Migori County records one of the lowest
                median ages at first marriage in Kenya.
                In Kuria East, harmful traditional
                practices and poverty continue to push
                many girls into adulthood before they
                have completed their education.
              </p>

              <p>
                Once a girl undergoes the cut, she is
                often considered ready for marriage,
                denying her the opportunity to pursue
                education, leadership and economic
                independence.
              </p>

            </div>

            <div className={styles.storyImage}>

              <img
                src="/images/need/marriage.jpg"
                alt="Ending Child Marriage"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* CARD 3 */}
      {/* ===================================================== */}

      <section className={styles.storySection}>

        <div className="container">

          <div className={styles.storyGrid}>

            <div className={styles.storyImage}>

              <img
                src="/images/need/pregnancy.jpg"
                alt="Teenage Pregnancy"
              />

            </div>

            <div className={styles.storyContent}>

              <span>03</span>

              <h2>
                Early Childhood &
                Teenage Pregnancy
              </h2>

              <h3>22%</h3>

              <p>
                More than one in five girls aged
                fifteen to nineteen in Migori County
                have begun childbearing, placing their
                education, health and future at risk.
              </p>

              <p>
                Limited access to reproductive health
                information, poverty and early marriage
                continue to fuel adolescent pregnancy,
                leaving many girls trapped in cycles of
                vulnerability.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* CARD 4 */}
      {/* ===================================================== */}

      <section
        className={`${styles.storySection} ${styles.burgundySection}`}
      >

        <div className="container">

          <div
            className={`${styles.storyGrid} ${styles.reverse}`}
          >

            <div className={styles.storyContent}>

              <span>04</span>

              <h2>
                Barriers to
                Girls' Education
              </h2>

              <h3>23–35%</h3>

              <p>
                Only a small proportion of girls in
                Kuria East transition to secondary
                school. Harmful practices, poverty and
                conflict continue to interrupt learning
                and limit opportunities for future
                employment.
              </p>

              <p>
                Education remains one of the most
                powerful pathways out of poverty,
                making investment in girls essential
                for long-term community development.
              </p>

            </div>

            <div className={styles.storyImage}>

              <img
                src="/images/need/education.jpg"
                alt="Girls Education"
              />

            </div>

          </div>

        </div>

      </section>

            {/* ===================================================== */}
      {/* CARD 5 */}
      {/* ===================================================== */}

      <section className={styles.storySection}>

        <div className="container">

          <div className={styles.storyGrid}>

            <div className={styles.storyImage}>

              <img
                src="/images/need/gbv.jpg"
                alt="Gender-Based Violence"
              />

            </div>

            <div className={styles.storyContent}>

              <span>05</span>

              <h2>
                Gender-Based Violence
              </h2>

              <h3>
                Breaking the Cycle
              </h3>

              <p>
                Poverty and economic dependence continue to
                increase women's vulnerability to physical,
                emotional, sexual and economic violence.
                Limited access to resources and support
                services leaves many survivors without the
                protection they deserve.
              </p>

              <p>
                During periods of conflict, displacement and
                insecurity further weaken community
                protection systems, exposing women and girls
                to even greater risk.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* CARD 6 */}
      {/* ===================================================== */}

      <section
        className={`${styles.storySection} ${styles.greenSection}`}
      >

        <div className="container">

          <div
            className={`${styles.storyGrid} ${styles.reverse}`}
          >

            <div className={styles.storyContent}>

              <span>06</span>

              <h2>
                Conflict, Widowhood &
                Economic Exclusion
              </h2>

              <h3>
                Less than 12%
              </h3>

              <p>
                Recurring conflict along the
                Gwitembe–Ang'ata Barikoi border has
                displaced families, destroyed livelihoods
                and pushed many women into extreme
                vulnerability.
              </p>

              <p>
                Widows often lose their primary source of
                income while land ownership remains heavily
                unequal, limiting their ability to rebuild
                their lives and provide for their families.
              </p>

            </div>

            <div className={styles.storyImage}>

              <img
                src="/images/need/conflict.jpg"
                alt="Conflict and Economic Empowerment"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* CARD 7 */}
      {/* ===================================================== */}

      <section className={styles.storySection}>

        <div className="container">

          <div className={styles.storyGrid}>

            <div className={styles.storyImage}>

              <img
                src="/images/need/climate.jpg"
                alt="Climate Change"
              />

            </div>

            <div className={styles.storyContent}>

              <span>07</span>

              <h2>
                Climate Change &
                Food Insecurity
              </h2>

              <h3>
                +30%
              </h3>

              <p>
                Erratic rainfall, prolonged drought and
                declining agricultural productivity continue
                to deepen food insecurity throughout Kuria
                East.
              </p>

              <p>
                Women-led households are particularly
                affected as they struggle to secure food,
                income and stability while climate shocks
                and conflict reduce opportunities for
                recovery.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* QUOTE */}
      {/* ===================================================== */}

      <section className={styles.quoteSection}>

        <div className="container">

          <div className={styles.quoteContent}>

            <span className={styles.quoteTop}>
              OUR BELIEF
            </span>

            <blockquote>

              "When a girl is protected,
              educated and empowered,
              she transforms not only
              her own future, but the
              future of her family,
              her community and the
              generations that follow."

            </blockquote>

            <div className={styles.quoteLine}></div>

            <p>
              Margaret Robi Foundation
            </p>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* CTA */}
      {/* ===================================================== */}

      <section className={styles.ctaSection}>

        <div className="container">

          <div className={styles.ctaContent}>

            <span>
              JOIN THE MOVEMENT
            </span>

            <h2>

              The challenges are
              immense.

              <br />

              So is our determination.

            </h2>

            <p>

              Together we can protect girls,
              strengthen women and build
              resilient communities where
              every individual has the
              opportunity to thrive.

            </p>

            <div className={styles.ctaButtons}>

              <a
                href="/programs"
                className={styles.primaryBtn}
              >
                Explore Our Programmes
              </a>

              <a
                href="/donate"
                className={styles.secondaryBtn}
              >
                Support Our Work
              </a>

            </div>

          </div>

        </div>

      </section>

    </section>
  );
}