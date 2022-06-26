import styled from "styled-components";

export const StyledTextarea = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0;

    & label {
        margin-bottom: 10px;
        font-weight: 700;
    }
    & textarea {
        padding: 1rem;
        border: 1px solid ${({ theme }) => theme.color.line};
        border-radius: 10px;
        font-size: 1.1rem;
    }
`;
