import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }
`;
