import styled from "styled-components";

export const StyledTeachersSection = styled.section`
    padding: 2rem;

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
    }
`;
