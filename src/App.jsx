import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom' // ✅ import useLocation ici
import Accueil from './Pages/Accueil.jsx'
import Produits from './Pages/Produits.jsx'
import CategoriesVoitures from './Pages/CategoriesVoitures.jsx'
import Catalogue from './Pages/Catalogue.jsx'
import Cart from './Pages/Cart.jsx'
import LoginSignup from './Pages/LoginSignup.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Contact from './Pages/Contact.jsx'
import PageRecherche from './Pages/PageRecherche.jsx' // ✅ ta nouvelle page recherche

function App() {
  const location = useLocation();

  // ✅ cacher la Navbar sur la page /searchBar
  const hideNavbar = location.pathname === "/searchBar";

  return (
    <div>
      {/* ✅ Navbar cachée sur /searchBar */}
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/categoriesVoitures' element={<CategoriesVoitures />} />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/searchBar' element={<PageRecherche />} /> {/* ✅ page recherche */}
        
        {/* ✅ toutes tes anciennes routes de catégories */}
        <Route path='/Hatchback' element={<CategoriesVoitures category="Hatchback" />} />
        <Route path='/Coupe' element={<CategoriesVoitures category="Coupe" />} />
        <Route path='/Sedan' element={<CategoriesVoitures category="Sedan" />} />
        <Route path='/Hybrid' element={<CategoriesVoitures category="Hybrid" />} />
        <Route path='/Minivan' element={<CategoriesVoitures category="Minivan" />} />
        <Route path='/Pickup' element={<CategoriesVoitures category="Pickup" />} />
        <Route path='/Electric' element={<CategoriesVoitures category="Electric" />} />
        <Route path='/SUV' element={<CategoriesVoitures category="SUV" />} />
        <Route path='/Convertible' element={<CategoriesVoitures category="Convertible" />} />
        <Route path='/Sports' element={<CategoriesVoitures category="Sports" />} />

        {/* ✅ ta route produits */}
        <Route path='/produits' element={<Produits />}>
          <Route path=':Idproduit' element={<Produits />} />
        </Route>

        {/* ✅ panier et login */}
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;