import React from 'react';
import {Link} from 'react-router-dom';
import bcg_image from '../assets/hero-bcg-2.jpeg';


import styled from 'styled-components';


const Banner = () => {
    return(
        <BannerSection>
            <div className="bcg-banner">
                <img 
                src={bcg_image}
                className="image"
                alt="bcg"
                />
            </div>
            <div className="banner-text-section">
                <div className="banner-title">
                    <h1>Design</h1>
                    <h1>Your</h1>
                    <h1>Room</h1>
                    <p>lorem ipsum dolor sit amet consectrtur dispisucung elit. obaceacati atque ex excepturi aut sapiente possimus tempore ratione dolorum id name rem , qui, mollitia, similique auia maiores unde porro eum saepe?</p>
                    <Link 
                    className="banner-btn btn"
                    type="button"
                    to="/products"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </BannerSection>
    )
}

const BannerSection = styled.section`
    width: 100%;
    background: var(--color-primary);
    min-height: 40em;
    display: grid;
    grid-template-columns: 50% 50%;
    clip-path: polygon(0% 0%,100% 0%,100% 85%,50% 100%,0 85%);

    .image{
        width:100%;
        height: 100%;
        object-fit: cover;
    }

    .banner-text-section{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .banner-title{
        width: 70%;
       
    }

    h1{
        font-size: 4rem !important;
        line-height: 3rem;
        margin: 0;
        width: 25vh;
        color: white;
        padding: .5rem;
    }
    h1::first-letter {
        color: var(--black-text)
    }

    p{
        text-align: justify;
        font-weight: bold;
    }

    .banner-btn {
        width: 30%;
        text-align: center;
    }

    @media (max-width: 576px){
        grid-template-columns: 1fr;

        .bcg-banner{
            display: none;
        }
        
        .banner-btn{
           width: 60%;
           margin-left: 15%;
        }
    }
`
export default Banner