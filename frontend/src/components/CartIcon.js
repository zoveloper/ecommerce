import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {IconButton,Badge} from '@material-ui/core'
import styled from "styled-components";
function CartIcon() {
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    const totalqty=cartItems.map(qty =>qty.qty)
    const qtysum = totalqty.reduce((total, current)=> total + current,0);

    return (
        <IconWrapper>
        <Link to = {`/cart`}>
        <IconButton  arial-label="Show cart items" color="inherit">
            <Badge badgeContent={qtysum} color ="secondary">
                <ShoppingCartIcon/>
            </Badge>
        </IconButton>
        </Link>
        </IconWrapper>
    )
}

export default CartIcon

const IconWrapper = styled.div`
display: block;
position: fixed;
right: 1%;
bottom: 50%;
z-index: 90;

@media screen and (max-width: 768px) {
    display: block;
    right: 6%;
    top: 12%;
}
`