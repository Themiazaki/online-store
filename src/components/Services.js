import React from 'react';
import {services} from '../utils/constants';

import styled from 'styled-components';


const Services = () => {
    return(
        <ServicSection>
        <div className="section-center">
            <div className="header">
                <h1>Custom Furnitures
                Built Only For You</h1>
                <p className="text-header">lorem ipsum dolor sit amet consectetur adipisicing elit. atque quisquam sunt, repudiandae libero amet rem quia qoud?</p>
            </div>
            <div className="services-wrapper">
                {services.map((servic)=> {
                    const {id, icon, title, text} = servic;
                    return (
                        <div key={id} className="card">
                            <div className="icon">{icon}</div>
                            <h3 className="card-title">{title}</h3>
                            <p>{text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        </ServicSection>
    )
}

const ServicSection = styled.section`
    background: var(--color-primary);
    padding: 2rem 0;

    .header{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }
    
    .text-header{
        padding: 1rem;
        font-weight: bold;
        text-align: justify;

    }

    .services-wrapper{
        padding: 5rem 0;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 2rem;
    }
    

    .card{
        padding: 1.5rem;
        background: var(--color-fourth);
        border-radius: var(--radius);
        text-align: center;
    }

    .icon{
        font-size: 5rem;
        color: white;
    }
    .card-title {
        left: 28%;
        margin: 0;
    }

    p{
        color: white;
    }

    @media (min-width: 992px) {
        .services-wrapper{
            padding: 5rem 0;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 2rem;
        }
    }

    @media (max-width: 576px){
        .header{
            display: grid;
            grid-template-columns: 1fr;
            align-items: center;
        }
    }
`

export default Services