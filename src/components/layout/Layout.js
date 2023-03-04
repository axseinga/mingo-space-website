import React from "react";
import { StyledLayout } from "./Layout.styled";
import { NavMobile } from "../nav/NavMobile";
import { Footer } from "../footer/Footer";

export const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <NavMobile />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
};
