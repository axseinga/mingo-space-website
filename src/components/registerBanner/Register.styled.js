import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledRegisterSection = styled.section`
    background-color: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.white};
    text-align: center;
    padding: 6rem 0;

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
    }
`;

export const StyledNavLinkRegister = styled(NavLink)``;
