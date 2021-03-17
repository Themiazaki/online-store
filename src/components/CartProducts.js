import React from 'react';
import styled from 'styled-components';
import {FaTrash} from 'react-icons/fa';

import { useCartContext } from '../context/CartContext';

const CartProducts = ({image,price, name, amount, id}) => {

    const {removeItem} = useCartContext()
    return(
        <Wrapper>
            <img className="product-image" src={image}  alt={name} />
            <h5>${price}</h5>
            <h5 className="quantity">{amount}</h5>
            <button onClick={()=>removeItem(id)}><FaTrash/></button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    height: 100px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 1rem 0;
    align-items: center;
    text-align: center;
    padding: 1rem 0;
    border-radius: var(--radius);
    box-shadow: 0px 0px 9px 0px #8e8c8e44;
    border-left: .4rem solid var(--color-primary);

    .product-image{
        object-fit: cover;
        height: 100px;
        width: 100px;
        margin: 0 auto;
        border-radius: var(--radius)
    }

    h5 {
        color: var(--color-secondary);
        margin: 0;
    }

    button{
        font-size: 1.5rem;
        border: none;
        background: transparent;
        outline: none;
        cursor: pointer;
        margin: 0;
        color: var(--color-secondary);
    }
    .quantity {
        padding: 5px;
        margin: 0 auto;
        width: 10px;
        color: white;
        background: var(--color-secondary);
        border-radius: var(--radius);
    }
`
export default CartProducts;