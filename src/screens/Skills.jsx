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
            src={require("../img/javascript-plain.svg").default}
            alt="javascript"
          />
          <img
            className="skills-icon"
            src={require("../img/html5-plain-wordmark.svg").default}
            alt="html5"
          />
          <img
            className="skills-icon"
            src={require("../img/css3-plain-wordmark.svg").default}
            alt="css3"
          />
          <img
            className="skills-icon"
            src={require("../img/mongodb-plain-wordmark.svg").default}
            alt="mongodb"
          />
          <img
            className="skills-icon"
            src={require("../img/express-original-wordmark.svg").default}
            alt="express"
          />
          <img
            className="skills-icon"
            src={require("../img/react-original-wordmark.svg").default}
            alt="react"
          />
          <img
            className="skills-icon"
            src={require("../img/nodejs-plain-wordmark.svg").default}
            alt="nodejs"
          />
          <img
            className="skills-icon"
            src={require("../img/ruby-plain-wordmark.svg").default}
            alt="ruby"
          />
          <img
            className="skills-icon"
            src={require("../img/rails-plain-wordmark.svg").default}
            alt="rails"
          />
          <img
            className="skills-icon"
            src={require("../img/postgresql-plain-wordmark.svg").default}
            alt="postgresql"
          />
          <img
            className="skills-icon"
            src={require("../img/python-plain-wordmark.svg").default}
            alt="python"
          />
          <img
            className="skills-icon"
            src={require("../img/heroku-plain-wordmark.svg").default}
            alt="heroku"
          />
          <img
            className="skills-icon"
            src={require("../img/github-original-wordmark.svg").default}
            alt="github"
          />
          <img
            className="skills-icon"
            src={require("../img/git-original-wordmark.svg").default}
            alt="git"
          />
          <img
            className="skills-icon"
            src={require("../img/docker-original-wordmark.svg").default}
            alt="docker"
          />
          <img
            className="skills-icon"
            src={require("../img/photoshop-line.svg").default}
            alt="photoshop"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
