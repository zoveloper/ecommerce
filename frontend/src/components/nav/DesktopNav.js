import React from "react";
import styled from "styled-components";

import NavLinks from "./NavLinks";
import Logo from './Logo'


const DesktopNavbar = () => {

  return (
    <Navbar>
      <DesktopNav >
      <Logo/>
      <NavLinks />
      </DesktopNav>
    </Navbar>
  );
};

export default DesktopNavbar;

const Navbar = styled.div`
display: block;
position: static;
width: 185px;
height: 100vh;
@media screen and (max-width: 768px) {
  justify-content: space-between;
  padding: 0 30px;
  display: none;

`
const DesktopNav = styled.div`
  display: block;
  width: 185px;
  height: 100vh;
  align-items: center;
  background: var(--bg);
  color: var(--text);
  transition: all 150ms linear;
  position: fixed;
  top: 0;
  left: 0;
  
  padding: 0 60px;
  background: pink;
  z-index: 2;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 0 30px;
    display: none;
  }
  
  .Logo{
    display: block;
    position: fixed;
    
  }
  
  .nav-links {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  
`;


