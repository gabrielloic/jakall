import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer.jsx';
import { Routes, Route, useLocation } from 'react-router-dom';

import Accueil from './Pages/Accueil.jsx';
import Contact from './Pages/Contact.jsx';
import Produits from './Pages/Produits.jsx';
import CategoriesVoitures from './Pages/CategoriesVoiures.jsx';
import Catalogue from './Pages/Catalogue.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import { PlaceOrder } from './Pages/PlaceOrder.jsx';
import { Searchbar } from './Pages/gestion/Produit.jsx';
import AdminDashboard from './Pages/Administration/AdminDashboard.jsx';
import MonCompte from './gestion/Utilisateurs/Utilisateurs.jsx';
import Cart from './Pages/Commande/Carte.jsx';
import Checkout from './Pages/Commande/Checkout.jsx';
import Discussion from './Pages/gestion/Message/Envoi.jsx';
import Zozo from "./Components/Zozo.jsx";
import Livraison from './gestion/Localisatio_identification/localisation.jsx';
import RechercheVoitures from './Pages/RechercheVoitures.jsx';
import Avis from './Pages/Commande/Avis.jsx';
import PagePresentation from './Pages/PagePresentation.jsx';

function App() {
  const location = useLocation();

  // La page Zozo est sur "/" donc on cache navbar + footer ici
  const hideLayout = location.pathname === "/";

  return (
    <div>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Zozo />} />

        <Route path="/accueil" element={<Accueil />} />
        <Route path="/categoriesVoitures" element={<CategoriesVoitures />} />
        <Route path="/messagerie" element={<Discussion />} />
        <Route path="/moncompte" element={<MonCompte />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/recherche" element={<RechercheVoitures />} />
        <Route path="/iii" element={<AdminDashboard />} />
        <Route path="/livraison" element={<Livraison />} />
        <Route path="/avis" element={<Avis />} /><Route path='/PagePresentation' element={<PagePresentation/>} />
        <Route path="/produits" element={<Produits />}>
          <Route path=":Idproduit" element={<Produits />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
