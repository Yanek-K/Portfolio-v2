import React from "react";
import "./index.css";

const ContactPage = () => {
  return (
    <div class="background">
      <div class="container">
        <div class="screen">
          <div class="screen-body">
            <div class="screen-body-item left">
              <div class="app-title">
                <h2>CONTACT ME</h2>
              </div>
            </div>
            <div class="screen-body-item">
              <div class="app-form">
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="NAME" />
                </div>
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="EMAIL" />
                </div>
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="CONTACT NO" />
                </div>
                <div class="app-form-group message">
                  <input class="app-form-control" placeholder="MESSAGE" />
                </div>
                <div class="app-form-group buttons">
                  <button class="app-form-button">CANCEL</button>
                  <button class="app-form-button">SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
