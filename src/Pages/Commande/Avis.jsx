import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Avis() {
  const navigate = useNavigate();
  const [nom, setNom] = useState("");
  const [note, setNote] = useState(5);
  const [commentaire, setCommentaire] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nom || !commentaire) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("nom", nom);
      formData.append("note", note);
      formData.append("commentaire", commentaire);

      const res = await fetch("http://localhost/avis.php", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.status === "success") {
        setSubmitted(true);
        setTimeout(() => navigate("/accueil"), 2000);
      } else {
        alert(data.message || "Erreur lors de l'enregistrement !");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur réseau !");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "#f5f7fa" }}
    >
      {!submitted ? (
        <div
          className="shadow-lg p-4"
          style={{
            width: "100%",
            maxWidth: "520px",
            borderRadius: "20px",
            background: "#ffffff",
          }}
        >
          {/* Header */}
          <div className="text-center mb-4">
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                background: "#e8f0fe",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto 15px",
                fontSize: "32px",
                color: "#0d6efd",
              }}
            >
              ⭐
            </div>

            <h2 className="fw-bold">Donnez votre avis</h2>
            <p className="text-muted" style={{ fontSize: "15px" }}>
              Votre avis nous aide à améliorer notre service.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* NOM */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Nom</label>
              <input
                type="text"
                className="form-control form-control-lg"
                style={{ borderRadius: "12px" }}
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>

            {/* NOTES AVEC ÉTOILES */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Note</label>

              <div className="d-flex gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span
                    key={n}
                    onClick={() => setNote(n)}
                    style={{
                      fontSize: "30px",
                      cursor: "pointer",
                      color: n <= note ? "#ffc107" : "#d6d6d6",
                      transition: "0.2s",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            {/* COMMENTAIRE */}
            <div className="mb-4">
              <label className="form-label fw-semibold">Commentaire</label>
              <textarea
                className="form-control"
                style={{ borderRadius: "12px", minHeight: "130px" }}
                value={commentaire}
                onChange={(e) => setCommentaire(e.target.value)}
              ></textarea>
            </div>

            {/* BOUTON */}
            <button
              type="submit"
              className="btn w-100 py-2"
              style={{
                borderRadius: "12px",
                background: "#0d6efd",
                color: "#fff",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Envoyer l'avis 🚀
            </button>
          </form>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="text-success fw-bold">Merci pour votre avis ! 🎉</h3>
          <p className="text-muted">Redirection vers l'accueil...</p>
        </div>
      )}
    </div>
  );
}
