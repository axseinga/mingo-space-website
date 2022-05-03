import styled from "styled-components";

export const StyledHeader = styled.div`
    padding: 1rem 2rem;

    @media only screen and (min-width: 37.5em) {
        display: flex;
    }

    & h1 {
        font-family: ${({ theme }) => theme.font.fontLora};
        color: ${({ theme }) => theme.color.black};
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 3.5rem;
    }

    & p {
        margin: 1rem 0;
        width: 90%;
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 2rem;

        & strong {
            font-weight: 600;
        }
    }

    & button {
        margin-top: 1.5rem;
    }

    & img {
        display: none;
        @media only screen and (min-width: 37.5em) {
            display: block;
            width: 90%;
            object-fit: cover;
        }
    }
`;
