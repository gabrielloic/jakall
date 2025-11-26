import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Reception = () => {
  const [messages, setMessages] = useState([]);

  // Charger les messages depuis la BD
  useEffect(() => {
    fetch("http://localhost/get_messages.php")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Erreur de chargement :", err));
  }, []);

  return (
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        background: "linear-gradient(135deg, #f2f6fc, #ffffff)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="row shadow-lg rounded-4 overflow-hidden w-100 mx-3"
        style={{
          maxWidth: "950px",
          backgroundColor: "#fff",
        }}
      >
        {/* === COLONNE GAUCHE : LISTE DES MESSAGES === */}
        <div className="col-md-7 p-5">
          <h2
            className="fw-bold mb-4"
            style={{ color: "#1e3c72", fontSize: "1.8rem" }}
          >
            📬 Boîte de réception
          </h2>

          {messages.length > 0 ? (
            <div
              className="overflow-auto"
              style={{ maxHeight: "400px", paddingRight: "10px" }}
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className="p-3 mb-3 rounded-3 shadow-sm"
                  style={{
                    background:
                      index % 2 === 0
                        ? "linear-gradient(90deg, #e6f0ff, #f9fbff)"
                        : "linear-gradient(90deg, #fff, #f0f7ff)",
                    border: "1px solid #d6e4ff",
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <span className="fw-semibold text-primary">
                      👤 {msg.sender}
                    </span>
                    <span className="text-muted" style={{ fontSize: "0.85rem" }}>
                      📅 {msg.date}
                    </span>
                  </div>
                  <p className="mt-2 mb-0 text-secondary">{msg.message}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted fst-italic">
              Aucun message reçu pour le moment 📭
            </p>
          )}
        </div>

        {/* === COLONNE DROITE : ILLUSTRATION === */}
        <div
          className="col-md-5 text-center d-flex flex-column justify-content-center align-items-center p-4"
          style={{
            background: "linear-gradient(135deg, #007bff, #00bfff, #7fddff)",
            color: "white",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
            alt="inbox"
            className="mb-4"
            style={{ width: "140px", height: "140px" }}
          />

          <h4 className="fw-bold mb-3">Vos messages reçus</h4>
          <p style={{ fontSize: "0.95rem", maxWidth: "80%" }}>
            Lisez vos messages avec clarté et répondez rapidement.  
            La communication, c’est la clé d’un bon travail d’équipe 🔑
          </p>
        </div>
      </div>

      {/* Import police */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');`}
      </style>
    </div>
  );
};

export default Reception;
