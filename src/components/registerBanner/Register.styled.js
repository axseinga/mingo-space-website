import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { BREAKPOINT_MOBILE } from "../../styles/breakpoints";

export const StyledRegisterSection = styled.section`
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
    text-align: ${(props) => (props.isCenter ? "center" : "left")};
    padding: 6rem 2rem;

    & img {
        display: none;
        @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
            display: block;
            width: 90%;
            object-fit: cover;
        }
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;

        & h2 {
            font-family: ${({ theme }) => theme.font.fontLora};
            font-size: 1.8rem;
            font-weight: 600;
            line-height: 2.5rem;
        }

        & span {
            font-weight: 700;
            font-size: 2rem;
            display: block;
            font-size: 2.5rem;
        }

        & p {
            font-weight: 300;
            font-size: 1rem;
            line-height: 1.4rem;

            & strong {
                font-weight: 700;
            }
        }
    }
`;

export const StyledNavLinkRegister = styled(NavLink)``;
