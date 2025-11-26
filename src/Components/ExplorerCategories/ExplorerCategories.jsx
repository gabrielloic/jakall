import React from 'react'
import './ExplorerCategories.css'
import { menu_list } from '../Assets/data';

function ExplorerCategories({ category, setCategory }) {
  return (
    <div className='explore-category' id='explore-category'>
      <h1>PARCOUREZ NOS CATEGORIES</h1>
      <p className="explore-category-text">Vous retrouverez ici toutes les catégories de voitures disponibles dans notre boutique. Il ne vous mannque plus qu'à faire votre choix et placer tous les articles que vous désirez dans le panier</p>
      <div className="explore-category-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() => setCategory(prev => prev === item.nomMenu ? "All" : item.nomMenu)}
            key={index}
            className="explore-category-list-items"
          >
            <img className={category === item.nomMenu ? "active" : ""} src={item.imageMenu} alt="" />
            <p>{item.nomMenu}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  )
}

export default ExplorerCategories;