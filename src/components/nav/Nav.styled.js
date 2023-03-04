import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { BREAKPOINT_DESKTOP } from "../../styles/breakpoints";

export const StyledNav = styled.nav`
  padding: 1rem 1.5rem;
  z-index: 99;

  @media only screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    padding: 1rem 2.5rem;
  }
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;

  & img {
    width: 10rem;
    height: auto;
  }

  @media only screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 40% 60%;
    align-items: center;
  }
`;

export const NavBurgerButton = styled.button`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  position: relative;

  @media only screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    display: none;
  }

  & span {
    width: 2rem;
    height: 2px;
    background-color: black;
    position: absolute;
    top: 15px;
    left: 0;

    &:before,
    &:after {
      content: "";
      width: 2rem;
      height: 2px;
      background-color: black;
      display: inline-block;
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &:before {
      top: -0.7rem;
    }

    &:after {
      top: 0.7rem;
    }
  }

  ${({ isNavOpen }) => {
    if (isNavOpen) {
      return css`
        & span {
          background-color: transparent;
        }
        & span:before {
          top: 0;
          transform: rotate(45deg);
        }

        & span:after {
          top: 0;
          transform: rotate(-45deg);
        }
      `;
    }
  }}
`;

export const NavMenu = styled.div`
  display: none;

  ${({ isNavOpen }) => {
    if (isNavOpen) {
      return css`
        position: absolute;
        top: 60px;
        left: 0;
        width: 100vw;
        height: 100vh;
        padding: 2rem 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: stretch;
        background-color: ${({ theme }) => theme.color.white};
        text-align: center;
        justify-content: center;

        & ul {
          & li {
            margin: 2rem 0;
            padding-bottom: 20px;
            border-bottom: 1px solid ${({ theme }) => theme.color.disabled};
            width: 100%;
          }
        }
      `;
    }
  }}

  @media only screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 100%;
    display: flex;
    align-items: center;

    & ul {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
  }
`;

export const StyledNavLinkMobile = styled(NavLink)`
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;

  &:active,
  &:hover {
    color: ${({ theme }) => theme.color.btnDefault};
  }

  @media only screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    font-size: 1rem;
    width: min-content;
    white-space: nowrap;
  }
`;
