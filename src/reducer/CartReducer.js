import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    COUNT_CART_TOTALS
} from '../actions';

const CartReducer = (state, action) => {

    if(action.type === ADD_TO_CART) {
        const {id,amount,product} = action.payload;
        const temptItem = state.cart.find((i)=> i.id === id)
        if(temptItem){
            const tempCart = state.cart.map((cartItem)=> {
                if(cartItem.id === id){
                    let newAmount = cartItem.amount + amount;
                    return {...cartItem, amount: newAmount}
                }else{
                    return cartItem
                }
            })

            return {...state,cart:tempCart}
        }else{
            const newItem = {
                id:id,
                name: product.name,
                amount,
                image: product.images[0].url,
                price: product.price
            }
            return {...state, cart:[...state.cart,newItem]}
        }
    }

    if(action.type === REMOVE_CART_ITEM) {
        const temptItem = state.cart.filter((i)=> i.id !== action.payload);
        return {...state, cart: temptItem}
    }

    if(action.type === COUNT_CART_TOTALS) {
        const {total_items, total_amount} = state.cart.reduce((total, cartItem ) => {
            const {amount, price} = cartItem
            total.total_items += amount
            total.total_amount += price * amount
            
            return total
        },{
            total_items: 0,
            total_amount: 0,
        })
        return {...state, total_amount, total_items}
    }
}
export default CartReducer