import React from "react";
import "./Zozo.css";
import { useNavigate } from "react-router-dom";

const Zozo = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-subtitle">
            Que vous cherchiez une citadine économique, un SUV confortable,
            une berline élégante ou une voiture sportive, nous mettons à votre
            disposition un large choix de véhicules soigneusement sélectionnés
            pour répondre à tous les besoins et tous les budgets.
          </p>

          <h1 className="hero-title">
            Bienvenue chez <span className="gradient">JAKAL</span> !
          </h1>

          <button className="hero-btn" onClick={() => navigate("/accueil")}>
            Voir le Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Zozo;