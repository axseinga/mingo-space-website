import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledFooter = styled.footer`
    background-color: ${theme.color.text};
    color: ${theme.color.white};
    padding: 3rem;
    display: flex;
    gap: 7rem;

    h4 + div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
    }

    .Footer-icon {
        color: ${theme.color.white};
        font-size: 1.5rem;
        margin: 0 0.5rem;

        &:hover,
        &:active {
            color: ${theme.color.btnDefault};
        }
    }
`;
