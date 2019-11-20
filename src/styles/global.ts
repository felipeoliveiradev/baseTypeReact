import { fonts } from "helper";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

${fonts("Nunito", "woff2")};

 #root{
   position: relative !important;
   width: 100%;
   display: flex;
  flex-direction: column;
 }

  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-y: auto;
    font-family: 'Nunito', sans-serif;
    scroll-behavior: smooth;
  }
`;
