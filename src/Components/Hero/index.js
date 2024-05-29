import React from "react";
import "./index.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__wrap">
        <p className="hero__wrap__intro">Hi, my name is</p>
        <h1 className="hero__wrap__name">Yanek K.</h1>
        <h1 className="hero__wrap__info">I build things for the web.</h1>
        <p className="hero__wrap__about">
          I am a software developer specializing in building and designing
          digital experiences. Currently, I work at Cria Design Agency where I
          am focused on building accessible web experiences.
        </p>
        <div className="button hero__wrap__button">Get In Touch</div>
      </div>
    </div>
  );
};

export default Hero;
