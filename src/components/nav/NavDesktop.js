import React from "react";
import {
    StyledNavDesktop,
    StyledNavLinkDesktop,
} from "./styled/NavDesktop.styled";
import { Button } from "../button/Button";

export const NavDesktop = () => {
    const navLinks = [
        {
            text: "Courses",
            href: "/courses",
            subNav: [
                { text: "Mandarin", href: "/courses/mandarin" },
                { text: "Malay", href: "/courses/malay" },
                { text: "Japanese", href: "/courses/japanese" },
                { text: "Kids course", href: "/courses/kidscourse" },
            ],
        },
        { text: "Pricing", href: "/pricing" },
        { text: "About", href: "/about" },
        { text: "Resources", href: "/resources" },
        { text: "Contact", href: "/contact" },
    ];

    return (
        <StyledNavDesktop>
            <StyledNavLinkDesktop to={"/"}>
                <img
                    src="./assets/logo_mingospace.png"
                    alt="Mingo Space logo"
                />
            </StyledNavLinkDesktop>
            <div>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <StyledNavLinkDesktop to={link.href}>
                                {link.text}
                            </StyledNavLinkDesktop>
                        </li>
                    ))}
                </ul>
                <StyledNavLinkDesktop to="/register">
                    <Button
                        type="button"
                        default
                        onClick={() => console.log("clicked btn")}
                    >
                        Register now
                    </Button>
                </StyledNavLinkDesktop>
            </div>
        </StyledNavDesktop>
    );
};