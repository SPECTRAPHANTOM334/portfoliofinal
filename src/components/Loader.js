/** @format */

// Loader.js
import React from "react";
import "../styling/loader.css"; // Ensure to create this CSS file

const Loader = () => {
  return (
    <loader className="loader">
      <div className="loader-headercontainer">
        <div className="loader-header">
          <div className="loader-headertextsection">
            <p className="loader-headertext1"></p>
            <p className="loader-headerheading"></p>
            <p className="loader-headersubheading"></p>
            <p className="loader-headertext2"></p>
            <button className="loader-headerbutton"></button>
          </div>
          <div className="loader-headerimagesection">
            <div className="loader-headerimage"></div>
          </div>
        </div>
      </div>
    </loader>
  );
};

export default Loader;
