import { useState, useEffect } from "react";
import "../styles/booking-form.css";
import {FaTiktok, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const AboutBooking = () => {

  return (
    <section className="about-section">
      <div className="about-card">
        <h2>What We Do</h2>
        <p>
          We connect travelers looking to hire a Matatu for road trips with the matatu they want by linking them with the drivers of the matatu. As your booking partner, we negotiate pricing, give the dates when the bus will be available for you to book since they are always on high demand and ensure you get reliable service without the hassle.
        </p>
        <p>
          Whether it's a squad getaway, night ride, video shooting, beach weekend, or event transport, we make sure you secure a quality ride at a fair price.
        </p>
        <p>
          Chat with us down here.
        </p>

        {/* Social Media Icons */}
        <div className="booking-social-icons">
          <a href="https://tiktok.com/@rodgermnayah" target="_blank" rel="noopener noreferrer"
          ><FaTiktok 
          className="booking-fa-icon"/></a>
          <a href="https://instagram.com/rodgermnayah" target="_blank" rel="noreferrer">
            <FaInstagram className="booking-fa-icon" />
          </a>
          <a href="https://twitter.com/rodgermnayah8" target="_blank" rel="noreferrer">
            <FaTwitter className="booking-fa-icon" />
          </a>
          <a href="https://wa.me/254794926431" target="_blank" rel="noreferrer">
            <FaWhatsapp className="booking-fa-icon whatsapp" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutBooking;