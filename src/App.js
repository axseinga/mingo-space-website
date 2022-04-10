import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { StyledApp } from "./App.styled";
import { GlobalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";
import { NavDesktop } from "./components/nav/NavDesktop";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <StyledApp>
                <GlobalStyle />
                <BrowserRouter>
                    <NavDesktop />
                </BrowserRouter>
            </StyledApp>
        </ThemeProvider>
    );
};

export default App;
