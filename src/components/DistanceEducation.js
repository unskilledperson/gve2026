import React from 'react';
import { Link } from 'react-router-dom';
import './DistanceEducation.css';
import Header from './Header';
import Footer from './Footer';
import distanceImage from '../assets/images/hero/distance.png';

const DistanceEducation = () => {
  return (
    <div className="service-detail-page">
      <Header />

      {/* Hero Section */}
      <section className="service-hero" style={{ backgroundImage: `url(${distanceImage})` }}>
        <div className="service-hero-overlay"></div>
        <div className="service-hero-content">
          <h1 className="service-hero-title">Distance Education</h1>
          <p className="service-hero-subtitle">Flexible Learning Solutions for Your Career Advancement</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="service-content-section">
        <div className="service-container">
          {/* Introduction */}
          <div className="service-intro">
            <h2>What is Distance Education?</h2>
            <p>
              Distance Education offers you the flexibility to pursue higher education while maintaining your professional and personal commitments. Our distance learning programs are designed for working professionals, parents, and individuals who need a flexible approach to education without compromising on quality or recognition.
            </p>
          </div>

          {/* Benefits */}
          <div className="service-benefits">
            <h2>Benefits of Distance Education</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#006772"/>
                  </svg>
                </div>
                <h3>Flexible Schedule</h3>
                <p>Study at your own pace and convenience, fitting your education around your work and family life.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17V12L12 17L2 12V17Z" fill="#006772"/>
                  </svg>
                </div>
                <h3>Recognized Degrees</h3>
                <p>All our distance education programs are recognized by UGC-DEB and other relevant authorities.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#006772"/>
                  </svg>
                </div>
                <h3>Cost-Effective</h3>
                <p>Affordable tuition fees without the additional costs of relocation, accommodation, and daily commuting.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.4 7 14.8 7.56 15.7 8.3L16.5 9.5L18.2 8.8C18.7 9.5 19 10.2 19 11H17C17 9.9 16.1 9 15 9H13V7H12ZM6 11C6 9.9 6.9 9 8 9H10V11H8C6.9 11 6 10.1 6 11Z" fill="#006772"/>
                  </svg>
                </div>
                <h3>Expert Support</h3>
                <p>Dedicated academic counselors and support staff to guide you throughout your learning journey.</p>
              </div>
            </div>
          </div>

          {/* Programs Offered */}
          <div className="service-programs">
            <h2>Programs Available Through Distance Education</h2>
            <div className="programs-list">
              <div className="program-item">
                <h3>Undergraduate Programs</h3>
                <ul>
                  <li>Bachelor of Business Administration (BBA)</li>
                  <li>Bachelor of Commerce (B.Com)</li>
                  <li>Bachelor of Arts (BA)</li>
                  <li>Bachelor of Science (B.Sc)</li>
                  <li>Bachelor of Education (B.Ed)</li>
                </ul>
              </div>
              <div className="program-item">
                <h3>Postgraduate Programs</h3>
                <ul>
                  <li>Master of Business Administration (MBA)</li>
                  <li>Master of Commerce (M.Com)</li>
                  <li>Master of Science (M.Sc)</li>
                  <li>Master of Arts (MA)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="service-process">
            <h2>How It Works</h2>
            <div className="process-steps">
              <div className="step-item">
                <div className="step-number">1</div>
                <h3>Consultation</h3>
                <p>Schedule a free consultation with our education counselors to understand your career goals and choose the right program.</p>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <h3>Application</h3>
                <p>Complete the application process with our assistance. We'll help you with documentation and submission.</p>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <h3>Enrollment</h3>
                <p>Once admitted, you'll receive access to study materials and online learning resources.</p>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <h3>Learning</h3>
                <p>Study at your own pace with online support, webinars, and access to digital libraries.</p>
              </div>
              <div className="step-item">
                <div className="step-number">5</div>
                <h3>Examinations</h3>
                <p>Attend examinations at designated centers. We provide guidance on exam preparation and scheduling.</p>
              </div>
              <div className="step-item">
                <div className="step-number">6</div>
                <h3>Certification</h3>
                <p>Receive your recognized degree certificate upon successful completion of the program.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="service-cta">
            <h2>Ready to Start Your Distance Learning Journey?</h2>
            <p>Contact us today to learn more about our distance education programs and find the perfect fit for your career goals.</p>
            <Link to="/contact" className="cta-button">Get Started</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DistanceEducation;



