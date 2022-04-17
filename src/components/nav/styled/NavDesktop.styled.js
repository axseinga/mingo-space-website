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

        & > ul {
            display: flex;
            align-items: center;
            position: relative;

            & li {
                margin: 0 2rem;
                & a {
                    color: ${({ theme }) => theme.color.text};
                    text-decoration: none;
                    display: flex;
                    align-items: center;

                    & .NavDesktop-icon {
                        margin-left: 10px;
                        transform: translateY(1px);
                        transition: all 0.5s;
                    }
                }
            }

            & > div {
                background-color: ${({ theme }) => theme.color.white};
                color: ${({ theme }) => theme.color.text};
                position: absolute;
                display: flex;
                flex-direction: column;
                top: 30px;
                left: 0px;
                border-radius: 5px;
                box-shadow: 6px 4px 10px -2px rgba(0, 0, 0, 0.59);
                display: none;

                & li {
                    margin: 0.5rem;
                    padding: 0.5rem 1.5rem;
                }
            }
        }

        & button {
            margin-left: 1.5rem;
        }
    }

    .NavDesktop-courses:hover .NavDesktop-icon {
        transform: rotate(180deg);
        display: block;
    }

    .NavDesktop-courses:hover + .NavDesktop-dropdown {
        display: block;
    }

    .NavDesktop-dropdown:hover .NavDesktop-dropdown {
        display: block;
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
