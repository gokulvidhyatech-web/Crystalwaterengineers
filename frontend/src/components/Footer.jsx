import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

import "./Footer.css";

// Logo
import logo from "../assets/images/Logo.png";

// 👇 Add your generated dark footer background image here
import footerBg from "../assets/images/Footer-bg-.png";

const Footer = () => {

  /* =========================================
     SERVICES + SUBMENUS
  ========================================= */

  const services = [
    {
      title: "Water Treatment",
      submenu: [
        "Water Treatment Plants",
        "Water Filtration Systems",
        "Water Softening Systems",
        "Industrial Water Treatment",
      ],
    },

    {
      title: "Wastewater Treatment",
      submenu: [
        "Sewage Treatment Plants",
        "Effluent Treatment Plants",
        "Wastewater Recycling",
        "Industrial Wastewater Treatment",
      ],
    },

    {
      title: "RO Systems",
      submenu: [
        "Industrial RO Plants",
        "Commercial RO Systems",
        "Containerized RO Plants",
        "RO Plant O&M",
      ],
    },

    {
      title: "STP / ETP Solutions",
      submenu: [
        "STP Solutions",
        "ETP Solutions",
        "MBR Systems",
        "SBR Systems",
      ],
    },

    {
      title: "Operation & Maintenance",
      submenu: [
        "Plant Operation",
        "Annual Maintenance",
        "AMC Services",
        "Plant Optimization",
      ],
    },
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

  return (
    <footer
      className="cwe-footer"
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
    >

      {/* =========================================
          DARK OVERLAY
      ========================================= */}

      <div className="footer-overlay"></div>


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

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>

          </div>


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

          <ul className="footer-service-list">

            {services.map((service, index) => (

              <li
                className="footer-service-item"
                key={index}
              >

                <a
                  href="#services"
                  className="service-main-link"
                >

                  <span>
                    {service.title}
                  </span>

                  {/* Arrow */}
                  <span className="service-arrow">
                    ›
                  </span>

                </a>


                {/* SUBMENU */}

                <ul className="footer-submenu">

                  {service.submenu.map(
                    (item, subIndex) => (

                      <li key={subIndex}>

                        <a href="#services">

                          <span className="submenu-arrow">
                            ›
                          </span>

                          {item}

                        </a>

                      </li>

                    )
                  )}

                </ul>

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

          <ul>

            {pages.map((page, index) => (

              <li key={index}>

                <a
                  href={`#${page
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >

                  <span className="page-arrow">
                    ›
                  </span>

                  {page}

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

              Plot No. 5499, M.I.G, 7th Main Road,
              <br />

              TNHB, Ayyapakkam,
              <br />

              Chennai - 600 077

            </span>

          </div>


          {/* PHONE */}

          <div className="contact-item">

            <FaPhoneAlt />

            <a href="tel:+914435673892">

              +91 44 3567 3892

            </a>

          </div>


          {/* SECOND PHONE */}

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
            Terms & Conditions
          </a>

          <span>|</span>

          <a href="#sitemap">
            Sitemap
          </a>

        </div>


        <div className="made-in-india">

          Developed By
          GV TECNOLOGIES

        </div>

      </div>

    </footer>
  );
};

export default Footer;