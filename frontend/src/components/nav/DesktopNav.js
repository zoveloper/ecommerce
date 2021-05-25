import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMenuContext } from "../../state";
import NavLinks from "./NavLinks";


const DesktopNavbar = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext();


  console.log(isMenuOpen)
  console.log(toggleMenu)
  return (
    <Navbar>
      <DesktopNav >
      <Link to="/" className="logo">
        Logo
      </Link>
      <NavLinks />
      
      </DesktopNav>
    </Navbar>
  );
};

export default DesktopNavbar;

const Navbar = styled.div`
display: block;
position: static;
width: 200px;
height: 100vh;
@media screen and (max-width: 768px) {
  justify-content: space-between;
  padding: 0 30px;
  display: none;

`
const DesktopNav = styled.div`
  display: block;
  width: 200px;
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

  .logo {
    position: fixed;
    color: var(--text);
    font-size: 32px;
  }
  .nav-links {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  
`;