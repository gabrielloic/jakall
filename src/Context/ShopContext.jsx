import React, { createContext, useState, useEffect} from "react";
import all_cars from "../Components/Assets/All_cars.js";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId] :prev[itemId]-1}));
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const contextValue = {
        all_cars,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;