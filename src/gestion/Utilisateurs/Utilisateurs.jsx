import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaBirthdayCake,
  FaCamera,
  FaSignOutAlt,
  FaEdit,
  FaBell,
} from "react-icons/fa";
import { CalendarDays, CarFront } from "lucide-react";
import { useNavigate } from "react-router-dom";   // ✅ AJOUT IMPORTANT
import "./Utilisateurs.css";

const MonCompte = () => {
  const navigate = useNavigate(); // ✅ pour redirection

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    country: "",
    birthDate: "",
    avatar: "",
  });
  const [editing, setEditing] = useState(false);
  const [commandes, setCommandes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reponses, setReponses] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser) setUserData(storedUser);

    const savedOrders = JSON.parse(localStorage.getItem("userOrders")) || [];
    setCommandes(savedOrders);

    const allReponses = JSON.parse(localStorage.getItem("reponsesAdmin")) || [];

    const userReponses = allReponses.filter(
      (r) => r.to === storedUser?.username || r.to === storedUser?.email
    );

    setReponses(userReponses);

    const unread = userReponses.filter((r) => !r.read).length;
    setUnreadCount(unread);

    setLoading(false);
  }, []);

  const markAsRead = () => {
    const allReponses = JSON.parse(localStorage.getItem("reponsesAdmin")) || [];
    const updated = allReponses.map((r) => {
      if (r.to === userData.username || r.to === userData.email) {
        return { ...r, read: true };
      }
      return r;
    });
    localStorage.setItem("reponsesAdmin", JSON.stringify(updated));
    setReponses(updated.filter((r) => r.to === userData.username || r.to === userData.email));
    setUnreadCount(0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setUserData({ ...userData, avatar: reader.result });
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("✅ Informations mises à jour !");
    setEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("userData");
    window.location.href = "/";
  };

  return (
    <div className="account-page">
      {/* HEADER */}
      <header className="account-header d-flex align-items-center justify-content-between">
        <h2>Mon Compte</h2>

        <div
          className="position-relative me-3"
          style={{ cursor: "pointer" }}
          onClick={markAsRead}
        >
          <FaBell size={24} className="text-primary" />
          {unreadCount > 0 && (
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: "0.75rem" }}
            >
              {unreadCount}
            </span>
          )}
        </div>
      </header>

      <div className="account-container">
        {/* SECTION PROFIL */}
        <div className="profile-section">
          <div className="profile-card">
            <div className="avatar-container">
              <img
                src={
                  userData.avatar ||
                  "https://cdn-icons-png.flaticon.com/512/847/847969.png"
                }
                alt="Avatar"
              />
              {editing && (
                <label htmlFor="avatarInput" className="avatar-edit-btn">
                  <FaCamera />
                  <input
                    type="file"
                    id="avatarInput"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    hidden
                  />
                </label>
              )}
            </div>

            <h3>{userData.username || "Utilisateur"}</h3>
            <p>{userData.email || "non défini"}</p>

            <div className="btn-group">
              {!editing ? (
                <>
                  <button
                    className="btn-primary"
                    onClick={() => setEditing(true)}
                  >
                    <FaEdit /> Modifier
                  </button>
                  <button className="btn-danger" onClick={handleLogout}>
                    <FaSignOutAlt /> Déconnexion
                  </button>
                </>
              ) : (
                <>
                  <button className="btn-success" onClick={handleSave}>
                    💾 Enregistrer
                  </button>
                  <button
                    className="btn-secondary"
                    onClick={() => setEditing(false)}
                  >
                    ❌ Annuler
                  </button>
                </>
              )}
            </div>
          </div>

          {/* RÉPONSES ADMIN */}
          <div className="messages-section mt-4 p-3 rounded shadow-sm bg-white">
            <h4 className="text-primary mb-3">💬 Réponses de l’administrateur</h4>
            {reponses.length === 0 ? (
              <p className="text-muted text-center">Aucune réponse pour le moment.</p>
            ) : (
              <div className="overflow-auto" style={{ maxHeight: "250px" }}>
                {reponses.map((r, i) => (
                  <div
                    key={i}
                    className="p-2 mb-2 border rounded"
                    style={{
                      backgroundColor: r.read ? "#f9f9f9" : "#e9f5ff",
                      transition: "0.3s",
                    }}
                  >
                    <p className="mb-1 text-dark">{r.message}</p>
                    <small className="text-muted">{r.date}</small>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* SECTION INFOS */}
        <div className="info-section">
          {editing ? (
            <div className="edit-card">
              <h4>Modifier mes informations</h4>
              <div className="edit-form">
                {[
                  { name: "username", placeholder: "Nom complet", icon: <FaUser /> },
                  { name: "email", placeholder: "Email", icon: <FaEnvelope /> },
                  { name: "phone", placeholder: "Téléphone", icon: <FaPhone /> },
                  { name: "country", placeholder: "Pays", icon: <FaGlobe /> },
                  {
                    name: "birthDate",
                    placeholder: "Date de naissance",
                    icon: <FaBirthdayCake />,
                    type: "date",
                  },
                ].map((field, i) => (
                  <div className="input-field" key={i}>
                    <span className="icon">{field.icon}</span>
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={userData[field.name]}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="orders-section">
              <h4>🧾 Mes Commandes</h4>
              {loading ? (
                <p>Chargement...</p>
              ) : commandes.length === 0 ? (
                <p className="empty-text">Aucune commande pour le moment.</p>
              ) : (
                <div className="orders-grid">
                  {commandes.map((cmd) => (
                    <div key={cmd.id} className="order-card">
                      <div className="order-header">
                        <span className="order-id">Commande #{cmd.id}</span>
                        <span className="order-date">
                          <CalendarDays size={14} /> {cmd.date_commande}
                        </span>
                      </div>
                      <div className="order-body">
                        {cmd.voitures.map((v, i) => (
                          <p key={i}>
                            <CarFront size={14} className="me-1" /> {v.nom} ×{" "}
                            {v.qty}
                          </p>
                        ))}
                      </div>
                      <div className="order-footer">
                        <span className="order-total">
                          {cmd.total.toLocaleString()} FCFA
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ========================================================= */}
              {/*    📦 BOUTON : VOIR MA LIVRAISON                         */}
              {/* ========================================================= */}
              <div
                className="p-3 mt-3 text-center rounded shadow-sm"
                style={{
                  background: "#f1f8ff",
                  border: "1px solid #bcdfff",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                onClick={() => navigate("/livraison")}
              >
                📦 Voir ma livraison
              </div>

              {/* ========================================================= */}
              {/*    ⭐ BOUTON : DONNER UN AVIS                            */}
              {/* ========================================================= */}
              <div
                className="p-3 mt-3 text-center rounded shadow-sm"
                style={{
                  background: "#fff9e6",
                  border: "1px solid #ffe6a7",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                onClick={() => navigate("/avis")}
              >
                ⭐ Donner un avis
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MonCompte;
