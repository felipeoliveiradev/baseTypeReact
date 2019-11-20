import { AppContext } from "context";
import React, { useContext } from "react";
import { ModalsHeaderTypes } from "store/sideModal/types";
import { ChangesHeader, DefaultHeader } from "./";

export const ModalHeaderController = () => {
  const {
    state: {
      sideModal: {
        options: { header }
      }
    }
  } = useContext(AppContext.Context);
  if (header.custom !== undefined) {
    return header.custom;
  } else {
    switch (header.type) {
      case ModalsHeaderTypes.CHANGES:
        return <ChangesHeader />;
      default:
        return <DefaultHeader />;
    }
  }
};
