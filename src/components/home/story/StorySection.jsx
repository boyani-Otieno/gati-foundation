import React from "react";
import { Link } from "react-router-dom";
import "./StorySection.css";

const StorySection = () => {
  return (
    <section className="storySection">

      <div className="storyContainer">

        {/* Image */}

        <div className="storyImage">

          <div className="storyImageWrapper">
            <img
              src="/images/full-team.jpeg"
              alt="Margaret Robi Foundation"
            />
          </div>

        </div>

        {/* Content */}

        <div className="storyContent">

          <span className="storyTag">
            OUR WHY
          </span>

          <div className="storyLine"></div>

          <h2>
            Every Life
            <br />
            Has a Story.
          </h2>

          <p>
            Every girl deserves the opportunity to dream without fear,
            to learn without barriers and to grow into the leader she
            was created to become.
          </p>

          <p>
            Through education, mentorship, protection and community
            empowerment, Margaret Robi Foundation walks alongside
            vulnerable girls and families, restoring dignity, creating
            opportunity and building hope that lasts for generations.
          </p>

          <div className="quoteCard">

            <span className="quoteIcon">
              "
            </span>

            <p>
              When one girl is empowered,
              an entire community rises.
            </p>

            <h5>
              Margaret Robi Foundation
            </h5>

          </div>

          <Link
            to="/impact"
            className="storyButton"
          >
            Who is Margaret Robi?
            <i className="fa fa-arrow-right"></i>
          </Link>

        </div>

      </div>

    </section>
  );
};

export default StorySection;