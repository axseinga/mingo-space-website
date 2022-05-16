import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

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
        @media only screen and (min-width: 37.5em) {
            display: block;
            width: 90%;
            object-fit: cover;
        }
    }

    & h2 {
        font-family: ${({ theme }) => theme.font.fontLora};
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 2.5rem;
    }

    & p {
        margin: 1.5rem 0;
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.4rem;

        & span {
            font-weight: 700;
            font-size: 2rem;
            display: block;
            margin-bottom: 1rem;
        }
    }
`;

export const StyledNavLinkRegister = styled(NavLink)``;
