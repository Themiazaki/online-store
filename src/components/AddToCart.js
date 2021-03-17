import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {FaPlus, FaMinus} from 'react-icons/fa';
import {useCartContext} from '../context/CartContext';

const AddToCart = ({product}) => {
    const {id} = product;
    const [amount, setAmount] = useState(1);

    const {addToCart} = useCartContext()

    const increase = () => {
        setAmount((oldAmount)=> {
            let temptAmount = oldAmount + 1;
            return temptAmount
        })
    }

    const decrease = () => {
        setAmount((oldAmount)=> {
            let temptAmount = oldAmount - 1;
            if(temptAmount < 1 ){
                temptAmount = 1
            }
            return temptAmount;
            
        })
       
    }

    return(
        <Wrapper>
            <button onClick={decrease}><FaMinus/></button>
                <h2 className="amount">{amount}</h2>
            <button onClick={increase}><FaPlus/></button>
            <Link 
            to="/cart" 
            className="add-to-cart"
            onClick={()=>addToCart(id, amount, product)}
            >
                Add to cart
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 3rem 0;
    display: grid;
    grid-template-columns: auto auto auto auto;
    width: 220px;
    align-items: center;

    button{
        border: none;
        background: transparent;
        color: var(--color-secondary);
        outline: none;
        cursor: pointer
    }

    .amount{
        margin:0;
        background: var(--color-primary);
        color: white;
        padding: .5rem 1rem;
        border-radius: var(--radius)
    }

    .add-to-cart {
        margin-top: 0;
        width: 100px;
        padding: .5rem 1rem;
        background: var(--color-secondary);
        color: white;
        border-radius: var(--radius);
        cursor: pointer;
        transition: var(--transition);

    }

    .add-to-cart:hover{
        background: #bb0f49
    }

`
export default AddToCart