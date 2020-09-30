import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-wrapper">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-text">
          Thank you for viewing my qualifications. Let's work together in the
          future! <br /> You can contact me with the links below.
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
              src={require("../img/github-white.svg")}
              alt="github"
            />
          </a>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/daniel-vera-65bbb07/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="contact-icon"
              src={require("../img/linkedin-white.svg")}
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
              src={require("../img/mail.svg")}
            />
          </a>
          <a
            className="contact-link"
            href={require("../img/danielveraresume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="contact-resume"
              alt="resume icon"
              src={require("../img/resume.png")}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
