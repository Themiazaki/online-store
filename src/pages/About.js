import React from 'react';
import styled from 'styled-components';
import {FaCcAmazonPay} from 'react-icons/fa';
import {FaAppStore} from 'react-icons/fa';
import {FaCcMastercard} from 'react-icons/fa';
import {FaApple} from 'react-icons/fa';

const About = () => {
    return(
        <AboutSection>
            <div className="section-center">
                <article className="about-us-contet">
                    <h1 className="title">Our Story</h1>
                    <div className="under-line"></div>
                    <p>lorem ipsum dolor sit amet consectrtur dispisucung elit. obaceacati atque ex excepturi aut sapiente possimus tempore ratione dolorum id name rem , qui, mollitia, similique auia maiores unde porro eum saepe?</p>
                </article>
                <div className="social-media">
                    <div className="card">
                        <FaCcAmazonPay className="icon"/>
                    </div>
                    <div className="card">
                        <FaAppStore className="icon"/>
                    </div>
                    <div className="card">
                        <FaCcMastercard className="icon"/>
                    </div>
                    <div className="card">
                        <FaApple className="icon"/>
                    </div>
                </div>
            </div>
        </AboutSection>
    )
}

const AboutSection = styled.section`
    text-align: center;
    min-height: 100vh;
    .title{
        margin: 0;
    }

    p{
        color: var(--black-text);
        width: 50%;
        margin: 5rem auto;

    }

    .social-media{
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(2, 1fr);
        margin-top: 15rem;
    }
    
    .card{
        border-radius: .3rem;
        padding-top: 2rem;
        width: 100%;
        background: linear-gradient(rgb(158 158 158 / 20%),rgba(252,252,252,0));
        height: 15rem;
    }

    .icon{
        color: var(--color-primary);
        font-size:8rem;
    }

    @media (min-width: 992px) {
        .social-media{
            display: grid;
            grid-gap: 2rem;
            grid-template-columns: repeat(4, 1fr);
            margin-top: 15rem;
        }
    }
`
export default About