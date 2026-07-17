import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './smallNav.css';

const SmallNavbar = () => {
  return (
    <div className="small-navbar">
      <div className="contact-info">
        <p>Contact us: +254 727761064 | margaretrobifoundation@gmail.com</p>
      </div>
      <div className="social-media-icons">
        <a href="https://www.facebook.com/share/18yUpuGDjq/?mibextid=wwXIfrm" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://x.com/MargaretRobiFdn" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/margaret_robi_foundation?igsh=enBmanQxN3M5ZjVh&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/margaret-robi-foundation/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a> 
      </div>
    </div>
  );
};

export default SmallNavbar;
