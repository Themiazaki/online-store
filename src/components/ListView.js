import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ListView = ({products}) => {
    return(
        <Wrapper>
            {products.map((product)=> {
                const {id, name, price, description, company, image}= product;
                return (
                    <article key={id}>
                        <img className="image" src={image} alt={name} />
                    <div className="info">
                        <h3>{company}</h3>
                        <h5>${price}</h5>
                        <p className="des">{description.substring(0,100)}. . .</p>
                        <p className="company">{company}</p>
                        <Link to={`/products/${id}`} type="button">Detail</Link>
                    </div>
                    </article>
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
        display: grid;
        grid-row-gap: 2rem;
        
    .image{
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        width: 100%;
        height: 220px;
        object-fit: cover;
        margin: 0;
    }

    article{
        display: grid;
        grid-template-columns: 1fr;
    }

    .info {
        padding-left: 2rem;
        background: white;
        height: 105%;
    }

    .company{
        color: var(--color-primary);
        margin: 15px 0;
    }

    h5{
        padding: .2rem;
        margin-top: 0;
        border-radius: 10px;
        color: white;
        background: var(--color-secondary);
        display: inline-block;
    }

    h3 {
        margin: .3rem 0;
    }

    .des{
        margin: 0
    }

    a{
        margin-bottom: .8rem;
        border: none;
        color: white;
        background: var(--color-primary);
        border-radius: 5px;
        padding: .4rem;
        cursor: pointer;
        box-shadow: 0px 0px 8px var(--color-primary);
        transition: var(--transition);
    }
    a:hover {
        color: black;
        background: #ffecb8;
        box-shadow: 0px 0px 8px #ffecb8;
    }

    @media(min-width: 992px){
        article {
            grid-template-columns: 200px 1fr;
        }

        .image{
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            border-top-right-radius: 0;
        }
        .info {
            height: 100%
        }

`
export default ListView