import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./BCAEducation.css";
import Header from "./Header";
import Footer from "./Footer";

import undergraduateIcon from "../assets/images/course/briefcase.svg";
import aboutOverlay from "../assets/images/course/book-open.png";
import eligibilityOverlay from "../assets/images/course/users-round.png";
import careerOverlay from "../assets/images/course/trending-up.png";
import checkIcon from "../assets/images/icons/circle-check-big.png";

const BCAEducation = () => {
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
    <div className="bca-standard-page">
      <Header />

      {/* Hero Section with Oval */}
      <section className="bca-hero-section">
        <div className="bca-hero-oval"></div>

        {/* Centered Section */}
        <div className="bca-centered-section">
          <div 
            className={`bca-top-buttons ${isVisible.topButtons ? 'animate-fade-in' : ''}`}
            ref={(el) => (elementsRef.current.topButtons = el)}
            data-key="topButtons"
          >
            <Link to="/courses" className="bca-back-link-top animate-slide-in-left">
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

            <div className="bca-program-tag-center animate-pulse-subtle">Undergraduate Program</div>
          </div>

          <div 
            className={`bca-title-section ${isVisible.title ? 'animate-fade-in-scale' : ''}`}
            ref={(el) => (elementsRef.current.title = el)}
            data-key="title"
          >
            <h1 className="bca-main-title">
              <span className="bca-title-line">BCA - Bachelor of</span>
              <span className="bca-title-line">Computer Applications</span>
            </h1>
          </div>

          {/* Duration and Level */}
          <div 
            className={`bca-meta-tags ${isVisible.metaTags ? 'animate-fade-in-up' : ''}`}
            ref={(el) => (elementsRef.current.metaTags = el)}
            data-key="metaTags"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="bca-meta-tag animate-float">
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
            <div className="bca-meta-tag animate-float" style={{ animationDelay: '0.3s' }}>
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
      <section className="bca-main-content">
        <div className="bca-bottom-section">
          <div className="bca-bottom-container">
            {/* Left Column */}
            <div 
              className={`bca-left-column ${isVisible.leftColumn ? 'animate-slide-in-left' : ''}`}
              ref={(el) => (elementsRef.current.leftColumn = el)}
              data-key="leftColumn"
            >
              {/* About This Program */}
              <div className="bca-about-program-card">
                <div className="bca-about-card-header">
                  <img
                    src={aboutOverlay}
                    alt="Program Icon"
                    className="bca-about-icon education-about-icon"
                  />
                  <h3 className="bca-about-card-title">About This Program</h3>
                </div>

                <p className="bca-about-card-description">
                  The Bachelor of Computer Applications program equips students
                  with essential knowledge in programming, software development,
                  operating systems, and IT applications. Through practical
                  training and real-world project work, students gain the
                  technical expertise needed for careers in the IT and software
                  sector.
                </p>
              </div>

              {/* Career Prospects */}
              <div className="bca-info-card career-prospects-card">
                <div className="bca-about-card-header">
                  <img
                    src={careerOverlay}
                    alt="Career Icon"
                    className="bca-about-icon no-bg-icon animate-bounce-subtle education-career-icon"
                  />
                  <h3 className="bca-about-card-title">Career Prospects</h3>
                </div>

                {/* GRID CONTAINER */}
                <div className="education-grid">
                  {/* Software Developer */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Software Developer</span>
                  </div>

                  {/* Web Developer */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Web Developer</span>
                  </div>

                  {/* System Analyst */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>System Analyst</span>
                  </div>

                  {/* Database Administrator */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Database Administrator</span>
                  </div>

                  {/* IT Consultant */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>IT Consultant</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div 
              className={`bca-right-column ${isVisible.rightColumn ? 'animate-slide-in-right' : ''}`}
              ref={(el) => (elementsRef.current.rightColumn = el)}
              data-key="rightColumn"
            >
              <div className="bca-info-card">
                <div className="bca-about-card-header">
                  <img
                    src={eligibilityOverlay}
                    alt="Eligibility Icon"
                    className="bca-about-icon small-icon education-eligibility-icon"
                  />
                  <h3 className="bca-about-card-title small-title">
                    Eligibility
                  </h3>
                </div>

                <p className="bca-about-card-description">
                  Completion of 12th standard (Higher Secondary) from a
                  recognized education board with a minimum aggregate score,
                  preferably with Mathematics or Computer Science.
                </p>

                <div className="bca-card-buttons">
                  <Link to="/contact" className="bca-btn-apply animate-pulse-button">
                    Apply Now
                  </Link>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bca-quick-facts">
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

export default BCAEducation;
