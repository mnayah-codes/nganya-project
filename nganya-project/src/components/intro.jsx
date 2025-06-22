import React from "react";
import "../styles/intro.css"

const Intro = () => {
  return (
    <section>
      <div className="title-container">
      <div>
        <p className="home-title-1"> Matatu</p>
       </div>
      <div> 
        <p className="home-title-2">Culture</p>
      </div>
      </div>

      <div className="intro-container">
        <div className="text-context">
      <div className="description-container-1">
        <p>
          Matatu culture is the heartbeat of Kenya’s streets—a vibrant, dynamic fusion of art, music, and urban expression. More than just public transport, Matatus are rolling canvases showcasing bold graffiti, flashing neon lights, and booming sound systems that turn ordinary rides into an experience. 
        </p>
      </div>
      <div className="description-container-2">
        <p>
          Every route has its legends, from iconic drivers, energetic crew members to uniquely customized Matatus that dominate the roads with unmatched energy. It’s a culture driven by creativity, competition, and street influence, where every Nganya (Matatu) tells a story and represents a way of life.
        </p>
      </div>
        </div>

    <div className="side-images">
    <img className="intro-image-1" src="/hype master/moxiewick-1.webp" loading="lazy"/>
    <img className="intro-image-2" src="/hype master/festmatrix-1.jpg" loading="lazy"/>
    </div>
    <div className="main-image-box">
    <img className="intro-image-3" src="/hype master/dice interior.webp" loading="lazy"/>
    <img className="intro-image-6" src="/hype master/graffiti.png" loading="lazy"/></div>
    <div className="extra-image-box">
    <img className="intro-image-4" src="/hype master/festoppo-1.webp" loading="lazy"/>
    <img className="intro-image-5" src="/hype master/wick interior.webp" loading="lazy"/>
    </div>
  </div>
    </section>
  );
};

export default Intro;