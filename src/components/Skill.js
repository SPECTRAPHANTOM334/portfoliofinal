/** @format */

import React, { useState } from "react";
import Javascripticon from "../png files/javascript.webp";
import Solidityicon from "../png files/solidity.webp";
import Nodejsicon from "../png files/nodejs.webp";
import Reacticon from "../png files/react.webp";
import Pythonicon from "../png files/python.webp";
import HTMLandCSSicon from "../png files/htmlandcss.webp";
import MicrosoftOfficeicon from "../png files/microsoftoffice.webp";
import Typescripticon from "../png files/typescript-icon.webp";
import Nestjsicon from "../png files/nestjs.webp";

// Component for loading images
const ImageWithLoading = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && <div className=".lazyloading"></div>}
      <img src={src} alt={alt} onLoad={handleImageLoad} className="skillicon" />
    </>
  );
};

const Skill = () => {
  return (
    <section id="skill-section">
      <div className="skillSection">
        <div className="skillcontent">
          <h2 className="heading">Skills</h2>
          <p className="context-skill">
            Here are some of the skills I bring to the table. Looking for
            something specific? {""}
            <a className="emailme" href="mailto:ibaig6990@gmail.com">
              Email me
            </a>
          </p>
          <div className="card-item card-container">
            {/* <div className="card-box">
              <div className="card-front">PORTFOLIO</div>
              <div className="card-back">
                <span>
                  <p className="cardheading">PORTFOLIO</p>
                </span>
                <p className="carddescription">
                  A Web App to highlight your achievements and experience with a
                  professional touch.
                </p>
                <a
                  className="visit-website"
                  href="https://ibrahimbaig.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Visit Website
                </a>
              </div>
            </div> */}
            <div className="card-box">
              <div className="card-front">
                <ImageWithLoading src={Solidityicon} alt="Solidity" />
              </div>
              <div className="card-back">
                <span>
                  <p className="cardheading cards">Solidity</p>
                </span>
                <p className="carddescription">
                  Knowledgeable in writing smart contracts and developing
                  decentralized applications (DApps) on the Ethereum blockchain.
                </p>
              </div>
            </div>
            <div className="card-box">
              <div className="card-front">
                <ImageWithLoading
                  className="skillicon"
                  src={Javascripticon}
                  alt=""
                />
              </div>
              <div className="card-back">
                <span>
                  <p className="cardheading cardj">JavaScript</p>
                </span>
                <p className="carddescription">
                  Proficient in writing clean, efficient code for interactive
                  web applications and user interfaces.
                </p>
              </div>
            </div>

            <div className="card-box">
              <div className="card-front">
                <ImageWithLoading
                  className="skillicon"
                  src={Typescripticon}
                  alt=""
                />
              </div>
              <div className="card-back">
                <span>
                  <p className="cardheading cardr">TypeScript</p>
                </span>
                <p className="carddescription">
                  Proficient in leveraging TypeScript's type-safety features to
                  write clean, scalable, and maintainable code for modern web
                  applications.
                </p>
              </div>
            </div>

            <div className="card-box">
              <div className="card-front">
                <ImageWithLoading
                  className="skillicon"
                  src={Nestjsicon}
                  alt=""
                />
              </div>
              <div className="card-back">
                <span>
                  <p className="cardheading cardr">NestJS</p>
                </span>
                <p className="carddescription">
                  Experienced in building efficient, reliable server-side
                  applications using NestJS, with a focus on modular
                  architecture and seamless integration of TypeScript.
                </p>
              </div>
            </div>

            <div className="card-box">
              <div className="card-front">
                <ImageWithLoading
                  className="skillicon nodejsicon"
                  src={Nodejsicon}
                  alt=""
                />
              </div>
              <div className="card-back">
                <span>
                  <p className="cardheading cardnj">Node.js</p>
                </span>
                <p className="carddescription">
                  Competent in building scalable backend services, RESTful APIs,
                  and handling server-side logic using Node.js and Express.
                </p>
              </div>
            </div>

            <div className="card-box">
              <div className="card-front">
                <ImageWithLoading
                  className="skillicon"
                  src={Reacticon}
                  alt=""
                />
              </div>
              <div className="card-back">
                <span>
                  <p className="cardheading cardr">React</p>
                </span>
                <p className="carddescription">
                  Experienced in developing dynamic applications using React,
                  including state management and component-based architecture.
                </p>
              </div>
            </div>

            <div className="card-box">
              <div className="card-front">
                <ImageWithLoading
                  className="skillicon"
                  src={Pythonicon}
                  alt=""
                />
              </div>
              <div className="card-back">
                <span>
                  <p className="cardheading cardp">Python</p>
                </span>
                <p className="carddescription">
                  Skilled in developing backend scripts, automation, data
                  analysis, and web development.
                </p>
              </div>
            </div>

            <div className="card-box">
              <div className="card-front">
                <ImageWithLoading
                  className="skillicon"
                  src={HTMLandCSSicon}
                  alt=""
                />
              </div>
              <div className="card-back">
                <span>
                  <p className="cardheading cardhc">HTML & CSS</p>
                </span>
                <p className="carddescription">
                  Strong knowledge in building responsive and visually appealing
                  web pages, following web standards and best practices.
                </p>
              </div>
            </div>

            <div className="card-box">
              <div className="card-front">
                <ImageWithLoading
                  className="skillicon microsoftofficeicon"
                  src={MicrosoftOfficeicon}
                  alt=""
                />
              </div>
              <div className="card-back">
                <span>
                  <p className="cardheading cardmo">Microsoft Office</p>
                </span>
                <p className="carddescription">
                  Proficient in Word, Excel, PowerPoint, and Outlook for
                  document creation, data analysis, presentations, and
                  communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
