import styled from "styled-components";
import { BREAKPOINT_MOBILE } from "../../styles/breakpoints";

export const StyledHeader = styled.div`
    padding: 1rem 2rem;

    @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    & div {
        display: flex;
        flex-direction: column;

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

            @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
                align-self: center;
            }
        }
    }

    & img {
        display: none;
        @media only screen and (min-width: ${BREAKPOINT_MOBILE}) {
            display: block;
            width: 90%;
            object-fit: contain;
        }
    }
`;

export const StyledHeaderFeatureBox = styled.div`
    & span {
        padding: 0.3rem 0.5rem;
        border: 1px solid ${({ theme }) => theme.color.border};
        font-size: 0.7rem;
        border-radius: 8px;

        &:first-child {
            margin-right: 10px;
        }
    }
`;
