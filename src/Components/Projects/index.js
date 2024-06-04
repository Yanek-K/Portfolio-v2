import React from "react";
import "./index.css";
import criaDesignAgency from "../../Assets/CriaDesignAgency.png";
import fpc from "../../Assets/FPC.png";
import premiumCameras from "../../Assets/PremiumCameras.png";
import smallTalk from "../../Assets/SmallTalk.png";
const Projects = () => {
  return (
    <div className="projects-section">
      <div className="projects__wrap">
        <div className="projects__header">
          <div className="projects__title">
            <span className="subtitle">PROJECTS</span>
            <h2>Selected Work</h2>
          </div>
          <button className="button view-github-button">View My GitHub</button>
        </div>
        <div className="projects__grid">
          <div className="project-card">
            <div
              className="project-image"
              style={{ backgroundImage: `url(${criaDesignAgency})` }}
            ></div>
            <div className="project-info">
              <div className="project-meta">
                <span className="project-date">4.8.2021</span>
                <span className="project-type">WEB DESIGN</span>
              </div>
              <h3>Cria Design Agency</h3>
              <div className="project-line"></div>
            </div>
          </div>
          <div className="project-card">
            <div
              className="project-image"
              style={{ backgroundImage: `url(${fpc})` }}
            ></div>
            <div className="project-info">
              <div className="project-meta">
                <span className="project-date">3.27.2021</span>
                <span className="project-type">BRANDING</span>
              </div>
              <h3>First Principle Consultants</h3>
              <div className="project-line"></div>
            </div>
          </div>
          <div className="project-card">
            <div
              className="project-image"
              style={{ backgroundImage: `url(${premiumCameras})` }}
            ></div>
            <div className="project-info">
              <div className="project-meta">
                <span className="project-date">4.8.2021</span>
                <span className="project-type">WEB DESIGN</span>
              </div>
              <h3>Premium Cameras</h3>
              <div className="project-line"></div>
            </div>
          </div>
          <div className="project-card">
            <div
              className="project-image"
              style={{ backgroundImage: `url(${smallTalk})` }}
            ></div>
            <div className="project-info">
              <div className="project-meta">
                <span className="project-date">3.27.2021</span>
                <span className="project-type">BRANDING</span>
              </div>
              <h3>SmallTalk</h3>
              <div className="project-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
