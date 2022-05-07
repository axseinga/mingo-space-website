import styled from "styled-components";

export const StyledAboutCourse = styled.section`
    padding: 2rem;
    & h3 {
        font-size: 1.2rem;
        font-weight: 700;
        line-height: 1.8rem;

        margin-top: 1.5rem;
    }

    & p {
        margin: 1.5rem 0;
        font-weight: 300;
        font-size: 1.1rem;
        line-height: 1.4rem;
    }

    & img {
        width: 100%;
        object-fit: cover;
        margin-bottom: 2rem;
        box-shadow: ${({ theme }) => theme.shadow};
    }
`;
