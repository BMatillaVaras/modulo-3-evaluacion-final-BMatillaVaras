import React from "react";
import load from "../images/load.png";
import "../stylesheets/_loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <img src={load} alt="cargando" className="loading--img" />
    </div>
  );
};

export default Loading;
