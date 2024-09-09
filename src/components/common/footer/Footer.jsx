import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="footer-logo">
        <img src="/path/to/logo.png" alt="SHOFCO Logo" />
        <p>Building Promise from Poverty</p>
      </div> */}

      <div className="footer-links">
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li><a href="/our-story">Our Story</a></li>
            <li><a href="/our-people">Our People</a></li>
            <li><a href="/awards">Awards</a></li>
            <li><a href="/partners">Partners</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Impact</h4>
          <ul>
            <li><a href="/the-need">The Need</a></li>
            <li><a href="/shifting-paradigm">Shifting Paradigm</a></li>
            <li><a href="/monitoring-evaluation">Monitoring & Evaluation</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support Us</h4>
          <ul>
            <li><a href="/donate">Donate</a></li>
            <li><a href="/other-ways-to-give">Other Ways to Give</a></li>
            <li><a href="/sponsorship">Sponsorship</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@margaretrobifoundtion.org</p>
          <p>Phone: +254 727761064</p>
        </div>
      </div>

      <div className="footer-social">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter/></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagramSquare/></a>
      </div>

      {/* <div className="footer-newsletter">
        <h4>Join our Newsletter</h4>
        <form>
          <input type="email" placeholder="Your Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div> */}

      <div className="footer-copyright">
        <p>© 2024 MARGARET ROBI FOUNDATION. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
