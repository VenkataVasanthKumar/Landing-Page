 import React from "react";
import { motion } from "framer-motion";
import { Award, Target, ShieldCheck, BarChart } from "lucide-react";
import "./AboutGraphics.css";

// Benefits Data
const type = [
  {
    title: "Experience Excellence",
    description:
      "Elevate your business with high-performance B2B lead generation systems.",
    icon: Award,
  },
  {
    title: "Results-Driven Solutions",
    description:
      "Data-backed strategies designed to maximize ROI and conversions.",
    icon: Target,
  },
  {
    title: "Trusted Growth Partner",
    description:
      "We build scalable systems that generate predictable revenue.",
    icon: ShieldCheck,
  },
  {
    title: "Proven Success Framework",
    description:
      "A repeatable process that consistently delivers qualified prospects.",
    icon: BarChart,
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AboutGraphics = () => {
  return (
    <section className="agency-section" id="about">
      <div className="agency-container">

        {/* Left Content */}
        <motion.div
          className="agency-text"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="sub-label">About Us (Graphic Design) </span>

<h2 className="main-heading">
  Why Choose <span>Our Design Studio</span>
</h2>

<p className="intro-paragraph">
  We help businesses build a strong visual identity through creative and professional graphic design solutions.
  <br /><br />
  Our services include logo design, brand identity, social media creatives, marketing materials, and modern visual concepts that make your brand stand out.  
  With a focus on creativity, consistency, and user appeal, we design visuals that capture attention, communicate your message clearly, and enhance your brand presence across digital platforms.
</p>

          <p className="intro-paragraph">
            We are Hyderabad’s trusted B2B lead generation experts, helping
            businesses scale faster with predictable and high-quality lead
            acquisition systems.
            <br /><br />
            Our approach combines strategic targeting, performance-driven
            marketing, and conversion optimization to deliver measurable growth.
            Instead of relying on inconsistent outreach, we build structured,
            data-backed funnels that consistently generate qualified prospects,
            improve sales efficiency, and maximize return on investment.
          </p>
        </motion.div>

        {/* Right Cards */}
        <motion.div
          className="benefits-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {type.map((products, index) => {
            const Icon = products.icon;
            return (
              <motion.div
                key={index}
                className="benefit-card"
                variants={itemVariants}
              >
                <div className="icon-square">
                  <Icon size={28} />
                </div>
                <h3>{products.title}</h3>
                <p>{products.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutGraphics;