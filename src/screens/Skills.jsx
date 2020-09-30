import React from "react";
import "./Skills.css";
import "devicon/devicon-colors.css";
import "devicon/devicon.css";

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills-wrapper">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-icons">
          <i className="devicon-postgresql-plain-wordmark colored"></i>
          <i className="devicon-rails-plain-wordmark colored"></i>
          <i className="devicon-ruby-plain-wordmark colored"></i>
          <i className="devicon-mongodb-plain-wordmark colored"></i>
          <i className="devicon-express-original colored"></i>
          <i className="devicon-nodejs-plain-wordmark colored"></i>
          <i className="devicon-heroku-plain-wordmark colored"></i>
          <i className="devicon-react-original-wordmark colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-bootstrap-plain-wordmark colored"></i>
          <i className="devicon-jquery-plain-wordmark colored"></i>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i className="devicon-github-plain-wordmark colored"></i>
          {/* <i className="devicon-photoshop-line colored"></i> */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
