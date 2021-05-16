import React,{useState, useEffect} from "react";
import styled from "styled-components";
import { useMenuContext } from "../../state";
import { useScrollFreeze } from "../../hooks";
import NavLinks from "./NavLinks";

const MobileNavbar = () => {
  const { isMenuOpen } = useMenuContext();
  useScrollFreeze(isMenuOpen);
  //Mobile Mode
  const [isMobile,setIsMobile]=useState(false)
  
  useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < 768) setIsMobile(true);
      else setIsMobile(false)
    }

    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  });
  return (
    <>
      {isMenuOpen && isMobile && (
        <MobileNav>
          <NavLinks />
        </MobileNav>
      )}
    </>
  );
};

export default MobileNavbar;

const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: var(--bg);
  display: flex;
  justify-content: center;
  align-items: center;
`;
