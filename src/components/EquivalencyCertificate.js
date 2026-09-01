import React from "react";
import { Link } from "react-router-dom";
import "./EquivalencyCertificate.css";
import Header from "./Header";
import Footer from "./Footer";
import equivalenceImage from "../assets/images/hero/equivalence.png";

const EquivalencyCertificate = () => {
  return (
    <div className="service-detail-page">
      <Header />

      {/* Hero Section */}
      <section
        className="service-hero"
        style={{ backgroundImage: `url(${equivalenceImage})` }}
      >
        <div className="service-hero-overlay"></div>
        <div className="service-hero-content">
          <h1 className="service-hero-title">Equivalency Services</h1>
          <p className="service-hero-subtitle">
            Get Your Foreign Qualifications Recognized in the UAE
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="service-content-section">
        <div className="service-container">
          {/* Introduction */}
          <div className="service-intro">
            <h2>What is an Equivalency Services?</h2>
            <p>
              An Equivalency Services is an official document issued by the UAE
              Ministry of Education that recognizes your foreign educational
              qualifications as equivalent to UAE qualifications. This
              certificate is essential for employment in government and
              semi-government sectors, professional licensing, and further
              education in the UAE. It validates that your international degree,
              diploma, or certificate meets the standards and requirements set
              by the UAE educational system.
            </p>
          </div>

          {/* Benefits */}
          <div className="service-benefits">
            <h2>Why Do You Need an Equivalency Services?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                      fill="#006772"
                    />
                  </svg>
                </div>
                <h3>Employment Opportunities</h3>
                <p>
                  Required for jobs in government, semi-government, and many
                  private sector positions in the UAE.
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17V12L12 17L2 12V17Z"
                      fill="#006772"
                    />
                  </svg>
                </div>
                <h3>Professional Licensing</h3>
                <p>
                  Necessary for obtaining professional licenses in fields such
                  as medicine, engineering, and law.
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                      fill="#006772"
                    />
                  </svg>
                </div>
                <h3>Higher Education</h3>
                <p>
                  Essential for admission to UAE universities and for pursuing
                  postgraduate studies.
                </p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                      fill="#006772"
                    />
                  </svg>
                </div>
                <h3>Visa & Residency</h3>
                <p>
                  May be required for certain visa categories and residency
                  applications in the UAE.
                </p>
              </div>
            </div>
          </div>

          {/* Documents Required */}
          <div className="service-programs">
            <h2>Documents Required for Equivalency Services</h2>
            <div className="programs-list">
              <div className="program-item">
                <h3>Educational Documents</h3>
                <ul>
                  <li>Original degree certificate or diploma</li>
                  <li>Official transcripts or mark sheets</li>
                  <li>Course descriptions (if required)</li>
                  <li>Previous educational certificates (10th, 12th grade)</li>
                </ul>
              </div>
              <div className="program-item">
                <h3>Supporting Documents</h3>
                <ul>
                  <li>Passport copy (valid)</li>
                  <li>Emirates ID (if applicable)</li>
                  <li>Passport size photographs</li>
                  <li>Attested copies of all educational documents</li>
                  <li>Translation of documents (if not in English/Arabic)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="service-process">
            <h2>Equivalency Services Process</h2>
            <div className="process-steps">
              <div className="step-item">
                <div className="step-number">1</div>
                <h3>Document Preparation</h3>
                <p>
                  We help you gather and prepare all required documents,
                  ensuring they meet the Ministry of Education's specifications.
                </p>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <h3>Attestation</h3>
                <p>
                  All documents are properly attested from the issuing country's
                  authorities, embassy, and MOFA UAE.
                </p>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <h3>Translation</h3>
                <p>
                  Documents are translated into Arabic or English by certified
                  translators, if required.
                </p>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <h3>Application Submission</h3>
                <p>
                  We submit your application to the UAE Ministry of Education
                  along with all required documents.
                </p>
              </div>
              <div className="step-item">
                <div className="step-number">5</div>
                <h3>Evaluation</h3>
                <p>
                  The Ministry evaluates your qualifications and determines
                  their equivalency to UAE standards.
                </p>
              </div>
              <div className="step-item">
                <div className="step-number">6</div>
                <h3>Certificate Issuance</h3>
                <p>
                  Once approved, the Equivalency Services is issued and
                  delivered to you for official use.
                </p>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="service-info-box">
            <h3>Important Information</h3>
            <ul>
              <li>
                The process typically takes 4-8 weeks, depending on document
                completeness and Ministry processing times.
              </li>
              <li>
                All documents must be original and properly attested before
                submission.
              </li>
              <li>
                The equivalency certificate is valid indefinitely once issued.
              </li>
              <li>
                Additional requirements may apply based on your country of
                qualification and field of study.
              </li>
              <li>
                Some qualifications may require additional verification or
                supplementary documents.
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="service-cta">
            <h2>Need Help with Equivalency Services?</h2>
            <p>
              Our experienced team will guide you through every step of the
              equivalency services process, ensuring your qualifications are
              properly recognized in the UAE.
            </p>
            <Link to="/contact" className="cta-button">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EquivalencyCertificate;
