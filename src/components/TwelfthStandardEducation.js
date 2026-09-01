import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./TwelfthStandardEducation.css";
import Header from "./Header";
import Footer from "./Footer";

import higherSecondaryIcon from "../assets/images/course/book-open.png";
import aboutOverlay from "../assets/images/course/book-open.png";
import eligibilityOverlay from "../assets/images/course/users-round.png";
import careerOverlay from "../assets/images/course/trending-up.png";
import checkIcon from "../assets/images/icons/circle-check-big.png";

const TwelfthStandardEducation = () => {
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
    <div className="twelfth-standard-page">
      <Header />

      {/* Hero Section with Oval */}
      <section className="twelfth-hero-section">
        <div className="twelfth-hero-oval"></div>

        {/* Centered Section */}
        <div className="twelfth-centered-section">
          <div 
            className={`twelfth-top-buttons ${isVisible.topButtons ? 'animate-fade-in' : ''}`}
            ref={(el) => (elementsRef.current.topButtons = el)}
            data-key="topButtons"
          >
            <Link to="/courses" className="twelfth-back-link-top animate-slide-in-left">
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

            <div className="twelfth-program-tag-center animate-pulse-subtle">
              Higher Secondary Program
            </div>
          </div>

          <div 
            className={`twelfth-title-section ${isVisible.title ? 'animate-fade-in-scale' : ''}`}
            ref={(el) => (elementsRef.current.title = el)}
            data-key="title"
          >
            <h1 className="twelfth-main-title">
              <span className="twelfth-title-line">12th Grade / +2</span>
              <span className="twelfth-title-line">
                (Higher Secondary / Intermediate)
              </span>
            </h1>
          </div>

          {/* Higher Secondary Button */}
          <div 
            className={`twelfth-secondary-tag ${isVisible.secondaryTag ? 'animate-fade-in-up' : ''}`}
            ref={(el) => (elementsRef.current.secondaryTag = el)}
            data-key="secondaryTag"
            style={{ animationDelay: '0.2s' }}
          >
            <img
              src={higherSecondaryIcon}
              alt="Higher Secondary Icon"
              className="twelfth-secondary-icon animate-float"
            />
            Higher Secondary
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="twelfth-main-content">
        <div className="twelfth-bottom-section">
          <div className="twelfth-bottom-container">
            {/* Left Column */}
            <div 
              className={`twelfth-left-column ${isVisible.leftColumn ? 'animate-slide-in-left' : ''}`}
              ref={(el) => (elementsRef.current.leftColumn = el)}
              data-key="leftColumn"
            >
              {/* About This Program */}
              <div className="twelfth-about-program-card">
                <div className="twelfth-about-card-header">
                  <img
                    src={aboutOverlay}
                    alt="Program Icon"
                    className="twelfth-about-icon education-about-icon"
                  />
                  <h3 className="twelfth-about-card-title">
                    About This Program
                  </h3>
                </div>

                <p className="twelfth-about-card-description">
                  The 12th-grade qualification (Higher Secondary/Intermediate)
                  represents the completion of higher secondary education and
                  prepares students for university education and professional
                  careers. Students gain advanced knowledge in specialized
                  subjects including sciences, commerce, or humanities based on
                  their chosen stream.
                </p>
              </div>

              {/* Career Prospects */}
              <div className="twelfth-info-card career-prospects-card">
                <div className="twelfth-about-card-header">
                  <img
                    src={careerOverlay}
                    alt="Career Icon"
                    className="twelfth-about-icon no-bg-icon animate-bounce-subtle education-career-icon"
                  />
                  <h3 className="twelfth-about-card-title">Career Prospects</h3>
                </div>

                {/* GRID CONTAINER */}
                <div className="education-grid">
                  {/* Bachelor's Degree */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Bachelor's Degree Programs</span>
                  </div>

                  {/* Professional Courses */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Professional Courses</span>
                  </div>

                  {/* Competitive Exams */}
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Competitive Examinations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div 
              className={`twelfth-right-column ${isVisible.rightColumn ? 'animate-slide-in-right' : ''}`}
              ref={(el) => (elementsRef.current.rightColumn = el)}
              data-key="rightColumn"
            >
              <div className="twelfth-info-card">
                <div className="twelfth-about-card-header">
                  <img
                    src={eligibilityOverlay}
                    alt="Eligibility Icon"
                    className="twelfth-about-icon small-icon education-eligibility-icon"
                  />
                  <h3 className="twelfth-about-card-title small-title">
                    Eligibility
                  </h3>
                </div>

                <p className="twelfth-about-card-description">
                  Completion of 10th standard and enrollment under a recognized
                  education board. Must have passed secondary education from an
                  accredited institution.
                </p>

                <div className="twelfth-card-buttons">
                  <Link to="/contact" className="twelfth-btn-apply animate-pulse-button">
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

export default TwelfthStandardEducation;
