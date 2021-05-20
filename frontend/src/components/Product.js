import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

function Product({product}) {
    return (
        <Productpost>
            <Link to = {`/product/${product._id}`}>
                <Thumbnail src={product.image} />
            </Link>
            <Overlay>
                <Link to = {`/product/${product._id}`}>
                    <strong>{product.name}</strong>
                    ${[product.price]}
                </Link>
            </Overlay>  
        </Productpost>

    )
};

export default Product
const Productpost = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    font-style: normal;
    color: #20263f;

    &:hover {
        transform: scale(1.0);}
    `
    const Overlay = styled.div`
        display: none;
        position: absolute;
        transition: .5s ease;
        
        @media screen and (min-width: 768px) {  
        
        ${Productpost}:hover & {
        display: block;
        text-align: center;
        color:white;

        opacity: 0.95;
        background-color: rgb(255, 181, 77);
        height: 100%;
        width: 100%;
        }}
        
    `
    const Thumbnail = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    `