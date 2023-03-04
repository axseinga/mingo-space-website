import React from "react";
import {
  StyledFooter,
  StyledFooterSocials,
  StyledFooterIcons,
} from "./Footer.styled";
import { FooterLinks } from "./FooterLinks";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { footerConfig } from "../../@config/config";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterSocials>
        <h4>{footerConfig.header}</h4>
        <StyledFooterIcons>
          <a href="https://www.facebook.com/mingospace">
            <FaFacebookF className="Footer-icon" />
          </a>
          <a href="https://www.instagram.com/mingospace/">
            <FaInstagram className="Footer-icon" />
          </a>
        </StyledFooterIcons>
      </StyledFooterSocials>
      {footerConfig.links.map((fl, i) => (
        <FooterLinks key={`${fl}_${i}`} title={fl.title} links={fl.links} />
      ))}
    </StyledFooter>
  );
};
