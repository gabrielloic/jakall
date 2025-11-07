
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Pages/Commande/Carte";
import Checkout from "./Pages/Commande/Checkout";
import MonCompte from "./gestion/Utilisateurs/Utilisateurs";
import Login from "./Pages/LoginSignup";

// Pages

const App = () => {
return (
<BrowserRouter>
<Routes>
{/* Page panier */}
<Route path="/" element={<Cart />} />

{/* Page paiement */}
<Route path="/checkout" element={<Checkout />} />

{/* Page compte utilisateur */}
<Route path="/moncompte" element={<MonCompte />} />

{/* Page login */}
<Route path="/login" element={<Login />} />
</Routes>
</BrowserRouter>
);
};

// Rend l'application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

