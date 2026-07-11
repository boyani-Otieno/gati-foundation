import React from "react";
import { Link } from "react-router-dom";
import "./careers.css";

const Careers = () => {
  return (
    <main className="careersPage">

      {/* INTRO */}

      <section className="careersIntro">

        <div className="container">

          <span className="sectionTag">
            CAREERS
          </span>

          <h1>
            Build A Career
            <br />
            That Creates Change
          </h1>

          <p>
            At Margaret Robi Foundation, our work is driven by people
            who believe every girl deserves the opportunity to live,
            learn, and thrive. As we continue growing, we look forward
            to welcoming talented individuals who share our vision for
            stronger, safer communities.
          </p>

        </div>

      </section>

      {/* CURRENT OPENINGS */}

      <section className="careerNotice">

        <div className="container">

          <div className="noticeCard">

            <div className="noticeIcon">
              <i className="fa-solid fa-briefcase"></i>
            </div>

            <span className="noticeTag">
              CURRENT OPPORTUNITIES
            </span>

            <h2>
              No Current Job Openings
            </h2>

            <p>
              We do not have any paid employment opportunities available
              at the moment. As our programmes and partnerships continue
              to expand, future vacancies will be announced on this page.
            </p>

          </div>

        </div>

      </section>

      {/* WHY JOIN */}

      <section className="careerReasons">

        <div className="container">

          <div className="sectionHeading">

            <span>
              WHY JOIN US
            </span>

            <h2>
              Every Contribution
              <br />
              Makes A Difference
            </h2>

            <p>
              Even without a paid position, there are meaningful ways
              to contribute to our mission and create lasting impact.
            </p>

          </div>

          <div className="reasonGrid">

            <div className="reasonCard">

              <div className="reasonIcon">
                <i className="fa-solid fa-heart"></i>
              </div>

              <h3>
                Serve Communities
              </h3>

              <p>
                Support girls, families and communities through
                mentorship, advocacy and outreach programmes.
              </p>

            </div>

            <div className="reasonCard">

              <div className="reasonIcon">
                <i className="fa-solid fa-seedling"></i>
              </div>

              <h3>
                Grow Professionally
              </h3>

              <p>
                Gain valuable leadership, teamwork and project
                experience while serving a meaningful cause.
              </p>

            </div>

            <div className="reasonCard">

              <div className="reasonIcon">
                <i className="fa-solid fa-users"></i>
              </div>

              <h3>
                Join Our Community
              </h3>

              <p>
                Become part of a passionate network committed
                to empowering girls and strengthening families.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* VOLUNTEER */}

      <section className="volunteerAlternative">

        <div className="container volunteerGrid">

          <div className="volunteerContent">

            <span>
              GET INVOLVED
            </span>

            <h2>
              Not Hiring Yet.
              <br />
              Volunteer With Us Instead.
            </h2>

            <p>
              If you're passionate about creating opportunities for
              girls and young women, we'd love to hear from you.
              Our volunteers play an essential role in delivering
              programmes, supporting events and strengthening
              community partnerships.
            </p>

            <Link
              to="/volunteer"
              className="careerBtn"
            >
              Become a Volunteer
              <i className="fa-solid fa-arrow-right"></i>
            </Link>

          </div>

          <div className="volunteerImage">

            <img
              src="/images/onwall.jpeg"
              alt="Volunteer at Margaret Robi Foundation"
            />

          </div>

        </div>

      </section>

      {/* FUTURE */}

      <section className="futureCareers">

        <div className="container">

          <div className="futureCard">

            <span>
              STAY CONNECTED
            </span>

            <h2>
              Future Opportunities
            </h2>

            <p>
              As Margaret Robi Foundation continues to grow, new career
              opportunities will become available. We encourage you to
              check this page regularly or follow our updates to be the
              first to know when vacancies are announced.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Careers;