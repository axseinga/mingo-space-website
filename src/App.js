import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PagesRoutes } from "./routes/Routes";
import { ThemeProvider } from "styled-components";
import { StyledApp } from "./App.styled";
import { GlobalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";
import { NavDesktop } from "./components/nav/NavDesktop";
import { Footer } from "./components/footer/Footer";
import { BackLink } from "./components/backlink/BackLink";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <StyledApp>
                <GlobalStyle />
                <BrowserRouter>
                    <NavDesktop />
                    <PagesRoutes />
                    <Footer />
                    <BackLink />
                </BrowserRouter>
            </StyledApp>
        </ThemeProvider>
    );
};

export default App;
