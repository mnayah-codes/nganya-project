import React from "react";
import "../styles/Drivers.css";

const Drivers=[
  {
    image:"/drivers/kinara.jpg",
    name:"Kinara Kabro",
    matatu:"Moxie",
    bio:"Kinara kabro is the driver of moxie. Kinara is known for his term 'mapanga' meaning to finish. He has an amzing crew including his conductor freddy psycho known for his stunts when the car is driven.",
    Rating: 5,
  },  {
    image:"/drivers/evanso.jpg",
    name:"Evanso",
    matatu:"Opposite",
    bio:"Evanso_carter is known for driving opposite, Kenya 1 matatu. He has gotten the award 3 times and is known for some skillfull stunts.",
    Rating: 5,
  },  {
    image:"/drivers/ostoh.jpg",
    name:"Ostoh_Ranking",
    matatu:"Moneyfest",
    bio:"Talking of minister of enjoyment, we reflect Ostoh aka hatariman. He's known for his vibes when driving,doing crazy stunts like 'manyoka' and twerks. His playlists are always top tier. You have to take a ride with HATARI MAN.",
    Rating: 5,
  },  {
    image:"/drivers/badder.jpg",
    name:"Badder",
    matatu:"Brawlout",
    bio:"Badder drives brawlout. He is known for crazy twerks and speed master. His vibe is also one of a kind especialy in battles between different matatu",
    Rating: 5,
  },  {
    image:"/drivers/lenny.jpg",
    name:"Lenny",
    matatu:"Mood",
    bio:"Lenny driving Moneyfest is also anotheer vibe. He has been in the industry for long and also won the Jamuhuri 1. Lenny also does great stunts",
    Rating: 4.5,
  },  {
    image:"/drivers/paddan.jpg",
    name:"Paddan",
    matatu:"Matrix",
    bio:"Master of smooth maneuvers, Paddan weaves through the streets like a digital phantom. When he's driving, reality bends to his will.",
    Rating: 4.5,
  },

];

const DriverContainer = () =>{
return (
  <section>
  <h2 className="drivers-title">Top Drivers</h2>
  <p className="drivers-title-description">Here we have list some of the top drivers in the streets</p>

  <div className="driver-container">
    {Drivers.map((Drivers, index) =>(
      <div key={index} className="driver-card">
    <div className="driver-image-container"><img src={Drivers.image} loading="lazy" className="driver-image"/></div>
    <div><h3>{Drivers.name}</h3></div>
    <div><p>{Drivers.matatu}</p></div>
    <div><p>{Drivers.bio}</p></div>
    <div className="rating">{"★".repeat(Drivers.Rating)}</div>
    </div>
    ))}
  </div>
  </section>

);
};
export default DriverContainer;
