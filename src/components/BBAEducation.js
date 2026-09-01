import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./BBAEducation.css";
import Header from "./Header";
import Footer from "./Footer";

/* UPDATED ICONS */
import undergraduateIcon from "../assets/images/course/briefcase.svg";
import aboutOverlay from "../assets/images/course/book-open.png";
import eligibilityOverlay from "../assets/images/course/users-round.png";
import careerOverlay from "../assets/images/course/trending-up.png";
import checkIcon from "../assets/images/icons/circle-check-big.png";

const BBAEducation = () => {
  const [isVisible, setIsVisible] = useState({});
  const elementsRef = useRef({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.dataset.key]: true,
          }));
        }
      });
    }, observerOptions);

    // Copy ref value to avoid stale closure
    const currentElements = elementsRef.current;

    Object.values(currentElements).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      Object.values(currentElements).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="bba-standard-page">
      <Header />

      {/* Hero Section with Oval */}
      <section className="bba-hero-section">
        <div className="bba-hero-oval"></div>

        {/* Centered Section */}
        <div className="bba-centered-section">
          <div 
            className={`bba-top-buttons ${isVisible.topButtons ? 'animate-fade-in' : ''}`}
            ref={(el) => (elementsRef.current.topButtons = el)}
            data-key="topButtons"
          >
            <Link to="/courses" className="bba-back-link-top animate-slide-in-left">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Programs
            </Link>

            <div className="bba-program-tag-center animate-pulse-subtle">Undergraduate Program</div>
          </div>

          <div 
            className={`bba-title-section ${isVisible.title ? 'animate-fade-in-scale' : ''}`}
            ref={(el) => (elementsRef.current.title = el)}
            data-key="title"
          >
            <h1 className="bba-main-title">
              <span className="bba-title-line">BBA - Bachelor of</span>
              <span className="bba-title-line">Business Administration</span>
            </h1>
          </div>

          {/* Duration and Level */}
          <div 
            className={`bba-meta-tags ${isVisible.metaTags ? 'animate-fade-in-up' : ''}`}
            ref={(el) => (elementsRef.current.metaTags = el)}
            data-key="metaTags"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="bba-meta-tag animate-float">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 6V12L16 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              3 Years
            </div>
            <div className="bba-meta-tag animate-float" style={{ animationDelay: '0.3s' }}>
              <img
                src={undergraduateIcon}
                alt="Undergraduate"
                className="meta-tag-icon"
              />
              Undergraduate
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bba-main-content">
        <div className="bba-bottom-section">
          <div className="bba-bottom-container">
            {/* Left Column */}
            <div 
              className={`bba-left-column ${isVisible.leftColumn ? 'animate-slide-in-left' : ''}`}
              ref={(el) => (elementsRef.current.leftColumn = el)}
              data-key="leftColumn"
            >
              {/* About This Program */}
              <div className="bba-about-program-card">
                <div className="bba-about-card-header">
                  <img
                    src={aboutOverlay}
                    alt="Program Icon"
                    className="bba-about-icon education-about-icon"
                  />
                  <h3 className="bba-about-card-title">About This Program</h3>
                </div>

                <p className="bba-about-card-description">
                  The Bachelor of Business Administration program empowers
                  students with a strong understanding of how modern
                  organizations function. The curriculum combines management
                  concepts with practical learning, helping students build
                  skills in leadership, communication, teamwork, and business
                  decision making. Graduates are well-prepared for entry-level
                  management roles across various industries.
                </p>
              </div>

              {/* Career Prospects */}
              <div className="bba-info-card career-prospects-card">
                <div className="bba-about-card-header">
                  <img
                    src={careerOverlay}
                    alt="Career Icon"
                    className="bba-about-icon no-bg-icon animate-bounce-subtle education-career-icon"
                  />
                  <h3 className="bba-about-card-title">Career Prospects</h3>
                </div>

                {/* GRID CONTAINER */}
                <div className="education-grid">
                  {/* Business Manager */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Business Manager</span>
                  </div>

                  {/* Marketing Executive */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Marketing Executive</span>
                  </div>

                  {/* HR Coordinator */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>HR Coordinator</span>
                  </div>

                  {/* Operations Manager */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Operations Manager</span>
                  </div>

                  {/* Entrepreneur */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Entrepreneur</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div 
              className={`bba-right-column ${isVisible.rightColumn ? 'animate-slide-in-right' : ''}`}
              ref={(el) => (elementsRef.current.rightColumn = el)}
              data-key="rightColumn"
            >
              <div className="bba-info-card">
                <div className="bba-about-card-header">
                  <img
                    src={eligibilityOverlay}
                    alt="Eligibility Icon"
                    className="bba-about-icon small-icon education-eligibility-icon"
                  />
                  <h3 className="bba-about-card-title small-title">
                    Eligibility
                  </h3>
                </div>

                <p className="bba-about-card-description">
                  Completion of 12th standard (Higher Secondary) from a
                  recognized education board with a minimum aggregate score.
                </p>

                <div className="bba-card-buttons">
                  <Link to="/contact" className="bba-btn-apply animate-pulse-button">
                    Apply Now
                  </Link>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bba-quick-facts">
                <h4 className="quick-facts-title">Quick Facts</h4>
                <div className="quick-facts-grid">
                  <div className="quick-fact-item animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <span className="quick-fact-label">Duration</span>
                    <span className="quick-fact-value">3 Years</span>
                  </div>
                  <div className="quick-fact-item animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <span className="quick-fact-label">Level</span>
                    <span className="quick-fact-value">Undergraduate</span>
                  </div>
                  <div className="quick-fact-item animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <span className="quick-fact-label">Mode</span>
                    <span className="quick-fact-value">Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BBAEducation;
