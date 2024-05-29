import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrap">
        <div className="navbar__wrap__left">
          <h2>YK</h2>
        </div>
        <nav className="navbar__wrap__right">
          <ul>
            <li a href="#">
              <span className="number">01.</span> Services
            </li>
            <li a href="#">
              <span className="number">02.</span> Experience
            </li>
            <li a href="#">
              <span className="number">03.</span> Projects
            </li>
            <li a href="#">
              <span className="number">04.</span> About
            </li>
            <li a href="#">
              <span className="number">05.</span> Contact
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
