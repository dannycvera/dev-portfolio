import React, { useState } from "react";
import "./Projects.css";
import Modal from "../components/Modal";

function Projects() {
  // set each modal to "visible" if they are to open
  const [modalVis1, setModalVis1] = useState("");
  const [modalVis2, setModalVis2] = useState("");
  const [modalVis3, setModalVis3] = useState("");
  const [modalVis4, setModalVis4] = useState("");

  return (
    <div className="projects" id="projects">
      <h1 className="proj-title">Projects</h1>
      <div className="proj-gallery">
        <div className="proj-container">
          <div
            className="proj"
            onClick={() => {
              setModalVis1("visible");
            }}
          >
            <img
              className="proj-img"
              src={require("../img/proj01web.jpg")}
              alt="Apartment Fix"
            />
            <div className="proj-overlay">
              <h3>
                Apartment Fix <br /> apartment issue tracking web app
              </h3>
              <p>Click for more info</p>
            </div>
          </div>
          <div
            className="proj"
            onClick={() => {
              setModalVis2("visible");
            }}
          >
            <img
              className="proj-img"
              src={require("../img/proj02web.jpg")}
              alt="Black Girls Code"
            />
            <div className="proj-overlay">
              <h3>
                Black Girls Code <br />
                website redesign
              </h3>
              <p>Click for more info</p>
            </div>
          </div>

          <div
            className="proj"
            onClick={() => {
              setModalVis3("visible");
            }}
          >
            <img
              className="proj-img"
              src={require("../img/proj03web.jpg")}
              alt="PhotoCo-Lab"
            />
            <div className="proj-overlay">
              <h3>
                Photo Co-Lab
                <br /> photo color editing web app
              </h3>

              <p>Click for more info</p>
            </div>
          </div>
          <div
            className="proj"
            onClick={() => {
              setModalVis4("visible");
            }}
          >
            <img
              className="proj-img"
              src={require("../img/proj04web.jpg")}
              alt="Game of Thrones Quotes Game"
            />
            <div className="proj-overlay">
              <h3>Game of Thrones Quotes Game</h3>
              <p>Click for more info</p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        modalVis={modalVis1}
        setModalVis={setModalVis1}
        imgURL={require("../img/proj01web.jpg")}
        title="Apartment Fix"
        text="Apartment Fix is a web app to document apartment issues, such as leaking plumbing, broken sheetrock, etc. Built from scratch using a Ruby on Rails backed with a React front end."
        tech="Ruby on Rails, PostgreSQL, React, Javascript, CSS, HTML5, Axios, Github"
        link="https://apartment-fix.netlify.app/"
        github="https://github.com/dannycvera/apartment-fix-p4"
      />
      <Modal
        modalVis={modalVis2}
        setModalVis={setModalVis2}
        imgURL={require("../img/proj02web.jpg")}
        title="Black Girls Code"
        text="A collaborative redesign of a non-profits existing website. Our UX team utilized Zeplin to communicate their designs. While our team of four developers implemented their plans to the smallest detail. We utilized MongoDB and nodeJS for the backend, with a React front end."
        tech="MongoDB, Node.JS, Express, React, Javascript, CSS, HTML5, Axios, Github"
        link="https://blackgirlscodep3.netlify.app/"
        github="https://github.com/dannycvera/Black-Girls-Code-P3"
      />
      <Modal
        modalVis={modalVis3}
        setModalVis={setModalVis3}
        imgURL={require("../img/proj03web.jpg")}
        title="Photo Co-Lab"
        text="Photo Co-Lab is a web application for collaboratively editing a photo's color from your mobile or desktop computer. Use the sliders to change the hue, saturation, contrast and other settings, then post the changes. Your teammate can visit the same URL and see your changes by clicking on your post. They can in turn make new changes and comments. Build using React with Airtable as the backend."
        tech="React, Airtable, Javascript, CSS, HTML5, Axios, Github"
        link="https://photocolab.netlify.app/"
        github="https://github.com/dannycvera/PhotoCollaboration-SEI-Project2"
      />
      <Modal
        modalVis={modalVis4}
        setModalVis={setModalVis4}
        imgURL={require("../img/proj04web.jpg")}
        title="Game of Thrones Quotes Game"
        text="Game of Thrones - Quotes is a game where the user clicks on the
        image of the character they believe authored the displayed quote. If
        they choose incorrectly five times the lose. Choose correctly 5
        times and they win. Two outside API’s are used. One to obtain a
        random quotes and the other to delivery character information such
        as the image URL, name, title, etc."
        tech="Javascript, CSS, Axios, Github"
        link="https://dannycvera.github.io/GOT-whos-quote/"
        github="https://github.com/dannycvera/GOT-whos-quote"
      />
    </div>
  );
}

export default Projects;
