import React, { useState, useEffect } from "react";
import "../styles/home-hero.css";

const HomeHero = () => {
  const allImages = [
    ["/rongai/Moxie/moxie-1.webp", "/rongai/Detroit/detroit-1.jpeg", "/rongai/Ferrari/ferrari-1.webp"],
    ["/embakasi/Moneyfest/moneyfest-1.webp", "/umoja/Opposite/opposite-1.webp", "/kasarani/Wrench/wrench-1.webp"]
  ];

  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % allImages.length);
    }, 6000); // cycle every 6 seconds
    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="home-hero">

      <div className="home-hero-overlay">
        <h1>Welcome to Matatu Culture</h1>
        <p>Every ride is a story. Every mat is a legend.</p>
      </div>

      <div className="hero-panels">
        {allImages[currentSet].map((img, i) => (
          <div className={`panel panel-${i}`} key={i}>
            <img src={img} loading="lazy" alt={`Matatu ${i}`} />
            <div className="panel-overlay">Matatu Culture</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeHero;