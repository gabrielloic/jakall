import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingCart, Trash2, Plus, Minus, CreditCard } from "lucide-react";
import { voitures } from "../../gestion/Voitures";

export default function Cart() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const userFromState =
    state?.user || JSON.parse(localStorage.getItem("userData"));

  // --- PANIER LOCAL ---
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart_v1");
    return saved ? JSON.parse(saved) : [];
  });

  // --- SAUVEGARDE AUTO ---
  useEffect(() => {
    localStorage.setItem("cart_v1", JSON.stringify(cart));
  }, [cart]);

  // --- AJOUT PRODUIT ---
  const addProduct = (p) => {
    setCart((prev) => {
      const found = prev.find((x) => x.id === p.id);
      if (found) {
        return prev.map((x) =>
          x.id === p.id ? { ...x, qty: x.qty + 1 } : x
        );
      }
      return [...prev, { ...p, qty: 1 }];
    });
  };

  // --- RETIRER 1 PRODUIT ---
  const removeOne = (id) => {
    setCart((prev) =>
      prev
        .map((x) => (x.id === id ? { ...x, qty: x.qty - 1 } : x))
        .filter((x) => x.qty > 0)
    );
  };

  // --- SUPPRIMER UN PRODUIT ENTIER ---
  const removeItem = (id) => {
    setCart((prev) => prev.filter((x) => x.id !== id));
  };

  // --- CALCUL TOTAL ---
  const subtotal = cart.reduce((s, it) => s + (it.prix || 0) * (it.qty || 0), 0);

  // --- REDIRECTION VERS CHECKOUT ---
  const gotoCheckout = () => {
    if (cart.length === 0) {
      alert("Votre panier est vide !");
      return;
    }
    navigate("/checkout", {
      state: { cart, user: userFromState, total: subtotal },
    });
  };

  return (
    <div className="container my-5 p-4 rounded-4 shadow bg-white">
      {/* === HEADER === */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-2">
          <ShoppingCart size={28} className="text-primary" />
          <h2 className="fw-bold text-primary mb-0">Mon Panier</h2>
        </div>
        {userFromState && (
          <div className="small text-muted mt-2 mt-md-0">
            Connecté en tant que <strong>{userFromState.username}</strong>
          </div>
        )}
      </div>

      <div className="row g-4">
        {/* === PRODUITS DISPONIBLES === */}
        <div className="col-lg-8">
          <h4 className="fw-semibold text-secondary mb-3">Nos Véhicules</h4>
          <div className="row g-4">
            {voitures.map((p) => (
              <div className="col-12 col-sm-6 col-md-4" key={p.id}>
                <div className="card border-0 shadow-sm h-100 text-center p-3 rounded-4">
                  <img
                    src={p.image || "/assets/o.jpg"}
                    alt={p.nom}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/o.jpg";
                    }}
                    className="img-fluid rounded-3 mb-3"
                    style={{
                      width: "100%",
                      height: "160px",
                      objectFit: "cover",
                      objectPosition: "center",
                      backgroundColor: "#f8f9fa",
                    }}
                  />
                  <h5 className="fw-bold">{p.nom}</h5>
                  <p className="text-muted small mb-1">{p.categorie}</p>
                  <p className="text-secondary small mb-2 text-truncate">
                    {p.description}
                  </p>
                  <p className="fw-semibold text-primary mb-3">
                    {p.prix.toLocaleString()} FCFA
                  </p>
                  <button
                    className="btn btn-outline-primary w-100 rounded-3"
                    onClick={() => addProduct(p)}
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === RÉSUMÉ DU PANIER === */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm p-4 rounded-4 bg-light h-100">
            <h4 className="text-primary fw-bold mb-3 text-center">Résumé</h4>

            {cart.length === 0 ? (
              <p className="text-muted text-center">Votre panier est vide 🛒</p>
            ) : (
              <>
                <div className="list-group mb-3">
                  {cart.map((it) => (
                    <div
                      key={it.id}
                      className="list-group-item d-flex justify-content-between align-items-center border-0 mb-2 rounded-3"
                      style={{ backgroundColor: "#fdfdfd" }}
                    >
                      <div>
                        <strong>{it.nom}</strong>
                        <div className="text-muted small">
                          {it.prix.toLocaleString()} FCFA
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => removeOne(it.id)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="fw-bold">{it.qty}</span>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => addProduct(it)}
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => removeItem(it.id)}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-top pt-3 mb-3 d-flex justify-content-between">
                  <span className="fw-semibold">Sous-total :</span>
                  <span className="fw-bold text-primary">
                    {subtotal.toLocaleString()} FCFA
                  </span>
                </div>

                {/* === BOUTON VERS CHECKOUT === */}
                <button
                  className="btn btn-primary w-100 mb-2 rounded-3 py-2"
                  onClick={gotoCheckout}
                >
                  <CreditCard size={18} className="me-2" />
                  Passer au paiement
                </button>

                <button
                  className="btn btn-outline-danger w-100 rounded-3"
                  onClick={() => {
                    setCart([]);
                    localStorage.removeItem("cart_v1");
                  }}
                >
                  Vider le panier
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
