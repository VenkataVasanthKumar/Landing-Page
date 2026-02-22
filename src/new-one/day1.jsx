import React, { useState, useEffect, useRef } from 'react';
import './day1.css';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [counters, setCounters] = useState({ visibility: 0, roi: 0, conversion: 0, threeSixty: 0 });
  const statsRef = useRef(null);
  const hasAnimated = useRef(false);

  const services = [
    { value: 'smm', label: 'Social Media Marketing', icon: '📱' },
    { value: 'seo', label: 'SEO Optimization', icon: '🔍' },
    { value: 'ppc', label: 'PPC Advertising', icon: '🎯' },
    
    { value: 'email', label: 'Email Marketing', icon: '📧' },
    { value: 'lead', label: 'Lead Generation', icon: '🚀' },
    { value: 'whatsapp', label: 'WhatsApp Automation', icon: '💬' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: ''                             
  });

  // Animated counter function
  const animateCounter = (target, key, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
    }, 16);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounter(180, 'visibility', 2000);
          animateCounter(45, 'roi', 2000);
          animateCounter(65, 'conversion', 2000);
          animateCounter(360, 'threeSixty', 2000); // 360 counter
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
  };

  return (
    <section  className="hero-section" id="contact">
      
      {/* --- ADDED: Floating Bubbles --- */}
       <div className="bubbles-container">
        {/* Moving Bubbles */}
        <div className="bubble b-lr"></div>   
        <div className="bubble b-rl"></div>   
        <div className="bubble b-du"></div>   
        <div className="bubble b-ud"></div>   
        <div className="bubble b-lr-2"></div> 

        {/* ADDED: Stable Bubbles (Size 300px) */}
        <div className="bubble stable-top-right"></div>
        <div className="bubble stable-bottom-left"></div>
      </div>

      <div className="hero-container">
        {/* Left Side - Content */}
        <div className="hero-left">
          <div className="hero-badge">
            <Sparkles size={14} className="badge-icon" />
            <span>{counters.threeSixty}° Digital Marketing</span>
          </div>
          
          <h1 className="hero-title">
            <span className="gradient-text">Maximize</span> Your Reach<br />
            with <span className="blue-text">{counters.threeSixty}°</span>
            <span className="blue-text">Marketing</span>
          </h1>
          
          <p className="hero-desc">
            Dominate the digital landscape with strategic marketing that drives results. 
            From search engines to social platforms, we reach the right audience at the right time. 
            Our campaigns combine data-driven insights with automation to engage customers effectively. 
            Maximize conversions, grow your brand, and turn leads into loyal customers with ease.
          </p>

          {/* Stats Box with Animated Numbers */}
          {/* <div className="stats-box" ref={statsRef}>
            <div className="stat-item">
              <span className="stat-value blue">+{counters.visibility}%</span>
              <span className="stat-label">Online<br />Visibility</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value blue">{counters.roi}%</span>
              <span className="stat-label">Higher<br />ROI</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value blue">{counters.conversion}%</span>
              <span className="stat-label">Conversion<br />Rate</span>
            </div>
          </div> */}

      
                       <button
                           className="hero-cta"
                           onClick={() => {
                           const section = document.getElementById("contact");
                           if (section) {
                           section.scrollIntoView({ behavior: "smooth" });
                           }
                           }}
                         >
                          Request a Free Marketing Audit
                          <ArrowRight size={18} />
                     </button>

        </div>

        {/* Right Side - Form */}
        <div className="hero-right">
          <div className="hero-form-box">
            <h3 className="form-title">Get Free Strategy Call</h3>
            <p className="form-subtitle">Book a free 30-minute consultation</p>
            
            <form onSubmit={handleSubmit} className="hero-form">
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              {/* Custom Dropdown */}
              <div className="form-group custom-select-wrapper">
                <div 
                  className={`custom-select ${isOpen ? 'open' : ''}`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className={`select-trigger ${formData.service ? 'selected' : ''}`}>
                    {formData.service ? services.find(s => s.value === formData.service).label : 'Select Service'}
                  </span>
                  <span className={`select-arrow ${isOpen ? 'rotate' : ''}`}>⌄</span>
                </div>
                
                {isOpen && (
                  <div className="select-options">
                    {services.map((service) => (
                      <div
                        key={service.value}
                        className={`option ${formData.service === service.value ? 'active' : ''}`}
                        onClick={() => {
                          setFormData({ ...formData, service: service.value });
                          setIsOpen(false);
                        }}
                      >
                        <span className="option-icon">{service.icon}</span>
                        <span className="option-label">{service.label}</span>
                        {formData.service === service.value && <span className="check">✓</span>}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button type="submit" className="hero-submit">
                <span>Get Started</span>
                <ArrowRight size={20} />
              </button>
            </form>

            <p className="form-note">⚡ Response within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;