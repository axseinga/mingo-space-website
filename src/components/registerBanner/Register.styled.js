import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import {
  BREAKPOINT_DESKTOP,
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
} from "../../styles/breakpoints";

export const StyledRegisterSection = styled.section`
  width: 100%;
  height: 100%;

  @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
    ${(props) =>
      !props.isFull &&
      css`
        padding: 1rem 2rem;
      `};
  }

  @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  @media only screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    background-color: ${({ theme }) => theme.color.bg};
  }

  & img {
    display: none;
    @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const StyledRegisterBannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  text-align: ${(props) => (props.isCenter ? "center" : "left")};
  padding: 6rem 2rem;

  ${(props) =>
    props.isCenter &&
    css`
      align-items: center;
      justify-content: center;
    `}

  ${(props) =>
    props.isDark
      ? css`
          background-color: ${({ theme }) => theme.color.secondary};
          color: ${({ theme }) => theme.color.white};
        `
      : css`
          background-color: ${({ theme }) => theme.color.bg};
          color: ${({ theme }) => theme.color.text};
        `}

        & h2 {
    font-family: ${({ theme }) => theme.font.fontLora};
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.5rem;

    @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
      font-size: 2.2rem;

      ${(props) =>
        props.isLeft &&
        css`
          grid-area: text;
        `}
    }
  }

  & span {
    font-weight: 700;
    font-size: 2rem;
    display: block;
    font-size: 2.5rem;

    @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
      font-size: 2.5rem;
    }
  }

  & p {
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.4rem;

    @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
      font-size: 1.3rem;
    }

    & strong {
      font-weight: 700;
    }
  }
`;

export const StyledNavLinkRegister = styled(NavLink)``;
