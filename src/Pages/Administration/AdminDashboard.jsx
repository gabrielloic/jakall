// src/Pages/Administration/AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BarChart2,
  Package,
  ShoppingBag,
  Plus,
  Trash2,
} from "lucide-react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// === Enregistrement des composants du graphique ===
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AdminDashboard() {
  const [tab, setTab] = useState("produits");
  const [produits, setProduits] = useState([]);
  const [commandes, setCommandes] = useState([]);
  const [newProduit, setNewProduit] = useState({
    nom: "",
    prix: "",
    categorie: "",
    description: "",
    image: "",
  });

  // === Vérification du code d’accès admin ===
  const [isAuthorized, setIsAuthorized] = useState(false);
  useEffect(() => {
    const code = prompt("🔐 Entrez le code administrateur :");
    if (code === "1234") {
      setIsAuthorized(true);
    } else {
      alert("❌ Code incorrect !");
      window.location.href = "/";
    }
  }, []);

  // === Chargement des produits ===
  useEffect(() => {
    const saved = localStorage.getItem("voitures");
    if (saved) {
      setProduits(JSON.parse(saved));
    } else {
      fetch("http://localhost/backend/get_voitures.php")
        .then((r) => r.json())
        .then((data) => setProduits(data))
        .catch(() => setProduits([]));
    }
  }, []);

  // === Chargement des commandes ===
  useEffect(() => {
    fetch("http://localhost/backend/get_all_commandes.php")
      .then((r) => r.json())
      .then((data) => setCommandes(data.commandes || []))
      .catch(() => setCommandes([]));
  }, []);

  // === Ajouter un produit ===
  const addProduit = () => {
    if (!newProduit.nom || !newProduit.prix) {
      alert("⚠️ Veuillez remplir au minimum le nom et le prix !");
      return;
    }
    const updated = [...produits, { ...newProduit, id: Date.now() }];
    setProduits(updated);
    localStorage.setItem("voitures", JSON.stringify(updated));
    setNewProduit({ nom: "", prix: "", categorie: "", description: "", image: "" });
  };

  // === Supprimer un produit ===
  const deleteProduit = (id) => {
    if (!window.confirm("🗑️ Supprimer ce produit ?")) return;
    const updated = produits.filter((p) => p.id !== id);
    setProduits(updated);
    localStorage.setItem("voitures", JSON.stringify(updated));
  };

  // === Données pour le graphique ===
  const chartData = {
    labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
    datasets: [
      {
        label: "Ventes (FCFA)",
        data: [1200000, 900000, 1300000, 1500000, 1100000, 1800000],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderRadius: 8,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "bottom" },
      title: { display: true, text: "Statistiques des ventes par mois" },
    },
  };

  if (!isAuthorized) return null;

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-primary text-center mb-4">
        Tableau de bord Administrateur
      </h2>

      {/* === NAVIGATION === */}
      <div className="d-flex justify-content-center gap-3 mb-4">
        <button
          className={`btn ${tab === "produits" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setTab("produits")}
        >
          <Package className="me-2" size={18} /> Produits
        </button>
        <button
          className={`btn ${tab === "commandes" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setTab("commandes")}
        >
          <ShoppingBag className="me-2" size={18} /> Commandes
        </button>
        <button
          className={`btn ${tab === "stats" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setTab("stats")}
        >
          <BarChart2 className="me-2" size={18} /> Statistiques
        </button>
      </div>

      {/* === ONGLET PRODUITS === */}
      {tab === "produits" && (
        <div className="card shadow p-4 rounded-4">
          <h4 className="text-primary mb-3">➕ Ajouter un produit</h4>

          {/* FORMULAIRE mieux espacé */}
          <div className="bg-light p-4 rounded-4 mb-4">
            <div className="row g-3">
              <div className="col-md-3">
                <label className="form-label fw-semibold">Nom</label>
                <input
                  className="form-control"
                  placeholder="Ex: Toyota Corolla"
                  value={newProduit.nom}
                  onChange={(e) => setNewProduit({ ...newProduit, nom: e.target.value })}
                />
              </div>
              <div className="col-md-2">
                <label className="form-label fw-semibold">Prix (FCFA)</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Ex: 2 000 000"
                  value={newProduit.prix}
                  onChange={(e) =>
                    setNewProduit({ ...newProduit, prix: parseInt(e.target.value) })
                  }
                />
              </div>
              <div className="col-md-2">
                <label className="form-label fw-semibold">Catégorie</label>
                <input
                  className="form-control"
                  placeholder="Ex: Sport"
                  value={newProduit.categorie}
                  onChange={(e) =>
                    setNewProduit({ ...newProduit, categorie: e.target.value })
                  }
                />
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold">Image (URL)</label>
                <input
                  className="form-control"
                  placeholder="Ex: /assets/voiture1.jpg"
                  value={newProduit.image}
                  onChange={(e) => setNewProduit({ ...newProduit, image: e.target.value })}
                />
              </div>
              <div className="col-md-2 d-grid align-items-end">
                <button className="btn btn-success" onClick={addProduit}>
                  <Plus size={16} className="me-1" /> Ajouter
                </button>
              </div>
            </div>
          </div>

          <h5 className="text-primary mb-3">📦 Liste des produits</h5>
          <table className="table table-striped table-hover align-middle">
            <thead className="table-primary">
              <tr>
                <th>Image</th>
                <th>Nom</th>
                <th>Catégorie</th>
                <th>Prix</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {produits.map((p) => (
                <tr key={p.id}>
                  <td>
                    <img
                      src={p.image || "/assets/o.jpg"}
                      alt={p.nom}
                      style={{
                        width: "60px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                      className="rounded"
                    />
                  </td>
                  <td>{p.nom}</td>
                  <td>{p.categorie}</td>
                  <td>{p.prix.toLocaleString()} FCFA</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => deleteProduit(p.id)}
                    >
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* === ONGLET COMMANDES === */}
      {tab === "commandes" && (
        <div className="card shadow p-4 rounded-4">
          <h4 className="text-primary mb-3">🧾 Liste des commandes</h4>
          {commandes.length === 0 ? (
            <p className="text-muted text-center">Aucune commande enregistrée</p>
          ) : (
            <table className="table table-hover align-middle">
              <thead className="table-primary">
                <tr>
                  <th>ID</th>
                  <th>Client</th>
                  <th>Total</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {commandes.map((cmd) => (
                  <tr key={cmd.id}>
                    <td>#{cmd.id}</td>
                    <td>{cmd.email}</td>
                    <td>{cmd.total.toLocaleString()} FCFA</td>
                    <td>{cmd.date_commande}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* === ONGLET STATISTIQUES === */}
      {tab === "stats" && (
        <div className="card shadow p-4 rounded-4">
          <h4 className="text-primary mb-3">📈 Statistiques des ventes</h4>
          <Bar data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
}
