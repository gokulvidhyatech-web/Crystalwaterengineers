import "./StatsBanner.css";

function StatsBanner() {
  const stats = [
    {
      type: "drop",
      number: "25+",
      title: "Years of Experience",
      text: "Industry expertise",
    },
    {
      type: "check",
      number: "500+",
      title: "Projects Completed",
      text: "Successful installations",
    },
    {
      type: "gear",
      number: "100+",
      title: "Water Solutions",
      text: "Treatment technologies",
    },
    {
      type: "support",
      number: "24/7",
      title: "Customer Support",
      text: "Dedicated assistance",
    },
  ];

  const renderIcon = (type) => {
    switch (type) {
      case "drop":
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 2.8C12 2.8 5.5 10.1 5.5 15.1C5.5 18.9 8.4 21.5 12 21.5C15.6 21.5 18.5 18.9 18.5 15.1C18.5 10.1 12 2.8 12 2.8Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M8.7 16.4C9.1 18.1 10.3 19 12 19.2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        );

      case "check":
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle
              cx="12"
              cy="12"
              r="8.7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M8 12.2L10.7 15L16.2 9.2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      case "gear":
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M9.8 3.2h4.4l.7 2.3c.6.2 1.1.5 1.6.9l2.3-.6 2.2 3.8-1.7 1.7c.1.6.1 1.2 0 1.8l1.7 1.7-2.2 3.8-2.3-.6c-.5.4-1 .7-1.6.9l-.7 2.3H9.8l-.7-2.3c-.6-.2-1.1-.5-1.6-.9l-2.3.6L3 14.8l1.7-1.7a7 7 0 0 1 0-1.8L3 9.6l2.2-3.8 2.3.6c.5-.4 1-.7 1.6-.9l.7-2.3Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="12"
              r="2.8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
        );

      case "support":
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M5 13.5V11a7 7 0 0 1 14 0v2.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M5 12.5H3.8c-.7 0-1.3.6-1.3 1.3v2.4c0 .7.6 1.3 1.3 1.3H5v-5Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="M19 12.5h1.2c.7 0 1.3.6 1.3 1.3v2.4c0 .7-.6 1.3-1.3 1.3H19v-5Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="M19 17.5c-.4 2-1.8 3-4.2 3H13"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <section className="stats-section">
      <div className="stats-banner">

        {/* WAVE BACKGROUND */}
        <div className="stats-wave"></div>

        {/* DECORATIVE GLOW */}
        <div className="stats-glow stats-glow-one"></div>
        <div className="stats-glow stats-glow-two"></div>

        <div className="container stats-container">

          {/* LEFT CONTENT */}
          <div className="stats-heading">
            <span className="stats-label">
              CRYSTAL WATER ENGINEERS
            </span>

            <h2>
              Engineering Better Water
              <br />
              For A Better Future.
            </h2>

            <span className="stats-heading-line"></span>
          </div>

          {/* RIGHT STATS */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>

                <div className="stat-icon">
                  {renderIcon(stat.type)}
                </div>

                <div className="stat-content">
                  <strong>{stat.number}</strong>

                  <h3>{stat.title}</h3>

                  <p>{stat.text}</p>
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