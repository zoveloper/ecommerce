import React from 'react'
import Checkout from '../components/CheckoutForm/Checkout/Checkout'
import { useSelector } from 'react-redux'
import styled from "styled-components";

function CheckoutScreen() {
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart
    return (
        <Wrapper>
            <Checkout cartItems={cartItems}/>
        </Wrapper>
    )
}

export default CheckoutScreen

const Wrapper = styled.div`
    display: block;
    position: relative;
    left:10%;
    
`