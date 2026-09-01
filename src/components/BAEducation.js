import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./BAEducation.css";
import Header from "./Header";
import Footer from "./Footer";

import undergraduateIcon from "../assets/images/course/briefcase.svg";
import aboutOverlay from "../assets/images/course/book-open.png";
import eligibilityOverlay from "../assets/images/course/users-round.png";
import careerOverlay from "../assets/images/course/trending-up.png";
import checkIcon from "../assets/images/icons/circle-check-big.png";

const BAEducation = () => {
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
    <div className="ba-standard-page">
      <Header />

      {/* Hero Section with Oval */}
      <section className="ba-hero-section">
        <div className="ba-hero-oval"></div>

        {/* Centered Section */}
        <div className="ba-centered-section">
          <div 
            className={`ba-top-buttons ${isVisible.topButtons ? 'animate-fade-in' : ''}`}
            ref={(el) => (elementsRef.current.topButtons = el)}
            data-key="topButtons"
          >
            <Link to="/courses" className="ba-back-link-top animate-slide-in-left">
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

            <div className="ba-program-tag-center animate-pulse-subtle">Undergraduate Program</div>
          </div>

          <div 
            className={`ba-title-section ${isVisible.title ? 'animate-fade-in-scale' : ''}`}
            ref={(el) => (elementsRef.current.title = el)}
            data-key="title"
          >
            <h1 className="ba-main-title">
              <span className="ba-title-line">BA - Bachelor of Arts</span>
            </h1>
          </div>

          {/* Duration and Level */}
          <div 
            className={`ba-meta-tags ${isVisible.metaTags ? 'animate-fade-in-up' : ''}`}
            ref={(el) => (elementsRef.current.metaTags = el)}
            data-key="metaTags"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="ba-meta-tag animate-float">
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
            <div className="ba-meta-tag animate-float" style={{ animationDelay: '0.3s' }}>
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
      <section className="ba-main-content">
        <div className="ba-bottom-section">
          <div className="ba-bottom-container">
            {/* Left Column */}
            <div 
              className={`ba-left-column ${isVisible.leftColumn ? 'animate-slide-in-left' : ''}`}
              ref={(el) => (elementsRef.current.leftColumn = el)}
              data-key="leftColumn"
            >
              {/* About This Program */}
              <div className="ba-about-program-card">
                <div className="ba-about-card-header">
                  <img
                    src={aboutOverlay}
                    alt="Program Icon"
                    className="ba-about-icon education-about-icon"
                  />
                  <h3 className="ba-about-card-title">About This Program</h3>
                </div>

                <p className="ba-about-card-description">
                  The Bachelor of Arts program offers a wide range of subjects
                  in the humanities and social sciences. It helps students
                  develop critical thinking, communication, analytical skills,
                  and expertise in areas like literature, psychology, economics,
                  and sociology. Graduates can pursue careers in education,
                  public service, media, and administration.
                </p>
              </div>

              {/* Career Prospects */}
              <div className="ba-info-card career-prospects-card">
                <div className="ba-about-card-header">
                  <img
                    src={careerOverlay}
                    alt="Career Icon"
                    className="ba-about-icon no-bg-icon animate-bounce-subtle education-career-icon"
                  />
                  <h3 className="ba-about-card-title">Career Prospects</h3>
                </div>

                {/* GRID CONTAINER */}
                <div className="education-grid">
                  {/* Teacher */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Teacher</span>
                  </div>

                  {/* Journalist */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Journalist</span>
                  </div>

                  {/* Content Writer */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Content Writer</span>
                  </div>

                  {/* Public Relations Officer */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Public Relations Officer</span>
                  </div>

                  {/* Civil Services */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Civil Services</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div 
              className={`ba-right-column ${isVisible.rightColumn ? 'animate-slide-in-right' : ''}`}
              ref={(el) => (elementsRef.current.rightColumn = el)}
              data-key="rightColumn"
            >
              <div className="ba-info-card">
                <div className="ba-about-card-header">
                  <img
                    src={eligibilityOverlay}
                    alt="Eligibility Icon"
                    className="ba-about-icon small-icon education-eligibility-icon"
                  />
                  <h3 className="ba-about-card-title small-title">
                    Eligibility
                  </h3>
                </div>

                <p className="ba-about-card-description">
                  Completion of 12th standard (Higher Secondary) from a
                  recognized education board with a minimum aggregate score.
                </p>

                <div className="ba-card-buttons">
                  <Link to="/contact" className="ba-btn-apply animate-pulse-button">
                    Apply Now
                  </Link>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="ba-quick-facts">
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

export default BAEducation;
