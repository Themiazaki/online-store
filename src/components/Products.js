import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Products = ({name, price, image, id}) => {
    return(
        <Card>
            <img className="card-img" src={image} alt={name} />
            <div className="card-footer">
                <span>{name}</span>
                <span className="price">${price}</span>
            </div>
            <Link to={`/products/${id}`} className="deatail">Detail</Link>
        </Card>
    )
}
const Card = styled.div`
    width: 100%;
    height: 200px;
    position: relative;
    overflow: hidden;
    
    .deatail {
        position: absolute;
        top: 0;
        left: 0;
        background: red;
        color: white;
        background: var(--color-secondary);
        padding: .5rem;
        border-top-left-radius: .25rem;
        border-bottom-right-radius: 1rem;
        cursor: pointer;
    }
    .card-img{
        border-radius: var(--radius);
        object-fit: cover;
        height: 88%;
        width: 100%;
    }

    .card-footer{
        margin-top: 0;
        display: flex;
        justify-content: space-between;
    }
    .price{
        color: var(--color-secondary);
        padding-left: 4px;
    }
`
export default Products