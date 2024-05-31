import React, { useState } from "react";
import "./index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar__wrap">
        <div className="navbar__wrap__left">
          <h2>YK</h2>
        </div>
        <nav className="navbar__wrap__right">
          <ul>
            <li>
              <a href="#">
                <span className="number">01.</span> Services
              </a>
            </li>
            <li>
              <a href="#">
                <span className="number">02.</span> Experience
              </a>
            </li>
            <li>
              <a href="#">
                <span className="number">03.</span> Projects
              </a>
            </li>
            <li>
              <a href="#">
                <span className="number">04.</span> About
              </a>
            </li>
            <li>
              <a href="#">
                <span className="number">05.</span> Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={menuOpen ? "line open" : "line"}></div>
          <div className={menuOpen ? "line open" : "line"}></div>
          <div className={menuOpen ? "line open" : "line"}></div>
        </div>
      </div>
      {menuOpen && (
        <div className="responsive-menu">
          <a href="#">Services</a>
          <a href="#">Experience</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
