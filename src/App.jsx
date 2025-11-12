import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './Pages/Accueil.jsx';
import Contact from './Pages/Contact.jsx';
import Produits from './Pages/Produits.jsx';
import CategoriesVoitures from './Pages/CategoriesVoiures.jsx';
import Catalogue from './Pages/Catalogue.jsx';
import Cart from './Pages/Cart.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { PlaceOrder } from './Pages/PlaceOrder.jsx';
import { Searchbar } from './Pages/gestion/Produit.jsx';



function App() {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/categoriesVoitures' element={<CategoriesVoitures/>} />
          <Route path='/catalogue' element={<Catalogue />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/recherche' element={<Searchbar/>} />
          <Route path='/produits' element={<Produits/>}>
            <Route path=':Idproduit' element={<Produits/>} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer/>

    </div>
  );
}

export default App;
