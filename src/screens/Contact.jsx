import React from "react";
import "./Contact.css";
import github from "../img/github-white.svg";
import linkedin from "../img/linkedin-white.svg";
import mail from "../img/mail.svg";
import resume from "../img/resume.png";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-wrapper">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-text">
          Thank you for viewing my qualifications. Let's work together in the
          future! <br /> You can contact me with the links below or thru my
          email at{" "}
          <a
            href={`mailto:dannyvera@gmail.com?subject=Just looked at your portfolio&body=Hello`}
            target="_blank"
            rel="noopener noreferrer"
          >
            dannyvera@gmail.com
          </a>
        </p>
        <div className="contact-links">
          <a
            className="contact-link"
            href="https://github.com/dannycvera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="contact-icon"
              src={github}
              alt="github"
            />
          </a>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/dannycvera/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="contact-icon"
              src={linkedin}
              alt="linked in"
            />
          </a>
          <a
            className="contact-link"
            href={`mailto:dannyvera@gmail.com?subject=Just looked at your portfolio&body=Hello`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="contact-mail"
              alt="mail icon"
              src={mail}
            />
          </a>
          <a
            className="contact-link"
            href="./danielveraresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="contact-resume"
              alt="resume icon"
              src={resume}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
