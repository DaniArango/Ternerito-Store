import React, { createContext, useReducer } from 'react';
import ProductsReducer from "./ProductsReducer"
import axios from 'axios';

const initialState = {
    fakeProducts: []
}

 

export const ProductsContext = createContext(initialState);
export const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(ProductsReducer, initialState);

    const getApiProducts = async () => {
        const res = await axios.get('https://fakestoreapi.com/products');
        console.log(res)
        dispatch({
            type: "GET_APIPRODUCTS",
            payload: res.data
        });
    };
    return (
        <ProductsContext.Provider
          value={{
            fakeProducts: state.fakeProducts,
            getApiProducts,
          }}
        >
          {children}
        </ProductsContext.Provider>
      );
}
