import styled from "styled-components";

export const StyledAccordion = styled.div`
    padding: 0.5rem 0;
    font-weight: 300;

    & div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 0;
        font-size: 1.2rem;

        & button {
            background-color: transparent;
            border: none;
            & img {
                width: 2.5rem;
            }
        }
    }

    & p {
        margin-top: 1rem;
        line-height: 1.6rem;
    }
`;
