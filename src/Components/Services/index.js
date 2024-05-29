import React from "react";
import "./index.css";

const Services = () => {
  return (
    <div className="services">
      <div className="servces__wrap">
        <div className="services__wrap__header">
          <div className="services__wrap__title">
            <span className="subtitle">SERVICES</span>
            <h2>My expertise</h2>
          </div>
          <div className="button view-work-button">View My Work</div>
        </div>
        <div className="services__wrap__cards">
          <div className="service-card">
            <span className="card-number">01</span>
            <h3>Programming</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="horizontal-line"></div>
          </div>
          <div className="service-card">
            <span className="card-number">02</span>
            <h3>Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="horizontal-line"></div>
          </div>
          <div className="service-card">
            <span className="card-number">03</span>
            <h3>Digital Marketing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="horizontal-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
