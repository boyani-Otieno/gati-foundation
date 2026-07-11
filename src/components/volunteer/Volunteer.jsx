import React, { useState } from "react";
import "./Volunteer.css";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    county: "",
    interest: "",
    availability: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert(
      "Thank you for your interest in volunteering with Margaret Robi Foundation. We will be in touch soon!"
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      county: "",
      interest: "",
      availability: "",
      message: "",
    });
  };

  return (
    <main className="volunteerPage">

      {/* INTRO */}

      <section className="volunteerIntro">

        <div className="container">

          <span className="sectionTag">
            VOLUNTEER
          </span>

          <h1>
            Become Part of
            <br />
            The Change
          </h1>

          <p>
            Every girl deserves someone who believes in her.
            By volunteering with Margaret Robi Foundation,
            you become part of a community creating safe spaces,
            inspiring hope, and empowering young women to build
            brighter futures.
          </p>

        </div>

      </section>

      {/* WAYS TO HELP */}

      <section className="waysSection">

        <div className="container">

          <div className="sectionHeading">

            <span>WAYS TO HELP</span>

            <h2>
              Use Your Time,
              <br />
              Skills & Passion
            </h2>

          </div>

          <div className="waysGrid">

            <div className="wayCard">

              <div className="wayIcon">
                <i className="fa fa-users"></i>
              </div>

              <h3>Mentorship</h3>

              <p>
                Encourage girls through mentorship,
                leadership development, academic support,
                and life skills training.
              </p>

            </div>

            <div className="wayCard">

              <div className="wayIcon">
                <i className="fa fa-bullhorn"></i>
              </div>

              <h3>Community Outreach</h3>

              <p>
                Participate in awareness campaigns,
                school visits, community dialogues,
                and advocacy events.
              </p>

            </div>

            <div className="wayCard">

              <div className="wayIcon">
                <i className="fa fa-laptop"></i>
              </div>

              <h3>Professional Skills</h3>

              <p>
                Support our work through communications,
                fundraising, education, administration,
                photography, media, or technology.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHY VOLUNTEER */}

      <section className="whyVolunteer">

        <div className="container whyGrid">

          <div className="whyImage">

            <img
              src="/images/all.jpeg"
              alt="Volunteers working together"
            />

          </div>

          <div className="whyContent">

            <span>WHY VOLUNTEER</span>

            <h2>
              Your Time Can
              Change A Life
            </h2>

            <p>
              Every conversation, workshop, school visit,
              and mentoring session creates opportunities
              for girls to believe in themselves and
              discover their potential.
            </p>

            <ul>

              <li>
                <i className="fa fa-check-circle"></i>
                Flexible volunteer opportunities
              </li>

              <li>
                <i className="fa fa-check-circle"></i>
                Meaningful community impact
              </li>

              <li>
                <i className="fa fa-check-circle"></i>
                Training and ongoing support
              </li>

            </ul>

          </div>

        </div>

      </section>

      {/* FORM */}

      <section className="volunteerFormSection">

        <div className="container">

          <div className="sectionHeading">

            <span>JOIN OUR TEAM</span>

            <h2>
              Volunteer Application
            </h2>

          </div>

          <form
            className="volunteerForm"
            onSubmit={handleSubmit}
          >

            <div className="formGrid">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="county"
                placeholder="County"
                value={formData.county}
                onChange={handleChange}
                required
              />

              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
              >
                <option value="">
                  Area of Interest
                </option>

                <option>
                  Mentorship
                </option>

                <option>
                  Community Outreach
                </option>

                <option>
                  Education
                </option>

                <option>
                  Fundraising
                </option>

                <option>
                  Communications
                </option>

                <option>
                  Events
                </option>

              </select>

              <select
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                required
              >

                <option value="">
                  Availability
                </option>

                <option>
                  Weekdays
                </option>

                <option>
                  Weekends
                </option>

                <option>
                  Flexible
                </option>

              </select>

            </div>

            <textarea
              name="message"
              rows="6"
              placeholder="Tell us a little about yourself and why you would like to volunteer."
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">
              Submit Application
            </button>

          </form>

        </div>

      </section>

      {/* FAQ */}

      <section className="faqSection">

        <div className="container">

          <div className="sectionHeading">

            <span>FAQ</span>

            <h2>
              Frequently Asked Questions
            </h2>

          </div>

          <div className="faqList">

            <div className="faqItem">

              <h3>
                Who can volunteer?
              </h3>

              <p>
                Anyone aged 18 years and above who shares
                our commitment to empowering girls and
                strengthening communities.
              </p>

            </div>

            <div className="faqItem">

              <h3>
                Do I need previous experience?
              </h3>

              <p>
                No. We provide orientation and support
                depending on the volunteer opportunity.
              </p>

            </div>

            <div className="faqItem">

              <h3>
                Can I volunteer remotely?
              </h3>

              <p>
                Yes. Some opportunities in communications,
                fundraising, design, and administration
                can be done remotely.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="volunteerCTA">

        <div className="container">

          <h2>
            Together We Can
            Create Lasting Change
          </h2>

          <p>
            Join a growing community of passionate people
            committed to empowering girls, strengthening
            families, and transforming communities.
          </p>

          <a href="#top" className="ctaButton">
            Apply Today
            <i className="fa fa-arrow-right"></i>
          </a>

        </div>

      </section>

    </main>
  );
};

export default Volunteer;