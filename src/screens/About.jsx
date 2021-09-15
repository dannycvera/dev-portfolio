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
            src={require("../img/self-portrait.jpg").default}
          />
          <div>
            <p className="about-text">
              I am a New Yorker who won’t stop until he finds an elegant
              solution to any problem. Implementing solutions that are simple to
              utilize, yet thoroughly reviewed and tested. My previous
              experience in the photography industry gives me a unique
              perspective on the need to provide ready to use, turn-key
              solutions to whomever I work with. Solutions that are image
              enhancing, and exciting to the end user.{" "}
            </p>
            <p className="about-text">
              My other activities include being the treasurer of my low income
              co-op building. In this role I built a roof deck on our brownstone
              building for all the residents to enjoy. I found the funding for
              the project by renting out empty commercial spaces for top dollar.
            </p>
            <p className="about-text">
              In my free time I enjoy biking and ultimate frisbee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
