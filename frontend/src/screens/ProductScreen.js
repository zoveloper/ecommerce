import React from 'react'
import styled from "styled-components";
import products from '../products'

function ProductScreen({match}) {
    const product = products.find((p) => p._id === match.params.id)

    return (
        <ProudctDetail>
            {product.name}
        </ProudctDetail>
    )
}

export default ProductScreen

const ProudctDetail = styled.div`
    display: flex;
    height: 100vh;
`