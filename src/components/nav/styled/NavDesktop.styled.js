import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavDesktop = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1rem 3rem;

    & img {
        width: 10rem;
    }

    & > div {
        display: flex;
        align-items: center;
        justify-content: center;

        & ul {
            display: flex;
            align-items: center;

            & li {
                margin: 0 2rem;
                & a {
                    color: ${({ theme }) => theme.color.text};
                    text-decoration: none;
                }
            }
        }

        & button {
            margin-left: 1.5rem;
        }
    }
`;

export const StyledNavLinkDesktop = styled(NavLink)`
    font-weight: 400;
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;

    &:active,
    &:hover {
        color: ${({ theme }) => theme.color.btnDefault};
    }
`;
