import { Footer, Header } from "layout";
import { Modal } from "packages";
import React from "react";
import TagManager from "react-gtm-module";
import { BrowserRouter as Router } from "react-router-dom";
import { Routers } from "routes/router";
export const App: React.FunctionComponent = () => {
  const tagManagerArgs = {
    gtmId: `${process.env.REACT_APP_GTM_ID}`
  };
  TagManager.initialize(tagManagerArgs);
  return (
    <>
      <Header />
      <Modal />
      <Router>
        <Routers />
      </Router>
      <Footer />
    </>
  );
};
