// src/components/FixedIcons.js

import React from "react";
import "./index.css";
import github from "./../../Assets/github.png";
import linkedin from "./../../Assets/linkedin.png";
import FPCLogo from "./../../Assets/FPCLogo.png";

const FixedIcons = () => {
  return (
    <div className="fixed-icons-container">
      <div className="fixed-icons">
        <a
          href="https://www.firstprincipleconsultants.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="icon"
            style={{ backgroundImage: `url(${FPCLogo})` }}
          ></div>
        </a>
        <a
          href="https://github.com/Yanek-K"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="icon"
            style={{ backgroundImage: `url(${github})` }}
          ></div>
        </a>
        <a
          href="https://www.linkedin.com/in/yanek-k/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="icon"
            style={{ backgroundImage: `url(${linkedin})` }}
          ></div>
        </a>
      </div>

      <div className="vertical-line"></div>
    </div>
  );
};

export default FixedIcons;
