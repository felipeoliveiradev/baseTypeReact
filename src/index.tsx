import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { App } from "./app";
import { AppContext } from "./context";
import { GlobalStyle } from "./styles/global";

ReactDOM.render(
        <ThemeProvider theme={theme} >
          <GlobalStyle />
          <AppContext.Provider>
            <App />
          </AppContext.Provider>
        </ThemeProvider>,
        document.getElementById("root")
      );