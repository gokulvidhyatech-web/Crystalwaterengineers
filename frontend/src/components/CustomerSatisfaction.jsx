import "./CustomerSatisfaction.css";

import customerSatisfactionIcon from "../assets/images/Customer.png";
import customerSatisfactionBg from "../assets/images/Water falls.png";

/* =========================================
   CLIENT LOGOS
   CRYSTAL WATER ENGINEERS
========================================= */

import client1 from "../assets/images/Clients/99km_Coffee_Magic.png";
import client2 from "../assets/images/Clients/Dhina_Pile_Foundation.png";
import client3 from "../assets/images/Clients/ELCOT.png";
import client4 from "../assets/images/Clients/Govt_Hydro_Engineering_College_Bilaspur.png";
import client5 from "../assets/images/Clients/House_of_Hiranandani.png";
import client6 from "../assets/images/Clients/IIM_Tiruchirappalli.png";
import client7 from "../assets/images/Clients/IRWO.png";
import client8 from "../assets/images/Clients/Mohan_Mutha_Exports.png";
import client9 from "../assets/images/Clients/MSC_Technology.png";
import client10 from "../assets/images/Clients/NPCI.png";
import client11 from "../assets/images/Clients/RPP_Infra_Projects.png";
import client12 from "../assets/images/Clients/Shapoorji_Pallonji.png";
import client13 from "../assets/images/Clients/Spectra_Constructions.png";
import client14 from "../assets/images/Clients/Tata_Projects.png";
import client15 from "../assets/images/Clients/TIDEL.png";
import client16 from "../assets/images/Clients/TIEMA.png";
import client17 from "../assets/images/Clients/Touchstone_Infrastructure.png";


/* =========================================
   CLIENT ARRAY
========================================= */

const clients = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,
  client16,
  client17,
];


/* =========================================
   CLIENT LOGO GROUP
========================================= */

const ClientLogoGroup = ({ duplicate = false }) => {

  return (

    <div
      className="cwe-client-group"
      aria-hidden={duplicate}
    >

      {clients.map((logo, index) => (

        <div
          className="cwe-client-logo-box"
          key={`${duplicate ? "duplicate" : "original"}-${index}`}
        >

          <img
            src={logo}
            alt={duplicate ? "" : `Client ${index + 1}`}
            loading="lazy"
          />

        </div>

      ))}

    </div>

  );

};


/* =========================================
   CUSTOMER SATISFACTION COMPONENT
========================================= */

const CustomerSatisfaction = () => {

  return (

    <section className="cwe-customer-satisfaction">

      {/* =====================================
          FULL WATER BACKGROUND
      ===================================== */}

      <div
        className="cwe-customer-inner"
        style={{
          backgroundImage: `url(${customerSatisfactionBg})`,
        }}
      >

        {/* BLUE OVERLAY */}

        <div className="cwe-customer-overlay"></div>


        {/* =====================================
            MAIN CONTENT
        ===================================== */}

        <div className="cwe-customer-content">


          {/* =====================================
              LEFT SIDE - CUSTOMER SATISFACTION
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
              RIGHT SIDE - CLIENT LOGO SLIDER
          ===================================== */}

          <div className="cwe-client-slider">

            <div className="cwe-client-track">

              {/* ORIGINAL LOGOS */}

              <ClientLogoGroup />

              {/* DUPLICATE LOGOS FOR INFINITE SCROLL */}

              <ClientLogoGroup duplicate />

            </div>

          </div>


        </div>

      </div>

    </section>

  );

};

export default CustomerSatisfaction;