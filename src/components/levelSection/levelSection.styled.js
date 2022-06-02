import styled from "styled-components";
import { BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from "../../styles/breakpoints";

export const StyledLevelSection = styled.section`
    margin: 2rem 5rem;

    @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
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
        display: flex;
        flex-direction: column;
        align-items: center;

        @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: auto;
            gap: 2rem;
            margin-bottom: 1rem;
            margin: 0 auto;
        }
    }
`;
