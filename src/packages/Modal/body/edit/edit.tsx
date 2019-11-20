import { AppContext } from "context";
import React, { useContext } from "react";
import { ModalsFields } from "store/sideModal/types";
import { CellPhoneType, EmailType, NameType } from "./options";

export const EditModal = () => {
  const {
    state: {
      sideModal: {
        options: { body: { field } }
      }
    }
  } = useContext(AppContext.Context);
  if (field) {
    switch (field) {
      case ModalsFields.CELLPHONE:
        return <CellPhoneType />;
      case ModalsFields.NAME:
        return <NameType />;
      case ModalsFields.EMAIL:
        return <EmailType />;
      default:
        return <></>;
    }
  } else {
    return <></>;
  }
};
