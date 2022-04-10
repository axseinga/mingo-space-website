import React from "react";
import {
    StyledFooterLinks,
    StyledNavLinkFooter,
} from "./styled/FooterLinks.styled";

export const FooterLinks = ({ title, links }) => {
    return (
        <StyledFooterLinks>
            <h4>{title}</h4>
            <ul>
                {links.map((link, i) => (
                    <li key={`${link.href}_${i}`}>
                        <StyledNavLinkFooter to={link.href}>
                            {link.text}
                        </StyledNavLinkFooter>
                    </li>
                ))}
            </ul>
        </StyledFooterLinks>
    );
};
