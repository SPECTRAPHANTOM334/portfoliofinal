/** @format */

import React from "react";
import { sendEmail } from "./sendEmail";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    sendEmail(name, email, message);
    e.target.reset();
  };

  return (
    <footer>
      <div className="footerSection">
        <div className="footer-content">
          <h2 className="heading">Contact</h2>
          <p className="context">
            I like to create things with fun, open-minded people. Feel free to
            say hello!
          </p>
          <div className="contact-section">
            <div className="contact-details">
              <div className="contactdetailseparator">
                <div className="Contact">
                  <a href="tel:03342346559">
                    <span class="x-phone"></span>
                  </a>
                  <div className="contacttextparent">
                    <div className="contacttext">Phone</div>
                    <div className="contact-information">
                      <p>
                        <a href="tel:03342346559">0334-2346559</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="Contact">
                  <a href="mailto:ibaig6990@gmail.com">
                    <span class="x-email"></span>
                  </a>
                  <div className="contacttextparent">
                    <div className="contacttext">Email</div>
                    <div className="contact-information">
                      <p>
                        <a href="mailto:ibaig6990@gmail.com">
                          ibaig6990@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Contact">
                  <a
                    href="https://www.google.com/maps?q=Karachi,Pakistan"
                    target="_blank"
                    rel="noopener noreferrer">
                    <span class="x-address"></span>
                  </a>
                  <div className="contacttextparent">
                    <div className="contacttext">Address</div>
                    <div className="contact-information">
                      <p>
                        <a
                          href="https://www.google.com/maps?q=Karachi,Pakistan"
                          target="_blank"
                          rel="noopener noreferrer">
                          Karachi, Pakistan
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ContactSocialBox">
                <p className="connecttext">Connect with me</p>
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/BaigIbrahim334"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-wrapper">
                    <span class="x-facebook"></span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-wrapper">
                    <span class="x-linkedin"></span>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-wrapper">
                    <span class="x-twitter"></span>
                  </a>
                  <a
                    href="https://github.com/SPECTRAPHANTOM334"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-wrapper">
                    <span class="x-github"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="contactformparent">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="contactformheading">Send Message</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
                <input type="email" name="email" placeholder="Email" required />
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  required></textarea>
                <button className="submitbutton" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
