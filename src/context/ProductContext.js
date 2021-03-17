import React,{useContext, createContext, useReducer, useEffect} from 'react';
import axios from 'axios';
import reducer from '../reducer/ProductReducer';

import {products_url as url} from '../utils/constants';
import {
    IS_SIDE_BAR_OPEN,
    SIDE_BAR_CLOSE,
    START_RECEIVING_PRODUCTS,
    PRODUCTS_RECEIVED,
    START_RECEIVING_SINGLE_PRODUCT,
    SINGLE_PRODUCT_RECEIVED,
} from '../actions';

const initialState = {
    isSidebarOpen: false,
    products_loading: false,
    products_error: false,
    products: [],
    featured_products: [],
    single_product_loading: true,
    single_product_error: false,
    single_product: {},
}
const ProductContext = createContext()

export const ProductProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer ,initialState)
    
    const openSidebar = () => {
        dispatch({type: IS_SIDE_BAR_OPEN})
    }

    const closeSidebar = () => {
        dispatch({type: SIDE_BAR_CLOSE})
    }
    
    const fetchProducts = async (url) => {
        dispatch({type: START_RECEIVING_PRODUCTS})
        try {
            const response = await axios.get(url);
            const products = response.data;
            dispatch({type: PRODUCTS_RECEIVED, payload: products})
        } catch (error) {
            console.log(error)
        }
    }

    const fetctSingleProduct = async (url) => {
        dispatch({type: START_RECEIVING_SINGLE_PRODUCT})
        try {
            const response = await axios.get(url);
            const data = response.data;
            dispatch({type: SINGLE_PRODUCT_RECEIVED, payload: data})
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        fetchProducts(url);
    },[])

    return(
        <ProductContext.Provider value={{
            ...state,
            openSidebar,
            closeSidebar,
            fetchProducts,
            fetctSingleProduct
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => {
    return useContext(ProductContext)
}