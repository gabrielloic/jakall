import React, { useState } from "react";
import { Search, Camera } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const CATALOGUE = [
  {
    nom: "Mercedes GLE",
    image: "assets/o.jpg",
    prix: "25.000.000",
    quantite: 3,
    stocked: true,
  },
  {
    nom: "BMW X6",
    image: "https://via.placeholder.com/150",
    prix: "30.000.000",
    quantite: 0,
    stocked: false,
  },
  {
    nom: "Toyota Prado",
    image: "https://via.placeholder.com/150",
    prix: "18.000.000",
    quantite: 4,
    stocked: true,
  },
];

// Carte voiture moderne
function Voiture({ nom, image, prix, quantite, stocked }) {
  return (
    <div className="card shadow-lg border-0 rounded-4 h-100">
      <img
        src={image}
        alt={nom}
        className="card-img-top rounded-top-4"
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{nom}</h5>
        <p className="text-muted mb-1">Prix : <strong>{prix} FCFA</strong></p>
        <p className="text-muted mb-1">Quantité : <strong>{quantite}</strong></p>
        <span
          className={`badge px-3 py-2 ${
            stocked ? "bg-success" : "bg-danger"
          }`}
        >
          {stocked ? "En stock" : "Rupture"}
        </span>
      </div>
    </div>
  );
}

export default function RechercheVoitures() {
  const [search, setSearch] = useState("");
  const [imageSearch, setImageSearch] = useState(null);
  const [showStock, setShowStock] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImageSearch(URL.createObjectURL(file));
  };

  const voituresFiltrees = CATALOGUE.filter((v) => {
    const matchText = v.nom.toLowerCase().includes(search.toLowerCase());
    const matchStock = showStock ? v.stocked === true : true;
    return matchText && matchStock;
  });

  return (
    <div className="container py-5">

      {/* TITRE */}
      <h1 className="fw-bold text-center mb-4">🔍 Rechercher une voiture</h1>

      {/* Recherche texte */}
      <div className="input-group mb-4 shadow-sm">
        <span className="input-group-text bg-primary text-white">
          <Search />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Exemple : Mercedes, BMW..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ height: "50px" }}
        />
      </div>

      {/* Recherche image */}
      <div className="card p-3 mb-4 border-0 shadow-sm rounded-4">
        <p className="fw-semibold mb-2">Recherche par image</p>

        <label className="btn btn-outline-primary d-flex align-items-center gap-2 w-fit">
          <Camera /> Importer une image
          <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
        </label>

        {imageSearch && (
          <img
            src={imageSearch}
            alt="search"
            className="img-thumbnail mt-3 rounded-4 shadow"
            style={{ width: "180px", height: "180px", objectFit: "cover" }}
          />
        )}
      </div>

      {/* Filtre stock */}
      <button
        onClick={() => setShowStock(!showStock)}
        className={`btn ${showStock ? "btn-secondary" : "btn-primary"} mb-4 px-4 py-2 rounded-3`}
      >
        {showStock ? "Afficher toutes les voitures" : "Afficher uniquement en stock"}
      </button>

      {/* Catalogue */}
      <div className="row g-4">
        {voituresFiltrees.length > 0 ? (
          voituresFiltrees.map((voiture, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4">
              <Voiture {...voiture} />
            </div>
          ))
        ) : (
          <p className="text-center mt-5 text-muted">Aucun résultat trouvé...</p>
        )}
      </div>

    </div>
  );
}
