import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return(
        <FooterSection>
            <p>&copy;{new Date().getFullYear()} <span>comfy sloth</span> All rights reserved</p>
        </FooterSection>
    )
}

const FooterSection = styled.footer`
    background: var(--main-black);
    text-align: center;
    padding: 1.5rem 0;

    p{
        color: white;
    }
    span {
        color: var(--color-secondary)
    }

`
export default Footer