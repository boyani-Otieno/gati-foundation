import React from "react";
import { Link } from "react-router-dom";
import "./Partners.css";

const partnerTypes = [
  {
    icon: "fa-solid fa-handshake",
    title: "NGOs & Foundations",
    text: "Collaborate with us to expand community-led programs that protect girls and strengthen families.",
  },
  {
    icon: "fa-solid fa-building",
    title: "Corporate Partners",
    text: "Support our mission through CSR initiatives, sponsorships, employee engagement and strategic investment.",
  },
  {
    icon: "fa-solid fa-school",
    title: "Educational Institutions",
    text: "Partner in mentorship, research, scholarships and educational opportunities for girls and young women.",
  },
  {
    icon: "fa-solid fa-globe-africa",
    title: "Development Agencies",
    text: "Join us in scaling sustainable programs that empower vulnerable communities across the region.",
  },
  {
    icon: "fa-solid fa-church",
    title: "Faith-Based Organizations",
    text: "Work alongside us to advocate for dignity, protection and hope within local communities.",
  },
  {
    icon: "fa-solid fa-heart",
    title: "Individual Philanthropists",
    text: "Help transform lives through generous financial support, mentorship or professional expertise.",
  },
];

const principles = [
  {
    icon: "fa-solid fa-shield-heart",
    title: "Transparency",
    text: "We value openness, accountability and responsible stewardship of every partnership.",
  },
  {
    icon: "fa-solid fa-scale-balanced",
    title: "Integrity",
    text: "Our work is guided by honesty, ethical leadership and mutual trust.",
  },
  {
    icon: "fa-solid fa-users",
    title: "Community Ownership",
    text: "Every initiative is designed alongside the communities we serve.",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Measurable Impact",
    text: "Together we create sustainable, lasting change supported by real outcomes.",
  },
];

const partnershipWays = [
  {
    number: "01",
    title: "Fund Programmes",
    text: "Support education, mentorship, dignity kits and community outreach initiatives.",
  },
  {
    number: "02",
    title: "Share Expertise",
    text: "Provide training, mentorship, technical knowledge or professional guidance.",
  },
  {
    number: "03",
    title: "Donate Resources",
    text: "Contribute learning materials, equipment, technology or essential supplies.",
  },
  {
    number: "04",
    title: "Build Together",
    text: "Co-design sustainable programmes that strengthen girls, families and communities.",
  },
];

const Partners = () => {
  return (
    <main className="partnersPage">

      {/* INTRO */}

      <section className="partnersIntro">

        <div className="container">

          <span>PARTNERSHIPS</span>

          <h1>Building Partnerships That Create Lasting Change</h1>

          <p>
            Lasting community transformation is never achieved alone.
            Margaret Robi Foundation is actively seeking organisations,
            institutions, businesses and individuals who share our vision
            of empowering girls and young girls advancing education and strengthening
            communities.
          </p>

        </div>

      </section>

      {/* WHY PARTNER */}

      <section className="whyPartner">

        <div className="container">

          <div className="sectionHeading">

            <span>WHY PARTNER WITH US</span>

            <h2>Together We Can Create Greater Impact</h2>

            <p>
              Meaningful partnerships help us expand our reach,
              strengthen our programmes and build sustainable
              opportunities for girls and young women.
            </p>

          </div>

          <div className="whyGrid">

            <div className="whyCard">
              <i className="fa-solid fa-seedling"></i>
              <h3>Community-Led Solutions</h3>
              <p>
                Every programme begins with listening to the communities
                we serve.
              </p>
            </div>

            <div className="whyCard">
              <i className="fa-solid fa-graduation-cap"></i>
              <h3>Education First</h3>
              <p>
                Together we keep more girls learning, growing and
                reaching their potential.
              </p>
            </div>

            <div className="whyCard">
              <i className="fa-solid fa-earth-africa"></i>
              <h3>Sustainable Change</h3>
              <p>
                We focus on long-term impact rather than short-term
                interventions.
              </p>
            </div>

            <div className="whyCard">
              <i className="fa-solid fa-handshake-angle"></i>
              <h3>Shared Values</h3>
              <p>
                We believe trust, collaboration and accountability are
                the foundation of every successful partnership.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* WHO WE ARE LOOKING FOR */}

      <section className="partnerTypes">

        <div className="container">

          <div className="sectionHeading">

            <span>WHO WE ARE LOOKING FOR</span>

            <h2>Mission-Aligned Partners</h2>

          </div>

          <div className="partnerGrid">

            {partnerTypes.map((item, index) => (

              <div className="partnerCard" key={index}>

                <div className="partnerIcon">
                  <i className={item.icon}></i>
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* HOW TO PARTNER */}

      <section className="partnershipWays">

        <div className="container">

          <div className="sectionHeading">

            <span>WAYS TO PARTNER</span>

            <h2>How You Can Support Our Mission</h2>

          </div>

          <div className="waysGrid">

            {partnershipWays.map((item, index) => (

              <div className="wayCard" key={index}>

                <div className="wayNumber">
                  {item.number}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PRINCIPLES */}

      <section className="principles">

        <div className="container">

          <div className="sectionHeading">

            <span>OUR COMMITMENT</span>

            <h2>Partnership Principles</h2>

          </div>

          <div className="principlesGrid">

            {principles.map((item, index) => (

              <div className="principleCard" key={index}>

                <div className="principleIcon">
                  <i className={item.icon}></i>
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="partnerCTA">

        <div className="container">

          <span>JOIN OUR MISSION</span>

          <h2>Become a Partner in Creating Lasting Change</h2>

          <p>
            Every meaningful partnership brings us one step closer to a
            future where every girl has the opportunity to learn, lead
            and thrive with dignity.
          </p>

          <div className="ctaButtons">

            <Link to="/contact" className="primaryBtn">
              Partner With Us
            </Link>

            <Link to="/volunteer" className="secondaryBtn">
              Volunteer Instead
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Partners;