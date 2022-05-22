import React from "react";
import {
    StyledFooter,
    StyledFooterSocials,
    StyledFooterIcons,
} from "./styled/Footer.styled";
import { FooterLinks } from "./FooterLinks";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export const Footer = () => {
    const footerLinks = [
        {
            title: "Courses",
            links: [
                { text: "Mandarin", href: "/courses/mandarin" },
                { text: "Malay", href: "/courses/malay" },
                { text: "Japanese", href: "/courses/japanese" },
                { text: "Kids course", href: "/courses/kidscourse" },
            ],
        },
        {
            title: "Quick Links",
            links: [
                { text: "Sign up", href: "/register" },
                { text: "Pricing", href: "/pricing" },
                { text: "Contact", href: "/contact" },
            ],
        },
        {
            title: "About",
            links: [
                { text: "About us", href: "/about" },
                { text: "Our teachers", href: "/" },
                { text: "FAQ", href: "/contact" },
            ],
        },
    ];
    return (
        <StyledFooter>
            <StyledFooterSocials>
                <h4>MingoSpace</h4>
                <StyledFooterIcons>
                    <a href="https://www.facebook.com/mingospace">
                        <FaFacebookF className="Footer-icon" />
                    </a>
                    <a href="https://www.instagram.com/mingospace/">
                        <FaInstagram className="Footer-icon" />
                    </a>
                </StyledFooterIcons>
            </StyledFooterSocials>
            {footerLinks.map((fl, i) => (
                <FooterLinks
                    key={`${fl}_${i}`}
                    title={fl.title}
                    links={fl.links}
                />
            ))}
        </StyledFooter>
    );
};
