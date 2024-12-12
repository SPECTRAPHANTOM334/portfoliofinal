/** @format */

import React, { useState } from "react";
import profileImage from "../png files/man.webp";
import cv from "../cv.pdf";
import scrollDownIcon from "../png files/scrolldown.webp";

const ImageWithLoading = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && <div></div>}
      <img src={src} alt={alt} onLoad={handleImageLoad} className="man" />
    </>
  );
};

const Header = () => {
  const scrollToSkill = () => {
    document
      .getElementById("skill-section")
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
                Full-Stack Developer and Python Script Specialist
              </p>
              <p>
                Versatile and skilled full-stack developer with expertise in
                Solidity, JavaScript, TypeScript, Python, React, Node.js,
                NestJS, HTML, and CSS. I have a proven track record in building
                robust web applications, scalable backend services, and
                innovative blockchain solutions. Experienced in creating
                efficient Python scripts for automating tasks, data processing,
                and enhancing workflows. Known for my adaptability and quick
                learning, I embrace new technologies and tools to deliver
                effective solutions in dynamic, growth-oriented environments.
              </p>

              <a
                href={cv}
                className="download-cv"
                download="Curriculum Vitae Ibrahim Baig.pdf">
                Download CV
              </a>
            </div>
            <div className="image-content">
              <ImageWithLoading
                className="man"
                src={profileImage}
                alt="Profile"
              />
            </div>
          </div>
        </section>
        <div className="scrolldownparent">
          <img
            src={scrollDownIcon}
            alt="Scroll Down"
            className="scrolldown"
            onClick={scrollToSkill}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
