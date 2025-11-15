import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import panier from "../Assets/pp.jpg";
import { Search, ShoppingCart } from 'lucide-react';
import { UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Searchbar } from '../../Pages/gestion/Produit';
import styles from './IconButton.module.css';


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
                    <Link to='/moncompte'><UserCircle className={styles.responsiveIcon} /></Link>
                </button>
            </div>

            <div className='nav-logo'>
                <Link to='/'><img src={logo} alt="Logo" /></Link>
                <ul className="nav-menu">
                    <li onClick={() => setMenu("accueil")}>
                        <Link to='/'>Accueil</Link>
                        {menu === "accueil" ? <hr /> : null}
                    </li>
                    <li onClick={() => setMenu("categoriesVoitures")}>
                        <a href='/#explore-category'>Catégories</a>
                        {menu === "categoriesVoitures" ? <hr /> : null}
                    </li>
                    <li onClick={() => setMenu("catalogue")}>
                        <Link to='/catalogue'>Messagerie</Link>
                        {menu === "catalogue" ? <hr /> : null}
                    </li>
                    <li onClick={() => setMenu("contact")}>
                        <a href='#footer'>Nous contacter</a>
                        {menu === "contact" ? <hr className='indique' /> : null}
                    </li>
                </ul>

               <div className="recherche">
                <Link to="/recherche">
                     <button><Search className={styles.responsiveIcon} /></button>
                </Link>
                </div>


                <div className="nav-login">
                    <Link to='/login'><button className='bouton-login'>Login</button></Link>
                </div>
                <Link to='/cart'><button className='bouton-panier'><ShoppingCart className={styles.responsiveIcon} /></button></Link>
                <div className="nav-panier-count">0</div>
            </div>
        </div>
    );
};

export default Navbar;