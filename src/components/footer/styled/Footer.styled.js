import styled from "styled-components";
import {
    BREAKPOINT_MOBILE,
    BREAKPOINT_TABLET,
} from "../../../styles/breakpoints";

export const StyledFooter = styled.footer`
    width: 100%;
    padding: 2rem;
    background-color: ${({ theme }) => theme.color.text};
    color: ${({ theme }) => theme.color.white};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin: 0 auto;

    @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
        padding: 3rem;
        display: flex;
        gap: 5rem;
    }

    @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
        width: 100%;
    }
`;

export const StyledFooterSocials = styled.div``;

export const StyledFooterIcons = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;

    .Footer-icon {
        color: ${({ theme }) => theme.color.white};
        font-size: 1.5rem;
        margin: 0 0.5rem;

        &:hover,
        &:active {
            color: ${({ theme }) => theme.color.btnDefault};
        }
    }
`;
