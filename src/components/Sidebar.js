import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import CartButton from './CartButton';
import { useProductContext } from '../context/ProductContext';

import {links} from '../utils/constants';
import {CgClose} from 'react-icons/cg';
import logo from '../assets/logo.svg'

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useProductContext()
    return(
        <Wrapper>
            <aside className={isSidebarOpen ? 'sidebar active' : 'sidebar'}>
                <div className="header">
                    <img src={logo} alt="logo" />
                    <button
                    className="close-btn"
                    type="button"
                    onClick={closeSidebar}
                    >
                        <CgClose/>
                    </button>
                </div>
                <CartButton/>
                <ul className="sidebar-links">
                    {links.map((link)=> {
                        const {id, text, url} = link
                        return (
                            <li key={id}>
                                <Link
                                onClick={closeSidebar} 
                                to={url} 
                                className="links"
                                >{text}</Link>
                            </li>
                        )
                    })}
                </ul>
                <div className="sidcart">
                </div>
            </aside>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .sidebar {
        transform: translateX(-100%);
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: var(--main-white);
        z-index: 200;
        box-sizing: border-box;
        padding: .7rem 1.5rem;
        transition: var(--transition);

    }

    .header{
        display: flex;
        justify-content: space-between;
        margin-bottom: 4rem;
    }

    .close-btn{
        background: transparent;
        border:none;
        color: var(--color-primary);
        font-size: 3rem;
        cursor: pointer;
        outline: none;
    }

    .sidebar-links{
        margin-top: 3rem;
        padding-left: 16px;
    }

    .links{
        font-weight: 500;
        cursor: pointer;
        color: var(--black-text);
    }
    
    li {
        border-left: 0rem solid var(--color-primary);
        transition: var(--transition);
        padding: 1rem 1rem;
        margin: 2rem 0;
    }

    li:hover {
        transform: translateX(20px);
        border-left: 1.5rem solid var(--color-primary);
    }
    .active {
        transform: translateX(0);
        transition: var(--transition);

    }

    @media (max-width: 576px){
        .sidebar {
            transform: translateX(-120%);
        }

        .active {
            transform: translateX(0);
            transition: var(--transition);
    
        }

        img{
            width: 50%;
        }

        .close-btn{
            font-size: 2rem;
        }
    }
`
export default Sidebar