import React, { useState } from "react";
import { Button } from "../button/Button";
import {
  StyledNav,
  NavBar,
  NavMenu,
  NavBurgerButton,
  StyledNavLinkMobile,
} from "./Nav.styled";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navLinks = [
    { text: "Courses", href: "/courses" },
    { text: "Pricing", href: "/pricing" },
    { text: "About", href: "/about" },
    { text: "Resources", href: "/resources" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <StyledNav>
      <NavBar>
        <Link to="/" role="navigation" aria-label="Go to homepage">
          <img src="/assets/logo_mingospace.png" alt="Mingo Space" />
        </Link>
        <NavBurgerButton
          onClick={() => setIsNavOpen(!isNavOpen)}
          isNavOpen={isNavOpen}
        >
          <span>&nbsp;</span>
        </NavBurgerButton>
        <NavMenu isNavOpen={isNavOpen}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href} onClick={() => setIsNavOpen(false)}>
                <StyledNavLinkMobile to={link.href}>
                  {link.text}
                </StyledNavLinkMobile>
              </li>
            ))}
          </ul>
          <StyledNavLinkMobile to="/register">
            <Button type="button" default onClick={() => setIsNavOpen(false)}>
              Register now
            </Button>
          </StyledNavLinkMobile>
        </NavMenu>
      </NavBar>
    </StyledNav>
  );
};
