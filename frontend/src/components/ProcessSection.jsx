import "./ProcessSection.css";

function ProcessSection() {
  const steps = [
    {
      number: "01",
      type: "consultation",
      title: "Understand Your Water Treatment Requirements",
      text: "We study your application, water characteristics and project requirements to identify the right treatment approach.",
    },
    {
      number: "02",
      type: "design",
      title: "Engineering & Solution Design",
      text: "Our team develops application-specific treatment solutions with practical and reliable engineering considerations.",
    },
    {
      number: "03",
      type: "installation",
      title: "System Installation & Commissioning",
      text: "We execute installation and commissioning with attention to system performance, quality and operational requirements.",
    },
    {
      number: "04",
      type: "support",
      title: "Ongoing Support & Service",
      text: "We provide continued technical support to help maintain reliable and efficient plant performance.",
    },
  ];

  const renderIcon = (type) => {
    switch (type) {
      case "consultation":
        return (
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <path
              d="M14 11h36c3.3 0 6 2.7 6 6v22c0 3.3-2.7 6-6 6H33l-11 9v-9h-8c-3.3 0-6-2.7-6-6V17c0-3.3 2.7-6 6-6Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinejoin="round"
            />

            <circle cx="24" cy="28" r="2.5" fill="currentColor" />
            <circle cx="32" cy="28" r="2.5" fill="currentColor" />
            <circle cx="40" cy="28" r="2.5" fill="currentColor" />

            <path
              d="M23 43h18"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        );

      case "design":
        return (
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <path
              d="m16 48 4-13L43 12a5 5 0 0 1 7 0l2 2a5 5 0 0 1 0 7L29 44l-13 4Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinejoin="round"
            />

            <path
              d="m37 18 9 9"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <path
              d="m21 35 8 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />

            <path
              d="M12 53h40"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <path
              d="M11 21h9M15.5 16.5v9M43 42h10M48 37v10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        );

      case "installation":
        return (
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <path
              d="M32 7 37 13l8-1 1 8 7 4-4 7 4 7-7 4-1 8-8-1-5 6-5-6-8 1-1-8-7-4 4-7-4-7 7-4 1-8 8 1 5-6Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinejoin="round"
            />

            <path
              d="M32 19s-9 10-9 17a9 9 0 0 0 18 0c0-7-9-17-9-17Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinejoin="round"
            />

            <path
              d="M28 37c1 2 2.5 3 5 3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        );

      case "support":
        return (
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <path
              d="M15 35V29a17 17 0 0 1 34 0v6"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <path
              d="M15 32h-3a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h3V32Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinejoin="round"
            />

            <path
              d="M49 32h3a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-3V32Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinejoin="round"
            />

            <path
              d="M49 46c-1 6-5 9-12 9h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <circle
              cx="29"
              cy="55"
              r="2.5"
              fill="currentColor"
            />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <section className="process-section">

      <div className="process-container container">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="process-header">

          <div className="process-label">
            <span></span>
            OUR PROCESS
          </div>

          <h2>
            From Requirement
            <br />
            To Reliable Water Solutions
          </h2>

          <p>
            A structured engineering approach designed to deliver
            practical, application-specific water and wastewater solutions.
          </p>

        </div>


        {/* =========================================
            PROCESS FLOW
        ========================================= */}

        <div className="process-flow">

          {/* =========================================
              CONNECTOR 01 → 02
          ========================================= */}

          <svg
            className="connector-svg connector-svg-one"
            viewBox="0 0 300 150"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="connector-path"
              d="M10 10 H270 Q290 10 290 30 V135"
            />

            <circle
              className="connector-dot"
              cx="10"
              cy="10"
              r="5"
            />

            <path
              className="connector-arrow"
              d="M284 127 L290 139 L296 127"
            />
          </svg>


          {/* =========================================
              CONNECTOR 02 → 03
          ========================================= */}

          <svg
            className="connector-svg connector-svg-two"
            viewBox="0 0 300 150"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="connector-path"
              d="M10 140 H270 Q290 140 290 120 V15"
            />

            <circle
              className="connector-dot"
              cx="10"
              cy="140"
              r="5"
            />

            <path
              className="connector-arrow connector-arrow-up"
              d="M284 23 L290 11 L296 23"
            />
          </svg>


          {/* =========================================
              CONNECTOR 03 → 04
          ========================================= */}

          <svg
            className="connector-svg connector-svg-three"
            viewBox="0 0 300 150"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="connector-path"
              d="M10 10 H270 Q290 10 290 30 V135"
            />

            <circle
              className="connector-dot"
              cx="10"
              cy="10"
              r="5"
            />

            <path
              className="connector-arrow"
              d="M284 127 L290 139 L296 127"
            />
          </svg>


          {/* =========================================
              CARDS
          ========================================= */}

          <div className="process-grid">

            {steps.map((step) => (
              <article
                className={`process-card process-card-${step.number}`}
                key={step.number}
              >

                <div className="process-card-top">

                  <div className="process-icon">
                    {renderIcon(step.type)}
                  </div>

                  <div className="process-number">
                    {step.number}
                  </div>

                </div>


                <div className="process-card-content">

                  <h3>
                    {step.title}
                  </h3>

                  <span className="process-card-line"></span>

                  <p>
                    {step.text}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProcessSection;