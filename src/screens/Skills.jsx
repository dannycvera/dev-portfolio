import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills-wrapper">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-icons">
          <img
            className="skills-icon"
            src={require("../img/javascript-plain.svg")}
            alt="javascript"
          />
          <img
            className="skills-icon"
            src={require("../img/html5-plain-wordmark.svg")}
            alt="html5"
          />
          <img
            className="skills-icon"
            src={require("../img/css3-plain-wordmark.svg")}
            alt="css3"
          />
          <img
            className="skills-icon"
            src={require("../img/mongodb-plain-wordmark.svg")}
            alt="mongodb"
          />
          <img
            className="skills-icon"
            src={require("../img/express-original-wordmark.svg")}
            alt="express"
          />
          <img
            className="skills-icon"
            src={require("../img/react-original-wordmark.svg")}
            alt="react"
          />
          <img
            className="skills-icon"
            src={require("../img/nodejs-plain-wordmark.svg")}
            alt="nodejs"
          />
          <img
            className="skills-icon"
            src={require("../img/ruby-plain-wordmark.svg")}
            alt="ruby"
          />
          <img
            className="skills-icon"
            src={require("../img/rails-plain-wordmark.svg")}
            alt="rails"
          />
          <img
            className="skills-icon"
            src={require("../img/postgresql-plain-wordmark.svg")}
            alt="postgresql"
          />
          <img
            className="skills-icon"
            src={require("../img/python-plain-wordmark.svg")}
            alt="python"
          />
          <img
            className="skills-icon"
            src={require("../img/heroku-plain-wordmark.svg")}
            alt="heroku"
          />
          <img
            className="skills-icon"
            src={require("../img/github-original-wordmark.svg")}
            alt="github"
          />
          <img
            className="skills-icon"
            src={require("../img/git-original-wordmark.svg")}
            alt="git"
          />
          <img
            className="skills-icon"
            src={require("../img/docker-original-wordmark.svg")}
            alt="docker"
          />
          <img
            className="skills-icon"
            src={require("../img/photoshop-line.svg")}
            alt="photoshop"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
