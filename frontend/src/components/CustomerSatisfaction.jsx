import React, { useEffect, useState } from "react";
import "./CustomerSatisfaction.css";

import customerSatisfactionIcon from "../assets/images/Customer.png";

/* =========================================
   CLIENT LOGOS
   =========================================
   To ADD a client:
   1. Put image inside:
      src/assets/images/Clients/

   2. Add one import below

   3. Add it to the clients array

   To DELETE a client:
   Remove its import + array entry.
========================================= */

import client1 from "../assets/images/Clients/client1.jpg";
import client2 from "../assets/images/Clients/client2.png";
import client3 from "../assets/images/Clients/client3.png";
// import client4 from "../assets/images/Clients/client4.png";
// import client5 from "../assets/images/Clients/client5.png";

const clients = [
  client1,
  client2,
  client3,
  // client4,
  // client5,
];


/* =========================================
   CUSTOMER SATISFACTION
========================================= */

const CustomerSatisfaction = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  /* NEXT */
  const nextClient = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  /* PREVIOUS */
  const previousClient = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + clients.length) % clients.length
    );
  };


  /* =========================================
     AUTO SLIDER
  ========================================= */

  useEffect(() => {
    if (clients.length <= 3) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);


  /* =========================================
     VISIBLE CLIENTS
  ========================================= */

  const visibleClients = [];

  for (let i = 0; i < Math.min(3, clients.length); i++) {
    visibleClients.push(
      clients[(currentIndex + i) % clients.length]
    );
  }


  return (
    <section className="cwe-customer-satisfaction">

      <div className="cwe-customer-inner">

        {/* =====================================
            LEFT SIDE
        ===================================== */}

        <div className="cwe-customer-heading">

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


        {/* =====================================
            RIGHT SIDE - CLIENT LOGOS
        ===================================== */}

        <div className="cwe-client-slider">

          {/* PREVIOUS */}
          <button
            type="button"
            className="cwe-client-arrow"
            onClick={previousClient}
            aria-label="Previous clients"
          >
            ←
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
            →
          </button>

        </div>

      </div>

    </section>
  );
};

export default CustomerSatisfaction;