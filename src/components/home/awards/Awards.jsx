import React from "react";
import "./awards.css"; // Make sure to create and customize this CSS file
import { FaUserMd, FaBaby, FaWheelchair } from "react-icons/fa"; // Example icons

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <div className="about-us-text">
          <h2>WHO WE ARE</h2>
          <hr className="about-us-divider" />
          <p>
            We work tirelessly to improve the lives of vulnerable communities in
            Kenya. Our special missions include healthcare, education, and
            sustainable development projects across the country.
          </p>
        </div>

        <div className="about-us-stats">
          <div className="stat-item">
            <FaUserMd className="stat-icon" />
            <h3>52,000</h3>
            <p>Women and children we've screened & treated for anemia</p>
          </div>

          <div className="stat-item">
            <FaBaby className="stat-icon" />
            <h3>34,000</h3>
            <p>Women we've helped deliver healthy babies</p>
          </div>

          <div className="stat-item">
            <FaWheelchair className="stat-icon" />
            <h3>820</h3>
            <p>
              Received free hip & knee replacements, bone fracture repairs, or
              minimally-invasive surgery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
