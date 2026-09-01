import React from 'react';
import './WelcomeSection.css';
import graduatesImage from '../assets/images/welcome/grp.png';

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-container">
        {/* Left Side - Image */}
        <div className="welcome-images">
          <div className="image-wrapper">
            <img 
              src={graduatesImage} 
              alt="Students celebrating graduation and academic achievement" 
              className="welcome-img"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="welcome-content">
          <div className="welcome-text">
            <div className="welcome-heading-wrapper">
              <div className="welcome-subtitle">Welcome to</div>
              <h2 className="welcome-title">
                <span className="welcome-title-line">GLOBAL VISION</span>
                <span className="welcome-title-line">EDUCATION</span>
              </h2>
            </div>
            <p>
              Global Vision Education was established to address a growing challenge in the UAE. Many professionals wanted to continue their education, but traditional classroom schedules, long commutes and work commitments made it difficult to pursue higher studies. We recognised this gap and set out to create a streamlined pathway that allows individuals to upgrade their qualifications without disrupting their daily responsibilities.
            </p>
            <p>
              Our journey began with a clear goal, to make education more flexible, accessible and easier to manage for people balancing work, family and career growth. From the start, we focused on offering dependable guidance, a simple admission process and continuous support that keeps learners confident throughout their academic journey.
            </p>
            <p>
              Today, Global Vision Education remains committed to this purpose. We continue to help learners achieve their goals by providing honest advice, structured processes and an approach that respects the realities of modern professional life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;

