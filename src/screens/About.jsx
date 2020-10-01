import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-wrapper">
        <h1 className="about-title">About</h1>
        <div className="about-container">
          <img
            className="about-img"
            alt="Danny Vera"
            src={require("../img/self-portrait.jpg")}
          />
          <p className="about-text">
            I am a New Yorker who won’t stop until he finds an elegant solution
            to any problem in my way. I deliver engineering implementations that
            are simple to utilize, yet thoroughly thought out and tested. My
            experience gives me a unique perspective on the need to provide
            ready to use, turn-key solutions to whomever I work with. Solutions
            that are image enhancing, and exciting to the end user.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
