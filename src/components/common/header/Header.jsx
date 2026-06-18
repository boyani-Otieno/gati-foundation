import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";

const Header = () => {
  const [navList, setNavList] = useState(false);

  return (
    <header>
      <div className="container flex">

        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img
              src="/images/maroon-logo.png"
              alt="Margaret Robi Foundation"
              className="logoImage"
            />
          </Link>
        </div>

        {/* Navigation */}
        <div className="nav">
          <ul className={navList ? "small" : "flex"}>
            {nav.map((list, index) => (
              <li key={index}>
                <Link
                  to={list.path}
                  onClick={() => setNavList(false)}
                >
                  {list.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Donate Button */}
        <div className="button">
          <Link
            to="/donate"
            className="donateBtn"
            onClick={() => setNavList(false)}
          >
            Donate
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="toggle">
          <button
            className="menuToggle"
            onClick={() => setNavList(!navList)}
          >
            {navList ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;