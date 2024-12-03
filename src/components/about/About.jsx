import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {

  const teamMembers = [
    {
      id: 1,
      name: "Jerida Gati",
      title: "Founder",
      text: "Jerida holds a Bachelor of Arts in Education from Egerton University and is currently pursuing a Master's Degree in Gender and Development Studies, equipping her with advanced expertise to address gender inequalities. With extensive experience, including serving as a community coodinator in Mathare slums through Darajania Organization. Jerida is passionate about women's emperwerment mentorship, and leadership. She founded the organisation in 2021 to combat practices like FGM and gender-based violence while fostering inclusivity and equality. Guided by her vision to reshape societal norms, Jerida leads initiatives that empower women and girls to become leaders and agents of change, promoting a future rooted in equity, respect, and dignity for all.",
      image: "/images/jeda.jpeg",
    },
    {
      id: 2,
      name: "Martha Boke",
      title: "Co-Founder",
      text: "Martha Boke is a passionate advocate for women's and girls' health and nutrition. She holds a Bachelor's Degree in Nutrition and Dietics from the Technical University of Kenya and has gained extensive experience working with leading health institutions, including the Nutrition department at Kuria District Hospital, Mama Lucy Hospital  and Kenyatta National Hospital. Currently, Martha offers her expertise to Spur Africa Organization, focusing on health and nutrition programs. Martha's dedication to improving the well-being of women and girls drives her work at the Margaret Robi Foundation, where she leads initiatives aimed at addressing nutritional challenges and promoting healthy lifestyles within marginalized communities. Her vision is to create a future where women and girls have equitable access to healthcare and nutritional resouces, enabling them to thrive and contribute to the society.",
      image: "/images/boke.jpeg",
    },
    {
      id: 3,
      name: "Prudence Oloo",
      title: "Co-Founder",
      text: "Prudence is a dedicated educator with a Bachelor's Degree in Education from Egerton University. Currently working at St Nicholas International School, Prudence combines her professional expertise with her passion for promoting education, particularly for women and girls. Her work focuses on empowering young minds and advocating for equitable access to education as a tool for transformation and growth. As a co-founder of the foundation Prudence plays a key role in driving initiatives that uplift marginalized communities, with a vision to create a future where education is inclusive and transformative.",
      image: "/images/prudence.jpeg",
    },
    {
      id: 3,
      name: "Susan",
      title: "Co-Founder",
      image: "/images/susan.jpeg",
    },
  ];

  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Story' subtitle='Check out our organizations story and work process' />
             <h3>Who we are</h3>
            Margaret Robi Foundation was founded in 2021 by Jerida Gati. Our aim is to transform cultural practices that have for the longest time marginalized Kuria community.

We set aside a percentage of our income as a 'fighting fund' that enables us to challenge the profound impact of retrogressive cultural practices like FGM, physical and sexual abuse that perpetuate injustice in the Kuria community. Our efforts concentrate on supporting young women and girls who are disproportionately affected.
             <h3>Vision</h3>
We believe in empowerment, equality and inclusivity. where cultural norms and practices no longer limit the rights and freedom of girls and women, but instead, celebrate their strength and contribution to the society.
             <h3>Mission</h3>
 We are working to address inequalities within the Kuria community, by focusing on uprooting the very cultural norms that breed gender inequality. It is about reshaping the culture to reflect values of equity, respect and dignity for all.
 <h3>About US</h3>
The foundation focuses on action and positive change in Kuria Community communities. Addressing gender - based violence and misogynistic attitudes are central to our work.
We actively facilitate and champion the development of majorly women and girls by running participatory action activities and leadership roles.

          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>

      <section className="team-section">
      <h2>Leadership Team</h2>
      <div className="team-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <div className="member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p className="abt-text">{member.title}</p>
            <p>{member.text}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default About
