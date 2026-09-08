import React from "react";
import "./MapSection.css";

const MapSection = () => {
  return (
    <section className="map-section">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0126394634353!2d80.12786479678957!3d13.098385400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52631cf511330f%3A0x33806ce45d3dda68!2sCrystal%20Water%20Engineers!5e0!3m2!1sen!2sus!4v1788867078131!5m2!1sen!2sus"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Crystal Water Engineers Location"
        />
      </div>
    </section>
  );
};

export default MapSection;