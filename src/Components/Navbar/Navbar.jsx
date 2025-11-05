import React, { useState } from 'react';
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import panier from "../Assets/pp.jpg"
import { Search } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("accueil")

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <ul className="nav-menu">
                    <li onClick={() => { setMenu("accueil") }}><Link to='/'>Accueil</Link>{menu === "accueil" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("categoriesVoitures") }}><Link to='/categoriesVoitures'>Catégories</Link>{menu === "categoriesVoitures" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("catalogue") }}><Link to='/catalogue'>Nos services</Link>{menu === "catalogue" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("contact") }}><Link to='/contact'>Nous contacter</Link>{menu === "contact" ? <hr /> : <></>}</li>
                    
                </ul>
                <div className="recherche">
                   <Link to='/searchBar'>
                        <button>
                            <Search size={40} color='white'/>
                        </button>
                    </Link> 
                </div>
                <div className="nav-login">
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/cart'><img src={panier} alt="" /></Link>
                    <div className="nav-panier-count">
                        0
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar