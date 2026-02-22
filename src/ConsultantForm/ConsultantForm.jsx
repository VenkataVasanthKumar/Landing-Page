import React, { useState } from "react";
import "./ConsultantForm.css";

const ConsultantForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    message: ""
  });

  const [alert, setAlert] = useState({ type: "", text: "" });

  // Handle Input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation
  const validate = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    return (
      form.firstName.trim() &&
      form.lastName.trim() &&
      emailPattern.test(form.email) &&
      phonePattern.test(form.phone) &&
      form.password.length >= 6 &&
      form.message.trim()
    );
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setAlert({
        type: "success",
        text: "Your message has been sent successfully!"
      });

      // Reset form
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        message: ""
      });
    } else {
      setAlert({
        type: "error",
        text: "Invalid details. Please check your information."
      });
    }

    // Auto hide alert after 3 seconds
    setTimeout(() => {
      setAlert({ type: "", text: "" });
    }, 7000);
  };

  return (
    <section className="consultation-section" id="contact">
      {/* Alert */}
      {alert.text && (
        <div className={`alert ${alert.type}`}>
          {alert.text}
        </div>
      )}

      <h2 className="contact-subtitle">Get In Touch</h2>
      <h1 className="contact-title">Contact Software Consultant</h1>

      <form className="consultation-form" onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <input
          type="password"
          name="password"
          placeholder="Password (min 6 characters)"
          className="password"
          value={form.password}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Tell us about your project or requirement..."
          rows="5"
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ConsultantForm;
