import { AppContext } from "context";
import {ModelBody} from "customs/modal/body";
import React, { useContext } from "react";
import { ModalsHeaderTypes } from "store/sideModal/types";
import { Container, Inner } from "./style";
import { IHeader } from "./types";
export const Header = (props: IHeader) => {
  const { actions, state } = useContext(AppContext.Context);
  const handleModal = () => {
    actions.sideModalAction.setOptions({
      body: {
        custom:  <ModelBody/>
      },
      header: {
        type: ModalsHeaderTypes.DEFAULT
      },
      state: !state.sideModal.options.state
    });
  };
  return (
    <Container>
      <Inner>
        <div>Flup</div>
        <div onClick={handleModal} />
      </Inner>
    </Container>
  );
};
