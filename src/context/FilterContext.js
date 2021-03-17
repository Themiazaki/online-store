import React, {useContext,useEffect,useReducer,createContext} from 'react';
import reducer from '../reducer/FilterReducer';


import {
    LOAD_PRODUCTS,
    SET_LISTVIEW,
    SET_GRIDVIEW,
    UPDATE_SORT,
    SORT_PRODUCT,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
} from '../actions';

import {useProductContext} from '../context/ProductContext';

const initialState = {
    filtered_products: [],
    all_products: [],
    grid_view: true,
    sort: 'price-lowest',
    filters: {
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        min_price: '0',
        max_price: '0',
        price: '0',
        shipping: false,
    }
}

export const FilterContext = createContext();

export const FilterProvider = ({children}) => {
    
    const {products} = useProductContext();
    const [state, dispatch] = useReducer(reducer,initialState);

    useEffect(()=> {
        dispatch({type: LOAD_PRODUCTS, payload:products})
    },[products])

    useEffect(()=> {
        dispatch({type: FILTER_PRODUCTS})
        dispatch({type: SORT_PRODUCT})
    },[products, state.sort, state.filters])


    const setListview = () => {
        dispatch({type: SET_LISTVIEW})
    }

    const setGridview = () => {
        dispatch({type: SET_GRIDVIEW})
    }

    const updateSort = (e) => {
        const value = e.target.value;
        dispatch({type: UPDATE_SORT, payload:value})
    }

    const updateFilters = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if(name === 'category'){
            value = e.target.textContent
        }
        if(name === 'price'){
            value = Number(value)
        }
        dispatch({type: UPDATE_FILTERS, payload:{name,value}})
    }


    return(
        <FilterContext.Provider value={{
            ...state,
            setListview,
            setGridview,
            updateSort,
            updateFilters
        }}>
            {children}
        </FilterContext.Provider>
    )
}
export const useFilterContext = () => {
    return useContext(FilterContext)
}