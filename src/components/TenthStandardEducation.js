import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./TenthStandardEducation.css";
import Header from "./Header";
import Footer from "./Footer";

import secondaryIcon from "../assets/images/course/book-open.png";
import aboutOverlay from "../assets/images/course/book-open.png";
import eligibilityOverlay from "../assets/images/course/users-round.png";
import careerOverlay from "../assets/images/course/trending-up.png";
import checkIcon from "../assets/images/icons/circle-check-big.png";

const TenthStandardEducation = () => {
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
    <div className="tenth-standard-page">
      <Header />

      {/* Hero Section with Oval */}
      <section className="tenth-hero-section">
        <div className="tenth-hero-oval"></div>

        {/* Centered Section */}
        <div className="tenth-centered-section">
          <div 
            className={`tenth-top-buttons ${isVisible.topButtons ? 'animate-fade-in' : ''}`}
            ref={(el) => (elementsRef.current.topButtons = el)}
            data-key="topButtons"
          >
            <Link to="/courses" className="tenth-back-link-top animate-slide-in-left">
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

            <div className="tenth-program-tag-center animate-pulse-subtle">Secondary Program</div>
          </div>

          <div 
            className={`tenth-title-section ${isVisible.title ? 'animate-fade-in-scale' : ''}`}
            ref={(el) => (elementsRef.current.title = el)}
            data-key="title"
          >
            <h1 className="tenth-main-title">
              <span className="tenth-title-line">10th Grade</span>
              <span className="tenth-title-line">
                (Secondary School Certificate)
              </span>
            </h1>
          </div>

          {/* Secondary Button */}
          <div 
            className={`tenth-secondary-tag ${isVisible.secondaryTag ? 'animate-fade-in-up' : ''}`}
            ref={(el) => (elementsRef.current.secondaryTag = el)}
            data-key="secondaryTag"
            style={{ animationDelay: '0.2s' }}
          >
            <img
              src={secondaryIcon}
              alt="Secondary Icon"
              className="tenth-secondary-icon animate-float"
            />
            Secondary
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="tenth-main-content">
        <div className="tenth-bottom-section">
          <div className="tenth-bottom-container">
            {/* Left Column */}
            <div 
              className={`tenth-left-column ${isVisible.leftColumn ? 'animate-slide-in-left' : ''}`}
              ref={(el) => (elementsRef.current.leftColumn = el)}
              data-key="leftColumn"
            >
              {/* About This Program */}
              <div className="tenth-about-program-card">
                <div className="tenth-about-card-header">
                  <img
                    src={aboutOverlay}
                    alt="Program Icon"
                    className="tenth-about-icon education-about-icon"
                  />
                  <h3 className="tenth-about-card-title">About This Program</h3>
                </div>

                <p className="tenth-about-card-description">
                  The 10th-grade qualification marks the completion of secondary
                  education and provides students with fundamental knowledge in
                  subjects like languages, mathematics, science, and social
                  studies. It lays the essential foundation for higher education
                  and future career planning.
                </p>
              </div>

              {/* Career Prospects */}
              <div className="tenth-info-card career-prospects-card">
                <div className="tenth-about-card-header">
                  <img
                    src={careerOverlay}
                    alt="Career Icon"
                    className="tenth-about-icon no-bg-icon animate-bounce-subtle education-career-icon"
                  />
                  <h3 className="tenth-about-card-title">Career Prospects</h3>
                </div>

                {/* GRID CONTAINER */}
                <div className="education-grid">
                  {/* Higher Secondary */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Higher Secondary Education</span>
                  </div>

                  {/* Vocational – RIGHT */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Vocational Training</span>
                  </div>

                  {/* Diploma – BELOW */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Diploma Programs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div 
              className={`tenth-right-column ${isVisible.rightColumn ? 'animate-slide-in-right' : ''}`}
              ref={(el) => (elementsRef.current.rightColumn = el)}
              data-key="rightColumn"
            >
              <div className="tenth-info-card">
                <div className="tenth-about-card-header">
                  <img
                    src={eligibilityOverlay}
                    alt="Eligibility Icon"
                    className="tenth-about-icon small-icon education-eligibility-icon"
                  />
                  <h3 className="tenth-about-card-title small-title">
                    Eligibility
                  </h3>
                </div>

                <p className="tenth-about-card-description">
                  Completion of schooling up to Class 9 and enrollment under a
                  recognized education board.
                </p>

                <div className="tenth-card-buttons">
                  <Link to="/contact" className="tenth-btn-apply animate-pulse-button">
                    Apply Now
                  </Link>
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

export default TenthStandardEducation;
