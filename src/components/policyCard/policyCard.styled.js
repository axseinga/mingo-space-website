import styled from "styled-components";
import { BREAKPOINT_MOBILE } from "../../styles/breakpoints";

export const StyledPolicyCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: 10px;
    margin: 2rem 0;
    padding: 2.5rem 1.5rem;
    justify-items: center;
    gap: 1rem;
    max-width: 330px;
    height: 270px;

    @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
        margin: 0.5rem;
    }

    & img {
        width: 1.8rem;
        height: auto;
    }

    & h3 {
        font-weight: 700;
        text-align: left;
        font-size: 1.3rem;
    }

    & p {
        line-height: 1.4rem;
        font-size: 0.9rem;
        font-weight: 300;
    }
`;
