import React from "react";
import "./MapSection.css";

const MapSection = () => {
  const address =
    "Survey No. 274, 1 & 275/2A2, School St, Ayappakkam, Tamil Nadu 600077, India";

  const mapLink = "https://maps.app.goo.gl/dR8fkraA81pv9zqFA";

  return (
    <section className="map-section">
      <div className="map-container">
        <div className="map-wrapper">
          <iframe
            title="Crystal Water Engineers Location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              address
            )}&output=embed`}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Click map to open actual Google Maps location */}
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="map-click-area"
            aria-label="Open Crystal Water Engineers in Google Maps"
          ></a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;