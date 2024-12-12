/** @format */

// Loader.js
import React from "react";
import "../styling/loader/loader-header.css";
import "../styling/loader/loader-skill.css";
import "../styling/loader/loader-footer.css";
import "../styling/loader/loader-copyright.css";
import "../styling/loader/loader-mediaqueries.css";

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
      <div className="loader-skillcontainer">
        <div className="loader-skillsection">
          <div className="loader-skilltextcontent">
            <p className="loader-skillheading"></p>
            <p className="loader-skilltext"></p>
          </div>
          <div className="loader-skillcards">
            <div className="loader-skillcardone"></div>
            <div className="loader-skillcardone"></div>
            <div className="loader-skillcardone"></div>
            <div className="loader-skillcardone"></div>
            <div className="loader-skillcardone"></div>
            <div className="loader-skillcardone"></div>
            <div className="loader-skillcardone"></div>
            <div className="loader-skillcardone"></div>
            <div className="loader-skillcardone"></div>
            <div className="loader-skillcardone"></div>
          </div>
        </div>
      </div>
      <div className="loader-footercontainer">
        <div className="loader-footersection">
          <p className="loader-footerheading"></p>
          <p className="loader-footertext"></p>
          <div className="loader-footercontactsection">
            <div className="loader-footercontactdetailsparents">
              <div className="loader-footercontactdetails">
                <div className="loader-footerphone"></div>
                <div className="loader-footeremail"></div>
                <div className="loader-footeraddress"></div>
              </div>
              <div className="loader-footerconnectparent">
                <p className="loader-footerconnecttext"></p>
                <div className="loader-footerconnecticonsparent">
                  <div className="loader-footerconnecticons"></div>
                  <div className="loader-footerconnecticons"></div>
                  <div className="loader-footerconnecticons"></div>
                  <div className="loader-footerconnecticons"></div>
                </div>
              </div>
            </div>
            <div className="loader-footercontactformparent">
              <div className="loader-footercontactform"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="loader-copyrightcontainer">
        <div className="loader-copyrightsection">
          <p className="loader-copyrightheading"></p>
          <p className="loader-copyrighttext"></p>
        </div>
      </div>
    </loader>
  );
};

export default Loader;
