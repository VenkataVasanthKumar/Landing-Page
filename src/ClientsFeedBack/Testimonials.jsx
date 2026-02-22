import React from "react";
import "./testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    text:
      "The team built a modern and fast website for our business. We started receiving more customer inquiries within weeks. Highly professional and reliable service."
  },
  {
    id: 2,
    name: "Priya Reddy",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text:
      "Excellent experience from start to finish. They understood our requirements clearly and delivered a clean, user-friendly design that perfectly matches our brand."
  },
  {
    id: 3,
    name: "Amit Patel",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    text:
      "Great communication and on-time delivery. The website works smoothly on mobile and desktop. I would definitely recommend their services."
  },
  {
    id: 4,
    name: "Sneha Iyer",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    text:
      "Our online presence improved significantly after the redesign. The team focused on performance, user experience, and lead generation."
  }
  
];

export default function Testimonials() {
  return (
    <section className="testimonial-section" id="Clients">
      <span className="small-heading">WHAT CLIENTS SAYS?</span>
      <h2 className="main-heading">Clients Feedback Rating</h2>

      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <div className="testimonial-card" key={item.id}>

            {/* Image */}
            <div className="image-wrapper">
              <div className="image-circle">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="quote-icon">❝</div>
            </div>

            {/* Text */}
            <p className="testimonial-text">{item.text}</p>

            {/* Footer */}
            <div className="testimonial-footer">
              <h4>{item.name}</h4>
              <div className="stars">
                {"★".repeat(item.rating)}
                {"☆".repeat(5 - item.rating)}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
