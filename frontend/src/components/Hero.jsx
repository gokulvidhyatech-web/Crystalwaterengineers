import { useEffect, useState } from "react";
import "./Hero.css";

import hydroPneumatic from "../assets/images/hydro-pneumatic.jpg";
import ironRemoval from "../assets/images/iron-removal-wtp.jpg";
import owc from "../assets/images/owc.jpg";
import rainwater from "../assets/images/rainwater-harvesting.jpg";
import roPlant from "../assets/images/ro-plant.jpg";
import stp01 from "../assets/images/stp-01.jpg";
import stp02 from "../assets/images/stp-02.jpg";
import stp03 from "../assets/images/stp-03.jpg";
import ufPlant from "../assets/images/uf-plant.jpg";

const slides = [
  {
    image: hydroPneumatic,
    smallTitle: "WATER TREATMENT SOLUTIONS",
    title: "Advanced Water Treatment Solutions",
    description:
      "Reliable and efficient water treatment systems designed for quality water and long-term performance.",
  },
  {
    image: ironRemoval,
    smallTitle: "WATER FILTRATION SYSTEMS",
    title: "Pure Water Better Performance.",
    description:
      "Effective filtration solutions engineered to improve water quality and deliver dependable results.",
  },
  {
    image: owc,
    smallTitle: "WATER PURIFICATION",
    title: "Clean Water Starts Here.",
    description:
      "Modern water purification systems designed for efficient and consistent water treatment.",
  },
  {
    image: rainwater,
    smallTitle: "RAINWATER HARVESTING",
    title: "Save Water. Secure Tomorrow.",
    description:
      "Practical rainwater harvesting solutions that support sustainable water management.",
  },
  {
    image: roPlant,
    smallTitle: "RO PLANT SOLUTIONS",
    title: "Advanced RO Water Treatment.",
    description:
      "High-performance RO systems designed to provide clean and reliable water for different applications.",
  },
  {
    image: stp01,
    smallTitle: "SEWAGE TREATMENT PLANTS",
    title: "Treat Wastewater. Protect Tomorrow.",
    description:
      "Efficient sewage treatment solutions for responsible wastewater management and reuse.",
  },
  {
    image: stp02,
    smallTitle: "WASTEWATER TREATMENT",
    title: "Smarter Wastewater Management.",
    description:
      "Engineered wastewater treatment systems focused on efficiency, reliability and sustainability.",
  },
  {
    image: stp03,
    smallTitle: "STP SOLUTIONS",
    title: "Powerful Treatment Technology.",
    description:
      "Complete sewage treatment solutions designed for dependable and efficient operation.",
  },
  {
    image: ufPlant,
    smallTitle: "ULTRAFILTRATION SYSTEMS",
    title: "Advanced Filtration Technology.",
    description:
      "Ultrafiltration systems designed to deliver consistent water quality and efficient operation.",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // AUTO SCROLL
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // NEXT
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  // PREVIOUS
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-slider">

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${
              index === currentSlide ? "active" : ""
            }`}
          >
            {/* BACKGROUND IMAGE */}
            <img
              src={slide.image}
              alt={slide.title}
              className="hero-image"
            />

            {/* OVERLAY */}
            <div className="hero-overlay"></div>

            {/* CENTER CONTENT */}
            <div className="hero-content">

              <span className="hero-small-title">
                {slide.smallTitle}
              </span>

              <h1>{slide.title}</h1>

              <div className="hero-line"></div>

              <p>{slide.description}</p>

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
                  <span>→</span>
                </a>

              </div>
            </div>
          </div>
        ))}

        {/* LEFT ARROW */}
        <button
          type="button"
          className="hero-arrow hero-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>

        {/* RIGHT ARROW */}
        <button
          type="button"
          className="hero-arrow hero-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </button>

      </div>
    </section>
  );
}

export default Hero;