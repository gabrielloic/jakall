import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Discussion from "./Pages/gestion/Message/Envoi.jsx";
import Reception from "./Pages/gestion/Message/Reception.jsx";

const Main = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [lang, setLang] = useState(localStorage.getItem("lang") || "fr");

  // Textes traduits
  const translations = {
    fr: { send: "Envoyer", inbox: "Réception", title: "Jakal_Messagerie" },
    en: { send: "Send", inbox: "Inbox", title: "Jakal_Messaging" },
    zh: { send: "发送", inbox: "收件箱", title: "Jakal_消息" },
  };

  // Appliquer le thème et sauvegarder les préférences
  useEffect(() => {
    document.body.className =
      theme === "dark" ? "bg-dark text-light" : "bg-light text-dark";
    localStorage.setItem("theme", theme);
    localStorage.setItem("lang", lang);
  }, [theme, lang]);

  return (
    <BrowserRouter>
      {/* 🌈 BARRE DE NAVIGATION */}
      <nav
        className="navbar navbar-expand-lg shadow-sm"
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(90deg, #111, #333)"
              : "linear-gradient(90deg, #007bff, #00bfff)",
          padding: "10px 20px",
        }}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link
            to="/"
            className={`navbar-brand fw-bold ${
              theme === "dark" ? "text-light" : "text-white"
            }`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            💬 {translations[lang].title}
          </Link>

          <div className="d-flex align-items-center">
            <Link
              to="/"
              className={`btn me-2 ${
                theme === "dark"
                  ? "btn-outline-light"
                  : "btn-outline-light text-white"
              }`}
            >
              {translations[lang].send}
            </Link>
            <Link
              to="/reception"
              className={`btn ${
                theme === "dark"
                  ? "btn-light text-dark"
                  : "btn-light text-primary"
              } fw-semibold me-3`}
            >
              {translations[lang].inbox}
            </Link>

            {/* 🌍 Sélecteur de langue */}
            <select
              className="form-select form-select-sm me-2"
              style={{ width: "100px" }}
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              <option value="fr">🇫🇷 FR</option>
              <option value="en">🇬🇧 EN</option>
              <option value="zh">🇨🇳 中文</option>
            </select>

            {/* 🌙 Bouton de thème */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className={`btn ${
                theme === "dark" ? "btn-light text-dark" : "btn-dark text-light"
              }`}
            >
              {theme === "dark" ? "☀️ Clair" : "🌙 Sombre"}
            </button>
          </div>
        </div>
      </nav>

      {/* 📱 Routes */}
      <Routes>
        <Route path="/" element={<Discussion />} />
        <Route path="/reception" element={<Reception />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
