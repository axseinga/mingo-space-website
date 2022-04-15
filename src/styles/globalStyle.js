import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset};
* {
    box-sizing: border-box;
}
html {
    //font-size: 62.5%;
    font-family: ${({ theme }) => theme.font.fontPoppins};
    font-weight: 500;
    color: ${({ theme }) => theme.color.text};
};
body { 
    box-sizing: inherit;
}
`;
