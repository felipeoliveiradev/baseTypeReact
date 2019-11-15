import { AppContext } from "context";
import React, { useContext } from "react";
import {ModalHeaderController } from "./headers/controller";
import { ModalController } from "./options/controller";
import { Container, ContainerBackground } from "./style";
import { IModal } from "./type";

export const Modal = (props: IModal) => {
  const { ...otherProps } = props;
  const {
    actions: {
      sideModalAction: { setToogle }
    },
    state: {
      sideModal: { toogle }
    }
  } = useContext(AppContext.Context);
  return (
    <>
      <ContainerBackground
        stateMoments={toogle.open}
        onClick={() =>
          setToogle({
            ...toogle,
            open: !toogle.open
          })
        }
      />
      <Container stateMoments={toogle.open} {...otherProps}>
          <ModalHeaderController />
          <div className="bottom">
            <ModalController />
          </div>
      </Container>
    </>
  );
};
