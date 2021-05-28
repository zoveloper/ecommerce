import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

function Logo() {
    return (
    <LogoWrapper>
        <Link to="/" >
            <Img src={"./logo192.png"} />
        </Link>
    </LogoWrapper>
    )
}

export default Logo
const LogoWrapper = styled.div`
  display: block;
  position: relative;
  
`;

const Img = styled.img`
    
  width: 100px;
  height: : 100px;    
  padding-top:20px;
  
`;