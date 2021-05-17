import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useMenuContext } from "../../state";

import NavLinks from "./NavLinks";
import { useScroll } from "../../hooks";

const DesktopNavbar = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext();
  const { isScrolled } = useScroll();

  console.log(isMenuOpen)
  console.log(toggleMenu)
  return (
    <DesktopNav isScrolled={isScrolled}>
      <Link to="/" className="logo">
        Logo
      </Link>
      <NavLinks />
      
    </DesktopNav>
  );
};

export default DesktopNavbar;

const DesktopNav = styled.nav`
  display: flex;
  flex-flow: column ;
  align-items: center;
  background: var(--bg);
  color: var(--text);
  transition: all 150ms linear;
  ${(props) =>
    props.isScrolled &&
    css`
      background: var(--headerBg);
      box-shadow: var(--headerBoxShadow);
    `}
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100vh;
  padding: 0 60px;
  background: pink;
  z-index: 2;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 0 30px;
    display: none;
  }
  .logo {
    color: var(--text);
    font-size: 32px;
  }
  .nav-links {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  
`;