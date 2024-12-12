/** @format */

import React from "react";
import scrollUpIcon from "../png files/scrollup.webp";

const Copyright = ({ showScrollUp }) => {
  const scrollToHeader = () => {
    document
      .getElementById("header-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="footercopyrightsection">
      <div className="copyright">
        <span>
          <p className="copyrighttext">Copyright© 2024 Ibrahim Baig</p>
        </span>
        <span>
          <p className="othertext">All rights reserved.</p>
        </span>
      </div>
      <div className="scrollupparent">
        <img
          src={scrollUpIcon}
          alt="Scroll Up"
          className={`scrollup ${showScrollUp ? "visible" : "hidden"}`}
          onClick={scrollToHeader}
        />
      </div>
    </div>
  );
};

export default Copyright;
