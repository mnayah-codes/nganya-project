import react from "react";
import BookingHero from "../components/B-hero.jsx";
import AboutBooking from "../components/booking-form.jsx";

const Booking = () => {
  return (
    <section className="booking-section">
      <BookingHero/>
      <AboutBooking/>
    </section>
  );
};

export default Booking;