import React from 'react';
import styled from 'styled-components';
import Products from './Products';
const GridView = ({products}) => {
    
    return(
        <Wrapper>
           {products.map((product)=>{
               return <Products key={product.id} {...product} />
           })}
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;

    @media(min-width: 992px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(min-width: 1200px){
        grid-template-columns: repeat(3, 1fr);
    }
    
`
export default GridView