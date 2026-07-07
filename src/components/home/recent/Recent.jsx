import React from "react";
import "./recent.css";
import RecentCard from "./RecentCard";

const Recent = () => {
  return (
    <section className="featured-projects">

      <div className="container">

        <div className="section-title">

          <span>FEATURED IMPACT</span>

          <h2>
            Our Recent
            <br />
            Works
          </h2>

          <p>
            Our recent projects empower girls through mentorship, 
            advocacy, and dignity support, creating opportunities 
            for them to thrive in their community
          </p>

        </div>

        <RecentCard />

      </div>

    </section>
  );
};

export default Recent;