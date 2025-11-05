import React from 'react';
import './Footer.css';
import logo from '../Assets/logo.jpg';
import logo_facebook from '../Assets/facebook.jpg';
import logo_whatsapp from '../Assets/whatsapp.jpg';
import logo_instagram from '../Assets/instagram.jpg';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" className="logo-footer" />
      </div>
      <div className="footer-right">
        <nav className="footer-nav">
          <a href="#">Entreprise</a>
          <a href="#">Produits</a>
          <a href="#">Localisations</a>
          <a href="#">A propos de nous</a>
          <a href="#">Contacts</a>
        </nav>
        <div className="footer-socials">
          <a href="#"><img src={logo_facebook} alt="Facebook" /></a>
          <a href="#"><img src={logo_whatsapp} alt="Whatsapp" /></a>
          <a href="#"><img src={logo_instagram} alt="Instagram" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
