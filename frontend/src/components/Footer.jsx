import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import "./Footer.css";

import logo from "../assets/images/Logo.png";
import footerBg from "../assets/images/Footer-bg-.png";

const Footer = () => {
  /* =========================================
     SERVICES
  ========================================= */

  const services = [
    "Water Treatment",
    "Wastewater Treatment",
    "RO Systems",
    "STP / ETP Solutions",
    "Operation & Maintenance",
  ];

  /* =========================================
     PAGES
  ========================================= */

  const pages = [
    "Home",
    "About Us",
    "Our Services",
    "Projects",
    "Clients",
    "Contact Us",
  ];

  /* =========================================
     PAGE URL HELPER
  ========================================= */

  const getPageId = (page) =>
    page.toLowerCase().replace(/\s+/g, "-");

  return (
    <footer
      className="cwe-footer"
      style={{
        "--footer-bg-image": `url(${footerBg})`,
      }}
    >
      {/* =========================================
          FIXED BACKGROUND
      ========================================= */}

      <div className="footer-background"></div>

      {/* =========================================
          MAIN FOOTER
      ========================================= */}

      <div className="footer-main">

        {/* =====================================
            COMPANY
        ===================================== */}

        <div className="footer-company">

          <img
            src={logo}
            alt="Crystal Water Engineers"
            className="footer-logo"
          />

          <p className="footer-description">
            Delivering sustainable water treatment solutions
            for a cleaner, healthier and brighter tomorrow.
          </p>

          {/* SOCIAL ICONS */}

          <div className="footer-socials">

            <a
              href="#"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

          </div>

          {/* SLOGAN */}

          <div className="footer-slogan">
            Cleaner Water. Brighter Tomorrow.
          </div>

        </div>


        {/* =====================================
            SERVICES
        ===================================== */}

        <div className="footer-column">

          <h3>Our Services</h3>

          <span className="footer-line"></span>

          <ul className="footer-list">

            {services.map((service, index) => (

              <li key={index}>

                <a href="#services">

                  <span className="list-arrow">
                    ›
                  </span>

                  <span>
                    {service}
                  </span>

                </a>

              </li>

            ))}

          </ul>

        </div>


        {/* =====================================
            PAGES
        ===================================== */}

        <div className="footer-column">

          <h3>Pages</h3>

          <span className="footer-line"></span>

          <ul className="footer-list">

            {pages.map((page, index) => (

              <li key={index}>

                <a href={`#${getPageId(page)}`}>

                  <span className="list-arrow">
                    ›
                  </span>

                  <span>
                    {page}
                  </span>

                </a>

              </li>

            ))}

          </ul>

        </div>


        {/* =====================================
            CONTACT
        ===================================== */}

        <div className="footer-column footer-contact">

          <h3>Contact Us</h3>

          <span className="footer-line"></span>


          {/* ADDRESS */}

          <div className="contact-item">

            <FaMapMarkerAlt />

            <span>
              Plot No. 5499, M.I.G, <br />7th Main Road,
              <br />
              TNHB, Ayyapakkam,
              <br />
              Chennai - 600 077
            </span>

          </div>


          {/* PHONE 1 */}



          {/* PHONE 2 */}

          <div className="contact-item">

            <FaPhoneAlt />

            <a href="tel:+918851564950">
              +91 88515 64950
            </a>

          </div>


          {/* EMAIL */}

          <div className="contact-item">

            <FaEnvelope />

            <a href="mailto:crystalwater.cwe@gmail.com">
              crystalwater.cwe@gmail.com
            </a>

          </div>

        </div>

      </div>


      {/* =========================================
          BOTTOM BAR
      ========================================= */}

      <div className="footer-bottom">

        <div className="copyright">
          © {new Date().getFullYear()} Crystal Water Engineers.
          All Rights Reserved.
        </div>


        <div className="footer-bottom-links">

          <a href="#privacy">
            Privacy Policy
          </a>

          <span>|</span>

          <a href="#terms">
            Terms &amp; Conditions
          </a>

          <span>|</span>

          <a href="#sitemap">
            Sitemap
          </a>

        </div>


        <div className="made-in-india">
          Developed By&nbsp;
          <strong>GV TECHNOLOGIES</strong>
        </div>

      </div>

    </footer>
  );
};

export default Footer;