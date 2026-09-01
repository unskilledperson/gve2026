import React from "react";
import { Link } from "react-router-dom";
import "./ServicesPage.css";
import Header from "./Header";
import Footer from "./Footer";
import discussImage from "../assets/images/hero/discusss.png";
import icon1 from "../assets/images/icons/bg1.png";
import icon2 from "../assets/images/icons/bg2.png";
import icon3 from "../assets/images/icons/bg3.png";

const ServicesPage = () => {
  const services = [
    {
      title: "University Selection",
      row: 1,
    },
    {

      
      title: "Application Support",
      row: 1,
    },
  ];

  return (
    <div className="services-page">
      <Header />

      {/* Services Hero Section */}
      <section className="services-hero" style={{ backgroundImage: `url(${discussImage})` }}>
        <div className="services-hero-overlay"></div>

        <div className="services-hero-content">
          <h1 className="services-hero-title">Services</h1>
        </div>

        {/* First Row Cards - Right bottom of hero */}
        <div className="services-cards-container services-cards-row-1">
          {services
            .filter((service) => service.row === 1)
            .map((service, index) => (
              <div key={`row1-${index}`} className="service-card">
                <div className="service-card-icon">
                  {service.title === "University Selection" && (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z"
                        fill="white"
                      />
                    </svg>
                  )}
                  {service.title === "Application Support" && (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"
                        fill="white"
                      />
                      <path
                        d="M9 14L11 16L15 12"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="service-card-title">{service.title}</h3>
              </div>
            ))}
        </div>
      </section>


      <section className="what-we-offer">
        <div className="what-we-offer-container">
          <div className="what-we-offer-label">WHAT WE OFFER</div>
          <h2 className="what-we-offer-heading">
            Comprehensive Education Solutions
          </h2>
          <p className="what-we-offer-description">
            From undergraduate to professional certifications, we provide
            quality education that fits your lifestyle.
          </p>
          <div className="what-we-offer-cards">
            <div className="program-card">
              <div className="program-card-icon">
                <img
                  src={icon3}
                  alt="Secondary Education"
                  className="program-icon-img"
                />
              </div>
              <h3 className="program-card-title">Secondary Education</h3>
              <p className="program-card-description">
                Comprehensive bachelor's degree programs designed for working
                professionals with flexible schedules and industry-relevant
                curriculum.
              </p>
              <ul className="program-card-features">
                <li>
                  <span className="checkmark">✓</span> Flexible Learning
                </li>
                <li>
                  <span className="checkmark">✓</span> Industry Experts
                </li>
                <li>
                  <span className="checkmark">✓</span> Practical Projects
                </li>
                <li>
                  <span className="checkmark">✓</span> Career Support
                </li>
              </ul>
            </div>

            <div className="program-card">
              <div className="program-card-icon">
                <img
                  src={icon2}
                  alt="Undergraduate Programs"
                  className="program-icon-img"
                />
              </div>
              <h3 className="program-card-title">Undergraduate Programs</h3>
              <p className="program-card-description">
                Advanced master's degree programs that elevate your expertise
                and open doors to leadership positions in your field.
              </p>
              <ul className="program-card-features">
                <li>
                  <span className="checkmark">✓</span> Research Focus
                </li>
                <li>
                  <span className="checkmark">✓</span> Global Recognition
                </li>
                <li>
                  <span className="checkmark">✓</span> Expert Mentorship
                </li>
                <li>
                  <span className="checkmark">✓</span> Networking Events
                </li>
              </ul>
            </div>

            <div className="program-card">
              <div className="program-card-icon">
                <img
                  src={icon1}
                  alt="Postgraduate Programs"
                  className="program-icon-img"
                />
              </div>
              <h3 className="program-card-title">Postgraduate Programs</h3>
              <p className="program-card-description">
                Industry recognized certification courses that boost your
                credentials and enhance your professional value.
              </p>
              <ul className="program-card-features">
                <li>
                  <span className="checkmark">✓</span> Quick Completion
                </li>
                <li>
                  <span className="checkmark">✓</span> Skill Enhancement
                </li>
                <li>
                  <span className="checkmark">✓</span> Career Advancement
                </li>
              </ul>
            </div>
          </div>

          <div className="secondary-services">
            <Link to="/services/certificate-attestation" className="secondary-service-btn">
              Certificate Attestation
            </Link>
            <Link to="/services/distance-education" className="secondary-service-btn">
              Complete Distance Education Support
            </Link>
            <Link to="/services/credit-transfer" className="secondary-service-btn">
              Credit Transfer
            </Link>
            <Link to="/services/equivalency-certificate" className="secondary-service-btn">
              Equivalency Services
            </Link>
          </div>
        </div>
      </section>
      <section className="enrollment-process">
        <div className="enrollment-process-container">
          <div className="enrollment-process-label">OUR PURPOSE</div>
          <h2 className="enrollment-process-heading">
            Simple Enrollment Process
          </h2>
          <p className="enrollment-process-description">
            Getting started with your education journey is easy. Follow these
            simple steps.
          </p>

          <div className="enrollment-steps-grid">
            <div className="enrollment-step-card">
              <div className="step-number">01</div>
              <h3 className="step-title">Select your Program</h3>
              <p className="step-description">
                Explore our range of programs and choose the course that fits
                your academic interests and career aspirations.
              </p>
            </div>

            <div className="enrollment-step-card">
              <div className="step-number">02</div>
              <h3 className="step-title">Complete your Application</h3>
              <p className="step-description">
                Fill out the online application form with accurate details to
                initiate your enrollment.
              </p>
            </div>

            <div className="enrollment-step-card">
              <div className="step-number">03</div>
              <h3 className="step-title">Application Review</h3>
              <p className="step-description">
                Our admissions team reviews your application to ensure
                eligibility and confirms your acceptance.
              </p>
            </div>

            <div className="enrollment-step-card">
              <div className="step-number">04</div>
              <h3 className="step-title">Make Payment</h3>
              <p className="step-description">
                Pay the program fees securely online or via bank transfer to
                finalize your enrollment.
              </p>
            </div>

            <div className="enrollment-step-card">
              <div className="step-number">05</div>
              <h3 className="step-title">Receive Admission Details</h3>
              <p className="step-description">
                Once your payment is confirmed, you will get your admission
                confirmation and student ID.
              </p>
            </div>

            <div className="enrollment-step-card">
              <div className="step-number">06</div>
              <h3 className="step-title">Begin your Studies</h3>
              <p className="step-description">
                Start your learning journey by accessing course materials,
                attending online classes, and engaging with instructors.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="services-cta">
        <div className="services-cta-container">
          <h2 className="services-cta-heading">Ready to Start Your Journey?</h2>
          <p className="services-cta-description">
            Take the first step towards your educational goals. Our counselors
            are here to help you choose the right program.
          </p>
          <div className="services-cta-buttons">
            <Link to="/contact" className="services-cta-btn-primary">
              Get Free Consultation
            </Link>
            <button className="services-cta-btn-secondary">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
