import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./MAEducation.css";
import Header from "./Header";
import Footer from "./Footer";

import postgraduateIcon from "../assets/images/course/book-open.png";
import aboutOverlay from "../assets/images/course/book-open.png";
import eligibilityOverlay from "../assets/images/course/users-round.png";
import careerOverlay from "../assets/images/course/trending-up.png";
import checkIcon from "../assets/images/icons/circle-check-big.png";

const MAEducation = () => {
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
    <div className="ma-standard-page">
      <Header />

      <section className="ma-hero-section">
        <div className="ma-hero-oval"></div>
        <div className="ma-centered-section">
          <div 
            className={`ma-top-buttons ${isVisible.topButtons ? 'animate-fade-in' : ''}`}
            ref={(el) => (elementsRef.current.topButtons = el)}
            data-key="topButtons"
          >
            <Link to="/courses" className="ma-back-link-top animate-slide-in-left">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Programs
            </Link>
            <div className="ma-program-tag-center animate-pulse-subtle">Postgraduate Program</div>
          </div>
          <div 
            className={`ma-title-section ${isVisible.title ? 'animate-fade-in-scale' : ''}`}
            ref={(el) => (elementsRef.current.title = el)}
            data-key="title"
          >
            <h1 className="ma-main-title">
              <span className="ma-title-line">MA - Master of Arts</span>
            </h1>
          </div>
          <div 
            className={`ma-meta-tags ${isVisible.metaTags ? 'animate-fade-in-up' : ''}`}
            ref={(el) => (elementsRef.current.metaTags = el)}
            data-key="metaTags"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="ma-meta-tag animate-float">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              2 Years
            </div>
            <div className="ma-meta-tag animate-float" style={{ animationDelay: '0.3s' }}>
              <img src={postgraduateIcon} alt="Postgraduate" className="meta-tag-icon" />
              Postgraduate
            </div>
          </div>
        </div>
      </section>

      <section className="ma-main-content">
        <div className="ma-bottom-section">
          <div className="ma-bottom-container">
            <div 
              className={`ma-left-column ${isVisible.leftColumn ? 'animate-slide-in-left' : ''}`}
              ref={(el) => (elementsRef.current.leftColumn = el)}
              data-key="leftColumn"
            >
              <div className="ma-about-program-card">
                <div className="ma-about-card-header">
                <img src={aboutOverlay} alt="Program Icon" className="ma-about-icon education-about-icon" />
                  <h3 className="ma-about-card-title">About This Program</h3>
                </div>
                <p className="ma-about-card-description">
                  The Master of Arts program focuses on advanced theoretical knowledge, critical thinking, and analytical skills in humanities and social sciences. It is suitable for candidates aiming for careers in teaching, research, public administration, content development, and civil services preparation.
                </p>
              </div>
              <div className="ma-info-card career-prospects-card">
                <div className="ma-about-card-header">
                  <img src={careerOverlay} alt="Career Icon" className="ma-about-icon no-bg-icon animate-bounce-subtle education-career-icon" />
                  <h3 className="ma-about-card-title">Career Prospects</h3>
                </div>
                <div className="education-grid">
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Teaching</span>
                  </div>
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Research</span>
                  </div>
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Public Services</span>
                  </div>
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Media</span>
                  </div>
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Academic Writing</span>
                  </div>
                </div>
              </div>
            </div>
            <div 
              className={`ma-right-column ${isVisible.rightColumn ? 'animate-slide-in-right' : ''}`}
              ref={(el) => (elementsRef.current.rightColumn = el)}
              data-key="rightColumn"
            >
              <div className="ma-info-card">
                <div className="ma-about-card-header">
                <img src={eligibilityOverlay} alt="Eligibility Icon" className="ma-about-icon small-icon education-eligibility-icon" />
                  <h3 className="ma-about-card-title small-title">Eligibility</h3>
                </div>
                <p className="ma-about-card-description">
                  Completion of undergraduate education in a relevant discipline from a recognized institution. Minimum eligibility criteria as per university requirements. Open to working professionals and fresh graduates.
                </p>
                <div className="ma-card-buttons">
                  <Link to="/contact" className="ma-btn-apply animate-pulse-button">Apply Now</Link>
                </div>
              </div>
              <div className="ma-quick-facts">
                <h4 className="quick-facts-title">Quick Facts</h4>
                <div className="quick-facts-grid">
                  <div className="quick-fact-item animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <span className="quick-fact-label">Duration</span>
                    <span className="quick-fact-value">2 Years</span>
                  </div>
                  <div className="quick-fact-item animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <span className="quick-fact-label">Level</span>
                    <span className="quick-fact-value">Postgraduate</span>
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

export default MAEducation;


