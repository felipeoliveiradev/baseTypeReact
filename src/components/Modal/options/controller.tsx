import { AppContext } from "context";
import React, { useContext } from "react";
import { DefaultModal } from "./";

export const ModalController = () => {
  const {
    state: {
      sideModal: {
        toogle: { type }
      }
    }
  } = useContext(AppContext.Context);

  switch (type) {
    default:
      return <DefaultModal />;
  }
};
