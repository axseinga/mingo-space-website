import React from "react";
import { StyledLayout } from "./Layout.styled";
import { Nav } from "../nav/Nav";
import { Footer } from "../footer/Footer";

export const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Nav />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
};
