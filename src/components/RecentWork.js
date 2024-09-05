/** @format */

import React from "react";

const RecentWork = () => {
  return (
    <section id="recent-work-section">
      <div className="recentSection">
        <div className="recent-work-content">
          <h2 className="heading">My Recent Work</h2>
          <p className="context">
            Here are a few projects I've worked on recently. Want to see more?{" "}
            {""}
            <a className="emailme" href="mailto:ibaig6990@gmail.com">
              Email me
            </a>
          </p>
          <div className="card-item card-container">
            <div className="card-box">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
