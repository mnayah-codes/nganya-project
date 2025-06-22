import React from "react";
import "../styles/s-hero.css";

const StuntHero = () => {
  return (
    <section className="stunt-hero">
      <div className="stunt-video-container">
        <video autoPlay loop muted className="stunt-hero-video">
          <source src="../matatu videos/matatu video-7.mp4" loading="lazy" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="stunt-overlay">
        <div className="stunt-content">
          <h1 className="stunt-title">Pure Stunt Madness</h1>
          <p className="stunt-subtitle">High-flying action. Nairobi's boldest riders. Unmatched street energy.</p>
        </div>
      </div>
    </section>
  );
};

export default StuntHero;