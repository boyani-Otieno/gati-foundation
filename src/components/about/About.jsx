import React from "react";
import styles from "./about.module.css";

const About = () => {
  const beliefs = [
    {
      title: "Our Vision",
      text: "A future where girls and women live free from harmful cultural practices, enjoy equal opportunities, and are empowered to realise their full potential as leaders within their families and communities.",
    },
    {
      title: "Our Mission",
      text: "To work alongside communities to eliminate harmful cultural practices, advance gender equality, expand access to education, and empower girls and women through leadership, mentorship, and advocacy.",
    },
    // {
    //   title: "Our Values",
    //   values: [
    //     "Dignity",
    //     "Equality",
    //     "Integrity",
    //     "Community",
    //     "Inclusion",
    //     "Sustainable Impact",
    //   ],
    // },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Jerida Gati",
      title: "Founder & Director",
      image: "/images/jeda.jpeg",
      text: "Jerida holds a Master of Arts in Co-operative and Community Development and a Master of Arts in Gender and Development Studies from Egerton University, alongside a Bachelor of Arts in Education. This interdisciplinary academic background directly informs her leadership at the Foundation, where she bridges community development with advocacy to drive systemic change. Through her experience as a former Community Coordinator in the Mathare slums, Jerida actively oversees the Foundation’s strategic direction, leading initiatives that promote education, gender equality, leadership development, and lasting social transformation.",
    },
    {
      id: 2,
      name: "Martha Boke",
      title: "Nutrition Expert & Climate Change Champion",
      image: "/images/boke.jpeg",
      text: "Martha is a 2024 Women’s Global Leadership Forum (WILD) Fellow and holds a Bachelor’s Degree in Nutrition and Dietetics from the Technical University of Kenya. Drawing on her experience in leading health institutions, she champions nutrition, women's health, and climate resilience. Her work strengthens food security and promotes healthier, more resilient communities for women and girls across Kuria.",
    },
    {
      id: 3,
      name: "Prudence Oloo",
      title: "Coordinator, Education Affairs",
      image: "/images/prudence.jpeg",
      text: "Prudence is an educator with a Bachelor's Degree in Education from Egerton University. Passionate about expanding educational opportunities for girls, she leads initiatives that encourage mentorship, academic excellence, and leadership development while supporting inclusive education within underserved communities.",
    },
    {
      id: 4,
      name: "Susan",
      title: "Programme Coordinator",
      image: "/images/susan.jpeg",
      text: "Susan coordinates community programmes and partnerships that strengthen local engagement and long-term development. She works closely with community members to ensure that programmes remain responsive, sustainable, and focused on improving the wellbeing of women, girls, and vulnerable households.",
    },
  ];

  return (
    <>
      {/* ABOUT INTRO */}

      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <span className={styles.overline}>WHO WE ARE</span>

              <h1>
                Building a Secure future
              </h1>

              <p>
                The Margaret Robi Foundation is a community-led organisation
                dedicated to advancing gender equality and creating opportunities
                for girls and women throughout Kuria. Inspired by the enduring
                legacy of Margaret Robi, our work seeks to transform harmful
                cultural practices, expand educational opportunities, strengthen
                leadership, and empower communities to create lasting change.
              </p>

              <p>
                Founded in 2021 by Jerida Gati, the Foundation believes that
                lasting transformation begins when girls are protected, educated,
                and empowered to become confident leaders capable of shaping
                their own futures.
              </p>
            </div>

            <div className={styles.storyImage}>
              <img
                src="/images/smiles-2.jpeg"
                alt="Margaret Robi Foundation community programme"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION VISION VALUES */}

      <section className={styles.beliefsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span>OUR FOUNDATION</span>
            <h2>Guided by purpose. Driven by impact.</h2>
          </div>

          <div className={styles.beliefsGrid}>
            {beliefs.map((item) => (
              <div key={item.title} className={styles.beliefCard}>
                <h3>{item.title}</h3>

                {item.values ? (
                  <ul>
                    {item.values.map((value) => (
                      <li key={value}>{value}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}

      <section className={styles.leadershipSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span>OUR LEADERSHIP</span>
            <h2>Meet the people guiding our mission.</h2>
          </div>

          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`${styles.leader} ${
                index % 2 !== 0 ? styles.reverse : ""
              }`}
            >
              <div className={styles.leaderContent}>
                <span className={styles.role}>{member.title}</span>

                <h3>{member.name}</h3>

                <p>{member.text}</p>
              </div>

              <div className={styles.leaderImage}>
                <img src={member.image} alt={member.name} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;