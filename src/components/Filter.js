import React from 'react';
import styled from 'styled-components';

import {useFilterContext} from '../context/FilterContext';

const Filter = () => {
    const {
        filters: {
            text,
            company,
            category,
            min_price,
            max_price,
            price
        },
        updateFilters,
        all_products
    } = useFilterContext()

    const categorys = all_products.map((c)=> {
        return c.category
    })
    const uniqueCategory =['all' ,...new Set(categorys)]

    const companys = all_products.map((company)=> {
        return company.company
    })

    const uniqCompany = ['all', ...new Set(companys)]
    return(
        <Wrapper>
            <div className="content">
                <form onSubmit={(e)=> e.preventDefault()}>
                    <div className="form-control">
                        <input 
                        type="text"
                        className="search-input"
                        placeholder="search..."
                        name="text"
                        value={text}
                        onChange={updateFilters}
                        >
                        </input>
                    </div>
                    
                    <div className="forms-control">
                        <h4>category</h4>
                        {uniqueCategory.map((c, index)=> {
                            return(
                            <button
                            className={`${c === category && 'active'}`}
                            key={index}
                            type="button"
                            name="category"
                            onClick={updateFilters}>
                                {c}
                            </button>
                            )
                        })}
                        <h4>company</h4>
                        <select
                        name="company"
                        value={company}
                        onChange={updateFilters}
                        >
                            {uniqCompany.map((c, index)=> {
                                return (
                                <option key={index} value={c}>
                                    {c}
                                </option>
                                )
                            })}
                        </select>
                        <h4>price</h4>
                        <p>${price}</p>
                        <input
                        type="range"
                        name="price"
                        min={min_price}
                        max={max_price} 
                        value={price}
                        onChange={updateFilters}
                        />
                    </div>
                </form>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`

    .content{
        border-radius: var(--radius);
        position: sticky;
        top: .5rem;
    }
    
    h4{
        color: var(--color-secondary);

    }
    .search-input{
        border: none;
        width: 100%;
        border-radius: var(--radius);
        height: 1.5rem;
        outline: none
    }

    button{
        display: block;
        border:none;
        background: transparent;
        padding: .5rem 0;
        cursor: pointer;
        outline: none;
    }
    .active {
        background: var(--color-secondary);
        padding: .3rem;
        border-radius: var(--radius);
        color: white
    }

    select{
        width: 100%;
        border:none;
        height: 1.5rem;
        border-radius: var(--radius);
        outline:none
    }
    
`
export default Filter