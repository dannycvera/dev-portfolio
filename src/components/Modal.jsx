import React from "react";
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
