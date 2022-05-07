import React, { useState } from "react";
import { Button } from "../button/Button";
import {
    StyledNavMobile,
    StyledNavLinkMobile,
} from "./styled/NavMobile.styled";

export const NavMobile = () => {
    const [showMenu, setShowMenu] = useState(false);

    const navLinks = [
        { text: "Courses", href: "/courses" },
        { text: "Pricing", href: "/pricing" },
        { text: "About", href: "/about" },
        { text: "Resources", href: "/resources" },
        { text: "Contact", href: "/contact" },
    ];

    return (
        <StyledNavMobile>
            <div className="NavMobile-nav">
                <a href="/">
                    <img src="/assets/logo_mingospace.png" alt="Mingo Space" />
                </a>
                <div
                    className="NavMobile-hamburger"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <div></div>
                </div>
            </div>
            {showMenu && (
                <div className="NavMobile-menu">
                    <ul>
                        {navLinks.map((link) => (
                            <li
                                key={link.href}
                                onClick={() => setShowMenu(false)}
                            >
                                <StyledNavLinkMobile to={link.href}>
                                    {link.text}
                                </StyledNavLinkMobile>
                            </li>
                        ))}
                    </ul>
                    <StyledNavLinkMobile to="/register">
                        <Button
                            type="button"
                            default
                            onClick={() => setShowMenu(false)}
                        >
                            Register now
                        </Button>
                    </StyledNavLinkMobile>
                </div>
            )}
        </StyledNavMobile>
    );
};
