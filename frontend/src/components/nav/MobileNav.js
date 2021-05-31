import React from "react";
import styled from "styled-components";
import { useMenuContext } from "../../state";
import { useScrollFreeze } from "../../hooks";
import NavLinks from "./NavLinks";
import { Squash as Hamburger } from "hamburger-react";

const MobileNavbar = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext();
  useScrollFreeze(isMenuOpen);



  return (
    <>
      { isMenuOpen  && (
        <MobileNav>
          <NavLinks />
          
        </MobileNav>
      )}
      <Toggle>
       <Hamburger toggled={isMenuOpen} toggle={toggleMenu} duration={1} />
    </Toggle>
    </>
  );
};

export default MobileNavbar;

const MobileNav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 89;
  transition: .5s ease;
  
  @media screen and (min-width: 768px) {
    display: none;
  }
  
`;
const Toggle = styled.div`
.hamburger-react {
  display: none;
  z-index: 99;
  & > div > div {
    background: var(--text) !important;
    
  }
  @media screen and (max-width: 768px) {
    display: block;
    position: fixed;
    right: 5%;
    top: 5%;
  }
}
`

   /* //Mobile Mode
  const [isMobile,setIsMobile]=useState(false)
  useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < 768) setIsMobile(true);
      else setIsMobile(false)
    }

    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  });
  */