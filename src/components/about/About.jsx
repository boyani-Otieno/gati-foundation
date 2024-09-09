import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {

  const teamMembers = [
    {
      id: 1,
      name: "Jeridah Gati",
      title: "Founder & CEO",
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
      name: "Prudence",
      title: "Co-Founder",
      image: "/images/prudence.jpeg",
    },
  ];

  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Story' subtitle='Check out our organizations story and work process' />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            {/* <button className='btn2'>More About Us</button> */}
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
