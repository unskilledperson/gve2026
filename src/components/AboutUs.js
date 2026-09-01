import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import Header from "./Header";
import Footer from "./Footer";
import aboutUsImage from "../assets/images/hero/discusss.png";
import heroImg from "../assets/images/hero/about_us.png";
import icon1 from "../assets/images/icons/bg3.png";
import icon2 from "../assets/images/icons/bg2.png";
import icon3 from "../assets/images/icons/bg1.png";
import tickIcon from "../assets/images/icons/circle-check-big.png";
import overlayIcon1 from "../assets/images/icons/Overlay.png";
import overlayIcon2 from "../assets/images/icons/Overlay (1).png";
import overlayIcon3 from "../assets/images/icons/Overlay (2).png";
import overlayIcon4 from "../assets/images/icons/Overlay (3).png";

const AboutUs = () => {
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

    // Observe all elements with data-key attribute
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
    <div className="aboutus-page">
      <Header />

      {/* Hero Section */}
      <section className="aboutus-hero">
        <img src={aboutUsImage} alt="About Us" className="aboutus-hero-bg" />
        <div className="aboutus-hero-overlay"></div>
        <div className="aboutus-hero-content">
          <h1 className="aboutus-hero-title animate-fade-in">About US</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="aboutus-content">
        <div className="aboutus-container">
          {/* Left Column */}
          <div
            className={`aboutus-left-column ${isVisible.leftColumn ? "animate-slide-in-left" : ""}`}
            ref={(el) => (elementsRef.current.leftColumn = el)}
            data-key="leftColumn"
          >
            <div className="aboutus-label animate-pulse-subtle">
              <span className="aboutus-label-bullet">•</span> ABOUT US
            </div>
            <h2 className="aboutus-heading">
              <span className="aboutus-heading-line">Introduction To</span>
              <span className="aboutus-heading-line aboutus-heading-highlight">
                Global Vision
              </span>
              <span className="aboutus-heading-line aboutus-heading-highlight">
                Education
              </span>
            </h2>
          </div>

          {/* Right Column */}
          <div
            className={`aboutus-right-column ${isVisible.rightColumn ? "animate-slide-in-right" : ""}`}
            ref={(el) => (elementsRef.current.rightColumn = el)}
            data-key="rightColumn"
          >
            <p className="aboutus-description">
              Global Vision Education was established to address a growing need
              in the UAE where working professionals seek higher education
              without the limitations of traditional classroom learning. Many
              individuals aspire to enhance their qualifications, but fixed
              schedules, long commutes, and demanding work commitments often
              create barriers. We provide flexible distance education solutions
              that allow learners to progress academically without interrupting
              their professional or personal responsibilities.
            </p>
            <p className="aboutus-description">
              As a trusted distance education provider in the UAE, we offer
              accessible learning pathways designed specifically for working
              professionals. Our approach focuses on clear academic guidance, a
              simplified admission process, and continuous student support
              throughout the learning journey. Every program is structured to
              help learners achieve academic growth while maintaining balance in
              their daily lives.
            </p>
            <p className="aboutus-description">
              From the beginning, our mission has remained consistent. We aim to
              deliver honest counseling, transparent processes, and dependable
              academic assistance that aligns with the realities of today's
              workforce. Whether your goal is career advancement, qualification
              upgrade, or professional transition, Global Vision Education is
              committed to supporting your success through reliable and flexible
              online education in the UAE.
            </p>
          </div>
        </div>
        <div className="aboutus-features">
          <div
            className={`aboutus-feature-card ${isVisible.feature1 ? "animate-fade-in-up" : ""}`}
            ref={(el) => (elementsRef.current.feature1 = el)}
            data-key="feature1"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="aboutus-feature-icon animate-float">
              <img src={icon1} alt="Expert Guidance" />
            </div>
            <p className="aboutus-feature-text">
              Expert Guidance With Proven Experience
            </p>
          </div>

          <div
            className={`aboutus-feature-card ${isVisible.feature2 ? "animate-fade-in-up" : ""}`}
            ref={(el) => (elementsRef.current.feature2 = el)}
            data-key="feature2"
            style={{ animationDelay: "0.2s" }}
          >
            <div
              className="aboutus-feature-icon animate-float"
              style={{ animationDelay: "0.3s" }}
            >
              <img src={icon2} alt="Admission Support" />
            </div>
            <p className="aboutus-feature-text">End-to-End Admission Support</p>
          </div>

          <div
            className={`aboutus-feature-card ${isVisible.feature3 ? "animate-fade-in-up" : ""}`}
            ref={(el) => (elementsRef.current.feature3 = el)}
            data-key="feature3"
            style={{ animationDelay: "0.3s" }}
          >
            <div
              className="aboutus-feature-icon animate-float"
              style={{ animationDelay: "0.6s" }}
            >
              <img src={icon3} alt="Student-First Approach" />
            </div>
            <p className="aboutus-feature-text">
              Transparent, Student-First Approach
            </p>
          </div>
        </div>
        <div
          className={`aboutus-image-container ${isVisible.image ? "animate-fade-in-scale" : ""}`}
          ref={(el) => (elementsRef.current.image = el)}
          data-key="image"
        >
          <img src={heroImg} alt="About Us" className="aboutus-image" />
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="aboutus-vision-mission">
        <div className="vision-mission-container">
          {/* Purpose Tag */}
          <div
            className={`purpose-tag ${isVisible.purposeTag ? "animate-fade-in" : ""}`}
            ref={(el) => (elementsRef.current.purposeTag = el)}
            data-key="purposeTag"
          >
            OUR PURPOSE
          </div>

          {/* Main Heading */}
          <h2
            className={`vision-mission-heading ${isVisible.vmHeading ? "animate-fade-in" : ""}`}
            ref={(el) => (elementsRef.current.vmHeading = el)}
            data-key="vmHeading"
          >
            Vision & Mission
          </h2>

          {/* Vision & Mission Cards */}
          <div className="vision-mission-cards">
            <div
              className={`vision-mission-card ${isVisible.visionCard ? "animate-slide-in-left" : ""}`}
              ref={(el) => (elementsRef.current.visionCard = el)}
              data-key="visionCard"
            >
              <div className="vm-card-header">
                <div className="vm-icon animate-pulse-icon">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="white"
                    />
                    <circle cx="12" cy="12" r="3" fill="white" />
                    <circle cx="12" cy="12" r="1.5" fill="#06B795" />
                  </svg>
                </div>
                <h3 className="vm-card-title">Our Vision</h3>
              </div>
              <p className="vm-card-description">
                Our vision is to create a world where distance education is
                accessible, engaging, and transformative, enabling every learner
                to pursue personal growth and achieve professional excellence.
                We strive to remove barriers to learning, offering flexible and
                innovative educational opportunities that inspire curiosity,
                develop critical skills, and empower individuals to succeed
                academically and professionally. Through high-quality programs,
                personalized support, and practical learning experiences, we aim
                to equip learners with the knowledge and confidence to advance
                their careers, contribute meaningfully to society, and realize
                their full potential.
              </p>
            </div>

            <div
              className={`vision-mission-card ${isVisible.missionCard ? "animate-slide-in-right" : ""}`}
              ref={(el) => (elementsRef.current.missionCard = el)}
              data-key="missionCard"
            >
              <div className="vm-card-header">
                <div
                  className="vm-icon animate-pulse-icon"
                  style={{ animationDelay: "0.2s" }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="white"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="white"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="white"
                    />
                  </svg>
                </div>
                <h3 className="vm-card-title">Our Mission</h3>
              </div>
              <p className="vm-card-description">
                Our mission is to deliver trusted, flexible, and recognized
                distance learning opportunities complemented by comprehensive
                academic support, guiding students and professionals to achieve
                success in their careers and lifelong learning journeys. We are
                committed to providing practical, high-quality programs that
                adapt to individual needs, offering personalized guidance,
                seamless access to resources, and structured pathways that
                empower learners to enhance their skills, advance
                professionally, and realize their full potential.
              </p>
            </div>
          </div>

          {/* Core Values Heading */}
          <h2
            className={`core-values-heading ${isVisible.coreValuesHeading ? "animate-fade-in" : ""}`}
            ref={(el) => (elementsRef.current.coreValuesHeading = el)}
            data-key="coreValuesHeading"
          >
            Our Core Values
          </h2>

          {/* Core Values Cards */}
          <div className="core-values-grid">
            <div
              className={`core-value-card ${isVisible.coreValue1 ? "animate-fade-in-up" : ""}`}
              ref={(el) => (elementsRef.current.coreValue1 = el)}
              data-key="coreValue1"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="cv-icon">
                <img src={tickIcon} alt="Checkmark" />
              </div>
              <p className="cv-text">
                Student-first approach in everything we do
              </p>
            </div>

            <div
              className={`core-value-card ${isVisible.coreValue2 ? "animate-fade-in-up" : ""}`}
              ref={(el) => (elementsRef.current.coreValue2 = el)}
              data-key="coreValue2"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="cv-icon">
                <img src={tickIcon} alt="Checkmark" />
              </div>
              <p className="cv-text">
                Transparency and honesty in our guidance
              </p>
            </div>

            <div
              className={`core-value-card ${isVisible.coreValue3 ? "animate-fade-in-up" : ""}`}
              ref={(el) => (elementsRef.current.coreValue3 = el)}
              data-key="coreValue3"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="cv-icon">
                <img src={tickIcon} alt="Checkmark" />
              </div>
              <p className="cv-text">
                Continuous Innovation in education solutions
              </p>
            </div>

            <div
              className={`core-value-card ${isVisible.coreValue4 ? "animate-fade-in-up" : ""}`}
              ref={(el) => (elementsRef.current.coreValue4 = el)}
              data-key="coreValue4"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="cv-icon">
                <img src={tickIcon} alt="Checkmark" />
              </div>
              <p className="cv-text">
                Building lasting relationships with students and institutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="aboutus-why-choose">
        <div className="why-choose-container">
          <div
            className={`why-us-label ${isVisible.whyUsLabel ? "animate-fade-in" : ""}`}
            ref={(el) => (elementsRef.current.whyUsLabel = el)}
            data-key="whyUsLabel"
          >
            WHY US
          </div>
          <h2
            className={`why-choose-heading ${isVisible.whyChooseHeading ? "animate-fade-in" : ""}`}
            ref={(el) => (elementsRef.current.whyChooseHeading = el)}
            data-key="whyChooseHeading"
          >
            Why Choose Global Vision Education?
          </h2>
          <p
            className={`why-choose-description ${isVisible.whyChooseDesc ? "animate-fade-in" : ""}`}
            ref={(el) => (elementsRef.current.whyChooseDesc = el)}
            data-key="whyChooseDesc"
          >
            We combine expertise, dedication, and a global network to deliver
            exceptional results for our students.
          </p>

          {/* Feature Cards */}
          <div className="why-choose-cards">
            <div
              className={`why-choose-card ${isVisible.whyCard1 ? "animate-fade-in-up" : ""}`}
              ref={(el) => (elementsRef.current.whyCard1 = el)}
              data-key="whyCard1"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="why-card-icon animate-bounce-subtle">
                <img
                  src={overlayIcon1}
                  alt="Flexible Study Options"
                  className="why-card-icon-img"
                />
              </div>
              <h3 className="why-card-title">Flexible Study Options</h3>
              <p className="why-card-text">
                Learn without compromising your career or personal commitments.
              </p>
            </div>

            <div
              className={`why-choose-card ${isVisible.whyCard2 ? "animate-fade-in-up" : ""}`}
              ref={(el) => (elementsRef.current.whyCard2 = el)}
              data-key="whyCard2"
              style={{ animationDelay: "0.2s" }}
            >
              <div
                className="why-card-icon animate-bounce-subtle"
                style={{ animationDelay: "0.2s" }}
              >
                <img
                  src={overlayIcon2}
                  alt="Transparent Process"
                  className="why-card-icon-img"
                />
              </div>
              <h3 className="why-card-title">Transparent Process</h3>
              <p className="why-card-text">
                Easy process with clear guidance at every step.
              </p>
            </div>

            <div
              className={`why-choose-card ${isVisible.whyCard3 ? "animate-fade-in-up" : ""}`}
              ref={(el) => (elementsRef.current.whyCard3 = el)}
              data-key="whyCard3"
              style={{ animationDelay: "0.3s" }}
            >
              <div
                className="why-card-icon animate-bounce-subtle"
                style={{ animationDelay: "0.4s" }}
              >
                <img
                  src={overlayIcon3}
                  alt="Personalized Assistance"
                  className="why-card-icon-img"
                />
              </div>
              <h3 className="why-card-title">Personalised Assistance</h3>
              <p className="why-card-text">
                Dedicated help throughout your studies.
              </p>
            </div>

            <div
              className={`why-choose-card ${isVisible.whyCard4 ? "animate-fade-in-up" : ""}`}
              ref={(el) => (elementsRef.current.whyCard4 = el)}
              data-key="whyCard4"
              style={{ animationDelay: "0.4s" }}
            >
              <div
                className="why-card-icon animate-bounce-subtle"
                style={{ animationDelay: "0.6s" }}
              >
                <img
                  src={overlayIcon4}
                  alt="Professional Excellence"
                  className="why-card-icon-img"
                />
              </div>
              <h3 className="why-card-title">Professional Excellence</h3>
              <p className="why-card-text">
                Committed to quality and consistent student satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutus-cta">
        <div
          className={`cta-container ${isVisible.cta ? "animate-fade-in-scale" : ""}`}
          ref={(el) => (elementsRef.current.cta = el)}
          data-key="cta"
        >
          <h2 className="cta-heading">Ready to Start Your Journey?</h2>
          <p className="cta-description">
            Book a free consultation with our expert counselors and take the
            first step towards your dream education.
          </p>
          <Link to="/services" className="cta-button animate-pulse-button">
            Explore Our Services
            <span className="cta-arrow animate-arrow-slide">→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
