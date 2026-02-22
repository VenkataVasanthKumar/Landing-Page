import React from "react";
import "./Footer.css";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {


  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">


        <div className="footer-box">

          <h3>About Us</h3>
          <span className="line"></span>
        

          <p>
            VBLP provides modern digital solutions for growing businesses.
          </p>

          <div className="social">

            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>

            <a href="https://wa.me/916300529154" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

          </div>

        </div>



        <div className="footer-box">

          <h3>Important Links</h3>
          <span className="line"></span>

          <ul>

            <li onClick={scrollToTop}>
              Home
            </li>

            <li onClick={() => scrollToSection("process")}>
              Property
            </li>

            <li onClick={() => scrollToSection("process1")}>
              Pages
            </li>

            <li onClick={() => scrollToSection("about")}>
              About Us
            </li>

            <li onClick={() => scrollToSection("contact")}>
              Contact
            </li>

          </ul>

        </div>



        <div className="footer-box">

          <h3>Address</h3>
          <span className="line"></span>

          <p>
            Sri Tower, Plot no -62, KPHB Phase 7,
            Kukatpally, Hyderabad, Telangana 500085
          </p>

          <p>
            Phone:{" "}
            <a
              href="tel:+916300529154"
              className="footer-link"
            >
              +91 6300529154
            </a>
          </p>

          <p>
            Email:{" "}
            <a
              href="mailto:info@vblp.com"
              className="footer-link"
            >
              info@vblp.com
            </a>
          </p>

        </div>



        <div className="footer-box">

          <h3>Newsletter</h3>
          <span className="line"></span>

          <p>Subscribe for updates</p>

          <div className="newsletter">

            <input
              type="email"
              placeholder="Email"
            />

            <button>
              <FaEnvelope />
            </button>

          </div>

        </div>

      </div>
      <div className="footer-bottom">
        <p>© 2026 VBLP. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
