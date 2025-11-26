import { useState } from "react";
import { Search, Image as ImageIcon } from "lucide-react";
import Input from "./input.jsx";
import Checkbox from "./Checkbox.jsx";
import  ProductCategoryRow  from "./Produitt/ProductCategoryRow.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductRow  from "./Produitt/ProduitRow.jsx";

const Produits = [
  { categorie: "SPORT", prix: "2.000.000", stocked: true, noms: "MERCEDES-BENZ", image: "/assets/o.jpg" },
  { categorie: "BOLIDE", prix: "25.000.000", stocked: true, noms: "TOYOTA", image: "/assets/o.jpg" },
  { categorie: "BOLIDE", prix: "13.000.000", stocked: false, noms: "YARIS", image: "/assets/o.jpg" },
  { categorie: "BOLIDE", prix: "67.000.000", stocked: true, noms: "PAJEROT", image: "/assets/o.jpg" },
  { categorie: "LUXE", prix: "200.000.000", stocked: false, noms: "ROLLS ROYCE", image: "/assets/o.jpg" },
  { categorie: "LUXE", prix: "150.000.000", stocked: true, noms: "BENTLEY", image: "/assets/o.jpg" },
  { categorie: "CLASSIQUE", prix: "5.000.000", stocked: true, noms: "PEUGEOT 504", image: "/assets/o.jpg" },
  { categorie: "CLASSIQUE", prix: "3.500.000", stocked: false, noms: "CITROEN DS", image: "/assets/o.jpg" },
];

export default function Searchbar() {
  const [search, setSearch] = useState("");
  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const [imageSearch, setImageSearch] = useState(null);

  // Filtrage
  const filteredProducts = Produits.filter((p) => {
    const matchSearch = p.noms.toLowerCase().includes(search.toLowerCase());
    const matchStock = !showStockedOnly || p.stocked;
    return matchSearch && matchStock;
  });

  // Structure du tableau
  const rows = [];
  let lastCategory = null;
  filteredProducts.forEach((product, index) => {
    if (product.categorie !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={`cat-${product.categorie}-${index}`}
          category={product.categorie}
        />
      );
      lastCategory = product.categorie;
    }
    rows.push(
      <ProductRow product={product} key={`prod-${product.noms}-${index}`} />
    );
  });

  // Gestion de la recherche visuelle
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setImageSearch(URL.createObjectURL(file));
  };

  return (
    <div className="container mt-4 p-4 rounded-4 shadow-lg bg-white">
      {/* HEADER */}
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-4">
        <div className="d-flex align-items-center mb-3 mb-md-0">
          <Search size={26} className="me-2 text-primary" />
          <h2 className="fw-bold mb-0 text-primary">Catalogue des Véhicules</h2>
        </div>

        <div className="d-flex align-items-center gap-2">
          <label htmlFor="imageSearch" className="btn btn-outline-primary d-flex align-items-center gap-2">
            <ImageIcon size={18} />
            Recherche visuelle
          </label>
          <input
            type="file"
            id="imageSearch"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
      </div>

      {/* IMAGE PRÉVISUALISATION */}
      {imageSearch && (
        <div className="text-center mb-3">
          <img
            src={imageSearch}
            alt="Recherche visuelle"
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "200px" }}
          />
        </div>
      )}

      {/* BARRE DE RECHERCHE */}
      <div className="d-flex flex-column flex-sm-row align-items-center gap-3 mb-3">
        <Input
          placeholder="🔍 Rechercher un véhicule..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* CHECKBOX */}
      <Checkbox
        id="stocked"
        label="Afficher seulement les véhicules disponibles"
        checked={showStockedOnly}
        onChange={(e) =>
          setShowStockedOnly(e.target ? e.target.checked : !!e)
        }
      />

      {/* TABLEAU */}
      <div className="table-responsive mt-4">
        <table className="table table-hover align-middle text-center text-md-start">
          <thead className="table-primary">
            <tr>
              <th>Nom</th>
              <th className="text-end">Prix</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>

      {/* FOOTER */}
      <div className="text-center mt-4 text-secondary small">
        🚘 Explorez notre gamme de véhicules de rêve – adaptée à tous les budgets.
      </div>
    </div>
  );
}
