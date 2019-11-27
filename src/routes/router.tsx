import React from "react";
import { Route, Switch } from "react-router-dom";

// import pages
import { Main } from "layout";
import {
  Home,
  // import routers
} from "pages";

// Protect Router

export const Routers = () => {
  return(
    <Main>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* route */}
      </Switch>
    </Main>
  );
};
