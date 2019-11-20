import React from "react";
import { Route, Switch } from "react-router-dom";

// import pages
import {
  Home,
  // import routers
} from "../pages";
import { Main } from "./styles";

// Protect Router

export const Routers = () => {
  return(
    <Main>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Main>
  );
};
