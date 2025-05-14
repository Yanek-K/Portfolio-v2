import React from "react";
import "./index.css";

const Experience = () => {
  return (
    <div className="experience-section">
      <div className="experience__wrap">
        <div className="experience__wrap__left">
          <span className="subtitle">EXPERIENCE</span>
          <h2>Where I have Worked</h2>
          {/* <p>
            Front-End Developer at <a href="#">First Principle Consultants</a>
          </p>
          <p>
            Developer and Digital Marketing Expert at{" "}
            <a href="#">Cria Design Agency</a>
          </p>
          <p>
            Front-End Developer at <a href="#">MenuCloud</a>
          </p>
          <p>
            Co-Founder and Developer at{" "}
            <a href="#">Andre Laredo Fine Art Prints</a>
          </p> */}
        </div>
        <div className="experience__wrap__right">
          <div className="job-entry">
            <span className="job-date">Oct 2023 - Present</span>
            <h3>
              Project Manager at <a href="#">First Principle Consultants</a>
            </h3>
            <br />
            {/* <p>
              <ul>
                <li>
                  - Expertly utilized Webflow for website creation, employing
                  advanced design techniques and responsive frameworks to ensure
                  optimal user experience and website performance across various
                  devices.
                </li>
                <li>
                  {" "}
                  - Implemented strategic SEO practices to elevate website
                  visibility, drive organic traffic, and improve search engine
                  rankings, significantly increasing client engagement and
                  potential customer base.
                </li>
                <li>
                  {" "}
                  - Engaged in comprehensive client consultations to understand
                  business objectives, resulting in the delivery of customized
                  web solutions that accurately reflect brand identity and meet
                  specific market needs.
                </li>
              </ul>
            </p> */}
            <div className="job-tags">
              <span className="tag">Webflow</span>
              <span className="tag">Figma</span>
              <span className="tag">Adobe Photoshop</span>
              <span className="tag">Ahrefs</span>
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
            </div>
          </div>
          {/* Repeat job-entry div for other entries */}
          <div className="job-entry">
            <span className="job-date">Oct 2023 - Present</span>
            <h3>
              Developer and Digital Marketing Expert at{" "}
              <a href="#">Cria Design Agency</a>
            </h3>
            <br />
            {/* <p>
              <ul>
                <li>
                  - Led the development, execution, and launch of a
                  comprehensive digital platform including a website, reports,
                  and various content assets to disseminate our findings.
                </li>
                - Managed all aspects of project planning, including defining
                scope, timelines, and deliverables.
                <li></li>
                <li>
                  - Implemented strategic SEO practices to elevate website
                  visibility, drive organic traffic, and improve search engine
                  rankings, significantly increasing client engagement and
                  potential customer base.
                </li>
                <li>
                  - Engaged in comprehensive client consultations to understand
                  business objectives, resulting in the delivery of customized
                  web solutions that accurately reflect brand identity and meet
                  specific market needs.
                </li>
              </ul>
            </p> */}
            <div className="job-tags">
              <span className="tag">Figma</span>
              <span className="tag">Adobe Photoshop</span>
              <span className="tag">Javascript</span>
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
            </div>
          </div>
          <div className="job-entry">
            <span className="job-date">Oct 2023 - Present</span>
            <h3>
              Front-End Developer at <a href="#">MenuCloud</a>
            </h3>
            <br />
            {/* <p>
              Deliver high-quality, robust production code for a diverse array
              of projects for clients including Harvard Business School,
              Everytown for Gun Safety, Pratt Institute, Koala Health,
              Vanderbilt University, The 19th News, and more.
            </p> */}
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
              Co-Founder and Developer at{" "}
              <a href="#">Andre Laredo Fine Art Prints</a>
            </h3>
            <br />
            {/* <p>
              Deliver high-quality, robust production code for a diverse array
              of projects for clients including Harvard Business School,
              Everytown for Gun Safety, Pratt Institute, Koala Health,
              Vanderbilt University, The 19th News, and more.
            </p> */}
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
