import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminDashboard = () => {
  const [code, setCode] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [tab, setTab] = useState("produits");
  const [produits, setProduits] = useState([]);
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [stock, setStock] = useState(true);
  const [categorie, setCategorie] = useState("AUTRE");
  const [image, setImage] = useState("");

  // === Simulation d’un code d’accès admin ===
  const CODE_ADMIN = "1234";

  // === Gestion de l'ajout d'un produit ===
  const ajouterProduit = () => {
    if (!nom || !prix) {
      alert("Veuillez entrer le nom et le prix du produit.");
      return;
    }

    const nouveauProduit = {
      id: Date.now(),
      nom,
      prix,
      stock,
      categorie,
      image,
    };

    setProduits([...produits, nouveauProduit]);
    setNom("");
    setPrix("");
    setStock(true);
    setCategorie("AUTRE");
    setImage("");
  };

  // === Suppression d’un produit ===
  const supprimerProduit = (id) => {
    setProduits(produits.filter((p) => p.id !== id));
  };

  // === Graphique (affiché uniquement dans l’onglet Statistiques) ===
  useEffect(() => {
    if (tab !== "stats") return;

    const ctx = document.getElementById("salesChart");
    if (!ctx) return;

    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Jan", "Fév", "Mars", "Avr", "Mai", "Juin"],
        datasets: [
          {
            label: "Ventes mensuelles (FCFA)",
            data: [1200000, 900000, 1500000, 800000, 2000000, 1300000],
            backgroundColor: "rgba(13, 110, 253, 0.6)",
            borderColor: "rgba(13, 110, 253, 1)",
            borderWidth: 1,
            borderRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (val) => val.toLocaleString() + " FCFA",
            },
          },
        },
      },
    });

    return () => chart.destroy();
  }, [tab]);

  // === Si non authentifié ===
  if (!authenticated) {
    return (
      <div className="container text-center mt-5">
        <h3>🔒 Espace Administrateur</h3>
        <p>Veuillez entrer le code d’accès :</p>
        <input
          type="password"
          className="form-control w-25 mx-auto mb-3"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            if (code === CODE_ADMIN) setAuthenticated(true);
            else alert("Code incorrect");
          }}
        >
          Se connecter
        </button>
      </div>
    );
  }

  // === Tableau de bord ===
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">📊 Tableau de bord Administrateur</h2>

      {/* Onglets de navigation */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${tab === "produits" ? "active" : ""}`}
            onClick={() => setTab("produits")}
          >
            Produits
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${tab === "ajouter" ? "active" : ""}`}
            onClick={() => setTab("ajouter")}
          >
            Ajouter
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${tab === "stats" ? "active" : ""}`}
            onClick={() => setTab("stats")}
          >
            Statistiques
          </button>
        </li>
      </ul>

      {/* --- Onglet Produits --- */}
      {tab === "produits" && (
        <div>
          {produits.length === 0 ? (
            <p className="text-muted text-center">Aucun produit ajouté.</p>
          ) : (
            <div className="row">
              {produits.map((p) => (
                <div className="col-md-4 mb-4" key={p.id}>
                  <div className="card shadow-sm">
                    {p.image && (
                      <img
                        src={p.image}
                        className="card-img-top"
                        alt={p.nom}
                        style={{ height: "180px", objectFit: "cover" }}
                      />
                    )}
                    <div className="card-body">
                      <h5 className="card-title">{p.nom}</h5>
                      <p className="card-text">{p.prix} FCFA</p>
                      <p>
                        <span
                          className={`badge ${
                            p.stock ? "bg-success" : "bg-danger"
                          }`}
                        >
                          {p.stock ? "En stock" : "Rupture"}
                        </span>
                      </p>
                      <p className="text-muted small">{p.categorie}</p>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => supprimerProduit(p.id)}
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* --- Onglet Ajouter --- */}
      {tab === "ajouter" && (
        <div className="card p-4 shadow-sm">
          <h4>Ajouter un produit</h4>
          <div className="mb-3">
            <label className="form-label">Nom :</label>
            <input
              type="text"
              className="form-control"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Prix :</label>
            <input
              type="number"
              className="form-control"
              value={prix}
              onChange={(e) => setPrix(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Catégorie :</label>
            <select
              className="form-select"
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
            >
              <option value="SPORT">SPORT</option>
              <option value="TECH">TECH</option>
              <option value="MODE">MODE</option>
              <option value="AUTRE">AUTRE</option>
            </select>
          </div>
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={stock}
              onChange={(e) => setStock(e.target.checked)}
            />
            <label className="form-check-label">
              Disponible en stock
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">Image (URL) :</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex: /assets/produit1.jpg ou https://exemple.com/image.jpg"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <button className="btn btn-success" onClick={ajouterProduit}>
            ➕ Ajouter le produit
          </button>
        </div>
      )}

      {/* --- Onglet Statistiques --- */}
      {tab === "stats" && (
        <div className="card p-4 shadow-sm">
          <h4>Statistiques de ventes</h4>
          <div style={{ width: "100%", height: "300px" }}>
            <canvas id="salesChart"></canvas>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
