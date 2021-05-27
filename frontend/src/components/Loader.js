import React from 'react'
import { Spinner } from 'react-bootstrap'
import styled from "styled-components";

function Loader() {
    return (
        <LoaderWrapper>
        <Spinner
        animation ='border'
        role = 'info'
        style = {{
            height:'60px',
            width:'60px',
            margin:'auto',
            display: 'block'
        }}
        > 
        </Spinner>
        </LoaderWrapper>
    )
}

export default Loader

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    flex-direction: column;
    position:fixed;
    left: 50%;
    top: 40%;
`