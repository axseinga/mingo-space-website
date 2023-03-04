import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { PagesRoutes } from "./routes/Routes";
import { ThemeProvider } from "styled-components";
import { StyledApp } from "./styles/App.styled";
import { GlobalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";
import { NavDesktop } from "./components/nav/NavDesktop";
import { NavMobile } from "./components/nav/NavMobile";
import { Footer } from "./components/footer/Footer";
import { BackLink } from "./components/backlink/BackLink";
import { Layout } from "./components/layout/Layout";

const App = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakPoint = 900;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <GlobalStyle />
        <BrowserRouter>
          <Layout>
            <PagesRoutes />
          </Layout>
          <BackLink />
        </BrowserRouter>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
