import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

function Product({product}) {
    return (
        <>
        <Productpost>
            <Link to = {`/product/${product._id}`}>
                <Thumbnail src={product.image} />
            </Link>
            <Overlay>
                <Link to = {`/product/${product._id}`}>
                    <ProductName>{product.name}
                    ${[product.price]}</ProductName>
                </Link>
            </Overlay>  
        </Productpost>
        <MobileMode>
            <div>{product.name}</div>
            <div>${[product.price]}</div>
            </MobileMode>
        </>
    )
};

export default Product
const Productpost = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3em;
    font-style: normal;
    color: blue;
    
    &:hover {
        transform: scale(1.0);}
    `
    
    const Overlay = styled.div`
        display: none;
        position: absolute;
        
        
        @media screen and (min-width: 768px) {  
        
        ${Productpost}:hover & {
        
        display: flex;
        justify-content: center; 
        align-items: center;
        opacity: 0.95;

        transition: background-color 500ms ease-in 1s;
        background-color: rgb(255, 161, 77);
        
        height: 100%;
        width: 100%;
        font-size: .3em;
        }}
        
    `
    const ProductName = styled.div`
    color: green;

    `
    const MobileMode = styled.div`
    display: none;
    color: red;
    @media screen and (max-width: 768px) {  
        display: flex;
        flex-direction: column;
        color: red;
        padding: 0 5% 5% 5%;
    `

    const Thumbnail = styled.img`
    
    object-fit: cover;
    width: 100%;
    height: 100%;
    `