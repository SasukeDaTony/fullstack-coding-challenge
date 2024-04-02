import "./Loader.css";
import React from "react";

function Loader() {
  return (
    <div className="loader-container">
      <img
       className="loader-logo"
        src="https://i.pinimg.com/474x/67/d8/37/67d8379604084dd7d7c7fa8d41f4c739.jpg"
        alt="Loader"
      />
      <h4>Loading Momentarily...</h4>
    </div>
  );
}

export default Loader;
