import React, { useContext } from "react";

import { Bars } from "assets/icons";
import { LogoPurple } from "assets/images";
import { AppContext } from "context";
import { ModalsBodyTypes, ModalsHeaderTypes } from "store/sideModal/types";
import { Container, Inner } from "./style";
import { IHeader } from "./types";
export const Header = (props: IHeader) => {
  const { actions, state } = useContext(AppContext.Context);
  const handleCadastro = () => {
    actions.sideModalAction.setOptions({
      body: {
        type: ModalsBodyTypes.REGISTER
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
        <div className="left">
          <img src={LogoPurple} alt="logo" />
        </div>
        <div className="right">
              <nav>
                <li>
                  <a href="#banner">Home</a>
                </li>
                <li>
                  <a href="#vantagens">Vantagens</a>
                </li>
                <li>
                  <a href="#parceiros">Parceiros</a>
                </li>
              </nav>
              <button onClick={handleCadastro} className="icon">
                <img src={Bars} alt="button" />
              </button>
              <button onClick={handleCadastro}>QUERO SER PARCEIRO</button>
        </div>
      </Inner>
    </Container>
  );
};
