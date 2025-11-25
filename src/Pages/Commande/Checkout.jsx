import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CreditCard, CheckCircle2, Loader2 } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Checkout.css";

export default function Checkout() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const cart = state?.cart || JSON.parse(localStorage.getItem("cart_v1")) || [];
  const total = state?.total ?? (cart.reduce((s, it) => s + (it.prix * it.qty), 0));
  const user = state?.user || JSON.parse(localStorage.getItem("userData")) || {};

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleConfirmPayment = async () => {
    if (!cardNumber || !expiry || !cvv) {
      alert("Veuillez remplir toutes les informations de paiement !");
      return;
    }

    const email = user?.email;
    if (!email) {
      alert("Utilisateur non identifié !");
      return;
    }

    const data = { email, cart, total, cardNumber, expiry, cvv };

    try {
      setLoading(true);

      const response = await fetch("http://localhost/commande.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const text = await response.text();
      console.log("🧾 Réponse brute :", text);

      let result;
      try {
        result = JSON.parse(text);
      } catch (e) {
        console.error("Réponse non JSON :", e, text);
        alert("Réponse serveur invalide : voir console.");
        return;
      }

      if (result.status === "success") {
        localStorage.removeItem("cart_v1");
        alert("✅ Paiement réussi !");
        setSuccess(true);

        const userOrders = JSON.parse(localStorage.getItem("userOrders")) || [];
        const newOrder = {
          id: result.commande_id || Date.now(),
          voitures: cart,
          total,
          date_commande: new Date().toLocaleString(),
        };
        localStorage.setItem("userOrders", JSON.stringify([...userOrders, newOrder]));
        localStorage.setItem("newAdminOrder", "true");

        setTimeout(() => navigate("/moncompte"), 1500);
      } else {
        alert(result.message || "Erreur inconnue.");
      }
    } catch (error) {
      console.error("Erreur fetch :", error);
      alert("Erreur lors du traitement ! Vérifie la console pour plus de détails.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="checkout-container py-5"
      style={{
        background: "linear-gradient(135deg, #eef2f3 0%, #dfe9f3 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="container bg-white shadow-lg rounded-4 p-4 p-md-5">
        <h2 className="text-center fw-bold mb-4 text-primary">
          Paiement sécurisé 💳
        </h2>

        {success ? (
          <div className="text-center my-5">
            <CheckCircle2 size={80} color="green" />
            <h4 className="mt-3 text-success fw-bold">
              Paiement effectué avec succès !
            </h4>
            <p>Redirection vers votre compte...</p>
          </div>
        ) : (
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="card border-0 shadow-sm rounded-4 mb-4 p-3">
                <h5 className="text-secondary mb-3">👤 Informations utilisateur</h5>
                <p><strong>Nom :</strong> {user?.username || "Inconnu"}</p>
                <p><strong>Email :</strong> {user?.email || "Non disponible"}</p>
              </div>

              <div className="card border-0 shadow-sm rounded-4 p-3">
                <h5 className="text-secondary mb-3">🛒 Résumé de la commande</h5>
                {cart.length === 0 ? (
                  <p className="text-muted text-center">Votre panier est vide.</p>
                ) : (
                  <ul className="list-group mb-3">
                    {cart.map((item) => (
                      <li
                        key={item.id || item.nom}
                        className="list-group-item d-flex justify-content-between align-items-center border-0 rounded-3 mb-2"
                        style={{ background: "#f8f9fa" }}
                      >
                        <div>
                          <strong>{item.nom}</strong> <br />
                          <small className="text-muted">
                            {Number(item.prix).toLocaleString()} FCFA × {item.qty}
                          </small>
                        </div>
                        <span className="fw-bold text-primary">
                          {(item.prix * item.qty).toLocaleString()} FCFA
                        </span>
                      </li>
                    ))}
                    <li className="list-group-item d-flex justify-content-between border-top pt-3">
                      <span className="fw-bold">Total</span>
                      <span className="fw-bold text-success">
                        {Number(total).toLocaleString()} FCFA
                      </span>
                    </li>
                  </ul>
                )}
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 shadow-sm rounded-4 p-4">
                <h5 className="text-secondary mb-3">💰 Paiement</h5>

                <input
                  className="form-control mb-3"
                  placeholder="Numéro de carte (12-19 chiffres)"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  inputMode="numeric"
                />
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      className="form-control"
                      placeholder="MM/AAAA"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      className="form-control"
                      placeholder="CVV"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      inputMode="numeric"
                    />
                  </div>
                </div>

                <button
                  className="btn btn-primary w-100 py-2 mt-2"
                  onClick={handleConfirmPayment}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="me-2 animate-spin" /> Traitement...
                    </>
                  ) : (
                    <>
                      <CreditCard className="me-2" /> Confirmer le paiement
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}