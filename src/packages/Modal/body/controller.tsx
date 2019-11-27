import { AppContext } from "context";
import React, { useContext } from "react";
import { ModalsBodyTypes } from "store/sideModal/types";
import { DefaultModal } from "./";

export const ModalController = () => {
  const {
    state: {
      sideModal: {
        options: { body }
      }
    }
  } = useContext(AppContext.Context);
  if (body.custom !== undefined) {
    return body.custom;
  } else {
    switch (body.type) {
      case ModalsBodyTypes.DEFAULT:
        return <DefaultModal />;
      default:
        return <></>;
    }
  }
};
