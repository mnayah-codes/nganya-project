import React, { useState, useEffect } from "react";
import "../styles/g-hero.css";

const GalleryHero = () => {
  return (
    <div className="gallery-hero">
      <div className="gallery-overlay">
        <h1 className="overlay-title">Gallery</h1>
        <p className="overlay-subtitle">Experience the Matatus that define the streets</p>
      </div>

      {/* Image Panels */}
      <div className="gallery-panels">
        <div className="gallery-frame frame-0">
          <div className="image-overlay"></div>
          <img src="../top matatus/gallery-1.jpg" loading="lazy" className="gallery-image" alt="Matatu 1" />
        </div>
        <div className="gallery-frame frame-1">
          <div className="image-overlay"></div>
          <img src="../top matatus/gallery-2.webp" loading="lazy" className="gallery-image" alt="Matatu 2" />
        </div>
      </div>
    </div>
  );
};

export default GalleryHero;