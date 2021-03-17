import React, {useEffect} from 'react';
import Loading from '../components/Loading';
import {Link, useParams} from 'react-router-dom';
import styled from 'styled-components';

import {useProductContext} from '../context/ProductContext';
import {single_product_url as url} from '../utils/constants';

import Gallery from '../components/Gallery';
import AddToCart from '../components/AddToCart';

const SingleProduct = () => {

    const {
        fetctSingleProduct,
        single_product,
        single_product_loading:loading,
    } = useProductContext();

    const {id} = useParams();

    const {images, name, company, category, description, price} = single_product;

    useEffect(()=> {
        fetctSingleProduct(`${url}${id}`)
    },[id])

    if(loading){
        return <Loading/>
    }

    return(
        <ProductSection>
            <main className="section-center">
                <Link to="/" className="btn">back to Home</Link>
                <div className="wrapper">
                    <Gallery images={images}/>
                    <div className="product-info">
                        <h1>{name}</h1>
                        <h3 className="company">company: {company}</h3>
                        <h3 className="category">category: {category}</h3>
                        <p>{description}</p>
                        <h4 className="price">${price}</h4>
                        <hr/>
                        <AddToCart product={single_product}/>
                    </div>
                </div>
            </main>
        </ProductSection>
    )
}

const ProductSection = styled.section`
    .wrapper{
        display: grid;
        margin: 8rem 0;
        justify-content: center
    }

    .btn{
        margin-top: 2.5rem;
    }

    .product-gallery{
        padding: 3rem
    }
    
    img{
        width: 100%;
        height: 500px;
        object-fit: cover;
        border-radius: var(--radius)
    }

    .company {
        display: table;
        color: white;
        border-left: .3rem solid var(--color-secondary);
        padding: 0 .4rem;
        background: var(--color-fourth)
    }

    .category{
        display: table;
        color: white;
        border-left: .3rem solid var(--color-primary);
        padding: 0 .4rem;
        background: var(--color-fourth)
    }
   
    .price{
        display: inline-block;
        background: var(--color-secondary);
        color: white;
        padding: .2rem 1rem;
        border-radius: var(--radius)
    }

    @media(min-width: 992px){
        .wrapper {
            grid-template-columns: 50% 50%;
        }
    }
`

export default SingleProduct