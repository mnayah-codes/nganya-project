import React from "react";
import "../styles/comingSoon.css";

const ComingSoonBar = () => {
  return (
    <section className="coming-soon-bar">
      <div className="label">🚧 COMING SOON</div>
      <div className="ticker">
        <div className="ticker-content">
           *Mood* – Embakasi &nbsp;&nbsp;|&nbsp;&nbsp;
           *Shimoli* – Kitengela &nbsp;&nbsp;|&nbsp;&nbsp;
           *Stormzy* – Ngong &nbsp;&nbsp;|&nbsp;&nbsp;
           *UpperCut* – Kasarani &nbsp;&nbsp;|&nbsp;&nbsp;
           *Kids next door* - Umoja
        </div>
      </div>
    </section>
  );
};

export default ComingSoonBar;