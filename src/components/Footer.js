import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import companyLogo from '../assets/images/logo 1.png';
import twitterIcon from '../assets/images/icons/twitter (1).png';
import facebookIcon from '../assets/images/icons/facebook (2).png';
import instagramIcon from '../assets/images/icons/instagram.png';
import linkedinIcon from '../assets/images/icons/linkedin (1).png';
import phoneIcon from '../assets/images/icons/Overlay (4).png';
import locationIcon from '../assets/images/icons/map-pin.png';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Call-to-Action Heading */}
        <h2 className="footer-cta-heading">Start your learning journey today.</h2>

        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Column 1 - Company Information with Logo */}
          <div className="footer-column footer-company">
            <div className="footer-logo">
              <img 
                src={companyLogo} 
                alt="Global Vision Education Consultants Logo" 
                className="footer-company-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallback = e.target.nextElementSibling;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="logo-fallback" style={{ display: 'none' }}>
                <div className="logo-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#14b8a6"/>
                    <path d="M20 10L25 15H22V25H18V15H15L20 10Z" fill="white"/>
                    <rect x="18" y="25" width="4" height="5" fill="white"/>
                  </svg>
                </div>
                <div className="logo-text">
                  <div className="logo-main">Global Vision</div>
                  <div className="logo-subtitle">EDUCATION CONSULTANTS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/courses">Course</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Contact Information */}
          <div className="footer-column">
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-contact-info">
              <div className="footer-phone">
                <a href="tel:+971506191844" className="footer-phone-link">
                  <img src={phoneIcon} alt="Phone" className="footer-icon" />
                  +971 50 619 1844
                </a>
                <a href="tel:+97145793444" className="footer-phone-link">
                  <img src={phoneIcon} alt="Phone" className="footer-icon" />
                  +971 4 579 3444
                </a>
              </div>
            </div>
          </div>

          {/* Column 4 - Address Locations */}
          <div className="footer-column">
            <h3 className="footer-heading">Our Locations</h3>
            <div className="footer-addresses">
              <a 
                href="https://www.google.com/maps?q=Ontario+Tower+-+1604+-+Office+Building,+17+1701-22+-+Business+Bay+-+Dubai+-+United+Arab+Emirates" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-address-link"
              >
                <span className="footer-icon-badge">
                  <img src={locationIcon} alt="Location" className="footer-icon" />
                </span>
                <span className="footer-address-text">Ontario Tower - 1604 - Office Building, 17 1701-22 - Business Bay - Dubai - United Arab Emirates</span>
              </a>
              <a 
                href="https://maps.app.goo.gl/S8J3rN54mYGpyQdw8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-address-link"
              >
                <span className="footer-icon-badge">
                  <img src={locationIcon} alt="Location" className="footer-icon" />
                </span>
                <span className="footer-address-text">KM Trading, Al Ferdous Tower - 15th Floor, Office No. 27- Building Al Salam</span>
              </a>
            </div>
          </div>

        </div>

        {/* Separator Line */}
        <div className="footer-separator"></div>

        {/* Bottom Section - Copyright and Social Media */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © Global Vision Education. All Rights Reserved.
          </div>
          <div className="footer-social">
            <a href="https://x.com/globalvision_34" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-twitter" aria-label="Twitter">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://www.facebook.com/GLOBALVISIONEDUCATIONUAE" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-facebook" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/globaleducation.ae/" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-instagram" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/global-vision-education-107978180/" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-linkedin" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

