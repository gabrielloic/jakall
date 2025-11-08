import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminDashboard from "./Pages/Administration/AdminDashboard.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
