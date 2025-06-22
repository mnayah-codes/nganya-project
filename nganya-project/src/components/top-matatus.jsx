import React from "react";
import "../styles/top-matatus.css"

const topMatatus = [
  {
    id: 1,
    name: "Moxie",
    image: "/top matatus/moxie.jpg",
    description: "Moxie is one of the most recognized Matatus on the CBD-Rongai route, known for its girlish graffiti, booming sound system, and a one of a kind crew."
  },
  {
    id: 2,
    name: "Opposite",
    image: "/top matatus/oppo.webp",
    description: "AKA manunda has taken the KENYA 1 matatu awards 3 times. It,s known for its graffiti, muffler amazing crew and its vibes when cruising in CBD."
  },  {
    id: 3,
    name: "Moneyfest",
    image: "/top matatus/moneyfest.webp",
    description: "Moneyfest with a theme for money don't lie is also a mad and crazy matatu. It's about the hustle,where money brings power."
  },
  {
    id: 4,
    name: "Heartless",
    image: "/top matatus/heartless.webp",
    description: "It has Heartless graffiti. The crew is electric, hyping up passengers with wild energy, while the driver handles the streets like a king, cutting through traffic with crazy stunts. "
  },
    {
    id: 5,
    name: "Brawlout",
    image: "/top matatus/brawlout.webp",
    description: "Brawlout is the embodiment of raw street power. From it's battle in the CBD its booming speakers and crazy crews, Brawlout fights for dominance in Nairobi’s chaotic streets."
  },
    {
    id: 6,
    name: "Detroit",
    image: "/top matatus/detroit-5.webp",
    description: "DETROIT is more than just a Matatu it’s a rolling powerhouse. Wrapped in the bold blue and white colors of the Detroit Lions, this ride roars with NFL intensity, making every road feel like a battleground."
  },
    {
    id: 7,
    name: "Matrix",
    image: "/top matatus/matrix.webp",
    description: "MATRIX is inspired by the legendary cyber world of The Matrix, a realm of speed, precision, and untouchable dominance. Clad in black and green digital aesthetics, this Nganya embodies the code of the streets with a crazy sound system."
  },{
    id: 8,
    name: "Johnwick",
    image: "/top matatus/johnwick.webp",
    description: "JOHN WICK, inspired by the movie’s unstoppable force, this Matatu moves with precision and intensity. The crew keeps the energy high, the driver executes every turn like a calculated hit, and the vibe is pure adrenaline—bass pounding, lights flashing, and no hesitation. Ride or get left behind."
  },{
    id: 9,
    name: "Ferrari",
    image: "/rongai/Ferrari/ferrari-2.webp",
    description: "FERRARI, built for speed, designed to stun. This Matatu owns the streets with its bold red body, sleek curves, and untouchable presence. The crew keeps the energy high, while the driver moves like a racer."
  }
];

const TopMatatus = () => {
  return (
    <section className="top-matatus">
      <h2 className="top-matatu-title"> Top Matatus in Nairobi</h2>
      <p className="top-matatus-paragraph"> Matatu culture is not just about transport; it’s a lifestyle, a movement, and an ever-evolving expression of Nairobi’s energy.Here are some of the top matatus in nairobi going different routes with different vibes. 
</p>
      <div className="matatu-list">
        {topMatatus.map((matatu) => (
          <div key={matatu.id} className="matatu-card">
            <div>
            <img src={matatu.image} loading="lazy" alt={matatu.name} />
            </div>
            <div className="matatu-info">
              <h3>{matatu.name}</h3>   
              <p className="description">{matatu.description}</p>
              
            </div>
          </div>
        ))}
      </div>

      

    </section>
  );
};

export default TopMatatus;