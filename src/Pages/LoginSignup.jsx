import React, { useState } from "react";
import "./Login.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fonction exécutée lors du clic sur "Login"
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification syntaxe de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Adresse email invalide !");
      return;
    }

    // Données à envoyer
    const data = { username, email, password };

    try {
      // alors l’URL doit être : http://localhost:8000/inscripti.php
      const response = await fetch("http://localhost/gestion.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password
        })
      })

      // Récupération de la réponse
      const result = await response.json();
      console.log(result);
      alert(result.message);
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      alert("Erreur de connexion au serveur.");
    }
  };

  return (
    <div className="login-container">
      {/* Partie gauche */}
      <div className="login-left">
        <h2>
          Find the car of your DREAMS! <br /> Extraordinary Cars
        </h2>
        <p>THE BEST SHOP IS JAKAL</p>
        <div className="signup-section">
          <span>Don't have an account?</span>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>

      {/* Partie droite */}
      <div className="login-right">
        <div className="login-box">
          <div className="logo">🌿</div>
          <h2>Welcome Back!</h2>

          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <div className="input-container">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <label>Email</label>
            <div className="input-container">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <label>Password</label>
            <div className="input-container">
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-btn">
              Login →
            </button>
            <p className="forgot">
              Forgot your password? <a href="#">Click Here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;