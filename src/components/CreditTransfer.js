import React from 'react';
import { Link } from 'react-router-dom';
import './CreditTransfer.css';
import Header from './Header';
import Footer from './Footer';
import creditImage from '../assets/images/hero/credit.png';

const CreditTransfer = () => {
  return (
    <div className="service-detail-page">
      <Header />

      {/* Hero Section */}
      <section className="service-hero" style={{ backgroundImage: `url(${creditImage})` }}>
        <div className="service-hero-overlay"></div>
        <div className="service-hero-content">
          <h1 className="service-hero-title">Credit Transfer</h1>
          <p className="service-hero-subtitle">Transfer Your Academic Credits Seamlessly</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="service-content-section">
        <div className="service-container">
          {/* Introduction */}
          <div className="service-intro">
            <h2>What is Credit Transfer?</h2>
            <p>
              Credit transfer allows you to transfer academic credits earned from one educational institution to another, enabling you to continue your education without repeating courses you've already completed. This is particularly useful when you want to switch universities, continue your education after a gap, or pursue higher studies at a different institution. Our credit transfer services help you maximize your previous academic achievements and reduce both time and cost in completing your degree.
            </p>
          </div>

          {/* Benefits */}
          <div className="service-benefits">
            <h2>Benefits of Credit Transfer</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#006772"/>
                  </svg>
                </div>
                <h3>Save Time</h3>
                <p>Complete your degree faster by transferring previously earned credits, reducing your overall study duration.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17V12L12 17L2 12V17Z" fill="#006772"/>
                  </svg>
                </div>
                <h3>Save Money</h3>
                <p>Reduce tuition costs by not having to retake courses you've already completed successfully.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#006772"/>
                  </svg>
                </div>
                <h3>Flexibility</h3>
                <p>Switch between institutions or programs without losing your academic progress.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#006772"/>
                  </svg>
                </div>
                <h3>Academic Continuity</h3>
                <p>Maintain continuity in your education journey, even when changing institutions or locations.</p>
              </div>
            </div>
          </div>

          {/* Eligibility */}
          <div className="service-programs">
            <h2>Who Can Transfer Credits?</h2>
            <div className="programs-list">
              <div className="program-item">
                <h3>Students Transferring Between Universities</h3>
                <ul>
                  <li>Switching from one university to another</li>
                  <li>Changing programs or specializations</li>
                  <li>Pursuing higher education after a gap</li>
                </ul>
              </div>
              <div className="program-item">
                <h3>International Students</h3>
                <ul>
                  <li>Moving to a new country for studies</li>
                  <li>Transferring credits from home country institutions</li>
                  <li>Continuing education in the UAE</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="service-process">
            <h2>Credit Transfer Process</h2>
            <div className="process-steps">
              <div className="step-item">
                <div className="step-number">1</div>
                <h3>Initial Assessment</h3>
                <p>Submit your transcripts and course descriptions for evaluation. We'll assess which credits are eligible for transfer.</p>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <h3>Document Verification</h3>
                <p>We verify the authenticity of your academic documents and ensure they meet the receiving institution's requirements.</p>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <h3>Credit Evaluation</h3>
                <p>Our academic advisors evaluate your courses to determine credit equivalency and transferability.</p>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <h3>Institution Coordination</h3>
                <p>We coordinate with both the sending and receiving institutions to facilitate the credit transfer process.</p>
              </div>
              <div className="step-item">
                <div className="step-number">5</div>
                <h3>Application Submission</h3>
                <p>We help you submit the credit transfer application along with all required documentation.</p>
              </div>
              <div className="step-item">
                <div className="step-number">6</div>
                <h3>Confirmation</h3>
                <p>Once approved, you'll receive confirmation of transferred credits and can continue your studies seamlessly.</p>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="service-info-box">
            <h3>Credit Transfer Requirements</h3>
            <ul>
              <li>Official transcripts from previously attended institutions</li>
              <li>Course descriptions and syllabi for courses to be transferred</li>
              <li>Minimum grade requirement (typically C or above)</li>
              <li>Course relevance to the new program of study</li>
              <li>Accreditation status of the previous institution</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="service-cta">
            <h2>Ready to Transfer Your Credits?</h2>
            <p>Let us help you make the most of your previous academic achievements and streamline your path to graduation.</p>
            <Link to="/contact" className="cta-button">Get Started</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreditTransfer;