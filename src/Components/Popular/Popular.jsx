import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item.jsx'

const Popular = () => {
    return (
        <div className='popular'>
            <h2>POPULAIRE EN FAMILLE</h2>
            <hr />
            <div className='popular-container'>
                <div className="popular-item">
                    {data_product.map((item, i) => {
                        return <Item key={i} id={item.id} nom={item.nom} image={item.image} prix={item.prix} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Popular