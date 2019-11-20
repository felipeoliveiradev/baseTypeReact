import { Arrow } from "assets/icons";
// tslint:disable-next-line: no-duplicate-imports
import { Currency, Store } from "assets/icons";
import { AppContext } from "context";
import React, { useContext } from "react";

import { ModalsBodyTypes, ModalsHeaderTypes, ModalsIcon } from "store/sideModal/types";
import { Container } from "./style";

type ButtonEvent = React.MouseEvent<HTMLElement>;

export const ChangesHeader = () => {
  const {
    actions: {
      sideModalAction: { setOptions }
    },
    state: {
      sideModal: { options }
    }
  } = useContext(AppContext.Context);
  const handleIcons = () => {
    switch (options.header.icon) {
      case ModalsIcon.CURRENCY:
        return Currency;
      case ModalsIcon.STORE:
        return Store;
      default:
        return Store;
    }
  };
  return (
    <Container>
      <button
        onClick={(e: ButtonEvent) => {
          setOptions({
            ...options,
            body: {
              type: ModalsBodyTypes.PROFILE
            },
            header: {
              type: ModalsHeaderTypes.DEFAULT
            },
            title: "perfil"
          });
        }}
      >
        <img src={Arrow} alt="arrow" />
      </button>
      <span>
        <img src={handleIcons()} alt="comercial" />
        {options.header.name} {options.header.subName}

      </span>
    </Container>
  );
};
