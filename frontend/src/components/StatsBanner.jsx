import { useEffect, useRef, useState } from "react";
import "./StatsBanner.css";

function StatsBanner() {
  const statsSectionRef = useRef(null);

  const stats = [
    {
      type: "drop",
      number: 25,
      suffix: "+",
      title: "Years of Experience",
      text: "Industry expertise",
    },
    {
      type: "check",
      number: 500,
      suffix: "+",
      title: "Projects Completed",
      text: "Successful installations",
    },
    {
      type: "gear",
      number: 100,
      suffix: "+",
      title: "Water Solutions",
      text: "Treatment technologies",
    },
    {
      type: "support",
      number: 24,
      suffix: "/7",
      title: "Customer Support",
      text: "Dedicated assistance",
    },
  ];

  /* =========================================
     COUNTER STATE
  ========================================= */

  const [counts, setCounts] = useState(
    stats.map(() => 1)
  );

  const [isVisible, setIsVisible] = useState(false);

  /* =========================================
     SCROLL REVEAL + COUNTER
  ========================================= */

  useEffect(() => {
    const section = statsSectionRef.current;

    if (!section) return;

    let animationFrame = null;
    let hasAnimated = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated) {
          return;
        }

        hasAnimated = true;

        /* Start reveal animations */
        setIsVisible(true);

        /* Counter animation */
        const duration = 2500;
        const startTime = performance.now();

        const animateCounters = (currentTime) => {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          );

          /* Smooth ease-out */
          const easedProgress =
            1 - Math.pow(1 - progress, 3);

          const newCounts = stats.map((stat) => {
            const value =
              1 +
              (stat.number - 1) *
                easedProgress;

            return Math.round(value);
          });

          setCounts(newCounts);

          if (progress < 1) {
            animationFrame =
              requestAnimationFrame(
                animateCounters
              );
          } else {
            /* Exact final values */
            setCounts(
              stats.map(
                (stat) => stat.number
              )
            );
          }
        };

        animationFrame =
          requestAnimationFrame(
            animateCounters
          );

        /* Animate only once */
        observer.unobserve(section);
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  /* =========================================
     PREMIUM ICONS
  ========================================= */

  const renderIcon = (type) => {
    switch (type) {

      /* =====================================
         WATER DROP
      ===================================== */

      case "drop":
        return (
          <svg
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M24 5.5
                 C24 5.5 12 18.2 12 27.2
                 C12 34.3 17.4 40 24 40
                 C30.6 40 36 34.3 36 27.2
                 C36 18.2 24 5.5 24 5.5Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            <path
              d="M17.8 28.2
                 C18.2 33
                 21 35.7
                 25.1 36.2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            <path
              d="M29.5 13.8
                 C31.1 15.7
                 32.3 17.4
                 33.1 19"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>
        );


      /* =====================================
         PROJECT CHECK
      ===================================== */

      case "check":
        return (
          <svg
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <circle
              cx="24"
              cy="24"
              r="16.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />

            <circle
              cx="24"
              cy="24"
              r="12.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              opacity="0.55"
            />

            <path
              d="M16.5 24.2
                 L21.4 29.1
                 L32 18.3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M35.5 12.5
                 L36.5 10
                 M12.5 35.5
                 L11.5 38"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              opacity="0.65"
            />
          </svg>
        );


      /* =====================================
         ENGINEERING / GEAR
      ===================================== */

      case "gear":
        return (
          <svg
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            {/* Outer engineering gear */}

            <path
              d="
                M20.2 6.5
                H27.8
                L29.1 10
                C30.2 10.3 31.2 10.7 32.2 11.3
                L35.4 9.8
                L39.2 13.6
                L37.7 16.8
                C38.3 17.8 38.7 18.8 39 19.9
                L42.5 21.2
                V28.8
                L39 30.1
                C38.7 31.2 38.3 32.2 37.7 33.2
                L39.2 36.4
                L35.4 40.2
                L32.2 38.7
                C31.2 39.3 30.2 39.7 29.1 40
                L27.8 43.5
                H20.2
                L18.9 40
                C17.8 39.7 16.8 39.3 15.8 38.7
                L12.6 40.2
                L8.8 36.4
                L10.3 33.2
                C9.7 32.2 9.3 31.2 9 30.1
                L5.5 28.8
                V21.2
                L9 19.9
                C9.3 18.8 9.7 17.8 10.3 16.8
                L8.8 13.6
                L12.6 9.8
                L15.8 11.3
                C16.8 10.7 17.8 10.3 18.9 10
                Z
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />

            {/* Inner circle */}

            <circle
              cx="24"
              cy="25"
              r="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            />

            {/* Centre */}

            <circle
              cx="24"
              cy="25"
              r="3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            />

            {/* Engineering detail */}

            <path
              d="M24 17V20 M24 30V33 M16 25H19 M29 25H32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              opacity="0.75"
            />
          </svg>
        );


      /* =====================================
         CUSTOMER SUPPORT
      ===================================== */

      case "support":
        return (
          <svg
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            {/* Headset */}

            <path
              d="
                M10 25
                V21
                C10 13.3 16.2 7.5 24 7.5
                C31.8 7.5 38 13.3 38 21
                V25
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Left ear */}

            <path
              d="
                M10 22
                H8.5
                C6.8 22 5.5 23.3 5.5 25
                V29
                C5.5 30.7 6.8 32 8.5 32
                H10
                Z
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />

            {/* Right ear */}

            <path
              d="
                M38 22
                H39.5
                C41.2 22 42.5 23.3 42.5 25
                V29
                C42.5 30.7 41.2 32 39.5 32
                H38
                Z
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />

            {/* Support line */}

            <path
              d="
                M38 32
                C37.5 37
                34.1 39.5
                28.8 39.5
                H26
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            {/* Small connection dot */}

            <circle
              cx="23"
              cy="39.5"
              r="2"
              fill="currentColor"
            />

            {/* Small premium detail */}

            <path
              d="M17 12.5
                 C19 10.9 21.3 10.2 24 10.2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              opacity="0.65"
            />
          </svg>
        );


      default:
        return null;
    }
  };

  return (
    <section
      ref={statsSectionRef}
      className={`stats-section ${
        isVisible ? "stats-visible" : ""
      }`}
    >

      <div className="stats-banner">

        {/* =====================================
            EXISTING WATER BACKGROUND
        ===================================== */}

        <div className="stats-wave"></div>


        <div className="container stats-container">

          {/* ===================================
              LEFT CONTENT
          =================================== */}

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


          {/* ===================================
              STATS
          =================================== */}

          <div className="stats-grid">

            {stats.map((stat, index) => (

              <div
                className="stat-item"
                key={index}
                style={{
                  "--stat-delay": `${index * 180}ms`,
                }}
              >

                {/* ICON */}

                <div className="stat-icon">

                  <div className="stat-icon-glow"></div>

                  <div className="stat-icon-inner">
                    {renderIcon(stat.type)}
                  </div>

                </div>


                {/* CONTENT */}

                <div className="stat-content">

                  <strong>
                    {counts[index]}
                    {stat.suffix}
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