import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import heroVideo from "../assets/images/hero/hero2.mp4";

// Store video path immediately - no lazy loading
const VIDEO_PATH = heroVideo;

const Hero = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Set video loaded to true immediately to show video
  useEffect(() => {
    setVideoLoaded(true);
  }, []);

  useEffect(() => {
    // Ensure video loads and plays immediately when component mounts - NO LAZY LOADING
    if (videoRef.current) {
      const video = videoRef.current;
      const videoPath = VIDEO_PATH;

      // Set source immediately - use stored path
      video.src = videoPath;

      // Force immediate loading - remove ALL lazy loading mechanisms
      video.setAttribute("preload", "auto");
      video.removeAttribute("loading");

      // Explicitly disable lazy loading
      if ("loading" in video) {
        video.loading = "eager";
      }

      // Remove any data attributes that might cause lazy loading
      video.removeAttribute("data-loading");
      video.removeAttribute("loading");

      const handleLoadedData = () => {
        setVideoLoaded(true);
        video.play().catch(() => {
          // Autoplay may be blocked, but video will still load
        });
      };

      const handleCanPlay = () => {
        setVideoLoaded(true);
        video.play().catch(() => {
          // Autoplay may be blocked, but video will still load
        });
      };

      video.addEventListener("loadeddata", handleLoadedData, { once: true });
      video.addEventListener("canplay", handleCanPlay, { once: true });

      // Set currentTime to 0 to force immediate load
      video.currentTime = 0;

      // Force initial network request
      video.load();

      // Try to play immediately
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay may be blocked, but video will still load
        });
      }

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, []);

  return (
    <section className="hero">
      {/* Full background video - loads first */}
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={VIDEO_PATH} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Title overlay - appears after video loads */}
      <div className={`hero-title-overlay ${videoLoaded ? "visible" : ""}`}>
        <h1 className="hero-title">
          <span>
            Achieve Your Dreams with <span className="highlight">Flexible</span>
          </span>
          <span>
            <span className="highlight">Online</span> & Distance Learning
          </span>
          <span>Programs</span>
        </h1>
      </div>

      {/* Credibility stats overlay */}
      <div className="hero-stats-overlay" aria-label="Credibility statistics">
        <div className="hero-stats-card">
          <div className="hero-stat">
            <div className="hero-stat-value">7000+</div>
            <div className="hero-stat-label">Enrolled Students</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">4000+</div>
            <div className="hero-stat-label">Graduated Students</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">9+</div>
            <div className="hero-stat-label">Academic Partners</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">100%</div>
            <div className="hero-stat-label">Student Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
