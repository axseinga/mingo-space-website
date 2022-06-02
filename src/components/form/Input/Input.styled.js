import styled from "styled-components";

export const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;

    & label {
        margin-bottom: 10px;
        font-weight: 700;
    }
    & input {
        padding: 1rem;
        border: 1px solid ${({ theme }) => theme.color.line};
        border-radius: 10px;
        font-size: 1.1rem;
    }
`;
