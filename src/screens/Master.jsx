import React, { useState } from "react";
import "./Master.css";

function Master() {
  const [visible, setVisible] = useState("");
  return (
    <div
      className="master"
      id="master"
      onLoad={() => {
        setVisible("visible");
      }}
    >
      <div className={`master-loading ${visible}`}>
        <img src={require("../img/loading.svg")} />
      </div>
      <div className="master-title-container">
        <h1>Daniel Vera</h1>
        <h3>
          New York City Based Full-Stack Web Developer | Software Engineer
        </h3>
      </div>
    </div>
  );
}

export default Master;
