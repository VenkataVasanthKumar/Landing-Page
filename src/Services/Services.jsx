import React, { useState, useEffect } from "react";
import "./Services.css";

const slides = [
  {
    title: (
      <>
        Creative & Unique <br /> <span>Logo Design</span>
      </>
    ),
    text:
      "Build a strong brand identity with custom logo designs that are memorable, scalable, and professionally crafted for your business.",
    img1:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
    img2:
      "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: (
      <>
        Complete <br /> <span>Brand Identity Design</span>
      </>
    ),
    text:
      "Create a consistent brand presence with color palettes, typography, brand guidelines, business cards, and professional stationery.",
    img1:
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=900&q=80",
    img2:
      "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: (
      <>
        Engaging <br /> <span>Social Media Designs</span>
      </>
    ),
    text:
      "Boost engagement with eye-catching social media posts, ad creatives, banners, and promotional graphics for all platforms.",
    img1:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=900&q=80",
    img2:
      "https://images.unsplash.com/photo-1607706189992-eae578626c86?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: (
      <>
        Professional <br /> <span>Print & Marketing Design</span>
      </>
    ),
    text:
      "High-quality brochures, flyers, posters, and marketing materials designed to promote your business both online and offline.",
    img1:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=80",
    img2:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Services() {
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
    <section className="main-slider-two" id="services">
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
         <div className="slider-buttons">
  <button
    className="btn-outline"
    onClick={() =>
      document.getElementById("details").scrollIntoView({
        behavior: "smooth",
      })
    }
  >
    More Details
  </button>

  <button
    className="btn-primary"
    onClick={() =>
      document.getElementById("contact").scrollIntoView({
        behavior: "smooth",
      })
    }
  >
    Contact Now
  </button>
</div>
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