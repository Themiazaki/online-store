import React from 'react';
import styled from 'styled-components';
import {useFilterContext} from '../context/FilterContext';

import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
    const {filtered_products: products, grid_view} = useFilterContext();
    return(
        <Wrapper>
            {grid_view ? 
            <GridView products={products} /> :
            <ListView products={products}/>
            }
        </Wrapper>
    )
}
const Wrapper = styled.section`
   
`
export default ProductList