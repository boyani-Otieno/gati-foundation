import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './smallNav.css';

const SmallNavbar = () => {
  return (
    <div className="small-navbar">
      <div className="contact-info">
        <p>Contact us: +254 727761064 | info@margaretrobi.com</p>
      </div>
      <div className="social-media-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default SmallNavbar;
