import React, { useState } from "react";
import "./index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const yOffset = -130; // Adjust this value to match the height of your navbar and barrier
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setMenuOpen(false); // Close the menu after clicking a link
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
              <a href="#services" onClick={(e) => handleScroll(e, "services")}>
                <span className="number">01.</span> Services
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => handleScroll(e, "experience")}
              >
                <span className="number">02.</span> Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
                <span className="number">03.</span> Projects
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleScroll(e, "about")}>
                <span className="number">04.</span> About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
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
          <a href="#services" onClick={(e) => handleScroll(e, "services")}>
            Services
          </a>
          <a href="#experience" onClick={(e) => handleScroll(e, "experience")}>
            Experience
          </a>
          <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
            Projects
          </a>
          <a href="#about" onClick={(e) => handleScroll(e, "about")}>
            About
          </a>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
