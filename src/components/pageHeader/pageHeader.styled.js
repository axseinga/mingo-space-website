import styled from "styled-components";
import { BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from "../../styles/breakpoints";

export const StyledHeader = styled.div`
    margin: 2rem;

    @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
        display: grid;
        grid-template-columns: 50% 50%;
        margin: 5rem;
        place-items: center;
        gap: 0;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;

        & h1 {
            font-family: ${({ theme }) => theme.font.fontLora};
            color: ${({ theme }) => theme.color.black};
            font-size: 2.5rem;
            font-weight: 700;
            line-height: 3.5rem;

            @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
                width: 70%;
            }
        }

        & p {
            width: 90%;
            font-weight: 300;
            font-size: 1.4rem;
            line-height: 2rem;

            & strong {
                font-weight: 600;
            }
        }

        & button {
            @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
                align-self: center;
            }
            @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
                align-self: flex-start;
            }
        }
    }

    & img {
        display: none;
        @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
            display: block;
            width: 90%;
            object-fit: contain;
            margin: 1rem 0;
        }
        @media only screen and (min-width: ${BREAKPOINT_TABLET}) {
            width: 100%;
        }
    }
`;

export const StyledHeaderFeatureBox = styled.div`
    display: flex;
    width: 100%;
    & span {
        padding: 0.3rem 0.5rem;
        border: 1px solid ${({ theme }) => theme.color.border};
        font-size: 0.7rem;
        border-radius: 8px;
        width: max-content;

        &:first-child {
            margin-right: 10px;
        }
    }
`;
