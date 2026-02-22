import React, { useState } from "react";
import "./ProjectsSections.css";

const projects = [
  {
    id: 1,
    title: "Flight Delay Prediction System",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    description: `Predicts flight delays using historical flight, weather, and airport data.
Machine learning models analyze patterns to estimate delay probabilities.
Includes data preprocessing, feature engineering, and performance evaluation.
A simple interface displays predictions and delay insights.
Helps airlines improve planning and operational efficiency.`,
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd"
    ]
  },

  {
    id: 2,
    title: "Customer Churn Prediction",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    description: `Identifies customers likely to leave using behavioral and usage data.
Machine learning models classify churn risk based on key features.
Includes data cleaning, analysis, and model evaluation.
Dashboard visualizes churn trends and customer segments.
Supports better retention and business decision-making.`,
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      "https://images.unsplash.com/photo-1518770660439-4636190af475"
    ]
  },

  {
    id: 3,
    title: "Full Stack Web Application",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: `Developed a full-stack application using React and REST APIs.
Includes authentication, CRUD operations, and responsive UI design.
Backend handles secure data processing and business logic.
Optimized for performance and scalability.
Deployed on cloud for public access.`,
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
    ]
  },

  {
    id: 4,
    title: "Personal Portfolio Website",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
    description: `Responsive portfolio built using React and modern CSS.
Showcases projects, skills, and professional information.
Designed with reusable components and clean UI layout.
Optimized for performance and mobile compatibility.
Deployed online with SEO best practices.`,
    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
    ]
  }
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <h1 className="section-title">My Projects</h1>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div
              className="project-image"
              onClick={() => setActiveProject(project)}
            >
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <button
                className="more-btn"
                onClick={() => setActiveProject(project)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {activeProject && (
        <div className="modal" onClick={() => setActiveProject(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="close"
              onClick={() => setActiveProject(null)}
            >
              ×
            </span>

            <h2>{activeProject.title}</h2>
            <p>{activeProject.description}</p>

            <div className="gallery">
              {activeProject.gallery.map((img, i) => (
                <img key={i} src={img} alt="project" />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;