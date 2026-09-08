import React from "react";
import "./ProjectsSection.css";

import mechanicalBarScreen from "../assets/images/Mechanical Bar Screen.png";
import industrialAirBlower from "../assets/images/Industrial-Air-Blower-System.png";
import ironRemovalFilter from "../assets/images/Iron-Removal-filter-WTP.png";
import sewageTreatmentPlant from "../assets/images/Sewage-Treatment-Plant.png";
import waterSoftenerPlant from "../assets/images/Water-Softener-Plant.png";
import hydroPneumaticSystem from "../assets/images/Hydro-Pneumatic-System.png";
import roPlant from "../assets/images/Ro-Plant.png";
import ufPlant from "../assets/images/Uf-Plant.png";
import containerizedRO from "../assets/images/Containerized RO Water Treatment Plant.png";

const projects = [
  {
    id: "01",
    title: "Mechanical Bar Screen",
    category: "Wastewater Treatment",
    subtitle: "Screening & Solid Separation",
    image: mechanicalBarScreen,
  },
  {
    id: "02",
    title: "Industrial Air Blower System",
    category: "Industrial Water Treatment",
    subtitle: "Aeration & Air Supply",
    image: industrialAirBlower,
  },
  {
    id: "03",
    title: "Iron Removal Filter",
    category: "Water Treatment",
    subtitle: "Iron & Manganese Removal",
    image: ironRemovalFilter,
  },
  {
    id: "04",
    title: "Sewage Treatment Plant",
    category: "Wastewater Treatment",
    subtitle: "Aeration & Clarification",
    image: sewageTreatmentPlant,
  },
  {
    id: "05",
    title: "Water Softener Plant",
    category: "Water Treatment",
    subtitle: "Hardness Removal",
    image: waterSoftenerPlant,
  },
  {
    id: "06",
    title: "Hydro Pneumatic System",
    category: "Pressurised Supply",
    subtitle: "Water Pressure Management",
    image: hydroPneumaticSystem,
  },
  {
    id: "07",
    title: "RO Plant",
    category: "Water Purification",
    subtitle: "Reverse Osmosis",
    image: roPlant,
  },
  {
    id: "08",
    title: "UF Plant",
    category: "Water Purification",
    subtitle: "Ultrafiltration",
    image: ufPlant,
  },
  {
    id: "09",
    title: "Containerized RO Water Treatment Plant",
    category: "Water Treatment",
    subtitle: "Compact Water Purification",
    image: containerizedRO,
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">

        {/* HEADER */}
        <div className="projects-top">

          <div className="projects-heading">
            <div className="projects-label">
              <span></span>
              OUR PROJECTS
            </div>

            <h2>
              Real installations, real
              <br />
              <span>engineering</span>
            </h2>
          </div>

          <div className="projects-description">
            <p>
              A cross-section of plants engineered and delivered
              by Crystal Water Engineers.
            </p>

            <div className="description-line"></div>
          </div>

        </div>

        {/* PROJECT GRID */}
        <div className="projects-grid">

          {projects.map((project, index) => (
            <article
              className={`project-card ${
                index === 0 ? "project-featured" : ""
              }`}
              key={project.id}
            >

              {/* IMAGE */}
              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />

                <div className="project-overlay"></div>

                <div className="project-number">
                  {project.id}
                </div>

              </div>

              {/* CONTENT */}
              <div className="project-content">

                <div className="project-info">

                  <div className="project-mini-line"></div>

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p className="project-subtitle">
                    {project.subtitle}
                  </p>

                </div>

                <div className="project-arrow">
                  <span>→</span>
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;