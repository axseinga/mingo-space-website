import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledPriceCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: ${({ theme }) => theme.shadow};
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 10px;
    height: min-content;
    margin: 2rem;
    gap: 1.2rem;
    padding: 3rem 2rem;
    max-width: 350px;

    & h2 {
        font-family: ${({ theme }) => theme.font.fontPoppins};
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 2.5rem;
    }

    & span {
        font-weight: 700;
        font-size: 2.5rem;
        display: block;
    }

    & p {
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.4rem;

        & strong {
            font-weight: 600;
        }
    }
`;

export const StyledNavLinkPrice = styled(NavLink)``;
