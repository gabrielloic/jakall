import React, { useContext } from 'react'
import './Item.css'
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import { ShopContext } from '../../Context/ShopContext';

const Item = ({ id, nom, image, prix, categorie, description, couleur, video, texte }) => {

    const { cartItems, addToCart, removeFromCart, setSelectedCar } = useContext(ShopContext);

    const handleClick = () => {
        setSelectedCar({
            id,
            nom,
            image,
            prix,
            categorie,
            description,
            couleur,
            video,
            texte
        });
    };

    return (
        <div className="cars-item">
            <div>

                {/* Quand on clique sur l'image → setSelectedCar() → redirection */}
                <Link to='/PagePresentation' onClick={handleClick}>
                    <div className="cars-item-img-container">
                        <img className='cars-item-image' src={image} alt="" />
                    </div>
                </Link>

                <div className="cars-item-info">

                    <div className="cars-item-header">
                        <div className="cars-item-name">
                            <p>{nom}</p>
                        </div>
                        <div className="cars-item-choice">
                            {!cartItems[id]
                                ? <Plus className='add' onClick={() => addToCart(id)} size={28} color='black' />

                                : <div className="cars-item-counter">
                                    <Plus className='add1' onClick={() => addToCart(id)} size={28} color='green' />
                                    <span className='item-count'>{cartItems[id]}</span>
                                    <Minus className='remove' onClick={() => removeFromCart(id)} size={28} color='red' />
                                </div>
                            }
                        </div>
                    </div>

                    <p className="cars-item-description">{description}</p>
                    <div className="categorie-couleur">
                        <p className="cars-category">{categorie}</p>
                        <p className="cars-item-color">{couleur}</p>
                    </div>
                    <p className="cars-item-price">${prix}</p>

                </div>
            </div>

        </div>
    );
};

export default Item;
