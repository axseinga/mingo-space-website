import styled from "styled-components";
import { BREAKPOINT_TABLET } from "../../styles/breakpoints";

export const StyledRegisterForm = styled.form`
    margin: 2rem;
    display: flex;
    flex-direction: column;

    & > * {
        width: 100%;
        max-width: 500px;
        align-self: center;
    }

    & button {
        align-self: center;
    }
`;

export const RowWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }
`;
