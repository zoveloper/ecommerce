import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMenuContext } from "../../state";

export const links = ["shop", "works","about"];

const DesktopNavLinks = () => {
  const { closeMenu } = useMenuContext();

  return (
    <NavLinksWrapper className="nav-links">
      {links.map((link) => (
        <li key={link}>
          <NavLink to={`/${link}`} className="link" onClick={closeMenu}>
            {link}
          </NavLink>
        </li>
      ))}
    </NavLinksWrapper>
  );
};

export default DesktopNavLinks;

const NavLinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 30px;
  li{
    margin-top:20px;
  }
  
  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    li {
      font: red;
      padding: 12px;
      margin: 0 !important;
    }
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  margin-top: 30px;
  color: white;
  text-decoration: none;
  text-transform: capitalize;
  color: var(--text);
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 1.7px;
    width: 0;
    background: var(--text);
    transition: width 150ms linear;
  }
  &:hover::before {
    width: 100%;
  }
`;