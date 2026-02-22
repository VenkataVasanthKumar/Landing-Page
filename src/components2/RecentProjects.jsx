import { useState } from "react";
import "./RecentProjects.css";

import kissanemart from "../assets/kissanmart.jpg";
import peacock from "../assets/peacock.png";
import pro60 from "../assets/pro60.jpg";
import pro53 from "../assets/pro53.jpeg";
import pro51 from "../assets/pro51.jpg";

const categories = [
  "All",
  "E-Commerce Platform",
  "Corporate Website",
  "Startup Website",
  "Financial Services",
];

const projectsData = [
  {
    id: 1,
    title: "Kissanemart",
    category: "E-Commerce Platform",
    description:
      "A modern e-commerce platform for agricultural products, designed to connect farmers directly with consumers.",
    image: kissanemart,
    status: "Completed",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Cloud"],
    company: "Kissanemart Inc.",
  },
  {
    id: 2,
    title: "Kanchira",
    category: "E-Commerce Platform",
    description:
      "Kanchira is a sleek and modern corporate website designed to present the company’s services with clarity and professionalism.",
    image: peacock,
    status: "Completed",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    company: "Kanchira Ltd.",
  },
  {
    id: 3,
    title: "Meenam Aqua Needs",
    category: "Startup Website",
    description:
      "Meenam Aqua Needs is a business specializing in fish/shrimp health management and sustainable aquaculture products.",
    image: pro60,
    status: "Completed",
    tech: ["HTML", "CSS", "JavaScript"],
    company: "Meenam Aqua Needs",
  },
  {
    id: 4,
    title: "DFS Loans",
    category: "Corporate Website",
    description:
      "A visual-heavy analytics dashboard crafted for financial teams to track approvals and loan workflows.",
    image: pro53,
    status: "Completed",
    tech: ["Angular", "Python", "AWS", "PostgreSQL"],
    company: "DFS Financial",
  },
  {
    id: 5,
    title: "Nova CRM",
    category: "Startup Website",
    description:
      "Next-generation customer relationship management tool built for speed and scalability.",
    image: pro51,
    status: "Completed",
    tech: ["Go", "PostgreSQL", "Docker", "Kubernetes"],
    company: "Nova Tech",
  },
];
export default function RecentProjects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;

    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="projects-section">
      <div className="container">
        <h1 className="title">
          Our <span>Recent Projects</span>
        </h1>

        <p className="subtitle">
          We build digital experiences that drive results.
        </p>

        {/* SEARCH + FILTER */}
        <div className="controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "filter-btn active"
                    : "filter-btn"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="image-wrapper">
                <img src={project.image} alt={project.title} />
                <span className="status">{project.status}</span>
              </div>

              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-tags">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="card-footer">
                  <span>{project.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL */}
      {selectedProject && (
        <div
          className="popup-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="popup-img"
            />

            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>

            <div className="tech-tags">
              {selectedProject.tech.map((tech, index) => (
                <span key={index} className="tag">
                  {tech}
                </span>
              ))}
            </div>

            <p className="popup-company">
              <strong>Company:</strong> {selectedProject.company}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
