import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrap">
        <div className="navbar__wrap__left">
          <h1>YK</h1>
        </div>
        <nav className="navbar__wrap__right">
          <ul>
            <li a href="#">
              01. Services
            </li>
            <li a href="#">
              02. Experience
            </li>
            <li a href="#">
              03. Projects
            </li>
            <li a href="#">
              04. About
            </li>
            <li a href="#">
              05. Contact
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
