import React from "react";
import "./Zozo.css";
import { useNavigate } from "react-router-dom";

const Zozo = () => {
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate("/accueil");   // <- chemin où tu veux aller
  };

  return (
    <div className="hero-container">
      <div className="hero-text">
        <p>
          Que vous cherchiez une citadine économique, un SUV confortable,
          une berline élégante ou une voiture sportive, nous mettons à
          votre disposition un large choix de véhicules soigneusement sélectionnés
          pour répondre à tous les besoins et tous les budgets.
        </p>

        <h1 className="fade-in">
          Bienvenue chez <span className="gradient">JAKAL</span> !
        </h1>

        <button className="hero-btn" onClick={goToMenu}>
          Voir le Menu
        </button>
      </div>
    </div>
  );
};

export default Zozo;
