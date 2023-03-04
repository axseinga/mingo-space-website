import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PagesRoutes } from "./routes/Routes";
import { ThemeProvider } from "styled-components";
import { StyledApp } from "./styles/App.styled";
import { GlobalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";
import { BackLink } from "./components/backlink/BackLink";
import { Layout } from "./components/layout/Layout";

const App = () => {
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
