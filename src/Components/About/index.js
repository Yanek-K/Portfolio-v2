import React from "react";
import "./index.css";

const About = () => {
  return (
    <div className="mystory-section">
      <div className="mystory__wrap">
        <div className="mystory__header">
          <div className="mystory__title">
            <span className="subtitle">ABOUT ME</span>
            <h2>My Story</h2>
          </div>
          <button className="view-linkedin-button">View My LinkedIn</button>
        </div>
        <div className="mystory__content">
          <div
            className="mystory__image"
            style={{ backgroundImage: "url('your-image-url.jpg')" }}
          ></div>
          <div className="mystory__text">
            <h3>Hello! I'm a creative designer living in New York City.</h3>
            <p>
              Vivamus con dapibus metus a dignissim. Nunc id nulla dapibus,
              condimentum nunc ut, efficitur nulla. Aenean efficitur vulputate
              sem, a dignissim tellus aliquam vitae. Donec ultricies elit lacus,
              mi finibus pretium. Etiam tor pretium, varius odio sit amet,
              rutrum.
            </p>
            <p>
              Vivamus con dapibus metus a dignissim. Nunc id nulla dapibus,
              condimentum nunc ut, efficitur nulla. Aenean efficitur vulputate
              sem, a dignissim tellus aliquam vitae. Donec ultricies elit lacus,
              mi finibus pretium. Etiam tor pretium, varius odio sit amet,
              rutrum.
            </p>
          </div>
        </div>
        <div className="mystory__cta">
          <h3>Ready to get your project moving?</h3>
          <p>Book the soonest available time slot to talk.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
