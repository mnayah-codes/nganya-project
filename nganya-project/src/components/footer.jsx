import React from "react";
import {FaInstagram, FaTiktok, FaXTwitter, FaWhatsapp} from "react-icons/fa6";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h4>Matatu Culture</h4>
        <p>Respect the culture. Built in Nairobi.</p>
        <p>Chat with us we organise a decent ride for you.</p>
        <div className="social-icons">
          <a href="https://x.com/rodgermnayah8" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
          <a href="https://instagram.com/rodgermnayah" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://tiktok.com/@rodgermnayah" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          <a href="https://wa.me/254794926431" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
      </div>

      <div className="footer-right">
        <a href="/">Home</a>
        <a href="/gallery">Gallery</a>
        <a href="/stunts">Stunts</a>
        <a href="/booking">Booking</a>
      </div>
    </footer>
  );
};

export default Footer;