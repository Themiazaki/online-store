import React from "react";
import styled from "styled-components";
import {NavLink} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import { links } from "../utils/constants";
import {useProductContext} from '../context/ProductContext';

import logo from '../assets/logo.svg';
import CartButton from './CartButton';



const Navbar = () => {
  const {openSidebar} = useProductContext()
  
  return (
    <NavbarContainer>
      <div className="section-center">
        <div className="nav-header">
            <div className="navbar-brand">
                <img className="brand" src={logo} alt="logo" />
            </div>
            <button 
            type="button" 
            className="navbar-toggle"
            onClick={openSidebar}
            >
                <FaBars/>
            </button>
        </div>
        <ul className="nav-link">
        {links.map((link)=> {
            return (
                <li key={link.id}>
                    <NavLink 
                    to={link.url} 
                    exact
                    className="nav-link" activeClassName="selected" >
                      {link.text}
                    </NavLink>
                </li>
            )
        })}
        </ul>
        <CartButton/>
      </div>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  height: 5rem;
  display: flex;
  margin: 0 auto;
  justify-content: center;

  .selected {
    border-bottom: 2px solid var(--color-primary);
  }

  .section-center {
    width: 90%;
    margin: 0 auto;
  }
 
  .nav-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .brand{
    width: 13rem;
  }

  .navbar-toggle{
    font-size: 1.5rem;
    color: var(--color-primary);
    border: none;
    cursor: pointer;
    outline: none;
  }

  .nav-link {
      display: none;
  }

  .card-btn-wrapper{
      display: none
  }

  @media (min-width: 992px) {
    .section-center {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
      }

    .navbar-toggle {
        display: none;
    }
    
    .nav-link{
        display: flex;
        padding: 0 1rem;
        justify-content: center;
        color: var(--black-text);
      }
      .nav-link li {
        margin: 0 1rem;
        padding: 0.5rem;
        font-size: 1.2rem;
        color: var(--black-text)
    }

    .card-btn-wrapper {
        display: grid;
    }
  }
  @media (max-width: 576px){
    img{
      width: 60%;
    }
  }
`;

export default Navbar;
