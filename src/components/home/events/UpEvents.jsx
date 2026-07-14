import React from "react";
import { Link } from "react-router-dom";
import "./UpEvents.css";

const events = [
  {
    id: 1,
    title: "Community Awareness Forum",
    date: "25 July 2026",
    location: "Migori County",
    image: "/images/four.JPG",
    description:
      "Bringing together parents, community leaders and young women to discuss ending FGM and child marriage.",
    featured: true,
  },
  {
    id: 2,
    title: "School Mentorship Session",
    date: "12 August 2026",
    location: "Kehancha",
    image: "/images/mentor2.jpeg",
    description:
      "Helping girls discover confidence, leadership and purpose through mentorship.",
  },
  {
    id: 3,
    title: "Dignity Kit Distribution",
    date: "20 August 2026",
    location: "Migori",
    image: "/images/wote.jpeg",
    description:
      "Providing dignity essentials that remove barriers to education.",
  },
  {
    id: 4,
    title: "Girls Leadership Dialogue",
    date: "5 September 2026",
    location: "Kuria",
    image: "/images/jedawall.jpeg",
    description:
      "Creating safe conversations where girls can grow as future leaders.",
  },
];

const UpcomingEvents = () => {
  const featured = events.find((event) => event.featured);
  const others = events.filter((event) => !event.featured);

  return (
    <section className="eventsSection">

      <div className="container">

        <div className="eventsHeading">

          <span>UPCOMING EVENTS</span>

          <h2>
            Join Us As We
            <br />
            Create Lasting Change
          </h2>

          <p>
            Every event creates another opportunity for girls,
            families and communities to come together,
            learn, grow and inspire change.
          </p>

        </div>

        {/* Featured Event */}

        <div className="featuredEvent">

          <div className="featuredImage">

            <img
              src={featured.image}
              alt={featured.title}
            />

          </div>

          <div className="featuredContent">

            <div className="eventMeta">

              <span>{featured.date}</span>

              <span>{featured.location}</span>

            </div>

            <h3>{featured.title}</h3>

            <p>{featured.description}</p>

            <Link
              to="/contact"
              className="eventBtn"
            >
              Register Interest
            </Link>

          </div>

        </div>

        {/* Other Events */}

        <div className="eventsGrid">

          {others.map((event) => (

            <div
              className="eventCard"
              key={event.id}
            >

              <div className="eventImage">

                <img
                  src={event.image}
                  alt={event.title}
                />

              </div>

              <div className="eventContent">

                <div className="eventMeta">

                  <span>{event.date}</span>

                  <span>{event.location}</span>

                </div>

                <h3>{event.title}</h3>

                <p>{event.description}</p>

                <Link
                  to="/work"
                  className="eventLink"
                >
                  Learn More →
                </Link>

              </div>

            </div>

          ))}

        </div>

        <div className="eventsFooter">

          <Link
            to="/work"
            className="viewEvents"
          >
            View Our Work
          </Link>

        </div>

      </div>

    </section>
  );
};

export default UpcomingEvents;