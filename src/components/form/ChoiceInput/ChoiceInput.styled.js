import styled from "styled-components";

export const StyledChoiceInput = styled.div`
    margin-bottom: 1rem;

    & p {
        margin: 1rem 0;
    }

    & > div {
        display: grid;
        grid-template-columns: 50% 50%;
    }
`;

export const StyledOption = styled.div`
    margin: 0.5rem;
    & label {
        font-weight: 400;
        margin-left: 5px;
    }
    & input {
        padding: 1rem;
        border: 1px solid ${({ theme }) => theme.color.line};
        border-radius: 10px;
        font-size: 1.1rem;
        cursor: pointer;
    }
`;
