import React from "react";
import "./Skills.css";
import jsIcon from "../img/javascript-plain.svg";
import html5Icon from "../img/html5-plain-wordmark.svg";
import css3Icon from "../img/css3-plain-wordmark.svg";
import mongoDBIcon from "../img/mongodb-plain-wordmark.svg";
import expressIcon from "../img/express-original-wordmark.svg";
import reactIcon from "../img/react-original-wordmark.svg";
import nodeJSIcon from "../img/nodejs-plain-wordmark.svg";
import rubyIcon from "../img/ruby-plain-wordmark.svg";
import railsIcon from "../img/postgresql-plain-wordmark.svg";
import postgresqlIcon from "../img/postgresql-plain-wordmark.svg";
import pythonIcon from "../img/python-plain-wordmark.svg";
import herokuIcon from "../img/heroku-plain-wordmark.svg";
import githubIcon from "../img/github-original-wordmark.svg";
import gitIcon from "../img/git-original-wordmark.svg";
import dockerIcon from "../img/docker-original-wordmark.svg";
import photoshoptIcon from "../img/photoshop-line.svg";

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills-wrapper">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-icons">
          <img className="skills-icon" src={jsIcon} alt="javascript" />
          <img className="skills-icon" src={html5Icon} alt="html5" />
          <img className="skills-icon" src={css3Icon} alt="css3" />
          <img className="skills-icon" src={mongoDBIcon} alt="mongodb" />
          <img className="skills-icon" src={expressIcon} alt="express" />
          <img className="skills-icon" src={reactIcon} alt="react" />
          <img className="skills-icon" src={nodeJSIcon} alt="nodejs" />
          <img className="skills-icon" src={rubyIcon} alt="ruby" />
          <img className="skills-icon" src={railsIcon} alt="rails" />
          <img className="skills-icon" src={postgresqlIcon} alt="postgresql" />
          <img className="skills-icon" src={pythonIcon} alt="python" />
          <img className="skills-icon" src={herokuIcon} alt="heroku" />
          <img className="skills-icon" src={githubIcon} alt="github" />
          <img className="skills-icon" src={gitIcon} alt="git" />
          <img className="skills-icon" src={dockerIcon} alt="docker" />
          <img className="skills-icon" src={photoshoptIcon} alt="photoshop" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
