import React from "react";
import "../styles/matatu-madness.css";
import { DiEnvato } from "react-icons/di";
import BloggerSection from "../components/Bloggers.jsx";
import StuntHero from "../components/S-hero.jsx";

const MatatuMadness = () => {
  return (
    <section 
    className="matatu-madness">
       <StuntHero/>
   
      <h2>The Wild Side of Matatu Culture</h2>
      <p className="madness-description">
        Experience the craziest stunts, high-energy dance-offs, and insane bashments happening inside Nairobi’s wildest Matatus. Buckle up for the ride!
      </p>

      <div className="video-gallery">
      <div className="video-container">
        <p>A review of some of the matatus</p>
        <video className="video" controls muted>
        <source src="/matatu videos/matatu video-1.mp4" loading="lazy" type="video/mp4" />
      </video>
      </div>
      <div className="video-container">
        <p>Checkout the flashy neon lights for the matatu #nightlife</p>
        <video className="video" controls muted>
        <source src="/matatu videos/matatu video-2.mp4" loading="lazy" type="video/mp4" />
      </video>
      </div>
      <div className="video-container">
        <p>What about interior, it's crazy right</p>
      <video className="video" controls muted>
        <source src="/matatu videos/matatu video-8.mp4" loading="lazy" type="video/mp4" />
      </video>
      </div>

      <div className="video-container">
        <p>Bashment and entertainment always top tier</p>
        <video className="video" controls muted>
        <source src="/matatu videos/matatu video-3.mp4" loading="lazy" type="video/mp4" />
      </video>
      </div>
      <div className="video-container">
        <p>Some Twerks with Heartless</p>
        <video className="video" controls muted>
        <source src="/matatu videos/matatu video-4.mp4" loading="lazy" type="video/mp4" />
      </video>
      </div>
      <div className="video-container">
        <p>Matrix twerking more than you girlfriend </p>
        <video className="video" controls muted>
        <source src="/matatu videos/matatu video-5.mp4" loading="lazy" type="video/mp4" />
      </video>
      </div>
      </div>
      <BloggerSection/>
    </section>
  );
};

export default MatatuMadness;