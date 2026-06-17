import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h2>
            Margaret Robi Foundation
          </h2>

          <p>
            Empowering women and girls through education, leadership,
            advocacy, and the fight against harmful cultural practices.
          </p>

          <div className="footer-social">

            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookSquare />
            </a>

            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FaXTwitter />
            </a>

            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <FaInstagramSquare />
            </a>

          </div>

        </div>



        <div className="footer-section">

          <h4>About Us</h4>

          <ul>
            <li><a href="/our-story">Our Story</a></li>
            <li><a href="/our-people">Our People</a></li>
            <li><a href="/partners">Partners</a></li>
            <li><a href="/awards">Awards</a></li>
          </ul>

        </div>



        <div className="footer-section">

          <h4>Our Impact</h4>

          <ul>
            <li><a href="/programs">Programs</a></li>
            <li><a href="/the-need">The Need</a></li>
            <li><a href="/monitoring">Monitoring & Evaluation</a></li>
            <li><a href="/stories">Stories</a></li>
          </ul>

        </div>



        <div className="footer-section">

          <h4>Contact</h4>

          <p>Email:</p>
          <span>
            margaretrobifoundation@gmail.com
          </span>


          <p>Phone:</p>
          <span>
            +254 727761064
          </span>


          <button>
            Donate Now
          </button>


        </div>


      </div>



      <div className="footer-bottom">

        <p>
          © 2026 Margaret Robi Foundation. All Rights Reserved.
        </p>

      </div>


    </footer>
  );
};


export default Footer;