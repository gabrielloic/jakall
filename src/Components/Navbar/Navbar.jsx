import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import panier from "../Assets/pp.jpg";
import { Search } from 'lucide-react';
import { UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Searchbar } from '../../Pages/gestion/Produit';


const Navbar = () => {
    const [menu, setMenu] = useState("accueil");
    const [showNavbar, setShowNavbar] = useState(false);

    // Affiche la navbar quand la souris approche du haut ou sur scroll
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (e.clientY <= 50) setShowNavbar(true);
            else setShowNavbar(false);
        };

        const handleTouchStart = () => {
            setShowNavbar(true); // mobile : navbar visible au toucher
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchstart', handleTouchStart);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchstart', handleTouchStart);
        };
    }, []);

    return (
        <div className={`navbar ${showNavbar ? 'show' : ''}`}>

            <div className="nav-monCompte">
                <button className="mon-compte-btn">
                    <UserCircle size={30} color='white' />
                </button>
            </div>

            <div className='nav-logo'>
                <img src={logo} alt="Logo" />
                <ul className="nav-menu">
                    <li onClick={() => setMenu("accueil")}>
                        <Link to='/'>Accueil</Link>
                        {menu === "accueil" ? <hr /> : null}
                    </li>
                    <li onClick={() => setMenu("categoriesVoitures")}>
                        <Link to='/categoriesVoitures'>Catégories</Link>
                        {menu === "categoriesVoitures" ? <hr /> : null}
                    </li>
                    <li onClick={() => setMenu("catalogue")}>
                        <Link to='/catalogue'>Nos services</Link>
                        {menu === "catalogue" ? <hr /> : null}
                    </li>
                    <li onClick={() => setMenu("contact")}>
                        <Link to='/contact'>Nous contacter</Link>
                        {menu === "contact" ? <hr className='indique' /> : null}
                    </li>
                </ul>

               <div className="recherche">
                <Link to="/recherche">
                     <button><Search size={30} color='white' /></button>
            </Link>
                </div>


                <div className="nav-login">
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/cart'><img src={panier} alt="Panier" /></Link>
                    <div className="nav-panier-count">0</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;