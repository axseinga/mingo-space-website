import styled from "styled-components";
import { BREAKPOINT_MOBILE } from "../../styles/breakpoints";

export const StyledPoliciesSection = styled.section`
    padding: 2rem;
    background-color: ${({ theme }) => theme.color.bg};

    & h2 {
        font-family: ${({ theme }) => theme.font.fontLora};
        color: ${({ theme }) => theme.color.text};
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.5rem;
    }

    & > p {
        margin: 1.5rem 0;
        font-weight: 300;
        font-size: 1.1rem;
        line-height: 1.4rem;
    }

    & > div {
        @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            gap: 1rem;
        }
    }
`;
