import { useEffect, useState } from "react";
import "./Hero.css";

const slides = [
  {
    smallTitle: "Csrystal Water Engineers",
    title: "Reliable Water.\nBetter Solutions.",
    description:
      "Complete water and wastewater engineering solutions designed for reliable performance, efficient operation, and long-term value.",
    primaryButton: "Our Services",
    secondaryButton: "Get a Quote",
    image: "",
  },

  {
    smallTitle: "Water Treatment Solutions",
    title: "Pure Water.\nPowerful Technology.",
    description:
      "Advanced water treatment solutions for industrial and commercial requirements, designed with quality, efficiency, and performance in mind.",
    primaryButton: "View Products",
    secondaryButton: "Get a Quote",
    image: "",
  },

  {
    smallTitle: "Wastewater Engineering",
    title: "Treat Better.\nProtect Tomorrow.",
    description:
      "Reliable wastewater treatment systems engineered to support cleaner operations and responsible water management.",
    primaryButton: "Explore Services",
    secondaryButton: "Contact Us",
    image: "",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="hero-section" id="home">

      <div className="hero-slider">

        {slides.map((slide, index) => (
          <div
            className={`hero-slide ${
              index === currentSlide ? "active" : ""
            }`}
            key={index}
          >

            {/* ================= LEFT CONTENT ================= */}

            <div className="hero-content">

              <span className="hero-small-title">
                {slide.smallTitle}
              </span>

              <h2>
                {slide.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < slide.title.split("\n").length - 1 && (
                      <br />
                    )}
                  </span>
                ))}
              </h2>

              <div className="hero-line"></div>

              <p>
                {slide.description}
              </p>

              <div className="hero-buttons">

                <a
                  href="#services"
                  className="hero-primary-btn"
                >
                  {slide.primaryButton}
                </a>

                <a
                  href="#contact"
                  className="hero-secondary-btn"
                >
                  {slide.secondaryButton}
                  <span>→</span>
                </a>

              </div>

            </div>


            {/* ================= RIGHT IMAGE ================= */}

            <div className="hero-image-wrapper">

              {slide.image ? (
                <img
                  src={slide.image}
                  alt={slide.smallTitle}
                  className="hero-image"
                />
              ) : (
                <div className="hero-image-placeholder">

                  <div className="placeholder-content">

                    <span className="placeholder-water">
                      WATER
                    </span>

                    <strong>
                      IMAGE
                    </strong>

                    <small>
                      Add your banner image here
                    </small>

                  </div>

                </div>
              )}

            </div>

          </div>
        ))}


        {/* ================= ARROWS ================= */}

        <button
          type="button"
          className="hero-arrow hero-prev"
          onClick={previousSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>

        <button
          type="button"
          className="hero-arrow hero-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </button>


        {/* ================= DOTS ================= */}

        <div className="hero-dots">

          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`hero-dot ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Hero;