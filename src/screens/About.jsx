import React from "react";
import "./About.css";
import portrait from "../img/DannyVeraPortrait.jpg";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-wrapper">
        <h1 className="about-title">About</h1>
        <div className="about-container">
          <img className="about-img" alt="Danny Vera" src={portrait} />
          <div>
            <p className="about-text">
              I am a dedicated New Yorker with a relentless drive to find elegant, scalable solutions to complex technical problems. I specialize in implementing codebases that are simple to navigate yet rigorously architected and tested. With a background in the professional photography industry, I bring a unique "pixel-perfect" perspective to the UI, ensuring that the final product is not only functionally turn-key but visually exciting for the end-user.{" "}
            </p>
            <p className="about-text">
              Outside of engineering, I serve as the Treasurer of my HDFC co-op in Brooklyn. In this role, I’ve navigated the intersection of finance and urban development—successfully securing project funding by optimizing commercial lease revenue to build a community roof deck for our residents.
            </p>
            <p className="about-text">
              When I’m not at the terminal or managing property, you can find me cycling through the five boroughs or playing ultimate frisbee in the park.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
