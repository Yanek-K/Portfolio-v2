import React from "react";
import "./index.css";

const Experience = () => {
  return (
    <div className="experience-section">
      <div className="experience__wrap">
        <div className="experience__wrap__left">
          <span className="subtitle">EXPERIENCE</span>
          <h2>Where I have Worked</h2>
          <p>
            Front-End Developer at <a href="#">Cria Design Agency</a>
          </p>
          <p>
            Front-End Developer at <a href="#">Cria Design Agency</a>
          </p>
          <p>
            Front-End Developer at <a href="#">Cria Design Agency</a>
          </p>
        </div>
        <div className="experience__wrap__right">
          <div className="job-entry">
            <span className="job-date">Oct 2023 - Present</span>
            <h3>
              Front-End Developer at <a href="#">Cria Design Agency</a>
            </h3>
            <p>
              Deliver high-quality, robust production code for a diverse array
              of projects for clients including Harvard Business School,
              Everytown for Gun Safety, Pratt Institute, Koala Health,
              Vanderbilt University, The 19th News, and more.
            </p>
            <div className="job-tags">
              <span className="tag">Present</span>
              <span className="tag">Present</span>
              <span className="tag">Present</span>
              <span className="tag">Present</span>
              <span className="tag">Present</span>
            </div>
          </div>
          {/* Repeat job-entry div for other entries */}
          <div className="job-entry">
            <span className="job-date">Oct 2023 - Present</span>
            <h3>
              Front-End Developer at <a href="#">Cria Design Agency</a>
            </h3>
            <p>
              Deliver high-quality, robust production code for a diverse array
              of projects for clients including Harvard Business School,
              Everytown for Gun Safety, Pratt Institute, Koala Health,
              Vanderbilt University, The 19th News, and more.
            </p>
            <div className="job-tags">
              <span className="tag">Present</span>
              <span className="tag">Present</span>
              <span className="tag">Present</span>
              <span className="tag">Present</span>
              <span className="tag">Present</span>
            </div>
          </div>
          <div className="job-entry">
            <span className="job-date">Oct 2023 - Present</span>
            <h3>
              Front-End Developer at <a href="#">Cria Design Agency</a>
            </h3>
            <p>
              Deliver high-quality, robust production code for a diverse array
              of projects for clients including Harvard Business School,
              Everytown for Gun Safety, Pratt Institute, Koala Health,
              Vanderbilt University, The 19th News, and more.
            </p>
            <div className="job-tags">
              <span className="tag">Present</span>
              <span className="tag">Present</span>
              <span className="tag">Present</span>
              <span className="tag">Present</span>
              <span className="tag">Present</span>
            </div>
          </div>
          <div className="job-entry">
            <span className="job-date">Oct 2023 - Present</span>
            <h3>
              Front-End Developer at <a href="#">Cria Design Agency</a>
            </h3>
            <p>
              Deliver high-quality, robust production code for a diverse array
              of projects for clients including Harvard Business School,
              Everytown for Gun Safety, Pratt Institute, Koala Health,
              Vanderbilt University, The 19th News, and more.
            </p>
            <div className="job-tags">
              <span className="tag">Present</span>
              <span className="tag">Present</span>
              <span className="tag">Present</span>
              <span className="tag">Present</span>
              <span className="tag">Present</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
