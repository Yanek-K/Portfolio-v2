import React from "react";
import "./index.css";

const Footer = () => {
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
              <li>Services</li>
              <li>Projects</li>
              <li>About</li>
            </ul>
          </div>
          <div className="footer__contact">
            <h4>LET'S TALK</h4>
            <ul>
              <li>info@template.com</li>
              <li>(555) 555-5555</li>
              <li>Submit a Question</li>
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
