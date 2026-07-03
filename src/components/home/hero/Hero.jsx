import React from "react";
import { Link } from "react-router-dom";
import { IoArrowForward, IoHeartOutline } from "react-icons/io5";
import "./hero.css";

const Hero = () => {
  return (
    <section
      className="mrf-hero"
      style={{ backgroundImage: "url('/images/wote.jpeg')" }}
    >
      <div className="mrf-hero-overlay"></div>

      <div className="mrf-hero-wrapper">
        <div className="mrf-hero-content">

          {/* <span className="mrf-hero-tag">
            MARGARET ROBI FOUNDATION
          </span> */}

          <div className="mrf-hero-line"></div>

          <h1 className="mrf-hero-title">
            Her Legacy.
            <br />
            <span>Their Future.</span>
          </h1>

          <p className="mrf-hero-text">
            We empower girls, women and vulnerable families through
            education, mentorship, advocacy and sustainable community
            development, creating opportunities that transform lives
            across Kuria East and beyond.
          </p>

          <div className="mrf-hero-actions">
            <Link to="/donate" className="mrf-btn-primary">
              Get Involved
              <IoArrowForward />
            </Link>

            <Link to="/about" className="mrf-btn-secondary">
              Learn More
              <IoArrowForward />
            </Link>
          </div>

          <div className="mrf-hero-footer">

            <div className="mrf-footer-divider"></div>

            <div className="mrf-footer-content">
              <IoHeartOutline className="mrf-heart" />

              <div>
                <h4>Creating Lasting Change</h4>
                <p>
                  Every donation, every volunteer and every partnership
                  helps build a brighter future for children and families.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* <div className="mrf-scroll">
        <div className="mrf-mouse">
          <span></span>
        </div>
        <p>Scroll</p>
      </div> */}
    </section>
  );
};

export default Hero;