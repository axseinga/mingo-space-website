import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledCoursesSection = styled.section`
    margin: 3rem 0;
    padding: 2rem;
    background-color: ${({ bgColor }) => bgColor};

    & h2 {
        font-family: ${({ theme }) => theme.font.fontLora};
        color: ${({ theme }) => theme.color.black};
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.5rem;
    }

    & p {
        margin: 1.5rem 0;
        font-weight: 300;
        font-size: 1.1rem;
        line-height: 1.4rem;
    }

    & div + div div {
        background-color: ${({ theme }) => theme.color.black};
        border-radius: 10px;
        height: max-content;
        position: relative;
        margin: 1rem 0;

        & img {
            width: 100%;
            display: block;
            height: auto;
            border-radius: 10px;
            opacity: 0.7;
        }

        & span {
            font-size: 1.5rem;
            font-weight: 700;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 100;
        }
    }
`;

export const StyledNavLinkCourses = styled(NavLink)`
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
`;
