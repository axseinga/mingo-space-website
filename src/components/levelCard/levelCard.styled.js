import styled from "styled-components";

export const StyledLevelCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.color.border};
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 10px;
    height: min-content;
    margin: 2rem 0;
`;
