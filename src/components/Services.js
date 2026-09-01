import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Distance Education',
      path: '/services/distance-education'
    },
    {
      title: 'Certificate Attestation',
      path: '/services/certificate-attestation'
    },
    {
      title: 'Credit Transfer',
      path: '/services/credit-transfer'
    },
    {
      title: 'Equivalency Services',
      path: '/services/equivalency-certificate'
    }
  ];

  return (
    <section className="services-section" id="services">
      {/* Upper Section - Cream Background */}
      <div className="services-upper">
        <div className="services-upper-content">
          <div className="services-upper-inner">
            <div className="services-label">Our Services</div>
            <h2 className="services-heading">Complete Support for Your Educational Journey</h2>
          </div>
        </div>
        <div className="services-curve"></div>
      </div>

      {/* Lower Section - Dark Teal Background with Cards */}
      <div className="services-lower">
        <div className="services-container">
          <div className="application-process-grid">
            {services.map((service, index) => (
              <Link key={index} to={service.path} className="application-process-card">
                <div className="application-process-icon-wrapper">
                  {index === 0 && (
                    <svg className="application-process-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17V12L12 17L2 12V17Z" fill="white"/>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="application-process-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="white"/>
                      <path d="M9 15L11 17L15 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="application-process-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="white"/>
                    </svg>
                  )}
                  {index === 3 && (
                    <svg className="application-process-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="white"/>
                    </svg>
                  )}
                </div>
                <h3 className="application-process-title">{service.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

