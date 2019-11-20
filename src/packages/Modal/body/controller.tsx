import { AppContext } from "context";
import React, { useContext } from "react";
import { ModalsBodyTypes } from "store/sideModal/types";
import { EditModal, PerfilModal, RegisterModal } from "./";

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
      case ModalsBodyTypes.REGISTER:
        return <RegisterModal />;
      case ModalsBodyTypes.PROFILE:
        return <PerfilModal />;
      case ModalsBodyTypes.EDIT:
        return <EditModal />;
      default:
        return <></>;
    }
  }
};
