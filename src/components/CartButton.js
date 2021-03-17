import React from 'react';
import {Link} from 'react-router-dom';
import {FaShoppingCart, FaUserPlus} from 'react-icons/fa';
import styled from 'styled-components';

import {useCartContext} from '../context/CartContext';

const CartButton = () => {
    const {total_items} = useCartContext()
    return(
        <Wrapper className="card-btn-wrapper">
            <button
            type="button"
            className="cart-btn"
            >
            Login 
            <span className="login"><FaUserPlus/></span>
            </button>
            <button
            className="cart-btn"
            >
            <Link className="link" to="/cart">
                cart
            <span className="icon">
                <FaShoppingCart/>
                {total_items > 0 && <span className="total">{total_items}</span> }
            </span>
            </Link>
            </button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 225px;

    .cart-btn {
        border: none;
        font-size: 1rem;
        background: var(--main-white)
    }

    .login{
        color: var(--color-primary);
        font-size: 1.5rem;
        padding-left: .5rem
    }

    .total {
        color: var(--color-primary);
        font-size: 1.5rem;
        padding: .5rem
    }

    .link{
        color: black
    }

    .icon{
        color: var(--color-primary);
        padding-left: .5rem;
        font-size: 1.5rem
    }

    .total{
        color:white;
        background: var(--color-secondary);
        border-radius: 50%;
        padding: .1rem 0.4rem;
        position: relative;
        top: -20px;
        left: -10px;
        font-size: 1.3rem;
    }
`

export default CartButton