import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bell } from "lucide-react";

const Discussion = () => {
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [showNotif, setShowNotif] = useState(false);
  const [reponses, setReponses] = useState([]);

  // 🔹 Charger nom utilisateur si déjà enregistré
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser?.username) {
      setSender(storedUser.username);
    }
  }, []);

  // 🔹 Vérifier régulièrement les réponses pour l’utilisateur
  useEffect(() => {
    const interval = setInterval(() => {
      if (!sender) return;
      const allReponses = JSON.parse(localStorage.getItem("reponsesAdmin") || "[]");
      const userReponses = allReponses.filter((r) => r.to === sender);
      setReponses(userReponses);
      setNotifications(userReponses.filter((r) => !r.read));
    }, 2000);
    return () => clearInterval(interval);
  }, [sender]);

  // 🔹 Envoi du message
  const envoyerMessage = async () => {
    if (!sender || !message) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    // Sauvegarde du nom utilisateur dans le profil local
    const userData = { username: sender };
    localStorage.setItem("userData", JSON.stringify(userData));

    const newMsg = {
      sender,
      message,
      avatar: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      date: new Date().toLocaleString(),
    };

    try {
      await fetch("http://localhost/send_message.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMsg),
      });

      const saved = JSON.parse(localStorage.getItem("messages") || "[]");
      localStorage.setItem("messages", JSON.stringify([...saved, newMsg]));
      alert("✅ Message envoyé !");
      setMessage("");
    } catch (error) {
      console.error("Erreur :", error);
      alert("Erreur de connexion au serveur.");
    }
  };

  // 🔹 Marquer les réponses comme lues
  const markAsRead = () => {
    const all = JSON.parse(localStorage.getItem("reponsesAdmin") || "[]");
    const updated = all.map((r) =>
      r.to === sender ? { ...r, read: true } : r
    );
    localStorage.setItem("reponsesAdmin", JSON.stringify(updated));
    setNotifications([]);
    setReponses(updated.filter((r) => r.to === sender));
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center position-relative"
      style={{
        background: "linear-gradient(135deg, #dfe9f3, #ffffff)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* === CLÔCHE NOTIFICATION === */}
      <div
        className="position-absolute top-0 end-0 m-4"
        style={{ cursor: "pointer", zIndex: 10 }}
        onClick={() => {
          setShowNotif(!showNotif);
          if (!showNotif) markAsRead();
        }}
      >
        <Bell size={28} color="#007bff" />
        {notifications.length > 0 && (
          <span
            className="badge bg-danger position-absolute top-0 start-100 translate-middle"
            style={{ fontSize: "0.75rem" }}
          >
            {notifications.length}
          </span>
        )}
      </div>

      {/* Fenêtre de notifications */}
      {showNotif && (
        <div
          className="card shadow position-absolute end-0 top-0 m-5 p-3"
          style={{
            width: "300px",
            maxHeight: "400px",
            overflowY: "auto",
            borderRadius: "12px",
          }}
        >
          <h6 className="fw-bold text-primary mb-2">📩 Réponses de l’admin</h6>
          {reponses.length === 0 ? (
            <p className="text-muted small">Aucune réponse</p>
          ) : (
            reponses.map((n, i) => (
              <div
                key={i}
                className="border-bottom mb-2 pb-2"
                style={{
                  backgroundColor: n.read ? "transparent" : "#e9f5ff",
                  borderRadius: "8px",
                  padding: "6px",
                }}
              >
                <p className="mb-1">{n.message}</p>
                <small className="text-muted">{n.date}</small>
              </div>
            ))
          )}
        </div>
      )}

      {/* === FORMULAIRE ENVOI === */}
      <div
        className="row shadow-lg rounded-4 overflow-hidden w-100 mx-3"
        style={{ maxWidth: "900px", backgroundColor: "#fff" }}
      >
        <div className="col-md-6 p-5">
          <h2 className="fw-bold mb-4 text-primary">💬 Envoyer un message</h2>

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
            }}
          >
            Envoyer 📩
          </button>

          {/* === Réponses === */}
          {reponses.length > 0 && (
            <div className="mt-5">
              <h5 className="text-primary">📬 Réponses de l’admin</h5>
              <div
                className="border rounded p-3 mt-2"
                style={{
                  backgroundColor: "#f8faff",
                  maxHeight: "250px",
                  overflowY: "auto",
                }}
              >
                {reponses.map((r, i) => (
                  <div
                    key={i}
                    className="p-2 mb-2 border-bottom"
                    style={{
                      backgroundColor: r.read ? "transparent" : "#e9f5ff",
                      borderRadius: "8px",
                    }}
                  >
                    <p className="mb-1">{r.message}</p>
                    <small className="text-muted">{r.date}</small>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* COLONNE DROITE */}
        <div
          className="col-md-6 text-center d-flex flex-column justify-content-center align-items-center p-4"
          style={{
            background: "linear-gradient(135deg, #007bff, #00bfff, #7fddff)",
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
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
