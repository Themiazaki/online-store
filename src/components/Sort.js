import React from 'react';
import styled from 'styled-components';
import {FaList, FaTh} from 'react-icons/fa';
import {useFilterContext} from '../context/FilterContext';

const Sort = () => {
    const {
        setListview,
        setGridview,
        grid_view,
        sort,
        updateSort
    } = useFilterContext();
    return(
        <Wrapper>
            <div>
                <button 
                className={`${grid_view && 'active'}`}
                type="button"
                onClick={setGridview}
                ><FaTh/></button>
            </div>
            <div>
                <button
                className={`${!grid_view && 'active'}`}
                type="button"
                onClick={setListview}
                ><FaList/></button>
            </div>
            <div>
                <hr/>
            </div>
            <div>
                <select
                name="sort"
                value={sort}
                onChange={updateSort}
                >
                    <option value="price-lowest">price (lowes)</option>
                    <option value="price_higest">price (highest)</option>
                    <option value="name-a">name (a-z)</option>
                    <option value="name-z">name (z-a)</option>
                </select>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    padding-bottom: 2rem;
    align-items: center;

    button {
        color: var(--color-secondary);
        font-size: 1rem;
        padding: .2rem;
        margin-right: .3rem;
        border: none;
        outline: none;
        cursor: pointer
    }

    select{
        width: 10rem;
        height: 1.5rem;
        margin-left: .3rem;
        outline: none;
        border: none;
        border-radius: var(--radius);
        color: var(--color-secondary)
        
    }

    .active{
        background: var(--color-secondary);
        color: white;
        border: none;
        border-radius: var(--radius)
    }

`
export default Sort;