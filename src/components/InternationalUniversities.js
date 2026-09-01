import React from "react";
import { Link } from "react-router-dom";
import "./InternationalUniversities.css";
import Header from "./Header";
import Footer from "./Footer";
import certificateImage from "../assets/images/hero/international_uni.png";

const InternationalUniversities = () => {
  return (
    <div className="service-detail-page">
      <Header />

      {/* Hero Section */}
      <section
        className="service-hero"
        style={{ backgroundImage: `url(${certificateImage})` }}
      >
        <div className="service-hero-overlay"></div>
        <div className="service-hero-content">
          <h1 className="service-hero-title">International Universities</h1>
          <p className="service-hero-subtitle">
            Globally Recognised Education, Delivered Through Online Learning
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-content-section">
        <div className="service-container">
          {/* Introduction */}
          <div className="service-intro">
            <h2>About Our International University Collaborations</h2>
            <p>
              We collaborate with well-established international universities to
              offer globally relevant degree and doctoral programs through
              flexible distance education. These partnerships allow learners to
              access international academic standards, modern curriculum, and
              globally aligned qualifications without relocating or interrupting
              their professional commitments.
            </p>
            <p>
              Our international university partners are known for their
              long-standing presence in higher education, strong academic
              research orientation, and learner-centric delivery models.
            </p>
          </div>

          {/* Why Choose */}
          <div className="service-benefits">
            <h2>Why Choose Our International University Programs?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>International Academic Framework</h3>
                <p>
                  Programs are designed in line with global higher education
                  frameworks, ensuring academic rigor, structured learning
                  pathways, and outcome-based education aligned with
                  international benchmarks.
                </p>
              </div>

              <div className="benefit-card">
                <h3>Flexible Distance Learning Model</h3>
                <p>
                  All programs are delivered through online and blended
                  distance-learning formats, making them ideal for working
                  professionals, entrepreneurs, and international students
                  seeking flexibility.
                </p>
              </div>

              <div className="benefit-card">
                <h3>Globally Relevant Curriculum</h3>
                <p>
                  Course structures focus on practical knowledge, applied
                  research, and industry relevance, preparing learners for
                  leadership roles, academic progression, and professional
                  growth across borders.
                </p>
              </div>

              <div className="benefit-card">
                <h3>International Faculty & Academic Mentorship</h3>
                <p>
                  Learners benefit from guidance and evaluation frameworks
                  developed by international academic experts, ensuring
                  consistency, quality, and academic credibility throughout the
                  program.
                </p>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div className="programs-recognition">
            <h2>Programs & Recognition</h2>

            <div className="programs-recognition-grid">
              {/* Left Side – Programs */}
              <div className="programs-section">
                <h3>Available Programs</h3>
                <ul>
                  <li>Undergraduate Degree Programs</li>
                  <li>Postgraduate Degree Programs</li>
                  <li>Doctoral & Research-Based Programs</li>
                  <li>Professional and Executive Programs</li>
                </ul>
                <p>
                  Each program follows the academic regulations, assessment
                  standards, and evaluation systems of the respective
                  international university.
                </p>
              </div>

              {/* Right Side – Recognition */}
              <div className="recognition-section">
                <h3>Recognition & Global Acceptance</h3>
                <ul>
                  <li>Academic progression</li>
                  <li>Professional development</li>
                  <li>Career advancement</li>
                  <li>International mobility (subject to local regulations)</li>
                  <li>
                    Recognition may vary by country, employer, or authority
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Partner Role */}
          <div className="service-process">
            <h2>Our Role as a Distance Education Partner</h2>
            <div className="process-steps">
              <div className="step-item">
                <div className="step-number">1</div>
                <h3>Student Counselling</h3>
                <p>
                  Guidance in selecting the right program based on academic
                  background and career goals.
                </p>
              </div>

              <div className="step-item">
                <div className="step-number">2</div>
                <h3>Admission Support</h3>
                <p>
                  Complete assistance with documentation and admission
                  procedures.
                </p>
              </div>

              <div className="step-item">
                <div className="step-number">3</div>
                <h3>Academic Coordination</h3>
                <p>
                  Ongoing academic coordination and learner support throughout
                  the study period.
                </p>
              </div>

              <div className="step-item">
                <div className="step-number">4</div>
                <h3>Continuous Communication</h3>
                <p>
                  We act as a bridge between learners and universities to ensure
                  a smooth academic journey.
                </p>
              </div>
              <div className="step-item">
                <div className="step-number">5</div>
                <h3>Application Tracking</h3>
                <p>
                  Regular updates on admission status, document verification,
                  and university communication throughout the enrollment
                  process.
                </p>
              </div>

              <div className="step-item">
                <div className="step-number">6</div>
                <h3>Ongoing Learner Support</h3>
                <p>
                  Continuous assistance with academic queries, program
                  coordination, and guidance until successful course completion.
                </p>
              </div>
            </div>
          </div>

          {/* Who Can Apply */}
          <div className="service-info-box">
            <h3>Who Can Apply?</h3>
            <ul>
              <li>
                Working professionals seeking international qualifications
              </li>
              <li>Graduates planning higher education or doctoral studies</li>
              <li>Entrepreneurs and managers aiming for global credentials</li>
              <li>Learners looking for flexible, distance-based education</li>
              <li>Eligibility varies by program and university policies</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="service-cta">
            <h2>Start Your International Education Journey</h2>
            <p>
              Take the next step toward a globally oriented qualification
              through our international university collaborations. Our advisors
              are ready to help you choose the right program.
            </p>
            <Link to="/contact" className="cta-button">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InternationalUniversities;
