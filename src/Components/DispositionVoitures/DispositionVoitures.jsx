import React, { useContext } from 'react'
import './DispositionVoitures.css'
import { ShopContext } from '../../Context/ShopContext'
import Item from '../Item/Item'




const DispositionVoitures = (category) => {

    const { all_cars } = useContext(ShopContext)

    return (
        <div className='dispositionVoitures' id='dispositionVoitures'>
            <h2>LES MEILLEURES VOITURES PRES DE VOUS</h2>
            <div className="cars-display-list">
                {all_cars.map((item, index) =>{
                    return <Item key={index} id={item.id} nom={item.nom} image={item.image} categorie={item.categorie} description={item.description} couleur={item.couleur} prix={item.prix}  />
                })}
            </div>
        </div>
    )
}

export default DispositionVoitures
