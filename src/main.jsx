// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchbar from "./gestion/Produit";



function App() {
  return (
    <BrowserRouter>
      {/* === Barre de navigation simple === */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold">
            🚗 AutoCatalog
          </Link>
        </div>
      </nav>

      {/* === Routes principales === */}
      <Routes>
        {/* Page d’accueil : ton système de recherche */}
        <Route path="/" element={<Searchbar />} />
      </Routes>
    </BrowserRouter>
  );
}

// === Point d’entrée de l’application ===
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
