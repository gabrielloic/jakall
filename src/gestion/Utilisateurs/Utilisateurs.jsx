import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaBirthdayCake,
} from "react-icons/fa";
import { Package, CalendarDays, CarFront } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Utilisateurs.css";

const MonCompte = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    country: "",
    birthDate: "",
  });

  const [editing, setEditing] = useState(false);
  const [commandes, setCommandes] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- Charger les infos utilisateur depuis localStorage ---
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser) {
      setUserData({
        username: storedUser.username || "",
        email: storedUser.email || "",
        phone: storedUser.phone || "",
        country: storedUser.country || "",
        birthDate: storedUser.birthDate || "",
      });
    }
  }, []);

  // --- Récupération des commandes utilisateur ---
  const fetchCommandes = async (email) => {
    if (!email) return;
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost/backend/get_commandes.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        setCommandes(data.commandes);
      } else {
        setCommandes([]);
      }
    } catch (err) {
      console.error("Erreur :", err);
      setCommandes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser?.email) {
      fetchCommandes(storedUser.email);
    } else {
      setLoading(false);
    }
  }, []);

  // --- Gestion des changements de profil ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = () => {
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("✅ Informations mises à jour !");
    setEditing(false);
    fetchCommandes(userData.email); // Recharge les commandes avec le nouvel email
  };

  const handleLogout = () => {
    localStorage.removeItem("userData");
    window.location.href = "/";
  };

  return (
    <div className="moncompte-page">
      <div className="container moncompte-container">
        <div className="row">
          {/* --- PROFIL UTILISATEUR (bloc gauche) --- */}
          <div className="col-lg-4 col-md-5 col-12 mb-4">
            <div className="profile-card">
              <div className="profile-avatar">
                <FaUser size={80} />
              </div>
              <h3>{userData.username || "Utilisateur"}</h3>
              <p className="email">{userData.email || "email@example.com"}</p>

              {!editing ? (
                <>
                  <div className="info-section">
                    <h5>Informations personnelles</h5>
                    <p>
                      <strong>Nom :</strong> {userData.username || "-"}
                    </p>
                    <p>
                      <strong>Date de naissance :</strong>{" "}
                      {userData.birthDate || "-"}
                    </p>
                    <p>
                      <strong>Pays :</strong> {userData.country || "-"}
                    </p>
                    <p>
                      <strong>Téléphone :</strong> {userData.phone || "-"}
                    </p>
                  </div>

                  <button
                    className="btn-primary-custom"
                    onClick={() => setEditing(true)}
                  >
                    ✏️ Modifier
                  </button>
                  <button
                    className="btn-secondary-custom"
                    onClick={handleLogout}
                  >
                    🔒 Déconnexion
                  </button>
                </>
              ) : (
                <div className="edit-section">
                  <div className="input-group">
                    <FaUser className="icon" />
                    <input
                      type="text"
                      name="username"
                      value={userData.username}
                      onChange={handleChange}
                      placeholder="Nom"
                    />
                  </div>
                  <div className="input-group">
                    <FaEnvelope className="icon" />
                    <input
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                      placeholder="Email"
                    />
                  </div>
                  <div className="input-group">
                    <FaPhone className="icon" />
                    <input
                      type="text"
                      name="phone"
                      value={userData.phone}
                      onChange={handleChange}
                      placeholder="Téléphone"
                    />
                  </div>
                  <div className="input-group">
                    <FaGlobe className="icon" />
                    <input
                      type="text"
                      name="country"
                      value={userData.country}
                      onChange={handleChange}
                      placeholder="Pays"
                    />
                  </div>
                  <div className="input-group">
                    <FaBirthdayCake className="icon" />
                    <input
                      type="date"
                      name="birthDate"
                      value={userData.birthDate}
                      onChange={handleChange}
                    />
                  </div>

                  <button className="btn-success-custom" onClick={handleSave}>
                    💾 Enregistrer
                  </button>
                  <button
                    className="btn-cancel-custom"
                    onClick={() => setEditing(false)}
                  >
                    ❌ Annuler
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* --- HISTORIQUE DES COMMANDES (bloc droit) --- */}
          <div className="col-lg-8 col-md-7 col-12">
            <div className="orders-card">
              <h4>🧾 Historique de vos commandes</h4>
              {loading ? (
                <p className="text-center text-muted mt-3">Chargement...</p>
              ) : commandes.length === 0 ? (
                <p className="text-center text-muted mt-3">
                  Vous n'avez encore passé aucune commande.
                </p>
              ) : (
                <div className="table-responsive mt-3">
                  <table className="table table-borderless align-middle">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Voiture(s)</th>
                        <th>Date</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {commandes.map((cmd) => (
                        <tr key={cmd.id} className="order-row">
                          <td>
                            <Package size={18} className="me-2 text-secondary" />
                            #{cmd.id}
                          </td>
                          <td>
                            {cmd.voitures.map((v, i) => (
                              <div key={i} className="small text-muted">
                                <CarFront
                                  size={14}
                                  className="me-1 text-primary"
                                />
                                {v.nom_voiture} × {v.quantite}
                              </div>
                            ))}
                          </td>
                          <td>
                            <CalendarDays
                              size={16}
                              className="me-1 text-secondary"
                            />
                            {cmd.date_commande}
                          </td>
                          <td className="fw-bold text-success">
                            {cmd.total.toLocaleString()} FCFA
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonCompte;
