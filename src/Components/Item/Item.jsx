import React, { useState } from 'react'
import './Item.css'

const Item = ({id,nom,image,prix,categorie,description,couleur}) => {
    
    
    return (
        <div className="cars-item">
            <div className="cars-item-img-container">
                <img className='cars-item-image' src={image} alt="" />
                
            </div>
            <div className="cars-item-info">
                <div className="cars-item-name">
                    <p>{nom}</p>
                </div>
                <p className="cars-item-description">{description}</p>
                <div className="categorie-couleur">
                    <p className="cars-category">{categorie}</p>
                    <p className="cars-item-color">{couleur}</p>
                </div>
                <p className="cars-item-price">${prix}</p>
                
            </div>
        </div>
    )
}

export default Item