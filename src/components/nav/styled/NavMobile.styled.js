import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavMobile = styled.nav`
    position: relative;
    padding: 1rem 1.5rem;
    z-index: 10;

    & .NavMobile-nav {
        display: flex;
        justify-content: space-between;

        & img {
            width: 10rem;
            height: auto;
        }
        .NavMobile-hamburger {
            width: 30px;
            cursor: pointer;
        }

        .NavMobile-hamburger:before,
        .NavMobile-hamburger:after,
        .NavMobile-hamburger div {
            background-color: ${({ theme }) => theme.color.text};
            content: "";
            display: block;
            height: 3px;
            border-radius: 3px;
            margin: 7px 0;
            transition: 0.5s;
        }

        .NavMobile-hamburger:hover:before {
            transform: translateY(10px) rotate(130deg);
        }
        .NavMobile-hamburger:hover:after {
            transform: translateY(-10px) rotate(-130deg);
        }
        .NavMobile-hamburger:hover div {
            transform: scale(0);
        }
    }

    .NavMobile-menu {
        position: absolute;
        top: 60px;
        left: 0;
        width: 100vw;
        padding: 2rem 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: stretch;
        background-color: ${({ theme }) => theme.color.white};
        text-align: center;

        & ul {
            & li {
                margin: 2rem 0;
                padding-bottom: 20px;
                border-bottom: 1px solid ${({ theme }) => theme.color.disabled};
                width: 100%;
            }
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
`;
