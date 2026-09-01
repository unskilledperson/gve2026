import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./BEdEducation.css";
import Header from "./Header";
import Footer from "./Footer";

import aboutOverlay from "../assets/images/course/book-open.png";
import eligibilityOverlay from "../assets/images/course/users-round.png";
import careerOverlay from "../assets/images/course/trending-up.png";
import checkIcon from "../assets/images/icons/circle-check-big.png";

const BEdEducation = () => {
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
    <div className="bed-standard-page">
      <Header />

      {/* Hero Section with Oval */}
      <section className="bed-hero-section">
        <div className="bed-hero-oval"></div>

        {/* Centered Section */}
        <div className="bed-centered-section">
          <div 
            className={`bed-top-buttons ${isVisible.topButtons ? 'animate-fade-in' : ''}`}
            ref={(el) => (elementsRef.current.topButtons = el)}
            data-key="topButtons"
          >
            <Link to="/courses" className="bed-back-link-top animate-slide-in-left">
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

            <div className="bed-program-tag-center animate-pulse-subtle">Undergraduate Program</div>
          </div>

          <div 
            className={`bed-title-section ${isVisible.title ? 'animate-fade-in-scale' : ''}`}
            ref={(el) => (elementsRef.current.title = el)}
            data-key="title"
          >
            <h1 className="bed-main-title">
              <span className="bed-title-line">
                B.Ed – Bachelor of Education
              </span>
            </h1>
          </div>

          {/* Duration and Level */}
          <div 
            className={`bed-meta-tags ${isVisible.metaTags ? 'animate-fade-in-up' : ''}`}
            ref={(el) => (elementsRef.current.metaTags = el)}
            data-key="metaTags"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="bed-meta-tag animate-float">
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
              2 Years
            </div>
            <div className="bed-meta-tag animate-float" style={{ animationDelay: '0.3s' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L15 8H22L17 12L19 18L12 14L5 18L7 12L2 8H9L12 2Z"
                  fill="currentColor"
                />
              </svg>
              Undergraduate
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bed-main-content">
        <div className="bed-bottom-section">
          <div className="bed-bottom-container">
            {/* Left Column */}
            <div 
              className={`bed-left-column ${isVisible.leftColumn ? 'animate-slide-in-left' : ''}`}
              ref={(el) => (elementsRef.current.leftColumn = el)}
              data-key="leftColumn"
            >
              {/* About This Program */}
              <div className="bed-about-program-card">
                <div className="bed-about-card-header">
                  <img
                    src={aboutOverlay}
                    alt="Program Icon"
                    className="bed-about-icon education-about-icon"
                  />
                  <h3 className="bed-about-card-title">About This Program</h3>
                </div>

                <p className="bed-about-card-description">
                  The Bachelor of Education program prepares students for a
                  professional career in teaching. Students gain expertise in
                  pedagogy, curriculum design, psychology, and classroom
                  management. The program includes practical teaching
                  experience, enabling graduates to effectively foster learning
                  and development in schools.
                </p>
              </div>

              {/* Career Prospects */}
              <div className="bed-info-card career-prospects-card">
                <div className="bed-about-card-header">
                  <img
                    src={careerOverlay}
                    alt="Career Icon"
                    className="bed-about-icon no-bg-icon animate-bounce-subtle education-career-icon"
                  />
                  <h3 className="bed-about-card-title">Career Prospects</h3>
                </div>

                {/* GRID CONTAINER */}
                <div className="education-grid">
                  {/* School Teacher */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>School Teacher</span>
                  </div>

                  {/* Education Counselor */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Education Counselor</span>
                  </div>

                  {/* Curriculum Developer */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Curriculum Developer</span>
                  </div>

                  {/* Education Administrator */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Education Administrator</span>
                  </div>

                  {/* Training Specialist */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Training Specialist</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div 
              className={`bed-right-column ${isVisible.rightColumn ? 'animate-slide-in-right' : ''}`}
              ref={(el) => (elementsRef.current.rightColumn = el)}
              data-key="rightColumn"
            >
              <div className="bed-info-card">
                <div className="bed-about-card-header">
                  <img
                    src={eligibilityOverlay}
                    alt="Eligibility Icon"
                    className="bed-about-icon small-icon education-eligibility-icon"
                  />
                  <h3 className="bed-about-card-title small-title">
                    Eligibility
                  </h3>
                </div>

                <p className="bed-about-card-description">
                  Completion of 12th standard (Higher Secondary) or Bachelor's
                  degree from a recognized education board with a minimum
                  aggregate score. Subject background in education or humanities
                  is preferred.
                </p>

                <div className="bed-card-buttons">
                  <Link to="/contact" className="bed-btn-apply animate-pulse-button">
                    Apply Now
                  </Link>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bed-quick-facts">
                <h4 className="quick-facts-title">Quick Facts</h4>
                <div className="quick-facts-grid">
                  <div className="quick-fact-item animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <span className="quick-fact-label">Duration</span>
                    <span className="quick-fact-value">2 Years</span>
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

export default BEdEducation;
