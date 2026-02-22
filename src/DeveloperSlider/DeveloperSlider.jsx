import React, { useEffect, useState } from "react";
import "./DeveloperSlider.css";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Full Stack Development",
    text: "Modern web applications built using React, Node.js, and REST APIs."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    title: "Machine Learning Projects",
    text: "Data analysis and prediction systems using Python, Pandas, and Scikit-learn."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Frontend Development",
    text: "Responsive UI design with HTML, CSS, JavaScript, and React."
  }
];

const DeveloperSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="dev-section">
      <div className="dev-container">
        <h2 className="dev-heading">
          My <span>Development Projects</span>
        </h2>

        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === current ? "active" : ""}`}
            >
              <img src={slide.image} alt={slide.title} />
              <div className="slide-content">
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperSlider;
