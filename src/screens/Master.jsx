import React, { useState } from "react";
import "./Master.css";

function Master() {
  const [visible, setVisible] = useState("");
  return (
    <div className="master" id="master">
      <div className={`master-loading ${visible}`}>
        <img src={require("../img/loading.svg").default} alt="loading" />
      </div>
      <img
        className="master-bg-img"
        src={require("../img/nyc01web.jpg").default}
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
