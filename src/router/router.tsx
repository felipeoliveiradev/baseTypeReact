import React from "react";
import { Route, Switch } from "react-router-dom";
import {withAdalLoginApi} from "../config/auth/adal";
// import pages
import { Dashboard, Home } from "../pages";
import { Main } from "./styles";

const ProtectDashboard =  withAdalLoginApi( Dashboard, () => <Home />, (error: Element) => <Home />);

export const Routers = () => {
  return(
    <Main>
      <Switch>
        <Route exact path="/parceiros/" component={Home} />
        <Route path="/parceiros/dashboard" render={() => <ProtectDashboard />}  />
      </Switch>
    </Main>
  );
};

