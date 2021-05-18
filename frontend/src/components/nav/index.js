import React from "react";
import styled from "styled-components";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Squash as Hamburger } from "hamburger-react";
import { useMenuContext } from "../../state";

const Navbar = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext();
  return (
    <Nav>
      <DesktopNav />
      <MobileNav />
      <Hamburger toggled={isMenuOpen} toggle={toggleMenu} duration={0} />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  display: flex;
  flex-flow: column nowrap;


  .hamburger-react {
    display: none;
    z-index: 99;
    & > div > div {
      background: var(--text) !important;
      
    }
    @media screen and (max-width: 768px) {
      display: flex;
      position: fixed;

    }
  }
`;