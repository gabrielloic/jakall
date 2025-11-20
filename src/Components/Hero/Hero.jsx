import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="home-wrapper">

      <div className="home-container">

        {/* CÔTÉ GAUCHE */}
        <div className="home-left">
          <h1 className="slide-in">
            Drive your <br />
            <span>dream car</span> today
          </h1>

          <p className="fade-in">
            Découvrez notre large sélection de véhicules modernes, fiables et 
            performants. Choisissez le modèle qui correspond à votre style, 
            votre confort et vos besoins — nous avons ce qu’il vous faut.
          </p>

          <button className="fancy-btn">Explorer maintenant</button>
        </div>

        {/* CÔTÉ DROIT : IMAGE */}
        <div className="home-right fade-up">
          <img src="/assets/b.jpg" alt="car" />
        </div>

      </div>
    </div>
  );
};

export default Hero;