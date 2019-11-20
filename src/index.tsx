import React from "react";
import { runWithAdal } from "react-adal";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { App } from "./app";
import { authContext } from "./config/auth/adal";
import { AppContext } from "./context";
import { GlobalStyle } from "./styles/global";
const DO_NOT_LOGIN = true;
runWithAdal(authContext, () => {

ReactDOM.render(
        <ThemeProvider theme={theme} >
          <GlobalStyle />
          <AppContext.Provider>
            <App />
          </AppContext.Provider>
        </ThemeProvider>,
        document.getElementById("root")
      );

}, DO_NOT_LOGIN);