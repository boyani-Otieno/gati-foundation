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
      image: "/images/jeda.jpeg",
    },
    {
      id: 2,
      name: "Martha Boke",
      title: "Co-Founder",
      image: "/images/boke.jpeg",
    },
    {
      id: 3,
      name: "Prudence",
      title: "Co-Founder",
      image: "/images/prudence.jpeg",
    },
    {
      id: 3,
      name: "Susan",
      title: "Co-Founder",
      image: "/images/prudence.jpg",
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
            <p>{member.title}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default About
