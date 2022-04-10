import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledFooterLinks = styled.div`
    h4 {
        font-weight: 600;
        font-size: 1.1rem;
    }

    li {
        margin: 1rem 0;
    }
`;

export const StyledNavLinkFooter = styled(NavLink)`
    font-weight: 400;
    color: ${theme.color.white};
    text-decoration: none;

    &:active,
    &:hover {
        color: ${theme.color.btnDefault};
    }
`;
