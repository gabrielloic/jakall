// src/pages/Cart.jsx (ou ton chemin actuel)
import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingCart, Trash2, Plus, Minus, CreditCard } from "lucide-react";
import { ShopContext } from "../../Context/ShopContext";

export default function Cart() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const user = state?.user || JSON.parse(localStorage.getItem("userData") || "{}");

  const {
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
    getTotalCartAmount,
    getCartArray,
    all_cars,
  } = useContext(ShopContext);

  const cart = getCartArray();
  const subtotal = getTotalCartAmount();

  const gotoCheckout = () => {
    if (cart.length === 0) return alert("Votre panier est vide !");
    navigate("/checkout", { state: { cart, user, total: subtotal } });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">

          {/* === EN-TÊTE === */}
          <div className="d-flex align-items-center gap-3 mb-5">
            <ShoppingCart size={36} className="text-primary" />
            <h2 className="fw-bold mb-0">Mon Panier</h2>
            {cart.length > 0 && (
              <span className="badge bg-primary rounded-pill fs-6">
                {cart.length}
              </span>
            )}
          </div>

          {/* === PANIER VIDE === */}
          {cart.length === 0 ? (
            <div className="text-center py-5">
              <ShoppingCart size={80} className="text-muted mb-4 opacity-50" />
              <h4 className="text-muted">Votre panier est vide</h4>
              <button
                className="btn btn-outline-primary mt-3"
                onClick={() => navigate("/accueil")}
              >
                Continuer mes achats
              </button>
            </div>
          ) : (
            <>
              {/* === LISTE DES ARTICLES === */}
              <div className="list-group mb-4">
                {cart.map((item) => {
                  const car = all_cars.find((c) => c.id === item.id);
                  return (
                    <div
                      key={item.id}
                      className="list-group-item d-flex align-items-center gap-4 p-4 shadow-sm rounded-3 mb-3"
                    >
                      <img
                        src={car?.image || "/assets/o.jpg"}
                        alt={item.nom}
                        className="rounded-3"
                        style={{ width: "100px", height: "70px", objectFit: "cover" }}
                      />

                      <div className="flex-grow-1">
                        <h5 className="fw-bold mb-1">{item.nom}</h5>
                        <small className="text-muted">
                          {item.prix.toLocaleString()} $ l'unité
                        </small>
                      </div>

                      <div className="d-flex align-items-center gap-3">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Minus size={18} />
                        </button>
                        <span className="fw-bold fs-5 mx-2">{item.qty}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => addToCart(item.id)}
                        >
                          <Plus size={18} />
                        </button>

                        <button
                          className="btn btn-outline-danger btn-sm ms-3"
                          onClick={() => updateCartItemQuantity(item.id, 0)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      <div className="text-end">
                        <strong className="text-primary fs-5">
                          {(item.prix * item.qty).toLocaleString()} $
                        </strong>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* === TOTAL & BOUTONS === */}
              <div className="card border-0 shadow-sm p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="fw-bold mb-0">Total</h4>
                  <h3 className="text-primary fw-bold mb-0">
                    {subtotal.toLocaleString()} $
                  </h3>
                </div>

                <button
                  className="btn btn-primary w-100 py-3 fw-bold"
                  onClick={gotoCheckout}
                >
                  <CreditCard className="me-2" />
                  Passer au paiement
                </button>

                <button
                  className="btn btn-outline-danger w-100 mt-3"
                  onClick={clearCart}
                >
                  Vider le panier
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 