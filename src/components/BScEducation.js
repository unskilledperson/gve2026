import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./BScEducation.css";
import Header from "./Header";
import Footer from "./Footer";

import undergraduateIcon from "../assets/images/course/briefcase.svg";
import aboutOverlay from "../assets/images/course/book-open.png";
import eligibilityOverlay from "../assets/images/course/users-round.png";
import careerOverlay from "../assets/images/course/trending-up.png";
import checkIcon from "../assets/images/icons/circle-check-big.png";

const BScEducation = () => {
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
    <div className="bsc-standard-page">
      <Header />

      {/* Hero Section with Oval */}
      <section className="bsc-hero-section">
        <div className="bsc-hero-oval"></div>

        {/* Centered Section */}
        <div className="bsc-centered-section">
          <div 
            className={`bsc-top-buttons ${isVisible.topButtons ? 'animate-fade-in' : ''}`}
            ref={(el) => (elementsRef.current.topButtons = el)}
            data-key="topButtons"
          >
            <Link to="/courses" className="bsc-back-link-top animate-slide-in-left">
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

            <div className="bsc-program-tag-center animate-pulse-subtle">Undergraduate Program</div>
          </div>

          <div 
            className={`bsc-title-section ${isVisible.title ? 'animate-fade-in-scale' : ''}`}
            ref={(el) => (elementsRef.current.title = el)}
            data-key="title"
          >
            <h1 className="bsc-main-title">
              <span className="bsc-title-line">BSc – Bachelor of Science</span>
            </h1>
          </div>

          {/* Duration and Level */}
          <div 
            className={`bsc-meta-tags ${isVisible.metaTags ? 'animate-fade-in-up' : ''}`}
            ref={(el) => (elementsRef.current.metaTags = el)}
            data-key="metaTags"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="bsc-meta-tag animate-float">
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
            <div className="bsc-meta-tag animate-float" style={{ animationDelay: '0.3s' }}>
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
      <section className="bsc-main-content">
        <div className="bsc-bottom-section">
          <div className="bsc-bottom-container">
            {/* Left Column */}
            <div 
              className={`bsc-left-column ${isVisible.leftColumn ? 'animate-slide-in-left' : ''}`}
              ref={(el) => (elementsRef.current.leftColumn = el)}
              data-key="leftColumn"
            >
              {/* About This Program */}
              <div className="bsc-about-program-card">
                <div className="bsc-about-card-header">
                  <img
                    src={aboutOverlay}
                    alt="Program Icon"
                    className="bsc-about-icon education-about-icon"
                  />
                  <h3 className="bsc-about-card-title">About This Program</h3>
                </div>

                <p className="bsc-about-card-description">
                  The Bachelor of Science program provides core science training
                  in disciplines such as Physics, Chemistry, Biology, and
                  Mathematics. Students gain theoretical knowledge and practical
                  experience through laboratory work and research. Graduates are
                  well-prepared for roles in scientific research, healthcare,
                  and technical industries.
                </p>
              </div>

              {/* Career Prospects */}
              <div className="bsc-info-card career-prospects-card">
                <div className="bsc-about-card-header">
                  <img
                    src={careerOverlay}
                    alt="Career Icon"
                    className="bsc-about-icon no-bg-icon animate-bounce-subtle education-career-icon"
                  />
                  <h3 className="bsc-about-card-title">Career Prospects</h3>
                </div>

                {/* GRID CONTAINER */}
                <div className="education-grid">
                  {/* Research Scientist */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Research Scientist</span>
                  </div>

                  {/* Lab Technician */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Lab Technician</span>
                  </div>

                  {/* Quality Analyst */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Quality Analyst</span>
                  </div>

                  {/* Data Analyst */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Data Analyst</span>
                  </div>

                  {/* Healthcare Professional */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Healthcare Professional</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div 
              className={`bsc-right-column ${isVisible.rightColumn ? 'animate-slide-in-right' : ''}`}
              ref={(el) => (elementsRef.current.rightColumn = el)}
              data-key="rightColumn"
            >
              <div className="bsc-info-card">
                <div className="bsc-about-card-header">
                  <img
                    src={eligibilityOverlay}
                    alt="Eligibility Icon"
                    className="bsc-about-icon small-icon education-eligibility-icon"
                  />
                  <h3 className="bsc-about-card-title small-title">
                    Eligibility
                  </h3>
                </div>

                <p className="bsc-about-card-description">
                  Completion of 12th standard (Higher Secondary) from a
                  recognized education board with a minimum aggregate score,
                  preferably with Physics, Chemistry, and Biology/Mathematics.
                </p>

                <div className="bsc-card-buttons">
                  <Link to="/contact" className="bsc-btn-apply animate-pulse-button">
                    Apply Now
                  </Link>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bsc-quick-facts">
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

export default BScEducation;
