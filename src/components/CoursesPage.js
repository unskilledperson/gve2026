import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./CoursesPage.css";
import Header from "./Header";
import Footer from "./Footer";
import heroImage from "../assets/images/hero/image 26.png";
import graduationImage from "../assets/images/hero/graduation.png";
import tickIcon from "../assets/images/icons/circle-check-big.png";
import overlay11 from "../assets/images/course/Overlay (11).png";
import overlay12 from "../assets/images/course/Overlay (12).png";
import overlay13 from "../assets/images/course/Overlay (13).png";
import overlay14 from "../assets/images/course/Overlay (14).png";
import overlay15 from "../assets/images/course/Overlay (15).png";
import overlay16 from "../assets/images/course/Overlay (16).png";
import overlay17 from "../assets/images/course/Overlay (17).png";
import overlay18 from "../assets/images/course/Overlay (18).png";
import overlay19 from "../assets/images/course/Overlay (19).png";
import overlay20 from "../assets/images/course/Overlay (20).png";
import overlay21 from "../assets/images/course/Overlay (21).png";
import overlay22 from "../assets/images/course/Overlay (22).png";
import overlay23 from "../assets/images/course/Overlay (23).png";
import overlay24 from "../assets/images/course/Overlay (24).png";
import overlay25 from "../assets/images/course/Overlay (25).png";

const CoursesPage = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState({});
  const elementsRef = useRef({});

  useEffect(() => {
    const handleHashScroll = () => {
      if (location.hash) {
        const elementId = location.hash.substring(1);
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    handleHashScroll();

    // Also handle hash changes (e.g., when clicking links on the same page)
    const handleHashChange = () => {
      handleHashScroll();
    };
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [location]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.dataset.key]: true,
          }));
        }
      });
    }, observerOptions);

    // Copy ref value to avoid stale closure
    const currentElements = elementsRef.current;

    Object.values(currentElements).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      Object.values(currentElements).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const secondaryOverlays = [overlay12, overlay11];
  const undergraduateOverlays = [
    overlay13,
    overlay14,
    overlay15,
    overlay16,
    overlay17,
    overlay18,
  ];
  const postgraduateOverlays = [
    overlay19,
    overlay20,
    overlay21,
    overlay22,
    overlay23,
    overlay24,
    overlay25,
  ];

  const secondaryPrograms = [
    {
      title: "10th Grade",
      description:
        "Foundation for higher education with essential knowledge in languages,…",
      duration: "2 Years",
    },
    {
      title: "12th Grade / +2",
      description:
        "Academic milestone preparing students for undergraduate studies in Science.",
      duration: "2 Years",
    },
  ];

  const undergraduatePrograms = [
    {
      title: "BBA",
      description:
        "Core business and management skills for careers in administration and leadership.",
      duration: "3 Years",
    },
    {
      title: "BCA",
      description:
        "Practical coding and IT skills for building a career in the software and tech industry.",
      duration: "3 Years",
    },
    {
      title: "BA",
      description:
        "Humanities skills for careers in media, education, and public service.",
      duration: "3 Years",
    },
    {
      title: "BSc",
      description:
        "Core science training for roles in labs, healthcare, and technical fields.",
      duration: "3 Years",
    },
    {
      title: "BCom",
      description:
        "Essential accounting and finance training for diverse business careers.",
      duration: "3 Years",
    },
    {
      title: "B.Ed",
      description:
        "Core teaching skills for careers in education and classroom leadership.",
      duration: "2 Years",
    },
  ];

  const postgraduatePrograms = [
    {
      title: "MBA",
      description:
        "Strategic business skills for careers in finance, marketing, HR, and operations.",
      duration: "2 Years",
      path: "/courses/mba",
    },
    {
      title: "MCA",
      description:
        "Advanced software and IT skills for specialized roles in the tech industry.",
      duration: "2 Years",
      path: "/courses/mca",
    },
    {
      title: "MA",
      description:
        "Specialized humanities skills for roles in education, research, and creative fields.",
      duration: "2 Years",
      path: "/courses/ma",
    },
    {
      title: "MSc",
      description:
        "Specialized science skills for professional lab and research roles.",
      duration: "2 Years",
      path: "/courses/msc",
    },
    {
      title: "M.Com",
      description:
        "Commerce specialization for careers in banking, taxation, and finance.",
      duration: "2 Years",
      path: "/courses/mcom",
    },
    {
      title: "M.Ed",
      description:
        "Education expertise for careers in research, policy, and academic management.",
      duration: "2 Years",
      path: "/courses/med",
    },
  ];

  return (
    <div className="courses-page">
      <Header />

      {/* Hero Section */}
      <section className="courses-hero" style={{ '--bg-image': `url(${graduationImage})` }}>
        <div className="courses-hero-container">
          {/* Left Content */}
          <div 
            className={`courses-hero-content ${isVisible.heroContent ? 'animate-slide-in-left' : ''}`}
            ref={(el) => (elementsRef.current.heroContent = el)}
            data-key="heroContent"
          >
            <h1 className="courses-hero-title">
              <span className="title-line">Your Pathway to the</span>
              <span className="title-line">Right Career Starts</span>
              <span className="title-line">Here!</span>
            </h1>
            <div className="courses-hero-buttons">
              <button className="courses-btn-primary animate-pulse-button">Explore Programs</button>
              <button className="courses-btn-secondary animate-pulse-button" style={{ animationDelay: '0.1s' }}>Get Guidance</button>
            </div>
          </div>

          {/* Right Image */}
          <div 
            className={`courses-hero-image-wrapper ${isVisible.heroImage ? 'animate-slide-in-right' : ''}`}
            ref={(el) => (elementsRef.current.heroImage = el)}
            data-key="heroImage"
          >
            <img
              src={heroImage}
              alt="Student reading"
              className="courses-hero-image animate-float"
            />

            {/* Floating Info Boxes */}
            <div className="floating-info-box floating-box-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="info-icon-box animate-pulse-subtle">
                <span className="info-icon-text">9+</span>
              </div>
              <div className="info-text">
                <span>Academic</span>
                <span>Partners</span>
              </div>
            </div>
            <div className="floating-info-box floating-box-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="info-icon-box animate-pulse-subtle">
                <img
                  src={tickIcon}
                  alt="Checkmark"
                  className="info-checkmark"
                />
              </div>
              <div className="info-text">
                <span>Expert</span>
                <span>Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section - Top */}
      <section className="courses-section-top">
        <div className="courses-section-container">
          <h2 
            className={`courses-section-heading ${isVisible.sectionHeading ? 'animate-fade-in-scale' : ''}`}
            ref={(el) => (elementsRef.current.sectionHeading = el)}
            data-key="sectionHeading"
          >
            <span className="heading-line">
              Find the Course That{" "}
              <span className="highlight-teal">Shapes</span>
            </span>
            <span className="heading-line">
              <span className="highlight-teal">Your Future</span>
            </span>
          </h2>
          <p className="courses-section-description animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Explore our comprehensive range of undergraduate and postgraduate
            programs designed to help you succeed.
          </p>
        </div>
      </section>

      {/* Courses Section - Bottom with gradient */}
      <section className="courses-section">
        <div className="courses-section-container">
          {/* Secondary Education */}
          <div className="program-section">
            <div className="secondary-education-container">
              <h3 className="program-section-title">Secondary Education</h3>
              <p className="program-section-subtitle">
                Build a strong foundation for your academic journey.
              </p>
              <div className="secondary-education-cards-wrapper">
                {secondaryPrograms.map((program, index) => (
                  <div 
                    key={index} 
                    className={`secondary-education-card animate-fade-in-up`}
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <div className="secondary-card-icon">
                      <img src={secondaryOverlays[index]} alt={program.title} />
                    </div>
                    <h4 className="secondary-card-title">{program.title}</h4>
                    <p className="secondary-card-description">
                      {program.description}
                    </p>
                    {program.title === "10th Grade" ? (
                      <Link
                        to="/courses/10th-grade"
                        className="secondary-card-read-more"
                      >
                        Read More →
                      </Link>
                    ) : program.title === "12th Grade / +2" ? (
                      <Link
                        to="/courses/12th-grade"
                        className="secondary-card-read-more"
                      >
                        Read More →
                      </Link>
                    ) : (
                      <span className="secondary-card-read-more">
                        Read More →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Undergraduate Programs */}
          <div id="bachelors" className="program-section undergraduate-programs-section">
            <h3 className="program-section-title">Undergraduate Programs</h3>
            <p className="program-section-subtitle">
              Launch your career with industry-relevant bachelor's degrees.
            </p>
            <div className="undergraduate-cards-grid">
              {undergraduatePrograms.map((program, index) => (
                <div 
                  key={index} 
                  className={`undergraduate-card animate-fade-in-up`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="undergraduate-card-icon">
                    <img
                      src={undergraduateOverlays[index]}
                      alt={program.title}
                    />
                  </div>
                  <h4 className="undergraduate-card-title">{program.title}</h4>
                  <p className="undergraduate-card-description">
                    {program.description}
                  </p>
                  <div className="undergraduate-card-footer">
                    <span className="undergraduate-duration">
                      {program.duration}
                    </span>
                    {program.title === "BBA" ? (
                      <Link
                        to="/courses/bba"
                        className="undergraduate-read-more"
                      >
                        Read More →
                      </Link>
                    ) : program.title === "BCA" ? (
                      <Link
                        to="/courses/bca"
                        className="undergraduate-read-more"
                      >
                        Read More →
                      </Link>
                    ) : program.title === "BA" ? (
                      <Link
                        to="/courses/ba"
                        className="undergraduate-read-more"
                      >
                        Read More →
                      </Link>
                    ) : program.title === "BSc" ? (
                      <Link
                        to="/courses/bsc"
                        className="undergraduate-read-more"
                      >
                        Read More →
                      </Link>
                    ) : program.title === "BCom" ? (
                      <Link
                        to="/courses/bcom"
                        className="undergraduate-read-more"
                      >
                        Read More →
                      </Link>
                    ) : program.title === "B.Ed" ? (
                      <Link
                        to="/courses/bed"
                        className="undergraduate-read-more"
                      >
                        Read More →
                      </Link>
                    ) : (
                      <span className="undergraduate-read-more">
                        Read More →
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Postgraduate Programs */}
          <div id="masters" className="program-section postgraduate-programs-section">
            <h3 className="program-section-title">Postgraduate Programs</h3>
            <p className="program-section-subtitle">
              Advance your expertise with specialized master's programs.
            </p>
            <div className="postgraduate-cards-container">
              {/* First Row - 4 cards */}
              <div className="postgraduate-cards-row postgraduate-cards-row-first">
                {postgraduatePrograms.slice(0, 4).map((program, index) => (
                  <div 
                    key={index} 
                    className={`postgraduate-card animate-fade-in-up`}
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <div className="postgraduate-card-icon">
                      <img
                        src={postgraduateOverlays[index]}
                        alt={program.title}
                      />
                    </div>
                    <h4 className="postgraduate-card-title">{program.title}</h4>
                    <p className="postgraduate-card-description">
                      {program.description}
                    </p>
                    <div className="postgraduate-card-footer">
                      <span className="postgraduate-duration">
                        {program.duration}
                      </span>
                      <Link to={program.path} className="postgraduate-read-more">
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              {/* Second Row - 3 cards centered */}
              <div className="postgraduate-cards-row postgraduate-cards-row-second">
                {postgraduatePrograms.slice(4, 7).map((program, index) => (
                  <div 
                    key={index + 4} 
                    className={`postgraduate-card animate-fade-in-up`}
                    style={{ animationDelay: `${0.1 * (index + 4)}s` }}
                  >
                    <div className="postgraduate-card-icon">
                      <img
                        src={postgraduateOverlays[index + 4]}
                        alt={program.title}
                      />
                    </div>
                    <h4 className="postgraduate-card-title">{program.title}</h4>
                    <p className="postgraduate-card-description">
                      {program.description}
                    </p>
                    <div className="postgraduate-card-footer">
                      <span className="postgraduate-duration">
                        {program.duration}
                      </span>
                      <Link to={program.path} className="postgraduate-read-more">
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CoursesPage;
