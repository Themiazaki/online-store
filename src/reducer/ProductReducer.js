import {
    IS_SIDE_BAR_OPEN,
    SIDE_BAR_CLOSE,
    START_RECEIVING_PRODUCTS,
    PRODUCTS_RECEIVED,
    START_RECEIVING_SINGLE_PRODUCT,
    SINGLE_PRODUCT_RECEIVED,
} from '../actions';

const ProductReducer = (state, action) => {
    if (action.type === IS_SIDE_BAR_OPEN) {
        return {...state, isSidebarOpen: true}
    }

    if (action.type === SIDE_BAR_CLOSE) {
        return {...state, isSidebarOpen: false}
    }

    if (action.type === START_RECEIVING_PRODUCTS) {
        return {...state, products_loading: true}
    }
    if (action.type === PRODUCTS_RECEIVED) {
        const featured_products = action.payload.filter((p)=> p.featured === true)
        return {...state, products_loading: false, products: action.payload, featured_products}
    }
    if (action.type === START_RECEIVING_SINGLE_PRODUCT) {
        return {...state, single_product_loading: true}
    }
    if (action.type === SINGLE_PRODUCT_RECEIVED) {
        return {...state,single_product_loading:false, single_product: action.payload}
    }
}
export default ProductReducer