import React,{useEffect, useContext, useReducer} from 'react';
import reducer from '../reducer/CartReducer';

import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    COUNT_CART_TOTALS
} from '../actions';

const getLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if(cart){
      return JSON.parse(localStorage.getItem('cart'))
    }
    else{
      return []
    }
  }

const initialState = {
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
}

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // add to cart
    const addToCart = (id, amount, product) => {
        dispatch({type: ADD_TO_CART, payload:{id, amount, product}})
    }

    //remove item 
    const removeItem = (id) => {
        dispatch({type:REMOVE_CART_ITEM, payload:id})
    }

    useEffect(()=>{
        dispatch({type: COUNT_CART_TOTALS})
        localStorage.setItem('cart', JSON.stringify(state.cart))
    },[state.cart])

    return(
        <CartContext.Provider value={{
            ...state,
            addToCart,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}
