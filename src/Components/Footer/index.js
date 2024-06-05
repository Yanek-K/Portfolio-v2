import React, { useState } from "react";
import "./index.css";

const Footer = () => {
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
    <footer className="footer">
      <div className="footer__wrap">
        <div className="footer__left">
          <h3>CREATIVE.</h3>
          <p>
            Donec ut ipsum gravida, bibendum dolor id, semper ligula. Integer a
            finibus nunc. Nullam ut tincidunt risus. Praesent bibe dignissim.
          </p>
        </div>
        <div className="footer__center">
          <div className="footer__navigation">
            <h4>NAVIGATION</h4>
            <ul>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScroll(e, "services")}
                >
                  Services
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="#projects"
                  onClick={(e) => handleScroll(e, "projects")}
                >
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScroll(e, "about")}>
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__contact">
            <h4>LET'S TALK</h4>
            <ul>
              <li>yanek.dev@gmail.com</li>
              <li>Toronto, ON</li>
              <li>Canada</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>Coded by Yanek K.</p>
        <p>Overpowered with React</p>
      </div>
    </footer>
  );
};

export default Footer;
