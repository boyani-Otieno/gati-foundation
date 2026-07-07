import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [impactOpen, setImpactOpen] = useState(false);
  const [involvedOpen, setInvolvedOpen] = useState(false);

  return (
    <header className={isHome ? "homeHeader" : "pageHeader"}>

      <div className="container">

        {/* Logo */}

        <div className="logo">

          <Link to="/">
            <img
              src="/images/new-maroon-logo.png"
              alt="Margaret Robi Foundation"
              className="logoImage"
            />
          </Link>

        </div>

        {/* Navigation */}

        <nav className="nav">

          <ul className={menuOpen ? "navMenu active" : "navMenu"}>

            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            {/* ABOUT */}

            <li className={`dropdown ${aboutOpen ? "open" : ""}`}>

            <span onClick={() => setAboutOpen(!aboutOpen)}>
               About Us
              <i className="fa fa-chevron-down"></i>
            </span>

            <ul className="dropdownMenu">

                <li>
                  <Link to="/about" onClick={() => setMenuOpen(false)}>
                    Our Inspiration
                  </Link>
                </li>

                <li>
                  <Link to="/team" onClick={() => setMenuOpen(false)}>
                    Leadership Team
                  </Link>
                </li>

                <li>
                  <Link to="/partners" onClick={() => setMenuOpen(false)}>
                    Partners
                  </Link>
                </li>

              </ul>

            </li>

            {/* IMPACT */}

            <li className={`dropdown ${impactOpen ? "open" : ""}`}>

              <span  onClick={() => setImpactOpen(!impactOpen)}>
                Impact
                <i className="fa fa-chevron-down"></i>
              </span>

              <ul className="dropdownMenu">

                <li>
                  <Link to="/impact" onClick={() => setMenuOpen(false)}>
                    Our Impact
                  </Link>
                </li>

                <li>
                  <Link to="/work" onClick={() => setMenuOpen(false)}>
                    Our Work
                  </Link>
                </li>

              </ul>

            </li>

            <li>

              <Link to="/blog" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>

            </li>

            {/* GET INVOLVED */}

            <li className={`dropdown ${involvedOpen ? "open" : ""}`}>

              <span onClick={() => setInvolvedOpen(!involvedOpen)}>
                Get Involved
                <i className="fa fa-chevron-down"></i>
              </span>

              <ul className="dropdownMenu">

                <li>
                  <Link to="/donate" onClick={() => setMenuOpen(false)}>
                    Donate
                  </Link>
                </li>

                <li>
                  <Link to="/volunteer" onClick={() => setMenuOpen(false)}>
                    Volunteer
                  </Link>
                </li>

                <li>
                  <Link to="/careers" onClick={() => setMenuOpen(false)}>
                    Careers
                  </Link>
                </li>

                <li>
                  <Link to="/contact" onClick={() => setMenuOpen(false)}>
                    Contact Us
                  </Link>
                </li>

              </ul>

            </li>

          </ul>

        </nav>

        {/* Mobile Button */}

        <button
          className="mobileBtn"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? (
            <i className="fa fa-times"></i>
          ) : (
            <i className="fa fa-bars"></i>
          )}

        </button>

      </div>

    </header>
  );
};

export default Header;