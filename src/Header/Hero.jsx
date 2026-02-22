import React, { useEffect, useState } from "react";
import "./Hero.css";

const images = [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  "https://images.unsplash.com/photo-1551434678-e076c223a692"
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Slides */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <h1>Build Your Dream Website</h1>
        <p>Modern design, fast performance, and professional development.</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-secondary">View Projects</a>
          <a href="#contact" className="btn-secondary">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
