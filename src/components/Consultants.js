import React from 'react';
import './Consultants.css';
import consultantImg from '../assets/images/consultants/buss.png';
import studentCentricIcon from '../assets/images/icons/svg.png';
import comprehensiveSupportIcon from '../assets/images/icons/svg.png';
import globalNetworkIcon from '../assets/images/icons/svg.png';

const Consultants = () => {
  const features = [
    {
      icon: studentCentricIcon,
      title: 'Student Centric Focus',
      description: 'We put your needs and aspirations at the forefront, tailoring our guidance to your individual journey.'
    },
    {
      icon: comprehensiveSupportIcon,
      title: 'Comprehensive Support',
      description: 'End-to-end assistance throughout your educational journey, from application to enrollment and beyond.'
    },
    {
      icon: globalNetworkIcon,
      title: 'Global Network',
      description: 'Access to a wide network of universities and educational institutions worldwide for better opportunities.'
    }
  ];

  return (
    <section className="consultants-section">
      <div className="consultants-container">
        <div className="consultants-images">
          <div className="consultant-image-wrapper">
            <img 
              src={consultantImg}
              alt="Consultants"
              className="consultant-image"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
        
        <div className="consultants-content">
          <div className="consultants-subheading">What makes us UNIQUE?</div>
          <h2 className="consultants-heading">Get to Know our Consultants</h2>
          <p className="consultants-description">
            In a realm of educational options, our distinctive approach defines Global Vision Education as the premier choice for students seeking unparalleled guidance.
          </p>
          
          <div className="consultants-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon-wrapper">
                  {feature.icon ? (
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="feature-icon-img"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  {/* Fallback SVG icon */}
                  <div className="feature-icon-fallback" style={{ display: feature.icon ? 'none' : 'flex' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultants;
