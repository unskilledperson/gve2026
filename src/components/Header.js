import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import companyLogo from "../assets/images/logo 1.png";
import ConsultationPopup from "./ConsultationPopup";
import { lockBodyScroll } from "../utils/bodyScrollLock";

const Header = () => {
  const [courseDropdown, setCourseDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".header-container")) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      // Lock vertical scroll only while the mobile menu is open
      const unlock = lockBodyScroll();
      return () => {
        document.removeEventListener("click", handleClickOutside);
        unlock();
      };
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <img
            src={companyLogo}
            alt="Global Vision Education Consultants Logo"
            className="company-logo"
            onError={(e) => {
              e.target.style.display = "none";
              const fallback = e.target.nextElementSibling;
              if (fallback) fallback.style.display = "flex";
            }}
          />
          <div className="logo-fallback" style={{ display: "none" }}>
            <div className="logo-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#14b8a6" />
                <path d="M20 10L25 15H22V25H18V15H15L20 10Z" fill="white" />
                <rect x="18" y="25" width="4" height="5" fill="white" />
              </svg>
            </div>
            <div className="logo-text">
              <div className="logo-main">Global Vision</div>
              <div className="logo-subtitle">EDUCATION CONSULTANTS</div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={isMobileMenuOpen ? "hamburger open" : "hamburger"}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Navigation */}
        <nav className={`nav-menu ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <Link
            to="/"
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => !isMobile && setServicesDropdown(true)}
            onMouseLeave={() => !isMobile && setServicesDropdown(false)}
            onClick={() => isMobile && setServicesDropdown(!servicesDropdown)}
          >
            <Link to="/services" className="nav-link">
              Services
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "4px", display: "inline-block" }}
              >
                <path
                  d="M2 4L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            {servicesDropdown && (
              <div
                className="dropdown-menu"
                onMouseEnter={() => !isMobile && setServicesDropdown(true)}
                onMouseLeave={() => !isMobile && setServicesDropdown(false)}
                onClick={(e) => e.stopPropagation()}
              >
                <Link
                  to="/services/distance-education"
                  className="dropdown-item"
                  onClick={() => {
                    setServicesDropdown(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Distance education
                </Link>
                <Link
                  to="/services/certificate-attestation"
                  className="dropdown-item"
                  onClick={() => {
                    setServicesDropdown(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Certificate attestation
                </Link>
                <Link
                  to="/services/credit-transfer"
                  className="dropdown-item"
                  onClick={() => {
                    setServicesDropdown(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Credit transfer
                </Link>
                <Link
                  to="/services/equivalency-certificate"
                  className="dropdown-item"
                  onClick={() => {
                    setServicesDropdown(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Equivalency Services
                </Link>
                <Link
                  to="/services/international-universities"
                  className="dropdown-item"
                  onClick={() => {
                    setServicesDropdown(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  International Universities
                </Link>
              </div>
            )}
          </div>

          {/* Course Dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => !isMobile && setCourseDropdown(true)}
            onMouseLeave={() => !isMobile && setCourseDropdown(false)}
            onClick={() => isMobile && setCourseDropdown(!courseDropdown)}
          >
            <Link to="/courses" className="nav-link">
              Course
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "4px", display: "inline-block" }}
              >
                <path
                  d="M2 4L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            {courseDropdown && (
              <div
                className="dropdown-menu"
                onMouseEnter={() => !isMobile && setCourseDropdown(true)}
                onMouseLeave={() => !isMobile && setCourseDropdown(false)}
                onClick={(e) => e.stopPropagation()}
              >
                <Link
                  to="/courses#bachelors"
                  className="dropdown-item"
                  onClick={() => {
                    setCourseDropdown(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Bachelors
                </Link>
                <Link
                  to="/courses#masters"
                  className="dropdown-item"
                  onClick={() => {
                    setCourseDropdown(false);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Masters
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Mobile-only CTA inside menu */}
          <button
            type="button"
            className="nav-consultation-btn mobile-only"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsPopupOpen(true);
            }}
          >
            Free Consultation
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <button
            className="btn-consultation"
            onClick={() => setIsPopupOpen(true)}
          >
            Free Consultation
          </button>
        </div>
      </div>
      <ConsultationPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </header>
  );
};

export default Header;
