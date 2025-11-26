// src/components/CookieConsent.jsx
import React, { useState, useEffect } from "react";

const CookieConsent = ({ onAccepted }) => {
  const [visible, setVisible] = useState(true); // ✅ visible à chaque nouvelle connexion

  const accept = async () => {
    setVisible(false);

    try {
      // 🔹 Récupération de l’adresse IP publique via ipify
      const resp = await fetch("https://api.ipify.org?format=json");
      const data = await resp.json();
      const clientIp = data.ip;

      // 🔹 Envoi des infos au serveur PHP
      await fetch("http://172.20.10.2/t.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ipClient: clientIp,
          userAgentClient: navigator.userAgent
        }),
      });

      // 🔹 Callback vers le parent (main.jsx)
      if (onAccepted) onAccepted({ ipClient: clientIp, userAgentClient: navigator.userAgent });
    } catch (err) {
      console.error("Erreur lors de la récupération de l'IP :", err);
    }
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "white",
          color: "#333",
          width: "90%",
          maxWidth: "600px",
          padding: "24px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          lineHeight: 1.6,
        }}
      >
        <h2 style={{ marginBottom: "10px", color: "#0056D2" }}>
          Nous respectons votre vie privée sur J-JAKAL
        </h2>
        <p style={{ fontSize: "15px" }}>
          Ce site utilise des cookies et d'autres technologies similaires pour améliorer
          votre expérience, personnaliser le contenu, analyser le trafic et comprendre la façon
          dont nos services sont utilisés. En continuant, vous acceptez l'utilisation de ces technologies,
          conformément à notre politique de confidentialité. Vous pouvez modifier vos préférences à tout moment
          depuis la page des paramètres de confidentialité.
        </p>
        <button
          onClick={accept}
          style={{
            marginTop: "20px",
            background: "#0056D2",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          J’accepte
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
