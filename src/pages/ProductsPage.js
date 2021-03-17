import React from 'react';
import styled from 'styled-components';

import Filter from '../components/Filter';
import ProductList from '../components/ProductList';
import Sort from '../components/Sort';


const Products = () => {

  
    return(
        <Wrapper>
            <section className="products">
                <Filter/>
                <div>
                   <Sort/>
                   <ProductList/>
                </div>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.main`

    .products{
        width: 90%;
        min-height: 100vh;
        margin: 3rem auto;
        display: grid;
        grid-template-columns: 250px 1fr;
        grid-gap: 1.3rem
    }
    
    @media(max-width: 576px){
        .products{
            grid-template-columns: 1fr;
        }
    }

`
export default Products