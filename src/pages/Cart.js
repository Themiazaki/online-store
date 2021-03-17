import React from 'react';
import styled from 'styled-components';
import {useCartContext} from '../context/CartContext';
import CartProducts from '../components/CartProducts';

const Cart = () => {
    const {cart} = useCartContext();
  
    return (
        <Wrapper className="section-center">
            <main>
                <div className="columns">
                    <h5>item</h5>
                    <h5>price</h5>
                    <h5>quantity</h5>
                    <h5>Subtotal</h5>
                </div>
                {cart.map((item)=> {
                    return <CartProducts key={item.id} {...item} />
                })}
            </main>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    min-height: 75vh;

    main {
        margin: 5rem 0;
        display: grid;
        grid-template-rows: 100px 1fr;
    }

    .columns{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        text-align: center;
        height: 100px;
    }
`

export default Cart