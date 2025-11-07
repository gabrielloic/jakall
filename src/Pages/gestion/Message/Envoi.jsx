import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Discussion = () => {
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");

  const envoyerMessage = async () => {
    if (!sender || !message) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    try {
      const response = await fetch("http://localhost/send_message.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sender, message }),
      });

      const result = await response.json();
      alert(result.message);
      setMessage("");
    } catch (error) {
      console.error("Erreur :", error);
      alert("Erreur de connexion au serveur.");
    }
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        background: "linear-gradient(135deg, #dfe9f3, #ffffff)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="row shadow-lg rounded-4 overflow-hidden w-100 mx-3"
        style={{
          maxWidth: "900px",
          backgroundColor: "#fff",
        }}
      >
        {/* === COLONNE GAUCHE : FORMULAIRE === */}
        <div className="col-md-6 p-5">
          <h2
            className="fw-bold mb-4"
            style={{
              color: "#1e3c72",
              fontSize: "1.8rem",
              letterSpacing: "0.5px",
            }}
          >
            💬 Discussion instantanée
          </h2>

          <p className="text-secondary mb-4">
            Envoyez un message pour toutes vos préoccupations. Soyez clair et courtois 😊
          </p>

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary">
              Nom de l’expéditeur
            </label>
            <input
              type="text"
              className="form-control p-3"
              placeholder="Votre nom complet"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              style={{
                borderRadius: "12px",
                border: "1px solid #b0c4de",
                fontSize: "0.95rem",
              }}
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold text-secondary">
              Message
            </label>
            <textarea
              className="form-control p-3"
              placeholder="Écrivez votre message ici..."
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                borderRadius: "12px",
                border: "1px solid #b0c4de",
                resize: "none",
                fontSize: "0.95rem",
              }}
            ></textarea>
          </div>

          <button
            onClick={envoyerMessage}
            className="btn w-100 text-white fw-semibold"
            style={{
              borderRadius: "10px",
              background: "linear-gradient(90deg, #007bff, #4facfe)",
              border: "none",
              padding: "12px",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.opacity = "0.9")}
            onMouseOut={(e) => (e.target.style.opacity = "1")}
          >
            Envoyer 📩
          </button>
        </div>

        {/* === COLONNE DROITE : ILLUSTRATION === */}
        <div
          className="col-md-6 text-center d-flex flex-column justify-content-center align-items-center p-4"
          style={{
            background:
              "linear-gradient(135deg, #007bff, #00bfff, #7fddff)",
            color: "white",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
            alt="messagerie"
            className="mb-4"
            style={{ width: "150px", height: "150px" }}
          />

          <h4 className="fw-bold mb-3">Connectez-vous & Échangez</h4>
          <p style={{ fontSize: "0.95rem", maxWidth: "80%" }}>
            La communication est la clé 🗝️ d’une collaboration réussie.  
            Partagez vos idées, vos questions et vos pensées librement !
          </p>
        </div>
      </div>

      {/* === FONT GOOGLE (Poppins) === */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');`}
      </style>
    </div>
  );
};

export default Discussion;
