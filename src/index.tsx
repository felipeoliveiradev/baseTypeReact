import React from "react";
import { runWithAdal } from "react-adal";
import ReactDOM from "react-dom";
import { App } from "./app";
import { authContext } from "./config/auth/adal";
import { AppContext } from "./context";
import { GlobalStyle } from "./styles/global";
const DO_NOT_LOGIN = true;
runWithAdal(authContext, () => {

ReactDOM.render(
        <>
          <GlobalStyle />
          <AppContext.Provider>
            <App />
          </AppContext.Provider>
        </>,
        document.getElementById("root")
      );

}, DO_NOT_LOGIN);