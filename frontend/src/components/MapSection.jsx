
import "./MapSection.css";

const MapSection = () => {
  const mapUrl =
    "https://www.google.com/maps/place/13%C2%B005'53.4%22N+80%C2%B007'57.8%22E/@13.0981571,80.1301495,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.0981571!4d80.1327244";

  return (
    <section className="map-section">
      <div className="map-container">

        <iframe
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.016242449711!2d80.1301494750787!3d13.098157087228891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA1JzUzLjQiTiA4MMKwMDcnNTcuOCJF!5e0!3m2!1sen!2sin!4v1794926590429!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          title="Crystal Water Engineers Map"
        />

        <div className="map-info-card">

          <h3>Crystal Water Engineers</h3>

          <p className="map-address">
            275/2A2, School St, Ayyappakkam,
            Tamil Nadu 600077, India
          </p>

          <div className="map-rating">
            <strong>3.0</strong>
            <span className="star">★</span>
            <a href={mapUrl} target="_blank" rel="noreferrer">
              (4 reviews)
            </a>
          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-open-btn"
          >
            <span>↗</span> Open in Maps
          </a>

        </div>
      </div>
    </section>
  );
};

export default MapSection;
