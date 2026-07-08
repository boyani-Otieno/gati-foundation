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
            We believe lasting change begins when every girl
             and young woman has the strength to overcome, 
             the freedom to choose, and every opportunity to 
             thrive. Together, we restore dignity, create opportunity, 
             and empower girls and young women to rise above the 
             interconnected realities of conflict, harmful cultural 
             practices, and inequality.
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