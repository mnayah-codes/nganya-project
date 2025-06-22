import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu when a nav link is clicked
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav-container">
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <div className={`nav-links ${menuOpen ? "active" : ""}`} ref={menuRef}>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          onClick={handleNavClick}
        >
          Home
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          onClick={handleNavClick}
        >
          Gallery
        </NavLink>
        <NavLink
          to="/stunts"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          onClick={handleNavClick}
        >
          Stunts
        </NavLink>
        <NavLink
          to="/booking"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          onClick={handleNavClick}
        >
          Book Nganya
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;