/** @format */

import React from "react";
import profileImage from "../png files/man.png";
import cv from "../cv.pdf";
import scrollDownIcon from "../png files/scrolldown.png";

const Header = () => {
  const scrollToRecentWork = () => {
    document
      .getElementById("recent-work-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <div className="headerSection">
        <section id="header-section" className="header-section">
          <div className="header-content">
            <div className="text-content">
              <h1>
                Hello! I'm <span>IBRAHIM BAIG</span>
              </h1>
              <p className="subheading">
                Office Administrator and Aspiring IT Professional
              </p>
              <p>
                Versatile professional with a background in administration and a
                strong passion for software development. Proficient in
                JavaScript, Python, React, Node.js, and Solidity, with
                experience in building web applications, backend services, and
                blockchain solutions. Seeking opportunities in a dynamic,
                growth-oriented environment. I excel at managing accounts and
                maintaining data in Google Sheets and Excel. Known for my quick
                learning ability, I efficiently adapt to new tools and
                technologies to solve problems effectively.
              </p>

              <a
                href={cv}
                className="download-cv"
                download="Curriculum Vitae Ibrahim Baig.pdf">
                Download CV
              </a>
            </div>
            <div className="image-content">
              <img className="man" src={profileImage} alt="Profile" />
            </div>
          </div>
        </section>
        <div className="scrolldownparent">
          <img
            src={scrollDownIcon}
            alt="Scroll Down"
            className="scrolldown"
            onClick={scrollToRecentWork}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
