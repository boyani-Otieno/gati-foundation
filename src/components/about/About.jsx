import React from "react"
import styles from "./about.module.css" 

const About = () => {

  const teamMembers = [
    {
      id: 1,
      name: "Jerida Gati",
      title: "Founder, Director",
      text: "Jerida holds a Master of Arts in Co-operative and Community Development and a Master of Arts in Gender and Development Studies from Egerton University, alongside a Bachelor of Arts in Education. This interdisciplinary academic background directly informs her leadership at the Foundation, where she bridges community development with advocacy to drive systemic change. Through her experience as a former Community Coordinator in the Mathare slums, Jerida actively oversees the organization’s strategic operations, channeling her passion for mentorship into impactful initiatives that promote social transformation and gender equality.",
      image: "/images/jeda.jpeg",
    },
    {
      id: 2,
      name: "Martha Boke",
      title: "Nutrition Expert & Climate Change Champion",
      text: "Martha is a 2024 Women’s Global Leadership Forum (WILD) Fellow who holds a Bachelor’s Degree in Nutrition and Dietetics from the Technical University of Kenya. She brings extensive clinical experience from institutions including Kenyatta National Hospital and Mama Lucy Hospital, and currently leads health and nutrition programs at Spur Africa Organization. At the Margaret Robi Foundation, she combines her expertise in nutrition with a focus on climate resilience, working to ensure that women and girls in underserved communities have the equitable access to resources necessary to succeed.",
      image: "/images/boke.jpeg",
    },
    {
      id: 3,
      name: "Prudence Oloo",
      title: "Co-ordinator Education Affairs",
      text: "Prudence is a dedicated educator with a Bachelor's Degree in Education from Egerton University. Having previously worked at St. Nicholas International School, Prudence combines her professional expertise with her passion for promoting education, particularly for women and girls. Her work focuses on empowering young minds and advocating for equitable access to education as a tool for transformation and growth. As a co-founder of the foundation, Prudence plays a key role in driving initiatives that uplift marginalized communities, with a vision to create a future where education is inclusive and transformative.",
      image: "/images/prudence.jpeg",
    },
    {
      id: 4,
      name: "Susan",
      title: "",
      text: "Co-ordinator of the Margaret Robi Foundation, dedicated to collaborative strategic planning,local community advocacy, and driving long-term socio-economic progress for women and marginalized families across the region.",
      image: "/images/susan.jpeg",
    },
  ];

  return (
    <>
      <section className={styles.aboutSection}>        
        <div className={styles.storyContainer}>
          <div className={styles.leftRow}> 
            <h1 className={styles.pageTitle}>About Us</h1>           
            
            <p className={styles.storyText}>
              Margaret Robi was a woman of extraordinary courage, resilience, and hope. Raised in the Kuria community, she experienced firsthand the realities that continue to limit the lives of many girls and women today, including Female Genital Mutilation (FGM), gender discrimination, and the denial of educational opportunities. Yet she refused to believe that a girl's future should be determined by her circumstances, culture, or gender. She understood that when women are denied choices, communities are denied progress, and when girls are silenced, generations lose their potential. Despite the opportunities she never had, Margaret remained steadfast in her belief that education, dignity, and empowerment could transform lives.
            </p>

            <p className={styles.storyText}>
              Inspired by her mother's strength, values, and unwavering faith in the power of education, <strong>Jerida Gati</strong> founded the Margaret Robi Foundation to carry forward her legacy. Today, the Foundation works to ensure that girls and young women are not defined by the barriers they face but by the possibilities they can create. Through education, leadership development, advocacy, and the fight against harmful cultural practices, we are building a future where every girl and young woman has the freedom to choose, the confidence to lead, and the opportunity to thrive. The Margaret Robi Foundation was founded in <strong>2021 by Jerida Gati</strong>. Our aim is to transform cultural practices that have for the longest time marginalized the Kuria community.
            </p>

            <div className={styles.highlightBlock}>
              <p className={styles.storyText}>
                We set aside a percentage of our income as a 'fighting fund' that enables us to challenge the profound impact of retrogressive cultural practices like FGM, physical and sexual abuse that perpetuate injustice in the Kuria community. Our efforts concentrate on supporting young women and girls who are disproportionately affected.
              </p>
            </div>

            <h3>Vision</h3>
            <p className={styles.storyText}>
              We believe in empowerment, equality, and inclusivity, where cultural norms and practices no longer limit the rights and freedom of girls and women, but instead, celebrate their strength and contribution to society.
            </p>

            <h3>Mission</h3>
            <p className={styles.storyText}>
              We are working to address inequalities within the Kuria community by focusing on uprooting the very cultural norms that breed gender inequality. It is about reshaping the culture to reflect values of equity, respect, and dignity for all.
            </p>

            <h3>About Our Impact</h3>
            <p className={styles.storyText}>
              The foundation focuses on structural action and positive change in Kuria communities. Addressing gender-based violence and misogynistic attitudes are central to our work. We actively facilitate and champion the development of women and girls by running participatory action activities and creating leadership opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <h2>Leadership Team</h2>
        <div className={styles.teamContainer}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamMemberCard}>
              <div className={styles.memberImageWrapper}>
                <img src={member.image} alt={member.name} className={styles.memberImg} />
              </div>
              <div className={styles.memberInfoWrapper}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <span className={styles.memberTitle}>{member.title}</span>
                <p className={styles.memberBio}>{member.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default About