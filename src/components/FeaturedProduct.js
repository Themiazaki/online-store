import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import { GiShoppingBag } from "react-icons/gi";
import Loading from "./Loading";

import { useProductContext } from "../context/ProductContext";

const FeaturedProdct = () => {
  const { products_loading: loading, featured_products } = useProductContext();

  if (loading) {
    return (
        <React.Fragment>
        <div className="title">
        <h1>Featured Product</h1>
        <div className="under-line"></div>
        </div>
        <Loading/>
        </React.Fragment>
    )
  }

  return (
    <FeaturedProduct>
      <div className="title">
        <h1>Featured Product</h1>
        <div className="under-line"></div>
      </div>
      <div className="product-wrapper">
        {
          featured_products.slice(0, 3).map((p) => {
            const { id, image, name, } = p;
            return (
              <div key={id} className="product-container">
                <Link to={`/products/${id}`} className="shop-icon">
                  <GiShoppingBag />
                </Link>
                <img src={image} alt={name} />
              </div>
            );
          })
        }
      </div>
    </FeaturedProduct>
  );
};
const FeaturedProduct = styled.section`
  width: 80%;
  margin: 0 auto;

  .product-wrapper {
    width: 100%;
    margin: 4rem auto;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr;
  }

  .product-container {
    height: 25vw;
    border-radius: var(--radius);
    background: var(--color-secondary);
    position: relative;
  }

  img {
    position: absolute;
    border-radius: var(--radius);
    object-fit: cover;
    height: 100%;
    width: 100%;
    padding: 0;
    transition: var(--transition);
  }

  .shop-icon {
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    color: white;
    opacity: 0;
    cursor: pointer;
    transition: var(--transition);
  }

  .product-container:hover img {
    opacity: 0.5;
  }
  .product-container:hover .shop-icon {
    opacity: 1;
  }

  @media (min-width: 992px) {
    .product-wrapper {
      width: 100%;
      margin: 4rem auto;
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default FeaturedProdct;
