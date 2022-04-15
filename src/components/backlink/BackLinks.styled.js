import styled from "styled-components";

export const StyledBackLink = styled.div`
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 99;

    .BackLink-icon {
        color: ${({ theme }) => theme.color.btnDefault};
        font-size: 2rem;
        cursor: pointer;

        &:hover,
        &:active {
            animation: up 2s linear infinite;
        }
    }

    @keyframes up {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(15px);
        }
        100% {
            transform: translateY(0px);
        }
    }
`;
