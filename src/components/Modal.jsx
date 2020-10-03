import React, { useEffect } from "react";
// import { useRef } from "react";
import "./Modal.css";

function Modal(props) {
  const {
    modalVis,
    setModalVis,
    title,
    imgURL,
    text,
    tech,
    link,
    github,
  } = props;

  // const scrollY = useRef(0);

  useEffect(() => {
    const body = document.body;
    if (modalVis === "visible") {
      body.style.overflowY = "hidden";
      // scrollY.current = window.scrollY;
      // const scrollLoc = `-${window.scrollY}px`;
      // body.style.position = "fixed";
      // body.style.top = scrollLoc;
    } else {
      body.style.overflowY = "auto";
      // body.style.position = "";
      // body.style.top = "";
      // window.scrollTo(0, scrollY.current);
    }
  }, [modalVis]);

  return (
    <div>
      <div className={`modal-parent ${modalVis}`}>
        <div className={`modal ${modalVis}`}>
          <button
            className="modal-close"
            aria-label="Close Project Modal Box"
            onClick={() => {
              setModalVis("");
            }}
          >
            &times;
          </button>
          <h2>{title}</h2>
          <img src={imgURL} alt={title} />
          <p>{text}</p>
          <p>{`Technologies used: ${tech}`}</p>
          <div className="modal-buttons">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="modal-button">Deployed Site</button>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <button className="modal-button">Github Repo</button>
            </a>
            <button
              className="modal-button"
              onClick={() => {
                setModalVis("");
              }}
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
