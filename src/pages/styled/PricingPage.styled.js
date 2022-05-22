import styled from "styled-components";
import { BREAKPOINT_MOBILE } from "../../styles/breakpoints";

export const StyledPricingPage = styled.div``;

export const StyledPricingCards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2rem;

    @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
    }
`;
