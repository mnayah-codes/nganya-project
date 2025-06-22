import { useEffect, useState } from "react";
import "../styles/b-hero.css"; 

const matatuImages = [
  "/hype master/festoppo-1.webp",
  "/rongai/Moxie/moxie-1.webp",
  "/umoja/Opposite/opposite-1.webp",
  "/embakasi/Moneyfest/moneyfest-1.webp",
  "/rongai/Ferrari/ferrari-4.webp",
  "/rongai/Detroit/detroit-1.jpeg"
];

const BookingHero = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % matatuImages.length);
    }, 10000); // Matches zoomFade duration
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="booking-hero-section">
      {/* Image Slideshow */}
      <div className="booking-hero-images">
        <img
          src={matatuImages[slideIndex]}
          loading="lazy"
          alt="Matatu"
          className="booking-hero-image"
        />
      </div>

      {/* Overlay Content */}
      <div className="booking-hero-content">
        <h1>Which Matatu Do You Want to Book?</h1>
        <p>Book Matatu with us and avoid being scammed!</p>
      </div>
    </section>
  );
};

export default BookingHero;