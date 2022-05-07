import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHomePage = styled.div``;

export const StyledClassesSection = styled.section`
    padding: 2rem;

    & h2 {
        font-family: ${({ theme }) => theme.font.fontLora};
        color: ${({ theme }) => theme.color.black};
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.5rem;
        margin-bottom: 2rem;
    }

    & h3 {
        font-size: 1.2rem;
        font-weight: 700;
        line-height: 1.8rem;

        margin-top: 1.5rem;
    }

    & p {
        margin: 1.5rem 0;
        font-weight: 300;
        font-size: 1.1rem;
        line-height: 1.4rem;
    }

    & img {
        width: 100%;
        object-fit: cover;
        margin-bottom: 2rem;
        box-shadow: ${({ theme }) => theme.shadow};
    }
`;

export const StyledRegisterSection = styled.section`
    background-color: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.white};
    text-align: center;
    padding: 6rem 0;

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

export const StyledFAQSection = styled.section`
    padding: 2rem;
    background-color: ${({ theme }) => theme.color.bg};

    & h2 {
        font-family: ${({ theme }) => theme.font.fontLora};
        color: ${({ theme }) => theme.color.black};
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.5rem;
        margin-top: 2rem;
    }

    & > div {
        border-bottom: 1px solid ${({ theme }) => theme.color.line};

        &:first-child {
            border-top: 1px solid ${({ theme }) => theme.color.line};
        }
    }
`;

export const StyledNavLinkRegister = styled(NavLink)``;
