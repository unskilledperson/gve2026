import React from 'react';
import { Link } from 'react-router-dom';
import './CertificateAttestation.css';
import Header from './Header';
import Footer from './Footer';
import certificateImage from '../assets/images/hero/certificate.png';

const CertificateAttestation = () => {
  return (
    <div className="service-detail-page">
      <Header />

      {/* Hero Section */}
      <section className="service-hero" style={{ backgroundImage: `url(${certificateImage})` }}>
        <div className="service-hero-overlay"></div>
        <div className="service-hero-content">
          <h1 className="service-hero-title">Certificate Attestation</h1>
          <p className="service-hero-subtitle">Get Your Documents Attested for Official Recognition</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="service-content-section">
        <div className="service-container">
          {/* Introduction */}
          <div className="service-intro">
            <h2>What is Certificate Attestation?</h2>
            <p>
              Certificate attestation is the process of verifying the authenticity of your educational documents, certificates, and degrees by authorized government bodies. This is essential when you need to use your educational qualifications in another country, particularly in the UAE and other GCC countries. Our attestation services ensure your documents are legally recognized and accepted by employers, educational institutions, and government authorities.
            </p>
          </div>

          {/* Why Attestation */}
          <div className="service-benefits">
            <h2>Why Do You Need Certificate Attestation?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#006772"/>
                  </svg>
                </div>
                <h3>Legal Recognition</h3>
                <p>Your certificates become legally valid in foreign countries, enabling you to work, study, or migrate.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#006772"/>
                  </svg>
                </div>
                <h3>Employment Requirements</h3>
                <p>Many employers in the UAE require attested certificates for visa processing and job applications.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17V12L12 17L2 12V17Z" fill="#006772"/>
                  </svg>
                </div>
                <h3>Higher Education</h3>
                <p>Universities and colleges require attested documents for admission to their programs.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#006772"/>
                  </svg>
                </div>
                <h3>Government Services</h3>
                <p>Required for various government services, visa applications, and residency permits.</p>
              </div>
            </div>
          </div>

          {/* Types of Documents */}
          <div className="service-programs">
            <h2>Documents We Attest</h2>
            <div className="programs-list">
              <div className="program-item">
                <h3>Educational Certificates</h3>
                <ul>
                  <li>Degree Certificates (Bachelor's, Master's, Doctorate)</li>
                  <li>Diploma Certificates</li>
                  <li>School Certificates (10th, 12th Grade)</li>
                  <li>Transcripts and Mark Sheets</li>
                  <li>Professional Certificates</li>
                </ul>
              </div>
              <div className="program-item">
                <h3>Supporting Documents</h3>
                <ul>
                  <li>Passport Copies</li>
                  <li>Photographs</li>
                  <li>University Letters</li>
                  <li>Course Completion Certificates</li>
                  <li>Professional Licenses</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="service-process">
            <h2>Attestation Process</h2>
            <div className="process-steps">
              <div className="step-item">
                <div className="step-number">1</div>
                <h3>Document Collection</h3>
                <p>Submit your original certificates and required documents to our office. We'll verify all documents.</p>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <h3>Home Country Attestation</h3>
                <p>Documents are attested from the issuing authority in your home country (HRD, MEA, etc.).</p>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <h3>Embassy Attestation</h3>
                <p>Your documents are then attested by the respective embassy in your home country.</p>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <h3>Ministry of Foreign Affairs (MOFA)</h3>
                <p>Final attestation is completed at the Ministry of Foreign Affairs in the UAE.</p>
              </div>
              <div className="step-item">
                <div className="step-number">5</div>
                <h3>Quality Check</h3>
                <p>We perform a final quality check to ensure all attestations are complete and accurate.</p>
              </div>
              <div className="step-item">
                <div className="step-number">6</div>
                <h3>Document Delivery</h3>
                <p>Your fully attested documents are returned to you, ready for use in official processes.</p>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="service-info-box">
            <h3>Important Information</h3>
            <ul>
              <li>The attestation process typically takes 15-25 working days, depending on the country and document type.</li>
              <li>Original documents are required for attestation. Photocopies are not accepted.</li>
              <li>Some documents may require translation into Arabic or English before attestation.</li>
              <li>Processing times may vary based on embassy and government department schedules.</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="service-cta">
            <h2>Need Help with Certificate Attestation?</h2>
            <p>Our experienced team will guide you through the entire attestation process, ensuring all your documents are properly attested and ready for use.</p>
            <Link to="/contact" className="cta-button">Get Started</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertificateAttestation;



