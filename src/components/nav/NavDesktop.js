import React from "react";
import {
    StyledNavDesktop,
    StyledNavLinkDesktop,
} from "./styled/NavDesktop.styled";
import { Button } from "../button/Button";
import { BsChevronDown } from "react-icons/bs";

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
            class: "NavDesktop-courses",
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
                        <>
                            <li key={link.href} className={link.class}>
                                <StyledNavLinkDesktop to={link.href}>
                                    {link.text}{" "}
                                    {link.subNav && (
                                        <BsChevronDown className="NavDesktop-icon" />
                                    )}
                                </StyledNavLinkDesktop>
                            </li>
                            {link.subNav && (
                                <div className="NavDesktop-dropdown">
                                    {link.subNav.map((sub) => (
                                        <li>
                                            <StyledNavLinkDesktop to={sub.href}>
                                                {sub.text}{" "}
                                            </StyledNavLinkDesktop>
                                        </li>
                                    ))}{" "}
                                </div>
                            )}
                        </>
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
