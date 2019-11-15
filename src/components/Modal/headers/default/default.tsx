import {Close} from "assets/icons";
import { AppContext } from "context";
import React, { useContext } from "react";

import { Container } from "./style";

type ButtonEvent = React.MouseEvent<HTMLElement>;

export const DefaultHeader = () => {
  const {
    actions: {
      sideModalAction: { setToogle }
    },
    state: {
      sideModal: { toogle }
    }
  } = useContext(AppContext.Context);

  return (
    <Container>
          <div />
          <h3>{toogle.title}</h3>
      <button onClick={(e: ButtonEvent) => {
              setToogle({
                ...toogle,
                open: !toogle.open
              });
            }}
          >
            <img src={Close} alt="closed" />
      </button>
   </Container>
  );
};
