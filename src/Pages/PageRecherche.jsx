import React, { useState } from "react";
import  Input  from "../gestion/input"; // 🔹 Assure-toi que le chemin est correct
import  Checkbox  from "../gestion/input"; // 🔹 Pareil
import "bootstrap";

const produits = [
  { categorie: "BOLIDE", prix: "2.000.000", stocked: true, noms: "MERCEDES-BENZ" },
  { categorie: "BOLIDE", prix: "25.000.000", stocked: true, noms: "TOYOTA" },
  { categorie: "BOLIDE", prix: "13.000.000", stocked: false, noms: "YARIS" },
  { categorie: "BOLIDE", prix: "67.000.000", stocked: true, noms: "PAJEROT" },
  { categorie: "BOLIDE", prix: "200.000.000", stocked: false, noms: "POISSON" },
  { categorie: "LUXE", prix: "70.000.000", stocked: true, noms: "MBOMBI" },
  { categorie: "BOLIDE", prix: "290.000.000", stocked: true, noms: "TOUAREG" },
  { categorie: "SPORT", prix: "123.000.000", stocked: false, noms: "PEUGEOT" },
  { categorie: "BOLIDE", prix: "743.000.000", stocked: false, noms: "607" },
];

export default function PageRecherche() {
  const [query, setQuery] = useState("");
  const [showOnlyStocked, setShowOnlyStocked] = useState(false);

  // 🔍 Filtrage dynamique selon recherche + disponibilité
  const produitsFiltres = produits.filter((p) => {
    const correspond = p.noms.toLowerCase().includes(query.toLowerCase());
    const enStock = !showOnlyStocked || p.stocked;
    return correspond && enStock;
  });

  return (
    <div className="container mt-4">
      <h2>🔎 Recherche de voitures</h2>
      <div className="mb-3">
        <Input
          placeholder="Rechercher une voiture..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <Checkbox
        checked={showOnlyStocked}
        onChange={(e) => setShowOnlyStocked(e.target.checked)}
        label="Afficher uniquement les voitures disponibles"
      />

      <div className="mt-4">
        {produitsFiltres.length > 0 ? (
          <ul className="list-group">
            {produitsFiltres.map((p, i) => (
              <li key={i} className="list-group-item d-flex justify-content-between">
                <span>{p.noms} ({p.categorie})</span>
                <span>{p.prix} FCFA</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun résultat trouvé.</p>
        )}
      </div>
    </div>
  );
}