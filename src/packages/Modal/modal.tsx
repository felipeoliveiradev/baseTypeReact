import { AppContext } from "context";
import React, { useContext } from "react";
import { ModalController } from "./body/controller";
import { ModalHeaderController } from "./headers/controller";
import { Container, ContainerBackground } from "./style";
import { IModal } from "./type";

export const Modal = (props: IModal) => {
  const { ...otherProps } = props;
  const {
    actions: {
      sideModalAction: { setOptions }
    },
    state: {
      sideModal: { options }
    }
  } = useContext(AppContext.Context);
  return (
    <>
      <ContainerBackground
        stateMoments={options.state}
        onClick={() =>
          setOptions({
            ...options,
            state: !options.state
          })
        }
      />
      <Container stateMoments={options.state} {...otherProps}>
        <ModalHeaderController />
        <div className="bottom">
          <ModalController />
        </div>
      </Container>
    </>
  );
};
