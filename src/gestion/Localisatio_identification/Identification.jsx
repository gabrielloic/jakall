// src/gestion/Localisatio_identification/Identification.jsx
import React, { useState, useEffect } from "react";

const Identification = () => {
  const [ipAddress, setIpAddress] = useState("");

  const fetchIpAddress = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json(); 
      setIpAddress(data.ip); 
    } catch (error) {
      console.error("Erreur lors de la récupération de l'adresse IP :", error);
    }
  };

  useEffect(() => {
    fetchIpAddress();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Adresse IP de l’utilisateur :</h2>
      <p style={{ fontSize: "1.5rem", color: "blue" }}>{ipAddress || "Chargement..."}</p>
    </div>
  );
};

export default Identification; // ✅ export par défaut correct
