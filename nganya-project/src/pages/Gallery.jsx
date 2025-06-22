import { useState, useEffect } from "react";
import "../styles/Gallery.css";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import GalleryHero from "../components/G-hero";
import ComingSoonBar from "../components/Comingsoon";


const nganyaRoutes = {
  Embakasi: [
    {
      id: 1,
      name: "Brawlout",
      images: ["/embakasi/Brawlout/brawlout-1.webp", "/embakasi/Brawlout/brawlout-2.webp", "/embakasi/Brawlout/brawlout-3.jpg"]
    },{
      id: 2,
      name: "Moneyfest",
      images: ["/embakasi/Moneyfest/moneyfest-1.webp", "/embakasi/Moneyfest/moneyfest-2.webp", "/embakasi/Moneyfest/moneyfest-3.webp"]
    },{
      id: 3,
      name: "Heartless",
      images: ["/embakasi/Heartless/heartless-1.webp", "/embakasi/Heartless/heartless-2.webp", "/embakasi/Heartless/heartless-3.webp"]
    },{
      id: 4,
      name: "Matrix",
      images: ["/embakasi/Matrix/matrix-1.webp", "/embakasi/Matrix/matrix-2.webp", "/embakasi/Matrix/matrix-3.jpg"]
    },{
      id: 5,
      name: "Dice",
      images: ["/embakasi/Dice/dice-1.webp", "/embakasi/Dice/dice-2.jpg", "/embakasi/Dice/dice-3.webp"]
    },{
      id: 6,
      name: "Restoration",
      images: ["/embakasi/Restoration/restoration-1.webp", "/embakasi/Restoration/restoration-2.webp", "/embakasi/Restoration/restoration-3.jpg"]
    },{
      id: 7,
      name: "Droid",
      images: ["/embakasi/Droid/droid-1.webp", "/embakasi/Droid/droid-2.webp", "/embakasi/Droid/droid-3.jpg"]
    },{
      id: 8,
      name: "Steampunk",
      images: ["/embakasi/Steampank/steampunk-1.webp", "/embakasi/Steampank/steampunk-2.webp", "/embakasi/Steampank/steampunk-3.webp"]
    }
  ],
  Rongai: [
    {
      id: 9,
      name: "Moxie",
      images: ["/rongai/Moxie/moxie-1.webp", "/rongai/Moxie/moxie-2.webp", "/rongai/Moxie/moxie-3.webp"]
    },{
      id: 26,
      name: "Detroit",
      images: ["/rongai/Detroit/detroit-4.jpeg", "/rongai/Detroit/detroit-2.jpeg", "/rongai/Detroit/detroit-3.webp"]
    },{
      id: 27,
      name: "Ferrari",
      images: ["/rongai/Ferrari/ferrari-1.webp", "/rongai/Ferrari/ferrari-2.webp", "/rongai/Ferrari/ferrari-3.webp"]
    },{
      id: 10,
      name: "John wick",
      images: ["/rongai/Babayaga/babayaga-1.webp", "/rongai/Babayaga/babayaga-2.webp", "/rongai/Babayaga/babayaga-3.webp"]
    },{
      id: 11,
      name: "G-unit",
      images: ["/rongai/G-unit/g-unit-1.jpg", "/rongai/G-unit/g-unit-2.webp", "/rongai/G-unit/g-unit-3.jpg"]
    }
  ],
  Umoja:[
    {
      id: 12,
      name: "Opposite",
      images: ["/umoja/Opposite/opposite-1.webp", "/umoja/Opposite/opposite-2.jpg", "/umoja/Opposite/opposite-3.jpg"]
    },{
      id: 13,
      name: "Plank",
      images: ["/umoja/Plank/plank-1.webp", "/umoja/Plank/plank-2.webp", "/umoja/Plank/plank-3.webp"]
    },{
      id: 14,
      name: "Detox",
      images: ["/umoja/Detox/detox-1.webp", "/umoja/Detox/detox-2.jpg", "/umoja/Detox/detox-3.webp"]
    }
  ],

  Ngong:[
    {
      id: 15,
      name: "Harukaze 1.0",
      images: ["/ngong/Harukaze/harukaze-1.jpg", "/ngong/Harukaze/harukaze-2.jpg", "/ngong/Harukaze/harukaze-3.jpg"]
    },{
      id: 16,
      name: "Phenomenal",
      images: ["/ngong/Phenomenal/phenomenal-1.webp", "/ngong/Phenomenal/phenomenal-2.webp", "/ngong/Phenomenal/phenomenal-3.jpg"]
    },{
      id: 17,
      name: "Xrated",
      images: ["/ngong/Xrated/Xrated-1.jpg", "/ngong/Xrated/Xrated-2.jpg", "/ngong/Xrated/Xrated-3.jpg"]
    },{
      id: 18,
      name: "Spice",
      images: ["/ngong/Spice/spice-1.jpg", "/ngong/Spice/spice-2.jpg", "/ngong/Spice/spice-3.webp"]
    },{
      id: 28,
      name: "Harukaze 2.0",
      images: ["/ngong/Harukaze2/harukaze2-1.webp", "/ngong/Harukaze2/harukaze2-2.webp", "/ngong/Harukaze2/harukaze2-3.webp"]
    },{
      id: 29,
      name: "Scrilla",
      images: ["/ngong/Scrilla/scrilla-1.webp", "/ngong/Scrilla/scrilla-2.webp", "/ngong/Scrilla/scrilla-3.webp"]
    }
  ],
  Kiambu:[
    {
      id: 19,
      name: "B613",
      images: ["/kiambu/B613/B613-1.jpg", "/kiambu/B613/B613-2.jpg", "/kiambu/B613/B613-3.jpg"]
    },{
      id: 20,
      name: "Dethrone",
      images: ["/kiambu/Dethrone/dethrone-1.webp", "/kiambu/Dethrone/dethrone-2.webp", "/kiambu/Dethrone/dethrone-3.webp"]
    },{
      id: 21,
      name: "Soul Plane",
      images: ["/kiambu/Soul Plane/soulplane-1.jpg", "/kiambu/Soul Plane/soulplane-2.jpg", "/kiambu/Soul Plane/soulplane-3.jpg"]
    },{
      id: 22,
      name: "SUBZERO",
      images: ["/kiambu/SUBZERO/subzero-1.jpg", "/kiambu/SUBZERO/subzero-2.jpg", "/kiambu/SUBZERO/subzero-3.jpg"]
    }
  ],
  Kasarani:[
    {
      id: 30,
      name: "Wrench",
      images: ["/kasarani/Wrench/wrench-1.webp", "/kasarani/Wrench/wrench-2.jpg", "/kasarani/Wrench/wrench-3.jpg"]
    }
  ],
  kibera:[
  {
      id: 23,
      name: "Tom&Jerry",
      images: ["/kibera/Tom&Jerry/tom&jerry-1.webp", "/kibera/Tom&Jerry/tom&jerry-2.webp", "/kibera/Tom&Jerry/tom&jerry-3.webp"]
    },{
      id: 24,
      name: "Jinx",
      images: ["/kibera/Jinx/jinx-1.webp", "/kibera/Jinx/jinx-2.webp", "/kibera/Jinx/jinx-3.webp"]
    }

  ],

  Dandora:[
    {
      id: 25,
      name: "No Fear",
      images: ["/dandora/No Fear/nofear-1.jpg", "/dandora/No Fear/nofear-2.jpg", "/dandora/No Fear/nofear-3.jpg"]
    }
  ]

};

  function Gallery() {
useEffect(() => {
  const revealImages = () => {
    document.querySelectorAll(".fade-in").forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("show"); // ✅ Ensures staggered fade-in
      }, index * 150);
    });
  };

  revealImages(); // ✅ Runs on initial load

  const handleScroll = () => {
    document.querySelectorAll(".fade-in").forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight - 100) {
        element.classList.add("show"); // ✅ Ensures fade-in on scroll
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll); // Cleanup
}, []);

  return (
    <div>
    <GalleryHero />
    <ComingSoonBar/>
      <h1 className="gallery-title">Explore Nganya Gallery </h1>
      {Object.entries(nganyaRoutes).map(([route, nganyas]) => (
        <div key={route}>
          <h2 className="location-title">{route} Line-Up 🏁</h2>
          <div className="grid">
            {nganyas.map((nganya) => (
              <NganyaCard key={nganya.id} nganya={nganya} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function NganyaCard({ nganya }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % nganya.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + nganya.images.length) % nganya.images.length);
  };

  return (
     <div className="card fade-in">
      <div className="image-container">
        <img src={nganya.images[currentIndex]} alt={nganya.name} />

        <FaChevronLeft className="arrow left-arrow" onClick={prevImage} />
        <FaChevronRight className="arrow right-arrow" onClick={nextImage} />

      </div>
      <h2 className="nganya-name">{nganya.name}</h2>
    </div>

  );
}


export default Gallery;