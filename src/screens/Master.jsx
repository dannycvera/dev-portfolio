import React, { useState } from "react";
import "./Master.css";
import background from "../img/nyc01web.jpg";
import loader from "../img/loading.svg";

function Master() {
  const [visible, setVisible] = useState("");
  return (
    <div className="master" id="master">
      <div className={`master-loading ${visible}`}>
        <img src={loader} alt="loading" />
      </div>
      <img
        className="master-bg-img"
        src={background}
        alt="ny at night background"
        onLoad={() => {
          setVisible("hide");
        }}
      />

      <div className="master-title-container">
        <h1>Daniel Vera</h1>
        <h3>New York City Based Full-Stack Developer | Software Engineer</h3>
      </div>
    </div>
  );
}

export default Master;
