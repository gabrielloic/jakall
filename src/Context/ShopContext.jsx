import React, {createContext} from 'react';
import all_cars from '../Components/Assets/All_cars.js';
import { all } from 'axios';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextvalue = {all_cars};

  return (
       <ShopContext.Provider value={contextvalue}>
        {props.children}

       </ShopContext.Provider>
    )
}

export default ShopContextProvider;
