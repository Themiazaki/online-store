import {
    LOAD_PRODUCTS,
    SET_LISTVIEW,
    SET_GRIDVIEW,
    UPDATE_SORT,
    SORT_PRODUCT,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
} from '../actions';

const FilterReducedr = (state, action) => {

    if(action.type === LOAD_PRODUCTS) {
        let maxPrice = action.payload.map((p) => p.price);
        maxPrice = Math.max(...maxPrice) 

        return {
            ...state,
            all_products: [...action.payload],
            filtered_products: [...action.payload],
            filters: {
                ...state.filters,
                max_price: maxPrice,
                price: maxPrice,
            }
        }
    }

    if (action.type === SET_LISTVIEW) {
        return {...state, grid_view: false}
    }

    if (action.type === SET_GRIDVIEW) {
        return {...state, grid_view: true}
    }

    if (action.type === UPDATE_SORT) {
        return {...state, sort:action.payload}
    }
    
    if (action.type === SORT_PRODUCT) {
        const {sort, filtered_products} = state;
        let temptProducts = [...filtered_products];

        if (sort === 'price-lowest'){
            temptProducts = temptProducts.sort((a,b) => a.price - b.price)
        }

        if (sort === 'price_higest'){
            temptProducts = temptProducts.sort((a,b) => b.price - a.price)
        }

        if (sort === 'name-a'){
            temptProducts = temptProducts.sort((a,b)=>{
                return a.name.localeCompare(b.name)
            })
        }

        if (sort === 'name-z'){
            temptProducts = temptProducts.sort((a,b)=>{
                return b.name.localeCompare(a.name)
            })
        }

        return {...state, filtered_products: temptProducts}
    }

    if (action.type === UPDATE_FILTERS) {
        const {name, value} = action.payload
        return {...state,filters:{...state.filters,[name]:value}}
    }

    if (action.type === FILTER_PRODUCTS ) {
        const {all_products} = state;
        let temptProducts = all_products;
        const {category, company, text, price} = state.filters;

        // search
        if(text){
            temptProducts = temptProducts.filter((p)=> {
                return (
                    p.name.startsWith(text)
                )
            })
        }

        // category
        if(category !== 'all') {
            temptProducts = temptProducts.filter((p)=> p.category === category)
        }

        // company
        if(company !== 'all'){
            temptProducts = temptProducts.filter((p)=> p.company === company)
        }

        // price
        temptProducts = temptProducts.filter((p)=> p.price <= price)

        return {...state, filtered_products: temptProducts}
      }
   
}

export default FilterReducedr