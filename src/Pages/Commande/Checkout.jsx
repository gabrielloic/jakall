// src/pages/Checkout.jsx (ou l'emplacement que tu utilises)
import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CreditCard, CheckCircle2, Loader2 } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Checkout.css";

// Import crucial : on récupère les fonctions du panier depuis le contexte
import { ShopContext } from "../../Context/ShopContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Récupération du panier et du total depuis le ShopContext
  const {
    getCartArray,
    getTotalCartAmount,
    clearCart,
  } = useContext(ShopContext);

  // On prend les données passées via navigate (au cas où) sinon on prend celles du contexte
  const cart = state?.cart || getCartArray();
  const total = state?.total || getTotalCartAmount();

  // Infos utilisateur (toujours dans localStorage dans ton cas)
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

    // Format EXACTEMENT le même que ton ancien backend attendait
    const data = {
      email,
      cart,           // ← tableau d'objets avec qty
      total,
      cardNumber,
      expiry,
      cvv,
    };

    try {
      setLoading(true);

      const response = await fetch("http://localhost/commande.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const text = await response.text();
      console.log("Réponse brute :", text);

      let result;
      try {
        result = JSON.parse(text);
      } catch (e) {
        console.error("Réponse non JSON :", e, text);
        alert("Réponse serveur invalide : voir console.");
        return;
      }

      if (result.status === "success") {
        // On vide proprement le panier via le contexte
        clearCart();

        alert("Paiement réussi !");
        setSuccess(true);

        // Sauvegarde de la commande dans l'historique (comme avant)
        const userOrders = JSON.parse(localStorage.getItem("userOrders") || "[]");
        const newOrder = {
          id: result.commande_id || Date.now(),
          voitures: cart,
          total,
          date_commande: new Date().toLocaleString(),
        };
        localStorage.setItem("userOrders", JSON.stringify([...userOrders, newOrder]));
        localStorage.setItem("newAdminOrder", "true");

        // Redirection après succès
        setTimeout(() => navigate("/moncompte"), 2000);
      } else {
        alert(result.message || "Erreur lors du paiement.");
      }
    } catch (error) {
      console.error("Erreur fetch :", error);
      alert("Erreur de connexion au serveur. Vérifie ta console.");
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
          Paiement sécurisé
        </h2>

        {success ? (
          <div className="text-center my-5 py-5">
            <CheckCircle2 size={80} color="green" />
            <h4 className="mt-4 text-success fw-bold">
              Paiement effectué avec succès !
            </h4>
            <p>Redirection vers votre compte...</p>
          </div>
        ) : (
          <div className="row g-4">
            {/* === INFOS UTILISATEUR & RÉSUMÉ === */}
            <div className="col-lg-7">
              <div className="card border-0 shadow-sm rounded-4 mb-4 p-4">
                <h5 className="text-secondary mb-3">Informations utilisateur</h5>
                <p><strong>Nom :</strong> {user?.username || "Inconnu"}</p>
                <p><strong>Email :</strong> {user?.email || "Non disponible"}</p>
              </div>

              <div className="card border-0 shadow-sm rounded-4 p-4">
                <h5 className="text-secondary mb-3">Résumé de la commande</h5>
                {cart.length === 0 ? (
                  <p className="text-muted text-center">Votre panier est vide.</p>
                ) : (
                  <ul className="list-group mb-3">
                    {cart.map((item) => (
                      <li
                        key={item.id}
                        className="list-group-item d-flex justify-content-between align-items-center border-0 rounded-3 mb-2"
                        style={{ background: "#f8f9fa" }}
                      >
                        <div>
                          <strong>{item.nom}</strong> <br />
                          <small className="text-muted">
                            {Number(item.prix).toLocaleString()} $ × {item.qty}
                          </small>
                        </div>
                        <span className="fw-bold text-primary">
                          {(item.prix * item.qty).toLocaleString()} $
                        </span>
                      </li>
                    ))}
                    <li className="list-group-item d-flex justify-content-between border-top pt-3 fw-bold">
                      <span>Total</span>
                      <span className="text-success">
                        {Number(total).toLocaleString()} $
                      </span>
                    </li>
                  </ul>
                )}
              </div>
            </div>

            {/* === PAIEMENT === */}
            <div className="col-lg-5">
              <div className="card border-0 shadow-sm rounded-4 p-4">
                <h5 className="text-secondary mb-3">Paiement</h5>

                <input
                  className="form-control mb-3"
                  placeholder="Numéro de carte (ex: 4242424242424242)"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ""))}
                  inputMode="numeric"
                  maxLength="19"
                />
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      placeholder="MM/AA"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      maxLength="5"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      placeholder="CVV"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                      inputMode="numeric"
                      maxLength="4"
                    />
                  </div>
                </div>

                <button
                  className="btn btn-primary w-100 py-3 mt-4 fw-bold"
                  onClick={handleConfirmPayment}
                  disabled={loading || cart.length === 0}
                >
                  {loading ? (
                    <>
                      <Loader2 className="me-2 animate-spin" />
                      Traitement en cours...
                    </>
                  ) : (
                    <>
                      <CreditCard className="me-2" />
                      Payer {total.toLocaleString()} $
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