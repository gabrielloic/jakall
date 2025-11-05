import { Search } from "lucide-react";
import Input from "./input";
import Checkbox from "./Checkbox";
import ProductCategoryRow from "./Produitt/ProductCategoryRow";
import ProductRow from "./Produitt/ProduitRow";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Produits = [
  { categorie: "SPORT", prix: "2.000.000", stocked: true, noms: "MERCEDES-BENZ" },
  { categorie: "BOLIDE", prix: "25.000.000", stocked: true, noms: "TOYOTA" },
  { categorie: "BOLIDE", prix: "13.000.000", stocked: false, noms: "YARIS" },
  { categorie: "BOLIDE", prix: "67.000.000", stocked: true, noms: "PAJEROT" },
  { categorie: "LUXE", prix: "200.000.000", stocked: false, noms: "POISSON" },
  { categorie: "BOLIDE", prix: "70.000.000", stocked: true, noms: "MBOMBI" },
  { categorie: "BOLIDE", prix: "290.000.000", stocked: true, noms: "TOUAREG" },
  { categorie: "BOLIDE", prix: "123.000.000", stocked: false, noms: "PEUGEOT" },
  { categorie: "BOLIDE", prix: "743.000.000", stocked: false, noms: "607" },
];

export function Searchbar() {
  const [search, setSearch] = useState("");
  const [showStockedOnly, setShowStockedOnly] = useState(false);

  const filteredProducts = Produits.filter((p) => {
    const matchSearch = p.noms.toLowerCase().includes(search.toLowerCase());
    const matchStock = !showStockedOnly || p.stocked;
    return matchSearch && matchStock;
  });

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

  return (
    <div
      className="container mt-4 p-4 rounded-4 shadow-lg"
      style={{
        background: "linear-gradient(135deg, #eaf3ff, #f8fbff)",
        color: "#1a1a1a",
        border: "1px solid #d0e3ff",
        maxWidth: "900px",
      }}
    >
      {/* === HEADER === */}
      <div className="d-flex align-items-center justify-content-between flex-wrap mb-4">
        <div className="d-flex align-items-center mb-2">
          <Search size={24} className="me-2 text-primary" />
          <h2 className="fw-bold mb-0 text-primary">Catalogue des Véhicules</h2>
        </div>
      </div>

      {/* === BARRE DE RECHERCHE === */}
      <div className="d-flex align-items-center gap-2 mb-3 flex-wrap">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control form-control-lg rounded-3 border-0 shadow-sm flex-grow-1"
          placeholder="🔍 Rechercher un véhicule..."
          style={{
            backgroundColor: "#ffffff",
            color: "#222",
            border: "1px solid #bcd4ff",
            fontWeight: "500",
            minWidth: "250px",
          }}
        />
      </div>

      {/* === CHECKBOX === */}
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="checkbox"
          id="stocked"
          checked={showStockedOnly}
          onChange={(e) => setShowStockedOnly(e.target.checked)}
          style={{ cursor: "pointer" }}
        />
        <label
          className="form-check-label ms-2"
          htmlFor="stocked"
          style={{ color: "#2a3d6d", fontWeight: "500" }}
        >
          Afficher seulement les véhicules disponibles
        </label>
      </div>

      {/* === TABLEAU === */}
      <div className="table-responsive rounded-3 shadow-sm">
        <table
          className="table table-hover align-middle mb-0 text-center text-md-start"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            overflow: "hidden",
            transition: "all 0.3s ease",
          }}
        >
          <thead
            style={{
              background: "linear-gradient(90deg, #007bff, #00bfff)",
              color: "white",
            }}
          >
            <tr>
              <th scope="col" className="ps-3 ps-md-4">Nom</th>
              <th scope="col" className="text-end pe-3 pe-md-4">Prix</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>

      {/* === PIED === */}
      <div
        className="text-center mt-4"
        style={{ color: "#007bff", fontSize: "0.9rem" }}
      >
        <small>🚘 Explorez notre gamme de véhicules de rêve – adaptée à tous les budgets.</small>
      </div>

      {/* === RESPONSIVE STYLES === */}
      <style>
        {`
          @media (max-width: 768px) {
            .container {
              padding: 1.2rem;
              margin-top: 2rem;
            }

            h2 {
              font-size: 1.3rem;
            }

            input.form-control-lg {
              font-size: 0.95rem;
              padding: 0.8rem;
            }

            table th, table td {
              font-size: 0.9rem;
              padding: 0.6rem;
            }

            .table-responsive {
              border: none;
            }

            .form-check-label {
              font-size: 0.9rem;
            }
          }

          @media (max-width: 480px) {
            .container {
              border-radius: 10px;
              box-shadow: none;
              background: #f9fcff;
            }

            h2 {
              font-size: 1.1rem;
              text-align: center;
              width: 100%;
            }

            input.form-control-lg {
              width: 100%;
            }

            table {
              font-size: 0.85rem;
            }
          }
        `}
      </style>
    </div>
  );
}
