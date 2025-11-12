import React from 'react'
import './ExplorerCategories.css'
import { menu_list } from '../Assets/data';

function ExplorerCategories({ category, setCategory }) {
  return (
    <div className='explore-category' id='explore-category'>
      <h1>PARCOUREZ NOS CATEGORIES</h1>
      <p className="explore-category-text">Blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
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