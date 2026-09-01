import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./BComEducation.css";
import Header from "./Header";
import Footer from "./Footer";

import aboutOverlay from "../assets/images/course/book-open.png";
import eligibilityOverlay from "../assets/images/course/users-round.png";
import careerOverlay from "../assets/images/course/trending-up.png";
import checkIcon from "../assets/images/icons/circle-check-big.png";

const BComEducation = () => {
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
    <div className="bcom-standard-page">
      <Header />

      {/* Hero Section with Oval */}
      <section className="bcom-hero-section">
        <div className="bcom-hero-oval"></div>

        {/* Centered Section */}
        <div className="bcom-centered-section">
          <div 
            className={`bcom-top-buttons ${isVisible.topButtons ? 'animate-fade-in' : ''}`}
            ref={(el) => (elementsRef.current.topButtons = el)}
            data-key="topButtons"
          >
            <Link to="/courses" className="bcom-back-link-top animate-slide-in-left">
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

            <div className="bcom-program-tag-center animate-pulse-subtle">Undergraduate Program</div>
          </div>

          <div 
            className={`bcom-title-section ${isVisible.title ? 'animate-fade-in-scale' : ''}`}
            ref={(el) => (elementsRef.current.title = el)}
            data-key="title"
          >
            <h1 className="bcom-main-title">
              <span className="bcom-title-line">
                BCom – Bachelor of Commerce
              </span>
            </h1>
          </div>

          {/* Duration and Level */}
          <div 
            className={`bcom-meta-tags ${isVisible.metaTags ? 'animate-fade-in-up' : ''}`}
            ref={(el) => (elementsRef.current.metaTags = el)}
            data-key="metaTags"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="bcom-meta-tag animate-float">
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
            <div className="bcom-meta-tag animate-float" style={{ animationDelay: '0.3s' }}>
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
      <section className="bcom-main-content">
        <div className="bcom-bottom-section">
          <div className="bcom-bottom-container">
            {/* Left Column */}
            <div 
              className={`bcom-left-column ${isVisible.leftColumn ? 'animate-slide-in-left' : ''}`}
              ref={(el) => (elementsRef.current.leftColumn = el)}
              data-key="leftColumn"
            >
              {/* About This Program */}
              <div className="bcom-about-program-card">
                <div className="bcom-about-card-header">
                  <img
                    src={aboutOverlay}
                    alt="Program Icon"
                    className="bcom-about-icon education-about-icon"
                  />
                  <h3 className="bcom-about-card-title">About This Program</h3>
                </div>

                <p className="bcom-about-card-description">
                  The Bachelor of Commerce program provides comprehensive
                  training in accounting, finance, and business management.
                  Students learn financial analysis, taxation, auditing, and
                  business economics. Graduates are prepared for careers in
                  banking, corporate finance, accounting firms, and business
                  administration across diverse industries.
                </p>
              </div>

              {/* Career Prospects */}
              <div className="bcom-info-card career-prospects-card">
                <div className="bcom-about-card-header">
                  <img
                    src={careerOverlay}
                    alt="Career Icon"
                    className="bcom-about-icon no-bg-icon animate-bounce-subtle education-career-icon"
                  />
                  <h3 className="bcom-about-card-title">Career Prospects</h3>
                </div>

                {/* GRID CONTAINER */}
                <div className="education-grid">
                  {/* Accountant */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Accountant</span>
                  </div>

                  {/* Tax Consultant */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Tax Consultant</span>
                  </div>

                  {/* Auditor */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Auditor</span>
                  </div>

                  {/* Financial Analyst */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Financial Analyst</span>
                  </div>

                  {/* Banker */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Banker</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div 
              className={`bcom-right-column ${isVisible.rightColumn ? 'animate-slide-in-right' : ''}`}
              ref={(el) => (elementsRef.current.rightColumn = el)}
              data-key="rightColumn"
            >
              <div className="bcom-info-card">
                <div className="bcom-about-card-header">
                  <img
                    src={eligibilityOverlay}
                    alt="Eligibility Icon"
                    className="bcom-about-icon small-icon education-eligibility-icon"
                  />
                  <h3 className="bcom-about-card-title small-title">
                    Eligibility
                  </h3>
                </div>

                <p className="bcom-about-card-description">
                  Completion of 12th standard (Higher Secondary) from a
                  recognized education board with a minimum aggregate score.
                  Ideally studied Mathematics or Commerce in secondary
                  education.
                </p>

                <div className="bcom-card-buttons">
                  <Link to="/contact" className="bcom-btn-apply animate-pulse-button">
                    Apply Now
                  </Link>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bcom-quick-facts">
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

export default BComEducation;
