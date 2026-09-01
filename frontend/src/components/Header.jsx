import { useState } from "react";
import "./Header.css";
import logo from "../assets/images/Logo.jpeg";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <header className="site-header">

      {/* ================= TOP BAR ================= */}
      <div className="top-bar">
        <div className="top-bar-container">

          <span>
            Survey No. 274/1 & 275/2A2, School Street,
            Ayyapakkam, Chennai - 600 077
          </span>

          <span>
            crystalwater.cwe@gmail.com
          </span>

          <span>
            Mon - Sat: 9.00am - 6.30pm
          </span>

          <span>
            88515 64950
          </span>

        </div>
      </div>


      {/* ================= MAIN NAVBAR ================= */}
      <div className="main-navbar">
        <div className="navbar-container">

          {/* LOGO + BRAND */}
          <a
            href="#home"
            className="brand"
            onClick={closeMenu}
          >
            <img
              src={logo}
              alt="Crystal Water Engineers"
              className="brand-logo"
            />

            <div className="brand-text">
              <h1>Crystal Water Engineers</h1>

              <p>
                WATER &amp; WASTEWATER ENGINEERING
              </p>
            </div>
          </a>


          {/* ================= DESKTOP MENU ================= */}
          <nav className="desktop-menu">

            <a
              href="#home"
              className="menu-link active"
            >
              Home
            </a>

            <a
              href="#about"
              className="menu-link"
            >
              About Us
            </a>

            <a
              href="#products"
              className="menu-link"
            >
              Products
            </a>

            <a
              href="#services"
              className="menu-link"
            >
              Services
            </a>

            <a
              href="#client"
              className="menu-link"
            >
              Client
            </a>

            <a
              href="#gallery"
              className="menu-link"
            >
              Gallery
            </a>

            <a
              href="#contact"
              className="menu-link"
            >
              Contact Us
            </a>

          </nav>


          {/* ================= DESKTOP QUOTE ================= */}
          <a
            href="#contact"
            className="quote-button"
          >
            Get a Quote
          </a>


          {/* ================= MOBILE HAMBURGER ================= */}
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </div>


      {/* ================= MOBILE MENU ================= */}
      <div
        className={`mobile-menu ${
          mobileMenu ? "open" : ""
        }`}
      >

        <a
          href="#home"
          onClick={closeMenu}
        >
          Home
        </a>

        <a
          href="#about"
          onClick={closeMenu}
        >
          About Us
        </a>

        <a
          href="#products"
          onClick={closeMenu}
        >
          Products
        </a>

        <a
          href="#services"
          onClick={closeMenu}
        >
          Services
        </a>

        <a
          href="#client"
          onClick={closeMenu}
        >
          Client
        </a>

        <a
          href="#gallery"
          onClick={closeMenu}
        >
          Gallery
        </a>

        <a
          href="#contact"
          onClick={closeMenu}
        >
          Contact Us
        </a>

        <a
          href="#contact"
          className="mobile-quote"
          onClick={closeMenu}
        >
          Get a Quote
        </a>

      </div>

    </header>
  );
}

export default Header;