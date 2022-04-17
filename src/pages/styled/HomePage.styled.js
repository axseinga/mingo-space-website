import styled from "styled-components";

export const StyledHomePage = styled.div``;

export const StyledHeader = styled.div`
    padding: 1rem 2rem;

    @media only screen and (min-width: 37.5em) {
        display: flex;
    }

    & h1 {
        font-family: ${({ theme }) => theme.font.fontLora};
        color: ${({ theme }) => theme.color.black};
        font-size: 3rem;
        font-weight: 700;
        line-height: 4rem;
    }

    & p {
        margin: 1rem 0;
        width: 80%;
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 1.9rem;

        & strong {
            font-weight: 600;
        }
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
