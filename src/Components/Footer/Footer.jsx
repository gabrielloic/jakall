import React from 'react'; 
import './Footer.css'; 

const Footer = () => { 
  return ( 
    <footer className="footer" id='footer'> 
      
      <div className="footer-left"> 
        <img src={""} alt="Logo" className="logo-footer" /> 
      </div> 

      <div className="footer-right"> 
        

        <div className="footer-socials"> 
          {/* Facebook */}
          <a href="https://www.facebook.com/share/1a9EDZggVG/?mibextid=wwXIfr" title="Facebook">
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5a3.5 3.5 0 0 1 3.7-3.9c1.1 0 2.2.2 2.2.2v2.4H15c-1.2 0-1.6.8-1.6 1.6V12H16l-.4 3h-2.2v7A10 10 0 0 0 22 12"/>
            </svg>
          </a>

          {/* WhatsApp */}
          <a href=" https://chat.whatsapp.com/IRUWicDcDgMLPvk53kma9G?mode=wwt" title="WhatsApp">
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M20 3.9A10 10 0 0 0 4.1 20l-1.1 4.1 4.2-1.1A10 10 0 0 0 20 3.9Zm-8 15.7a8 8 0 0 1-4-1.1L6 19l.6-2.1A7.6 7.6 0 1 1 12 19.6Zm4.4-5.3c-.3-.1-1.7-.8-2-.9s-.5-.1-.7.2l-.7.8c-.2.2-.4.2-.7.1a6 6 0 0 1-3.1-2.7c-.3-.5.3-.6.6-.8l.3-.4c.1-.2.1-.3 0-.6l-.9-2.3c-.2-.3-.4-.3-.6-.3h-.5c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.3 1.4 3.5a9.7 9.7 0 0 0 3.9 3 12 12 0 0 0 1.2.4c.5.2 1 .1 1.3.1s1.2-.4 1.4-.9.7-1 1-1.5.2-.9.1-1.1-.3-.2-.6-.3Z" />
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" title="Instagram">
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10Zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm4.5-.9a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z" />
            </svg>
          </a>

          {/* Snapchat */}
          <a href="#" title="Snapchat">
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M12 2c2.2 0 4.4 1.4 4.6 4.1.1 1.2.3 2.1.6 3 .4 1.1 1.5 2 2.6 2.3l.8.2c.5.1.8.5.7.9-.1.4-.5.8-1 .8-.4 0-.9 0-1.4-.2-.4-.2-.8-.3-1.2-.3-.3 0-.5.2-.6.5-.2.6-.4 1.1-.6 1.6-.2.6.1 1 .6 1.3l1.1.5c.7.3 1.1.7 1.1 1.2 0 .4-.3.7-.9.8-.4.1-1 0-1.6-.1-.7-.2-1.5-.3-2.1-.1-.5.1-.7.4-.9.9-.2.5-.5 1.1-1.2 1.1h-.2c-.8 0-1.1-.6-1.3-1.2-.2-.5-.4-.8-.9-.9-.7-.2-1.6-.1-2.3.1-.6.2-1.2.2-1.6.1-.6-.1-.9-.4-.9-.8 0-.5.4-.9 1.1-1.2l1.1-.5c.5-.3.8-.7.6-1.3-.2-.5-.4-1.1-.6-1.6-.1-.3-.3-.5-.6-.5-.3 0-.8.1-1.2.3-.5.2-1 .3-1.4.2-.5 0-.9-.4-1-.8-.1-.4.2-.8.7-.9l.8-.2c1.1-.3 2.2-1.2 2.6-2.3.3-.9.5-1.8.6-3C7.4 3.4 9.7 2 12 2Z" />
            </svg>
          </a>

          {/* Twitter / X */}
          <a href="#" title="Twitter / X">
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M18 2h3l-7.5 8.5L22 22h-6l-4.5-6L7 22H2l8-9.5L2 2h6l4 5.5L18 2Z" />
            </svg>
          </a>
        </div> 
      </div> 

      {/* ---- TEXTE LÉGAL ---- */}
      <div className="footer-legal animated">
        <p>© 2025 AutoCarDeal. Tous droits réservés.</p>
        <p>
          Les informations et prix affichés sur ce site ne constituent pas un engagement contractuel. 
          Les véhicules peuvent être vendus sans préavis.
        </p>
        <p>
          En utilisant ce site, vous acceptez nos 
          <a href="#"> Conditions d'utilisation</a> et notre 
          <a href="#"> Politique de confidentialité</a>.
        </p>
      </div>

    </footer> 
  ); 
}; 
 
export default Footer;