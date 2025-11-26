// main.jsx ou index.jsx
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ShopContextProvider from "./Context/ShopContext.jsx";

import "./index.css";
import { Cookie } from "lucide-react";
import CookieConsent from "./gestion/Localisatio_identification/cookie.jsx";

function Main() {
  const [accepted, setAccepted] = useState(false);

  // Quand l’utilisateur clique sur "J’accepte"
  const handleAccepted = () => {
    setAccepted(true);
  };

  return (
    <>
      {!accepted && <CookieConsent onAccepted={handleAccepted} />}

      {accepted && (
        <BrowserRouter>
          <ShopContextProvider>
            <App />
          </ShopContextProvider>
        </BrowserRouter>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
