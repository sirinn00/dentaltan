import React from 'react';
import { FaPhone, FaCalendarAlt, FaTooth } from 'react-icons/fa';
import '../css/navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <FaTooth className="tooth-logo" />
        <span>DENT<span className="blue-text">ALTAN</span></span>
      </div>

      <nav className="navbar-center">
        <a href="#">Anasayfa</a>
        <a href="#about">Hakkımızda</a>
        <a href="#services">Tedavilerimiz</a>
        <a href="#team">Ekibimiz</a>
        <a href="#testimonials">İletişim</a>
      </nav>

      <div className="navbar-right">
        <button className="contact-btn">
          <FaCalendarAlt className="contact-icon" /> Randevu Alın
        </button>
      </div>
    </header>
  );
};

export default Navbar;
