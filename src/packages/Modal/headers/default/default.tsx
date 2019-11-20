import {Close} from "assets/icons";
import { AppContext } from "context";
import React, { useContext } from "react";

import { Container } from "./style";

type ButtonEvent = React.MouseEvent<HTMLElement>;

export const DefaultHeader = () => {
  const {
    actions: {
      sideModalAction: { setOptions }
    },
    state: {
      sideModal: { options }
    }
  } = useContext(AppContext.Context);

  return (
    <Container>
          <div />
          <h3>{options.title}</h3>
      <button onClick={(e: ButtonEvent) => {
              setOptions({
                ...options,
                state: !options.state
              });
            }}
          >
            <img src={Close} alt="closed" />
      </button>
   </Container>
  );
};
