import React from "react";
import { StyledApp } from "./App.styled";
import logo from "../public/assets/logosmall.png";

const App = () => {
    return (
        <StyledApp>
            my App
            <img src={logo} />
        </StyledApp>
    );
};

export default App;
