import React, { createContext, useState } from "react";
import all_cars from "../Components/Assets/All_cars";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};
  all_cars.forEach((car) => {
    cart[car.id] = 0;
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [selectedCar, setSelectedCar] = useState(null); // 🚀 voiture sélectionnée

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(0, prev[itemId] - 1),
    }));
  };

  const updateCartItemQuantity = (itemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(itemId);
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: newQty }));
    }
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_cars.find((car) => car.id === Number(item));
        total += itemInfo.prix * cartItems[item];
      }
    }
    return total;
  };

  const getCartArray = () => {
    return Object.keys(cartItems)
      .filter((id) => cartItems[id] > 0)
      .map((id) => {
        const car = all_cars.find((c) => c.id === Number(id));
        return {
          ...car,
          qty: cartItems[id],
        };
      });
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
    getTotalCartAmount,
    getCartArray,
    all_cars,
    selectedCar,     // 🚀 expose la voiture sélectionnée
    setSelectedCar,  // 🚀 expose la fonction pour la définir
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
