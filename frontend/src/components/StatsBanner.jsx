import "./StatsBanner.css";

function StatsBanner() {
  const stats = [
    {
      icon: "💧",
      number: "25+",
      title: "Years of Experience",
      text: "Industry expertise",
    },
    {
      icon: "✓",
      number: "500+",
      title: "Projects Completed",
      text: "Successful installations",
    },
    {
      icon: "⚙",
      number: "100+",
      title: "Water Solutions",
      text: "Treatment technologies",
    },
    {
      icon: "★",
      number: "24/7",
      title: "Customer Support",
      text: "Dedicated assistance",
    },
  ];

  return (
    <section className="stats-section">

      {/* FULL WIDTH BACKGROUND */}
      <div className="stats-banner">

        {/* WAVE BACKGROUND */}
        <div className="stats-wave"></div>

        {/* CONTENT CONTAINER */}
        <div className="stats-container">

          {/* TOP CONTENT */}
          <div className="stats-top">

            <div className="stats-heading">

              <span className="stats-label">
                CRYSTAL WATER ENGINEERS
              </span>

              <h2>
                Engineering Better Water
                <br />
                For A Better Future.
              </h2>

            </div>

            <div className="stats-description">
              <p>
                Reliable water and wastewater engineering solutions
                designed to deliver quality, efficiency and long-term
                performance.
              </p>
            </div>

          </div>


          {/* STATS */}
          <div className="stats-grid">

            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>

                <div className="stat-icon">
                  <span>{stat.icon}</span>
                </div>

                <div className="stat-content">

                  <strong>
                    {stat.number}
                  </strong>

                  <h3>
                    {stat.title}
                  </h3>

                  <p>
                    {stat.text}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default StatsBanner;