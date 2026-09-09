
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      <Header />

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <span>ABOUT CRYSTAL WATER ENGINEERS</span>

          <h1>
            Engineering Better Water.
            <br />
            Building a Better Future.
          </h1>

          <p>
            Reliable water and wastewater treatment solutions
            engineered for performance, efficiency and long-term value.
          </p>
        </div>
      </section>


      {/* COMPANY INTRO */}
      <section className="about-intro">
        <div className="about-intro-image">
          <img
            src="/images/about-water-treatment.jpg"
            alt="Crystal Water Engineers Water Treatment System"
          />
        </div>

        <div className="about-intro-content">
          <span className="section-label">WHO WE ARE</span>

          <h2>
            Engineering Trust,
            <br />
            One Plant at a Time.
          </h2>

          <p>
            Crystal Water Engineers is a water and wastewater treatment
            engineering company established in 2020. We provide engineered
            solutions for water treatment, wastewater treatment and
            industrial water management requirements.
          </p>

          <p>
            Our approach combines engineering expertise, practical site
            experience and reliable equipment to deliver treatment systems
            designed around the specific requirements of every project.
          </p>

          <div className="about-highlight-grid">

            <div className="about-highlight">
              <strong>2020</strong>
              <span>Established</span>
            </div>

            <div className="about-highlight">
              <strong>25+</strong>
              <span>Projects & Installations</span>
            </div>

            <div className="about-highlight">
              <strong>100%</strong>
              <span>Engineering Focus</span>
            </div>

            <div className="about-highlight">
              <strong>24/7</strong>
              <span>Support Commitment</span>
            </div>

          </div>
        </div>
      </section>


      {/* WHAT WE DO */}
      <section className="about-services">

        <div className="about-section-heading">
          <span>OUR EXPERTISE</span>

          <h2>
            Complete Water Treatment
            <br />
            Engineering Solutions
          </h2>

          <p>
            From water purification to industrial wastewater management,
            we develop practical treatment solutions for different
            applications and capacities.
          </p>
        </div>

        <div className="about-service-grid">

          <div className="about-service-card">
            <div className="service-number">01</div>
            <h3>Water Treatment Plants</h3>
            <p>
              Engineered systems for efficient treatment and purification
              of raw and process water.
            </p>
          </div>

          <div className="about-service-card">
            <div className="service-number">02</div>
            <h3>RO Systems</h3>
            <p>
              Reverse osmosis systems designed for reliable water
              purification and industrial applications.
            </p>
          </div>

          <div className="about-service-card">
            <div className="service-number">03</div>
            <h3>Wastewater Treatment</h3>
            <p>
              Treatment solutions designed to manage industrial and
              commercial wastewater effectively.
            </p>
          </div>

          <div className="about-service-card">
            <div className="service-number">04</div>
            <h3>Filtration Systems</h3>
            <p>
              Filtration and conditioning systems designed according to
              individual water quality requirements.
            </p>
          </div>

        </div>

      </section>


      {/* ENGINEERING APPROACH */}
      <section className="about-approach">

        <div className="about-approach-content">

          <span className="section-label">OUR APPROACH</span>

          <h2>
            From Requirement
            <br />
            To Reliable Solution
          </h2>

          <p>
            Every water treatment requirement is different. We study the
            application, understand the process requirements and develop
            a practical engineering solution around the actual site needs.
          </p>

          <div className="approach-list">

            <div>
              <span>01</span>
              <strong>Understand</strong>
              <p>Study water quality and project requirements.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Engineer</strong>
              <p>Design the treatment process and system.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Install</strong>
              <p>Execute installation and commissioning.</p>
            </div>

            <div>
              <span>04</span>
              <strong>Support</strong>
              <p>Provide continued technical support.</p>
            </div>

          </div>

        </div>

        <div className="about-approach-image">
          <img
            src="/images/about-ro-system.jpg"
            alt="Industrial RO Water Treatment System"
          />
        </div>

      </section>


      {/* WHY US */}
      <section className="about-why">

        <div className="about-section-heading">
          <span>WHY CRYSTAL WATER ENGINEERS</span>

          <h2>
            Built Around Engineering,
            <br />
            Reliability & Results.
          </h2>
        </div>

        <div className="why-grid">

          <div>
            <h3>Engineering Expertise</h3>
            <p>
              Practical engineering focused on real site requirements.
            </p>
          </div>

          <div>
            <h3>Project Experience</h3>
            <p>
              Experience across different water treatment installations
              and industrial applications.
            </p>
          </div>

          <div>
            <h3>Quality Systems</h3>
            <p>
              Reliable components and carefully engineered treatment
              systems.
            </p>
          </div>

          <div>
            <h3>Customer Support</h3>
            <p>
              Continued technical assistance throughout the project
              lifecycle.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="about-cta">

        <div>
          <span>LET'S BUILD A BETTER WATER FUTURE</span>

          <h2>
            Have a Water Treatment
            <br />
            Requirement?
          </h2>
        </div>

        <a href="/#contact" className="about-cta-button">
          Talk to Our Engineers
        </a>

      </section>


      <Footer />

    </div>
  );
};

export default About;