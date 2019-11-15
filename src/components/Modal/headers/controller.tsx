import { AppContext } from "context";
import React, { useContext } from "react";
import { DefaultHeader } from "./";

export const ModalHeaderController = () => {
  const {
    state: {
      sideModal: {
        toogle: { header }
      }
    }
  } = useContext(AppContext.Context);

  switch (header) {
        default:
        return <DefaultHeader />;
    }
};
