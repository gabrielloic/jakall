import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BarChart2,
  Package,
  ShoppingBag,
  Plus,
  Trash2,
  Upload,
  Send,
  MessageCircle,
  User,
  Clock,
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AdminDashboard() {
  const [produits, setProduits] = useState([]);
  const [commandes, setCommandes] = useState([]);
  const [messages, setMessages] = useState([]);
  const [reponsesAdmin, setReponsesAdmin] = useState([]);
  const [newProduit, setNewProduit] = useState({
    nom: "",
    prix: "",
    categorie: "",
    description: "",
    image: null,
  });

  // === Sécurité admin ===
  const [isAuthorized, setIsAuthorized] = useState(false);
  useEffect(() => {
    const code = prompt("🔐 Entrez le code administrateur :");
    if (code === "1234") setIsAuthorized(true);
    else {
      alert("❌ Code incorrect !");
      window.location.href = "/";
    }
  }, []);

  // === Chargement initial ===
  useEffect(() => {
    const savedProduits = localStorage.getItem("voitures");
    if (savedProduits) setProduits(JSON.parse(savedProduits));

    const storedMessages = JSON.parse(localStorage.getItem("messages") || "[]");
    const storedReponses = JSON.parse(localStorage.getItem("reponsesAdmin") || "[]");
    setMessages(storedMessages);
    setReponsesAdmin(storedReponses);

    fetch("http://localhost/backend/get_all_commandes.php")
      .then((r) => r.json())
      .then((data) => setCommandes(data.commandes || []))
      .catch(() => setCommandes([]));
  }, []);

  // === Ajouter un produit ===
  const addProduit = () => {
    if (!newProduit.nom || !newProduit.prix) {
      alert("⚠️ Veuillez remplir le nom et le prix !");
      return;
    }

    const imageURL = newProduit.image
      ? URL.createObjectURL(newProduit.image)
      : "/assets/o.jpg";

    const updated = [
      ...produits,
      { ...newProduit, id: Date.now(), image: imageURL },
    ];

    setProduits(updated);
    localStorage.setItem("voitures", JSON.stringify(updated));
    setNewProduit({
      nom: "",
      prix: "",
      categorie: "",
      description: "",
      image: null,
    });
  };

  // === Supprimer produit ===
  const deleteProduit = (id) => {
    if (!window.confirm("🗑️ Supprimer ce produit ?")) return;
    const updated = produits.filter((p) => p.id !== id);
    setProduits(updated);
    localStorage.setItem("voitures", JSON.stringify(updated));
  };

  // === Réponse admin ===
  const handleSendResponse = (i, sender) => {
    const input = document.getElementById(`reponse-${i}`);
    const rep = input.value.trim();
    if (!rep) return alert("✏️ Écris une réponse !");
    const newRep = {
      to: sender,
      message: rep,
      date: new Date().toLocaleString(),
      read: false,
    };
    const updatedReps = [...reponsesAdmin, newRep];
    localStorage.setItem("reponsesAdmin", JSON.stringify(updatedReps));
    setReponsesAdmin(updatedReps);
    input.value = "";
    alert("✅ Réponse envoyée à l'utilisateur !");
  };

  // === Données graphiques ===
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
    <div className="container-fluid py-5 bg-light">
      <h2 className="fw-bold text-primary text-center mb-4">
        Tableau de bord Administrateur
      </h2>

      <div className="d-flex flex-wrap justify-content-around gap-3">
        {/* === PRODUITS === */}
        <div className="card shadow p-4 rounded-4" style={{ width: "30rem" }}>
          <h4 className="text-primary mb-3">
            <Package size={18} className="me-2" /> Produits
          </h4>

          <div className="bg-light p-3 rounded-4 mb-3">
            <div className="row g-3 align-items-end">
              <div className="col-md-4">
                <label className="form-label fw-semibold">Nom</label>
                <input
                  className="form-control"
                  placeholder="Ex: Toyota Corolla"
                  value={newProduit.nom}
                  onChange={(e) =>
                    setNewProduit({ ...newProduit, nom: e.target.value })
                  }
                />
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold">Prix (FCFA)</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Ex: 2 000 000"
                  value={newProduit.prix}
                  onChange={(e) =>
                    setNewProduit({ ...newProduit, prix: e.target.value })
                  }
                />
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold">Catégorie</label>
                <input
                  className="form-control"
                  placeholder="Ex: SUV"
                  value={newProduit.categorie}
                  onChange={(e) =>
                    setNewProduit({ ...newProduit, categorie: e.target.value })
                  }
                />
              </div>
              <div className="col-md-2">
                <label className="form-label fw-semibold">Image</label>
                <label className="btn btn-outline-secondary w-100">
                  <Upload size={16} />
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(e) =>
                      setNewProduit({
                        ...newProduit,
                        image: e.target.files[0],
                      })
                    }
                  />
                </label>
              </div>
            </div>

            <div className="mt-3 d-grid">
              <button className="btn btn-success" onClick={addProduit}>
                <Plus size={16} className="me-1" /> Ajouter le produit
              </button>
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {produits.map((p) => (
                <tr key={p.id}>
                  <td>
                    <img
                      src={p.image || "/assets/o.jpg"}
                      alt={p.nom}
                      width="60"
                      height="40"
                      style={{ objectFit: "cover" }}
                      className="rounded"
                    />
                  </td>
                  <td>{p.nom}</td>
                  <td>{p.categorie}</td>
                  <td>{parseInt(p.prix).toLocaleString()} FCFA</td>
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

        {/* === COMMANDES === */}
        <div className="card shadow p-4 rounded-4" style={{ width: "30rem" }}>
          <h4 className="text-primary mb-3">
            <ShoppingBag size={18} className="me-2" /> Commandes
          </h4>

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

        {/* === STATISTIQUES === */}
        <div className="card shadow p-4 rounded-4" style={{ width: "30rem" }}>
          <h4 className="text-primary mb-3">
            <BarChart2 size={18} className="me-2" /> Statistiques de ventes
          </h4>
          <Bar data={chartData} options={chartOptions} />
        </div>

        {/* === MESSAGES UTILISATEURS === */}
        <div
          className="card shadow-lg p-4 rounded-5"
          style={{
            width: "30rem",
            background: "white",
          }}
        >
          <h4 className="text-primary mb-3 d-flex align-items-center gap-2">
            <MessageCircle size={20} /> Messages Utilisateurs
          </h4>
          {messages.length === 0 ? (
            <div className="text-center text-muted py-5">
              <MessageCircle size={40} className="mb-2 text-secondary" />
              <p>Aucun message reçu pour le moment.</p>
            </div>
          ) : (
            <div
              className="overflow-auto px-2"
              style={{ maxHeight: "400px", scrollBehavior: "smooth" }}
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className="p-3 mb-4 rounded-4 shadow-sm border"
                  style={{ backgroundColor: "#fdfdfd" }}
                >
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <img
                      src={
                        msg.avatar ||
                        "https://cdn-icons-png.flaticon.com/512/847/847969.png"
                      }
                      alt={msg.sender}
                      className="rounded-circle border shadow-sm"
                      width="55"
                      height="55"
                      style={{ objectFit: "cover" }}
                    />
                    <div>
                      <h6 className="fw-bold mb-1 d-flex align-items-center gap-2">
                        <User size={15} className="text-primary" /> {msg.sender}
                      </h6>
                      <p
                        className="mb-1 text-secondary"
                        style={{ fontSize: "0.95rem", lineHeight: "1.4" }}
                      >
                        {msg.message}
                      </p>
                      <small className="text-muted d-flex align-items-center gap-1">
                        <Clock size={13} /> {msg.date}
                      </small>
                    </div>
                  </div>

                  <div className="mt-3 border-top pt-3">
                    <input
                      type="text"
                      placeholder="✏️ Répondre à ce message..."
                      className="form-control form-control-sm rounded-pill mb-2"
                      id={`reponse-${i}`}
                    />
                    <button
                      className="btn btn-primary btn-sm rounded-pill px-3 d-flex align-items-center gap-2"
                      onClick={() => handleSendResponse(i, msg.sender)}
                    >
                      <Send size={15} /> Envoyer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
