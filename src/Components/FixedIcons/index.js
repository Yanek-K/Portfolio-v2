// src/components/FixedIcons.js

import React from "react";
import "./index.css";
import github from "./../../Assets/github.png";
import linkedin from "./../../Assets/linkedin.png";

const FixedIcons = () => {
  return (
    <div className="fixed-icons-container">
      <div className="fixed-icons">
        <div
          className="icon"
          style={{ backgroundImage: `url(${github})` }}
        ></div>
        <div
          className="icon"
          style={{ backgroundImage: `url(${linkedin})` }}
        ></div>
      </div>
      <div className="vertical-line"></div>
    </div>
  );
};

export default FixedIcons;
