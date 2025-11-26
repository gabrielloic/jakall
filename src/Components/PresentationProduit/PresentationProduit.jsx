import React, { useContext } from 'react';
import styles from './PresentationProduit.module.css';
import { ShopContext } from '../../Context/ShopContext';

const PresentationProduit = () => {
  const { selectedCar, addToCart } = useContext(ShopContext);

  if (!selectedCar) {
    return <p>Aucune voiture sélectionnée.</p>;
  }

  return (
    <div className={styles.presentation}>
      <h1>{selectedCar.nom}</h1>

      <div className={styles.corps}>
        <img src={selectedCar.image} alt={selectedCar.nom} />

        <div className={styles.textePresentation}>
          <p>{selectedCar.texte}</p>
        </div>

        {selectedCar.video && (
          <video width="600" controls>
            <source src={selectedCar.video} type="video/mp4" />
          </video>
        )}

        <button 
          className={styles.addButton}
          onClick={() => addToCart(selectedCar.id)}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default PresentationProduit;
