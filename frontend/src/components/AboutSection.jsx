import React from "react";
import "./AboutSection.css";
import waterSoftener from "../assets/images/water-softener.jpg";
const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-image-wrap">
          <img
           src={waterSoftener}
            alt="Water Softener Plant - Crystal Water Engineers"
            className="about-image"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">

          <div className="about-label">
            <span></span>
            ABOUT US
          </div>

          <h2>
            Engineering reliable water solutions, one plant at a time.
          </h2>

          <p>
            Crystal Water Engineers delivers reliable water and wastewater
            treatment solutions designed around the specific requirements of
            every project. We focus on practical engineering, quality
            installation and long-term system performance.
          </p>

          <p>
            From water softeners and RO systems to WTP, STP and other
            treatment solutions, our team provides application-focused
            systems for residential, commercial and industrial requirements.
          </p>

          {/* FEATURES */}
          <div className="about-features">

            <div className="about-feature">
              <h3>Complete Solutions</h3>
              <span>
                Water & wastewater treatment systems
              </span>
            </div>

            <div className="about-feature">
              <h3>Quality Engineering</h3>
              <span>
                Reliable systems built for performance
              </span>
            </div>

            <div className="about-feature">
              <h3>Custom Design</h3>
              <span>
                Solutions designed for each application
              </span>
            </div>

            <div className="about-feature">
              <h3>Long-Term Support</h3>
              <span>
                Installation, service & maintenance
              </span>
            </div>

          </div>

          {/* BUTTON */}
          <a href="#projects" className="about-button">
            Explore Our Solutions
            <span>→</span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;