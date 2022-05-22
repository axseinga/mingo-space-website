import styled from "styled-components";
import { BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from "../../styles/breakpoints";

export const StyledTestimonialsSection = styled.section`
    margin: 1rem 2rem;

    @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
        text-align: center;
    }

    & h2 {
        font-family: ${({ theme }) => theme.font.fontLora};
        color: ${({ theme }) => theme.color.black};
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
        display: grid;
        place-items: center;
        margin-bottom: 2.5rem;
        margin-top: 3.5rem;

        @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            gap: 2rem;
            margin-bottom: 1rem;
        }

        @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
            grid-template-columns: repeat(4, 1fr);
        }
    }
`;
