import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
${reset};
* {
    box-sizing: border-box;
}
html {
    //font-size: 62.5%;
    font-family: ${theme.font.fontPoppins};
    font-weight: 500;
    color: ${theme.color.text}
};
body { 
    box-sizing: inherit;
}
`;
