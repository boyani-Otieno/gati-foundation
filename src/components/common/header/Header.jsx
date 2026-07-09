import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  const navRef = useRef(null);
  useEffect(() => {

  const handleResize = () => {

    if (window.innerWidth > 992) {
      setMenuOpen(false);
    }

  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);

}, []);
  const closeMenus = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };
  useEffect(() => {

  const handleClickOutside = (event) => {

    if (
      navRef.current &&
      !navRef.current.contains(event.target)
    ) {
      setOpenDropdown(null);
    }

  };

  const handleEscape = (event) => {

    if (event.key === "Escape") {
      setOpenDropdown(null);
    }

  };

  document.addEventListener("mousedown", handleClickOutside);
  document.addEventListener("keydown", handleEscape);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    document.removeEventListener("keydown", handleEscape);
  };

}, []);

  return (
    <header className={isHome ? "homeHeader" : "pageHeader"}>
      <div className="container">

        {/* Logo */}

        <div className="logo">
          <Link to="/" onClick={closeMenus}>
            <img
              src="/images/new-maroon-logo.png"
              alt="Margaret Robi Foundation"
              className="logoImage"
            />
          </Link>
        </div>

        {/* Navigation */}

        <nav className="nav" ref={navRef}>

          <ul className={menuOpen ? "navMenu active" : "navMenu"}>

            <li>
              <Link to="/" onClick={closeMenus}>
                Home
              </Link>
            </li>

            {/* ABOUT */}

            <li className={`dropdown ${openDropdown === "about" ? "open" : ""}`}>

              <span onClick={() => toggleDropdown("about")}>
                About Us
                <i className="fa fa-chevron-down"></i>
              </span>

              <ul className="dropdownMenu">

                <li>
                  <Link to="/inspiration" onClick={closeMenus}>
                    Our Inspiration
                  </Link>
                </li>

                <li>
                  <Link to="/leadership" onClick={closeMenus}>
                    Leadership Team
                  </Link>
                </li>

                <li>
                  <Link to="/partners" onClick={closeMenus}>
                    Partners
                  </Link>
                </li>

              </ul>

            </li>

            <li>
              <Link to="/need" onClick={closeMenus}>
                Need
              </Link>
            </li>

            {/* IMPACT */}

            <li className={`dropdown ${openDropdown === "impact" ? "open" : ""}`}>

              <span onClick={() => toggleDropdown("impact")}>
                Impact
                <i className="fa fa-chevron-down"></i>
              </span>

              <ul className="dropdownMenu">

                <li>
                  <Link to="/impact" onClick={closeMenus}>
                    Our Impact
                  </Link>
                </li>

                <li>
                  <Link to="/work" onClick={closeMenus}>
                    Our Work
                  </Link>
                </li>

              </ul>

            </li>

            <li>
              <Link to="/blog" onClick={closeMenus}>
                Blog
              </Link>
            </li>

            {/* GET INVOLVED */}

            <li className={`dropdown ${openDropdown === "involved" ? "open" : ""}`}>

              <span onClick={() => toggleDropdown("involved")}>
                Get Involved
                <i className="fa fa-chevron-down"></i>
              </span>

              <ul className="dropdownMenu">

                <li>
                  <Link to="/donate" onClick={closeMenus}>
                    Donate
                  </Link>
                </li>

                <li>
                  <Link to="/volunteer" onClick={closeMenus}>
                    Volunteer
                  </Link>
                </li>

                <li>
                  <Link to="/careers" onClick={closeMenus}>
                    Careers
                  </Link>
                </li>

                <li>
                  <Link to="/contact" onClick={closeMenus}>
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