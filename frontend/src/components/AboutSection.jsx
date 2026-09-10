import { useEffect, useRef, useState } from "react";
import "./AboutSection.css";

import aboutImage from "../assets/images/Water-Softener-Plant.png";

function AboutSection() {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      title: "End-to-End Delivery",
      text: "Complete water and wastewater engineering solutions",
    },
    {
      title: "Domain Expertise",
      text: "Experienced engineering and technical knowledge",
    },
    {
      title: "Tailor-Made Design",
      text: "Solutions engineered according to application needs",
    },
    {
      title: "Lifecycle Support",
      text: "Reliable support for operation and maintenance",
    },
  ];

  /* =========================================
     SECTION SCROLL REVEAL
  ========================================= */

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          /* Animate only once */
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about-section ${
        isVisible ? "about-visible" : ""
      }`}
    >
      <div className="container about-container">

        {/* =========================================
            LEFT IMAGE
        ========================================= */}

        <div className="about-image-wrapper">

          <img
            src={aboutImage}
            alt="Crystal Water Engineers water treatment plant"
            className="about-image"
          />

          {/* White light sweep */}
          <span className="about-image-shine"></span>

          <div className="about-image-overlay"></div>

        </div>


        {/* =========================================
            RIGHT CONTENT
        ========================================= */}

        <div className="about-content">

          {/* SECTION LABEL */}

          <div className="about-label">

            <span></span>

            ABOUT US

          </div>


          {/* HEADING */}

          <h2 className="about-title">

            Engineering trust
            <br />
            one plant at a time

          </h2>


          {/* DESCRIPTION */}

          <div className="about-description">

            <p>
              Crystal Water Engineers was established in 2020 and provides
              engineered water and wastewater treatment solutions designed
              around specific project requirements.
            </p>

            <p>
              Our approach focuses on practical engineering, reliable
              treatment systems and application-specific solutions to
              support efficient and long-term plant performance.
            </p>

          </div>


          {/* FEATURE CARDS */}

          <div className="about-features">

            {features.map((feature, index) => (

              <div
                className="about-feature"
                key={index}
                style={{
                  "--feature-delay": `${index * 120}ms`,
                }}
              >

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.text}
                </p>

              </div>

            ))}

          </div>


          {/* CTA */}

          <a
            href="#projects"
            className="about-button"
          >

            <span>
              See Our Project Track Record
            </span>

            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >

              <path
                d="M5 12h13"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M14 7l5 5-5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

            </svg>

          </a>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;