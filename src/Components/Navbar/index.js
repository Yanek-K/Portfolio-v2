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
              <a href="/index.html">
                <span className="number">01.</span> Home
              </a>
            </li>
            <li>
              <a href="/about.html">
                <span className="number">02.</span> About
              </a>
            </li>
            <li>
              <a href="/blog.html">
                <span className="number">03.</span> Blog
              </a>
            </li>
            <li>
              <a href="/contact.html">
                <span className="number">04.</span> Contact
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
          <a href="#experience" onClick={(e) => handleScroll(e, "experience")}>
            Experience
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
