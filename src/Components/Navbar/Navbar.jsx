import React, { useState, useEffect } from 'react';
import logo from '../Assets/logo.jpg';
import { Search, ShoppingCart, UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import iconStyles from './IconButton.module.css';   // garde ton fichier d'icônes responsive

const Navbar = () => {
    const [menu, setMenu] = useState("accueil");
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (e.clientY <= 50) setShowNavbar(true);
            else setShowNavbar(false);
        };
        const handleTouchStart = () => setShowNavbar(true);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchstart', handleTouchStart);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchstart', handleTouchStart);
        };
    }, []);

    return (
        <div className={`${styles.navbar} ${showNavbar ? styles.show : ''}`}>

            {/* Mon compte à gauche */}
            <div className={styles.navMonCompte}>
                <button className={styles.monCompteBtn}>
                    <Link to='/moncompte'>
                        <UserCircle className={iconStyles.responsiveIcon} />
                    </Link>
                </button>
            </div>

            {/* Centre + droite */}
            <div className={styles.navLogo}>
                <Link to='/iii'>
                    <img src={logo} alt="Logo" />
                </Link>

                <ul className={styles.navMenu}>
                    <li onClick={() => setMenu("accueil")}><Link to='/accueil'>Accueil</Link>{menu === "accueil" && <hr />}</li>
                    <li onClick={() => setMenu("categoriesVoitures")}><a href='/accueil#explore-category'>Catégories</a>{menu === "categoriesVoitures" && <hr />}</li>
                    <li onClick={() => setMenu("messagerie")}><Link to='/messagerie'>Messagerie</Link>{menu === "messagerie" && <hr />}</li>
                    <li onClick={() => setMenu("contact")}><a href='#footer'>Nous contacter</a>{menu === "contact" && <hr />}</li>
                </ul>

                <div className={styles.recherche}>
                    <Link to="/recherche"><button><Search className={iconStyles.responsiveIcon} /></button></Link>
                </div>

                <div className={styles.navLogin}>
                    <Link to='/login'><button className={styles.boutonLogin}>Login</button></Link>
                </div>

                <div className={styles.panierContainer}>
                    <Link to='/cart'><button className={styles.boutonPanier}><ShoppingCart className={iconStyles.responsiveIcon} /></button></Link>
                    <div className={styles.navPanierCount}>0</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;