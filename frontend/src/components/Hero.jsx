import React, { useEffect, useState } from "react";
import "./Hero.css";

import hydroPneumatic from "../assets/images/hydro-pneumatic.jpg";
import ironRemoval from "../assets/images/iron-removal-wtp.jpg";
import owc from "../assets/images/owc.jpg";
import rainwaterHarvesting from "../assets/images/rainwater-harvesting.jpg";
import roPlant from "../assets/images/ro-plant.jpg";

const slides = [
  {
    image: hydroPneumatic,
    category: "WATER TREATMENT SOLUTIONS",
    title: (
      <>
        Advanced Water
        <br />
        Treatment Solutions.
      </>
    ),
    description:
      "Reliable and efficient water treatment systems designed for quality water and long-term performance.",
  },

  {
    image: ironRemoval,
    category: "WATER PURIFICATION",
    title: (
      <>
        Advanced Iron
        <br />
        Removal Systems.
      </>
    ),
    description:
      "Effective iron and manganese removal solutions for clean and safe water.",
  },

  {
    image: owc,
    category: "WASTE MANAGEMENT",
    title: (
      <>
        Smart Waste.
        <br />
        Sustainable Future.
      </>
    ),
    description:
      "Efficient and sustainable solutions for modern organic waste management.",
  },

  {
    image: rainwaterHarvesting,
    category: "WATER CONSERVATION",
    title: (
      <>
        Save Water.
        <br />
        Secure Tomorrow.
      </>
    ),
    description:
      "Smart rainwater harvesting systems designed for sustainable water management.",
  },

  {
    image: roPlant,
    category: "WATER PURIFICATION",
    title: (
      <>
        Advanced RO
        <br />
        Water Treatment.
      </>
    ),
    description:
      "High-performance RO systems delivering reliable and purified water.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + totalSlides) % totalSlides
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const slide = slides[currentSlide];

  return (
    <section className="hero-section" id="home">

      {/* =========================================
          BACKGROUND IMAGE
      ========================================= */}

      <div className="hero-image-wrapper">
        <img
          key={currentSlide}
          src={slide.image}
          alt={slide.category}
          className="hero-image"
        />
      </div>


      {/* =========================================
          DARK OVERLAY
      ========================================= */}

      <div className="hero-overlay"></div>


      {/* =========================================
          SLIDE COUNTER
      ========================================= */}

      <div className="hero-counter">
        <strong>
          {String(currentSlide + 1).padStart(2, "0")}
        </strong>

        <span>/</span>

        <span>
          {String(totalSlides).padStart(2, "0")}
        </span>
      </div>


      {/* =========================================
          CENTER CONTENT
      ========================================= */}

      <div
        key={`content-${currentSlide}`}
        className="hero-content"
      >

        {/* Category ONLY */}

        <div className="hero-category">
          {slide.category}
        </div>


        {/* Heading */}

        <h1>
          {slide.title}
        </h1>


        {/* Description */}

        <p>
          {slide.description}
        </p>


        {/* =====================================
            BUTTONS
        ===================================== */}

        <div className="hero-buttons">

          <a
            href="#services"
            className="hero-primary-btn"
          >
            Our Services
          </a>


          <a
            href="#contact"
            className="hero-secondary-btn"
          >
            Get a Quote
          </a>

        </div>

      </div>


      {/* =========================================
          PREVIOUS ARROW
      ========================================= */}

      <button
        type="button"
        className="hero-arrow hero-prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>


      {/* =========================================
          NEXT ARROW
      ========================================= */}

      <button
        type="button"
        className="hero-arrow hero-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ›
      </button>


      {/* =========================================
          BOTTOM PROGRESS
      ========================================= */}

      <div className="hero-bottom">

        <div className="hero-progress">

          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={
                currentSlide === index
                  ? "active"
                  : ""
              }
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}

        </div>


        <div className="hero-bottom-counter">

          <strong>
            {String(currentSlide + 1).padStart(2, "0")}
          </strong>

          <span>/</span>

          <span>
            {String(totalSlides).padStart(2, "0")}
          </span>

        </div>

      </div>

    </section>
  );
};

export default Hero;