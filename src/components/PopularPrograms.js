import React from 'react';
import { Link } from 'react-router-dom';
import './PopularPrograms.css';
import accountingImg from '../assets/images/programs/b_com.png';
import artsImg from '../assets/images/programs/b_ed.png';
import bbaImg from '../assets/images/programs/bba.png';
import bscImg from '../assets/images/programs/bs_c.png';
import engImg from '../assets/images/programs/eng.png';
import mbaImg from '../assets/images/programs/mba.png';

const PopularPrograms = () => {
  const programs = [
    {
      image: bbaImg,
      name: 'BBA',
      fullName: 'Bachelor of Business Administration',
      level: 'Undergraduate',
      duration: '3 Years',
      mode: 'Online / Distance',
      badge: 'Popular Choice',
      path: '/courses/bba'
    },
    {
      image: mbaImg,
      name: 'MBA',
      fullName: 'Master of Business Administration',
      level: 'Postgraduate',
      duration: '2 Years',
      mode: 'Executive / Online',
      badge: '#1 Top Rated',
      path: '/courses/mba'
    },
    {
      image: accountingImg,
      name: 'B.Com',
      fullName: 'Bachelor of Commerce',
      level: 'Undergraduate',
      duration: '3 Years',
      mode: 'Flexible Learning',
      badge: 'UGC Approved',
      path: '/courses/bcom'
    },
    {
      image: bscImg,
      name: 'B.Sc',
      fullName: 'Bachelor of Science',
      level: 'Undergraduate',
      duration: '3 Years',
      mode: 'Online / Distance',
      badge: 'Globally Valid',
      path: '/courses/bsc'
    },
    {
      image: artsImg,
      name: 'B.Ed',
      fullName: 'Bachelor of Education',
      level: 'Professional Degree',
      duration: '2 Years',
      mode: 'Distance Learning',
      badge: 'Career Oriented',
      path: '/courses/bed'
    },
    {
      image: engImg,
      name: 'M.Com',
      fullName: 'Master of Commerce',
      level: 'Postgraduate',
      duration: '2 Years',
      mode: 'Advanced Online',
      badge: 'WES Approved',
      path: '/courses/mcom'
    },
  ];

  return (
    <section className="popular-programs-section">
      <div className="popular-programs-container">
        {/* Section Header */}
        <div className="programs-header-wrapper">
          <span className="programs-subtitle-badge">GLOBALLY RECOGNIZED</span>
          <h2 className="popular-programs-heading">Popular Academic Programs</h2>
          <p className="popular-programs-subtext">
            Elevate your career with flexible, fully accredited degree programs tailored for working professionals and ambitious learners worldwide.
          </p>
        </div>

        {/* Modern Education Card Grid */}
        <div className="programs-cards-grid">
          {programs.map((program, index) => (
            <div key={index} className="modern-program-card">
              {/* Card Image Header with Badge */}
              <div className="card-image-container">
                <img 
                  src={program.image} 
                  alt={program.fullName}
                  className="card-banner-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="card-gradient-overlay"></div>
                <span className="card-highlight-badge">{program.badge}</span>
                <span className="card-level-tag">{program.level}</span>
              </div>

              {/* Card Body Content */}
              <div className="card-body-content">
                <div className="card-title-group">
                  <span className="card-short-name">{program.name}</span>
                  <h3 className="card-full-name">{program.fullName}</h3>
                </div>

                {/* Meta Highlights */}
                <div className="card-meta-list">
                  <div className="meta-pill">
                    <svg className="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>{program.duration}</span>
                  </div>
                  <div className="meta-pill">
                    <svg className="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                    <span>{program.mode}</span>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="card-footer-action">
                  <Link to={program.path} className="card-explore-btn">
                    <span>Explore Program</span>
                    <svg className="btn-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Programs Action */}
        <div className="programs-bottom-action">
          <Link to="/courses" className="view-all-courses-btn">
            View All Courses & Degrees
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularPrograms;
