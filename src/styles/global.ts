import { fonts } from "helper";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

${fonts("Nunito", "woff2")};

 #root{
   position: absolute !important;
   width: 100%;
 }

  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-y: auto;
    font-family: 'Nunito', sans-serif;
    scroll-behavior: smooth
  }
[style="visibility: hidden; position: absolute; width: 100%; top: -10000px; left: 0px; right: 0px; transition: visibility 0s linear 0.3s, opacity 0.3s linear; opacity: 0;"]{
  display: none !important;
}
 .grecaptcha-badge{
    display:none !important;
  }
`;
