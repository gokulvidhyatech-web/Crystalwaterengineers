import React, { useEffect, useState } from "react";
import "./CustomerSatisfaction.css";

import customerSatisfactionIcon from "../assets/images/Customer.png";

const clients = [
  "/assets/clients/client1.png",
  "/assets/clients/client2.png",
  "/assets/clients/client3.png",
  "/assets/clients/client4.png",
  "/assets/clients/client5.png",
  "/assets/clients/client6.png",
  "/assets/clients/client7.png",
  "/assets/clients/client8.png",
  "/assets/clients/client9.png",
  "/assets/clients/client10.png",
  "/assets/clients/client11.png",
  "/assets/clients/client12.png",
  "/assets/clients/client13.png",
  "/assets/clients/client14.png",
  "/assets/clients/client15.png",
];

const CustomerSatisfaction = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextClient = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  const previousClient = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + clients.length) % clients.length
    );
  };

  // Automatic loop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Show 3 logos
  const visibleClients = [
    clients[currentIndex],
    clients[(currentIndex + 1) % clients.length],
    clients[(currentIndex + 2) % clients.length],
  ];

  return (
    <section className="cwe-customer-satisfaction">
      <div className="cwe-customer-inner">

        {/* LEFT CONTENT */}
        <div className="cwe-customer-heading">

          {/* CUSTOMER SATISFACTION ICON */}
          <div className="cwe-customer-icon">
            <img
              src={customerSatisfactionIcon}
              alt="Customer Satisfaction"
            />
          </div>

          <h2>
            Customer Satisfaction Is Our
            <br />
            Working Motivation!
          </h2>

        </div>

        {/* RIGHT SLIDER */}
        <div className="cwe-client-slider">

          {/* PREVIOUS */}
          <button
            type="button"
            className="cwe-client-arrow"
            onClick={previousClient}
            aria-label="Previous clients"
          >
            <span>←</span>
          </button>

          {/* LOGOS */}
          <div className="cwe-client-logos">
            {visibleClients.map((logo, index) => (
              <div
                className="cwe-client-logo-box"
                key={`${currentIndex}-${index}`}
              >
                <img
                  src={logo}
                  alt={`Client ${currentIndex + index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* NEXT */}
          <button
            type="button"
            className="cwe-client-arrow"
            onClick={nextClient}
            aria-label="Next clients"
          >
            <span>→</span>
          </button>

        </div>

      </div>
    </section>
  );
};

export default CustomerSatisfaction;