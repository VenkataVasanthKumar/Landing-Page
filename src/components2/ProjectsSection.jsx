import React, { useState, useEffect } from "react";
import { FaStar, FaPhoneAlt, FaGlobe } from "react-icons/fa";
import kissanemart from "../assets/kissanmart.jpg";
import peacock from "../assets/peacock.png";
import pro60 from "../assets/pro60.jpg";
import "./ProjectsSection.css";

const slides = [
  {
    id: 1,
    name: "Meena Maqua",
    role: "PROFESSIONAL SERVICES",
    text: `Meena Maqua required a clean, modern, and professional website to reflect their service quality.
The goal was to improve brand credibility and create a strong online presence.
We designed a user-friendly interface with clear navigation and structured content.
The website was optimized for both desktop and mobile devices.
Fast loading speed and performance optimization were key priorities.
We implemented SEO best practices to improve search visibility.
The design focuses on trust, simplicity, and professional aesthetics.
As a result, the client experienced improved engagement and customer inquiries.`,
    phone: "+1 234 567 893",
    website: "https://www.meenamequa.com",
    image: pro60,
  },

  {
    id: 2,
    name: "Kanchira",
    role: "BUSINESS SOLUTIONS",
    text: `Kanchira needed a scalable business website to showcase their services and solutions.
Our objective was to create a modern platform that communicates their value clearly.
We built a responsive layout that works seamlessly across all devices.
The website includes structured service pages and strong call-to-action sections.
Performance optimization ensures smooth user experience and quick loading.
We focused on clean design, branding consistency, and professional presentation.
Security and reliability were also implemented to support long-term use.
The new platform helped strengthen their online reputation and lead generation.`,
    phone: "+1 987 654 321",
    website: "https://www.kanchira.com",
    image: peacock,
  },

  {
    id: 3,
    name: "Kissanemart",
    role: "E-COMMERCE",
    text: `Kissan E-Mart required a powerful eCommerce platform for smooth online shopping.
The goal was to deliver a fast, reliable, and user-friendly experience.
We developed a responsive product catalog with easy navigation and filtering.
Secure payment integration and checkout optimization were implemented.
Performance tuning ensures fast loading even with large product listings.
The platform is mobile-friendly to support modern shoppers.
Inventory management and order tracking features were included.
The solution significantly improved user engagement and conversion rates.`,
    phone: "+1 456 789 123",
    website: "https://www.kissanemart.com",
    image: kissanemart,
  }
];

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="container">
      <h2 className="main-title">TESTIMONIALS</h2>

      <div className="card">
        <div className="profile-section">
          <div className="profile-info">
            <div className="name">{slides[current].name}</div>
            <p className="role">{slides[current].role}</p>
          </div>

          <div
            className="profile-img"
            onClick={() => setShowModal(true)}
          >
            <img src={slides[current].image} alt="profile" />
          </div>
        </div>

        <p>{slides[current].text}</p>

        <div className="contact-section">
          <FaPhoneAlt /> {slides[current].phone}
          <br />
          <FaGlobe />
          <a href={slides[current].website} target="_blank" rel="noreferrer">
            {slides[current].website}
          </a>
        </div>
      </div>

      <div className="navigation">
        <button onClick={prevSlide}>←</button>
        <button onClick={nextSlide}>→</button>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              ×
            </button>

            <img
              src={slides[current].image}
              alt=""
              className="modal-img"
            />
            <h3>{slides[current].name}</h3>
            <p>{slides[current].text}</p>
          </div>
        </div>
      )}
    </div>
  );
}
