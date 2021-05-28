import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {IconButton,Badge} from '@material-ui/core'
import styled from "styled-components";
function CartIcon() {
    return (
        <IconWrapper>
        <IconButton arial-label="Show cart items" color="inherit">
            <Badge badgeContent={2} color ="secondary">
                <ShoppingCartIcon/>
            </Badge>
        </IconButton>
        </IconWrapper>
    )
}

export default CartIcon

const IconWrapper = styled.div`
display: block;
position: fixed;
right: 1%;
bottom: 50%;

@media screen and (max-width: 768px) {
    display: block;
    right: 6%;
    top: 12%;
}
`