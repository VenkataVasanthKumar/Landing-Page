import React, { useState, useEffect } from "react";
import "./Background.css";

const slides = [
  {
    title: (
      <>
        Creative <span>Graphic Design</span> <br /> That Builds Your Brand
      </>
    ),
    text:
      "We design stunning logos, social media creatives, and brand visuals that make your business stand out and attract customers.",
    img1:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=900&q=80",
    img2:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: (
      <>
        Eye-Catching <span>Social Media</span> <br /> Creative Designs
      </>
    ),
    text:
      "Boost engagement with modern Instagram posts, banners, and promotional creatives designed for maximum reach.",
    img1:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80",
    img2:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: (
      <>
        Professional <span>Brand Identity</span> <br /> & Visual Strategy
      </>
    ),
    text:
      "From logo design to complete brand identity, we create consistent visuals that build trust and recognition.",
    img1:
      "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?auto=format&fit=crop&w=900&q=80",
    img2:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Background() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="main-slider-two">
      {/* Floating Gradient Shapes */}
      <div className="shape shape-blue"></div>
      <div className="shape shape-orange"></div>
      <div className="shape shape-green"></div>
      <div className="shape shape-red"></div>

      <div className="container">
        <div className="slider-content">
          {/* Left Content */}
          <div className="slider-text">
           

            <h2 className="slider-title">{slide.title}</h2>

            <p className="slider-desc">{slide.text}</p>

            <div className="slider-buttons">
              <button className="btn-outline">More Details</button>
              <button className="btn-primary">Contact Now</button>
            </div>
          </div>

          {/* Right Images */}
          <div className="slider-images">
            <img src={slide.img1} alt="marketing" />
            <img src={slide.img2} alt="marketing" />
          </div>
        </div>
      </div>
    </section>
  );
}