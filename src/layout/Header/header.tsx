import React, { useContext } from "react";

import {Bars, Profile} from "assets/icons";
import {LogoPurple} from "assets/images";
import { AppContext } from "context";
import { Modals } from "store/sideModal/types";
import { Container, Inner } from "./style";
import { IHeader } from "./types";
export const Header = (props: IHeader) => {
  const { actions, state } = useContext(AppContext.Context);
  const session = sessionStorage.getItem("adal.idtoken");

  const handleExemplo = () => {
    actions.sideModalAction.setToogle({
      open: !state.sideModal.toogle.open,
      title: "Exemplo",
      type: Modals.DEFAULT
    });
  };
  return (
    <Container >
      <Inner>
        <div className="left">
          <img src={LogoPurple} alt="logo" />
        </div>
        <div className="right">
          {(session && (
            <button onClick={handleExemplo} className="logado">
              <img src={Profile} alt="button" />
              <label>Exemplo</label>
            </button>
          )) || (
            <>
              <nav>
                <li>
                  <a href="#banner">Home</a>
                </li>
              </nav>
              <button onClick={handleExemplo} className="icon">
                <img src={Bars} alt="button" />
              </button>
              <button onClick={handleExemplo}>
               Exemplo Botao
              </button>
            </>
          )}
        </div>
      </Inner>
    </Container>
  );
};
