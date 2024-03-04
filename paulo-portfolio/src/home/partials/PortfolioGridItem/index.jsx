import React from 'react';
import styled from "styled-components";

const PortfolioGridItem = ({ src, children }) => {

    return (
        <Container>
            <Overlay>
                {children}
            </Overlay>
            <Image src={src} />
        </Container>
    );

}

export default PortfolioGridItem

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 278px;
    width: 450px;
    cursor: pointer;
` 

const Overlay = styled.div`
    color: white;
    font-family: 'Raleway';
    font-weight: 600;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-image: linear-gradient(to top, black, transparent, transparent, transparent, transparent);
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 2;
    
    height: 278px;
    width: 450px;

    &:hover {
        opacity: 1;
    }
    
    > * {
        text-align: left;
        padding: 2px 16px;
    }

    > p {
        margin: 4px 0 8px 0;
    }

    > a {
        text-decoration: none;
        color: #3F9ACC;
    }
` 

const Image = styled.img`
    height: 278px;
    width: 450px;   
`